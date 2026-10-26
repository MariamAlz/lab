(function () {
  var DAY = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var D = '(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (\\d\\d:\\d\\d)';
  var HEM = { N: 'شمالًا', S: 'جنوبًا', E: 'شرقًا', W: 'غربًا' };
  LabAr.add({
    "UAE in Orbit": "الإمارات في المدار",
    "Experiment · Space · Live": "تجربة · الفضاء · مباشر",
    "UAE in orbit.": "الإمارات في المدار.",
    "Every satellite the UAE owns that's still in orbit, where it is this second, and where it's heading. The low ones circle the Earth every hour and a half; the high ones hang over the same spot on the equator.": "كل قمر اصطناعي تملكه الإمارات وما زال في مداره: أين هو في هذه اللحظة وإلى أين يتجه. الأقمار المنخفضة تدور حول الأرض كل ساعة ونصف تقريبًا، أما المرتفعة فتبقى ثابتة فوق النقطة نفسها من خط الاستواء.",
    "World map with the UAE's satellites. The list beside it has the same information.": "خريطة العالم وعليها أقمار الإمارات الاصطناعية. القائمة المجاورة تعرض المعلومات نفسها.",
    "Live": "مباشر",
    "60× speed": "سرعة ×60",
    "Pick a satellite": "اختر قمرًا اصطناعيًا",
    "Tap one on the map or in the list.": "اضغط على أحدها في الخريطة أو في القائمة.",
    "Satellites": "الأقمار الاصطناعية",
    "The low satellites (KhalifaSat, MBZ-SAT and smaller ones) image the Earth or test new technology. Defence satellites aren't shown. The high ones, 36,000 km up, carry TV, internet and satellite phone calls across the region. Positions come from public orbital elements refreshed every six hours.": "الأقمار المنخفضة (خليفة سات وMBZ-SAT وأقمار أصغر) تصوّر الأرض أو تختبر تقنيات جديدة. الأقمار الدفاعية غير معروضة. أما المرتفعة، على ارتفاع 36,000 كيلومتر، فتنقل البث التلفزيوني والإنترنت والمكالمات عبر الهاتف الفضائي في أنحاء المنطقة. المواقع محسوبة من عناصر مدارية منشورة للعامة تُحدَّث كل ست ساعات.",
    "Orbital elements: CelesTrak. Map: Natural Earth.": "العناصر المدارية: CelesTrak. الخريطة: Natural Earth.",
    "high · fixed": "مرتفع · ثابت",
    "Height": "الارتفاع",
    "Speed": "السرعة",
    "Over": "فوق",
    "From Abu Dhabi": "من أبوظبي",
    "Once round": "دورة كاملة",
    "Next pass over Abu Dhabi": "المرور التالي فوق أبوظبي",
    "none in 24 h": "لا يوجد خلال 24 ساعة",
    "Launched": "تاريخ الإطلاق",
    "Catalogue no.": "رقم الفهرس",
    "The Arab Satellite 813": "القمر الاصطناعي العربي 813",
    "The first satellite built entirely by Emirati engineers, at the Mohammed bin Rashid Space Centre. It photographs the Earth in high resolution.": "أول قمر اصطناعي يبنيه مهندسون إماراتيون بالكامل، في مركز محمد بن راشد للفضاء. يلتقط صورًا عالية الدقة للأرض.",
    "A high-resolution Earth-imaging satellite designed and built in the UAE by the Mohammed bin Rashid Space Centre.": "قمر اصطناعي لتصوير الأرض بدقة عالية، صمّمه وبناه في الإمارات مركز محمد بن راشد للفضاء.",
    "The UAE's first Earth-observation satellite, launched in 2009.": "أول قمر اصطناعي إماراتي لرصد الأرض، أُطلق عام 2009.",
    "An Earth-imaging satellite launched in 2013, with Emirati engineers working on its design.": "قمر اصطناعي لتصوير الأرض أُطلق عام 2013، وشارك مهندسون إماراتيون في تصميمه.",
    "The first Emirati nanosatellite, built by university students.": "أول قمر اصطناعي نانوي إماراتي، بناه طلاب جامعيون.",
    "A student-built CubeSat that measures greenhouse gases over the UAE.": "قمر مكعّب (CubeSat) بناه طلاب، يقيس غازات الدفيئة فوق الإمارات.",
    "A small satellite from Dubai Municipality that monitors air quality and greenhouse gases.": "قمر اصطناعي صغير من بلدية دبي يرصد جودة الهواء وغازات الدفيئة.",
    "A radar imaging satellite from the Mohammed bin Rashid Space Centre. Radar sees through cloud and dust, by day or night.": "قمر اصطناعي للتصوير الراداري من مركز محمد بن راشد للفضاء. الرادار يرى عبر الغيوم والغبار ليلًا ونهارًا.",
    "A small satellite from Sharjah, built with university students and researchers.": "قمر اصطناعي صغير من الشارقة، بُني بمشاركة طلاب جامعيين وباحثين.",
    "A Thuraya satellite: it relays satellite-phone calls and data across Europe, Africa, the Middle East and Asia.": "قمر من أقمار الثريا: ينقل مكالمات الهاتف الفضائي والبيانات عبر أوروبا وأفريقيا والشرق الأوسط وآسيا.",
    "A Yahsat (Al Yah) satellite carrying TV, broadband and communications.": "قمر من أقمار الياه سات (Yahsat) ينقل البث التلفزيوني والإنترنت عريض النطاق والاتصالات.",
    "A satellite registered to the UAE.": "قمر اصطناعي مسجّل باسم الإمارات."
  }, [
    [/^low · (\d+) min$/, 'منخفض · $1 دقيقة'],
    [/^(\d+) min$/, '$1 دقيقة'],
    [/^([\d,]+) km$/, '\u2066$1 km\u2069'],
    [/^(\d+\.\d+) km\/s$/, '\u2066$1 km/s\u2069'],
    [/^(\d+\.\d)°([NS]) (\d+\.\d)°([EW])$/, function (m, a, b, c, d) { return '\u2066' + a + '°\u2069 ' + HEM[b] + '، \u2066' + c + '°\u2069 ' + HEM[d]; }],
    [/^(-?\d+)° above the horizon$/, '\u2066$1°\u2069 فوق الأفق'],
    [new RegExp('^' + D + ', up to (\\d+)°$'), function (m, d, t, e) { return DAY[d] + ' ' + t + '، بارتفاع حتى \u2066' + e + '°\u2069'; }],
    [new RegExp('^(Live|60×) · ' + D + ' UAE time$'), function (m, l, d, t) { return (l === 'Live' ? 'مباشر' : '×60') + ' · ' + DAY[d] + ' ' + t + ' بتوقيت الإمارات'; }],
    [/^Orbital elements: CelesTrak, updated (\S+ \S+) UTC\. Map: Natural Earth\.$/, 'العناصر المدارية: CelesTrak، آخر تحديث \u2066$1 UTC\u2069. الخريطة: Natural Earth.']
  ]);
})();
