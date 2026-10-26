(function () {
  var BAND = { 'Blue': 'أزرق', 'Green': 'أخضر', 'Red': 'أحمر', 'Near infrared': 'تحت الأحمر القريب', 'Shortwave IR 1': 'تحت الأحمر قصير الموجة 1', 'Shortwave IR 2': 'تحت الأحمر قصير الموجة 2' };
  var HINT = {
    'Try the Infrared view: plants glow red.': 'جرّب عرض «تحت الأحمر»: النباتات تتوهج بالأحمر.',
    'In the Land and water view, water is black.': 'في عرض «اليابسة والماء» يظهر الماء أسود.',
    'In the Urban view, the city looks purple and grey.': 'في عرض «العمران» تبدو المدينة بنفسجية ورمادية.',
    'Sand is bright in every band, with no plant or water signal.': 'الرمل ساطع في كل النطاقات، بلا أي إشارة لنبات أو ماء.'
  };
  var KIND = {
    'water: it absorbs infrared, so the bars drop to nothing on the right.': 'ماء: يمتص الأشعة تحت الحمراء، لذا تهبط الأعمدة إلى الصفر على اليمين.',
    'plants: low red (chlorophyll eats it) and a big jump in near infrared.': 'نباتات: أحمر منخفض (يمتصه الكلوروفيل) وقفزة كبيرة في تحت الأحمر القريب.',
    'sand or bare ground: bright and rising toward the infrared.': 'رمل أو أرض جرداء: ساطعة وتزداد نحو تحت الأحمر.',
    'mixed or built-up: fairly flat, without the plant or water pattern.': 'منطقة مختلطة أو عمرانية: منحنى مسطح تقريبًا، بلا نمط النبات أو الماء.'
  };
  var d = {
    "Abu Dhabi from Space": "أبوظبي من الفضاء",
    "Experiment · Earth observation": "تجربة · رصد الأرض",
    "Abu Dhabi from space.": "أبوظبي من الفضاء.",
    "A real Sentinel-2 image of Abu Dhabi, split into six bands of light, including infrared your eyes can't see. Mix them the way remote sensing analysts do, and hidden things jump out.": "صورة حقيقية لأبوظبي من القمر Sentinel-2، مقسّمة إلى ستة نطاقات من الضوء، منها الأشعة تحت الحمراء التي لا تراها عيناك. امزجها كما يفعل محللو الاستشعار عن بُعد، وستظهر لك أشياء خفية.",
    "Satellite image of Abu Dhabi in the selected band combination": "صورة فضائية لأبوظبي بتركيبة النطاقات المختارة",
    "Loading the scene…": "جارٍ تحميل المشهد…",
    "Band combinations": "تركيبات النطاقات",
    "Red shows": "الأحمر يعرض",
    "Green shows": "الأخضر يعرض",
    "Blue shows": "الأزرق يعرض",
    "Spectral signature · tap the image": "البصمة الطيفية · اضغط على الصورة",
    "Tap anywhere to see how much of each kind of light that spot reflects.": "اضغط على أي مكان لترى كم تعكس تلك البقعة من كل نوع من الضوء.",
    "This is the kind of work I did in the UAE Space Agency's Space Applications programme: geospatial analytics and remote sensing, turning bands of light into answers about the ground.": "هذا النوع من العمل الذي قمت به في برنامج التطبيقات الفضائية لدى وكالة الإمارات للفضاء: التحليلات الجغرافية المكانية والاستشعار عن بُعد، وتحويل نطاقات الضوء إلى إجابات عن الأرض.",
    "True colour": "الألوان الطبيعية",
    "Infrared": "تحت الأحمر",
    "Urban": "العمران",
    "Land and water": "اليابسة والماء",
    "Vegetation index": "مؤشر الغطاء النباتي",
    "Water index": "مؤشر المياه",
    "<b>What your eyes would see</b> from orbit: turquoise shallows, pale sand, grey city. The mangroves are there, but hard to tell from the shallow water.": "<b>ما ستراه عيناك</b> من المدار: مياه ضحلة فيروزية، ورمال فاتحة، ومدينة رمادية. أشجار القرم موجودة، لكن يصعب تمييزها عن المياه الضحلة.",
    "<b>Plants glow red.</b> Healthy leaves reflect near infrared strongly, so the mangroves, parks and golf courses light up. Water, which absorbs infrared, turns almost black.": "<b>النباتات تتوهج بالأحمر.</b> الأوراق السليمة تعكس الأشعة تحت الحمراء القريبة بقوة، فتضيء أشجار القرم والحدائق وملاعب الغولف. أما الماء، الذي يمتص الأشعة تحت الحمراء، فيصبح أسود تقريبًا.",
    "<b>Built-up areas stand out</b> in shortwave infrared. Concrete and asphalt look purple and grey, sand looks warm, and vegetation turns green.": "<b>المناطق العمرانية تبرز</b> في الأشعة تحت الحمراء قصيرة الموجة. يبدو الخرسانة والأسفلت بنفسجيين ورماديين، والرمل دافئ اللون، والنباتات خضراء.",
    "<b>The coastline becomes razor sharp</b>, because water absorbs infrared almost completely. Good for mapping shorelines and new reclaimed land.": "<b>يصبح خط الساحل حادًا جدًا</b>، لأن الماء يمتص الأشعة تحت الحمراء بالكامل تقريبًا. مفيد لرسم خرائط السواحل والأراضي المستصلحة الجديدة.",
    "<b>NDVI</b> = (NIR − Red) / (NIR + Red). Green means plants, and the stronger the green, the healthier. It is how scientists track the mangroves over time.": "<b>NDVI</b> <span dir=\"ltr\">= (NIR − Red) / (NIR + Red)</span>. الأخضر يعني نباتات، وكلما اشتد الأخضر كانت أكثر صحة. هكذا يتابع العلماء أشجار القرم عبر الزمن.",
    "<b>NDWI</b> = (Green − NIR) / (Green + NIR). Blue means water. It separates sea, lagoons and wet sand from dry land.": "<b>NDWI</b> <span dir=\"ltr\">= (Green − NIR) / (Green + NIR)</span>. الأزرق يعني ماء. يفصل البحر والبحيرات الساحلية والرمل الرطب عن اليابسة.",
    "<b>Your own mix.</b> Try putting near infrared in different channels and see what jumps out.": "<b>مزيجك الخاص.</b> جرّب وضع تحت الأحمر القريب في قنوات مختلفة وانظر ماذا يبرز.",
    "Tap a mangrove or a park.": "اضغط على شجرة قرم أو حديقة.",
    "Tap the open sea.": "اضغط على البحر المفتوح.",
    "Tap somewhere built-up: roads or buildings.": "اضغط على منطقة عمرانية: طرق أو مبانٍ.",
    "Tap bare sand.": "اضغط على رمل مكشوف.",
    "All four found.": "وجدتها كلها.",
    "You read the ground from its light alone. That’s remote sensing.": "قرأت الأرض من ضوئها وحده. هذا هو الاستشعار عن بُعد.",
    "Yes!": "أحسنت!",
    "Yes! Next one.": "أحسنت! إلى التالي.",
    "The satellite scene could not be loaded.": "تعذّر تحميل المشهد الفضائي.",
    "NIR": "NIR", "SWIR1": "SWIR1", "SWIR2": "SWIR2",
    "NDVI": "NDVI", "NDWI": "NDWI", "= (NIR − Red) / (NIR + Red)": "= (NIR − Red) / (NIR + Red)", "= (Green − NIR) / (Green + NIR)": "= (Green − NIR) / (Green + NIR)",
    // bold fragments of the descriptions (only seen on nodes the watcher below has already replaced)
    "What your eyes would see": "ما ستراه عيناك", "Plants glow red.": "النباتات تتوهج بالأحمر.", "Built-up areas stand out": "المناطق العمرانية تبرز", "The coastline becomes razor sharp": "يصبح خط الساحل حادًا جدًا", "Your own mix.": "مزيجك الخاص."
  };
  for (var k in BAND) d[k] = BAND[k];
  for (k in HINT) d[k] = HINT[k];
  LabAr.add(d, [
    [/^(Blue|Green|Red|Near infrared|Shortwave IR 1|Shortwave IR 2) \((\d+) nm\)$/, function (m, b, n) { return BAND[b] + ' (' + n + ' nm)'; }],
    [/^Challenge (\d+) of (\d+)$/, 'التحدي $1 من $2'],
    [/^Not quite\. (.+)$/, function (m, h) { return 'ليس تمامًا. ' + (HINT[h] || h); }],
    [/^This looks like (.+)$/, function (m, k) { return KIND[k] ? 'يبدو هذا ' + KIND[k] : m; }],
    [/^Contains modified Copernicus Sentinel-2 data, (.+)\. Each pixel is 25 m across\.$/, 'تتضمن بيانات معدّلة من Copernicus Sentinel-2، بتاريخ \u2066$1\u2069. عرض كل بكسل 25 مترًا.'],
    [/^.*[؀-ۿ⁦-⁩].*$/, '$&']
  ]);
  // #desc is rewritten with innerHTML; the engine only matches whole-element keys on elements it walks,
  // not on an element whose children were replaced, so swap the description here.
  var HT = {};
  for (var key in d) if (/</.test(key)) HT[key.replace(/\s+/g, ' ').trim()] = d[key];
  function watch() {
    var el = document.getElementById('desc'); if (!el) return;
    var f = function () { var h = el.innerHTML.replace(/\s+/g, ' ').trim(); if (HT[h] != null) el.innerHTML = HT[h]; };
    f(); new MutationObserver(f).observe(el, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
