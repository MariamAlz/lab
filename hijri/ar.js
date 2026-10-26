(function () {
  var GM = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر' };
  var WD = { Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد' };
  var HM = { 'Muharram': 'محرم', 'Safar': 'صفر', 'Rabi al-Awwal': 'ربيع الأول', 'Rabi al-Thani': 'ربيع الآخر', 'Jumada al-Ula': 'جمادى الأولى', 'Jumada al-Akhirah': 'جمادى الآخرة', 'Rajab': 'رجب', 'Shaban': 'شعبان', 'Ramadan': 'رمضان', 'Shawwal': 'شوال', 'Dhu al-Qadah': 'ذو القعدة', 'Dhu al-Hijjah': 'ذو الحجة' };
  var hmRe = '(' + Object.keys(HM).join('|') + ')';
  function g(s) { return s.replace(/^(\w+), /, function (m, d) { return (WD[d] || d) + '، '; }).replace(/\b([A-Z][a-z]+)\b/g, function (m) { return GM[m] || m; }); }
  function h(s) { return s.replace(new RegExp('^(\\d+) ' + hmRe + ' (\\d+) AH$'), function (m, d, mo, y) { return d + ' ' + HM[mo] + ' ' + y + ' هـ'; }); }
  var gRe = /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), \d+ [A-Z][a-z]+ \d+$/;
  var hRe = new RegExp('^\\d+ ' + hmRe + ' \\d+ AH$');
  var dict = {
    "Hijri Date Converter": "محوّل التاريخ الهجري",
    "Tool · Calendar · UAE": "أداة · تقويم · الإمارات",
    "Hijri date converter.": "محوّل التاريخ الهجري.",
    "The Hijri year follows the Moon, so it's about 11 days shorter than the Gregorian one and the months drift through the seasons. Convert any date both ways, see your age in each calendar, and count down to the next Ramadan and Eid.": "تتبع السنة الهجرية القمر، لذا هي أقصر من السنة الميلادية بنحو 11 يومًا، وتتنقّل أشهرها عبر الفصول. حوّل أي تاريخ في الاتجاهين، واعرف عمرك بكل تقويم، وتابع العدّ التنازلي لرمضان والعيد القادمين.",
    "Hijri": "هجري",
    "Gregorian → Hijri": "ميلادي ← هجري",
    "Hijri → Gregorian": "هجري ← ميلادي",
    "Gregorian date": "التاريخ الميلادي",
    "AH": "هـ",
    "Age in both calendars": "العمر بالتقويمين",
    "Date of birth": "تاريخ الميلاد",
    "Enter a date of birth.": "أدخل تاريخ الميلاد.",
    "Coming up": "المناسبات القادمة",
    "days": "يومًا",
    "Start of Ramadan": "بداية رمضان",
    "Eid al-Fitr": "عيد الفطر",
    "Day of Arafah": "يوم عرفة",
    "Eid al-Adha": "عيد الأضحى",
    "Islamic New Year": "رأس السنة الهجرية",
    "Prophet's Birthday": "المولد النبوي",
    "Isra and Mi'raj": "الإسراء والمعراج",
    "Gregorian years ·": "سنة ميلادية ·",
    "Hijri years": "سنة هجرية",
    "That day doesn't exist in this month (Hijri months have 29 or 30 days).": "هذا اليوم غير موجود في هذا الشهر (الشهر الهجري 29 أو 30 يومًا).",
    "This uses the Umm al-Qura calendar built into your browser. Religious dates such as the start of Ramadan and Eid are confirmed by moon sighting and can differ by a day. Hijri age matters for some official purposes: a Hijri year is 354 or 355 days, so you are a little older in Hijri years.": "تعتمد الأداة على تقويم أم القرى المدمج في متصفحك. تُثبَت المواعيد الدينية مثل بداية رمضان والعيد برؤية الهلال، وقد تختلف بيوم. ويهم العمر الهجري في بعض الأغراض الرسمية: السنة الهجرية 354 أو 355 يومًا، لذا يكون عمرك بالسنوات الهجرية أكبر قليلًا."
  };
  Object.keys(HM).forEach(function (k) { dict[k] = HM[k]; });
  LabAr.add(dict, [
    [gRe, function (m) { return g(m); }],
    [hRe, function (m) { return h(m); }],
    [/^(.+) · (\d+ [A-Za-z' -]+ \d+ AH)$/, function (m, a, b) { return g(a) + ' · ' + h(b); }],
    [/^Born (.+ AH)\. That's ([\d,]+) days\. Next Hijri birthday: (.+)\.$/, function (m, b, n, nb) { return 'وُلدت في ' + h(b) + '. عشت حتى الآن ' + n + ' يومًا. عيد ميلادك الهجري القادم: ' + (nb === '—' ? '—' : g(nb)) + '.'; }]
  ]);
})();
