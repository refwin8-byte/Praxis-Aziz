import type { Woerterbuch } from "./woerterbuch";

/**
 * Albanisch — ENTWURF. Muss vor Veröffentlichung muttersprachlich geprüft
 * werden (geprueft: false). Übersetzt aus der maßgeblichen deutschen
 * Fassung, ohne inhaltliche Ergänzungen.
 */
export const sq: Woerterbuch = {
  code: "sq",
  eigenname: "Shqip",
  geprueft: false,

  allgemein: {
    pruefHinweis:
      "Ky përkthim është një draft dhe duhet të kontrollohet nga një folës amtar para publikimit.",
    teilweiseUebersetzt:
      "Përmbajtjet ende të papërkthyera shfaqen përkohësisht në gjermanisht.",
    sprache: "Gjuha",
    sprachwahlOeffnen: "Zgjidhni gjuhën",
  },

  nav: {
    leistungen: "Shërbimet",
    praxisTeam: "Praktika & Ekipi",
    patientenservice: "Shërbimi për pacientët",
    kontaktAnfahrt: "Kontakti & Rruga",
    terminBuchen: "Cakto termin",
    menueOeffnen: "Hap menynë",
    menueSchliessen: "Mbyll menynë",
  },

  leiste: {
    notfall: "Urgjencë me rrezik për jetën",
    bereitschaft: "Shërbimi mjekësor kujdestar",
    termin: "Termini",
    anrufen: "Telefono",
    rezept: "Receta",
  },

  start: {
    eyebrow: "Praktikë e mjekut të familjes në Espelkamp",
    headline: "Kujdes mjekësor familjar për të gjithë familjen.",
    text: "Prej shumë vitesh shoqërojmë njerëzit në Espelkamp dhe rrethinë — nga infeksionet akute deri te ndjekja shumëvjeçare e diabetit ose sëmundjeve të zemrës. Me kohë për bisedë dhe me diagnostikë në praktikën tonë.",
    rezeptAnfordern: "Kërko recetë",
    terminBuchen: "Cakto termin",
    statusHinweis:
      "Terminet caktohen me telefon. Për vizitën ju lutemi merrni me vete kartën e sigurimit shëndetësor.",
  },

  sprechzeiten: {
    titel: "Orari i vizitave",
    geschlossen: "mbyllur",
    wochenendKurz: "Sht, Die",
    hinweis:
      "Ju lutemi lajmërohuni paraprakisht me telefon. Për ankesa akute ejani në fillim të orarit të vizitave.",
  },

  termin: {
    titel: "Caktimi i terminit",
    einleitungTelefon:
      "Terminet caktohen me telefon. Kështu mund të vlerësojmë menjëherë sa urgjente është çështja juaj dhe t'ju japim kohën e përshtatshme.",
    soErreichen: "Si na kontaktoni",
    text: "Na telefononi gjatë orarit të vizitave. Mbani gati kartën e sigurimit shëndetësor — në vizitën e parë të tremujorit ajo lexohet.",
    hinweisAkut:
      "Për ankesa akute ejani ju lutemi në fillim të orarit të vizitave. Jashtë orarit ndihmon shërbimi mjekësor kujdestar në numrin 116 117.",
  },

  rezept: {
    titel: "Kërkesa për recetë të përsëritur",
    einleitung:
      "Vetëm për barnat që i merrni tashmë rregullisht. Barnat e reja ose ndryshimet e dozës kërkojnë konsultë me mjekun — për këtë ju lutemi na telefononi.",
    nurDauermedikation: "Vetëm barna të përhershme",
    name: "Emri dhe mbiemri",
    geburtsdatum: "Data e lindjes",
    telefon: "Numri i telefonit për pyetje",
    medikamentName: "Emri i barit",
    wirkstaerke: "Doza",
    packungsgroesse: "Madhësia e paketimit",
    weiteresMedikament: "Shto bar tjetër",
    einwilligung:
      "Jam dakord që praktika t'i përpunojë të dhënat e mia për trajtimin e kësaj kërkese.",
    absenden: "Kërko recetë",
    bestaetigungTitel: "Kërkesa juaj për recetë ka mbërritur",
    bestaetigungHinweis:
      "Kërkesa juaj do të shqyrtohet nga praktika. Kjo nuk është ende konfirmim i recetës.",
    fehlerAllgemein: "Ju lutemi kontrolloni fushat e shënuara.",
  },

  ueberweisung: {
    titel: "Kërkesa për udhëzim te specialisti",
    einleitung:
      "Për vizitë te një mjek specialist. Mjafton fusha e specializimit dhe arsyeja — pjesën tjetër, nëse duhet, e sqarojmë me telefon.",
    fachrichtung: "Fusha e specializimit",
    grund: "Arsyeja e udhëzimit",
    facharztpraxis: "Praktika e specialistit (nëse dihet)",
    absenden: "Kërko udhëzim",
    bestaetigungTitel: "Kërkesa juaj për udhëzim ka mbërritur",
    bestaetigungHinweis:
      "Praktika do ta shqyrtojë kërkesën tuaj. Pyetjet mjekësore të nevojshme mund të bëhen me telefon.",
  },

  kontakt: {
    titel: "Kontakti dhe rruga",
    telefonischErreichen:
      "Terminet, rezultatet dhe të gjitha pyetjet që nuk i mbulon formulari.",
    adresse: "Adresa",
    routePlanen: "Planifiko rrugën",
    karteLaden: "Ngarko hartën e Google",
    anfahrt: "Rruga",
  },

  notfall: {
    titel: "Në rast urgjence",
    einleitung:
      "Mjaftojnë dy numra: 112 kur ka rrezik për jetën. 116 117 kur nuk mund të pritet deri në orarin e ardhshëm të vizitave.",
    lebensbedrohlich: "Urgjencë me rrezik për jetën",
    lebensbedrohlichHinweis: "Ndihma e shpejtë dhe mjeku urgjent, 24 orë",
    bereitschaft: "Shërbimi mjekësor kujdestar",
    bereitschaftHinweis:
      "Jashtë orarit të vizitave, kur nuk mund të pritet deri ditën e ardhshme të punës",
    keineBeratung:
      "Kjo faqe interneti nuk jep këshilla mjekësore. Informacionet nuk zëvendësojnë bisedën me mjekun.",
  },

  service: {
    titel: "Shërbimi për pacientët",
    einleitung: "Tri çështje, tri rrugë të qarta. Për gjithçka tjetër:",
    fuerAllesAndere:
      "Rezultatet, pyetjet dhe gjithçka tjetër i sqarojmë me telefon. Gjatë orarit të vizitave recepsioni është i hapur.",
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
      "Çfarë të merrni me vete, kur është më mirë të vini dhe si funksionon regjistrimi.",
    notfallTitel: "Informacione urgjence",
    notfallText:
      "Kur të telefononi 112, kur 116 117 — dhe çfarë vlen jashtë orarit të vizitave.",
    mehrErfahren: "Mëso më shumë",
  },

  whatsapp: {
    ueberschrift: "Shkruajini praktikës thjesht",
    text: "Për kërkesa terminesh, lutje për t'ju rikthyer telefonatën dhe pyetje organizative, së shpejti mund të na kontaktoni edhe përmes WhatsApp.",
    hinweis:
      "WhatsApp është vetëm për kërkesa organizative. Ju lutemi mos dërgoni rezultate, diagnoza, të dhëna shëndetësore, foto barnash ose mesazhe urgjence. Në urgjencë: 112. Shërbimi mjekësor kujdestar: 116 117.",
    oeffnen: "Hap WhatsApp",
    lieberAnrufen: "Më mirë telefononi",
    vorschauHinweis:
      "Pamje paraprake — numri i WhatsApp i praktikës është duke u përgatitur. Deri atëherë na gjeni me telefon.",
    nachrichtVorbelegt: "Mirëdita, ju lutem të më telefononi.",
    bildunterschrift:
      "Mesazh i shkurtër, kornizë e qartë: WhatsApp vetëm për çështje organizative. (Foto simbolike)",
  },
};
