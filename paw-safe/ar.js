(function () {
  var S = { 'asphalt road': 'الأسفلت', 'concrete or pavers': 'الخرسانة أو البلاط', 'sand': 'الرمل', 'artificial turf': 'العشب الصناعي', 'grass': 'العشب' };
  var CITY = { 'Dubai': 'دبي', 'Abu Dhabi': 'أبوظبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ajman': 'عجمان', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Your location': 'موقعك' };
  var W = { 'Safe for paws': 'آمن للأقدام', 'OK, keep it short': 'لا بأس، لكن باختصار', 'Caution': 'احذر', 'Too hot for paws': 'ساخن جدًا على الأقدام', 'Danger: stay in': 'خطر: ابقَ في الداخل' };
  function H(s) { return s.replace(/^(\d+)am$/, '$1 ص').replace(/^(\d+)pm$/, '$1 م'); }
  var sAlt = Object.keys(S).join('|'), wAlt = Object.keys(W).map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
  var d = {
    "Paw-Safe Walks": "مشي آمن للأقدام",
    "Tool · Pets · Weather · UAE · Live": "أداة · حيوانات أليفة · طقس · الإمارات · مباشر",
    "Paw-safe walks.": "مشي آمن لأقدام كلبك.",
    "Dogs walk barefoot. On a sunny UAE afternoon the road can be 25 to 30°C hotter than the air, hot enough to burn paw pads in under a minute. This estimates the surface temperature from live sun, air and wind for your area, and shows which hours in the next day are safe for a walk.": "الكلاب تمشي حافية. في عصر مشمس في الإمارات قد يكون الطريق أسخن من الهواء بـ25 إلى 30\u200E°C، وهذا كافٍ لحرق وسائد الأقدام في أقل من دقيقة. تقدّر هذه الصفحة حرارة السطح من الشمس والهواء والرياح لحظيًا في منطقتك، وتبيّن الساعات الآمنة للمشي خلال اليوم القادم.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Surface:": "السطح:",
    "Next 24 hours · estimated surface °C": "الساعات الـ24 القادمة · حرارة السطح التقديرية \u200E°C",
    "Safe": "آمن", "Too hot": "ساخن جدًا", "Danger": "خطر", "Colour also counts air heat": "اللون يحتسب حرارة الهواء أيضًا",
    "Best times to walk": "أفضل أوقات المشي",
    "Start the 7-second hand test": "ابدأ اختبار اليد لمدة 7 ثوانٍ",
    "<b>The 7-second test.</b> Put the back of your hand flat on the ground in the sun. If you can't hold it there for 7 seconds, it's too hot for paws. Tap the circle to count.": "<b>اختبار الثواني السبع.</b> ضع ظهر يدك مسطحًا على الأرض في الشمس. إذا لم تستطع إبقاءها 7 ثوانٍ، فالأرض ساخنة جدًا على الأقدام. اضغط على الدائرة للعدّ.",
    "Heat-stroke signs in dogs": "علامات ضربة الشمس لدى الكلاب",
    "Heavy panting that doesn't settle in the shade": "لهاث شديد لا يهدأ في الظل",
    "Thick drool, very red or pale gums, bright red tongue": "لعاب كثيف، ولثة حمراء جدًا أو شاحبة، ولسان أحمر فاقع",
    "Weakness, stumbling, lying down and refusing to move": "ضعف، وتعثّر، واستلقاء ورفض للحركة",
    "Vomiting or diarrhoea": "قيء أو إسهال",
    "Confusion, collapse or seizures": "تشوّش، أو انهيار، أو نوبات تشنج",
    "<b>If you see these:</b> move the dog into shade or air conditioning, pour cool (not ice-cold) water over the body, especially belly and paws, put a fan on them, offer small sips of water, and call a vet straight away. Heat stroke can be fatal even after the dog seems to recover. Flat-faced breeds, puppies, old, overweight and dark-coated dogs are most at risk.": "<b>إذا لاحظت ذلك:</b> انقل الكلب إلى الظل أو مكان مكيّف، واسكب ماءً باردًا (لا مثلجًا) على جسمه، خاصة البطن والأقدام، وشغّل مروحة عليه، وقدّم له رشفات صغيرة من الماء، واتصل بالطبيب البيطري فورًا. ضربة الشمس قد تكون قاتلة حتى بعد أن يبدو الكلب قد تعافى. السلالات ذات الوجه المسطح، والجراء، والكلاب المسنّة وزائدة الوزن وداكنة الفرو هي الأكثر عرضة للخطر.",
    "<b>How the estimate works.</b> The surface is treated as a slab in balance: sunlight it absorbs (95% for asphalt) goes back out as heat into the air (faster in wind), heat radiated to the sky (less under cloud), and a share into the ground. That gives a steady-state temperature for each hour, which is then smoothed with a 3-hour lag because roads warm up and cool down slowly. On a 25°C sunny day it gives about 52°C for asphalt, close to the figure vets often quote from measurements.": "<b>كيف يُحسب التقدير؟</b> يُعامَل السطح كلوح في حالة توازن: ضوء الشمس الذي يمتصه (95% للأسفلت) يخرج مجددًا حرارةً إلى الهواء (أسرع مع الرياح)، وحرارةً مشعّة نحو السماء (أقل تحت الغيوم)، وجزءًا إلى باطن الأرض. هذا يعطي درجة حرارة مستقرة لكل ساعة، ثم تُنعَّم بتأخير 3 ساعات لأن الطرق تسخن وتبرد ببطء. في يوم مشمس حرارته 25\u200E°C يعطي نحو 52\u200E°C للأسفلت، وهو قريب من الرقم الذي يذكره الأطباء البيطريون كثيرًا من القياسات.",
    "It is an estimate. Shade, building reflections, colour and fresh tarmac change things a lot, and air heat matters too: even on grass, a long walk in 35°C air can cause heat stroke. Weather from Open-Meteo forecasts. Always do the hand test.": "هذا تقدير فقط. الظل وانعكاسات المباني واللون والأسفلت الجديد تغيّر النتيجة كثيرًا، وحرارة الهواء مهمة أيضًا: حتى على العشب، قد يسبب مشي طويل في هواء حرارته 35\u200E°C ضربة شمس. الطقس من توقعات Open-Meteo. قم دائمًا باختبار اليد.",
    "Asphalt road": "طريق أسفلتي", "Concrete or pavers": "خرسانة أو بلاط", "Sand": "رمل", "Artificial turf": "عشب صناعي", "Grass": "عشب",
    "Couldn't reach the weather service. Check your connection and try again, and use the 7-second test.": "تعذّر الوصول إلى خدمة الطقس. تحقّق من اتصالك وحاول مرة أخرى، واستخدم اختبار الثواني السبع.",
    "No data": "لا توجد بيانات", "Without live data, use the hand test below.": "بدون بيانات مباشرة، استخدم اختبار اليد أدناه.",
    "Right now": "الآن",
    "Good time for a normal walk.": "وقت مناسب لمشي عادي.",
    "Fine for a walk. Bring water and use shade.": "مناسب للمشي. خذ معك ماءً وامشِ في الظل.",
    "Keep it to a quick toilet break, on grass or in shade if you can.": "اكتفِ بخروج سريع لقضاء الحاجة، على العشب أو في الظل إن أمكن.",
    "Paws can burn. Stay off roads and pavements, or wait until later.": "قد تحترق الأقدام. ابتعد عن الطرق والأرصفة، أو انتظر حتى وقت لاحق.",
    "Too hot for any walk outside. Use indoor play and wait for the evening.": "الجو حار جدًا لأي مشي في الخارج. العب مع كلبك في الداخل وانتظر المساء.",
    "Air": "الهواء", "Sun": "الشمس", "UV index": "مؤشر UV", "Cloud": "الغيوم",
    "near air temperature": "قريبة من حرارة الهواء", "none": "لا شيء", "weak": "ضعيفة", "moderate": "متوسطة", "strong": "قوية", "night": "ليل",
    "wind cools the surface": "الرياح تبرّد السطح", "cuts the sun": "تحجب الشمس",
    "No comfortable window in the next 24 hours": "لا توجد فترة مريحة خلال الساعات الـ24 القادمة",
    "Keep walks to short toilet breaks on grass or in shade, early morning or late at night.": "اقتصر على خروج قصير لقضاء الحاجة على العشب أو في الظل، في الصباح الباكر أو في وقت متأخر من الليل.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك.",
    "Your location": "موقعك"
  };
  for (var k in W) d[k] = W[k];
  LabAr.add(d, [
    [/^(-?\d+)°C$/, '$1°C'],
    [/^(\d+) W\/m²$/, '$1 W/m²'],
    [/^(\d+) km\/h$/, '$1 كم/س'],
    [/^Fetching the weather for (.+)…$/, function (m, c) { return 'جارٍ جلب الطقس لـ' + (CITY[c] || c) + '…'; }],
    [new RegExp('^(.+) · (' + sAlt + ')$'), function (m, c, s) { return (CITY[c] || c) + ' · ' + S[s]; }],
    [new RegExp('^The (' + sAlt + ') is about (-?\\d+)°C\\.$'), function (m, s, t) { return 'حرارة ' + S[s] + ' نحو ' + t + '\u200E°C.'; }],
    [/^The surface is fine, but the air feels like (-?\d+)°C, which is (hard on dogs|warm for a dog in a fur coat)\.$/, function (m, t, w) { return 'السطح لا بأس به، لكن الهواء يُحَس كأنه ' + t + '\u200E°C، وهذا ' + (/hard/.test(w) ? 'مرهق للكلاب' : 'دافئ على كلب يرتدي معطفًا من الفرو') + '.'; }],
    [new RegExp('^The (' + sAlt + ') is about (-?\\d+)°C\\. (.+)$'), function (m, s, t, a) { return 'حرارة ' + S[s] + ' نحو ' + t + '\u200E°C. ' + LabAr.t(a); }],
    [/^(The surface is fine, but the air feels like -?\d+°C, which is (?:hard on dogs|warm for a dog in a fur coat)\.) (.+)$/, function (m, a, b) { return LabAr.t(a) + ' ' + LabAr.t(b); }],
    [new RegExp('^Est\\. (' + sAlt + ')$'), function (m, s) { return S[s] + ' (تقديري)'; }],
    [/^(-?\d+)° above air$/, 'أعلى من الهواء بـ$1\u200E°\u200E'],
    [/^feels like (-?\d+)°C$/, 'المحسوسة $1\u200E°C'],
    [/^now$/, 'الآن'],
    [new RegExp('^(\\d+[ap]m): surface about (-?\\d+)°C, air (-?\\d+)°C \\(feels (-?\\d+)°C\\)\\. (' + wAlt + ')$'), function (m, h, s, a, f, w) { return H(h) + ': السطح نحو ' + s + '\u200E°C، والهواء ' + a + '\u200E°C (المحسوسة ' + f + '\u200E°C). ' + W[w]; }],
    [/^(Now|\d+[ap]m) to (\d+[ap]m)$/, function (m, a, b) { return (a === 'Now' ? 'الآن' : 'من ' + H(a)) + ' إلى ' + H(b); }],
    [/^(\d+) hours?, surface down to (-?\d+)°C$/, function (m, n, t) { return (n === '1' ? 'ساعة واحدة' : n + ' ساعات') + '، وينخفض السطح إلى ' + t + '\u200E°C'; }]
  ]);
})();
