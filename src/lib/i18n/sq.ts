import type { Woerterbuch } from "./woerterbuch";

/**
 * Albanisch — ENTWURF. Muss vor Veröffentlichung muttersprachlich geprüft
 * werden (geprueft: false). Übersetzt aus der maßgeblichen deutschen
 * Fassung, ohne inhaltliche Ergänzungen.
 */
export const sq: Woerterbuch = {
  code: "sq",
  eigenname: "Shqip",
  flagge: "\u{1F1E6}\u{1F1F1}",
  geprueft: false,

  allgemein: {
    pruefHinweis:
      "Ky përkthim është një draft dhe duhet të kontrollohet nga një folës amtar para publikimit.",
    teilweiseUebersetzt:
      "Impressum-i, mbrojtja e të dhënave dhe deklarata e aksesueshmërisë mbeten në gjermanisht.",
    sprache: "Gjuha",
    sprachwahlOeffnen: "Zgjidhni gjuhën",
    freiwillig: "(vullnetare)",
    symbolbild: "(Foto simbolike)",
  },

  nav: {
    leistungen: "Shërbimet",
    praxisTeam: "Praktika & Ekipi",
    patientenservice: "Shërbimi për pacientët",
    kontaktAnfahrt: "Kontakti & Rruga",
    terminBuchen: "Cakto termin",
    menueOeffnen: "Hap menynë",
    menueSchliessen: "Mbyll menynë",
    zumInhalt: "Kalo te përmbajtja",
  },

  leiste: {
    notfall: "Urgjencë me rrezik për jetën",
    bereitschaft: "Shërbimi mjekësor kujdestar",
    termin: "Termini",
    anrufen: "Telefono",
    rezept: "Receta",
  },

  wochentageKurz: ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"],

  status: {
    wirdGeprueft: "Orari po kontrollohet",
    gebffnetBis: "Tani hapur",
    uhr: "",
    geschlossenWieder: "Mbyllur, hapet sërish:",
    wieder: "Hapet sërish:",
    heute: "sot",
    morgen: "nesër",
    ab: "në orën",
    feiertagHeute: "Sot është festë zyrtare.",
    urlaubHeute: "Praktika është aktualisht e mbyllur.",
    zurzeitGeschlossen: "Aktualisht e mbyllur",
  },

  start: {
    eyebrow: "Praktikë e mjekut të familjes në Espelkamp",
    headline: "Kujdes mjekësor familjar për të gjithë familjen.",
    text: "Prej shumë vitesh shoqërojmë njerëzit në Espelkamp dhe rrethinë — nga infeksionet akute deri te ndjekja shumëvjeçare e diabetit ose sëmundjeve të zemrës. Me kohë për bisedë dhe me diagnostikë në praktikën tonë.",
    rezeptAnfordern: "Kërko recetë",
    statusHinweis:
      "Terminet caktohen me telefon. Për vizitën merrni me vete kartën e sigurimit shëndetësor.",
    statusHinweisOnline:
      "Terminet mund t'i caktoni online ose me telefon. Për vizitën merrni me vete kartën e sigurimit shëndetësor.",
    wegeTitel: "Termini, receta dhe udhëzimi",
    wegeText:
      "Tri çështje, tri rrugë. Që të shkojë shpejt, mbani gati atë që shënohet te secila rrugë.",
    telefonTitel: "Rezultat, pyetje apo diçka tjetër?",
    telefonText:
      "Gjithçka tjetër e sqarojmë me telefon. Gjatë orarit të vizitave recepsioni është i hapur.",
    aerzteTitel: "Kush ju trajton",
    aerzteText:
      "Dy mjekë, një praktikë. Kë do të shihni varet nga termini; ecurinë tuaj e njohin të dy.",
    mehrPraxis: "Më shumë për praktikën dhe mënyrën e punës në",
    praxisseite: "faqen e praktikës",
    leistungenTitel: "Çfarë trajtojmë",
    leistungenText:
      "Kujdes bazë i mjekut të familjes, plus dy fusha specializimi: mjekësia manuale dhe mjekësia e varësive.",
    alleLeistungen: "Të gjitha shërbimet në detaje",
    vertrauenTitel: "Ku mund të orientoheni",
    vertrauenText:
      "Pa yje, pa portale vlerësimesh. Vetëm ajo që mund të verifikohet në këtë praktikë.",
    haltungssatz:
      "Shoqërim personal mjekësor familjar në Espelkamp — për njerëz që duan të dinë kush i trajton.",
    fakten: [
      {
        t: "Dhoma e Mjekëve Westfalen-Lippe",
        d: "Titulli profesional dhe rregullat profesionale në Impressum.",
      },
      {
        t: "Diagnostikë në praktikë",
        d: "EKG, matje afatgjata, ekografi dhe funksioni i mushkërive — pa rrugë të dytë.",
      },
      {
        t: "Vizita në shtëpi",
        d: "Për të gjithë ata që nuk mund të vijnë vetë në praktikë.",
      },
    ],
    impressumSatz:
      "Të dhënat për titullin profesional dhe rregullat profesionale i gjeni te",
    impressum: "Impressum-i",
    findenTitel: "Orari i vizitave dhe rruga",
    findenText:
      "Ju lutemi lajmërohuni me telefon. Për ankesa akute ejani në fillim të orarit të vizitave.",
    frageTitel: "Keni ende një pyetje?",
    frageText: "Na telefononi. Gjatë orarit të vizitave recepsioni është i hapur.",
    wartebereichAlt:
      "Pamje e zonës së pritjes së praktikës me rreshta karrigesh, raft revistash dhe dritare nga gjelbërimi",
  },

  zahlen: {
    ueber: "mbi ",
    patientenLabel: "pacientë",
    patientenZusatz:
      "të ndjekur nga mjeku i familjes, shumë prej tyre prej vitesh dhe me gjithë familjen.",
    jahreLabel: "vjet përvojë mjekësore",
    jahreZusatz: "nga puna spitalore, kirurgjikale dhe ambulatore.",
    schwerpunkteLabel: "fusha mjekësore",
    schwerpunkteZusatz:
      "Mjekësi e përgjithshme, mjekësi manuale dhe mjekësi e varësive — në një praktikë.",
  },

  google: {
    vonFuenf: "nga 5",
    ausRezensionen: "nga {n} vlerësime në Google",
    stand: "Gjendja",
    lesen: "Lexo vlerësimet në Google",
    neuerTab: "(Google hapet në skedë të re)",
  },

  sprechzeiten: {
    titel: "Orari i vizitave",
    geschlossen: "mbyllur",
    wochenendKurz: "Sht, Die",
    hinweis:
      "Ju lutemi lajmërohuni me telefon. Për ankesa akute ejani në fillim të orarit të vizitave.",
    bisUhr: "–",
    adresse: "Adresa",
    anfahrtKontakt: "Rruga dhe kontakti",
    feiertageZu:
      "Në festat zyrtare të Nordrhein-Westfalen praktika është e mbyllur.",
  },

  termin: {
    titel: "Caktimi i terminit",
    einleitungTelefon:
      "Terminet caktohen me telefon. Kështu vlerësojmë menjëherë sa urgjente është çështja juaj dhe ju japim kohën e duhur.",
    einleitungOnline:
      "Mund të caktoni online përmes {anbieter} ose të na telefononi — të dyja çojnë te i njëjti kalendar.",
    onlineTitel: "Cakto online",
    onlineText:
      "Caktimi online kalon përmes {anbieter}, një shërbimi të jashtëm për termine mjekësore. Ju largoheni nga kjo faqe; vlejnë njoftimet e privatësisë së shërbimit. Pas caktimit ktheheni këtu.",
    onlineButton: "Cakto termin online",
    onlineFallback:
      "Hapet {anbieter}. Nëse caktimi online nuk është i arritshëm, ju lutemi na telefononi.",
    oderTelefonisch: "Ose me telefon",
    soErreichen: "Si na kontaktoni",
    text: "Na telefononi gjatë orarit të vizitave. Mbani gati kartën e sigurimit — në vizitën e parë të tremujorit ajo lexohet.",
    hinweisAkut:
      "Për ankesa akute ejani në fillim të orarit. Jashtë orarit ndihmon shërbimi mjekësor kujdestar:",
  },

  anfrage: {
    bevorSieAusfuellen: "Para se të plotësoni",
    nurDauermedikationT: "Vetëm barna të përhershme",
    nurDauermedikationD:
      "Ky formular është për receta të përsëritura. Për barna të reja vendos mjeku në bisedë.",
    bearbeitungszeitT: "Koha e trajtimit",
    bearbeitungszeitD:
      "Ju lutemi llogaritni dy ditë pune. Fundjavave dhe festave nuk trajtojmë kërkesa.",
    voraussetzungT: "Kushti",
    voraussetzungD:
      "Jeni pacient i kësaj praktike dhe karta juaj e sigurimit është lexuar në tremujorin aktual.",
    abholungT: "Tërheqja",
    abholungD:
      "Udhëzimi më pas ju pret në recepsion. Për rrugë të tjera ju informojmë me telefon.",
    imNotfallT: "Në urgjencë",
    imNotfallD: "Telefononi 112. Mos prisni përgjigje përmes këtij formulari.",
    ihreAnforderung: "Kërkesa juaj",
    datenTitel: "Çfarë ndodh me të dhënat tuaja",
    datenText1:
      "Të dhënat tuaja dërgohen përmes një lidhjeje të koduar drejt e në postën e praktikës. Në këtë faqe nuk ruhen: nuk ka bazë të dhënash dhe as kopje.",
    datenText2:
      "Baza ligjore është pëlqimi juaj i shprehur sipas nenit 9 par. 2 pika a GDPR. Mund ta tërhiqni në çdo kohë duke na telefonuar.",
    datenText3:
      "Ju lutemi mos na dërgoni të dhëna shëndetësore nga programi juaj i email-it. Ajo rrugë nuk është e koduar; ky formular është.",
    notfallAsideTitel: "Në urgjencë mos prisni",
    notfallAsideText:
      "Kërkesat përmes këtij formulari trajtohen gjatë orarit të vizitave, jo menjëherë. Nëse është urgjente, përdorni këto rrugë.",
    keineBeratung:
      "Kjo faqe nuk jep këshilla mjekësore. Informacionet nuk zëvendësojnë bisedën me mjekun.",
  },

  rezept: {
    titel: "Kërkesa për recetë të përsëritur",
    einleitung:
      "Vetëm për barnat që i merrni tashmë rregullisht. Barnat e reja ose ndryshimet e dozës kërkojnë konsultë me mjekun — për këtë na telefononi.",
    formHinweis:
      "Të dhënat gjenden në paketimin e barit. Në një kërkesë mund të kërkoni deri në tre barna.",
    name: "Emri dhe mbiemri",
    geburtsdatum: "Data e lindjes",
    geburtsdatumHinweis: "Për shembull 03.04.1951",
    telefon: "Numri i telefonit për pyetje",
    telefonHinweis: "E përshpejton trajtimin nëse diçka është e paqartë.",
    medikament: "Bari",
    medikamentN: "Bari {n}",
    medikamentName: "Emri i barit",
    medikamentNameHinweis: "Ashtu siç shkruhet në paketim.",
    wirkstaerke: "Doza",
    wirkstaerkeHinweis: "Për shembull 50 mg ose 1-0-1.",
    packungsgroesse: "Madhësia e paketimit",
    packungsgroesseHinweis: "Shkruhet në paketim, p.sh. N2 ose 100 copë.",
    weiteresMedikament: "Shto bar tjetër",
    maxHinweis:
      "Deri në tre barna për kërkesë. Nëse ju duhen më shumë, na telefononi — është më shpejt.",
    erhaltLegende: "Si dëshironi ta merrni recetën?",
    erhaltAbholung: "Tërheqje në praktikë",
    erhaltERezept: "E-recetë",
    erhaltERezeptHinweis:
      "Nëse është e mundur mjekësisht dhe organizativisht. Karta juaj e sigurimit duhet të jetë lexuar në tremujorin aktual.",
    einwilligung:
      "Jam dakord që praktika t'i përpunojë të dhënat e mia për trajtimin e kësaj kërkese. E di që mund ta tërheq pëlqimin në çdo kohë.",
    datenschutzerklaerung: "deklaratën e privatësisë",
    naeheres: "Më shumë te",
    absenden: "Kërko recetë",
    wirdGesendet: "Po dërgohet …",
    bestaetigungTitel: "Kërkesa juaj për recetë ka mbërritur",
    bestaetigungHinweis:
      "Kërkesa juaj do të shqyrtohet nga praktika. Kjo nuk është ende konfirmim i recetës.",
    bestaetigungFolge:
      "Ju lajmërojmë sapo kërkesa të jetë trajtuar. Llogaritni dy ditë pune. Nëse është urgjente, na telefononi.",
  },

  ueberweisung: {
    titel: "Kërkesa për udhëzim te specialisti",
    einleitung:
      "Për vizitë te një mjek specialist. Mjafton fusha e specializimit dhe arsyeja — pjesën tjetër, nëse duhet, e sqarojmë me telefon.",
    formHinweis:
      "Përshkruani shkurt për çfarë bëhet fjalë — një diagnozë nuk duhet ta shkruani këtu.",
    fachrichtung: "Fusha e specializimit",
    fachrichtungHinweis: "P.sh. ortopedia, okulistika ose kardiologjia.",
    grund: "Arsyeja e udhëzimit",
    grundHinweis:
      "Përshkruani shkurt ankesat ose përmendni ekzaminimin e planifikuar.",
    facharztpraxis: "Praktika e specialistit",
    facharztpraxisHinweis:
      "Nëse tashmë e dini ku doni të shkoni — mjafton emri ose vendi.",
    absenden: "Kërko udhëzim",
    bestaetigungTitel: "Kërkesa juaj për udhëzim ka mbërritur",
    bestaetigungHinweis:
      "Praktika do ta shqyrtojë kërkesën tuaj. Pyetjet mjekësore të nevojshme mund të bëhen me telefon.",
  },

  fehler: {
    "name-fehlt": "Ju lutemi shkruani emrin dhe mbiemrin.",
    "name-kurz": "Ju lutemi shkruani emrin dhe mbiemrin.",
    "zu-lang": "Ju lutemi shkurtoni tekstin.",
    "geburtsdatum-fehlt": "Ju lutemi shkruani datën e lindjes, p.sh. 03.04.1951.",
    "geburtsdatum-format":
      "Ju lutemi shkruani datën si Ditë.Muaj.Vit, p.sh. 03.04.1951.",
    "geburtsdatum-unmoeglich": "Kjo datë nuk ekziston. Kontrolloni shënimin.",
    "geburtsdatum-zukunft": "Data e lindjes nuk mund të jetë në të ardhmen.",
    "geburtsdatum-jahr": "Ju lutemi kontrolloni vitin.",
    "telefon-ungueltig": "Ju lutemi shkruani një numër telefoni pa shkronja.",
    "einwilligung-fehlt": "Pa pëlqimin tuaj nuk mund ta trajtojmë kërkesën.",
    "medikament-fehlt": "Ju lutemi shkruani barin ashtu siç është në paketim.",
    "medikament-genauer": "Ju lutemi jepni të dhëna më të sakta.",
    "wirkstaerke-fehlt": "Ju lutemi shkruani dozën, p.sh. 50 mg, 1-0-1.",
    "medikament-name-fehlt": "Ju lutemi shkruani edhe këtu emrin e barit.",
    "fachrichtung-fehlt": "Ju lutemi shkruani fushën, p.sh. ortopedia.",
    "grund-fehlt": "Ju lutemi përshkruani shkurt arsyen.",
    "grund-genauer": "Ju lutemi jepni të dhëna më të sakta.",
    pruefen: "Ju lutemi kontrolloni fushat e shënuara.",
    "versand-nicht-eingerichtet":
      "Dërgimi ende nuk është konfiguruar. Ju lutemi na telefononi që kërkesa juaj të mos mbetet pa përgjigje.",
    "versand-fehlgeschlagen":
      "Kërkesa nuk u dërgua dot. Ju lutemi na telefononi që të mos mbetet pa përgjigje.",
  },

  kontakt: {
    titel: "Kontakti dhe rruga",
    telefonischErreichen:
      "Terminet, rezultatet dhe të gjitha pyetjet që nuk i mbulon formulari.",
    adresseSatz: "Adresa",
    kartenbildSatz:
      "Imazhi i hartës nga serveri ynë — harta interaktive gjendet më poshtë.",
    kartenAlt:
      "Pjesë e hartës së Espelkamp-it me shënimin e praktikës në Ostlandstraße 17",
    sprechzeitenFeiertage:
      "Në festa praktika është e mbyllur. Pushimet dhe zëvendësimin i njoftojmë në praktikë.",
    emailTitel: "Email",
    emailWarnung:
      "Ju lutemi mos na dërgoni me email rezultate apo të dhëna shëndetësore. Kjo rrugë nuk është e koduar. Për çështje mjekësore ju lutemi telefononi.",
    ausserhalbTitel: "Jashtë orarit të vizitave",
    anfahrt: "Rruga",
    anfahrtEinleitung:
      "Praktika ndodhet në Ostlandstraße, pak minuta në këmbë nga qendra e Espelkamp-it.",
    attribution: "Të dhënat e hartës:",
    attributionEigen: ", të ngarkuara si imazh nga serveri ynë",
    interaktivGoogle: "Harta interaktive: Google Maps",
    karteLaden: "Ngarko hartën e Google",
    widerrufen: "Tërhiq pëlqimin",
    routePlanen: "Planifiko rrugën",
  },

  notfall: {
    titel: "Në rast urgjence",
    einleitung:
      "Mjaftojnë dy numra: 112 kur ka rrezik për jetën. 116 117 kur nuk pritet dot deri në orarin e ardhshëm.",
    lebensbedrohlich: "Urgjencë me rrezik për jetën",
    lebensbedrohlichHinweis: "Ndihma e shpejtë dhe mjeku urgjent, 24 orë",
    lebensbedrohlichText:
      "Për shembull te shenjat e infarktit ose insultit, vështirësi e rëndë në frymëmarrje, gjakderdhje e fortë ose humbje e vetëdijes. Mos hezitoni — ndihma e shpejtë ekziston pikërisht për këtë.",
    bereitschaft: "Shërbimi mjekësor kujdestar",
    bereitschaftHinweis:
      "Jashtë orarit, kur nuk pritet dot deri ditën e ardhshme të punës",
    bereitschaftText:
      "Mbrëmjeve, natën, fundjavave dhe në festa. 116 117 ju drejton edhe te praktikat kujdestare përreth. Telefonata është pa pagesë.",
    vergiftungen:
      "Helmimet: Qendrën e helmimeve për Nordrhein-Westfalen e arrini përmes 112; në raste më pak urgjente ndihmon 116 117.",
    waehrendTitel: "Gjatë orarit të vizitave",
    waehrendText:
      "Për ankesa akute që s'janë urgjencë, na telefononi ose ejani në fillim të orarit — atëherë ju vlerësojmë po atë ditë.",
    formulareTitel: "Ju lutemi jo përmes formularëve",
    formulareText:
      "Kërkesat për receta dhe udhëzime përmes kësaj faqeje trajtohen gjatë orarit, jo menjëherë. Për gjithçka urgjente: telefononi — 112, 116 117 ose praktikën.",
    keineBeratung:
      "Kjo faqe nuk jep këshilla mjekësore dhe nuk zëvendëson bisedën me mjekun.",
  },

  service: {
    titel: "Shërbimi për pacientët",
    einleitung: "Tri çështje, tri rrugë të qarta. Për gjithçka tjetër:",
    fuerAllesAndere:
      "Rezultatet, pyetjet dhe gjithçka tjetër i sqarojmë me telefon. Gjatë orarit recepsioni është i hapur.",
    terminTitel: "Termini",
    terminText:
      "Terminet caktohen me telefon. Mbani gati kartën e sigurimit shëndetësor.",
    terminAktion: "Te rruga e terminit",
    rezeptTitel: "Recetë e përsëritur",
    rezeptText:
      "Për barnat që i merrni rregullisht. Mbani gati emrin, dozën dhe madhësinë e paketimit.",
    rezeptAktion: "Kërko recetë",
    ueberweisungTitel: "Udhëzimi",
    ueberweisungText:
      "Për vizitë te specialisti. Mjafton fusha e specializimit dhe arsyeja.",
    ueberweisungAktion: "Kërko udhëzim",
    gutZuWissen: "Mirë të dihet",
    praxisbesuchTitel: "Udhëzime për vizitën në praktikë",
    praxisbesuchText:
      "Çfarë të merrni me vete, kur të vini dhe si funksionon regjistrimi.",
    notfallTitel: "Informacione urgjence",
    notfallText:
      "Kur telefononi 112, kur 116 117 — dhe çfarë vlen jashtë orarit të vizitave.",
    mehrErfahren: "Mëso më shumë",
  },

  leistungenSeite: {
    titel: "Shërbimet",
    einleitung:
      "Kujdes bazë i mjekut të familjes me diagnostikë të vetën, plus dy fushat: mjekësia manuale dhe mjekësia e varësive.",
    fakten: ["Diagnostikë në praktikë", "Programet DMP", "Vizita në shtëpi"],
    bildunterschrift:
      "EKG, tensioni, dëgjimi — bazat bëhen këtu, në praktikë. (Foto simbolike)",
    diagnostikTitel: "Diagnostika",
    diagnostikText:
      "Ekzaminime që i bëjmë vetë në praktikë. Për to nuk ju duhet një termin i dytë në një qytet tjetër.",
    diagnostikPunkte: [
      "EKG dhe EKG afatgjatë",
      "Matje afatgjatë e tensionit",
      "Ekzaminim me ultratinguj",
      "Test i funksionit të mushkërive",
      "Diagnostikë laboratorike dhe marrje gjaku",
      "Matja e HbA1c",
    ],
    chronischEyebrow: "Shoqërim afatgjatë",
    chronischTitel: "Sëmundjet kronike",
    chronischText:
      "Programe të strukturuara trajtimi, shkurt DMP. Kontrolle të rregullta, terapi e bashkërenduar dhe një mjek që e njeh ecurinë tuaj.",
    chronischPunkte: ["Diabeti", "Astma bronkiale", "Sëmundja koronare e zemrës"],
    weitereTitel: "Shërbime të tjera",
    weitereText:
      "Çfarë tjetër bën pjesë në kujdesin e mjekut të familjes — përfshirë dy fushat e praktikës.",
    weiterePunkte: [
      "Vizita në shtëpi",
      "Mjekësi manuale",
      "Ndjekje e mjekësisë së varësive",
      "Terapi me infuzion",
      "Shërbime shëndetësore individuale",
    ],
    frageTitel: "Pyetja juaj nuk është këtu?",
    frageText:
      "Kjo listë përmend shërbimet më të shpeshta, jo të gjitha. Nëse mund t'ju ndihmojmë, e sqarojmë më mirë në bisedë.",
    serviceSatzVor:
      "Recetën ose udhëzimin s'keni pse ta kërkoni me telefon. Të dyja bëhen përmes",
    serviceSatzLink: "Shërbimit për pacientët",
  },

  praxisSeite: {
    titel: "Praktika",
    einleitung:
      "Një praktikë e mjekut të familjes në mes të Espelkamp-it, ku shumica e ekzaminimeve bëhen në vend.",
    fakten: ["Dy mjekë", "Tri fusha", "Diagnostikë në praktikë"],
    bildunterschrift: "Zona e pritjes e praktikës në Ostlandstraße.",
    gespraechTitel: "Kohë për bisedën",
    absatz1:
      "Kujdesi i mirë familjar fillon me dikë që dëgjon dhe e njeh ecurinë. Shumë nga pacientët tanë vijnë prej vitesh, disa me gjithë familjen.",
    absatz2:
      "Ekzaminimet më të rëndësishme i bëjmë vetë: EKG dhe matje afatgjata, ekografi, funksionin e mushkërive dhe laboratorin. Kjo ju kursen rrugë dhe e shkurton kohën deri te rezultati.",
    absatz3:
      "Për ata që nuk vijnë dot vetë, bëjmë vizita në shtëpi. Ju lutemi na e thoni me telefon.",
    bandFakten: [
      { t: "Tri fusha", d: "Mjekësi e përgjithshme, manuale dhe e varësive." },
      {
        t: "Diagnostikë në praktikë",
        d: "EKG, matje afatgjata, ekografi, funksioni i mushkërive, laborator.",
      },
      { t: "Vizita në shtëpi", d: "Për të gjithë ata që nuk vijnë dot vetë." },
    ],
    aerzteTitel: "Mjekët",
    rolleInhaber: "Pronar i praktikës",
    rolleAngestellt: "Mjek i punësuar",
    facharztTitel:
      "Mjek specialist i mjekësisë së përgjithshme, mjekësisë manuale dhe mjekësisë së varësive",
    dennisText:
      "Mjek i punësuar i praktikës. Të dhënat për specializimin dhe karrierën i shtojmë sapo të na vijnë.",
    kommenTitel: "Doni të vini te ne?",
    kommenText: "Adresa, orari dhe rruga gjenden në faqen e kontaktit.",
    kontaktCta: "Kontakti dhe rruga",
  },

  praxisbesuchSeite: {
    titel: "Udhëzime për vizitën në praktikë",
    einleitung:
      "Që vizita juaj të shkojë pa pengesa: çfarë të merrni me vete, kur të vini dhe si vazhdon në recepsion.",
    hinweise: [
      {
        t: "Merrni kartën e sigurimit",
        d: "Në vizitën e parë të tremujorit lexohet karta juaj elektronike shëndetësore. Pa kartë s'mund t'i faturojmë shërbimet — merreni në çdo vizitë.",
      },
      {
        t: "Lajmërohuni me telefon",
        d: "Ju lutemi lajmërohuni me telefon para vizitës. Kështu planifikojmë kohë për çështjen tuaj dhe prisni më pak.",
      },
      {
        t: "Ankesa akute: ejani herët",
        d: "Për ankesa akute ejani në fillim të orarit. Atëherë ju vlerësojmë po atë ditë.",
      },
      {
        t: "Barnat dhe dokumentet",
        d: "Nëse vini për bisedë rreth barnave, ndihmon një listë e asaj që merrni — ose sillni paketimet. Edhe rezultatet e mjekëve të tjerë futini në çantë.",
      },
      {
        t: "Receta dhe udhëzime paraprakisht",
        d: "Recetat e përsëritura dhe udhëzimet mund t'i kërkoni online dhe t'i merrni pas dy ditësh pune — për këtë s'ju duhet të vini në vizitë.",
      },
      {
        t: "Nëse nuk vini dot",
        d: "Anulojini terminet me telefon. Vendi mund t'i jepet dikujt që ka nevojë urgjente. Për ata që s'vijnë dot, ka vizita në shtëpi.",
      },
    ],
    lueckenSatz:
      "Të dhënat për parkimin, autobusët dhe aksesueshmërinë e ndërtesës i shtojmë sapo t'i konfirmojë praktika. Nëse keni pyetje paraprakisht, na telefononi:",
    sprechzeitenText:
      "Në festat zyrtare të Nordrhein-Westfalen praktika është e mbyllur.",
    kontaktSatzVor: "Adresën dhe rrugën i gjeni te",
    kontaktSatzLink: "Kontakti & Rruga",
  },

  whatsapp: {
    ueberschrift: "Shkruajini praktikës thjesht",
    text: "Për kërkesa terminesh, lutje për rikthim telefonate dhe pyetje organizative, së shpejti mund të na kontaktoni edhe përmes WhatsApp.",
    hinweis:
      "WhatsApp është vetëm për kërkesa organizative. Ju lutemi mos dërgoni rezultate, diagnoza, të dhëna shëndetësore, foto barnash ose mesazhe urgjence. Në urgjencë: 112. Shërbimi mjekësor kujdestar: 116 117.",
    oeffnen: "Hap WhatsApp",
    lieberAnrufen: "Më mirë telefononi",
    vorschauHinweis:
      "Pamje paraprake — numri i WhatsApp i praktikës po përgatitet. Deri atëherë na gjeni me telefon.",
    nachrichtVorbelegt: "Mirëdita, ju lutem të më telefononi.",
    bildunterschrift:
      "Mesazh i shkurtër, kornizë e qartë: WhatsApp vetëm për çështje organizative. (Foto simbolike)",
    bildAlt:
      "Smartfon me flluska bisede të stilizuara mbi një banak të çelët pritjeje, pas tij një bimë para murit të gjelbër",
  },
};
