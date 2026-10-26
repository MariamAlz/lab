/* keep "23°C"-style values left-to-right inside Arabic text */
var LabArDeg = function (d, p) {
  function fx(s) { return typeof s === 'string' ? s.replace(/\u2066[^\u2069]*\u2069|(?:[-\u2212]?(?:\d+(?:\.\d+)?|\$\d)(?:\u2013[-\u2212]?\d+)?)\s?\u00b0[CFNESW]?/g, function (m) { return m.charAt(0) === '\u2066' ? m : '\u2066' + m + '\u2069'; }) : s; }
  for (var k in d) d[k] = fx(d[k]);
  LabAr.add(d, (p || []).map(function (x) { var r = x[1]; return [x[0], typeof r === 'function' ? function () { return fx(r.apply(null, arguments)); } : fx(r)]; }));
};
(function () {
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var MOL = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر' };
  var HM = { 'Muharram': 'محرم', 'Safar': 'صفر', 'Rabi al-Awwal': 'ربيع الأول', 'Rabi al-Thani': 'ربيع الآخر', 'Jumada al-Ula': 'جمادى الأولى', 'Jumada al-Akhirah': 'جمادى الآخرة', 'Rajab': 'رجب', "Sha'ban": 'شعبان', 'Ramadan': 'رمضان', 'Shawwal': 'شوال', 'Dhu al-Qadah': 'ذو القعدة', 'Dhu al-Hijjah': 'ذو الحجة' };
  var HOL = { 'Eid al-Fitr': 'عيد الفطر', 'Eid al-Adha': 'عيد الأضحى', 'Arafat Day': 'يوم عرفة', 'Hijri New Year': 'رأس السنة الهجرية', "Prophet's Birthday": 'المولد النبوي', "New Year's Day": 'رأس السنة الميلادية', 'Commemoration Day': 'يوم الشهيد', 'National Day': 'اليوم الوطني' };
  var TN = { 'wedding': 'حفل زفاف', 'party': 'حفلة', 'outdoor gathering': 'تجمّع في الهواء الطلق' };
  var DATE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),? (\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec),? (\d{4})$/;
  function nd(s) { var m = s.match(DATE); return m ? WD[m[1]] + ' ' + m[2] + ' ' + MO[m[3]] + ' ' + m[4] : s; }
  function hj(s) { var m = s.match(/^(\d+) (.+) (\d+)$/); return m && HM[m[2]] ? m[1] + ' ' + HM[m[2]] + ' ' + m[3] + ' هـ' : s; }
  var REASON = {
    "Saturday: guests are off the next day": "السبت: الضيوف في إجازة في اليوم التالي",
    "Friday evening: start of the weekend": "مساء الجمعة: بداية عطلة نهاية الأسبوع",
    "Hajj season, close to Eid al-Adha": "موسم الحج، قريب من عيد الأضحى",
    "School break, many families travel": "إجازة مدرسية، وتسافر عائلات كثيرة",
    "School break, kids are free": "إجازة مدرسية، والأطفال متفرغون",
    "Full moon night": "ليلة بدر"
  };
  function reason(t) {
    if (REASON[t]) return REASON[t];
    var m;
    if ((m = t.match(/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) works for you$/))) return WD[m[1]] + ' يناسبك';
    if ((m = t.match(/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) isn't one of your days$/))) return WD[m[1]] + ' ليس من أيامك المختارة';
    if ((m = t.match(/^Ramadan (\d+)$/))) return m[1] + ' رمضان';
    if ((m = t.match(/^(.+) \(estimated\)$/)) && HOL[m[1]]) return HOL[m[1]] + ' (تقديري)';
    if ((m = t.match(/^(.+), public holiday$/)) && HOL[m[1]]) return HOL[m[1]] + '، عطلة رسمية';
    if ((m = t.match(/^Evenings around (\d+)°C, highs (\d+)°C$/))) return 'الأمسيات نحو ' + m[1] + '°C، والعظمى ' + m[2] + '°C';
    if ((m = t.match(/^Pleasant evenings around (\d+)°C$/))) return 'أمسيات لطيفة نحو ' + m[1] + '°C';
    if ((m = t.match(/^Cool evenings around (\d+)°C$/))) return 'أمسيات باردة نحو ' + m[1] + '°C';
    return null;
  }
  var dict = {
    "Best Date for an Event": "أفضل موعد لمناسبتك",
    "Tool · Calendar · UAE": "أداة · التقويم · الإمارات",
    "Best date for an event.": "أفضل موعد لمناسبتك.",
    "Picking a wedding or party date here means juggling Ramadan, Eid, public holidays, the summer heat and when families travel for school breaks. This scores every day in the years you choose, explains each score, and shows the whole calendar at a glance. Star the dates you like and add them to your calendar.": "اختيار موعد لحفل زفاف أو مناسبة هنا يعني الموازنة بين رمضان والعيد والعطلات الرسمية وحرّ الصيف وسفر العائلات في الإجازات المدرسية. تمنح هذه الأداة درجة لكل يوم في السنوات التي تختارها، وتشرح سببها، وتعرض التقويم كاملًا بنظرة واحدة. ضع نجمة على المواعيد التي تعجبك وأضفها إلى تقويمك.",
    "Sun": "الأحد",
    "Event": "المناسبة", "Wedding": "حفل زفاف", "Party or dinner (indoors)": "حفلة أو عشاء (في الداخل)", "Outdoor gathering": "تجمّع في الهواء الطلق",
    "City (for heat)": "المدينة (لحساب الحرارة)", "From year": "من سنة", "To year": "إلى سنة",
    "Days that work (tap to change)": "الأيام المناسبة (اضغط للتغيير)",
    "Ramadan": "رمضان", "Avoid": "تجنّب", "Fine (e.g. an iftar)": "لا مانع (مثل إفطار)",
    "Eid days": "أيام العيد", "No preference": "لا تفضيل", "Prefer": "أفضّل",
    "Other public holidays": "العطلات الرسمية الأخرى", "School breaks": "الإجازات المدرسية", "Ignore": "تجاهل",
    "Avoid (families travel)": "تجنّب (العائلات تسافر)", "Prefer (kids are free)": "أفضّل (الأطفال متفرغون)",
    "Full moon nights": "ليالي البدر", "Small bonus": "أفضلية بسيطة", "Don't care": "لا يهم",
    "Top dates · best per week": "أفضل المواعيد · الأفضل في كل أسبوع",
    "Add starred to calendar (.ics)": "أضف المميّزة بنجمة إلى التقويم (\u2066.ics\u2069)",
    "Every day, scored": "كل يوم ودرجته",
    "poor": "ضعيف", "great": "ممتاز", "great ·": "ممتاز ·", "full moon": "بدر",
    "Islamic dates come from the Umm al-Qura calendar built into your browser. The UAE confirms Ramadan, Eid and other Hijri holidays by moon sighting, so the real day can be one day off. Check the official announcement before booking. Heat uses 1991–2020 monthly averages for Dubai and Abu Dhabi airports (evening temperature taken halfway between the daily high and low). School breaks follow the Ministry of Education calendar announced for 2026–2029, and a typical pattern for other years.": "التواريخ الهجرية مأخوذة من تقويم أم القرى المدمج في متصفحك. وتعتمد الإمارات رمضان والعيد والمناسبات الهجرية الأخرى برؤية الهلال، لذا قد يختلف اليوم الفعلي بيوم واحد. تحقق من الإعلان الرسمي قبل الحجز. وتعتمد الحرارة على المتوسطات الشهرية للفترة 1991–2020 في مطاري دبي وأبوظبي (حرارة المساء هي منتصف المسافة بين العظمى والصغرى). وتتبع الإجازات المدرسية تقويم وزارة التربية والتعليم المعلن للأعوام 2026–2029، ونمطًا معتادًا لبقية السنوات.",
    "No future dates in this range.": "لا توجد مواعيد قادمة في هذا النطاق.",
    "Tap ☆ to keep a date, or tap any day in the calendar below for its full breakdown.": "اضغط ☆ لحفظ موعد، أو اضغط أي يوم في التقويم أدناه لعرض تفاصيله كاملة.",
    "Up to three years at a time.": "ثلاث سنوات كحد أقصى في كل مرة.",
    "Star some dates first.": "ضع نجمة على بعض المواعيد أولًا.",
    "★ starred": "★ مميّز بنجمة", "☆ star": "☆ ميّز بنجمة"
  };
  var SUM2 = {
    "Outdoors, heat counts double, so November to March dominates.": "في الهواء الطلق تُحتسب الحرارة مضاعفة، لذا تتصدر الفترة من نوفمبر إلى مارس.",
    "Weddings are mostly indoors, but guests still arrive, park and take photos outside, so heat counts for half.": "حفلات الزفاف غالبًا في الداخل، لكن الضيوف يصلون ويركنون سياراتهم ويلتقطون الصور في الخارج، لذا تُحتسب الحرارة بالنصف.",
    "Indoor parties feel the heat least.": "الحفلات الداخلية هي الأقل تأثرًا بالحرارة."
  };
  for (var k in REASON) dict[k] = REASON[k];
  LabArDeg(dict, [
    [DATE, function (m) { return nd(m); }],
    [/^(.+?),? (\d{4}) ·$/, function (m) { var d = nd(m.replace(/ ·$/, '')); return d !== m.replace(/ ·$/, '') ? d + ' ·' : m; }],
    [/^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})$/, function (m, a, y) { return MOL[a] + ' ' + y; }],
    [/^avg (\d+)$/, 'المتوسط $1'],
    [/^Star (.+)$/, function (m, d) { return 'ميّز ' + nd(d) + ' بنجمة'; }],
    [/^(.+): (\d+)$/, function (m, d, s) { return nd(d) + ': ' + s; }],
    [/^(\d+ .+ \d+) \(Umm al-Qura\)$/, function (m, h) { return hj(h) + ' (أم القرى)'; }],
    [/^(\d+) (Muharram|Safar|Rabi al-Awwal|Rabi al-Thani|Jumada al-Ula|Jumada al-Akhirah|Rajab|Sha'ban|Ramadan|Shawwal|Dhu al-Qadah|Dhu al-Hijjah) (\d+)$/, function (m) { return hj(m); }],
    [/^([+-]?\d+|±0) · (.+)$/, function (m, v, t) { var r = reason(t); return r ? v + ' · ' + r : m; }],
    [/^(\d+) starred\.$/, '$1 مميّزة بنجمة.'],
    [/^(\d+) of (\d+) remaining days score 75 or more for a (wedding|party|outdoor gathering)\. (.+)$/, function (m, a, b, t, rest) { return a + ' من أصل ' + b + ' يومًا متبقيًا تحصل على 75 أو أكثر لـ' + TN[t] + '. ' + (SUM2[rest] || rest); }],
    [/^(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (?:works for you|isn't one of your days)|Ramadan \d+|.+ \(estimated\)|.+, public holiday|(?:Pleasant |Cool )?[Ee]venings around .+)$/, function (m) { return reason(m) || m; }]
  ]);
})();
