(function () {
  var GM = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر' };
  var WD = { Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد' };
  function g(s) { return s.replace(/^(\w+), /, function (m, d) { return (WD[d] || d) + '، '; }).replace(/\b([A-Z][a-z]+)\b/g, function (m) { return GM[m] || m; }); }
  var SAT = { 'False colour (Terra)': 'ألوان كاذبة (Terra)' };
  function sat(s) { return SAT[s] || s; }
  var WHEN = { 'about 1:30 pm': 'نحو 1:30 ظهرًا', 'early afternoon': 'بعد الظهر مبكرًا', 'mid-morning': 'منتصف الصباح' };
  LabAr.add({
    "UAE From Space Today": "الإمارات من الفضاء اليوم",
    "Space · Earth · Live": "الفضاء · الأرض · مباشر",
    "The UAE from space, today.": "الإمارات من الفضاء، اليوم.",
    "Four NASA and NOAA satellites photograph the whole country every day, and the pictures are online within a few hours. Look for dust blowing in from the north-west, fog over the coast on winter mornings, and green or red patches in the sea. Pick a satellite and a day, then zoom in.": "تصوّر أربعة أقمار صناعية تابعة لـ NASA وNOAA الدولة كلها يوميًا، وتُنشر الصور خلال ساعات قليلة. ابحث عن الغبار القادم من الشمال الغربي، والضباب فوق الساحل في صباحات الشتاء، والبقع الخضراء أو الحمراء في البحر. اختر قمرًا صناعيًا ويومًا، ثم كبّر الصورة.",
    "Previous day": "اليوم السابق",
    "Next day": "اليوم التالي",
    "◀ Day before": "▶ اليوم السابق",
    "Day after ▶": "اليوم التالي ◀",
    "Latest": "الأحدث",
    "Zoom in": "تكبير",
    "Zoom out": "تصغير",
    "Satellite": "القمر الصناعي",
    "Place names": "أسماء الأماكن",
    "Satellite image map": "خريطة صور الأقمار الصناعية",
    "False colour (Terra)": "ألوان كاذبة (Terra)",
    "What to look for · tap to zoom there": "ما الذي تبحث عنه · اضغط للتكبير على المكان",
    "About the pictures": "عن الصور",
    "<b>Morning or afternoon.</b> Terra passes over the UAE in the morning, and Aqua, Suomi NPP and NOAA-20 in the early afternoon. Morning is better for fog, afternoon for dust that builds up as the ground heats.": "<b>صباحًا أم بعد الظهر.</b> يمر Terra فوق الإمارات صباحًا، ويمر Aqua وSuomi NPP وNOAA-20 بعد الظهر مبكرًا. الصباح أفضل لرصد الضباب، وبعد الظهر أفضل للغبار الذي يزداد مع سخونة الأرض.",
    "<b>Why there are stripes or black wedges.</b> Each satellite sees a strip about 2,300 to 3,000 km wide. Some days the UAE falls at the edge of a strip, where the view is stretched and hazy, or in a gap between two passes. Try another satellite for the same day.": "<b>لماذا تظهر خطوط أو مثلثات سوداء؟</b> يرى كل قمر صناعي شريطًا بعرض 2,300 إلى 3,000 km تقريبًا. في بعض الأيام تقع الإمارات على طرف الشريط حيث تكون الصورة ممطوطة وضبابية، أو في فجوة بين مرورين. جرّب قمرًا آخر لليوم نفسه.",
    "<b>The \"false colour\" view</b> uses infrared light that people can't see. Cloud made of ice turns bright cyan, vegetation turns green, bare desert is pinkish brown and dust stays a soft beige. It helps tell high cloud from a dust plume when both look white in true colour.": "<b>عرض \"الألوان الكاذبة\"</b> يستخدم الأشعة تحت الحمراء التي لا تراها العين. تتحول السحب الجليدية إلى سماوي ساطع، والنباتات إلى أخضر، والصحراء الجرداء إلى بني مائل للوردي، ويبقى الغبار بيجًا فاتحًا. يساعد ذلك على التمييز بين السحب العالية وأعمدة الغبار حين يبدو كلاهما أبيض في الألوان الطبيعية.",
    "Imagery from NASA GIBS and Worldview: MODIS on Terra and Aqua, VIIRS on Suomi NPP and NOAA-20. Each pixel is about 250 to 500 metres, so you'll see islands and cities, not buildings. Place names © OpenStreetMap contributors, © CARTO.": "الصور من NASA GIBS وWorldview: جهاز MODIS على Terra وAqua، وجهاز VIIRS على Suomi NPP وNOAA-20. تغطي كل بكسل نحو 250 إلى 500 متر، لذا سترى الجزر والمدن لا المباني. أسماء الأماكن © المساهمون في OpenStreetMap، © CARTO.",
    "Dust storms": "العواصف الترابية",
    "A soft beige or brown veil that hides the ground and spills out over the blue sea. Shamal winds push it from Iraq and Kuwait down the Gulf, so look to the north-west first. Summer is the main season.": "غلالة بيج أو بنية ناعمة تحجب الأرض وتمتد فوق البحر الأزرق. تدفعها رياح الشمال من العراق والكويت جنوبًا عبر الخليج، فابدأ بالنظر إلى الشمال الغربي. موسمها الرئيسي الصيف.",
    "→ North-west Gulf": "← شمال غرب الخليج",
    "Fog": "الضباب",
    "Smooth, flat, bright white that hugs the coast and low ground, with sharp edges that follow the shoreline. It shows up best on the morning (Terra) picture between November and February, and is often gone by the afternoon pass.": "أبيض ساطع أملس ومستوٍ يلتصق بالساحل والأراضي المنخفضة، بحواف حادة تتبع خط الشاطئ. يظهر بوضوح في صورة الصباح (Terra) بين نوفمبر وفبراير، وغالبًا ما يختفي عند مرور ما بعد الظهر.",
    "→ Abu Dhabi coast": "← ساحل أبوظبي",
    "Cloud": "السحب",
    "Lumpy, textured white that casts shadows. Summer storm clouds bubble up over the Hajar mountains on the east side in the afternoon. Thin high cloud looks like brush strokes you can see the ground through.": "أبيض متكتل وذو ملمس يُلقي ظلالًا. تتكوّن سحب العواصف الصيفية فوق جبال الحجر في الشرق بعد الظهر. وتبدو السحب العالية الرقيقة كضربات فرشاة ترى الأرض من خلالها.",
    "→ Hajar mountains": "← جبال الحجر",
    "Algal blooms": "ازدهار الطحالب",
    "Swirls of green, brown or rusty red in the sea, often off the east coast in the Gulf of Oman in winter. A large \"red tide\" bloom here in 2008 to 2009 closed beaches and forced some desalination plants to shut down for a while.": "دوامات خضراء أو بنية أو حمراء صدئة في البحر، غالبًا قبالة الساحل الشرقي في خليج عُمان شتاءً. أدى \"مدّ أحمر\" كبير هنا بين 2008 و2009 إلى إغلاق الشواطئ وتوقف بعض محطات التحلية مؤقتًا.",
    "→ Gulf of Oman": "← خليج عُمان",
    "Bright turquoise sea": "بحر فيروزي ساطع",
    "Not a bloom. The southern Gulf is very shallow, so sunlight reflects off white sand and coral near the surface. The lighter the blue, the shallower the water.": "ليس ازدهارًا للطحالب. جنوب الخليج ضحل جدًا، فينعكس ضوء الشمس عن الرمل الأبيض والمرجان القريب من السطح. كلما كان الأزرق أفتح، كان الماء أقل عمقًا.",
    "→ Western islands": "← الجزر الغربية",
    "Sand and sabkha": "الرمال والسبخات",
    "Red-orange dunes of the Rub' al Khali to the south, and pale white salt flats (sabkha) along the western coast. The green dots in Liwa and Al Ain are farms and date palms.": "كثبان الربع الخالي البرتقالية المحمرّة في الجنوب، والمسطحات الملحية البيضاء الباهتة (السبخات) على الساحل الغربي. النقاط الخضراء في ليوا والعين مزارع ونخيل.",
    "→ Liwa": "← ليوا"
  }, [
    [/^Passes (.+)$/, function (m, w) { return 'يمر ' + (WHEN[w] || w); }],
    [/^Loading (.+) for (\d{4}-\d\d-\d\d)…$/, function (m, s, d) { return 'جارٍ تحميل صورة ' + sat(s) + ' ليوم ' + d + '…'; }],
    [/^(.+), (\w+day, \d+ \w+ \d{4}), passing (.+) UAE time\.$/, function (m, s, d, w) { return sat(s) + '، ' + g(d) + '، يمر ' + (WHEN[w] || w) + ' بتوقيت الإمارات.'; }],
    [/^No picture from (.+) for (\d{4}-\d\d-\d\d)\. (Pictures appear a few hours after the satellite passes\.|The satellite may have been off or in maintenance that day\.) Try the day before or another satellite\.$/, function (m, s, d, why) {
      return 'لا توجد صورة من ' + sat(s) + ' ليوم ' + d + '. ' + (/^Pictures/.test(why) ? 'تظهر الصور بعد ساعات قليلة من مرور القمر الصناعي.' : 'ربما كان القمر الصناعي متوقفًا أو في صيانة ذلك اليوم.') + ' جرّب اليوم السابق أو قمرًا آخر.'; }]
  ]);
})();
