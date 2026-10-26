/* keep "23°C"-style values left-to-right inside Arabic text */
var LabArDeg = function (d, p) {
  function fx(s) { return typeof s === 'string' ? s.replace(/\u2066[^\u2069]*\u2069|(?:[-\u2212]?(?:\d+(?:\.\d+)?|\$\d)(?:\u2013[-\u2212]?\d+)?)\s?\u00b0[CFNESW]?/g, function (m) { return m.charAt(0) === '\u2066' ? m : '\u2066' + m + '\u2069'; }) : s; }
  for (var k in d) d[k] = fx(d[k]);
  LabAr.add(d, (p || []).map(function (x) { var r = x[1]; return [x[0], typeof r === 'function' ? function () { return fx(r.apply(null, arguments)); } : fx(r)]; }));
};
(function () {
  var PL = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ajman': 'عجمان', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Liwa': 'ليوا', 'your location': 'موقعك', 'a central UAE location': 'موقع في وسط الإمارات' };
  function pl(n) { return PL[n] || n; }
  var N = '([\\d,]+(?:\\.\\d+)?)';
  var dict = {
    "Solar Output Now": "إنتاج الطاقة الشمسية الآن",
    "Tool · Energy · Solar · Live": "أداة · الطاقة · الشمسية · مباشر",
    "Solar output now.": "إنتاج الطاقة الشمسية الآن.",
    "Thinking about panels on your roof, or curious what yours should be making? This takes the live sunlight forecast for your spot, splits it into direct sun and sky light, tilts it onto your panels and adjusts for heat. You get the output right now, the next 48 hours, a month-by-month estimate and what it saves on your bill.": "تفكر في تركيب ألواح على سطحك، أو تريد معرفة ما يجب أن تنتجه ألواحك؟ تأخذ هذه الأداة توقعات الإشعاع الشمسي المباشرة لموقعك، وتقسمها إلى أشعة مباشرة وضوء السماء، وتسقطها على ألواحك بزاوية ميلها، وتعدّلها حسب الحرارة. فتحصل على الإنتاج الآن، وخلال الساعات الـ 48 القادمة، وتقديرًا لكل شهر، وما توفره من فاتورتك.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا",
    "Next 48 hours (kW)": "الساعات الـ 48 القادمة (kW)",
    "Forecast output": "الإنتاج المتوقع",
    "Bars are the expected output each hour. The faint line is what a perfectly clear sky would give, so gaps between them are cloud or dust.": "الأعمدة هي الإنتاج المتوقع لكل ساعة. والخط الباهت هو ما تعطيه سماء صافية تمامًا، فالفرق بينهما سببه الغيوم أو الغبار.",
    "A typical year (kWh per month)": "سنة نموذجية (kWh شهريًا)",
    "Dust is the UAE's biggest hidden solar loss. A thin film of fine sand blocks light before it reaches the cells, and in humid mornings dew turns it into a crust that wind can't blow away. Studies in the Gulf often report losses of roughly 0.3 to 1% a day on panels that are never cleaned, so a month without cleaning can cost 10% or more, and one dust storm can do that overnight. That's why the soiling setting matters, and why big UAE solar parks clean their panels with robots every few days.": "الغبار هو أكبر خسارة خفية للطاقة الشمسية في الإمارات. طبقة رقيقة من الرمل الناعم تحجب الضوء قبل وصوله إلى الخلايا، وفي الصباحات الرطبة يحوّلها الندى إلى قشرة لا تزيلها الرياح. وكثيرًا ما تذكر دراسات في الخليج خسائر بين 0.3 و1% يوميًا في الألواح التي لا تُنظَّف أبدًا، فشهر دون تنظيف قد يكلف 10% أو أكثر، وعاصفة غبار واحدة قد تفعل ذلك في ليلة. لهذا يهم إعداد الاتساخ، ولهذا تنظّف محطات الطاقة الشمسية الكبرى في الإمارات ألواحها بالروبوتات كل بضعة أيام.",
    "Heat is the second loss. Panels are rated at 25°C, but on a UAE summer roof the cells run at 60 to 70°C, and each degree above 25 costs about 0.35% of output. So a clear day in January can beat a clear day in July, even though the July sun is higher.": "الحرارة هي الخسارة الثانية. تُقاس قدرة الألواح عند 25°C، لكن على سطح إماراتي في الصيف تعمل الخلايا عند 60 إلى 70°C، وكل درجة فوق 25 تكلف نحو 0.35% من الإنتاج. لذا قد يتفوق يوم صافٍ في يناير على يوم صافٍ في يوليو، مع أن شمس يوليو أعلى.",
    "An estimate from a simple model and a weather forecast, not a quote. For a real system, ask a licensed installer (Shams Dubai in Dubai, or your emirate's utility scheme) for a site survey.": "تقدير من نموذج بسيط وتوقعات الطقس، وليس عرض سعر. لنظام حقيقي، اطلب من مركّب معتمد (برنامج شمس دبي في دبي، أو برنامج هيئة الكهرباء في إمارتك) معاينة الموقع.",
    "Your system": "نظامك",
    "Size (kWp)": "القدرة (kWp)", "Tilt (degrees from flat)": "الميل (درجات عن الأفقي)", "Facing (azimuth)": "الاتجاه (السمت)",
    "South (180°)": "الجنوب (180°)", "South-east (135°)": "الجنوب الشرقي (135°)", "South-west (225°)": "الجنوب الغربي (225°)", "East (90°)": "الشرق (90°)", "West (270°)": "الغرب (270°)", "North (0°)": "الشمال (0°)",
    "Inverter and wiring losses (%)": "خسائر العاكس والأسلاك (%)", "Dust / soiling loss (%)": "خسارة الغبار والاتساخ (%)", "Heat loss per °C (%)": "خسارة الحرارة لكل °C (%)",
    "A typical villa roof fits 5 to 10 kWp. In the UAE a tilt of about 20 to 25° facing south catches the most over a year. Soiling: about 2–3% if cleaned weekly, 5% fortnightly, 10–20% after a month or a dust storm.": "يتسع سطح الفيلا المعتاد لـ 5 إلى 10 kWp. وفي الإمارات يلتقط الميل بنحو 20 إلى 25° باتجاه الجنوب أكبر قدر على مدار السنة. الاتساخ: نحو 2–3% مع التنظيف الأسبوعي، و5% كل أسبوعين، و10–20% بعد شهر أو عاصفة غبار.",
    "Savings": "التوفير", "Your tariff": "تعرفتك",
    "DEWA, 2,001–4,000 kWh slab (28 + 6 fils surcharge + VAT)": "هيئة كهرباء ومياه دبي، شريحة 2,001–4,000 kWh (‏28 + 6 فلوس رسوم وقود + ضريبة القيمة المضافة)",
    "DEWA, first 2,000 kWh (23 + 6 + VAT)": "هيئة كهرباء ومياه دبي، أول 2,000 kWh (‏23 + 6 + الضريبة)",
    "DEWA, 4,001–6,000 kWh (32 + 6 + VAT)": "هيئة كهرباء ومياه دبي، 4,001–6,000 kWh (‏32 + 6 + الضريبة)",
    "ADDC / AADC expat, above allowance (30.5 + VAT)": "توزيع أبوظبي / توزيع العين للمقيمين، فوق الحصة (‏30.5 + الضريبة)",
    "ADDC / AADC expat, within allowance (26.8 + VAT)": "توزيع أبوظبي / توزيع العين للمقيمين، ضمن الحصة (‏26.8 + الضريبة)",
    "ADDC / AADC UAE national (7.5 + VAT)": "توزيع أبوظبي / توزيع العين للمواطنين (‏7.5 + الضريبة)",
    "SEWA expat (typical 35 + VAT)": "هيئة كهرباء ومياه الشارقة للمقيمين (عادةً 35 + الضريبة)",
    "Etihad WE expat (typical 33 + VAT)": "الاتحاد للماء والكهرباء للمقيمين (عادةً 33 + الضريبة)",
    "SEWA or Etihad WE, UAE national (typical)": "هيئة الشارقة أو الاتحاد للماء والكهرباء، للمواطنين (قيمة معتادة)",
    "Value of each kWh (fils, edit to match your bill)": "قيمة كل kWh (فلس، عدّلها لتطابق فاتورتك)",
    "Tariffs as published by DEWA (with the October 2026 fuel surcharge of 6 fils) and ADDC, checked October 2026; SEWA and Etihad WE figures are typical, so check your bill. Assumes every solar kWh replaces one you would have bought at this rate, as with net metering (Shams Dubai). Your top slab is the one solar saves first.": "التعرفات كما نشرتها هيئة كهرباء ومياه دبي (مع رسوم الوقود لشهر أكتوبر 2026 البالغة 6 فلوس) وشركة أبوظبي للتوزيع، وتم التحقق منها في أكتوبر 2026؛ أما أرقام هيئة الشارقة والاتحاد للماء والكهرباء فقيم معتادة، فراجع فاتورتك. يُفترض أن كل kWh شمسية تحل محل واحدة كنت ستشتريها بهذا السعر، كما في نظام صافي القياس (شمس دبي). وأعلى شريحة لديك هي أول ما توفره الطاقة الشمسية.",
    "Live output needs the forecast.": "يحتاج الإنتاج المباشر إلى التوقعات.",
    "Next 48 hours": "الساعات الـ 48 القادمة",
    "The sun is down. Output resumes after sunrise.": "الشمس غائبة. يستأنف الإنتاج بعد الشروق.",
    "Couldn't reach the forecast service. The monthly estimate below still works.": "تعذّر الوصول إلى خدمة التوقعات. التقدير الشهري أدناه ما زال يعمل.",
    "Your browser can't share a location.": "لا يستطيع متصفحك مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  };
  LabArDeg(dict, [
    [new RegExp('^' + N + ' kWh?$'), function (m) { return '\u2066' + m + '\u2069'; }],
    [new RegExp('^' + N + ' AED saved$'), 'وفّرت $1 درهم'],
    [new RegExp('^peak ' + N + ' kW$'), 'الذروة \u2066$1 kW\u2069'],
    [/^(\d+)h$/, '$1:00'],
    [/^\d\d-\d\d \d\d:\d\d · [\d.]+ kW$/, function (m) { return m; }],
    [/^[^\s:]+: [\d,]+ kWh$/, function (m) { return m; }],
    [/^This hour at (.+)$/, function (m, n) { return 'هذه الساعة في ' + pl(n); }],
    [/^Fetching the sunlight forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب توقعات الإشعاع الشمسي لـ' + pl(n) + '…'; }],
    [/^(.+) · forecast from Open-Meteo$/, function (m, n) { return pl(n) + ' · التوقعات من Open-Meteo'; }],
    [/^Sun (-?\d+)° up, (\d+) W\/m² on flat ground \((\d+) direct, (\d+) diffuse\), (\d+) W\/m² on your panels\. Cells at about (-?\d+)°C, so heat is costing (\d+)%\.$/, function (m, a, g, d, f, p, t, h) {
      return 'الشمس على ارتفاع ' + a + '°، و' + g + ' W/m² على سطح أفقي (' + d + ' مباشر، ' + f + ' منتشر)، و' + p + ' W/m² على ألواحك. حرارة الخلايا نحو ' + t + '°C، لذا تكلفك الحرارة ' + h + '%.';
    }],
    [new RegExp('^Forecast output for the next 48 hours, peak ' + N + ' kW$'), 'الإنتاج المتوقع للساعات الـ 48 القادمة، والذروة $1 kW'],
    [new RegExp('^A typical year: ' + N + ' kWh, about ' + N + ' AED saved$'), 'سنة نموذجية: \u2066$1 kWh\u2069، توفير نحو $2 درهم'],
    [new RegExp('^Uses typical UAE monthly sunshine \\(about 2,000 kWh per m² a year on flat ground, a rough long-term average\\) and daytime temperatures, tilted to your panels for (.+)\\. That is about ' + N + ' kWh per kWp a year; UAE rooftop systems typically make 1,500 to 1,800\\.$'), function (m, n, k) {
      return 'يعتمد على متوسط الإشعاع الشمسي الشهري المعتاد في الإمارات (نحو 2,000 kWh لكل m² سنويًا على سطح أفقي، وهو متوسط تقريبي طويل الأجل) ودرجات الحرارة النهارية، مُسقطًا على ألواحك لـ' + pl(n) + '. أي نحو ' + k + ' kWh لكل kWp سنويًا؛ وتنتج الأنظمة المنزلية في الإمارات عادةً 1,500 إلى 1,800.';
    }]
  ]);
})();
