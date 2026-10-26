(function () {
  var C = { 'Abu Dhabi': 'أبوظبي', 'London': 'لندن', 'New York': 'نيويورك', 'Tokyo': 'طوكيو', 'Sydney': 'سيدني', 'Reykjavík': 'ريكيافيك', 'Nairobi': 'نيروبي', 'São Paulo': 'ساو باولو', 'Riyadh': 'الرياض', 'Paris': 'باريس' };
  var CN = Object.keys(C).join('|');
  function c(n) { return C[n] || n; }
  var HEM = { N: 'ش', S: 'ج', E: 'ق', W: 'غ' };
  var d = {};
  Object.keys(C).forEach(function (k) { d[k] = C[k]; });
  LabAr.add(Object.assign(d, {
    "My sky and yours": "سمائي وسماؤك",
    "Experiment · GNSS": "تجربة · الملاحة بالأقمار الصناعية",
    "My sky over Abu Dhabi, <em>and yours.</em>": "سمائي فوق أبوظبي، <em>وسماؤك.</em>",
    "These are the GPS, Galileo and BeiDou satellites above each city right now, worked out from the same orbit data the site downloads every day. Pick a city to compare it with Mariam's.": "هذه أقمار GPS وGalileo وBeiDou فوق كل مدينة في هذه اللحظة، محسوبة من بيانات المدارات نفسها التي ينزّلها الموقع كل يوم. اختر مدينة لتقارنها بسماء مريم.",
    "Choose your city": "اختر مدينتك",
    "You": "أنت",
    "Satellites above Abu Dhabi now": "الأقمار فوق أبوظبي الآن",
    "Satellites above your city now": "الأقمار فوق مدينتك الآن",
    "GPS (USA)": "GPS (الولايات المتحدة)",
    "Galileo (EU)": "Galileo (الاتحاد الأوروبي)",
    "BeiDou (China)": "BeiDou (الصين)",
    "Only satellites at least 10° above the horizon count": "تُحسب فقط الأقمار التي ترتفع 10° على الأقل فوق الأفق",
    "SATS": "الأقمار",
    "LOCAL": "التوقيت المحلي",
    "exactly the same number": "العدد نفسه تمامًا",
    "Could not load orbit data. Try again in a moment.": "تعذّر تحميل بيانات المدارات. حاول بعد قليل.",
    "N": "ش", "E": "ق", "S": "ج", "W": "غ"
  }), [
    [/^(MARIAM|YOU) · ([\d.]+)° ([NS]) ([\d.]+)° ([EW])$/, function (m, w, a, ns, b, ew) { return (w === 'YOU' ? 'أنت' : 'مريم') + ' · ' + a + '° ' + HEM[ns] + ' ' + b + '° ' + HEM[ew]; }],
    [/^(GPS|GAL|BDS) (\d+)$/, '$1 $2'],
    [/^(\d+):(\d\d) (AM|PM)$/, function (m, h, mm, a) { return h + ':' + mm + ' ' + (a === 'AM' ? 'ص' : 'م'); }],
    [/^[GEC]\d\d$/, function (m) { return m; }],
    [new RegExp('^Satellites above (' + CN + ') now$'), function (m, n) { return 'الأقمار فوق ' + c(n) + ' الآن'; }],
    [new RegExp('^Right now (' + CN + ') sees$'), function (m, n) { return 'ترى ' + c(n) + ' الآن'; }],
    [new RegExp('^Right now (' + CN + ') and Abu Dhabi see$'), function (m, n) { return 'ترى ' + c(n) + ' وأبوظبي الآن'; }],
    [/^(\d+) more$/, function (m, n) { return n === '1' ? 'قمرًا ملاحيًا واحدًا إضافيًا' : n + ' أقمار ملاحة إضافية'; }],
    [new RegExp('^navigation satellites than (' + CN + ') \\((\\d+) vs (\\d+)\\)\\.$'), function (m, n, a, b) { return 'مقارنةً ب' + c(n) + ' (' + a + ' مقابل ' + b + ').'; }],
    [/^of satellites: (\d+)\.$/, 'من الأقمار: $1.']
  ]);
})();
