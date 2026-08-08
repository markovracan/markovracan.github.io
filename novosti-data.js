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
// content     - niz odlomaka (HTML dopušten unutar odlomka)
// quote       - (opcionalno) istaknuti citat
// ============================================================

const NOVOSTI = [
  {
    slug: "broncano-lignano",
    tag: "Reprezentacija",
    title: "Brončano odličje s ITTF World Para Challengera u Lignanu",
    date: "22. ožujka 2026.",
    dateSort: "2026-03-22",
    excerpt: "U paru s Bornom Zohilom osvojio je brončanu medalju u konkurenciji MD18 na jednom od najjačih međunarodnih turnira u kalendaru, talijanskom Lignanu.",
    content: [
      "Hrvatska reprezentacija u parastolnom tenisu vratila se s još jednim odličjem, a ovoga puta zaslužni su Marko Vračan i Borna Zohil, koji su na ITTF World Para Challengeru u talijanskom Lignanu osvojili brončanu medalju u konkurenciji parova, kategoriji MD18.",
      "Turnir u Lignanu jedan je od redovitih postaja svjetskog para stolnoteniskog kalendara i okuplja igrače iz desetaka zemalja koji se bore za dragocjene bodove za svjetsku rang listu. Za Marka i Bornu ovo nije prvi zajednički uspjeh, dvojac redovito nastupa zajedno u konkurenciji parova za hrvatsku reprezentaciju i s vremenom je izgradio prepoznatljivu igru, izraženu strpljivošću u duljim razmjenama i odličnom komunikacijom za stolom.",
      "Osvojena bronca dodatna je potvrda da je hrvatski parastolni tenis, unatoč skromnijim uvjetima treniranja u odnosu na velike sportske sile, sposoban parirati najjačima. Marko nakon turnira ne krije zadovoljstvo, ali ni apetite za novim izazovima.",
      "Bodovi osvojeni u Lignanu ulaze u ukupni poredak za nadolazeća europska i svjetska prvenstva, gdje Marko i Borna imaju priliku dodatno popraviti svoj plasman."
    ],
    quote: "Svaki turnir s Bornom je posebna kemija, znamo se odlično nadopunjavati za stolom, a medalja s ovakvog jakog turnira samo je potvrda da smo na dobrom putu."
  },
  {
    slug: "podgorica-turnir",
    tag: "Turnir",
    title: "Uspješan nastup na turniru u Podgorici",
    date: "12. svibnja 2026.",
    dateSort: "2026-05-12",
    excerpt: "Na jakom međunarodnom turniru u Podgorici Marko je u pojedinačnoj konkurenciji prošao skupinu, a s Bornom Zohilom stigao do četvrtfinala parova.",
    content: [
      "Marko Vračan zabilježio je zapažen nastup na međunarodnom turniru u Podgorici, gdje se u dresu hrvatske reprezentacije natjecao u kategoriji 8, jednoj od najjačih i najbrojnijih na ovogodišnjem izdanju turnira.",
      "U pojedinačnoj konkurenciji, u kojoj je nastupilo ukupno 23 igrača, Marko je skupinu otvorio porazom od belgijskog igrača Ledouxa rezultatom 0:3, no odmah je pokazao karakter i taj rezultat okrenuo u svoju korist pobjedom protiv norveškog reprezentativca Johansena. Prolazak skupine odveo ga je u osminu finala, gdje je nakon borbenog meča 2:3 bolji bio kineski igrač Weinan Peng, koji je na kraju turnir završio na drugom mjestu.",
      "Još bolje rezultate Marko je ostvario u konkurenciji parova, gdje je zaigrao s dugogodišnjim reprezentativnim partnerom Bornom Zohilom. Hrvatski dvojac uvjerljivo je proveo skupnu fazu, pobjedama protiv Čilea i Norveške rezultatom 3:0 te tijesnom pobjedom protiv Crne Gore 3:2. Kao nositelji turnira, Marko i Borna su bili slobodni u osmini finala, a u četvrtfinalu su nakon velike borbe s 3:2 svladali reprezentaciju Kazahstana.",
      "Turnir u Podgorici još je jednom potvrdio da Marko pripada samom vrhu svoje kategorije u regiji te da je spreman parirati suparnicima iz snažnijih parastolnoteniskih sustava poput Belgije, Kine i Norveške."
    ]
  },
  {
    slug: "santa-tecla-nulvi",
    tag: "Prijelaz",
    title: "Nova sezona: potpis za talijanski klub Santa Tecla Nulvi",
    date: "15. veljače 2026.",
    dateSort: "2026-02-15",
    excerpt: "Marko je svojim radom i rezultatima zaslužio mjesto u drugoj talijanskoj parastolnoteniskoj ligi, gdje nastupa za klub Santa Tecla Nulvi sa Sardinije.",
    content: [
      "S velikim ponosom Marko Vračan objavio je da je službeno potpisao za talijanski klub Santa Tecla Nulvi iz istoimenog malog mjesta na Sardiniji, čime nastavlja svoju klupsku karijeru u inozemstvu i pridružuje se drugoj talijanskoj parastolnoteniskoj ligi.",
      "Nakon niza intenzivnih treninga, brojnih odigranih utakmica i sudjelovanja na turnirima diljem Europe, Vračan je ostvario dogovor s klubom čiji je jasan cilj osvajanje lige i plasman u Serie A. U talijanskom prvenstvu Marko čini par s Alexandrosom Diakoumakosom iz Grčke, s kojim nastupa u A2 paraolimpijskoj klasi 6 do 10.",
      "Prvenstvo se sastoji od devet ekipa, a najbolja dva tima na kraju sezone osvajaju promociju u Serie A1, najvišu nacionalnu razinu talijanskog parastolnog tenisa. Dvojac je krenuo sjajno, uvjerljivim pobjedama 3:0 protiv ekipa ASD TT Decimomannu, Tennistavolo Sassari i TTSaronno Akuten, čime su se odmah postavili pri vrhu ljestvice.",
      "Osim obveza u Italiji, Marko i dalje redovito nastupa u hrvatskoj prvoj ligi za klub STK Kukuljanovo, gdje je u posljednjem kolu upisao pobjede protiv trećeg juniora Hrvatske Andreja Mrkića i Antonija Goje, pokazujući razinu igre koja lako parira i mlađim, ambicioznim domaćim igračima. Pred momčadi iz Nulvija ostale su još dvije runde sezone, u travnju u Bolzanu te u svibnju u Rimu, gdje će se odlučivati o plasmanu u Serie A1."
    ],
    quote: "Izuzetno sam ponosan jer je ovo nagrada za trud, odricanje i ulaganje u sve treninge koje sam do sada imao. Drago mi je što me se prati i izvan Hrvatske, a posebna mi je čast što me je klub iz Italije poželio u svojim redovima. Ovom prilikom zahvaljujem se predsjedniku Francescu Zentileu na ukazanom povjerenju."
  },
  {
    slug: "prelog-srebro",
    tag: "Prvenstvo",
    title: "Srebro s Državnog prvenstva Hrvatske u Prelogu",
    date: "3. ožujka 2026.",
    dateSort: "2026-03-03",
    excerpt: "Na Državnom prvenstvu Hrvatske, ovoga puta održanom u Prelogu, Marko je u pojedinačnoj konkurenciji kategorije 8 osvojio srebrnu medalju.",
    content: [
      "Sportsko rekreacijski centar DG Sport i Hotel Panorama u Prelogu ugostili su ovogodišnje Državno prvenstvo Hrvatske u parastolnom tenisu, natjecanje u organizaciji Hrvatskog parastolnoteniskog saveza koje svake godine okuplja najbolje domaće igrače u kategorijama kadeta, juniora i seniora.",
      "Otvorenje natjecanja upriličio je gradonačelnik Preloga, uz prisustvo predsjednika Hrvatskog paraolimpijskog odbora, predsjednika Hrvatskog parastolnoteniskog saveza te brojnih drugih uzvanika, što je natjecanju dalo dodatnu svečanu notu.",
      "Marko Vračan u svojoj kategoriji 8 izborio je finale nakon niza čvrstih mečeva te na kraju osvojio srebrnu medalju, potvrdivši time status jednog od najstabilnijih hrvatskih igrača posljednjih sezona. Klub Uspon iz Velike Gorice, za koji Marko također nastupa uz matičnu Synergiu, na ovom je prvenstvu osvojio čak deset medalja i završio na fantastičnom trećem mjestu u ukupnom poretku klubova.",
      "Srebro iz Preloga za Marka predstavlja odličnu odskočnu dasku pred nastavak sezone, u kojoj ga uz domaće obveze čekaju i međunarodni turniri te nastupi za talijanski klub Santa Tecla Nulvi."
    ]
  },
  {
    slug: "zlato-slavonski-brod",
    tag: "Arhiva",
    title: "Zlato na Državnom prvenstvu u Slavonskom Brodu",
    date: "1. srpnja 2023.",
    dateSort: "2023-07-01",
    excerpt: "Na 29. Državnom prvenstvu Hrvatske, uz 115 natjecatelja iz 18 klubova, Marko je nakon četiri pobjede i petosetne finalne drame osvojio naslov prvaka u kategoriji 8.",
    content: [
      "Jedan od najvažnijih trenutaka dosadašnje karijere Marka Vračana dogodio se u Slavonskom Brodu, gdje je na 29. Državnom prvenstvu Hrvatske u parastolnom tenisu, uz čak 115 natjecatelja iz 18 klubova, osvojio naslov prvaka u kategoriji 8.",
      "Do zlata je stigao nakon četiri uvjerljive pobjede, a status prvog nositelja turnira dobio je nakon što njegov reprezentativni kolega i suigrač iz parova Borna Zohil nije mogao nastupiti. Marko je tu ulogu favorita u potpunosti opravdao, iako mu put do naslova nije bio nimalo lagan.",
      "U velikom finalu protiv Tonija Milasa iz PSTKOI Zagreb odigrao je pravu dramu od pet setova, u kojoj je na kraju, zahvaljujući mentalnoj čvrstoći i mjesecima svakodnevnih dvostrukih treninga, slavio Marko. Naslov državnog prvaka tako je postao najsjajnija potvrda njegovog dotadašnjeg rada.",
      "Uspjeh u Slavonskom Brodu otvorio je vrata mnogim kasnijim prilikama, od stalnog mjesta u reprezentaciji do poziva iz inozemnih klubova, a Marko ga i danas ističe kao trenutak koji mu je najviše učvrstio vjeru u vlastiti put."
    ],
    quote: "Stolni tenis treniram svaki dan, ponekad i dvaput dnevno, i naslov državnog prvaka je dokaz da se sav taj uloženi trud na kraju itekako isplati."
  }
];

// Sortiraj automatski od najnovije prema najstarijoj vijesti
NOVOSTI.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
