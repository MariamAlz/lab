/* keep "23°C"-style values left-to-right inside Arabic text */
var LabArDeg = function (d, p) {
  function fx(s) { return typeof s === 'string' ? s.replace(/\u2066[^\u2069]*\u2069|(?:[-\u2212]?(?:\d+(?:\.\d+)?|\$\d)(?:\u2013[-\u2212]?\d+)?)\s?\u00b0[CFNESW]?/g, function (m) { return m.charAt(0) === '\u2066' ? m : '\u2066' + m + '\u2069'; }) : s; }
  for (var k in d) d[k] = fx(d[k]);
  LabAr.add(d, (p || []).map(function (x) { var r = x[1]; return [x[0], typeof r === 'function' ? function () { return fx(r.apply(null, arguments)); } : fx(r)]; }));
};
(function () {
  var WORD = { 'Fine to go out': 'مناسب للخروج', 'Fine, but take care': 'مناسب مع الحذر', 'Keep effort light': 'اكتفِ بجهد خفيف', 'Avoid effort outdoors': 'تجنّب الجهد في الخارج', 'Stay indoors': 'ابقَ في الداخل' };
  var MSG = {
    'Good conditions for anything outdoors.': 'ظروف جيدة لأي نشاط في الخارج.',
    'Drink water and keep to the shade for long stays.': 'اشرب الماء والزم الظل إن طال بقاؤك في الخارج.',
    'A short walk is fine. Save the run or the playground for later.': 'لا بأس بمشي قصير. أجّل الجري أو اللعب في الحديقة إلى وقت لاحق.',
    'Only go out if you have to, and keep it short.': 'لا تخرج إلا للضرورة، واجعل الوقت قصيرًا.',
    'Dangerous conditions. Stay in air conditioning if you can.': 'ظروف خطرة. ابقَ في مكان مكيّف إن استطعت.'
  };
  var WHY = { 'dust in the air': 'الغبار في الجو', 'poor air quality': 'سوء جودة الهواء', 'very strong sun': 'الشمس القوية جدًا' };
  function why(s) { var m = s.match(/^heat with (\d+)% humidity$/); return m ? 'الحرارة مع رطوبة ' + m[1] + '%' : WHY[s] || s; }
  function hr(s) { var m = s.match(/^(\d+)(am|pm)$/); return m ? m[1] + (m[2] === 'am' ? ' ص' : ' م') : s; }
  var dict = {
    "Heat & Air Now": "الحر والهواء الآن",
    "Tool · Weather · UAE · Live": "أداة · الطقس · الإمارات · مباشر",
    "Heat &amp; air now.": "الحر والهواء الآن.",
    "A weather app tells you it's 41°C. What you actually want to know is whether it's safe to walk to the shop, take the kids out, or go for a run, and when today is the best hour to do it. This combines heat with humidity, dust, air quality and UV to answer that.": "يخبرك تطبيق الطقس أن الحرارة 41°C. لكن ما تريد معرفته فعلًا هو: هل من الآمن أن تمشي إلى المتجر، أو تخرج بالأطفال، أو تذهب للجري، وما أفضل ساعة لذلك اليوم؟ تجمع هذه الأداة الحرارة والرطوبة والغبار وجودة الهواء والأشعة فوق البنفسجية لتجيبك.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا",
    "Next 24 hours · outdoor risk": "الساعات الـ 24 القادمة · مخاطر الخروج",
    "Fine": "مناسب", "Take care": "بحذر", "Limit effort": "قلّل الجهد", "Avoid effort": "تجنّب الجهد", "Stay in": "ابقَ في الداخل",
    "Best time today for…": "أفضل وقت اليوم لـ…",
    "How the risk is worked out": "كيف تُحسب المخاطر",
    "<b>Heat stress</b> uses the wet-bulb temperature, which is what a wet cloth would cool to. It captures humidity, and it's why 38°C on the coast in August can be worse than 45°C in Al Ain. Above about 28°C wet-bulb, the body struggles to cool itself during exercise. Above 31°C, even resting outdoors is hard work.": "<b>الإجهاد الحراري</b> يعتمد على درجة الحرارة الرطبة، أي الدرجة التي تبرد إليها قطعة قماش مبللة. وهي تأخذ الرطوبة في الحسبان، ولهذا قد تكون 38°C على الساحل في أغسطس أسوأ من 45°C في العين. فوق نحو 28°C بالحرارة الرطبة يصعب على الجسم تبريد نفسه أثناء التمرين، وفوق 31°C يصبح حتى الجلوس في الخارج مرهقًا.",
    "<b>Air</b> uses the US AQI from fine particles (PM2.5), coarse dust (PM10) and ozone. On dusty days, PM10 can jump to ten times its normal level within an hour. <b>UV</b> of 8 or more burns unprotected skin in under 20 minutes.": "<b>الهواء</b> يعتمد على مؤشر جودة الهواء الأمريكي (US AQI) المحسوب من الجسيمات الدقيقة (PM2.5) والغبار الخشن (PM10) والأوزون. وفي الأيام المغبرة قد يقفز PM10 إلى عشرة أضعاف مستواه المعتاد خلال ساعة. <b>والأشعة فوق البنفسجية</b> بمؤشر 8 أو أكثر تحرق البشرة غير المحمية في أقل من 20 دقيقة.",
    "Outdoor workers in the UAE get a midday break from 12:30 to 15:00 between 15 June and 15 September each year. If you employ a driver, gardener or domestic worker, the strip above shows why. Data from Open-Meteo forecasts (CAMS for air quality), so it's modelled rather than read from a nearby sensor. If you feel dizzy, confused or stop sweating, get cool and call 998 or 999.": "يحصل العاملون في الأماكن المكشوفة في الإمارات على استراحة منتصف النهار من 12:30 إلى 15:00 بين 15 يونيو و15 سبتمبر من كل عام. وإن كان لديك سائق أو مزارع أو عامل منزلي، فالشريط أعلاه يوضح السبب. البيانات من توقعات Open-Meteo (وCAMS لجودة الهواء)، أي أنها نماذج محسوبة وليست قراءات من جهاز استشعار قريب. إذا شعرت بدوار أو تشوش أو توقفت عن التعرق، فابحث عن مكان بارد واتصل على 998 أو 999.",
    "Right now": "الآن",
    "Feels": "الإحساس",
    "Air quality": "جودة الهواء", "Dust": "الغبار", "UV index": "مؤشر الأشعة فوق البنفسجية",
    "Moderate": "متوسطة", "Sensitive groups": "ضارة للفئات الحساسة", "Unhealthy": "غير صحية", "Very unhealthy": "غير صحية جدًا", "Extreme": "شديد جدًا",
    "strong, may lift sand": "قوية، وقد تثير الرمال",
    "now": "الآن",
    "A walk": "المشي", "Most comfortable hour": "أكثر الساعات راحة",
    "A run or cycle": "الجري أو ركوب الدراجة", "Exercise needs cooler air than walking": "التمرين يحتاج هواءً أبرد من المشي",
    "Kids at the playground": "لعب الأطفال في الحديقة", "Slides and swings get hot in the sun, so after sunset is often best": "تسخن الزلاجات والأراجيح في الشمس، لذا غالبًا ما يكون الأفضل بعد الغروب",
    "Washing the car or gardening": "غسل السيارة أو أعمال الحديقة", "Physical work, so heat matters most": "عمل بدني، فالحرارة هي الأهم",
    "Not today": "ليس اليوم",
    "No data": "لا بيانات",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقق من اتصالك وحاول مجددًا.",
    "Your browser can't share a location.": "لا يستطيع متصفحك مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  };
  for (var k in WORD) dict[k] = WORD[k];
  for (k in MSG) dict[k] = MSG[k];
  var PL = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ajman': 'عجمان', 'Umm Al Quwain': 'أم القيوين', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Liwa': 'ليوا', 'Your location': 'موقعك' };
  LabArDeg(dict, [
    [/^Heat & Air Now$/, 'الحر والهواء الآن'],
    [/^Heat & air now\.$/, 'الحر والهواء الآن.'],
    [/^(-?\d+)°C$/, '$1°C'],
    [/^feels like (-?\d+)°C$/, 'الإحساس $1°C'],
    [/^wet-bulb ([\d.]+)°C$/, 'الحرارة الرطبة $1°C'],
    [/^µg\/m³ \(PM10 (.+)\)$/, 'µg/m³ (PM10 $1)'],
    [/^(\d+) km\/h$/, '$1 km/h'],
    [/^\d+(am|pm)$/, function (m) { return hr(m); }],
    [/^Fetching the forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب التوقعات لـ' + (PL[n] || n) + '…'; }],
    [/^(.+) · air quality is unavailable right now, so this is heat and UV only$/, function (m, n) { return (PL[n] || n) + ' · بيانات جودة الهواء غير متاحة الآن، لذا تعتمد النتيجة على الحرارة والأشعة فوق البنفسجية فقط'; }],
    [/^(.+?\.)(?: The main issue is (.+)\.)?$/, function (m, a, w) {
      if (!MSG[a]) return m;
      return MSG[a] + (w ? ' المشكلة الرئيسية هي ' + w.split(' and ').map(why).join(' و') + '.' : '');
    }],
    [/^(\d+(?:am|pm)): (.+?), (-?\d+)°C, wet-bulb ([\d.]+)°C(?:, AQI (\d+))?$/, function (m, h, w, t, tw, aqi) { return hr(h) + ': ' + (WORD[w] || w) + '، ' + t + '°C، الحرارة الرطبة ' + tw + '°C' + (aqi ? '، AQI ' + aqi : ''); }]
  ]);
})();
