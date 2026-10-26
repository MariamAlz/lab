/* keep "23°C"-style values left-to-right inside Arabic text */
var LabArDeg = function (d, p) {
  function fx(s) { return typeof s === 'string' ? s.replace(/\u2066[^\u2069]*\u2069|(?:[-\u2212]?(?:\d+(?:\.\d+)?|\$\d)(?:\u2013[-\u2212]?\d+)?)\s?\u00b0[CFNESW]?/g, function (m) { return m.charAt(0) === '\u2066' ? m : '\u2066' + m + '\u2069'; }) : s; }
  for (var k in d) d[k] = fx(d[k]);
  LabAr.add(d, (p || []).map(function (x) { var r = x[1]; return [x[0], typeof r === 'function' ? function () { return fx(r.apply(null, arguments)); } : fx(r)]; }));
};
(function () {
  var C = { N: 'ش', E: 'ق', S: 'ج', W: 'غ' };
  var BT = { 'a building': 'مبنى', 'apartments': 'مبنى سكني', 'residential': 'مبنى سكني', 'house': 'منزل', 'villa': 'فيلا', 'detached': 'منزل مستقل', 'commercial': 'مبنى تجاري', 'retail': 'مبنى تجاري', 'office': 'مبنى مكاتب', 'hotel': 'فندق', 'school': 'مدرسة', 'mosque': 'مسجد', 'hospital': 'مستشفى', 'garage': 'مرآب', 'garages': 'مرآب', 'parking': 'موقف سيارات', 'industrial': 'مبنى صناعي', 'warehouse': 'مستودع', 'construction': 'مبنى قيد الإنشاء', 'roof': 'سقيفة', 'mall': 'مركز تسوق' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  function bn(n) { return BT[n] || n; }
  function src(s) {
    var m;
    if (s === 'height tag') return 'وسم الارتفاع';
    if ((m = s.match(/^(\d+(?:\.\d+)?) floors tagged$/))) return m[1] + ' طوابق موسومة';
    if ((m = s.match(/^no height in OSM, guessed (\d+) floors$/))) return 'لا ارتفاع في OSM، تقدير ' + m[1] + ' طوابق';
    return s;
  }
  function dist(d) { return d.replace(/ km$/, ' كم').replace(/ m$/, ' م'); }
  var dict = {
    "Rental View Checker": "فاحص إطلالة الشقة",
    "Tool · Home · Maps · UAE": "أداة · السكن · الخرائط · الإمارات",
    "Rental view checker.": "فاحص إطلالة الشقة.",
    "The listing says \"sea view\". Before you sign, tap the building on the map and pick the floor. This looks out in every direction from that height, using the footprints and heights of the buildings around it. It shows which way you'll face a wall, where you'll see the sea or water, and whether the sunset is in view.": "الإعلان يقول «إطلالة بحرية». قبل أن توقّع، اضغط على المبنى في الخريطة واختر الطابق. تنظر هذه الأداة في كل الاتجاهات من ذلك الارتفاع، معتمدة على مساحات المباني المحيطة وارتفاعاتها. وتوضح في أي اتجاه ستواجه جدارًا، وأين سترى البحر أو الماء، وهل الغروب ظاهر.",
    "<b>Rough guide only.</b> OpenStreetMap height data is incomplete. Many buildings have no height or floor count, so they get a default of 4 floors, and new towers may be missing entirely. Visit at the time of day you care about before you commit.": "<b>دليل تقريبي فقط.</b> بيانات الارتفاع في OpenStreetMap غير مكتملة. كثير من المباني بلا ارتفاع أو عدد طوابق، فتُعطى افتراضيًا 4 طوابق، وقد تكون الأبراج الجديدة غائبة تمامًا. زر المكان في الوقت الذي يهمك من اليوم قبل أن تلتزم.",
    "Dubai Marina": "دبي مارينا", "Downtown": "وسط مدينة دبي", "Yas": "ياس", "Al Reem": "الريم", "Al Majaz": "المجاز",
    "Map. Tap a building.": "خريطة. اضغط على مبنى.",
    "Tap the building you're thinking of renting in.": "اضغط على المبنى الذي تفكر في الاستئجار فيه.",
    "Floor (0 is ground)": "الطابق (0 هو الأرضي)",
    "Height per floor (m)": "ارتفاع الطابق (م)",
    "The flat's windows face": "اتجاه نوافذ الشقة",
    "All sides": "كل الجهات", "North": "الشمال", "Northeast": "الشمال الشرقي", "East": "الشرق", "Southeast": "الجنوب الشرقي", "South": "الجنوب", "Southwest": "الجنوب الغربي", "West": "الغرب", "Northwest": "الشمال الغربي",
    "of the view open": "من الإطلالة مفتوح", "sea or water": "بحر أو ماء", "sunset arc open": "من قوس الغروب مفتوح",
    "Polar view diagram": "مخطط الإطلالة الدائري",
    "You are at the centre. A red wedge's length is the distance to the first taller building; the outer ring is 700 m.": "أنت في المركز. طول القطاع الأحمر هو المسافة إلى أول مبنى أعلى منك، والدائرة الخارجية على بعد 700 م.",
    "Blocked": "محجوب", "Open (no taller building within 700 m)": "مفتوح (لا مبنى أعلى ضمن 700 م)", "Sea": "بحر", "Lake, creek or marina": "بحيرة أو خور أو مرسى", "Sunset range over the year": "نطاق الغروب على مدار السنة",
    "What you'd see, direction by direction": "ما ستراه، اتجاهًا باتجاه",
    "Pick a building first.": "اختر مبنى أولًا.",
    "Sunset from this flat": "الغروب من هذه الشقة",
    "From the chosen height, a line is traced every 2° around the compass, 180 lines in all. Each line checks every building edge it crosses. A building blocks the view if its roof is above your eye level. Sea counts as visible if the line reaches the coastline before anything taller than you. In the UAE the sun sets in the west-southwest in December (around 243°) and the west-northwest in June (around 297°).": "من الارتفاع المختار يُرسم خط كل 2° حول البوصلة، أي 180 خطًا. ويفحص كل خط حواف المباني التي يعبرها. ويحجب المبنى الإطلالة إن كان سطحه أعلى من مستوى عينيك. ويُعد البحر ظاهرًا إن وصل الخط إلى الساحل قبل أي شيء أعلى منك. في الإمارات تغرب الشمس نحو الغرب الجنوبي الغربي في ديسمبر (نحو 243°) ونحو الغرب الشمالي الغربي في يونيو (نحو 297°).",
    "Building data comes from OpenStreetMap through the Overpass API. Heights use the height tag, then floor count times your floor height, then a 4-floor guess. Only buildings within 700 m are checked. Beyond that, a \"sea\" result means the coast is in that direction and nothing nearby blocks it, not that it's guaranteed.": "بيانات المباني من OpenStreetMap عبر Overpass API. ويُؤخذ الارتفاع من وسم الارتفاع، ثم عدد الطوابق مضروبًا في ارتفاع الطابق، ثم تقدير بـ 4 طوابق. ولا تُفحص إلا المباني ضمن 700 م. وما بعد ذلك، فنتيجة «بحر» تعني أن الساحل في ذلك الاتجاه ولا شيء قريب يحجبه، لا أنه مضمون.",
    "None": "لا شيء",
    "sunset": "الغروب",
    "N": "ش", "E": "ق", "S": "ج", "W": "غ",
    "Here the sun sets between": "تغرب الشمس هنا بين",
    "(December) and": "(ديسمبر) و",
    "(June). From this floor the sunset is in view all year. A building lower than you can still hide the last few minutes near the horizon.": "(يونيو). من هذا الطابق يظهر الغروب طوال السنة. وقد يحجب مبنى أقل منك الدقائق الأخيرة قرب الأفق.",
    "(June). From this floor you'd likely see it set in": "(يونيو). من هذا الطابق سترى الغروب على الأرجح في",
    "(June). From this floor, buildings or the way the windows face hide the sunset all year. A building lower than you can still hide the last few minutes near the horizon.": "(يونيو). من هذا الطابق تحجب المباني أو اتجاه النوافذ الغروب طوال السنة. وقد يحجب مبنى أقل منك الدقائق الأخيرة قرب الأفق.",
    ". A building lower than you can still hide the last few minutes near the horizon.": ". وقد يحجب مبنى أقل منك الدقائق الأخيرة قرب الأفق.",
    "(you look over lower roofs)": "(تطل فوق أسطح أقل ارتفاعًا)",
    "(beyond the buildings checked, so less certain)": "(أبعد من المباني المفحوصة، لذا أقل يقينًا)",
    "No clear directions to report.": "لا اتجاهات واضحة للإبلاغ عنها.",
    "Now tap a building.": "الآن اضغط على مبنى.",
    "Couldn't reach any OpenStreetMap server just now (they are free and sometimes busy). Try again in a minute.": "تعذّر الوصول إلى أي خادم OpenStreetMap الآن (فهي مجانية ومزدحمة أحيانًا). حاول مجددًا بعد دقيقة.",
    "Zoom in": "تكبير", "Zoom out": "تصغير"
  };
  LabArDeg(dict, [
    [/^(N|E|S|W){2,3}$/, function (m) { return m.split('').map(function (c) { return C[c]; }).join(' '); }],
    [/^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:, )?)+$/, function (m) { return m.split(', ').map(function (x) { return MO[x]; }).join('، '); }],
    [/^Blocked by (.+), (\d+) m away, about (\d+) m tall$/, function (m, n, d, h) { return 'يحجبه ' + bn(n) + '، على بعد ' + d + ' م، وارتفاعه نحو ' + h + ' م'; }],
    [/^\((.+)\)$/, function (m, s) { var t = src(s); return t !== s ? '(' + t + ')' : m; }],
    [/^Sea, coast about (.+ k?m) away$/, function (m, d) { return 'بحر، والساحل على بعد نحو ' + dist(d); }],
    [/^Water \((.+)\), (\d+) m away$/, function (m, n, d) { return 'ماء (' + ({ water: 'ماء', lagoon: 'بحيرة شاطئية', canal: 'قناة' }[n] || n) + ')، على بعد ' + d + ' م'; }],
    [/^Open, nothing taller than you within (\d+) m$/, 'مفتوح، لا شيء أعلى منك ضمن $1 م'],
    [/^· (\d+)° wide, (\d+)° to (\d+)°$/, '· عرضه $1°، من $2° إلى $3°'],
    [/^Fetching buildings from (.+)…$/, 'جارٍ جلب المباني من $1…'],
    [/^(\d+) buildings checked, (\d+) with no height in OSM \(guessed\)\. Your eye is about (\d+) m up(?: in (.+?))?(?:, which has (\d+) floors tagged)?\.$/, function (m, a, b, e, n, f) {
      return 'فُحص ' + a + ' مبنى، منها ' + b + ' بلا ارتفاع في OSM (مقدّر). عيناك على ارتفاع نحو ' + e + ' م' + (n ? ' في ' + bn(n) : '') + (f ? '، وفيه ' + f + ' طوابق موسومة' : '') + '.';
    }]
  ]);
})();
