(function () {
  function dur(h, m) { return (h ? h + ' س ' : '') + m + ' د'; }
  LabAr.add({
    "Orbit Sandbox": "ساحة المدارات",
    "Experiment · Space · Physics": "تجربة · الفضاء · الفيزياء",
    "Orbit sandbox.": "ساحة المدارات.",
    "An orbit is just falling sideways fast enough to keep missing the ground. Press anywhere above the Earth, drag to aim, and let go. The gravity is real, and so are the sizes.": "المدار ليس إلا سقوطًا جانبيًا بسرعة تكفي لتخطئ الأرض باستمرار. اضغط في أي مكان فوق الأرض، واسحب لتصوّب، ثم اترك. الجاذبية حقيقية، وكذلك الأحجام.",
    "Orbit sandbox. Use the preset buttons to launch satellites without a pointer.": "ساحة المدارات. استخدم الأزرار الجاهزة لإطلاق الأقمار دون مؤشر.",
    "Speed": "السرعة",
    "Play": "تشغيل",
    "Zoom in": "تكبير", "Zoom out": "تصغير",
    "Presets": "إعدادات جاهزة",
    "Launch a real one": "أطلق قمرًا حقيقيًا",
    "ISS": "ISS", "GPS": "GPS", "GEO": "GEO",
    "Geostationary": "ثابت بالنسبة للأرض",
    "Molniya": "مولنيا",
    "Status": "الحالة",
    "Nothing in orbit yet": "لا شيء في المدار بعد",
    "Burn forward +100 m/s": "زِد السرعة 100 m/s",
    "Burn back −100 m/s": "خفّض السرعة 100 m/s",
    "The presets are there to look at. Challenges only count for orbits you throw yourself.": "الإعدادات الجاهزة للمشاهدة فقط. لا تُحتسب التحديات إلا للمدارات التي تطلقها بنفسك.",
    "GPS satellites fly at about 20,200 km and go round twice a day. A geostationary one, at 35,786 km, takes exactly one day, so it seems to hang still over one spot. Every orbit here follows the same rule, Newton's gravity, worked out step by step.": "تحلّق أقمار GPS على ارتفاع نحو 20,200 km وتدور مرتين في اليوم. أما القمر الثابت بالنسبة للأرض، على ارتفاع 35,786 km، فيستغرق يومًا كاملًا بالضبط، لذا يبدو معلّقًا فوق نقطة واحدة. كل مدار هنا يتبع القاعدة نفسها، جاذبية نيوتن، محسوبة خطوة بخطوة.",
    "Challenges": "التحديات",
    "Low Earth orbit": "مدار أرضي منخفض", "round, between 300 and 600 km": "دائري، بين 300 و600 km",
    "A GPS orbit": "مدار GPS", "nearly round, twice a day": "شبه دائري، مرتين في اليوم",
    "round, once a day, turning with Earth": "دائري، مرة في اليوم، يدور مع الأرض",
    "Escape": "الإفلات", "leave Earth for good": "غادر الأرض نهائيًا",
    "Crashed": "تحطّم", "Gone": "ابتعد", "Escaping": "يفلت", "Falling back": "يسقط عائدًا", "Round orbit": "مدار دائري", "Elliptical orbit": "مدار إهليلجي",
    "Height": "الارتفاع", "Lowest": "أدنى نقطة", "Highest": "أعلى نقطة", "Once round": "الدورة الكاملة", "Direction": "الاتجاه",
    "with Earth": "مع دوران الأرض", "against Earth": "عكس دوران الأرض",
    "Escape speed here": "سرعة الإفلات هنا",
    "ISS-like": "مثل ISS", "GPS-like": "مثل GPS", "Molniya-like": "مثل مولنيا",
    "Press above the Earth, drag sideways, let go": "اضغط فوق الأرض، واسحب جانبًا، ثم اترك"
  }, [
    [/^Satellite (\d+)$/, 'قمر $1'],
    [/^([\d,.]+) (km|km\/s)$/, '$1 $2'],
    [/^(\d+) h (\d+) min$/, function (m, h, mi) { return dur(h, mi); }],
    [/^(\d+) min$/, function (m, mi) { return dur(0, mi); }],
    [/^([\d.]+) km\/s · round needs ([\d.]+), escape ([\d.]+)$/, '$1 km/s · المدار الدائري يحتاج $2، والإفلات $3'],
    [/^([\d.]+)k×$/, '$1k×']
  ]);
})();
