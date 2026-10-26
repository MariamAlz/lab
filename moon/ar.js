(function () {
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Sept: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var HM = { 'Muharram': 'محرم', 'Safar': 'صفر', 'Rabiʻ I': 'ربيع الأول', 'Rabiʻ II': 'ربيع الآخر', 'Jumada I': 'جمادى الأولى', 'Jumada II': 'جمادى الآخرة', 'Rajab': 'رجب', 'Shaʻban': 'شعبان', 'Ramadan': 'رمضان', 'Shawwal': 'شوال', 'Dhuʻl-Qiʻdah': 'ذو القعدة', 'Dhuʻl-Hijjah': 'ذو الحجة' };
  var CP = { N: 'شمال', NE: 'شمال شرق', E: 'شرق', SE: 'جنوب شرق', S: 'جنوب', SW: 'جنوب غرب', W: 'غرب', NW: 'شمال غرب' };
  var DT = '((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) \\d{1,2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec), \\d\\d:\\d\\d)';
  function dt(s) { var m = s.match(/^(\w+) (\d+) (\w+), (\d\d:\d\d)$/); return m ? WD[m[1]] + ' ' + m[2] + ' ' + MO[m[3]] + '، ' + m[4] : s; }
  function place(s) { return s === 'Abu Dhabi' ? 'أبوظبي' : s === 'your location' ? 'موقعك' : s; }
  var V = {
    'Not possible: it sets before the Sun': 'غير ممكنة: يغرب قبل الشمس', 'Very unlikely': 'مستبعدة جدًا', 'Maybe with a telescope': 'ربما بالتلسكوب',
    'Possible by eye in a clear sky': 'ممكنة بالعين المجردة في سماء صافية', 'Easy to see by eye': 'سهلة بالعين المجردة'
  };
  var d = {
    "Where's the Moon?": "أين القمر؟",
    "Experiment · Space · Live": "تجربة · فضاء · مباشر",
    "The Moon right now, tilted the way you'd see it from Abu Dhabi (or from wherever you are). The little map shows why it has that shape: half of it is always lit by the Sun, and we see that half from a changing angle.": "القمر الآن، مائلًا كما تراه من أبوظبي (أو من أي مكان أنت فيه). الخريطة الصغيرة توضح سبب شكله: نصفه مضاء دائمًا بالشمس، ونحن نرى هذا النصف من زاوية تتغير.",
    "The Moon's current phase and a diagram of the Sun, Earth and Moon": "طور القمر الحالي ورسم للشمس والأرض والقمر",
    "The horizon, with the Sun and Moon positions": "الأفق مع موقعي الشمس والقمر",
    "Play a month": "شغّل شهرًا",
    "From": "من",
    "Phase": "الطور", "Lit": "المضاء", "Age": "العمر",
    "The positions use a simplified version of the standard lunar theory, accurate to a few arcminutes, which is plenty for rise times and phase. Crescent visibility is a rough guide. In the UAE, the start of each Hijri month is announced by the official moon-sighting committee.": "تعتمد المواقع على نسخة مبسطة من النظرية القمرية القياسية، بدقة بضع دقائق قوسية، وهذا كافٍ لأوقات الشروق والطور. إمكانية رؤية الهلال دليل تقريبي فقط. في الإمارات، تُعلن بداية كل شهر هجري لجنة تحري الأهلة الرسمية.",
    "New moon": "محاق", "Waxing crescent": "هلال متزايد", "First quarter": "تربيع أول", "Waxing gibbous": "أحدب متزايد",
    "Full moon": "بدر", "Waning gibbous": "أحدب متناقص", "Last quarter": "تربيع أخير", "Waning crescent": "هلال متناقص",
    "↑ up in your sky": "↑ أعلى في سمائك", "sunlight →": "ضوء الشمس →", "Earth": "الأرض", "seen from above the North Pole": "كما يُرى من فوق القطب الشمالي",
    "In the sky": "في السماء", "below the horizon": "تحت الأفق", "Next moonrise": "شروق القمر التالي", "Next moonset": "غروب القمر التالي",
    "Distance": "المسافة", "Next full moon": "البدر التالي", "Next new moon": "المحاق التالي", "Hijri date": "التاريخ الهجري",
    "Crescent watch": "رصد الهلال",
    "No crescent evening found in the next few days.": "لا توجد أمسية مناسبة لرؤية الهلال في الأيام القليلة القادمة."
  };
  for (var k in CP) d[k] = CP[k];
  for (k in V) d[k] = V[k];
  LabAr.add(d, [
    [new RegExp('^' + DT + '$'), dt],
    [new RegExp('^' + DT + ' · (.+?) · (now|([+-]?\\d+) (days|h))$'), function (m, a, p, w, n, u) { return dt(a) + ' · ' + place(p) + ' · ' + (w === 'now' ? 'الآن' : n + ' ' + (u === 'days' ? 'يوم' : 'ساعة')); }],
    [/^(\d+(?:\.\d)?) d$/, '$1 يوم'],
    [/^(\d+)° up, (N|NE|E|SE|S|SW|W|NW)$/, function (m, a, c) { return 'ارتفاع ' + a + '\u200E°\u200E، ' + CP[c]; }],
    [/^([\d,]+) km$/, '$1 كم'],
    [/^(Muharram|Safar|Rabiʻ I|Rabiʻ II|Jumada I|Jumada II|Rajab|Shaʻban|Ramadan|Shawwal|Dhuʻl-Qiʻdah|Dhuʻl-Hijjah) (\d+), (\d+) AH$/, function (m, mo, dd, y) { return dd + ' ' + HM[mo] + ' ' + y + ' هـ'; }],
    [/^As it looks from (.+)$/, function (m, p) { return 'كما يبدو من ' + place(p); }],
    [/^Below the horizon in (.+)$/, function (m, p) { return 'تحت الأفق في ' + place(p); }],
    [/^(Sun|Moon) (-?\d+)°$/, function (m, b, a) { return (b === 'Sun' ? 'الشمس' : 'القمر') + ' \u2066' + a + '\u200E°\u200E\u2069'; }], // isolate the signed number so it reads -19° whatever the canvas direction
    [new RegExp('^New moon ' + DT + '\\. At sunset in (.+):$'), function (m, a, p) { return 'المحاق ' + dt(a) + '. عند الغروب في ' + place(p) + ':'; }],
    [new RegExp('^' + DT + ' · age (\\d+) h · ([\\d.-]+)° high · ([\\d.]+)° from the Sun(?: · sets (\\d+) min after the Sun)?$'), function (m, a, ag, al, el, lag) {
      return dt(a) + ' · العمر ' + ag + ' ساعة · الارتفاع \u2066' + al + '°\u2069 · يبعد ' + el + '\u200E°\u200E عن الشمس' + (lag ? ' · يغرب بعد الشمس بـ' + lag + ' دقيقة' : ''); }],
    [/^Location not available, still showing (.+)\.$/, function (m, p) { return 'الموقع غير متاح، وما زال العرض لـ' + place(p) + '.'; }]
  ]);
})();
