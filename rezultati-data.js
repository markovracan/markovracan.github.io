// ============================================================
// MARKO VRAČAN — BAZA REZULTATA
// Za dodavanje novog rezultata, dodaj novi objekt na POČETAK niza
// REZULTATI. Rezultati se automatski prikazuju na rezultati.html,
// sortirani od najnovijeg prema najstarijem, uz filtriranje po
// disciplini i automatski izračunatu statistiku medalja pri vrhu.
//
// POLJA:
// dateSort    - GGGG-MM-DD, koristi se za sortiranje
// date        - datum za prikaz
// natjecanje  - naziv natjecanja
// mjesto      - grad / država održavanja
// disciplina  - "pojedinačno" | "parovi" | "ekipno"
// partner     - (opcionalno) ime partnera u parovima
// plasman     - tekst plasmana, npr. "1. mjesto", "Osmina finala"
// medalja     - "zlato" | "srebro" | "bronca" | null
// opis        - kratka rečenica konteksta
// mecevi      - (opcionalno) niz pojedinačnih mečeva unutar tog nastupa.
//               Ako se doda, na rezultati.html se pojavljuje gumb
//               "Detalji mečeva" koji otvara popis. Ako se izostavi
//               ili ostavi prazan niz [], gumb se jednostavno ne prikazuje.
//               Svaki meč ima:
//                 faza       - naziv faze, npr. "Skupina", "Osmina finala", "Finale"
//                 protivnik  - ime protivnika (po želji i zemlja u zagradi)
//                 rezultat   - točan rezultat, npr. "3:1", "2:3"
//                 pobjeda    - true ako je Marko pobijedio, false ako je izgubio
//                              (određuje boju: zelena za pobjedu, crvena za poraz)
// ============================================================

const REZULTATI = [
  {
    dateSort: "2026-03-22",
    date: "Ožujak 2026.",
    natjecanje: "ITTF World Para Challenger",
    mjesto: "Lignano, Italija",
    disciplina: "parovi",
    partner: "Borna Zohil",
    plasman: "3. mjesto",
    medalja: "bronca",
    opis: "Brončano odličje u konkurenciji MD18 na jednom od vodećih turnira svjetskog kalendara."
  },
  {
    dateSort: "2026-05-12",
    date: "Svibanj 2026.",
    natjecanje: "Međunarodni turnir",
    mjesto: "Podgorica, Crna Gora",
    disciplina: "pojedinačno",
    partner: null,
    plasman: "Osmina finala",
    medalja: null,
    opis: "Prolazak skupine (kategorija 8, 23 igrača), poraz u osmini finala od budućeg finalista turnira.",
    mecevi: [
      { faza: "Skupina", protivnik: "Ledoux (Belgija)", rezultat: "0:3", pobjeda: false },
      { faza: "Skupina", protivnik: "Johansen (Norveška)", rezultat: "3:1", pobjeda: true },
      { faza: "Osmina finala", protivnik: "Weinan Peng (Kina)", rezultat: "2:3", pobjeda: false }
    ]
  },
  {
    dateSort: "2026-05-12",
    date: "Svibanj 2026.",
    natjecanje: "Međunarodni turnir",
    mjesto: "Podgorica, Crna Gora",
    disciplina: "parovi",
    partner: "Borna Zohil",
    plasman: "Četvrtfinale",
    medalja: null,
    opis: "Pobjede protiv Čilea (3:0) i Crne Gore (3:2) u skupini, poraz u četvrtfinalu 2:3.",
    mecevi: [
      { faza: "Skupina", protivnik: "Čile", rezultat: "3:0", pobjeda: true },
      { faza: "Skupina", protivnik: "Crna Gora", rezultat: "3:2", pobjeda: true },
      { faza: "Četvrtfinale", protivnik: "Kazahstan", rezultat: "2:3", pobjeda: false }
    ]
  },
  {
    dateSort: "2026-03-03",
    date: "Ožujak 2026.",
    natjecanje: "Državno prvenstvo Hrvatske",
    mjesto: "Prelog, Hrvatska",
    disciplina: "pojedinačno",
    partner: null,
    plasman: "2. mjesto",
    medalja: "srebro",
    opis: "Srebrna medalja u kategoriji 8 na prvenstvu koje je klub Uspon završio na 3. mjestu poretka klubova."
  },
  {
    dateSort: "2026-02-15",
    date: "Sezona 2025/2026",
    natjecanje: "Druga talijanska liga (Serie B)",
    mjesto: "Sardinija, Italija",
    disciplina: "parovi",
    partner: "Alexandros Diakoumakos",
    plasman: "Vrh ljestvice",
    medalja: null,
    opis: "Tri uzastopne pobjede 3:0 za klub Santa Tecla Nulvi u borbi za promociju u Serie A1."
  },
  {
    dateSort: "2026-01-20",
    date: "Sezona 2025/2026",
    natjecanje: "Hrvatska prva liga",
    mjesto: "Kukuljanovo, Hrvatska",
    disciplina: "ekipno",
    partner: null,
    plasman: "2 pobjede",
    medalja: null,
    opis: "Pobjede protiv trećeg juniora Hrvatske Andreja Mrkića i Antonija Goje za STK Kukuljanovo."
  },
  {
    dateSort: "2023-07-01",
    date: "Srpanj 2023.",
    natjecanje: "29. Državno prvenstvo Hrvatske",
    mjesto: "Slavonski Brod, Hrvatska",
    disciplina: "pojedinačno",
    partner: null,
    plasman: "1. mjesto",
    medalja: "zlato",
    opis: "Naslov državnog prvaka u kategoriji 8 nakon četiri pobjede i petosetne finalne pobjede protiv Tonija Milasa."
  },
  {
    dateSort: "2023-04-15",
    date: "Travanj 2023.",
    natjecanje: "Međunarodni turnir",
    mjesto: "Crna Gora",
    disciplina: "parovi",
    partner: "Borna Zohil",
    plasman: "3. mjesto",
    medalja: "bronca",
    opis: "Brončano odličje u paru koje je Marka postavilo kao prvog nositelja na sljedećem Državnom prvenstvu."
  }
];

// Sortiraj automatski od najnovijeg prema najstarijem rezultatu
REZULTATI.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
