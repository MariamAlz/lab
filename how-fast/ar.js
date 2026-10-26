(function () {
  function u(s) { return s.replace(/ million km$/, ' مليون كم').replace(/ km\/s$/, ' كم/ث').replace(/ km\/h$/, ' كم/س').replace(/ m\/s$/, ' م/ث').replace(/ km$/, ' كم').replace(/ m$/, ' م'); }
  var N = '([\\d,]+(?:\\.\\d+)?)';
  LabAr.add({
    "How Fast Are You Moving?": "ما سرعتك الآن؟",
    "How fast are you moving right now?": "ما سرعتك الآن؟",
    "Experiment · Space · Earth · Live": "تجربة · فضاء · الأرض · مباشر",
    "Even sitting on the sofa, you're spinning with Earth, racing around the Sun, circling the centre of the galaxy and drifting through the universe. The counters below show how far each of those motions has carried you since you opened this page.": "حتى وأنت جالس على الأريكة، فأنت تدور مع الأرض، وتنطلق حول الشمس، وتلف حول مركز المجرة، وتسبح عبر الكون. العدادات أدناه تُظهر المسافة التي قطعتها بكل حركة من هذه الحركات منذ فتحت هذه الصفحة.",
    "📍 Use my location and GPS speed": "📍 استخدم موقعي وسرعة GPS",
    "Speed ladder · each step is ten times faster": "سلّم السرعات · كل درجة أسرع بعشر مرات",
    "Speeds compared on a log scale": "مقارنة السرعات على مقياس لوغاريتمي",
    "Why the orbit speed changes through the year": "لماذا تتغير سرعة المدار خلال السنة",
    "Earth's orbit around the Sun": "مدار الأرض حول الشمس",
    "Earth's orbit is a slightly squashed circle. We're closest to the Sun in early January (147.1 million km) and furthest in early July (152.1 million km). Closer in, gravity pulls harder and Earth speeds up, so you move about 1 km/s faster in January than in July. The shape is exaggerated here so you can see it.": "مدار الأرض دائرة مفلطحة قليلًا. نكون في أقرب نقطة من الشمس أوائل يناير (147.1 مليون كم) وفي أبعدها أوائل يوليو (152.1 مليون كم). وكلما اقتربنا زادت قوة الجاذبية فتتسارع الأرض، لذا تتحرك في يناير أسرع بنحو 1 كم/ث مما في يوليو. الشكل هنا مبالغ فيه لتتمكن من رؤيته.",
    "So why don't we feel it?": "فلماذا لا نشعر بها؟",
    "You only feel <b>changes</b> in speed or direction, not speed itself. Earth's spin and orbit are so smooth and steady that everything around you, the air, the sofa and your tea, moves along with you. It's the same reason you can pour a drink on a plane at 900 km/h.": "أنت تشعر فقط <b>بالتغيّر</b> في السرعة أو الاتجاه، لا بالسرعة نفسها. دوران الأرض ومدارها سلسان ومنتظمان جدًا، حتى إن كل ما حولك، من الهواء والأريكة إلى كوب الشاي، يتحرك معك. وهذا هو السبب نفسه الذي يجعلك تصب مشروبًا في طائرة تسير بسرعة 900 كم/س.",
    "The spin is fastest at the equator (1,670 km/h) and zero at the poles. In the UAE, at about 24°N, it's around 1,525 km/h. That spin is why rockets launch eastward, and why the UAE's lower latitude gives a small free boost compared with Europe.": "الدوران أسرع ما يكون عند خط الاستواء (1,670 كم/س) ويساوي صفرًا عند القطبين. في الإمارات، عند خط عرض 24\u200E°\u200E شمالًا تقريبًا، يبلغ نحو 1,525 كم/س. ولهذا الدوران تُطلق الصواريخ نحو الشرق، ولهذا يمنح خط العرض المنخفض للإمارات دفعة مجانية صغيرة مقارنة بأوروبا.",
    "These speeds don't simply add up": "هذه السرعات لا تُجمع ببساطة",
    "Each motion points in a different direction, and the directions change through the day and the year. The spin even runs backwards against the orbit at midnight and forwards with it at noon. So the true total is not the sum of the numbers. Measured against the afterglow of the Big Bang (the cosmic microwave background), the Sun moves at about 370 km/s towards the constellation Leo, and the Milky Way as a whole at about 550 km/s.": "كل حركة تتجه في اتجاه مختلف، والاتجاهات تتغير خلال اليوم والسنة. بل إن الدوران يعاكس اتجاه المدار عند منتصف الليل ويوافقه عند الظهر. لذا فالمجموع الحقيقي ليس حاصل جمع الأرقام. وبالقياس إلى الوهج المتبقي من الانفجار العظيم (إشعاع الخلفية الكونية الميكروي)، تتحرك الشمس بنحو 370 كم/ث نحو كوكبة الأسد، ودرب التبانة ككل بنحو 550 كم/ث.",
    "Earth's spin and orbit come from precise orbit maths for today's date. The galactic and cosmic speeds are measured values with uncertainty of several percent.": "دوران الأرض ومدارها محسوبان بمعادلات مدارية دقيقة لتاريخ اليوم. أما سرعات المجرة والكون فهي قيم مقيسة بهامش خطأ يبلغ عدة في المئة.",
    "You, on the ground": "أنت، على الأرض",
    "Earth's spin": "دوران الأرض",
    "Orbit around the Sun": "المدار حول الشمس",
    "Sun around the galaxy": "الشمس حول المجرة",
    "Milky Way through the universe": "درب التبانة عبر الكون",
    "From your phone's GPS. Walk, drive or ride to see this change.": "من GPS هاتفك. امشِ أو قُد أو اركب لترى الرقم يتغير.",
    "One lap of the Milky Way takes about 230 million years. Last time round, there were no flowering plants yet.": "دورة واحدة حول درب التبانة تستغرق نحو 230 مليون سنة. في الدورة الماضية لم تكن النباتات المزهرة قد ظهرت بعد.",
    "Relative to the cosmic microwave background, pulled by the mass of nearby galaxy clusters.": "بالنسبة إلى إشعاع الخلفية الكونية الميكروي، تجذبها كتلة عناقيد المجرات القريبة.",
    "Tap \"Use my location\" to measure": "اضغط «استخدم موقعي» للقياس",
    "km/h": "كم/س", "km/s": "كم/ث",
    "Walking": "المشي", "Car on the highway": "سيارة على الطريق السريع", "Airliner": "طائرة ركاب", "Speed of sound": "سرعة الصوت", "Earth's spin here": "دوران الأرض هنا",
    "Rifle bullet": "رصاصة بندقية", "Space station": "محطة الفضاء", "Earth around the Sun": "الأرض حول الشمس", "Milky Way vs universe": "درب التبانة عبر الكون", "You (GPS)": "أنت (GPS)",
    "fastest": "الأسرع", "slowest": "الأبطأ",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared, so this uses Abu Dhabi.": "لم تتم مشاركة الموقع، لذا تُستخدم أبوظبي."
  }, [
    [/^Since you opened this page: (.+)$/, function (m, t) { return 'منذ فتحت هذه الصفحة: ' + t.replace(/(\d+) min (\d+) s$/, '$1 د $2 ث').replace(/([\d.]+) s$/, '$1 ث'); }],
    [/^(0\.1|1|10|100|1000) (m\/s|km\/s)$/, '$1 $2'], // log-axis ticks on the LTR chart stay as they are
    [new RegExp('^' + N + ' (m/s|km/h|km/s)$'), function (m) { return u(m); }],
    [new RegExp('^(' + N + ' (?:million km|km|m)) travelled$'), function (m, d) { return 'قطعت ' + u(d); }],
    [/^At (.+) \(([\d.]+)°([NS])\), you ride a circle ([\d,]+) km around, once every 23 h 56 min\.$/, function (m, p, l, h, c) { return 'في ' + (p === 'Abu Dhabi' ? 'أبوظبي' : 'موقعك') + ' (' + l + '\u200E°\u200E ' + (h === 'N' ? 'شمالًا' : 'جنوبًا') + ')، تدور في دائرة محيطها ' + c + ' كم، مرة كل 23 ساعة و56 دقيقة.'; }],
    [/^Today Earth is ([\d.]+) million km from the Sun\. One lap is about 940 million km\.$/, 'تبعد الأرض اليوم $1 مليون كم عن الشمس. والدورة الواحدة نحو 940 مليون كم.'],
    [/^Earth today · ([\d.]+) km\/s$/, 'الأرض اليوم · $1 كم/ث'],
    [/^Using your location · GPS accuracy about (\d+) m( · you look stationary)?$/, function (m, a, s) { return 'يُستخدم موقعك · دقة GPS نحو ' + a + ' م' + (s ? ' · يبدو أنك ثابت' : ''); }]
  ]);
})();
