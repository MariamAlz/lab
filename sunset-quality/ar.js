(function () {
  var SP = {
    'Umm Suqeim beach, Dubai': 'شاطئ أم سقيم، دبي',
    'Kite Beach, Dubai': 'كايت بيتش، دبي',
    'JBR and Dubai Marina beach': 'شاطئ جي بي آر ودبي مارينا',
    'Abu Dhabi Corniche, west end': 'كورنيش أبوظبي، الطرف الغربي',
    'Hudayriyat Island west beach': 'الشاطئ الغربي لجزيرة الحديريات',
    'Saadiyat Beach, Abu Dhabi': 'شاطئ السعديات، أبوظبي',
    'Al Khan beach, Sharjah': 'شاطئ الخان، الشارقة',
    'Ajman Corniche': 'كورنيش عجمان',
    'Umm Al Quwain corniche': 'كورنيش أم القيوين',
    'Al Marjan Island, Ras Al Khaimah': 'جزيرة المرجان، رأس الخيمة'
  };
  var NOTE = {
    'The Burj Al Arab sits right in front of the winter sunset.': 'يقف برج العرب أمام غروب الشتاء مباشرة.',
    'Long open beach, easy parking.': 'شاطئ طويل مفتوح ومواقف سهلة.',
    'Ain Dubai frames the sun in summer.': 'عين دبي تحيط بالشمس في الصيف.',
    'Breakwater and Marina Mall headland face open sea.': 'كاسر الأمواج ورأس مارينا مول يطلان على البحر المفتوح.',
    'Faces almost due west, good all year.': 'يطل غربًا تقريبًا، ومناسب طوال العام.',
    'Natural dunes, wide horizon.': 'كثبان طبيعية وأفق واسع.',
    'Look back along the Dubai skyline in winter.': 'في الشتاء تنظر على امتداد أفق دبي.',
    'Busy promenade with an open north-west view.': 'ممشى مزدحم بإطلالة مفتوحة نحو الشمال الغربي.',
    'Quiet, low buildings, mangroves behind.': 'هادئ ومبانيه منخفضة، وخلفه أشجار القرم.',
    'The island tip juts out into open water.': 'طرف الجزيرة يمتد داخل البحر المفتوح.'
  };
  var DIR = { north: 'الشمال', 'north-east': 'الشمال الشرقي', east: 'الشرق', 'south-east': 'الجنوب الشرقي', south: 'الجنوب', 'south-west': 'الجنوب الغربي', west: 'الغرب', 'north-west': 'الشمال الغربي' };
  var WORD = { 'Could be spectacular': 'قد يكون مذهلًا', 'Worth a look': 'يستحق النظر', 'Ordinary': 'عادي', 'Probably dull': 'باهت على الأرجح' };
  var DAY = { tonight: 'الليلة', tomorrow: 'غدًا', Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد' };
  var d = {
    "Tonight's Sunset": "غروب الليلة",
    "Tool · Sky · Weather · Live": "أداة · السماء · الطقس · مباشر",
    "Tonight's sunset.": "غروب الليلة.",
    "Some evenings the whole sky turns pink and orange, others the sun just fades into grey. The difference is mostly cloud height, a clear gap on the western horizon, and how much dust is in the air. This scores tonight and the next three evenings from 0 to 100 and tells you when golden and blue hour start.": "في بعض الأمسيات تتلوّن السماء كلها بالوردي والبرتقالي، وفي أخرى تختفي الشمس في الرمادي. الفرق في الغالب يعود إلى ارتفاع الغيوم، وصفاء الأفق الغربي، وكمية الغبار في الهواء. تمنح الأداة الليلة والأمسيات الثلاث التالية درجة من 0 إلى 100، وتخبرك متى تبدأ الساعة الذهبية والساعة الزرقاء.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Preview of the sunset colours": "معاينة لألوان الغروب",
    "Why this score": "سبب هذه الدرجة",
    "West-facing spots over water": "أماكن تطل غربًا على الماء",
    "<b>Why clouds help, but only the right ones.</b> After the sun drops below your horizon, it still lights clouds kilometres above you from underneath. High and middle clouds (above about 2 km) catch that red light and glow. Low cloud near the western horizon does the opposite: it blocks the light before it reaches anything. That's why this checks the low cloud about 75 km out along the line to the sun, not just over your head.": "<b>لماذا تساعد الغيوم، لكن ليس كلها.</b> بعد أن تغيب الشمس عن أفقك، تظل تضيء الغيوم التي تعلوك بكيلومترات من أسفلها. الغيوم العالية والمتوسطة (فوق 2 كم تقريبًا) تلتقط ذلك الضوء الأحمر فتتوهج. أما الغيوم المنخفضة قرب الأفق الغربي فتفعل العكس: تحجب الضوء قبل أن يصل إلى أي شيء. لذلك تفحص الأداة الغيوم المنخفضة على بعد 75 كم تقريبًا باتجاه الشمس، وليس فوق رأسك فقط.",
    "<b>What's approximate.</b> The score is a rule of thumb built from forecast cloud layers, humidity, visibility and modelled dust (Open-Meteo and CAMS). It isn't a measurement, and forecasts of thin high cloud are often wrong by an hour or two. Sun times and directions are computed in your browser to within about a minute and half a degree. The open-water directions for each spot are rough. The east coast (Fujairah, Khor Fakkan) faces the sunrise instead.": "<b>ما هو تقريبي.</b> الدرجة قاعدة تقريبية مبنية على توقعات طبقات الغيوم والرطوبة ومدى الرؤية والغبار حسب النماذج (Open-Meteo وCAMS). ليست قياسًا فعليًا، وتوقعات الغيوم العالية الرقيقة كثيرًا ما تخطئ بساعة أو ساعتين. أوقات الشمس واتجاهاتها تُحسب في متصفحك بدقة دقيقة تقريبًا ونصف درجة. واتجاهات البحر المفتوح لكل مكان تقريبية. أما الساحل الشرقي (الفجيرة وخورفكان) فيطل على الشروق.",
    "Golden hour": "الساعة الذهبية",
    "Blue hour": "الساعة الزرقاء",
    "Sun sets towards": "تغرب الشمس نحو",
    "sets over water": "تغرب فوق الماء",
    "sets over land": "تغرب فوق اليابسة",
    "Score this spot": "قيّم هذا المكان",
    "Golden hour is when the sun is between 6° high and 4° below the horizon. Blue hour runs from 4° to 6° below. Times are for a flat sea horizon.": "الساعة الذهبية حين تكون الشمس بين 6° فوق الأفق و4° تحته، والساعة الزرقاء من 4° إلى 6° تحته. الأوقات محسوبة لأفق بحري مستوٍ.",
    "Clear sky above, so there's nothing up high to catch the colour. Expect a clean orange glow at the horizon only.": "السماء صافية فوقك، فلا شيء في الأعلى يلتقط الألوان. توقّع توهجًا برتقاليًا نقيًا عند الأفق فقط.",
    "The western horizon looks clear of low cloud.": "يبدو الأفق الغربي خاليًا من الغيوم المنخفضة.",
    "Clear horizon under high cloud: the sun can light the clouds from below after it sets.": "أفق صافٍ تحت غيوم عالية: يمكن للشمس أن تضيء الغيوم من أسفلها بعد الغروب.",
    "Very clean air. Colours will be clear but pale.": "هواء نقي جدًا. ستكون الألوان صافية لكن باهتة.",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مجددًا.",
    "No data": "لا توجد بيانات",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  };
  for (var k in SP) d[k] = SP[k];
  LabAr.add(d, [
    [/^Fetching cloud and dust forecasts for (.+)…$/, function (m, n) { return 'جارٍ جلب توقعات الغيوم والغبار لـ' + (SP[n] || LabAr.t(n)) + '…'; }],
    [/^(.+) · forecast from Open-Meteo(, dust unavailable right now)?(, western horizon check unavailable)?$/, function (m, n, a, b) { return (SP[n] || LabAr.t(n)) + ' · توقعات من Open-Meteo' + (a ? '، بيانات الغبار غير متاحة الآن' : '') + (b ? '، فحص الأفق الغربي غير متاح' : ''); }],
    [/^(Could be spectacular|Worth a look|Ordinary|Probably dull) · (\w+)$/, function (m, w, dd) { return WORD[w] + ' · ' + (DAY[dd] || dd); }],
    [/^(\d+)° ([a-z-]+)$/, function (m, a, dir) { return a + '° ' + (DIR[dir] || dir); }],
    [/^A little middle or high cloud \((\d+)%\)\. Some streaks may light up\.$/, 'قليل من الغيوم المتوسطة أو العالية ($1%). قد تتوهج بعض الخيوط.'],
    [/^Middle and high cloud at (\d+)%, the sweet spot\. There's plenty to light up and gaps for the light to get through\.$/, 'غيوم متوسطة وعالية بنسبة $1%، وهي النسبة المثالية: فيها ما يكفي ليتوهج، وفيها فجوات يعبر منها الضوء.'],
    [/^Thick middle and high cloud \((\d+)%\) may block the light\. Look for a gap low in the west\.$/, 'غيوم متوسطة وعالية كثيفة ($1%) قد تحجب الضوء. ابحث عن فجوة منخفضة في الغرب.'],
    [/^Low cloud on the western horizon \((\d+)% about 75 km out\) will likely block the sun before it sets\.$/, 'الغيوم المنخفضة في الأفق الغربي ($1% على بعد 75 كم تقريبًا) ستحجب الشمس قبل غروبها على الأرجح.'],
    [/^Some low cloud towards the west \((\d+)%\), which could hide the last few minutes\.$/, 'بعض الغيوم المنخفضة نحو الغرب ($1%)، وقد تخفي الدقائق الأخيرة.'],
    [/^A little dust and haze in the air \(AOD ([\d.]+)\), which deepens the reds and oranges\.$/, 'قليل من الغبار والضباب في الهواء (AOD $1)، ما يعمّق الأحمر والبرتقالي.'],
    [/^Quite hazy \(AOD ([\d.]+)\)\. The sun turns red early, but the sky may look washed out\.$/, 'الجو مغبرّ نسبيًا (AOD $1). تحمرّ الشمس مبكرًا، لكن قد تبدو السماء باهتة.'],
    [/^Heavy dust \(AOD ([\d.]+)\)\. The sun will likely fade into a brown haze before it reaches the horizon\.$/, 'غبار كثيف (AOD $1). ستختفي الشمس على الأرجح في ضباب بني قبل أن تبلغ الأفق.'],
    [/^Humid, hazy air( \(visibility (\d+) km\))? softens the colours\.$/, function (m, a, v) { return 'الهواء الرطب والضبابي' + (a ? ' (مدى الرؤية ' + v + ' كم)' : '') + ' يخفف الألوان.'; }],
    [/^(.+?) ?Open water roughly (\d+)° to (\d+)°\.$/, function (m, n, a, b) { return (NOTE[n] || n) + ' البحر مفتوح تقريبًا من ' + a + '° إلى ' + b + '°.'; }]
  ]);
})();
