import type { Woerterbuch } from "./woerterbuch";

/**
 * Türkisch — ENTWURF. Muss vor Veröffentlichung muttersprachlich geprüft
 * werden (geprueft: false). Übersetzt aus der maßgeblichen deutschen
 * Fassung, ohne inhaltliche Ergänzungen.
 */
export const tr: Woerterbuch = {
  code: "tr",
  eigenname: "Türkçe",
  geprueft: false,

  allgemein: {
    pruefHinweis:
      "Bu çeviri bir taslaktır ve yayımlanmadan önce ana dili Türkçe olan bir kişi tarafından kontrol edilmelidir.",
    teilweiseUebersetzt:
      "Künye (Impressum), veri koruma ve erişilebilirlik beyanı Almanca kalır.",
    sprache: "Dil",
    sprachwahlOeffnen: "Dil seçin",
    freiwillig: "(isteğe bağlı)",
    symbolbild: "(Temsili görsel)",
  },

  nav: {
    leistungen: "Hizmetler",
    praxisTeam: "Muayenehane & Ekip",
    patientenservice: "Hasta Hizmetleri",
    kontaktAnfahrt: "İletişim & Ulaşım",
    terminBuchen: "Randevu al",
    menueOeffnen: "Menüyü aç",
    menueSchliessen: "Menüyü kapat",
    zumInhalt: "İçeriğe atla",
  },

  leiste: {
    notfall: "Hayati tehlike – acil durum",
    bereitschaft: "Nöbetçi hekim hattı",
    termin: "Randevu",
    anrufen: "Ara",
    rezept: "Reçete",
  },

  wochentageKurz: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],

  status: {
    wirdGeprueft: "Muayene saatleri kontrol ediliyor",
    gebffnetBis: "Şu anda açık",
    uhr: "",
    geschlossenWieder: "Kapalı, tekrar açılış:",
    wieder: "Tekrar açılış:",
    heute: "bugün",
    morgen: "yarın",
    ab: "saat",
    feiertagHeute: "Bugün resmî tatil.",
    urlaubHeute: "Muayenehane şu anda kapalıdır.",
    zurzeitGeschlossen: "Şu anda kapalı",
  },

  start: {
    eyebrow: "Espelkamp'ta aile hekimliği",
    headline: "Tüm aile için aile hekimliği hizmeti.",
    text: "Uzun yıllardır Espelkamp ve çevresindeki insanlara eşlik ediyoruz — akut enfeksiyonlardan diyabet veya kalp hastalıklarının uzun süreli takibine kadar. Görüşme için zaman ayırıyoruz, tanı testleri kendi muayenehanemizde yapılıyor.",
    rezeptAnfordern: "Reçete iste",
    statusHinweis:
      "Randevular telefonla verilir. Muayeneye gelirken lütfen sağlık sigortası kartınızı getirin.",
    statusHinweisOnline:
      "Randevuyu internetten veya telefonla alabilirsiniz. Muayeneye gelirken lütfen sağlık sigortası kartınızı getirin.",
    wegeTitel: "Randevu, reçete ve sevk",
    wegeText:
      "Üç talep, üç yol. Hızlı olması için lütfen her yolda belirtilenleri hazır bulundurun.",
    telefonTitel: "Sonuç, soru veya başka bir şey mi?",
    telefonText:
      "Diğer her şeyi telefonda konuşuruz. Muayene saatlerinde kayıt masası açıktır.",
    aerzteTitel: "Sizi kim tedavi ediyor",
    aerzteText:
      "İki hekim, tek muayenehane. Kimi göreceğiniz randevuya bağlıdır; hastalık geçmişinizi ikisi de bilir.",
    mehrPraxis: "Muayenehane ve çalışma şekli hakkında daha fazlası:",
    praxisseite: "Muayenehane sayfası",
    leistungenTitel: "Neleri tedavi ediyoruz",
    leistungenText:
      "Temel aile hekimliği hizmeti, ayrıca iki uzmanlık alanı: manuel tıp ve bağımlılık tıbbı.",
    alleLeistungen: "Tüm hizmetler ayrıntılı",
    vertrauenTitel: "Neye güvenebilirsiniz",
    vertrauenText:
      "Yıldız yok, değerlendirme portalı yok. Yalnızca bu muayenehanede doğrulanabilecek olanlar.",
    haltungssatz:
      "Espelkamp'ta kişisel aile hekimliği — kendisini kimin tedavi ettiğini bilmek isteyenler için.",
    fakten: [
      {
        t: "Vestfalya-Lippe Tabipler Odası",
        d: "Meslek unvanı ve meslek hukuku bilgileri künyede (Impressum).",
      },
      {
        t: "Muayenehanede tanı",
        d: "EKG, uzun süreli ölçümler, ultrason ve solunum testi — ikinci bir yol gerekmez.",
      },
      {
        t: "Ev ziyaretleri",
        d: "Muayenehaneye kendisi gelemeyenler için.",
      },
    ],
    impressumSatz:
      "Meslek unvanına ve meslek hukukuna ilişkin bilgileri şurada bulabilirsiniz:",
    impressum: "Künye (Impressum)",
    findenTitel: "Muayene saatleri ve ulaşım",
    findenText:
      "Lütfen önceden telefonla kayıt yaptırın. Akut şikâyetlerde muayene saatinin başında gelin.",
    frageTitel: "Sorunuz mu var?",
    frageText: "Bizi arayın. Muayene saatlerinde kayıt masası açıktır.",
    wartebereichAlt:
      "Muayenehanenin bekleme alanı: oturma sıraları, dergi rafı ve yeşilliğe bakan pencere",
  },

  zahlen: {
    ueber: "+",
    patientenLabel: "hasta",
    patientenZusatz:
      "aile hekimliğinde takip edilen; birçoğu yıllardır ve tüm ailesiyle birlikte.",
    jahreLabel: "yıl hekimlik deneyimi",
    jahreZusatz: "hastane, cerrahi ve ayakta tedavi çalışmalarından.",
    schwerpunkteLabel: "tıbbi uzmanlık alanı",
    schwerpunkteZusatz:
      "Genel tıp, manuel tıp ve bağımlılık tıbbı — tek muayenehanede.",
  },

  google: {
    vonFuenf: "/ 5",
    ausRezensionen: "{n} Google yorumundan",
    stand: "Güncelleme",
    lesen: "Google'daki yorumları oku",
    neuerTab: "(Google yeni sekmede açılır)",
  },

  sprechzeiten: {
    titel: "Muayene saatleri",
    geschlossen: "kapalı",
    wochenendKurz: "Cmt, Paz",
    hinweis:
      "Lütfen önceden telefonla kayıt yaptırın. Akut şikâyetlerde muayene saatinin başında gelin.",
    bisUhr: "–",
    adresse: "Adres",
    anfahrtKontakt: "Ulaşım ve iletişim",
    feiertageZu:
      "Kuzey Ren-Vestfalya'daki resmî tatillerde muayenehane kapalıdır.",
  },

  termin: {
    titel: "Randevu alma",
    einleitungTelefon:
      "Randevular telefonla verilir. Böylece talebinizin ne kadar acil olduğunu hemen değerlendirebilir ve size uygun bir zaman ayarlayabiliriz.",
    einleitungOnline:
      "{anbieter} üzerinden internetten randevu alabilir veya bizi arayabilirsiniz — ikisi de aynı takvime gider.",
    onlineTitel: "İnternetten randevu",
    onlineText:
      "Çevrimiçi randevu, hekim randevuları için harici bir hizmet olan {anbieter} üzerinden yürür. Bu sırada web sitemizden ayrılırsınız; hizmetin gizlilik bildirimi geçerlidir. Randevudan sonra buraya geri dönersiniz.",
    onlineButton: "İnternetten randevu al",
    onlineFallback:
      "{anbieter} açılır. Çevrimiçi randevuya ulaşılamıyorsa lütfen bizi arayın.",
    oderTelefonisch: "Veya telefonla",
    soErreichen: "Bize nasıl ulaşırsınız",
    text: "Muayene saatleri içinde bizi arayın. Sağlık sigortası kartınızı hazır bulundurun — üç aylık dönemdeki ilk ziyarette kart okutulur.",
    hinweisAkut:
      "Akut şikâyetlerde lütfen muayene saatinin başında gelin. Muayene saatleri dışında nöbetçi hekim hattı yardımcı olur:",
  },

  anfrage: {
    bevorSieAusfuellen: "Doldurmadan önce",
    nurDauermedikationT: "Yalnızca sürekli ilaçlar",
    nurDauermedikationD:
      "Bu form tekrar reçeteleri içindir. Yeni ilaçlara hekim, görüşmede karar verir.",
    bearbeitungszeitT: "İşlem süresi",
    bearbeitungszeitD:
      "Lütfen iki iş günü hesaba katın. Hafta sonları ve resmî tatillerde talepler işlenmez.",
    voraussetzungT: "Koşul",
    voraussetzungD:
      "Bu muayenehanenin hastasısınız ve sağlık sigortası kartınız bu üç aylık dönemde okutuldu.",
    abholungT: "Teslim alma",
    abholungD:
      "Sevk belgesi daha sonra kayıt masasında sizin için hazır olur. Diğer yolları telefonla bildiririz.",
    imNotfallT: "Acil durumda",
    imNotfallD:
      "112'yi arayın. Bu form üzerinden yanıt beklemeyin.",
    ihreAnforderung: "Talebiniz",
    datenTitel: "Bilgileriniz ne olur",
    datenText1:
      "Bilgileriniz şifreli bir bağlantı üzerinden doğrudan muayenehanenin posta kutusuna iletilir. Bu web sitesinde saklanmaz: veritabanı yok, kopya yok.",
    datenText2:
      "Hukuki dayanak, GDPR Md. 9 f. 2 a uyarınca açık rızanızdır. Bizi arayarak istediğiniz zaman geri çekebilirsiniz.",
    datenText3:
      "Lütfen sağlık bilgilerinizi kendi e-posta programınızdan göndermeyin. O yol şifresizdir; buradaki form şifrelidir.",
    notfallAsideTitel: "Acil durumda beklemeyin",
    notfallAsideText:
      "Bu form üzerinden gelen talepler muayene saatlerinde işlenir, hemen değil. Acilse lütfen şu yolları kullanın.",
    keineBeratung:
      "Bu web sitesi tıbbi danışmanlık vermez. Bilgiler hekim görüşmesinin yerini tutmaz.",
  },

  rezept: {
    titel: "Tekrar reçetesi isteme",
    einleitung:
      "Yalnızca düzenli olarak kullandığınız ilaçlar içindir. Yeni ilaçlar veya doz değişiklikleri hekim görüşmesi gerektirir — bunun için lütfen bizi arayın.",
    formHinweis:
      "Bilgiler ilaç kutusunun üzerinde yazar. Bir talepte en fazla üç ilaç isteyebilirsiniz.",
    name: "Ad ve soyad",
    geburtsdatum: "Doğum tarihi",
    geburtsdatumHinweis: "Örneğin 03.04.1951",
    telefon: "Geri arama için telefon numarası",
    telefonHinweis: "Bir şey belirsizse işlemi hızlandırır.",
    medikament: "İlaç",
    medikamentN: "İlaç {n}",
    medikamentName: "İlacın adı",
    medikamentNameHinweis: "Kutunun üzerinde yazdığı gibi.",
    wirkstaerke: "Etken madde dozu",
    wirkstaerkeHinweis: "Örneğin 50 mg veya 1-0-1.",
    packungsgroesse: "Ambalaj büyüklüğü",
    packungsgroesseHinweis: "Kutuda yazar, örneğin N2 veya 100 adet.",
    weiteresMedikament: "Başka ilaç ekle",
    maxHinweis:
      "Talep başına en fazla üç ilaç. Daha fazlası gerekiyorsa lütfen arayın — daha hızlı olur.",
    erhaltLegende: "Reçeteyi nasıl almak istersiniz?",
    erhaltAbholung: "Muayenehaneden teslim alma",
    erhaltERezept: "E-reçete",
    erhaltERezeptHinweis:
      "Tıbbi ve organizasyonel olarak mümkünse. Sigorta kartınız bu üç aylık dönemde okutulmuş olmalıdır.",
    einwilligung:
      "Muayenehanenin bu talebi işlemek için verilerimi işlemesini kabul ediyorum. Bu rızayı istediğim zaman geri çekebileceğimi biliyorum.",
    datenschutzerklaerung: "Gizlilik bildirimi",
    naeheres: "Ayrıntılar:",
    absenden: "Reçete iste",
    wirdGesendet: "Gönderiliyor …",
    bestaetigungTitel: "Reçete talebiniz ulaştı",
    bestaetigungHinweis:
      "Talebiniz muayenehane tarafından incelenecektir. Bu, reçetenin onaylandığı anlamına gelmez.",
    bestaetigungFolge:
      "Talep işlenince size ulaşırız. Lütfen iki iş günü hesaba katın. Acilse lütfen bizi arayın.",
  },

  ueberweisung: {
    titel: "Sevk isteme",
    einleitung:
      "Bir uzman hekime gitmek içindir. Uzmanlık alanı ve nedeni yeterlidir — gerekirse ayrıntıları telefonda konuşuruz.",
    formHinweis:
      "Konuyu kısaca anlatın — burada bir tanı belirtmeniz gerekmez.",
    fachrichtung: "Uzmanlık alanı",
    fachrichtungHinweis: "Örneğin ortopedi, göz hastalıkları veya kardiyoloji.",
    grund: "Sevk nedeni",
    grundHinweis:
      "Şikâyetlerinizi kısaca anlatın veya planlanan tetkiki belirtin.",
    facharztpraxis: "Gideceğiniz uzman muayenehanesi",
    facharztpraxisHinweis:
      "Nereye gitmek istediğinizi biliyorsanız — adı veya yeri yeterli.",
    absenden: "Sevk iste",
    bestaetigungTitel: "Sevk talebiniz ulaştı",
    bestaetigungHinweis:
      "Muayenehane talebinizi inceleyecektir. Tıbben gerekli sorular telefonla sorulabilir.",
  },

  fehler: {
    "name-fehlt": "Lütfen adınızı ve soyadınızı yazın.",
    "name-kurz": "Lütfen ad ve soyadınızı yazın.",
    "zu-lang": "Lütfen girişi kısaltın.",
    "geburtsdatum-fehlt": "Lütfen doğum tarihinizi yazın, örneğin 03.04.1951.",
    "geburtsdatum-format":
      "Lütfen tarihi Gün.Ay.Yıl biçiminde yazın, örneğin 03.04.1951.",
    "geburtsdatum-unmoeglich": "Böyle bir tarih yok. Lütfen girişinizi kontrol edin.",
    "geburtsdatum-zukunft": "Doğum tarihi gelecekte olamaz.",
    "geburtsdatum-jahr": "Lütfen yılı kontrol edin.",
    "telefon-ungueltig": "Lütfen harf içermeyen bir telefon numarası yazın.",
    "einwilligung-fehlt": "Rızanız olmadan talebi işleme alamayız.",
    "medikament-fehlt": "Lütfen ilacı kutuda yazdığı gibi belirtin.",
    "medikament-genauer": "Lütfen daha ayrıntılı yazın.",
    "wirkstaerke-fehlt": "Lütfen dozu belirtin, örneğin 50 mg, 1-0-1.",
    "medikament-name-fehlt": "Lütfen burada da ilacın adını yazın.",
    "fachrichtung-fehlt": "Lütfen uzmanlık alanını yazın, örneğin ortopedi.",
    "grund-fehlt": "Lütfen nedeni kısaca anlatın.",
    "grund-genauer": "Lütfen daha ayrıntılı yazın.",
    pruefen: "Lütfen işaretli alanları kontrol edin.",
    "versand-nicht-eingerichtet":
      "Gönderim şu anda kurulu değil. Talebiniz beklemede kalmasın diye lütfen bizi arayın.",
    "versand-fehlgeschlagen":
      "Talep iletilemedi. Beklemede kalmasın diye lütfen bizi arayın.",
  },

  kontakt: {
    titel: "İletişim ve ulaşım",
    telefonischErreichen:
      "Randevular, sonuçlar ve formların kapsamadığı tüm sorular.",
    adresseSatz: "Adres",
    kartenbildSatz:
      "Harita görüntüsü kendi sunucumuzdan — etkileşimli harita aşağıdadır.",
    kartenAlt:
      "Espelkamp haritasından bir kesit; Ostlandstraße 17'deki muayenehane işaretli",
    sprechzeitenFeiertage:
      "Resmî tatillerde muayenehane kapalıdır. Tatil dönemlerini ve vekâlet düzenini muayenehanede duyururuz.",
    emailTitel: "E-posta",
    emailWarnung:
      "Lütfen bize e-posta ile tahlil sonucu veya sağlık bilgisi göndermeyin. Bu yol şifreli değildir. Tıbbi konular için lütfen arayın.",
    ausserhalbTitel: "Muayene saatleri dışında",
    anfahrt: "Ulaşım",
    anfahrtEinleitung:
      "Muayenehane Ostlandstraße'de, Espelkamp merkezine birkaç dakika yürüme mesafesindedir.",
    attribution: "Harita verileri:",
    attributionEigen: ", kendi sunucumuzdan görüntü olarak yüklendi",
    interaktivGoogle: "Etkileşimli harita: Google Haritalar",
    karteLaden: "Google Haritalar'ı yükle",
    widerrufen: "Rızayı geri çek",
    routePlanen: "Yol tarifi al",
  },

  notfall: {
    titel: "Acil durumda",
    einleitung:
      "İki numara yeterli: Hayati tehlike varsa 112. Bir sonraki muayene saatine kadar bekleyemiyorsa 116 117.",
    lebensbedrohlich: "Hayati tehlike – acil durum",
    lebensbedrohlichHinweis: "Ambulans ve acil hekim, günün her saati",
    lebensbedrohlichText:
      "Örneğin kalp krizi veya inme belirtileri, ağır nefes darlığı, şiddetli kanama veya bilinç kaybında. Tereddüt etmeyin — ambulans tam bunun içindir.",
    bereitschaft: "Nöbetçi hekim hattı",
    bereitschaftHinweis:
      "Muayene saatleri dışında, bir sonraki iş gününe kadar bekleyemeyecek durumlar için",
    bereitschaftText:
      "Akşamları, geceleri, hafta sonları ve resmî tatillerde. 116 117 çevredeki nöbetçi muayenehaneleri de yönlendirir. Arama ücretsizdir.",
    vergiftungen:
      "Zehirlenmeler: Kuzey Ren-Vestfalya zehir danışma merkezine 112 üzerinden ulaşırsınız; daha az acil durumlarda 116 117 yardımcı olur.",
    waehrendTitel: "Muayene saatleri içinde",
    waehrendText:
      "Acil olmayan akut şikâyetlerde bizi arayın veya muayene saatinin başında gelin — o zaman sizi aynı gün değerlendirebiliriz.",
    formulareTitel: "Lütfen formlar üzerinden değil",
    formulareText:
      "Bu web sitesindeki reçete ve sevk talepleri muayene saatlerinde işlenir, hemen değil. Acil olan her şey için: arayın — 112, 116 117 veya muayenehane.",
    keineBeratung:
      "Bu sayfa tıbbi danışmanlık vermez ve hekim görüşmesinin yerini tutmaz.",
  },

  service: {
    titel: "Hasta Hizmetleri",
    einleitung: "Üç talep, üç net yol. Diğer her şey için:",
    fuerAllesAndere:
      "Sonuçları, soruları ve diğer her şeyi telefonda konuşuruz. Muayene saatlerinde kayıt masası açıktır.",
    terminTitel: "Randevu",
    terminText:
      "Randevular telefonla verilir. Sağlık sigortası kartınızı hazır bulundurun.",
    terminAktion: "Randevu yoluna git",
    rezeptTitel: "Tekrar reçetesi",
    rezeptText:
      "Düzenli kullandığınız ilaçlar için. Adını, dozunu ve ambalaj büyüklüğünü hazır bulundurun.",
    rezeptAktion: "Reçete iste",
    ueberweisungTitel: "Sevk",
    ueberweisungText:
      "Uzman hekime gitmek için. Uzmanlık alanı ve nedeni yeterlidir.",
    ueberweisungAktion: "Sevk iste",
    gutZuWissen: "Bilmekte fayda var",
    praxisbesuchTitel: "Muayenehane ziyareti için bilgiler",
    praxisbesuchText:
      "Yanınızda ne getirmelisiniz, en uygun geliş zamanı ve kayıt nasıl işler.",
    notfallTitel: "Acil durum bilgileri",
    notfallText:
      "Ne zaman 112, ne zaman 116 117 — ve muayene saatleri dışında ne geçerli.",
    mehrErfahren: "Daha fazla bilgi",
  },

  leistungenSeite: {
    titel: "Hizmetler",
    einleitung:
      "Kendi tanı olanaklarıyla temel aile hekimliği hizmeti, ayrıca iki uzmanlık alanı: manuel tıp ve bağımlılık tıbbı.",
    fakten: ["Muayenehanede tanı", "DMP programları", "Ev ziyaretleri"],
    bildunterschrift:
      "EKG, tansiyon, dinleme — temel tetkikler burada, muayenehanede yapılır. (Temsili görsel)",
    diagnostikTitel: "Tanı",
    diagnostikText:
      "Muayenehanede kendimizin yaptığı tetkikler. Bunlar için başka bir şehirde ikinci bir randevuya gerek yok.",
    diagnostikPunkte: [
      "EKG ve uzun süreli EKG",
      "Uzun süreli tansiyon ölçümü",
      "Ultrason muayenesi",
      "Solunum fonksiyon testi",
      "Laboratuvar tetkikleri ve kan alma",
      "HbA1c ölçümü",
    ],
    chronischEyebrow: "Uzun süreli takip",
    chronischTitel: "Kronik hastalıklar",
    chronischText:
      "Yapılandırılmış tedavi programları, kısaca DMP. Düzenli kontrol randevuları, uyumlu ilaç tedavisi ve seyrinizi bilen bir muhatap.",
    chronischPunkte: ["Diyabet (şeker hastalığı)", "Bronşiyal astım", "Koroner kalp hastalığı"],
    weitereTitel: "Diğer hizmetler",
    weitereText:
      "Aile hekimliğine ayrıca dahil olanlar — muayenehanenin iki uzmanlık alanı da içinde.",
    weiterePunkte: [
      "Ev ziyaretleri",
      "Manuel tıp",
      "Bağımlılık tıbbı takibi",
      "İnfüzyon tedavileri",
      "Bireysel sağlık hizmetleri",
    ],
    frageTitel: "Sorunuz listede yok mu?",
    frageText:
      "Bu liste en sık hizmetleri sayar, hepsini değil. Size yardımcı olup olamayacağımızı en iyisi görüşmede netleştirelim.",
    serviceSatzVor:
      "Reçete veya sevk için telefon etmeniz gerekmez. İkisi de şuradan yapılır:",
    serviceSatzLink: "Hasta Hizmetleri",
  },

  praxisSeite: {
    titel: "Muayenehane",
    einleitung:
      "Espelkamp'ın ortasında, tetkiklerin çoğunun kendi bünyesinde yapıldığı bir aile hekimliği muayenehanesi.",
    fakten: ["İki hekim", "Üç uzmanlık alanı", "Muayenehanede tanı"],
    bildunterschrift: "Ostlandstraße'deki muayenehanenin bekleme alanı.",
    gespraechTitel: "Görüşme için zaman",
    absatz1:
      "İyi bir aile hekimliği, birinin sizi dinlemesi ve hastalık seyrinizi bilmesiyle başlar. Hastalarımızın birçoğu yıllardır bize geliyor, bazıları tüm ailesiyle.",
    absatz2:
      "En önemli tetkikleri kendimiz yapıyoruz: EKG ve uzun süreli ölçümler, ultrason, solunum testi ve laboratuvar. Bu size yol kazandırır ve sonuca giden süreyi kısaltır.",
    absatz3:
      "Muayenehaneye kendisi gelemeyenler için ev ziyaretleri yapıyoruz. Lütfen bunu telefonda bize söyleyin.",
    bandFakten: [
      { t: "Üç uzmanlık alanı", d: "Genel tıp, manuel tıp ve bağımlılık tıbbı." },
      {
        t: "Muayenehanede tanı",
        d: "EKG, uzun süreli ölçümler, ultrason, solunum testi, laboratuvar.",
      },
      { t: "Ev ziyaretleri", d: "Muayenehaneye kendisi gelemeyenler için." },
    ],
    aerzteTitel: "Hekimler",
    rolleInhaber: "Muayenehane sahibi",
    rolleAngestellt: "Çalışan hekim",
    facharztTitel: "Genel tıp, manuel tıp ve bağımlılık tıbbı uzmanı",
    dennisText:
      "Muayenehanenin çalışan hekimi. Uzmanlık alanı ve özgeçmiş bilgilerini elimize ulaştığında ekleyeceğiz.",
    kommenTitel: "Bize gelmek ister misiniz?",
    kommenText: "Adres, muayene saatleri ve ulaşım iletişim sayfasındadır.",
    kontaktCta: "İletişim ve ulaşım",
  },

  praxisbesuchSeite: {
    titel: "Muayenehane ziyareti için bilgiler",
    einleitung:
      "Ziyaretinizin sorunsuz geçmesi için: ne getirmelisiniz, ne zaman gelmelisiniz ve kayıtta nasıl devam eder.",
    hinweise: [
      {
        t: "Sigorta kartınızı getirin",
        d: "Üç aylık dönemdeki ilk ziyarette elektronik sağlık kartınız okutulur. Kart olmadan hizmetleri faturalandıramayız — lütfen her ziyarete getirin.",
      },
      {
        t: "Telefonla kayıt yaptırın",
        d: "Ziyaretten önce telefonla kayıt rica ederiz. Böylece talebiniz için zaman ayırırız ve daha az beklersiniz.",
      },
      {
        t: "Akut şikâyet: erken gelin",
        d: "Akut şikâyetlerde muayene saatinin başında gelin. O zaman sizi aynı gün değerlendirebiliriz.",
      },
      {
        t: "İlaçlar ve belgeler",
        d: "İlaçlarınız hakkında görüşmeye geliyorsanız, kullandıklarınızın listesi yardımcı olur — veya kutuları getirin. Başka hekimlerin mevcut sonuçları da çantaya girmeli.",
      },
      {
        t: "Reçete ve sevk önceden",
        d: "Tekrar reçetelerini ve sevkleri internetten isteyip iki iş günü sonra alabilirsiniz — bunun için muayeneye gelmeniz gerekmez.",
      },
      {
        t: "Gelemeyecekseniz",
        d: "Randevuları lütfen telefonla iptal edin. O yer, acil yardıma ihtiyacı olan birine verilebilir. Muayenehaneye gelemeyenler için ev ziyaretleri vardır.",
      },
    ],
    lueckenSatz:
      "Otopark, otobüs bağlantısı ve binanın erişilebilirliği hakkındaki bilgileri muayenehane onayladığında ekleyeceğiz. Önceden sorunuz varsa bizi arayın:",
    sprechzeitenText:
      "Kuzey Ren-Vestfalya'daki resmî tatillerde muayenehane kapalıdır.",
    kontaktSatzVor: "Adresi ve ulaşım yolunu şurada bulabilirsiniz:",
    kontaktSatzLink: "İletişim & Ulaşım",
  },

  whatsapp: {
    ueberschrift: "Muayenehaneye kolayca yazın",
    text: "Randevu istekleri, geri arama talepleri ve organizasyonla ilgili sorular için yakında bize WhatsApp üzerinden de ulaşabilirsiniz.",
    hinweis:
      "WhatsApp yalnızca organizasyonla ilgili talepler içindir. Lütfen tahlil sonucu, tanı, sağlık verisi, ilaç fotoğrafı veya acil durum mesajı göndermeyin. Acil durumda: 112. Nöbetçi hekim hattı: 116 117.",
    oeffnen: "WhatsApp'ı aç",
    lieberAnrufen: "Aramayı tercih ederim",
    vorschauHinweis:
      "Önizleme — muayenehanenin WhatsApp numarası şu anda hazırlanıyor. O zamana kadar bize telefonla ulaşabilirsiniz.",
    nachrichtVorbelegt: "İyi günler, geri aranmak istiyorum.",
    bildunterschrift:
      "Kısa mesaj, net çerçeve: WhatsApp yalnızca organizasyon için. (Temsili görsel)",
    bildAlt:
      "Açık renkli bir resepsiyon tezgâhında sohbet balonları görünen akıllı telefon, arkada yeşil duvar önünde bir bitki",
  },
};
