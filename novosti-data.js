// ============================================================
// MARKO VRAČAN — BAZA NOVOSTI
// Za dodavanje nove vijesti, jednostavno dodaj novi objekt na POČETAK
// niza NOVOSTI (ispod). Svaka vijest automatski dobiva svoju
// podstranicu na clanak.html?slug=tvoj-slug i pojavljuje se na
// novosti.html i u pregledu na naslovnici.
//
// POLJA:
// slug        - jedinstveni identifikator za URL (bez razmaka)
// tag         - kratka oznaka kategorije (npr. "Turnir", "Prijelaz")
// title       - naslov vijesti
// date        - datum za prikaz (npr. "12. svibnja 2026.")
// dateSort    - datum u formatu GGGG-MM-DD radi ispravnog sortiranja
// excerpt     - kratki opis za kartice
// slika       - (opcionalno) naziv/putanja fotografije, npr. "slike/lignano.jpg".
//               Ako se doda, fotografija se automatski prikazuje na kartici
//               (naslovnica, novosti.html, povezane vijesti) i kao velika
//               naslovna fotografija na vrhu samog članka. Ako se izostavi,
//               prikazuje se postojeći placeholder s oznakom kategorije.
// content     - niz odlomaka (HTML dopušten unutar odlomka)
// quote       - (opcionalno) istaknuti citat
// ============================================================

const NOVOSTI = [
  {
    slug: "ostrava-turnir",
    tag: "Turnir",
    title: "Ostrava: još jedan turnir, još jedna lekcija",
    date: "18. lipnja 2026.",
    dateSort: "2026-06-18",
    excerpt: "Ostrava!!! Još jedan turnir, još jedna lekcija. Završio je i moj šesti turnir u zadnja tri mjeseca.",
    slika: "1.jpg",
    content: [
      "Ostrava!!! Još jedan turnir, još jedna lekcija. Završio je i moj šesti turnir u zadnja tri mjeseca.",
      "U Ostravi sam prošao skupinu s tri teške pobjede, ali me u osmini finala zaustavio mladi Poljak Zielinski. Nije bio moj najbolji dan, no sport je takav: nekad ide, nekad ne.",
      "Najvažnije je nastaviti raditi, učiti i rasti. Treba mi malo odmora od turnira, ali treninzi i usavršavanje tehnike idu dalje. Svaki udarac, svaki detalj, svaka sitnica čini razliku.",
      "Ogromno hvala mom timu. Oni su ti koji mi omogućuju vrhunske uvjete i stoje uz mene u svakom trenutku. Bez njih ovo putovanje ne bi imalo isti smjer."
    ]
  },
  {
    slug: "lasko-turnir",
    tag: "Turnir",
    title: "ITTF World Para Challenger Laško 2026",
    date: "7. svibnja 2026.",
    dateSort: "2026-05-07",
    excerpt: "Tjedan pun borbi, emocija i novih lekcija. U Laškom sam nastupio na najjačem turniru do sada, prošao skupinu i prvi put ušao u TOP 30.",
    slika: "2.jpg",
    content: [
      "Tjedan iza mene bio je pun borbi, emocija i novih lekcija. U Laškom sam nastupio na najjačem turniru do sada na kojem sam igrao, i iako sam bio u trećem potu, uspio sam proći skupinu.",
      "Prvi meč izgubio sam 3:1 od Emila Anderssona, ali sam u drugom pokazao koliko mogu kad stisnem zube. Protiv Brazilca De Souza Mashki slavio sam 3:2, iako sam ispustio veliku prednost u četvrtom setu. Peti set bio je čista mentalna borba.",
      "U osmini finala zaustavio me Kinez Weinan Peng, kasniji četvrtfinalist.",
      "Najvažnije od svega, prvi put sam ušao u TOP 30. To mi daje ogroman vjetar u leđa i potvrdu da radim dobre stvari.",
      "Sad slijedi mjesec i pol dana priprema za češki turnir u Ostravi. Idemo korak po korak, ali uvijek naprijed."
    ]
  }
];

// Sortiraj automatski od najnovije prema najstarijoj vijesti
NOVOSTI.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
