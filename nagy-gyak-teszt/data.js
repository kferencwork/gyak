const TOPICS = [
  "Áramkör méretezési feladatok",
  "Mikrokontroller ismeretek",
  "PLC ismeretek",
  "Terepi buszrendszerek",
  "Felügyeleti rendszerek",
  "Hálózati alapismeretek és kiberbiztonság",
  "IOT ismeretek",
  "Adatbáziskezelés elméleti ismeretek",
  "Weblapfejlesztési ismeretek",
  "Vállalatirányítási rendszerek, minőségbiztosítás",
  "Munka- és egészségvédelem"
];

const QUESTIONS = [
  {
    topic: TOPICS[0],
    type: "single",
    question: "Mit csinál a buck, vagyis step-down DC-DC konverter?",
    answers: ["Növeli a bemeneti feszültséget", "Csökkenti a bemeneti feszültséget", "Váltakozó feszültséget egyenirányít", "Csak polaritást fordít"],
    correct: [1],
    explanation: "A buck konverter kimenete ideális esetben kisebb, mint a bemeneti feszültség."
  },
  {
    topic: TOPICS[0],
    type: "multi",
    question: "Melyik 2 állítás jellemző a boost konverterre?",
    answers: ["Step-up konverternek is nevezik", "A kimenete ideális esetben nagyobb lehet a bemenetnél", "Mindig galvanikus leválasztást ad", "Csak váltakozó feszültséggel működik"],
    correct: [0, 1],
    explanation: "A boost konverter növeli az egyenfeszültséget, ezért step-up átalakító."
  },
  {
    topic: TOPICS[0],
    type: "single",
    question: "Kb. milyen Zener-dióda kell 5 V kimenethez emitterkövetős szilícium tranzisztoros stabilizátornál?",
    answers: ["3,3 V", "5,0 V", "5,6 V", "12 V"],
    correct: [2],
    explanation: "Uki körülbelül Uz - UBE, ezért 5,6 V - 0,6 V közel 5 V."
  },
  {
    topic: TOPICS[0],
    type: "match",
    question: "Párosítsd a logikai kapukat a működésükkel.",
    pairs: [
      ["AND", "Csak akkor 1, ha minden bemenet 1"],
      ["OR", "Akkor 1, ha legalább egy bemenet 1"],
      ["NAND", "Az AND tagadása"],
      ["NOR", "Az OR tagadása"]
    ],
    explanation: "Az AND/OR kapuk és tagadott változataik gyakori igazságtábla-felismerések."
  },
  {
    topic: TOPICS[0],
    type: "match",
    question: "Párosítsd a tárolókat a jellemzőikkel.",
    pairs: [
      ["J-K tároló", "11 bemenetnél billen"],
      ["T tároló", "T=1 esetén állapotot vált"],
      ["D tároló", "A következő állapot a D bemenet értéke"],
      ["R-S tároló", "Set és Reset bemenete van"]
    ],
    explanation: "A J-K tároló igazságtáblája különösen fontos vizsgafeladat."
  },
  {
    topic: TOPICS[1],
    type: "multi",
    question: "Melyik 3 egység lehet tipikusan egy mikrokontrollerben?",
    answers: ["CPU", "Időzítő/számláló egység", "Digitális I/O port", "Mechanikus relé", "Lézernyomtató", "Hidraulikaszivattyú"],
    correct: [0, 1, 2],
    explanation: "A mikrokontroller egy chipbe integrált vezérlő: CPU, memória, I/O, perifériák."
  },
  {
    topic: TOPICS[1],
    type: "single",
    question: "Melyik egység végzi az aritmetikai és logikai műveleteket?",
    answers: ["GPIO", "ALU", "EEPROM", "WDT"],
    correct: [1],
    explanation: "Az ALU az aritmetikai-logikai egység."
  },
  {
    topic: TOPICS[1],
    type: "match",
    question: "Párosítsd a mikrokontroller-memóriákat a szerepükkel.",
    pairs: [
      ["Flash", "Programkód tárolása"],
      ["SRAM", "Futás közbeni változók és verem"],
      ["EEPROM", "Tartós beállítások tárolása"],
      ["Stack", "LIFO elvű ideiglenes tár"]
    ],
    explanation: "A Flash és EEPROM nem felejtő, az SRAM tartalma táp nélkül elveszik."
  },
  {
    topic: TOPICS[1],
    type: "multi",
    question: "Melyik 3 feladatra használható a Timer/Counter egység?",
    answers: ["Késleltetés", "Impulzusszámlálás", "Periódusidő mérése", "Dátumkonverzió", "Referenciafeszültség előállítása", "HTML renderelés"],
    correct: [0, 1, 2],
    explanation: "A T/C időzít, számlál, periódusidőt mérhet, és PWM előállításban is szerepe lehet."
  },
  {
    topic: TOPICS[1],
    type: "single",
    question: "Mi a PWM lényege?",
    answers: ["Állandó periódusidejű, változó kitöltési tényezőjű jel", "Digitális jelből IP-cím készítése", "Adatbázis index létrehozása", "Vezeték nélküli titkosítás"],
    correct: [0],
    explanation: "A PWM-nél a kitöltési tényező változik, például LED fényerő vagy motorfordulat vezérléséhez."
  },
  {
    topic: TOPICS[1],
    type: "match",
    question: "Párosítsd a perifériákat a jelentésükkel.",
    pairs: [
      ["ADC", "Analóg jelből digitális értéket készít"],
      ["DAC", "Digitális értékből analóg jelet állít elő"],
      ["GPIO", "Általános digitális be- és kimenet"],
      ["UART", "Aszinkron soros kommunikáció"]
    ],
    explanation: "Az ADC és DAC iránya könnyen összekeverhető, ezért érdemes külön figyelni rá."
  },
  {
    topic: TOPICS[2],
    type: "single",
    question: "Mi a PLC?",
    answers: ["Programozható logikai vezérlő", "Webes tartalomkezelő", "Relációs adatbázis", "Vezeték nélküli titkosítás"],
    correct: [0],
    explanation: "A PLC ipari gépek és folyamatok vezérlésére szolgáló programozható logikai vezérlő."
  },
  {
    topic: TOPICS[2],
    type: "multi",
    question: "Melyik 3 feladat lehet PLC-feladat SCADA rendszerben?",
    answers: ["Adatgyűjtés terepi eszközökről", "Adatok továbbítása a felügyeleti számítógépnek", "Beavatkozók vezérlése", "Teljes ember-gép kapcsolat biztosítása", "Több éves naplózás önállóan", "DNS nevek feloldása"],
    correct: [0, 1, 2],
    explanation: "A HMI és a hosszú távú naplózás inkább SCADA/szerver feladat."
  },
  {
    topic: TOPICS[2],
    type: "single",
    question: "Melyik PLC programozási nyelv hasonlít elektromos kapcsolási rajzhoz?",
    answers: ["Létradiagram", "SQL", "HTML", "CSS"],
    correct: [0],
    explanation: "A létradiagram kontaktusokkal és tekercsekkel dolgozik."
  },
  {
    topic: TOPICS[2],
    type: "match",
    question: "Párosítsd a PLC fogalmakat.",
    pairs: [
      ["Digitális bemenet", "Kétállapotú jelet olvas"],
      ["Analóg bemenet", "Folytonos jeltartományt olvas"],
      ["Merker bit", "Belső segédváltozó"],
      ["Tápegység", "A PLC moduljait látja el energiával"]
    ],
    explanation: "A digitális jel 0/1 jellegű, az analóg jel például 0-10 V vagy 4-20 mA lehet."
  },
  {
    topic: TOPICS[2],
    type: "single",
    question: "Mi a fő különbség a vezérlés és a szabályozás között?",
    answers: ["A szabályozás visszacsatolást használ", "A vezérlés mindig internetes", "A szabályozás csak kézi lehet", "Nincs különbség"],
    correct: [0],
    explanation: "Szabályozásnál a kimenetet mérjük és visszacsatoljuk."
  },
  {
    topic: TOPICS[3],
    type: "single",
    question: "Mi a terepi busz fő célja?",
    answers: ["Ipari terepi eszközök kommunikációja", "Weboldalak stílusozása", "Táblák normalizálása", "Munkaszerződés írása"],
    correct: [0],
    explanation: "A terepi busz szenzorok, beavatkozók, vezérlők ipari kommunikációját támogatja."
  },
  {
    topic: TOPICS[3],
    type: "single",
    question: "Melyik fizikai átviteli szabvány differenciális, ipari környezetben gyakori buszoknál?",
    answers: ["RS-485", "HTML", "PDCA", "SQL"],
    correct: [0],
    explanation: "Az RS-485 zajtűrő differenciális jelátvitelt használ."
  },
  {
    topic: TOPICS[3],
    type: "match",
    question: "Párosítsd az ipari kommunikációs fogalmakat.",
    pairs: [
      ["CAN", "Multi-master busz, CAN_H és CAN_L vezetékek"],
      ["HART", "4-20 mA jelre ültetett digitális adat"],
      ["PROFIBUS DP", "Távoli I/O és gyártásautomatizálás"],
      ["PROFINET", "Ipari Ethernet alapú kommunikáció"]
    ],
    explanation: "A DP, PA és PROFINET szerepköre gyakori összehasonlítás."
  },
  {
    topic: TOPICS[3],
    type: "multi",
    question: "Melyik 2 állítás igaz a CAN buszra?",
    answers: ["Multi-master működésű lehet", "CAN_H és CAN_L vezetékeket használ", "HTML dokumentumot formáz", "Csak egyetlen eszköz csatlakozhat rá"],
    correct: [0, 1],
    explanation: "A CAN több vezérlős, differenciális jellegű ipari/járműipari busz."
  },
  {
    topic: TOPICS[4],
    type: "single",
    question: "Mit jelent a SCADA?",
    answers: ["Felügyeleti vezérlés és adatgyűjtés", "Elsődleges kulcs", "Vezeték nélküli helyi hálózat", "Impulzusszélesség-moduláció"],
    correct: [0],
    explanation: "A SCADA felügyeleti rendszer: adatgyűjtés, megjelenítés, riasztás, naplózás."
  },
  {
    topic: TOPICS[4],
    type: "multi",
    question: "Melyik 3 elem jellemző SCADA rendszerben?",
    answers: ["HMI képernyő", "Riasztáskezelés", "Trend és naplózás", "CSS szelektor", "Zener dióda", "Idegen kulcs"],
    correct: [0, 1, 2],
    explanation: "A SCADA felügyeleti oldalon segíti az üzemeltetést és eseménykövetést."
  },
  {
    topic: TOPICS[4],
    type: "match",
    question: "Párosítsd a SCADA-hoz kapcsolódó fogalmakat.",
    pairs: [
      ["HMI", "Ember-gép kezelőfelület"],
      ["RTU", "Távoli adatgyűjtő egység"],
      ["Trend", "Időbeli változás megjelenítése"],
      ["Alarm", "Riasztási esemény jelzése"]
    ],
    explanation: "A SCADA nem csak vezérlés, hanem felügyelet, visszajelzés és adatgyűjtés."
  },
  {
    topic: TOPICS[4],
    type: "single",
    question: "Mi jellemzőbb RTU-ra, mint tipikus PLC-re?",
    answers: ["Távoli terepi adatgyűjtés, gyakran nagyobb távolságokon", "HTML oldal megjelenítése", "Programkód tárolása Flashben", "Képernyős pihenőidő mérése"],
    correct: [0],
    explanation: "Az RTU távoli mérő/adatgyűjtő szerepben gyakori."
  },
  {
    topic: TOPICS[5],
    type: "order",
    question: "Rendezd alulról felfelé az OSI modell rétegeit.",
    items: ["Fizikai", "Adatkapcsolati", "Hálózati", "Szállítási", "Viszony", "Megjelenítési", "Alkalmazási"],
    explanation: "Az OSI modell 1-től 7-ig: Physical, Data Link, Network, Transport, Session, Presentation, Application."
  },
  {
    topic: TOPICS[5],
    type: "match",
    question: "Párosítsd az OSI rétegeket példákkal.",
    pairs: [
      ["Fizikai", "Kábel, csatlakozó, rádiójel"],
      ["Adatkapcsolati", "Ethernet, MAC-cím, switch"],
      ["Hálózati", "IP, router, útválasztás"],
      ["Szállítási", "TCP, UDP, portszámok"]
    ],
    explanation: "Az eszközök és protokollok réteghez kötése gyakori vizsgarész."
  },
  {
    topic: TOPICS[5],
    type: "single",
    question: "Melyik cím a 120.40.12.0/25 tartomány broadcast címe?",
    answers: ["120.40.12.0", "120.40.12.127", "120.40.12.128", "120.40.12.255"],
    correct: [1],
    explanation: "/25 esetén az első tartomány .0-.127, ebből .127 a broadcast."
  },
  {
    topic: TOPICS[5],
    type: "multi",
    question: "Melyik 2 NAT típus/fogalom tartozik a címfordításhoz?",
    answers: ["Static NAT", "PAT", "CSS", "PWM"],
    correct: [0, 1],
    explanation: "A PAT portokkal oszt meg egy publikus címet több belső eszköz között."
  },
  {
    topic: TOPICS[5],
    type: "single",
    question: "Melyik szabvány a WiFi 6?",
    answers: ["802.11ac", "802.11ax", "802.11be", "802.3"],
    correct: [1],
    explanation: "802.11ax = WiFi 6; 802.11ac = WiFi 5; 802.11be = WiFi 7."
  },
  {
    topic: TOPICS[5],
    type: "single",
    question: "Mi alapján továbbít alapvetően a switch?",
    answers: ["MAC-címtábla alapján", "Zener feszültség alapján", "PDCA ciklus alapján", "SQL alias alapján"],
    correct: [0],
    explanation: "A switch adatkapcsolati rétegű eszköz, MAC-címek alapján tanul és továbbít."
  },
  {
    topic: TOPICS[5],
    type: "multi",
    question: "Melyik 3 fogalom kapcsolódik kiberbiztonsághoz?",
    answers: ["VPN", "AES", "EAP", "D tároló", "Létradiagram", "LDR"],
    correct: [0, 1, 2],
    explanation: "A VPN, AES és EAP hálózati biztonsági/hitelesítési fogalmak."
  },
  {
    topic: TOPICS[6],
    type: "single",
    question: "Mi az IoT lényege?",
    answers: ["Szenzorokkal és kommunikációval rendelkező eszközök hálózata", "Csak relációs táblák rendszere", "Egy HTML komment típusa", "Csak kézi vezérlésű ipari kapcsoló"],
    correct: [0],
    explanation: "Az IoT a dolgok internete: eszközök adatot mérnek, kommunikálnak és feldolgozást támogatnak."
  },
  {
    topic: TOPICS[6],
    type: "order",
    question: "Rendezd sorba az IoT háromrétegű architektúráját alulról felfelé.",
    items: ["Érzékelési réteg", "Hálózati réteg", "Alkalmazási réteg"],
    explanation: "A szenzor/adatgyűjtő rétegből az adatok hálózaton át jutnak az alkalmazási rétegig."
  },
  {
    topic: TOPICS[6],
    type: "single",
    question: "Melyik IoT protokoll publish/subscribe alapú?",
    answers: ["MQTT", "DCL", "PDCA", "NAND"],
    correct: [0],
    explanation: "Az MQTT könnyű, publish/subscribe alapú IoT üzenetküldő protokoll."
  },
  {
    topic: TOPICS[6],
    type: "match",
    question: "Párosítsd az IoT/felhő fogalmakat.",
    pairs: [
      ["Gateway", "Helyi eszközöket kapcsol össze hálózattal/felhővel"],
      ["IaaS", "Virtuális gép, tárhely, hálózat"],
      ["PaaS", "Fejlesztési és futtatási platform"],
      ["SaaS", "Kész alkalmazás szolgáltatásként"]
    ],
    explanation: "A felhőszolgáltatási modellek különbségét szerepkör alapján érdemes megjegyezni."
  },
  {
    topic: TOPICS[6],
    type: "match",
    question: "Párosítsd a szenzorokat a felhasználásukkal.",
    pairs: [
      ["LDR", "Fényérzékelés"],
      ["NTC", "Hőmérsékletnél növekedésre csökkenő ellenállás"],
      ["Nyúlásmérő bélyeg", "Deformáció/erő mérése"],
      ["PIR", "Mozgásérzékelés"]
    ],
    explanation: "Az IoT szenzoros feladatokban gyakori a jellemző fizikai mennyiség felismerése."
  },
  {
    topic: TOPICS[6],
    type: "multi",
    question: "Melyik 3 lehet vezeték nélküli IoT kommunikáció?",
    answers: ["LoRaWAN", "WiFi", "NFC", "RS-485", "HART", "HTML"],
    correct: [0, 1, 2],
    explanation: "A LoRaWAN, WiFi és NFC vezeték nélküli technológiák; RS-485 és HART vezetékes/ipari jellegűek."
  },
  {
    topic: TOPICS[7],
    type: "single",
    question: "Mi az elsődleges kulcs szerepe?",
    answers: ["Rekord egyedi azonosítása", "Oldal háttérszínének beállítása", "PWM kitöltésének számítása", "WiFi titkosítás"],
    correct: [0],
    explanation: "A primary key egyedileg azonosítja a tábla rekordjait."
  },
  {
    topic: TOPICS[7],
    type: "single",
    question: "Mit csinál az idegen kulcs?",
    answers: ["Másik tábla elsődleges kulcsára hivatkozik", "Mindig törli az adatot", "CSS osztályt jelöl", "Analóg jelet digitalizál"],
    correct: [0],
    explanation: "A foreign key kapcsolatot teremt táblák között."
  },
  {
    topic: TOPICS[7],
    type: "multi",
    question: "Melyik 2 célja lehet a normalizálásnak?",
    answers: ["Redundancia csökkentése", "Adatellentmondások mérséklése", "WiFi jelerősség növelése", "PWM frekvencia fixálása"],
    correct: [0, 1],
    explanation: "A normalizálás rendezettebb, kevesebb ismétlést tartalmazó adatmodellt ad."
  },
  {
    topic: TOPICS[7],
    type: "match",
    question: "Párosítsd az SQL parancscsoportokat.",
    pairs: [
      ["DDL", "CREATE, ALTER, DROP"],
      ["DML", "INSERT, UPDATE, DELETE"],
      ["DQL", "SELECT"],
      ["DCL", "GRANT, REVOKE"]
    ],
    explanation: "A parancscsoportok tipikus példái alapján gyorsan felismerhetők."
  },
  {
    topic: TOPICS[7],
    type: "single",
    question: "Mire jó az adatbázis-index?",
    answers: ["Gyorsíthatja a keresést és rendezést", "Mindig csökkenti a tárhelyhasználatot", "HTML elemet hoz létre", "Analóg feszültséget állít elő"],
    correct: [0],
    explanation: "Az index gyorsíthat lekérdezéseket, de plusz tárhelyet és írási költséget jelenthet."
  },
  {
    topic: TOPICS[7],
    type: "single",
    question: "Mit csinál a SELECT DISTINCT?",
    answers: ["Ismétlődések nélküli értékeket kér le", "Táblát töröl", "Jogosultságot ad", "CSS-t importál"],
    correct: [0],
    explanation: "A DISTINCT az egyedi sorokat/értékeket adja vissza."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Mi a HTML fő szerepe?",
    answers: ["A weboldal szerkezetének leírása", "A relációs adatbázis indexelése", "Fizikai hálózati jel továbbítása", "Motorfordulat szabályozása"],
    correct: [0],
    explanation: "A HTML jelölőnyelv, a dokumentum tartalmi szerkezetét írja le."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Melyik CSS szelektor választja ki az összes h2 elemet?",
    answers: ["h2", ".h2", "#h2", "*h2"],
    correct: [0],
    explanation: "Az elemnév szelektor pont és kettőskereszt nélkül írandó."
  },
  {
    topic: TOPICS[8],
    type: "match",
    question: "Párosítsd a webes fogalmakat.",
    pairs: [
      ["HTML", "Szerkezet"],
      ["CSS", "Megjelenés"],
      ["JavaScript", "Interaktív működés"],
      ["DOM", "A dokumentum objektummodellje"]
    ],
    explanation: "A HTML, CSS és JS szerepköre a webfejlesztés alapja."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Hogyan néz ki egy CSS komment?",
    answers: ["/* komment */", "<!-- komment -->", "// komment", "# komment"],
    correct: [0],
    explanation: "CSS-ben a blokkkomment formája: /* ... */."
  },
  {
    topic: TOPICS[8],
    type: "multi",
    question: "Melyik 2 JavaScript változódeklaráció használatos modern kódban?",
    answers: ["let", "const", "table", "selector"],
    correct: [0, 1],
    explanation: "A let változtatható, a const újra nem hozzárendelhető kötést jelöl."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Mi a CMS?",
    answers: ["Tartalomkezelő rendszer", "Közvetlen memóriaelérés", "Felhő infrastruktúra", "Programozható logikai vezérlő"],
    correct: [0],
    explanation: "A CMS segítségével nem programozók is kezelhetnek webes tartalmat."
  },
  {
    topic: TOPICS[9],
    type: "single",
    question: "Mi az ERP?",
    answers: ["Vállalatirányítási rendszer", "Elektrosztatikus kisülés", "Digitális-analóg átalakító", "Vezeték nélküli hozzáférési pont"],
    correct: [0],
    explanation: "Az ERP modulokkal támogatja a vállalati folyamatokat."
  },
  {
    topic: TOPICS[9],
    type: "multi",
    question: "Melyik 3 lehet ERP modul?",
    answers: ["Pénzügy", "Raktár/logisztika", "Értékesítés", "NAND kapu", "Fizikai OSI réteg", "Zener dióda"],
    correct: [0, 1, 2],
    explanation: "Az ERP moduláris: pénzügy, beszerzés, raktár, értékesítés, termelés stb."
  },
  {
    topic: TOPICS[9],
    type: "order",
    question: "Rendezd sorba a PDCA ciklus lépéseit.",
    items: ["Plan", "Do", "Check", "Act"],
    explanation: "PDCA = Plan, Do, Check, Act."
  },
  {
    topic: TOPICS[9],
    type: "match",
    question: "Párosítsd a vállalati/minőségügyi rövidítéseket.",
    pairs: [
      ["CRM", "Ügyfélkapcsolat-kezelés"],
      ["CAD", "Számítógéppel támogatott tervezés"],
      ["CAM", "Számítógéppel támogatott gyártás"],
      ["QMS", "Minőségirányítási rendszer"]
    ],
    explanation: "A CAD/CAM/CRM/QMS külön ipari és vállalati szerepkört jelöl."
  },
  {
    topic: TOPICS[9],
    type: "single",
    question: "Mi az ISO?",
    answers: ["Nemzetközi Szabványügyi Szervezet", "Impulzusszámláló egység", "Webes protokoll", "Szenzoros IoT réteg"],
    correct: [0],
    explanation: "Az ISO nemzetközi szabványügyi szervezet."
  },
  {
    topic: TOPICS[10],
    type: "single",
    question: "Mivel célszerű oltani elektromos tüzet?",
    answers: ["CO2 vagy porral oltóval", "Vízzel minden esetben", "Olajjal", "Papírral letakarva"],
    correct: [0],
    explanation: "Feszültség alatt lévő elektromos berendezést vízzel oltani veszélyes."
  },
  {
    topic: TOPICS[10],
    type: "multi",
    question: "Melyik 3 lehet egyéni védőeszköz?",
    answers: ["Védőszemüveg", "Védőkesztyű", "Hallásvédő", "SQL alias", "Router memória", "CMS sablon"],
    correct: [0, 1, 2],
    explanation: "Az EVE/PPE a dolgozó személyes védelmét szolgálja."
  },
  {
    topic: TOPICS[10],
    type: "single",
    question: "Mi az ESD?",
    answers: ["Elektrosztatikus kisülés", "Vállalatirányítási modul", "Adatlekérdező nyelv", "Fényfüggő ellenállás"],
    correct: [0],
    explanation: "Az ESD elektronikai alkatrészeket károsíthat."
  },
  {
    topic: TOPICS[10],
    type: "match",
    question: "Párosítsd a munkavédelmi fogalmakat.",
    pairs: [
      ["PPE/EVE", "Egyéni védőeszköz"],
      ["CO", "Színtelen, szagtalan, mérgező gáz"],
      ["SELV", "Biztonsági törpefeszültség"],
      ["PELV", "Védelmi törpefeszültség"]
    ],
    explanation: "A rövidítések jelentését és veszélyességi szerepét érdemes külön gyakorolni."
  },
  {
    topic: TOPICS[10],
    type: "single",
    question: "Képernyős munkavégzésnél miért fontos a pihenőidő és az ergonómia?",
    answers: ["A szem- és mozgásszervi terhelés csökkentése miatt", "A VLAN-ok száma miatt", "A Zener feszültség csökkentése miatt", "A CAN busz lezárása miatt"],
    correct: [0],
    explanation: "A képernyős munkavégzésnél a megfelelő testhelyzet, megvilágítás és szünet csökkenti a terhelést."
  }
];

QUESTIONS.push(
  {
    topic: TOPICS[0],
    type: "single",
    question: "Melyik DC-DC konverter képes a feszültség csökkentésére vagy növelésére is?",
    answers: ["Buck-boost konverter", "Csak buck konverter", "Csak boost konverter", "Lineáris stabilizátor"],
    correct: [0],
    explanation: "A buck-boost kapcsolás a kitöltési tényezőtől és változattól függően csökkenthet vagy növelhet."
  },
  {
    topic: TOPICS[0],
    type: "single",
    question: "NAND kapunál mikor lesz a kimenet 0?",
    answers: ["Ha minden bemenet 1", "Ha minden bemenet 0", "Ha legalább egy bemenet 1", "Soha"],
    correct: [0],
    explanation: "A NAND az AND tagadása, ezért csak az 1-1 bemenetre ad 0-t."
  },
  {
    topic: TOPICS[1],
    type: "single",
    question: "Melyik memória tartalma vész el tápfeszültség megszűnésekor?",
    answers: ["SRAM", "Flash", "EEPROM", "ROM"],
    correct: [0],
    explanation: "Az SRAM gyors, de felejtő memória."
  },
  {
    topic: TOPICS[1],
    type: "single",
    question: "Mit csinál a watchdog timer?",
    answers: ["Lefagyás esetén újraindíthatja a mikrokontrollert", "Analóg jelet digitalizál", "MAC-címet tárol", "CSS szabályt ellenőriz"],
    correct: [0],
    explanation: "A WDT programfelügyeleti időzítő: ha a program nem jelzi, hogy fut, beavatkozhat."
  },
  {
    topic: TOPICS[2],
    type: "single",
    question: "Melyik analóg jeltartomány gyakori ipari PLC környezetben?",
    answers: ["4-20 mA", "0-255 V AC minden szenzornál", "HTTP/HTTPS", "CREATE/ALTER/DROP"],
    correct: [0],
    explanation: "A 4-20 mA és a 0-10 V tipikus ipari analóg jeltartomány."
  },
  {
    topic: TOPICS[2],
    type: "multi",
    question: "Melyik 2 elem számít inkább beavatkozónak, mint szenzornak?",
    answers: ["Motor", "Szelep", "Hőmérséklet-érzékelő", "Nyomásérzékelő"],
    correct: [0, 1],
    explanation: "A beavatkozó a folyamatra hat, a szenzor mérési adatot ad."
  },
  {
    topic: TOPICS[3],
    type: "single",
    question: "Melyik PROFIBUS változat jellemzőbb folyamatipari műszerekhez?",
    answers: ["PROFIBUS PA", "PROFIBUS DP", "HTTP", "VLAN"],
    correct: [0],
    explanation: "A PA jelentése Process Automation, folyamatipari területre utal."
  },
  {
    topic: TOPICS[3],
    type: "single",
    question: "Miért előnyös a differenciális jelátvitel ipari buszoknál?",
    answers: ["Jobb zavartűrést ad", "HTML-t készít", "Mindig titkosítja az adatot", "Csökkenti az adatbázis redundanciát"],
    correct: [0],
    explanation: "A differenciális jelátvitel az ipari elektromágneses zavarokkal szemben ellenállóbb."
  },
  {
    topic: TOPICS[4],
    type: "single",
    question: "Mi a trend szerepe SCADA rendszerben?",
    answers: ["Mért értékek időbeli változásának megjelenítése", "Programkód tárolása", "CSS kommentelés", "Logikai kapu tagadása"],
    correct: [0],
    explanation: "A trend grafikonon vagy idősoron mutatja a folyamatváltozókat."
  },
  {
    topic: TOPICS[4],
    type: "single",
    question: "Melyik állítás igaz a SCADA-ra?",
    answers: ["Hibrid rendszer lehet informatikai és ipari vezérlési elemekkel", "Csak egyetlen szenzorból áll", "Nem kezelhet riasztást", "Csak CSS fájl"],
    correct: [0],
    explanation: "A SCADA ipari terepi eszközöket, kommunikációt, szervereket és felügyeleti felületet kapcsol össze."
  },
  {
    topic: TOPICS[5],
    type: "single",
    question: "Melyik eszköz tartozik leginkább a hálózati réteghez?",
    answers: ["Router", "Switch", "Kábelcsatlakozó", "HMI panel"],
    correct: [0],
    explanation: "A router IP-címek és útvonalak alapján dolgozik, ezért hálózati rétegű eszköz."
  },
  {
    topic: TOPICS[5],
    type: "single",
    question: "Mire szolgál a DHCP?",
    answers: ["Automatikus IP-cím és hálózati beállítás kiosztására", "Weboldal stílusozására", "PWM jel előállítására", "SQL jogosultság adására"],
    correct: [0],
    explanation: "A DHCP automatikusan kioszthat IP-címet, átjárót, DNS-t és más beállításokat."
  },
  {
    topic: TOPICS[6],
    type: "single",
    question: "Mi az IoT gateway egyik tipikus feladata?",
    answers: ["Protokollfordítás és továbbítás helyi eszközök és felhő között", "Táblák elsődleges kulcsának törlése", "CSS fájl minősítése", "Elektromos tűz oltása vízzel"],
    correct: [0],
    explanation: "A gateway összeköt, gyűjt, továbbít, sokszor protokollt is fordít."
  },
  {
    topic: TOPICS[6],
    type: "single",
    question: "Melyik felhőmodell ad kész alkalmazást a felhasználónak?",
    answers: ["SaaS", "IaaS", "PaaS", "RS-485"],
    correct: [0],
    explanation: "SaaS esetén a felhasználó kész szoftvert használ szolgáltatásként."
  },
  {
    topic: TOPICS[7],
    type: "order",
    question: "Rendezd sorba az adatbázis-tervezés tipikus lépéseit.",
    items: ["Követelmények felmérése", "Egyedek és kapcsolatok meghatározása", "Táblák és kulcsok tervezése", "Megvalósítás és tesztelés"],
    explanation: "Előbb a követelményeket és modellt kell tisztázni, utána jön a konkrét adatbázis."
  },
  {
    topic: TOPICS[7],
    type: "single",
    question: "Mit jelent a redundancia adatbázisban?",
    answers: ["Felesleges/ismétlődő adattárolás", "Weboldal interakció", "Zajvédelem csavart érpárnál", "Tűzvédelmi piktogram"],
    correct: [0],
    explanation: "A redundancia ismétlődő adatot jelent, ami ellentmondásokhoz vezethet."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Mi a JavaScript fő szerepe weboldalon?",
    answers: ["Interaktív működés és viselkedés megvalósítása", "Csak a betűszín leírása", "Csak adatbázis-kulcs tárolása", "Ipari analóg jel mérése"],
    correct: [0],
    explanation: "A JavaScript a böngészőben futó programlogikát és interakciót adja."
  },
  {
    topic: TOPICS[8],
    type: "single",
    question: "Mit ír le a CSS?",
    answers: ["A weboldal megjelenését", "A PLC ciklusidejét", "A CAN vezeték nevét", "A munkaszerződés kötelező tartalmát"],
    correct: [0],
    explanation: "A CSS a vizuális megjelenést, például színt, elrendezést és betűtípust szabályozza."
  },
  {
    topic: TOPICS[9],
    type: "single",
    question: "Mit jelent a minőségbiztosítás lényege?",
    answers: ["Folyamatok szabályozása, hogy a termék/szolgáltatás megfeleljen az elvárásoknak", "Csak weboldal animáció", "Csak IP-cím kiosztás", "Csak Zener dióda választás"],
    correct: [0],
    explanation: "A minőségbiztosítás célja a stabil, ellenőrzött, elvárt minőséget adó működés."
  },
  {
    topic: TOPICS[9],
    type: "single",
    question: "Miért hasznos az ERP modularitása?",
    answers: ["A vállalati területek külön modulokkal, mégis integráltan kezelhetők", "Mert minden modult kézzel kell forrasztani", "Mert kikapcsolja a hálózatot", "Mert eltávolítja a munkavédelmet"],
    correct: [0],
    explanation: "Az ERP modulok együtt kezelik például a pénzügyet, raktárt, értékesítést és termelést."
  },
  {
    topic: TOPICS[10],
    type: "single",
    question: "Miért veszélyes a szén-monoxid?",
    answers: ["Színtelen, szagtalan és mérgező", "Mindig kék színű és könnyen látható", "Csak adatbázisban fordul elő", "CSS szelektorhiba"],
    correct: [0],
    explanation: "A CO különösen veszélyes, mert érzékszervekkel nem könnyen észlelhető."
  },
  {
    topic: TOPICS[10],
    type: "single",
    question: "Mit jelent az érintésvédelem célja?",
    answers: ["Az áramütés veszélyének csökkentése", "SQL lekérdezések gyorsítása", "Weboldalak szerkesztése", "IoT szenzor fényérzékelése"],
    correct: [0],
    explanation: "Az érintésvédelem az ember védelmét szolgálja villamos berendezések használatakor."
  }
);

const ABBREVIATIONS = [
  ["PROFIBUS DP", "Decentralized Peripherals, távoli I/O és gyártásautomatizálás"],
  ["PROFIBUS PA", "Process Automation, folyamatipari távadók és műszerek"],
  ["HART", "Highway Addressable Remote Transducer, 4-20 mA + digitális adat"],
  ["CAN", "Controller Area Network"],
  ["PLC", "Programmable Logic Controller"],
  ["SCADA", "Supervisory Control and Data Acquisition"],
  ["HMI", "Human-Machine Interface"],
  ["RTU", "Remote Terminal Unit"],
  ["ALU", "Arithmetic Logic Unit"],
  ["ADC", "Analog-to-Digital Converter"],
  ["DAC", "Digital-to-Analog Converter"],
  ["PWM", "Pulse Width Modulation"],
  ["GPIO", "General Purpose Input/Output"],
  ["WDT", "Watchdog Timer"],
  ["T/C", "Timer/Counter"],
  ["LDR", "Light Dependent Resistor"],
  ["NTC", "Negative Temperature Coefficient"],
  ["PTC", "Positive Temperature Coefficient"],
  ["MEMS", "Micro-Electro-Mechanical Systems"],
  ["IP", "Internet Protocol"],
  ["IPv4", "Internet Protocol version 4"],
  ["MAC", "Media Access Control"],
  ["LAN", "Local Area Network"],
  ["WLAN", "Wireless Local Area Network"],
  ["WAN", "Wide Area Network"],
  ["NAT", "Network Address Translation"],
  ["PAT", "Port Address Translation"],
  ["DHCP", "Dynamic Host Configuration Protocol"],
  ["DNS", "Domain Name System"],
  ["VLAN", "Virtual Local Area Network"],
  ["VPN", "Virtual Private Network"],
  ["AP", "Access Point"],
  ["WLC", "Wireless LAN Controller"],
  ["EAP", "Extensible Authentication Protocol"],
  ["AES", "Advanced Encryption Standard"],
  ["TKIP", "Temporal Key Integrity Protocol"],
  ["IoT", "Internet of Things"],
  ["IIoT", "Industrial Internet of Things"],
  ["MQTT", "Message Queuing Telemetry Transport"],
  ["M2M", "Machine-to-Machine"],
  ["LoRa", "Long Range"],
  ["LoRaWAN", "Long Range Wide Area Network"],
  ["RFID", "Radio Frequency Identification"],
  ["NFC", "Near Field Communication"],
  ["IaaS", "Infrastructure as a Service"],
  ["PaaS", "Platform as a Service"],
  ["SaaS", "Software as a Service"],
  ["SQL", "Structured Query Language"],
  ["DDL", "Data Definition Language"],
  ["DML", "Data Manipulation Language"],
  ["DQL", "Data Query Language"],
  ["DCL", "Data Control Language"],
  ["PK", "Primary Key"],
  ["FK", "Foreign Key"],
  ["HTML", "HyperText Markup Language"],
  ["CSS", "Cascading Style Sheets"],
  ["JS", "JavaScript"],
  ["DOM", "Document Object Model"],
  ["CMS", "Content Management System"],
  ["HTTP", "HyperText Transfer Protocol"],
  ["HTTPS", "HyperText Transfer Protocol Secure"],
  ["ERP", "Enterprise Resource Planning"],
  ["CRM", "Customer Relationship Management"],
  ["CAM", "Computer-Aided Manufacturing"],
  ["CAD", "Computer-Aided Design"],
  ["ISO", "International Organization for Standardization"],
  ["PDCA", "Plan-Do-Check-Act"],
  ["QMS", "Quality Management System"],
  ["PPE", "Personal Protective Equipment"],
  ["EVE", "Egyéni védőeszköz"],
  ["CO", "Carbon Monoxide"],
  ["CO2", "Carbon Dioxide"],
  ["ESD", "Electrostatic Discharge"],
  ["SELV", "Safety Extra-Low Voltage"],
  ["PELV", "Protective Extra-Low Voltage"]
];

const ABBR_DISTRACTORS = {
  "PROFIBUS DP": ["Distributed Peripherals, távoli I/O és gyártásautomatizálás", "Decentralized Process, folyamatipari távadók", "Direct Peripherals, közvetlen terepi I/O"],
  "PROFIBUS PA": ["Process Access, folyamatipari kommunikáció", "Peripheral Automation, távoli I/O kezelés", "Production Automation, gyártásautomatizálás"],
  "HART": ["Highway Addressable Remote Terminal", "High Address Remote Transducer", "Hybrid Analog Remote Transmitter"],
  "CAN": ["Controller Access Network", "Control Area Node", "Central Automation Network"],
  "PLC": ["Programmable Logical Controller", "Programming Logic Control", "Programmable Line Controller"],
  "SCADA": ["Supervisory Control and Data Analysis", "System Control and Data Acquisition", "Supervisory Communication and Data Acquisition"],
  "HMI": ["Human-Machine Interaction", "Human-Monitor Interface", "Hardware-Machine Interface"],
  "RTU": ["Remote Terminal Unit", "Remote Transmission Unit", "Relay Terminal Unit"],
  "ALU": ["Arithmetic Logical Unit", "Analog Logic Unit", "Application Logic Unit"],
  "ADC": ["Analog Data Converter", "Analog-to-Data Converter", "Automatic Digital Converter"],
  "DAC": ["Digital Analog Controller", "Data-to-Analog Converter", "Digital-to-Analog Controller"],
  "PWM": ["Pulse Width Measurement", "Pulse Wave Modulation", "Periodic Width Modulation"],
  "GPIO": ["General Peripheral Input/Output", "General Purpose Interface Output", "Grouped Port Input/Output"],
  "WDT": ["Watchdog Trigger", "Watch Delay Timer", "Watchdog Time Counter"],
  "T/C": ["Time/Counter", "Timer/Controller", "Trigger/Counter"],
  "IP": ["Internet Package", "Internal Protocol", "Interface Protocol"],
  "MAC": ["Machine Access Control", "Media Address Code", "Medium Authentication Control"],
  "LAN": ["Local Access Network", "Linked Area Network", "Local Automation Network"],
  "WLAN": ["Wireless Local Access Network", "Wide Local Area Network", "Wireless Linked Area Network"],
  "WAN": ["Wide Access Network", "Wireless Area Network", "World Area Network"],
  "NAT": ["Network Access Translation", "Node Address Translation", "Network Address Transfer"],
  "PAT": ["Port Access Translation", "Private Address Translation", "Port Address Transfer"],
  "DHCP": ["Dynamic Host Control Protocol", "Dynamic Hardware Configuration Protocol", "Direct Host Configuration Protocol"],
  "DNS": ["Domain Network System", "Dynamic Name System", "Domain Name Service"],
  "VLAN": ["Virtual Linked Area Network", "Variable Local Area Network", "Virtual Local Access Network"],
  "VPN": ["Virtual Protected Network", "Verified Private Network", "Virtual Public Network"],
  "IoT": ["Internet of Technology", "Industrial of Things", "Interface of Things"],
  "IIoT": ["Integrated Internet of Things", "Industrial Interface of Things", "Internet Industrial of Things"],
  "MQTT": ["Message Queue Telemetry Transport", "Message Queuing Transfer Transport", "Machine Queuing Telemetry Transport"],
  "M2M": ["Machine-to-Module", "Module-to-Machine", "Machine-to-Management"],
  "LoRaWAN": ["Long Range Wireless Area Network", "Long Range Wide Access Network", "Low Range Wide Area Network"],
  "RFID": ["Radio Frequency Information Device", "Remote Frequency Identification", "Radio Field Identification"],
  "NFC": ["Near Field Controller", "Network Field Communication", "Near Frequency Communication"],
  "IaaS": ["Interface as a Service", "Infrastructure as a System", "Industrial as a Service"],
  "PaaS": ["Program as a Service", "Platform as a System", "Process as a Service"],
  "SaaS": ["System as a Service", "Software as a System", "Service as a Software"],
  "SQL": ["Structured Query Logic", "Standard Query Language", "Structured Queue Language"],
  "DDL": ["Data Description Language", "Database Definition Language", "Data Design Language"],
  "DML": ["Data Management Language", "Database Manipulation Language", "Data Modification Logic"],
  "DQL": ["Data Question Language", "Database Query Language", "Data Query Logic"],
  "DCL": ["Data Command Language", "Database Control Language", "Data Configuration Language"],
  "PK": ["Private Key", "Primary Keyword", "Parent Key"],
  "FK": ["Field Key", "Foreign Keyword", "File Key"],
  "HTML": ["HyperText Module Language", "HighText Markup Language", "HyperText Markup Logic"],
  "CSS": ["Cascading Style Syntax", "Computer Style Sheets", "Cascading Sheet Styles"],
  "JS": ["Java Syntax", "Java Source", "JavaScript Syntax"],
  "DOM": ["Document Object Map", "Data Object Model", "Document Output Model"],
  "CMS": ["Content Management Service", "Content Module System", "Central Management System"],
  "ERP": ["Enterprise Resource Program", "Enterprise Relation Planning", "External Resource Planning"],
  "CRM": ["Customer Resource Management", "Client Relationship Module", "Customer Relation Manager"],
  "PDCA": ["Plan-Do-Control-Act", "Plan-Develop-Check-Act", "Prepare-Do-Check-Apply"],
  "QMS": ["Quality Monitoring System", "Quality Management Service", "Quality Measurement System"],
  "PPE": ["Personal Protection Equipment", "Protective Personal Equipment", "Process Protective Equipment"],
  "ESD": ["Electrostatic Discharge", "Electronic Static Discharge", "Electrostatic Damage"]
};

const ABBR_HU = {
  "PROFIBUS DP": "decentralizált perifériák, távoli I/O",
  "PROFIBUS PA": "folyamat-automatizálás",
  "HART": "címezhető távoli távadó protokoll",
  "CAN": "vezérlőterületi hálózat",
  "PLC": "programozható logikai vezérlő",
  "SCADA": "felügyeleti vezérlés és adatgyűjtés",
  "HMI": "ember-gép kezelőfelület",
  "RTU": "távoli adatgyűjtő egység",
  "ALU": "aritmetikai-logikai egység",
  "ADC": "analóg-digitális átalakító",
  "DAC": "digitális-analóg átalakító",
  "PWM": "impulzusszélesség-moduláció",
  "GPIO": "általános célú be- és kimenet",
  "WDT": "őrző időzítő",
  "T/C": "időzítő/számláló",
  "LDR": "fényfüggő ellenállás",
  "NTC": "negatív hőmérsékleti együttható",
  "PTC": "pozitív hőmérsékleti együttható",
  "MEMS": "mikro-elektromechanikai rendszerek",
  "IP": "internetprotokoll",
  "IPv4": "internetprotokoll 4-es verzió",
  "MAC": "közeghozzáférés-vezérlés",
  "LAN": "helyi hálózat",
  "WLAN": "vezeték nélküli helyi hálózat",
  "WAN": "nagy kiterjedésű hálózat",
  "NAT": "hálózati címfordítás",
  "PAT": "portcímfordítás",
  "DHCP": "dinamikus állomáskonfiguráló protokoll",
  "DNS": "tartománynévrendszer",
  "VLAN": "virtuális helyi hálózat",
  "VPN": "virtuális magánhálózat",
  "AP": "hozzáférési pont",
  "WLC": "vezeték nélküli LAN vezérlő",
  "EAP": "bővíthető hitelesítési protokoll",
  "AES": "fejlett titkosítási szabvány",
  "TKIP": "időbeli kulcsintegritási protokoll",
  "IoT": "dolgok internete",
  "IIoT": "ipari dolgok internete",
  "MQTT": "üzenetsoros telemetriai átvitel",
  "M2M": "gép-gép közötti kommunikáció",
  "LoRa": "nagy hatótávolság",
  "LoRaWAN": "nagy hatótávolságú nagy kiterjedésű hálózat",
  "RFID": "rádiófrekvenciás azonosítás",
  "NFC": "közeli mezős kommunikáció",
  "IaaS": "infrastruktúra szolgáltatásként",
  "PaaS": "platform szolgáltatásként",
  "SaaS": "szoftver szolgáltatásként",
  "SQL": "strukturált lekérdezőnyelv",
  "DDL": "adatdefiníciós nyelv",
  "DML": "adatmanipulációs nyelv",
  "DQL": "adatlekérdező nyelv",
  "DCL": "adatvezérlő nyelv",
  "PK": "elsődleges kulcs",
  "FK": "idegen kulcs",
  "HTML": "hiperszöveges jelölőnyelv",
  "CSS": "egymásra épülő stíluslapok",
  "JS": "JavaScript",
  "DOM": "dokumentum objektummodell",
  "CMS": "tartalomkezelő rendszer",
  "HTTP": "hiperszöveg átviteli protokoll",
  "HTTPS": "biztonságos hiperszöveg átviteli protokoll",
  "ERP": "vállalatirányítási rendszer",
  "CRM": "ügyfélkapcsolat-kezelés",
  "CAM": "számítógéppel támogatott gyártás",
  "CAD": "számítógéppel támogatott tervezés",
  "ISO": "nemzetközi szabványügyi szervezet",
  "PDCA": "tervezés, végrehajtás, ellenőrzés, beavatkozás",
  "QMS": "minőségirányítási rendszer",
  "PPE": "egyéni védőeszköz",
  "EVE": "egyéni védőeszköz",
  "CO": "szén-monoxid",
  "CO2": "szén-dioxid",
  "ESD": "elektrosztatikus kisülés",
  "SELV": "biztonsági törpefeszültség",
  "PELV": "védelmi törpefeszültség"
};

ABBREVIATIONS.forEach((item) => {
  if (ABBR_HU[item[0]]) item[2] = ABBR_HU[item[0]];
});

function refineQuestion(question, answers, correct, explanation) {
  const item = QUESTIONS.find((entry) => entry.question === question);
  if (!item) return;
  item.answers = answers;
  item.correct = correct;
  if (explanation) item.explanation = explanation;
}

[
  [
    "Mit csinál a buck, vagyis step-down DC-DC konverter?",
    ["Csökkenti a bemeneti egyenfeszültséget", "Növeli a bemeneti egyenfeszültséget", "A bemenetnél azonos átlagfeszültséget tart PWM-mel", "A kimeneti polaritást invertálja, de az értéket nem szabályozza"],
    [0],
    "a buck, más néven step-down konverter feladata az egyenfeszültség csökkentése."
  ],
  [
    "Melyik 3 egység lehet tipikusan egy mikrokontrollerben?",
    ["CPU", "Időzítő/számláló egység", "Digitális I/O port", "Külső HMI panel", "Ipari 24 V-os relémodul", "Ethernet switch"],
    [0, 1, 2],
    "a mikrokontroller chipen belül tartalmaz CPU-t, perifériákat és I/O portokat; a HMI, relémodul és switch külső eszköz."
  ],
  [
    "Melyik 3 feladatra használható a Timer/Counter egység?",
    ["Késleltetés", "Impulzusszámlálás", "Periódusidő mérése", "Analóg feszültség digitalizálása", "Programkód tartós tárolása", "Soros adatkeret címzése"],
    [0, 1, 2],
    "a Timer/Counter idővel és számlálással kapcsolatos feladatokra való; az ADC, Flash vagy kommunikációs periféria más egység."
  ],
  [
    "Mi a PWM lényege?",
    ["Állandó periódusidejű jel, változó kitöltési tényezővel", "Változó periódusidejű jel, mindig 50% kitöltéssel", "Analóg feszültség közvetlen előállítása digitális-analóg átalakítóval", "Impulzusok darabszámának egyszerű számlálása kimeneti jel nélkül"],
    [0],
    "PWM-nél a periódusidő jellemzően állandó, a magas szint idejének aránya, vagyis a kitöltési tényező változik."
  ],
  [
    "Mi a PLC?",
    ["Programozható logikai vezérlő", "Programozható lokális kontroller", "Programlogikai ciklusvezérlő", "Programozható létradiagram modul"],
    [0],
    "a PLC jelentése Programmable Logic Controller, magyarul programozható logikai vezérlő."
  ],
  [
    "Melyik 3 feladat lehet PLC-feladat SCADA rendszerben?",
    ["Adatgyűjtés terepi eszközökről", "Adatok továbbítása a felügyeleti számítógépnek", "Beavatkozók vezérlése", "Hosszú távú historikus adatbázis kezelése", "Teljes kezelőfelület megjelenítése operátornak", "Üzemi trendgrafikonok archiválása szerveren"],
    [0, 1, 2],
    "a PLC terepi jeleket olvas, vezérlést végez és adatot továbbít; a hosszú távú naplózás és teljes HMI inkább SCADA/szerver feladat."
  ],
  [
    "Melyik PLC programozási nyelv hasonlít elektromos kapcsolási rajzhoz?",
    ["Létradiagram", "Funkcióblokk diagram", "Strukturált szöveg", "Utasításlista"],
    [0],
    "a létradiagram kontaktusokkal és tekercsekkel ábrázolja a logikát, ezért hasonlít kapcsolási rajzhoz."
  ],
  [
    "Mi a fő különbség a vezérlés és a szabályozás között?",
    ["A szabályozás visszacsatolást használ", "A vezérlés mindig analóg jelet használ", "A szabályozásban nincs beavatkozó", "A vezérlés mindig PLC nélkül történik"],
    [0],
    "szabályozásnál mérjük a kimenetet és visszacsatoljuk, vezérlésnél nincs ilyen zárt kör."
  ],
  [
    "Mi a terepi busz fő célja?",
    ["Ipari terepi eszközök kommunikációja", "Csak analóg 4-20 mA jel erősítése", "PLC programok grafikus szerkesztése", "SCADA riasztások archiválása adatbázisban"],
    [0],
    "a terepi busz szenzorok, beavatkozók és vezérlők közötti ipari adatcserét szolgálja."
  ],
  [
    "Melyik fizikai átviteli szabvány differenciális, ipari környezetben gyakori buszoknál?",
    ["RS-485", "RS-232", "4-20 mA áramhurok", "Ethernet MAC-címtábla"],
    [0],
    "az RS-485 differenciális jelátvitelt használ, ezért zajos ipari környezetben is gyakori."
  ],
  [
    "Melyik 2 állítás igaz a CAN buszra?",
    ["Multi-master működésű lehet", "CAN_H és CAN_L vezetékeket használ", "Mindig egyetlen master vezérli az összes csomópontot", "4-20 mA analóg jelre ülteti a digitális adatot"],
    [0, 1],
    "a CAN busz több vezérlőt engedhet a buszra, és differenciális CAN_H/CAN_L vezetékpárt használ."
  ],
  [
    "Mit jelent a SCADA?",
    ["Supervisory Control and Data Acquisition", "Supervisory Control and Data Analysis", "System Control and Data Acquisition", "Supervisory Communication and Data Acquisition"],
    [0],
    "a SCADA teljes jelentése Supervisory Control and Data Acquisition, vagyis felügyelet és adatgyűjtés."
  ],
  [
    "Melyik 3 elem jellemző SCADA rendszerben?",
    ["HMI képernyő", "Riasztáskezelés", "Trend és naplózás", "Terepi szenzor közvetlen mechanikus mérőeleme", "PLC program ciklusidejének belső utasítása", "RTU tápegységének primer oldali biztosítéka"],
    [0, 1, 2],
    "a SCADA felügyeleti oldalon HMI-t, riasztást, trendet és naplózást ad; a terepi mérőelem és belső PLC programrész nem SCADA funkció."
  ],
  [
    "Mi jellemzőbb RTU-ra, mint tipikus PLC-re?",
    ["Távoli terepi adatgyűjtés, gyakran nagyobb távolságokon", "Nagy sebességű gépvezérlés rövid ciklusidővel", "Létradiagram alapú helyi logikai vezérlés", "Közvetlen kezelőpanel funkció operátori grafikonokkal"],
    [0],
    "az RTU tipikusan távoli adatgyűjtő egység, míg a PLC inkább helyi gép- és folyamatvezérlésben erős."
  ],
  [
    "Melyik 2 NAT típus/fogalom tartozik a címfordításhoz?",
    ["Static NAT", "PAT", "VLAN trunk", "DHCP relay"],
    [0, 1],
    "a Static NAT és a PAT címfordítási megoldás; a VLAN trunk és DHCP relay más hálózati funkció."
  ],
  [
    "Mi alapján továbbít alapvetően a switch?",
    ["MAC-címtábla alapján", "IP routing tábla alapján", "TCP portszám alapján", "DNS névfeloldás alapján"],
    [0],
    "a switch adatkapcsolati rétegű eszköz, ezért MAC-címtábla alapján dönt a továbbításról."
  ],
  [
    "Melyik 3 fogalom kapcsolódik kiberbiztonsághoz?",
    ["VPN", "AES", "EAP", "DHCP lease idő", "VLAN azonosító", "Broadcast cím"],
    [0, 1, 2],
    "a VPN, AES és EAP közvetlenül biztonsághoz, titkosításhoz vagy hitelesítéshez kapcsolódik."
  ],
  [
    "Mire szolgál a DHCP?",
    ["Automatikus IP-cím és hálózati beállítás kiosztására", "Statikus útvonalak kézi felvitelére minden kliensen", "MAC-címtábla tanulására switchekben", "DNS zónarekordok titkosítására"],
    [0],
    "a DHCP automatikusan kioszthat IP-címet, átjárót, DNS-t és más hálózati beállításokat."
  ],
  [
    "Mi az IoT lényege?",
    ["Szenzorokkal, kommunikációval és feldolgozással rendelkező eszközök hálózata", "Csak helyi szenzorok hálózat nélküli adatgyűjtése", "Csak felhőben futó alkalmazás terepi eszközök nélkül", "Csak ipari PLC-k közötti vezetékes buszrendszer"],
    [0],
    "az IoT lényege, hogy fizikai eszközök adatot mérnek, kommunikálnak és feldolgozást vagy szolgáltatást támogatnak."
  ],
  [
    "Melyik IoT protokoll publish/subscribe alapú?",
    ["MQTT", "HTTP polling", "Modbus RTU", "LoRa fizikai réteg"],
    [0],
    "az MQTT brokerrel működő publish/subscribe üzenetküldést használ, ami IoT-ben gyakori."
  ],
  [
    "Melyik 3 lehet vezeték nélküli IoT kommunikáció?",
    ["LoRaWAN", "WiFi", "NFC", "RS-485", "HART", "PROFIBUS DP"],
    [0, 1, 2],
    "a LoRaWAN, WiFi és NFC vezeték nélküli technológia; az RS-485, HART és PROFIBUS vezetékes ipari megoldás."
  ],
  [
    "Mi az elsődleges kulcs szerepe?",
    ["Rekord egyedi azonosítása", "Másik tábla rekordjára hivatkozás", "Keresések gyorsítása külön adatszerkezettel", "Ismétlődő adatok szándékos tárolása"],
    [0],
    "az elsődleges kulcs egyedileg azonosítja a tábla minden rekordját."
  ],
  [
    "Mit csinál az idegen kulcs?",
    ["Másik tábla elsődleges kulcsára hivatkozik", "Egy rekordot egyedileg azonosít a saját táblában", "Lekérdezési eredménynek ideiglenes nevet ad", "Ismétlődő sorokat távolít el SELECT-ben"],
    [0],
    "az idegen kulcs táblák közötti kapcsolatot hoz létre úgy, hogy másik tábla kulcsára hivatkozik."
  ],
  [
    "Melyik 2 célja lehet a normalizálásnak?",
    ["Redundancia csökkentése", "Adatellentmondások mérséklése", "Indexek számának kötelező maximalizálása", "Minden tábla egyetlen oszlopra bontása"],
    [0, 1],
    "a normalizálás az ismétlődő adattárolás és az ebből eredő ellentmondások csökkentésére szolgál."
  ],
  [
    "Mire jó az adatbázis-index?",
    ["Gyorsíthatja a keresést és rendezést", "Kötelezően megszünteti az összes redundanciát", "Mindig gyorsítja az INSERT műveletet is", "Elsődleges kulcs nélkül helyettesíti a táblakapcsolatokat"],
    [0],
    "az index gyorsabb keresést és rendezést adhat, de plusz tárhelyet és írási költséget jelenthet."
  ],
  [
    "Mit csinál a SELECT DISTINCT?",
    ["Ismétlődések nélküli értékeket kér le", "Új táblát hoz létre megadott mezőkkel", "Idegen kulcsot állít be két tábla között", "Jogosultságot ad egy felhasználónak"],
    [0],
    "a DISTINCT a lekérdezés eredményéből az ismétlődő sorokat/értékeket szűri ki."
  ],
  [
    "Mi a HTML fő szerepe?",
    ["A weboldal szerkezetének leírása", "A weboldal vizuális formázása", "A weboldal kliensoldali viselkedésének programozása", "A HTML dokumentum fa-struktúrájának futásidejű kezelése"],
    [0],
    "a HTML jelölőnyelv a tartalom szerkezetét írja le; a CSS formáz, a JavaScript viselkedést ad."
  ],
  [
    "Melyik 2 JavaScript változódeklaráció használatos modern kódban?",
    ["let", "const", "var csak minden esetben kötelezően", "define"],
    [0, 1],
    "modern JavaScriptben a let és const az alapvető deklaráció; a var régebbi, a define nem változódeklaráció."
  ],
  [
    "Mi a CMS?",
    ["Tartalomkezelő rendszer", "Kliensoldali modul szintaxis", "CSS modul szelektor", "HTML dokumentum objektummodell"],
    [0],
    "a CMS Content Management System, vagyis webes tartalmak kezelésére szolgáló rendszer."
  ],
  [
    "Mi az ERP?",
    ["Vállalatirányítási rendszer", "Ügyfélkapcsolat-kezelő modul", "Minőségirányítási rendszer", "Számítógéppel támogatott gyártási rendszer"],
    [0],
    "az ERP a vállalat erőforrásait és folyamatait integrált modulokkal kezeli."
  ],
  [
    "Melyik 3 lehet ERP modul?",
    ["Pénzügy", "Raktár/logisztika", "Értékesítés", "ISO 9001 szabványpont", "PDCA cikluslépés", "CAD rajzoló parancs"],
    [0, 1, 2],
    "az ERP-ben tipikus modul a pénzügy, raktár/logisztika és értékesítés; az ISO, PDCA és CAD nem ERP modul."
  ],
  [
    "Mi az ISO?",
    ["Nemzetközi Szabványügyi Szervezet", "Minőségirányítási szabvány konkrét tanúsítványa", "Vállalatirányítási szoftver modul", "Ügyfélkapcsolat-kezelési adatlap"],
    [0],
    "az ISO a nemzetközi szabványügyi szervezet neve, nem maga egy konkrét ERP modul."
  ],
  [
    "Melyik 3 lehet egyéni védőeszköz?",
    ["Védőszemüveg", "Védőkesztyű", "Hallásvédő", "Biztonsági adatlap", "Menekülési útvonal jel", "Munkavédelmi oktatási jegyzőkönyv"],
    [0, 1, 2],
    "az EVE/PPE közvetlenül viselt személyi védelem, például szemüveg, kesztyű és hallásvédő."
  ],
  [
    "Mi az ESD?",
    ["Elektrosztatikus kisülés", "Biztonsági törpefeszültség", "Védelmi törpefeszültség", "Egyéni védőeszköz"],
    [0],
    "az ESD elektrosztatikus kisülés, amely elektronikai alkatrészeket károsíthat."
  ],
  [
    "Képernyős munkavégzésnél miért fontos a pihenőidő és az ergonómia?",
    ["A szem- és mozgásszervi terhelés csökkentése miatt", "Az elektromos érintésvédelem földelési ellenállása miatt", "A veszélyes anyagok címkézése miatt", "A tűzoltó készülék oltóanyagának megválasztása miatt"],
    [0],
    "a képernyős munkánál a testhelyzet, megvilágítás és pihenők a szem- és mozgásszervi terhelést csökkentik."
  ],
  [
    "Mit csinál a watchdog timer?",
    ["Lefagyás esetén újraindíthatja a mikrokontrollert", "PWM jel kitöltési tényezőjét közvetlenül analóg feszültséggé alakítja", "Nem felejtő memóriaként beállításokat tárol", "Soros kommunikációban címzi a slave eszközöket"],
    [0],
    "a watchdog timer programfelügyeleti időzítő, amely hibásan futó programnál újraindítást válthat ki."
  ],
  [
    "Melyik analóg jeltartomány gyakori ipari PLC környezetben?",
    ["4-20 mA", "0-5 mA", "24-48 mA", "230 V AC analóg tartomány"],
    [0],
    "ipari PLC analóg jeleknél gyakori a 4-20 mA áramjel és a 0-10 V feszültségjel."
  ],
  [
    "Melyik PROFIBUS változat jellemzőbb folyamatipari műszerekhez?",
    ["PROFIBUS PA", "PROFIBUS DP", "PROFINET IO", "RS-485 Modbus RTU"],
    [0],
    "a PA a Process Automation rövidítése, ezért folyamatipari műszerekhez jellemzőbb."
  ],
  [
    "Miért előnyös a differenciális jelátvitel ipari buszoknál?",
    ["Jobb zavartűrést ad", "Nagyobb tápfeszültséget biztosít a PLC-nek", "Automatikusan titkosítja a kereteket", "Kiváltja a lezáró ellenállást"],
    [0],
    "a differenciális jelátvitel a két vezeték közötti különbséget figyeli, ezért zajos környezetben ellenállóbb."
  ],
  [
    "Mi a trend szerepe SCADA rendszerben?",
    ["Mért értékek időbeli változásának megjelenítése", "Riasztási határértékek fizikai érzékelése", "PLC bemenetek közvetlen galvanikus leválasztása", "Operátori jogosultságok titkosítása"],
    [0],
    "a trend idősoron vagy grafikonon mutatja, hogyan változik egy folyamatérték."
  ],
  [
    "Melyik állítás igaz a SCADA-ra?",
    ["Hibrid rendszer lehet informatikai és ipari vezérlési elemekkel", "Csak terepi szenzorokból áll központi felügyelet nélkül", "Csak PLC programozási nyelvként használható", "Nem tartalmazhat kommunikációs kapcsolatot"],
    [0],
    "a SCADA terepi eszközöket, kommunikációt, szervereket és felügyeleti felületet fog össze."
  ],
  [
    "Mi az IoT gateway egyik tipikus feladata?",
    ["Protokollfordítás és továbbítás helyi eszközök és felhő között", "Szenzor ellenállásának fizikai megváltoztatása", "Felhőszolgáltatás előfizetési díjának számlázása", "Adatbázis normalizálása a végfelhasználónál"],
    [0],
    "az IoT gateway összeköti a helyi eszközöket a hálózattal vagy felhővel, gyakran protokollfordítással."
  ],
  [
    "Melyik felhőmodell ad kész alkalmazást a felhasználónak?",
    ["SaaS", "PaaS", "IaaS", "On-premise szerver"],
    [0],
    "SaaS esetén kész szoftvert használunk szolgáltatásként; PaaS platformot, IaaS infrastruktúrát ad."
  ],
  [
    "Mit jelent a redundancia adatbázisban?",
    ["Felesleges/ismétlődő adattárolás", "Kötelező elsődleges kulcs használata", "Gyors keresést segítő index", "Két tábla közötti idegen kulcs kapcsolat"],
    [0],
    "a redundancia ugyanazon adat felesleges ismétlését jelenti, ami ellentmondáshoz vezethet."
  ],
  [
    "Mi a JavaScript fő szerepe weboldalon?",
    ["Interaktív működés és viselkedés megvalósítása", "HTML elemek alapstruktúrájának jelölése", "CSS szabályok statikus tárolása", "Képek tömörítése a szerveren"],
    [0],
    "a JavaScript a weboldal viselkedését és interakcióit programozza."
  ],
  [
    "Mit ír le a CSS?",
    ["A weboldal megjelenését", "A HTML dokumentum tartalmi szerkezetét", "A JavaScript futási logikáját", "A böngésző DOM API eseményeit"],
    [0],
    "a CSS a megjelenést írja le, például színeket, elrendezést, méreteket és betűtípust."
  ],
  [
    "Mit jelent a minőségbiztosítás lényege?",
    ["Folyamatok szabályozása, hogy a termék/szolgáltatás megfeleljen az elvárásoknak", "Csak a kész termék végellenőrzése folyamatjavítás nélkül", "ERP modulok kötelező telepítése minden cégnél", "CAD rajzok automatikus gyártásba küldése"],
    [0],
    "a minőségbiztosítás nem csak végellenőrzés, hanem folyamatok szabályozása és stabil minőség elérése."
  ],
  [
    "Miért hasznos az ERP modularitása?",
    ["A vállalati területek külön modulokkal, mégis integráltan kezelhetők", "Minden modul külön adatbázist használ kapcsolat nélkül", "Csak a minőségirányítási dokumentumokat tárolja", "Kizárólag ügyfélkapcsolati funkciót ad"],
    [0],
    "az ERP moduljai külön területeket fednek le, de integrált rendszerben közös vállalati adatokat kezelnek."
  ],
  [
    "Miért veszélyes a szén-monoxid?",
    ["Színtelen, szagtalan és mérgező", "Erős szaga miatt pánikot okoz", "Csak magas oxigénszint mellett ártalmas", "Csak elektromos berendezéseket károsít"],
    [0],
    "a CO azért különösen veszélyes, mert érzékszervekkel nehezen észlelhető, mégis mérgező."
  ],
  [
    "Mit jelent az érintésvédelem célja?",
    ["Az áramütés veszélyének csökkentése", "A képernyős szemterhelés csökkentése", "A tűzoltó készülék jelölésének egységesítése", "A veszélyes anyagok címkézésének kiváltása"],
    [0],
    "az érintésvédelem célja, hogy villamos berendezéseknél csökkentse az áramütés kockázatát."
  ]
].forEach(([question, answers, correct, explanation]) => refineQuestion(question, answers, correct, explanation));
