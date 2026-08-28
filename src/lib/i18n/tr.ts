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
      "Henüz çevrilmemiş içerikler şimdilik Almanca görüntülenir.",
    sprache: "Dil",
    sprachwahlOeffnen: "Dil seçin",
  },

  nav: {
    leistungen: "Hizmetler",
    praxisTeam: "Muayenehane & Ekip",
    patientenservice: "Hasta Hizmetleri",
    kontaktAnfahrt: "İletişim & Ulaşım",
    terminBuchen: "Randevu al",
    menueOeffnen: "Menüyü aç",
    menueSchliessen: "Menüyü kapat",
  },

  leiste: {
    notfall: "Hayati tehlike – acil durum",
    bereitschaft: "Nöbetçi hekim hattı",
    termin: "Randevu",
    anrufen: "Ara",
    rezept: "Reçete",
  },

  start: {
    eyebrow: "Espelkamp'ta aile hekimliği",
    headline: "Tüm aile için aile hekimliği hizmeti.",
    text: "Uzun yıllardır Espelkamp ve çevresindeki insanlara eşlik ediyoruz — akut enfeksiyonlardan diyabet veya kalp hastalıklarının uzun süreli takibine kadar. Görüşme için zaman ayırıyoruz, tanı testleri kendi muayenehanemizde yapılıyor.",
    rezeptAnfordern: "Reçete iste",
    terminBuchen: "Randevu al",
    statusHinweis:
      "Randevular telefonla verilir. Muayeneye gelirken lütfen sağlık sigortası kartınızı getirin.",
  },

  sprechzeiten: {
    titel: "Muayene saatleri",
    geschlossen: "kapalı",
    wochenendKurz: "Cmt, Paz",
    hinweis:
      "Lütfen önceden telefonla kayıt yaptırın. Akut şikâyetlerde muayene saatinin başında gelmenizi rica ederiz.",
  },

  termin: {
    titel: "Randevu alma",
    einleitungTelefon:
      "Randevular telefonla verilir. Böylece talebinizin ne kadar acil olduğunu hemen değerlendirebilir ve size uygun bir zaman ayarlayabiliriz.",
    soErreichen: "Bize nasıl ulaşırsınız",
    text: "Muayene saatleri içinde bizi arayın. Lütfen sağlık sigortası kartınızı hazır bulundurun — üç aylık dönemdeki ilk ziyaretinizde kart okutulur.",
    hinweisAkut:
      "Akut şikâyetlerde lütfen muayene saatinin başında gelin. Muayene saatleri dışında 116 117 numaralı nöbetçi hekim hattı yardımcı olur.",
  },

  rezept: {
    titel: "Tekrar reçetesi isteme",
    einleitung:
      "Yalnızca düzenli olarak kullandığınız ilaçlar içindir. Yeni ilaçlar veya doz değişiklikleri için hekimle görüşme gerekir — bunun için lütfen bizi arayın.",
    nurDauermedikation: "Yalnızca sürekli kullanılan ilaçlar",
    name: "Ad ve soyad",
    geburtsdatum: "Doğum tarihi",
    telefon: "Geri arama için telefon numarası",
    medikamentName: "İlacın adı",
    wirkstaerke: "Etken madde dozu",
    packungsgroesse: "Ambalaj büyüklüğü",
    weiteresMedikament: "Başka ilaç ekle",
    einwilligung:
      "Muayenehanenin bu talebi işleme almak için verilerimi işlemesini kabul ediyorum.",
    absenden: "Reçete iste",
    bestaetigungTitel: "Reçete talebiniz ulaştı",
    bestaetigungHinweis:
      "Talebiniz muayenehane tarafından incelenecektir. Bu, reçetenin onaylandığı anlamına gelmez.",
    fehlerAllgemein: "Lütfen işaretli alanları kontrol edin.",
  },

  ueberweisung: {
    titel: "Sevk isteme",
    einleitung:
      "Bir uzman hekime gitmek içindir. Uzmanlık alanı ve nedeni yeterlidir — gerekirse ayrıntıları telefonda konuşuruz.",
    fachrichtung: "Uzmanlık alanı",
    grund: "Sevk nedeni",
    facharztpraxis: "Gideceğiniz uzman muayenehanesi",
    absenden: "Sevk iste",
    bestaetigungTitel: "Sevk talebiniz ulaştı",
    bestaetigungHinweis:
      "Muayenehane talebinizi inceleyecektir. Tıbben gerekli sorular telefonla sorulabilir.",
  },

  kontakt: {
    titel: "İletişim ve ulaşım",
    telefonischErreichen:
      "Randevular, sonuçlar ve formların kapsamadığı tüm sorular için.",
    adresse: "Adres",
    routePlanen: "Yol tarifi al",
    karteLaden: "Google Haritalar'ı yükle",
    anfahrt: "Ulaşım",
  },

  notfall: {
    titel: "Acil durumda",
    einleitung:
      "İki numara yeterli: Hayati tehlike varsa 112. Bir sonraki muayene saatine kadar bekleyemeyecek durumlar için 116 117.",
    lebensbedrohlich: "Hayati tehlike – acil durum",
    lebensbedrohlichHinweis: "Ambulans ve acil hekim, günün her saati",
    bereitschaft: "Nöbetçi hekim hattı",
    bereitschaftHinweis:
      "Muayene saatleri dışında, bir sonraki iş gününe kadar bekleyemeyecek durumlar için",
    keineBeratung:
      "Bu web sitesi tıbbi danışmanlık vermez. Buradaki bilgiler hekim görüşmesinin yerini tutmaz.",
  },

  service: {
    titel: "Hasta Hizmetleri",
    einleitung: "Üç talep, üç net yol. Diğer her şey için:",
    fuerAllesAndere:
      "Sonuçlar, sorular ve diğer her şeyi telefonda konuşuruz. Muayene saatlerinde kayıt masası açıktır.",
    terminTitel: "Randevu",
    terminText:
      "Randevular telefonla verilir. Sağlık sigortası kartınızı hazır bulundurun.",
    terminAktion: "Randevu yoluna git",
    rezeptTitel: "Tekrar reçetesi",
    rezeptText:
      "Düzenli kullandığınız ilaçlar için. İlacın adını, dozunu ve ambalaj büyüklüğünü hazır bulundurun.",
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
  },
};
