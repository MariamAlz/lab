(function () {
  var t = function (s) { return LabAr.t(s); };
  function plural(n, f) { n = +n; return n === 1 ? f[0] : n === 2 ? f[1] : n <= 10 ? n + ' ' + f[2] : n + ' ' + f[3]; }
  var MIN = ['دقيقة', 'دقيقتين', 'دقائق', 'دقيقة'], HRS = ['ساعة', 'ساعتين', 'ساعات', 'ساعة'], DYS = ['يوم', 'يومين', 'أيام', 'يومًا'];
  function ago(s) {
    var m = s.match(/^(\d+) (min|h|days) ago$/); if (!m) return s;
    return 'قبل ' + plural(m[1], m[2] === 'min' ? MIN : m[2] === 'h' ? HRS : DYS);
  }
  var DIR = { N: 'شمال', S: 'جنوب', E: 'شرق', W: 'غرب' };
  function dir(d) { return d.split('').map(function (c) { return DIR[c]; }).join(' '); }
  var REG = {
    'Iran': 'إيران', 'Oman': 'عُمان', 'Pakistan': 'باكستان', 'Afghanistan': 'أفغانستان', 'Yemen': 'اليمن', 'Saudi Arabia': 'السعودية',
    'Iraq': 'العراق', 'Qatar': 'قطر', 'Bahrain': 'البحرين', 'Kuwait': 'الكويت', 'United Arab Emirates': 'الإمارات', 'India': 'الهند',
    'Turkmenistan': 'تركمانستان', 'Tajikistan': 'طاجيكستان', 'Somalia': 'الصومال', 'Djibouti': 'جيبوتي', 'Eritrea': 'إريتريا', 'Ethiopia': 'إثيوبيا',
    'Gulf of Oman': 'خليج عُمان', 'Persian Gulf': 'الخليج العربي', 'Arabian Sea': 'بحر العرب', 'Gulf of Aden': 'خليج عدن', 'Red Sea': 'البحر الأحمر',
    'southern Iran': 'جنوب إيران', 'northern Iran': 'شمال إيران', 'western Iran': 'غرب إيران', 'eastern Iran': 'شرق إيران', 'central Iran': 'وسط إيران',
    'Iran-Iraq border region': 'منطقة الحدود الإيرانية العراقية', 'Pakistan-Afghanistan border region': 'منطقة الحدود الباكستانية الأفغانية',
    'Hindu Kush region, Afghanistan': 'منطقة هندوكوش، أفغانستان', 'Carlsberg Ridge': 'سلسلة كارلسبرغ', 'Owen Fracture Zone region': 'منطقة صدع أوين'
  };
  // USGS place names: translate directions and countries, keep town names as given
  function loc(s) {
    if (REG[s]) return REG[s];
    var m = s.match(/^(.*), ([^,]+)$/); if (m && REG[m[2]]) return m[1] + '، ' + REG[m[2]];
    return s;
  }
  function place(s) {
    var m = s.match(/^(\d+) km ([NSEW]{1,3}) of (.+)$/);
    return m ? 'على بُعد ' + m[1] + ' km ' + dir(m[2]) + ' ' + loc(m[3]) : loc(s);
  }
  var DESC = { 'not felt': 'لا يُشعر به', 'weak': 'ضعيف', 'light': 'خفيف', 'moderate': 'متوسط', 'strong': 'قوي', 'very strong': 'قوي جدًا', 'severe': 'شديد', 'violent': 'عنيف', 'extreme': 'مدمّر' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WIN = { 'past day': 'آخر يوم', 'past week': 'آخر أسبوع', 'past month': 'آخر شهر' };
  function name(s) { return s === 'your location' ? 'موقعك' : t(s); }

  var d = {
    "Did I Feel That?": "هل شعرتُ بهزة؟",
    "Earth · Live · Earthquakes": "الأرض · مباشر · الزلازل",
    "Did I just feel that?": "هل شعرتُ بهزة للتو؟",
    "The UAE itself is quiet, but the mountains of southern Iran across the Gulf are one of the most active earthquake zones on Earth. Big ones there are sometimes felt in Dubai towers. This lists recent earthquakes in the region and estimates how strongly each one might have reached you.": "الإمارات نفسها هادئة زلزاليًا، لكن جبال جنوب إيران على الضفة الأخرى من الخليج من أنشط مناطق الزلازل في العالم. والزلازل الكبيرة هناك يُشعر بها أحيانًا في أبراج دبي. تعرض هذه الصفحة الزلازل الأخيرة في المنطقة وتقدّر بأي قوة ربما وصلك كل منها.",
    "You are": "أنت في", "Size": "القوة", "📍 Use my location": "📍 استخدم موقعي",
    "Earthquake map": "خريطة الزلازل",
    "How strongly you might feel it": "بأي قوة قد تشعر به",
    "Earthquakes": "الزلازل",
    "Earthquakes, newest first · tap to see on the map": "الزلازل، الأحدث أولًا · انقر لعرضه على الخريطة",
    "<b>How the estimate works.</b> Shaking at your spot depends mostly on two things: how big the earthquake was, and how far away you are. Each step up in magnitude releases about 32 times more energy. The shaking then fades with distance, quickly at first and then more slowly. We use a published formula (Atkinson, Worden and Wald, 2014) that turns magnitude and distance into a shaking level on the Modified Mercalli scale, from I (not felt) to X (very destructive). It counts the quake's depth as part of the distance.": "<b>كيف يُحسب التقدير.</b> تعتمد الهزة في مكانك أساسًا على أمرين: قوة الزلزال، وبُعدك عنه. كل درجة إضافية في القوة تطلق طاقة أكبر بنحو 32 مرة. ثم تخفت الهزة مع المسافة، بسرعة في البداية ثم ببطء. نستخدم معادلة منشورة وضعها Atkinson وWorden وWald عام 2014، تحوّل القوة والمسافة إلى مستوى اهتزاز على مقياس ميركالي المعدّل، من I (لا يُشعر به) إلى X (مدمّر جدًا). وتحتسب عمق الزلزال جزءًا من المسافة.",
    "<b>Why towers feel more.</b> Distant large earthquakes send out slow, rolling waves. Tall buildings sway in step with them, so people on high floors in Dubai or Abu Dhabi can feel a quake that people on the ground miss. This is an estimate, not a measurement, and local ground and buildings change it a lot. The UAE's National Center of Meteorology runs its own seismic network and reports small local quakes that may not appear here. Data from the USGS, refreshed every five minutes.": "<b>لماذا يُشعر بها أكثر في الأبراج.</b> ترسل الزلازل الكبيرة البعيدة موجات بطيئة متدحرجة، فتتمايل المباني العالية معها، ولهذا قد يشعر سكان الطوابق العليا في دبي أو أبوظبي بزلزال لا يلاحظه من على الأرض. هذا تقدير وليس قياسًا، وتؤثر فيه طبيعة التربة والمباني كثيرًا. يدير المركز الوطني للأرصاد في الإمارات شبكة رصد زلزالي خاصة به، ويعلن عن الهزات المحلية الصغيرة التي قد لا تظهر هنا. البيانات من USGS، وتُحدَّث كل خمس دقائق.",
    "Past day": "آخر يوم", "Past week": "آخر أسبوع", "Past month": "آخر شهر", "All": "الكل",
    "Not felt": "لا يُشعر به",
    "Weak. Felt by a few people at rest, mostly on upper floors": "ضعيف. يشعر به قلة من الناس وهم في حالة سكون، غالبًا في الطوابق العليا",
    "Weak. Felt indoors, like a passing lorry": "ضعيف. يُشعر به داخل المباني، كمرور شاحنة",
    "Light. Felt by most indoors, windows and dishes rattle": "خفيف. يشعر به معظم من في الداخل، وتهتز النوافذ والأطباق",
    "Moderate. Felt by nearly everyone, small objects fall": "متوسط. يشعر به الجميع تقريبًا، وتسقط الأشياء الصغيرة",
    "Strong. Frightening, some plaster cracks": "قوي. مخيف، وتتشقق بعض طبقات الجص",
    "Very strong. Damage to poorly built buildings": "قوي جدًا. أضرار في المباني ضعيفة البناء",
    "Severe. Damage to ordinary buildings": "شديد. أضرار في المباني العادية",
    "Violent": "عنيف", "Extreme": "مدمّر",
    "Weak": "ضعيف", "Light": "خفيف", "Moderate": "متوسط", "Strong": "قوي", "Very strong": "قوي جدًا", "Severe": "شديد", "not felt": "لا يُشعر به",
    "I": "I", "II": "II", "III": "III", "IV": "IV", "V": "V", "VI": "VI", "VII": "VII", "VIII": "VIII", "IX": "IX", "X": "X",
    "biggest": "الأقوى", "nearest to you": "الأقرب إليك",
    "Probably not.": "على الأرجح لا.",
    "Most people would not notice it, but you might if you were sitting still on a high floor.": "لن يلاحظه معظم الناس، لكن قد تشعر به إن كنت جالسًا بلا حركة في طابق مرتفع.",
    "People resting indoors may have noticed a light rattle or sway.": "ربما لاحظ من كانوا يستريحون في الداخل اهتزازًا أو تمايلًا خفيفًا.",
    "Many people nearby would have noticed it.": "على الأرجح لاحظه كثيرون في المنطقة القريبة.",
    "No earthquakes in the region matching your filters in the last day.": "لا توجد زلازل في المنطقة تطابق خياراتك خلال اليوم الأخير.",
    "If you felt something, it may have been a lorry, construction, or wind on a tall building.": "إن شعرت بشيء، فربما كان شاحنة أو أعمال بناء أو رياحًا على مبنى مرتفع.",
    "No earthquakes match these filters. Try a longer time or a smaller size.": "لا توجد زلازل تطابق هذه الخيارات. جرّب مدة أطول أو قوة أقل.",
    "Unknown place": "مكان غير معروف",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Fetching earthquakes from the USGS…": "جارٍ جلب الزلازل من USGS…",
    "Couldn't reach the USGS feed. Check your connection and try again in a minute.": "تعذّر الوصول إلى بيانات USGS. تحقّق من اتصالك وحاول بعد دقيقة.",
    "No data": "لا توجد بيانات",
    "USGS page ↗": "صفحة USGS ↗",
    "Zoom in": "تكبير", "Zoom out": "تصغير", "Close popup": "إغلاق"
  };
  for (var k in REG) d[k] = REG[k];

  LabAr.add(d, [
    [/^\d+ (min|h|days) ago$/, function (m) { return ago(m); }],
    [/^(\d+) km$/, '$1 km'],
    [/^M([\d.]+)$/, 'M$1'],
    [/^\d+ km [NSEW]{1,3} of .+$/, function (m) { return place(m); }],
    [/^· (.+)$/, function (m, p) { return '· ' + place(p); }],
    [/^(\d+ (?:min|h|days) ago) · (\d+) km away · (-?\d+) km deep$/, function (m, a, k, dp) { return ago(a) + ' · يبعد ' + k + ' km · على عمق ' + dp + ' km'; }],
    [/^\((not felt|weak|light|moderate|strong|very strong|severe|violent|extreme)\)$/, function (m, w) { return '(' + DESC[w] + ')'; }],
    [/^Last 24 hours at (.+)$/, function (m, n) { return 'آخر 24 ساعة في ' + name(n); }],
    [/^Maybe\. Estimated level ([IVX]+), (.+)\.$/, function (m, l, w) { return 'ربما. المستوى المقدّر ' + l + '، ' + (DESC[w] || w) + '.'; }],
    [/^A magnitude ([\d.]+) earthquake (.*), (\d+ (?:min|h|days) ago), about (\d+) km from you\. (.+)$/, function (m, M, p, a, km, s) {
      var pl = place(p); if (pl && !/^على بُعد/.test(pl)) pl = 'في ' + pl;
      return 'زلزال بقوة ' + M + (pl ? ' ' + pl : '') + '، ' + ago(a) + '، ويبعد عنك نحو ' + km + ' km. ' + t(s);
    }],
    [/^There (?:was 1 earthquake|were (\d+) earthquakes) in the region, but none close or big enough to be felt where you are\. (.+)$/, function (m, n, s) {
      return 'وقع في المنطقة ' + (n ? plural(n, ['زلزال واحد', 'زلزالان', 'زلازل', 'زلزالًا']) : 'زلزال واحد') + '، لكن لم يكن أيٌّ منها قريبًا أو قويًا بما يكفي ليُشعر به في مكانك. ' + t(s);
    }],
    [/^(No earthquakes in the region matching your filters in the last day\.) (.+)$/, function (m, a, b) { return t(a) + ' ' + t(b); }],
    [/^earthquakes, (past day|past week|past month)$/, function (m, w) { return 'زلازل، ' + WIN[w]; }],
    [/^Updated (\d\d:\d\d)\. Refreshes every five minutes\.$/, 'آخر تحديث $1. يُحدَّث كل خمس دقائق.'],
    [/^Location was not shared, so we're using (.+)\.$/, function (m, n) { return 'لم تتم مشاركة الموقع، لذا نستخدم ' + name(n) + '.'; }],
    [/^You: (.+)$/, function (m, n) { return 'أنت: ' + name(n); }],
    [/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),? (\d+) (\w{3}),? (\d\d:\d\d) UAE$/, function (m, w, dd, mo, hm) { return WD[w] + ' ' + dd + ' ' + MO[mo] + '، ' + hm + ' بتوقيت الإمارات'; }],
    [/^Depth (-?\d+) km · (\d+) km from (.+)$/, function (m, dp, k, n) { return 'العمق ' + dp + ' km · ' + k + ' km من ' + name(n); }],
    [/^Estimated at (.+):$/, function (m, n) { return 'التقدير في ' + name(n) + ':'; }],
    [new RegExp('^(.*), (' + Object.keys(REG).join('|') + ')$'), function (m) { return loc(m); }]
  ]);
})();
