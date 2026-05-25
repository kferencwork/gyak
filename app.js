const app = document.querySelector("#app");
const STORAGE_PREFIX = "nagyGyakorlo:";
const SAVE_VERSION = "2026-05-25-v8";
let state = null;
let orderPointer = null;

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const saveKey = (id) => `${STORAGE_PREFIX}${id}`;
const hasSave = (id) => Boolean(readSave(id));
const readSave = (id) => {
  const saved = JSON.parse(localStorage.getItem(saveKey(id)) || "null");
  return saved?.version === SAVE_VERSION ? saved : null;
};
const clearSave = (id) => localStorage.removeItem(saveKey(id));

function icon(name) {
  const paths = {
    home: '<path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
    back: '<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v7h-7"></path>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}

function cardIcon(kind) {
  const paths = {
    main: `
      <rect x="6" y="3" width="12" height="18" rx="2"></rect>
      <path d="M9 7h6"></path>
      <path d="M9 11h1.5"></path><path d="M13 11h2"></path>
      <path d="M9 15h1.5"></path><path d="M13 15h2"></path>
      <path d="M9 19h6"></path>
    `,
    abbr: `
      <path d="M5 19 10 5h2l5 14"></path>
      <path d="M7.2 14h7.6"></path>
      <path d="M17.5 8.5h1.2a2.3 2.3 0 0 1 0 4.6h-1.2"></path>
      <path d="M17.5 13.1h1.6a2.45 2.45 0 0 1 0 4.9h-1.6"></path>
    `,
    topics: `
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"></path>
      <path d="m4 12 8 4.5 8-4.5"></path>
      <path d="m4 16.5 8 4.5 8-4.5"></path>
    `
  };
  return `<svg class="card-bg-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[kind] || paths.main}</svg>`;
}

function topbar(title = "Nagy gyakorló", subtitle = "PDF alapján készült tesztgyakorló") {
  return `
    <div class="topbar">
      <div class="brand">
        <p class="eyebrow">${subtitle}</p>
        <h2>${title}</h2>
      </div>
      <button class="icon-btn" title="Főoldal" onclick="renderHome()">${icon("home")}</button>
    </div>
  `;
}

function getAbbreviationQuestions() {
  return ABBREVIATIONS.map(([abbr, meaning, hu], index) => {
    const displayMeaning = hu ? `${meaning} (${hu})` : meaning;
    const wrong = getAbbreviationDistractors(abbr, meaning, index);
    return {
      topic: "Rövidítések",
      type: "single",
      question: `Mit jelent ez a rövidítés: ${abbr}?`,
      answers: shuffle([displayMeaning, ...wrong.slice(0, 3)]),
      correctText: displayMeaning,
      explanation: `${abbr} = ${displayMeaning}`
    };
  }).map((q) => ({ ...q, correct: [q.answers.indexOf(q.correctText)] }));
}

function getAbbreviationDistractors(abbr, meaning, index) {
  if (typeof ABBR_DISTRACTORS !== "undefined" && ABBR_DISTRACTORS[abbr]) {
    const mapped = ABBR_DISTRACTORS[abbr].filter((item) => item !== meaning);
    if (mapped.length >= 3) return shuffle(mapped);
  }

  const expansion = meaning.split(",")[0];
  const replacements = [
    ["Controller", "Control"], ["Control", "Controller"],
    ["Management", "Managed"], ["Managed", "Management"],
    ["Protocol", "Process"], ["Process", "Protocol"],
    ["Network", "Node Network"], ["Node", "Network"],
    ["Language", "Layer"], ["Layer", "Language"],
    ["System", "Service"], ["Service", "System"],
    ["Data", "Digital Data"], ["Digital", "Data"],
    ["Access", "Address"], ["Address", "Access"],
    ["Resource", "Remote"], ["Remote", "Resource"],
    ["Application", "Automation"], ["Automation", "Application"],
    ["Infrastructure", "Industrial Infrastructure"],
    ["Platform", "Process Platform"],
    ["Software", "System Software"]
  ];

  const variants = replacements
    .filter(([from]) => expansion.includes(from))
    .map(([from, to]) => expansion.replace(from, to));

  if (expansion.includes(" ")) {
    const words = expansion.split(" ");
    variants.push([words[0], ...words.slice(2), words[1]].join(" "));
    variants.push([...words.slice(0, -1), `${words.at(-1)} Control`].join(" "));
  }

  const sameArea = ABBREVIATIONS
    .filter((_, i) => i !== index)
    .map(([, item]) => item.split(",")[0])
    .filter((item) => item.split(" ").some((word) => expansion.includes(word) || word.length <= 3));

  return shuffle([...new Set([...variants, ...sameArea])]).filter((item) => item && item !== meaning);
}

function buildDeck(kind, topic = null) {
  if (kind === "abbr") return shuffle(getAbbreviationQuestions()).map(randomizeQuestionOptions);
  if (kind === "topic") return shuffle(QUESTIONS.filter((q) => q.topic === topic)).map(randomizeQuestionOptions);
  return shuffle([...QUESTIONS]).map(randomizeQuestionOptions);
}

function randomizeQuestionOptions(question) {
  if (question.type !== "single" && question.type !== "multi") {
    return question;
  }

  const originalAnswers = question.answers.map((answer, index) => ({
    answer,
    wasCorrect: question.correct.includes(index)
  }));
  const shuffledAnswers = shuffle(originalAnswers);

  return {
    ...question,
    answers: shuffledAnswers.map((item) => item.answer),
    correct: shuffledAnswers
      .map((item, index) => item.wasCorrect ? index : -1)
      .filter((index) => index !== -1)
  };
}

function modeMeta(kind, topic = null) {
  const id = kind === "topic" ? `topic:${topic}` : kind;
  const label = kind === "main" ? "Fő Teszt" : kind === "abbr" ? "Rövidítések gyakorlása" : topic;
  return { id, label, kind, topic };
}

function startQuiz(kind, topic = null, fromSave = false) {
  const meta = modeMeta(kind, topic);
  const saved = fromSave ? readSave(meta.id) : null;
  state = saved || {
    ...meta,
    version: SAVE_VERSION,
    deck: buildDeck(kind, topic),
    index: 0,
    score: 0,
    answers: [],
    current: null,
    checked: false
  };
  prepareQuestion();
  persist();
  renderQuiz();
}

function prepareQuestion() {
  const q = state.deck[state.index];
  if (!q || state.current) return;
  if (q.type === "match") {
    state.current = {
      choices: shuffle(q.pairs.map((pair) => pair[1])),
      selected: Array(q.pairs.length).fill("")
    };
  } else if (q.type === "order") {
    state.current = { items: shuffle(q.items) };
  } else {
    state.current = { selected: [] };
  }
}

function persist() {
  if (!state) return;
  localStorage.setItem(saveKey(state.id), JSON.stringify(state));
}

function renderHome() {
  state = null;
  const cards = [
    {
      kind: "main",
      title: "Fő Teszt",
      text: "Vegyes gyakorlás a teljes vázlatból: egyválaszos, többválaszos, párosítós és sorrendezős feladatokkal.",
      count: `${QUESTIONS.length} kérdés`
    },
    {
      kind: "abbr",
      title: "Rövidítések",
      text: "A PDF végén szereplő rövidítésekből kérdez: egy rövidítés, négy válaszlehetőség, egy helyes válasz.",
      count: `${ABBREVIATIONS.length} kérdés`
    },
    {
      kind: "topics",
      title: "Külön témakörök",
      text: "Válassz témát, és csak abból gyakorolj: IoT, PLC, hálózat, adatbázis, web, munkavédelem és a többi rész.",
      count: `${TOPICS.length} témakör`
    }
  ];

  app.innerHTML = `
    <section class="hero">
      <div class="mode-grid">
        ${cards.map((card) => modeCard(card)).join("")}
      </div>
    </section>
  `;
}

function modeCard(card) {
  const saveId = card.kind === "topics" ? null : card.kind;
  const saved = saveId && hasSave(saveId);
  const action = saved
    ? `startQuiz('${card.kind}', null, true)`
    : card.kind === "topics"
    ? `renderTopics()`
    : `startQuiz('${card.kind}')`;
  const label = saved ? "Folytatás" : card.kind === "topics" ? "Megnyitás" : "Indítás";
  return `
    <article class="mode-card">
      ${cardIcon(card.kind === "topics" ? "topics" : card.kind)}
      <h3>${card.title}</h3>
      <p>${card.text}</p>
      <div class="card-meta"><span class="pill">${card.count}</span></div>
      <div class="card-actions">
        <button class="primary" onclick="${action}">${label}</button>
      </div>
    </article>
  `;
}

function renderTopics() {
  app.innerHTML = `
    ${topbar("Külön témakörök", "Válassz gyakorlási részt")}
    <div class="topic-grid">
      ${TOPICS.map((topic) => {
        const count = QUESTIONS.filter((q) => q.topic === topic).length;
        const id = `topic:${topic}`;
        return `
          <article class="topic-card">
            <h3>${topic}</h3>
            <p>Csak ebből a témakörből kapsz vegyes típusú feladatokat.</p>
            <div class="card-meta"><span class="pill">${count} kérdés</span></div>
            <div class="card-actions">
              <button class="primary" onclick="startQuiz('topic', '${escapeAttr(topic)}', ${hasSave(id) ? "true" : "false"})">${hasSave(id) ? "Folytatás" : "Indítás"}</button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function escapeAttr(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function renderQuiz() {
  const q = state.deck[state.index];
  if (!q) return renderResults();
  const progress = Math.round((state.index / state.deck.length) * 100);
  const totalPoints = getDeckMaxScore();
  const scorePercent = totalPoints ? Math.round((state.score / totalPoints) * 100) : 0;
  app.innerHTML = `
    <div class="quiz-homebar">
      <button class="icon-btn" title="Főoldal" onclick="renderHome()">${icon("home")}</button>
    </div>
    <section class="quiz-layout">
      <aside class="panel">
        <div class="stats">
          <div class="stat"><span>Haladás</span><strong>${state.index + 1}/${state.deck.length}</strong></div>
          <div class="stat"><span>Pont</span><strong>${state.score}/${totalPoints} (${scorePercent}%)</strong></div>
        </div>
        <div class="progress" style="--value:${progress}%"><span></span></div>
        <button class="danger" onclick="restartQuiz()">${icon("refresh")} Újrakezdés</button>
      </aside>
      <article class="quiz-card">
        <h2 class="question-title">${q.question}</h2>
        ${renderQuestion(q)}
        ${renderFeedback(q)}
        <div class="quiz-actions">
          <span></span>
          ${state.checked
            ? `<button class="primary" onclick="nextQuestion()">${state.index === state.deck.length - 1 ? "Eredmény" : "Következő"}</button>`
            : `<button class="primary" onclick="checkAnswer()">Ellenőrzés</button>`}
        </div>
      </article>
    </section>
  `;
}

function typeLabel(q) {
  const points = `${getQuestionMaxScore(q)} pont`;
  if (q.type === "single") return `1 kérdés, 4 válasz, 1 helyes | ${points}`;
  if (q.type === "multi") return `${q.answers.length} válasz, ${q.correct.length} helyes | ${points}`;
  if (q.type === "match") return `Párosítós feladat | ${points}`;
  return `Sorrendezős feladat | ${points}`;
}

function renderQuestion(q) {
  if (q.type === "single" || q.type === "multi") {
    return `
      <div class="answers">
        ${q.answers.map((answer, i) => {
          const selected = state.current.selected.includes(i);
          const cls = answerClass(q, i, selected);
          return `<button class="answer ${cls}" onclick="toggleAnswer(${i})">${answer}</button>`;
        }).join("")}
      </div>
    `;
  }
  if (q.type === "match") {
    return `
      <div class="match-grid">
        ${q.pairs.map((pair, i) => {
          const cls = matchClass(q, i);
          return `
            <div class="match-row ${cls}">
              <div class="match-left">${pair[0]}</div>
              <select onchange="setMatch(${i}, this.value)" ${state.checked ? "disabled" : ""}>
                <option value="">Válassz...</option>
                ${state.current.choices.map((choice) => `<option value="${choice}" ${state.current.selected[i] === choice ? "selected" : ""}>${choice}</option>`).join("")}
              </select>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
  return `
    <div class="order-list">
      ${state.current.items.map((item, i) => `
        <div
          class="order-item ${orderClass(q, item, i)}"
          data-order-index="${i}"
          onpointerdown="startOrderPointer(${i}, event)"
          onpointermove="moveOrderPointer(event)"
          onpointerup="dropOrderPointer(event)"
          onpointercancel="cancelOrderPointer()"
        >
          <span class="order-rank">${i + 1}.</span>
          <span>${item}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function answerClass(q, index, selected) {
  if (!state.checked) return selected ? "selected" : "";
  const correct = q.correct.includes(index);
  if (correct && selected) return "correct";
  if (correct) return "missed";
  if (selected) return "wrong";
  return "";
}

function matchClass(q, index) {
  if (!state.checked) return "";
  return state.current.selected[index] === q.pairs[index][1] ? "correct" : "wrong";
}

function orderClass(q, item, index) {
  if (!state.checked) return "";
  return q.items[index] === item ? "correct" : "wrong";
}

function renderFeedback(q) {
  if (!state.checked) return "";
  const ok = isCorrect(q);
  const details = getFeedbackDetails(q);
  return `
    <div class="feedback ${ok ? "ok" : "bad"}">
      <strong>${ok ? "Helyes." : "Nem teljesen."}</strong>
      <div class="feedback-list">
        ${details.map((line) => `<p class="${line.ok ? "ok-line" : "bad-line"}"><strong>${line.label}</strong> ${line.text}</p>`).join("")}
      </div>
    </div>
  `;
}

function getFeedbackDetails(q) {
  if (q.type === "single" || q.type === "multi") {
    if (q.type === "single") {
      const selectedIndex = state.current.selected[0];
      const answer = q.answers[selectedIndex];
      const correctAnswer = q.answers[q.correct[0]];
      const ok = q.correct.includes(selectedIndex);
      return [{
        ok,
        label: ok ? "Helyes," : "Helytelen,",
        text: ok
          ? `azért mert ezt választottad: ${answer}. ${q.explanation || ""}`
          : `azért mert ezt választottad: ${answer}. A helyes válasz: ${correctAnswer}. ${q.explanation || ""}`
      }];
    }

    return q.answers.map((answer, index) => {
      const selected = state.current.selected.includes(index);
      const correct = q.correct.includes(index);
      if (selected && correct) {
        return {
          ok: true,
          label: "Helyes,",
          text: `azért mert ez jó válasz: ${answer}.`
        };
      }
      if (selected && !correct) {
        return {
          ok: false,
          label: "Helytelen,",
          text: `azért mert ez nem tartozik a helyes válaszok közé: ${answer}.`
        };
      }
      if (!selected && correct) {
        return {
          ok: false,
          label: "Ez kellett volna,",
          text: `mert ez is helyes válasz: ${answer}.`
        };
      }
      return null;
    }).filter(Boolean);
  }

  if (q.type === "match") {
    return q.pairs.map((pair, index) => {
      const selected = state.current.selected[index];
      const correct = pair[1];
      const isOk = selected === correct;
      return {
        ok: isOk,
        label: isOk ? "Helyes," : "Helytelen,",
        text: isOk
          ? `azért mert a(z) ${pair[0]} párja: ${correct}.`
          : `azért mert a(z) ${pair[0]} helyes párja: ${correct}, nem pedig: ${selected}.`
      };
    });
  }

  if (q.type === "order") {
    return state.current.items.map((item, index) => {
      const correct = q.items[index];
      const isOk = item === correct;
      return {
        ok: isOk,
        label: isOk ? "Helyes," : "Helytelen,",
        text: isOk
          ? `azért mert a(z) ${index + 1}. helyen ez következik: ${item}.`
          : `azért mert a(z) ${index + 1}. helyen ${correct} lenne a helyes, nem pedig: ${item}.`
      };
    });
  }

  return [{ ok: true, label: "Magyarázat:", text: q.explanation || "A zölddel jelölt válasz a helyes megoldás." }];
}

function toggleAnswer(index) {
  if (state.checked) return;
  const q = state.deck[state.index];
  if (q.type === "single") {
    state.current.selected = [index];
  } else {
    const exists = state.current.selected.includes(index);
    state.current.selected = exists
      ? state.current.selected.filter((item) => item !== index)
      : [...state.current.selected, index];
  }
  persist();
  renderQuiz();
}

function setMatch(index, value) {
  if (state.checked) return;
  state.current.selected[index] = value;
  persist();
}

function startOrderPointer(index, event) {
  if (state.checked || event.button > 0) return;
  const item = event.currentTarget;
  orderPointer = {
    index,
    item,
    startY: event.clientY,
    pointerId: event.pointerId
  };
  item.setPointerCapture(event.pointerId);
  item.classList.add("dragging");
}

function moveOrderPointer(event) {
  if (!orderPointer) return;
  event.preventDefault();
  const deltaY = event.clientY - orderPointer.startY;
  orderPointer.item.style.transform = `translateY(${deltaY}px) scale(1.015)`;

  const target = getOrderDropTarget(event.clientX, event.clientY);
  document.querySelectorAll(".order-item.drag-over").forEach((item) => item.classList.remove("drag-over"));
  if (target && target !== orderPointer.item) target.classList.add("drag-over");
}

function dropOrderPointer(event) {
  if (!orderPointer) return;
  const target = getOrderDropTarget(event.clientX, event.clientY);
  const targetIndex = target ? Number(target.dataset.orderIndex) : orderPointer.index;
  const fromIndex = orderPointer.index;
  cancelOrderPointer();
  if (Number.isNaN(targetIndex) || targetIndex === fromIndex) return;
  const [moved] = state.current.items.splice(fromIndex, 1);
  state.current.items.splice(targetIndex, 0, moved);
  persist();
  renderQuiz();
}

function getOrderDropTarget(x, y) {
  if (!orderPointer) return null;
  orderPointer.item.style.visibility = "hidden";
  const target = document.elementFromPoint(x, y)?.closest(".order-item") || null;
  orderPointer.item.style.visibility = "";
  return target;
}

function cancelOrderPointer() {
  if (!orderPointer) return;
  orderPointer.item.classList.remove("dragging");
  orderPointer.item.style.transform = "";
  document.querySelectorAll(".order-item.drag-over").forEach((item) => item.classList.remove("drag-over"));
  orderPointer = null;
}

function isCorrect(q) {
  if (q.type === "single" || q.type === "multi") {
    const selected = [...state.current.selected].sort((a, b) => a - b);
    const correct = [...q.correct].sort((a, b) => a - b);
    return selected.length === correct.length && selected.every((item, i) => item === correct[i]);
  }
  if (q.type === "match") {
    return q.pairs.every((pair, i) => state.current.selected[i] === pair[1]);
  }
  return q.items.every((item, i) => state.current.items[i] === item);
}

function getQuestionMaxScore(q) {
  if (q.type === "single") return 1;
  if (q.type === "multi") return q.correct.length;
  if (q.type === "match") return 4;
  if (q.type === "order") return 4;
  return 1;
}

function getQuestionScore(q) {
  if (q.type === "single") {
    return isCorrect(q) ? 1 : 0;
  }

  if (q.type === "multi") {
    const correct = new Set(q.correct);
    const selected = state.current.selected;
    const good = selected.filter((item) => correct.has(item)).length;
    const wrong = selected.filter((item) => !correct.has(item)).length;
    return Math.max(0, Math.min(q.correct.length, good - wrong));
  }

  if (q.type === "match") {
    const wrong = q.pairs.filter((pair, i) => state.current.selected[i] !== pair[1]).length;
    return Math.max(0, getQuestionMaxScore(q) - wrong);
  }

  if (q.type === "order") {
    const wrong = q.items.filter((item, i) => state.current.items[i] !== item).length;
    return Math.max(0, getQuestionMaxScore(q) - wrong);
  }

  return 0;
}

function getDeckMaxScore() {
  return state.deck.reduce((sum, q) => sum + getQuestionMaxScore(q), 0);
}

function checkAnswer() {
  const q = state.deck[state.index];
  if ((q.type === "single" || q.type === "multi") && state.current.selected.length === 0) return;
  if (q.type === "match" && state.current.selected.some((item) => !item)) return;
  state.checked = true;
  const correct = isCorrect(q);
  const earned = getQuestionScore(q);
  state.score += earned;
  state.answers.push({ question: q.question, correct, earned, max: getQuestionMaxScore(q) });
  persist();
  renderQuiz();
  playResultEffect(correct);
}

function playResultEffect(correct) {
  requestAnimationFrame(() => {
    const card = document.querySelector(".quiz-card");
    if (card) {
      card.classList.remove("result-pop-ok", "result-pop-bad");
      void card.offsetWidth;
      card.classList.add(correct ? "result-pop-ok" : "result-pop-bad");
    }
  });
  playResultSound(correct);
}

function playResultSound(correct) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

  const notes = correct ? [660, 880] : [220, 165];
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    osc.type = correct ? "sine" : "triangle";
    osc.frequency.setValueAtTime(freq, now + index * 0.09);
    osc.connect(gain);
    osc.start(now + index * 0.09);
    osc.stop(now + index * 0.09 + 0.12);
  });

  setTimeout(() => ctx.close(), 420);
}

function nextQuestion() {
  state.index += 1;
  state.current = null;
  state.checked = false;
  prepareQuestion();
  persist();
  renderQuiz();
}

function restartQuiz() {
  const { kind, topic, id } = state;
  clearSave(id);
  startQuiz(kind, topic);
}

function renderResults() {
  const totalPoints = getDeckMaxScore();
  const percent = totalPoints ? Math.round((state.score / totalPoints) * 100) : 0;
  clearSave(state.id);
  app.innerHTML = `
    ${topbar("Eredmény", state.label)}
    <section class="quiz-card">
      <h2>Kész vagy.</h2>
      <p class="lead">A teszt végére értél, az aktuális mentés törölve lett.</p>
      <div class="result-grid">
        <div class="result-box"><span>Pont</span><strong>${state.score}</strong></div>
        <div class="result-box"><span>Összes</span><strong>${totalPoints}</strong></div>
        <div class="result-box"><span>Arány</span><strong>${percent}%</strong></div>
      </div>
      <div class="quiz-actions">
        <button class="secondary" onclick="startQuiz('${state.kind}', ${state.topic ? `'${escapeAttr(state.topic)}'` : "null"})">Újra</button>
        <button class="primary" onclick="renderHome()">Főoldal</button>
      </div>
    </section>
  `;
}

renderHome();
