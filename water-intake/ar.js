(function () {
  var T = function (s) { return LabAr.t(s); };
  var I = function (x) { return '\u2066' + x + '\u2069'; };
  function L(s) { return s.replace(/([+]?\d+(?:\.\d+)?) L\b/g, function (m, a) { return I(a) + ' لتر'; }).replace(/([+]?\d+(?:[.–]\d+)?) ml/g, function (m, a) { return I(a) + ' مل'; }); }
  function cups(n) { n = +n; return n === 1 ? 'كوب واحد' : n === 2 ? 'كوبان' : n >= 3 && n <= 10 ? n + ' أكواب' : n + ' كوبًا'; }
  function t12(h, m, ap) { return h + ':' + m + (ap === 'am' ? ' ص' : ' م'); }
  var PACE = {
    "Target reached. Keep sipping if you're thirsty or outside.": "وصلت إلى هدفك. واصل الشرب إن شعرت بالعطش أو كنت في الخارج.",
    "Ramadan mode: see the plan below for when to drink.": "وضع رمضان: راجع الخطة أدناه لمواعيد الشرب.",
    "Start with a glass when you wake up.": "ابدأ بكوب عند الاستيقاظ.",
    "You're on track for this time of day.": "أنت على المسار الصحيح لهذا الوقت من اليوم."
  };
  var d = {
    "Water in the Heat": "الماء في الحر",
    "Tool · Health · Weather · Live": "أداة · صحة · طقس · مباشر",
    "Water in the heat.": "الماء في الحر.",
    "\"Eight glasses a day\" ignores the weather. This works out a daily water target from your weight, exercise, where you work and today's heat and humidity where you are, and shows every step of the sum. Tap a glass each time you drink. In Ramadan it spreads your water between iftar and suhoor.": "قاعدة «ثمانية أكواب يوميًا» تتجاهل الطقس. هذه الأداة تحسب هدفك اليومي من الماء بناءً على وزنك وتمارينك ومكان عملك وحرارة اليوم ورطوبته حيث أنت، وتعرض كل خطوة في الحساب. اضغط على كوب كلما شربت. وفي رمضان توزّع الماء بين الإفطار والسحور.",
    "Your target today": "هدفك اليوم",
    "Undo last": "تراجع عن الأخير",
    "Ramadan mode": "وضع رمضان",
    "Iftar (Maghrib)": "الإفطار (المغرب)",
    "Suhoor ends (Fajr)": "نهاية السحور (الفجر)",
    "Your body can only take in roughly 0.8 to 1 litre an hour, and drinking a lot at once mostly sends it straight to the bladder. Steady glasses through the evening work better than a big bottle at suhoor. Watery food counts too: soup, laban, watermelon and cucumber.": "لا يمتص جسمك أكثر من 0.8 إلى 1 لتر تقريبًا في الساعة، وشرب كمية كبيرة دفعة واحدة يذهب معظمه مباشرة إلى المثانة. الأكواب المنتظمة طوال المساء أفضل من زجاجة كبيرة عند السحور. والأطعمة الغنية بالماء تُحسب أيضًا: الشوربة واللبن والبطيخ والخيار.",
    "About you": "معلوماتك",
    "Weight (kg)": "الوزن (كغ)",
    "Exercise today (min)": "التمارين اليوم (دقيقة)",
    "Most of my day is": "أقضي معظم يومي",
    "Indoors with AC": "في مكان مكيّف",
    "Some time outside": "بعض الوقت في الخارج",
    "Working outdoors": "أعمل في الخارج",
    "Hours outdoors": "ساعات في الخارج",
    "Pregnancy or breastfeeding": "الحمل أو الرضاعة",
    "Neither": "لا هذا ولا ذاك",
    "Pregnant": "حامل",
    "Breastfeeding": "مرضعة",
    "I exercise outdoors": "أتمرن في الخارج",
    "Today's weather": "طقس اليوم",
    "📍 My location": "📍 موقعي",
    "Max temperature (°C)": "الحرارة العظمى (°C)",
    "Humidity then (%)": "الرطوبة حينها (%)",
    "How the target is worked out": "كيف يُحسب الهدف",
    "An estimate, not medical advice. If you have kidney or heart conditions, take water tablets, or have been told to limit fluids, follow your doctor's advice instead. Dizziness, confusion or no sweating in the heat is an emergency: get cool and call 998.": "هذا تقدير وليس نصيحة طبية. إذا كنت تعاني من أمراض الكلى أو القلب، أو تتناول مدرات البول، أو طُلب منك تقليل السوائل، فاتبع نصيحة طبيبك. الدوار أو التشوش أو انعدام التعرق في الحر حالة طارئة: ابتعد عن الحر واتصل بالرقم 998.",
    "Urine colour check": "فحص لون البول",
    "1–3: well hydrated": "1–3: ترطيب جيد",
    "4–5: drink a glass soon": "4–5: اشرب كوبًا قريبًا",
    "6–8: drink now": "6–8: اشرب الآن",
    "Colour is a quick, free hydration check that sports doctors use. Pale straw is the goal. Vitamin B supplements can turn urine bright yellow whatever you drink, and some foods and medicines change it too. Dark brown or red urine that doesn't clear with water needs a doctor.": "اللون فحص سريع ومجاني للترطيب يستخدمه أطباء الرياضة. الهدف لون القش الفاتح. مكملات فيتامين B قد تجعل البول أصفر زاهيًا مهما شربت، وبعض الأطعمة والأدوية تغيّره أيضًا. البول البني الداكن أو الأحمر الذي لا يصفو بشرب الماء يستدعي مراجعة الطبيب.",
    "Why the weather matters": "لماذا يهم الطقس",
    "Indoors in air conditioning you lose about the same water as anywhere else. The heat counts when you are out in it. Sweat rates in the Gulf summer can reach a litre an hour during physical work, so outdoor hours change the target far more than the thermometer alone. Humidity matters because sweat that can't evaporate doesn't cool you, so you keep sweating. That's why the sum uses the heat index (temperature plus humidity), not just the temperature.": "في المكان المكيّف تفقد من الماء ما تفقده في أي مكان آخر تقريبًا. الحر يُحسب حين تكون في الخارج. قد يصل معدل التعرق في صيف الخليج إلى لتر في الساعة أثناء العمل البدني، لذا تغيّر ساعات العمل في الخارج الهدف أكثر بكثير من قراءة الحرارة وحدها. والرطوبة مهمة لأن العرق الذي لا يتبخر لا يبرّدك فتستمر في التعرق. ولهذا يعتمد الحساب على مؤشر الحرارة (الحرارة مع الرطوبة) لا على الحرارة وحدها.",
    "The starting point is about 30 ml per kilo of body weight from drinks, close to the European Food Safety Authority's adequate intake once food water is taken out. Pregnancy adds about 300 ml and breastfeeding about 700 ml. Exercise adds about 12 ml a minute, more in the heat. Outdoor work follows the usual occupational advice of about a cup every 15 to 20 minutes in high heat, capped well below the 1.4 litres an hour where drinking too much becomes a risk. Weather is from Open-Meteo.": "نقطة البداية نحو 30 مل لكل كيلوغرام من وزن الجسم من المشروبات، وهو قريب من الكمية الكافية التي توصي بها الهيئة الأوروبية لسلامة الأغذية بعد استبعاد الماء الموجود في الطعام. يضيف الحمل نحو 300 مل والرضاعة نحو 700 مل. وتضيف التمارين نحو 12 مل في الدقيقة، وأكثر في الحر. ويتبع العمل في الخارج النصيحة المهنية المعتادة بنحو كوب كل 15 إلى 20 دقيقة في الحر الشديد، مع حد أعلى أقل بكثير من 1.4 لتر في الساعة حيث يصبح الإفراط في الشرب خطرًا. بيانات الطقس من Open-Meteo.",
    "Starting point": "نقطة البداية",
    "Outdoor work": "العمل في الخارج",
    "Time outside": "الوقت في الخارج",
    "Getting about (car park, school run)": "التنقلات (المواقف، توصيل المدرسة)",
    "Heat": "الحر",
    "Exercise": "التمارين",
    "Pregnancy": "الحمل",
    "Note": "ملاحظة",
    "Pick a city or type today's max temperature and humidity": "اختر مدينة أو اكتب الحرارة العظمى والرطوبة لليوم",
    "EFSA adds about 300 ml": "تضيف EFSA نحو 300 مل",
    "EFSA adds about 600–700 ml": "تضيف EFSA نحو 600–700 مل",
    "This is a lot. Spread it across the shift, eat salty food or drink laban too, and stay under about 1.4 L an hour": "هذه كمية كبيرة. وزّعها على مدار المناوبة، وتناول طعامًا مالحًا أو اشرب اللبن أيضًا، ولا تتجاوز نحو 1.4 لتر في الساعة",
    "Daily target from drinks": "الهدف اليومي من المشروبات",
    "Small cup": "كوب صغير", "Glass": "كوب", "Can": "علبة", "Bottle": "زجاجة", "Big bottle": "زجاجة كبيرة",
    "· turns on by itself during Ramadan": "· يعمل تلقائيًا في رمضان",
    "Iftar: water and dates, before the meal": "الإفطار: ماء وتمر قبل الوجبة",
    "Suhoor: with food, not all at once": "السحور: مع الطعام، لا دفعة واحدة",
    "After the meal": "بعد الوجبة",
    "Before sleep / Taraweeh break": "قبل النوم / استراحة التراويح",
    "Steady glass": "كوب منتظم",
    "Well hydrated": "ترطيب جيد", "Drink a glass soon": "اشرب كوبًا قريبًا", "Drink now": "اشرب الآن",
    "Using the numbers you typed.": "نستخدم الأرقام التي كتبتها.",
    "Couldn't reach the weather service. Type today's max temperature and humidity instead.": "تعذّر الوصول إلى خدمة الطقس. اكتب الحرارة العظمى والرطوبة لليوم بدلًا من ذلك.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "نطلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  };
  for (var k in PACE) d[k] = PACE[k];
  LabAr.add(d, [
    [/^(\d+(?:\.\d+)?) L$/, '$1 لتر'],
    [/^\+?(\d+) ml$/, function (m) { return L(m); }],
    [/^of (\d+(?:\.\d+)?) L$/, 'من $1 لتر'],
    [/^of (\d+(?:\.\d+)?) L · (\d+)%$/, 'من $1 لتر · \u2066$2%\u2069'],
    [/^About (\d+) glasses of 250 ml$/, function (m, n) { return 'نحو ' + cups(n) + ' سعة 250 مل'; }],
    [/^30 ml × (\d+) kg, from drinks$/, '30 مل × $1 كغ، من المشروبات'],
    [/^heat index (-?\d+)°C \((-?\d+)°C, (\d+)%\), ([\d.]+) h × (\d+) ml\/h$/, function (m, a, b, c, h, r) { return 'مؤشر الحرارة ' + I(a + '°C') + ' (' + I(b + '°C') + '، ' + I(c + '%') + ')، ' + h + ' ساعة × ' + r + ' مل/ساعة'; }],
    [/^(\d+) min × (\d+) ml( \(outdoors in heat\))?$/, function (m, a, b, c) { return a + ' دقيقة × ' + b + ' مل' + (c ? ' (في الخارج في الحر)' : ''); }],
    [/^(.*?) ?(\d+) glasses to go\.$/, function (m, msg, n) {
      var head = PACE[msg];
      if (!head) { var x = msg.match(/^About (\d+) ml behind for this time of day\. A glass now would help\.$/); head = x ? 'متأخر بنحو ' + x[1] + ' مل عن المعدل لهذا الوقت من اليوم. كوب الآن سيفيدك.' : msg; }
      return head + ' ' + (n === '0' ? 'لم يتبقَّ شيء.' : 'المتبقي ' + cups(n) + '.');
    }],
    [/^· it's Ramadan, day (\d+) \(Umm al-Qura calendar\)$/, '· نحن في رمضان، اليوم $1 (تقويم أم القرى)'],
    [/^(Using your times\. )?Worked out for your spot: Maghrib about (\d+):(\d+) (am|pm), Fajr about (\d+):(\d+) (am|pm) \(sun 18\.2° below the horizon, as the UAE uses\)\. Check your local mosque timetable, it can differ by a few minutes\.$/, function (m, u, h1, m1, a1, h2, m2, a2) {
      return (u ? 'نستخدم أوقاتك. ' : '') + 'محسوب لموقعك: المغرب نحو ' + t12(h1, m1, a1) + '، والفجر نحو ' + t12(h2, m2, a2) + ' (الشمس 18.2° تحت الأفق، كما هو معتمد في الإمارات). راجع تقويم المسجد القريب منك، فقد يختلف ببضع دقائق.';
    }],
    [/^([\d.]+) h window · ([\d.]+) L total$/, 'نافذة $1 ساعة · المجموع $2 لتر'],
    [/^Your target is more than you can comfortably drink in the hours between iftar and suhoor \(([\d.]+) L planned\)\. If you work outdoors while fasting, plan cooler shifts with your employer and ask a doctor whether fasting is safe for you\.$/, 'هدفك أكبر مما يمكنك شربه براحة في الساعات بين الإفطار والسحور (المخطط $1 لتر). إذا كنت تعمل في الخارج وأنت صائم، فرتّب مع جهة عملك مناوبات في أوقات أبرد، واسأل الطبيب إن كان الصيام آمنًا لك.'],
    [/^Fetching today's weather for (.+)…$/, function (m, n) { return 'نجلب طقس اليوم في ' + T(n) + '…'; }],
    [/^(.+): the most stressful hour today is around (\d\d:\d\d) \(heat index (-?\d+)°C\)\. Edit the numbers if you like\.$/, function (m, n, h, x) { return T(n) + ': أشد ساعات اليوم إجهادًا نحو ' + h + ' (مؤشر الحرارة ' + I(x + '°C') + '). عدّل الأرقام إن شئت.'; }],
    [/^.*[\u0600-\u06FF\u2066-\u2069].*$/, '$&']
  ]);
})();
