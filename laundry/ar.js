(function () {
  var FAB = { 'Cotton t-shirt': 'تيشيرت قطني', 'Jeans': 'جينز', 'Bath towel': 'منشفة حمّام', 'Bedsheet': 'شرشف سرير' };
  var SPOT = { 'balcony in sun': 'شرفة مشمسة', 'balcony in shade': 'شرفة مظللة', 'indoors (ac)': 'داخل البيت (مكيّف)' };
  function ap(h, mm, a) { return h + (mm ? ':' + mm : '') + ' ' + (a === 'am' ? 'ص' : 'م'); }
  var H = '(\\d+)(?::(\\d\\d))? ?(am|pm)';
  function hr(s) { var m = s.match(new RegExp('^' + H + '$')); return m ? ap(m[1], m[2], m[3]) : s; }
  function dur(s) {
    if (s === 'over a day') return 'أكثر من يوم';
    var m = s.match(/^(\d+) min$/); if (m) return m[1] + ' دقيقة';
    m = s.match(/^(\d+) h(?: (\d+) min)?$/); if (m) return m[1] + ' س' + (m[2] ? ' و' + m[2] + ' د' : '');
    return s;
  }
  var D = '(over a day|\\d+ min|\\d+ h(?: \\d+ min)?)';
  LabAr.add({
    "Laundry Dry Time": "وقت جفاف الغسيل",
    "Tool · Home · Weather · Live": "أداة · المنزل · الطقس · مباشر",
    "Laundry dry time.": "وقت جفاف الغسيل.",
    "In a UAE summer a t-shirt can dry on the balcony faster than the next load washes. On a humid night it can sit damp until morning, and a dusty afternoon can undo the wash. This uses the live forecast for your spot to tell you how long it will take, the best hour to hang it today, and when to bring it in.": "في صيف الإمارات قد يجف التيشيرت على الشرفة أسرع مما تنتهي الغسلة التالية. وفي ليلة رطبة قد يبقى رطبًا حتى الصباح، وقد يُفسد الغبار عصرًا الغسيل كله. تستخدم هذه الصفحة التوقعات المباشرة لموقعك لتخبرك كم سيستغرق الجفاف، وأفضل ساعة لنشره اليوم، ومتى تُدخله.",
    "📍 Use my location": "📍 استخدم موقعي",
    "What are you drying?": "ماذا تنشر؟",
    "Where will it hang?": "أين ستنشره؟",
    "If you hang it now": "إن نشرته الآن",
    "best time to hang today": "أفضل وقت للنشر اليوم",
    "dry time then": "مدة الجفاف حينها",
    "dust now, µg/m³": "الغبار الآن، µg/m³",
    "Minutes to dry if hung at each hour": "دقائق الجفاف إن نُشر في كل ساعة",
    "Quick": "سريع",
    "Slow (over 3 h)": "بطيء (أكثر من 3 ساعات)",
    "Best today": "الأفضل اليوم",
    "Dusty or rain": "غبار أو مطر",
    "Conditions now": "الأحوال الآن",
    "<b>How it works.</b> Drying is evaporation, and two things drive it. The first is how thirsty the air is: the vapour pressure deficit, or how much more water the air could hold. Hot dry air in June can take four times as much as a humid August evening on the coast. The second is energy: sunlight on the cloth supplies the heat that turns water into vapour, and wind carries the damp air away. This page combines them with the Penman equation, the same one farmers use to estimate how fast fields lose water.": "<b>كيف يعمل.</b> الجفاف تبخّر، ويحرّكه أمران. الأول مدى «عطش» الهواء: أي عجز ضغط البخار، أو كمية الماء الإضافية التي يستطيع الهواء حملها. الهواء الحار الجاف في يونيو قد يحمل أربعة أضعاف ما يحمله مساء رطب في أغسطس على الساحل. والثاني الطاقة: أشعة الشمس على القماش تمدّه بالحرارة التي تحوّل الماء إلى بخار، والرياح تحمل الهواء الرطب بعيدًا. تجمع هذه الصفحة بينهما بمعادلة بنمان، وهي المعادلة نفسها التي يستخدمها المزارعون لتقدير سرعة فقدان الحقول للماء.",
    "The fabric numbers are typical: how much water each item holds after a normal spin, its hanging area, and a slow-down for thick cloth whose inside dries last. Indoors assumes an air-conditioned room at about 24°C and 50% humidity with little air flow. Your machine, your balcony and your towels will differ, so treat the times as a guide. Weather and dust from Open-Meteo forecasts.": "أرقام الأقمشة تقديرية: كمية الماء التي تحملها كل قطعة بعد العصر العادي، ومساحة نشرها، وعامل إبطاء للقماش السميك الذي يجف داخله أخيرًا. ويُفترض في الداخل غرفة مكيّفة بحرارة 24°C تقريبًا ورطوبة 50% مع حركة هواء قليلة. غسالتك وشرفتك ومناشفك ستختلف، فاعتبر الأوقات دليلًا تقريبيًا. بيانات الطقس والغبار من توقعات Open-Meteo.",
    "Cotton t-shirt": "تيشيرت قطني", "Jeans": "جينز", "Bath towel": "منشفة حمّام", "Bedsheet": "شرشف سرير",
    "Balcony in sun": "شرفة مشمسة", "Balcony in shade": "شرفة مظللة", "Indoors (AC)": "داخل البيت (مكيّف)",
    "Not today": "ليس اليوم",
    "No data": "لا توجد بيانات",
    "The air is too humid to dry it in the next day. Try indoors with the AC or a fan.": "الهواء رطب جدًا ليجف خلال اليوم القادم. جرّب نشره في الداخل مع المكيّف أو مروحة.",
    "drying power (vapour pressure deficit)": "قوة التجفيف (عجز ضغط البخار)",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مرة أخرى.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  }, [
    [new RegExp('^(' + Object.keys(FAB).join('|') + ') · (.+) · hung now$'), function (m, f, s) { return FAB[f] + ' · ' + (SPOT[s] || s) + ' · نُشر الآن'; }],
    [new RegExp('^' + D + '$'), function (m, d) { return dur(d); }],
    [new RegExp('^Dry at about ' + H + '\\.( Slow going\\. Indoors under the AC may be quicker\\.)?$'), function (m, h, mm, a, slow) { return 'يجف نحو ' + ap(h, mm, a) + '.' + (slow ? ' الجفاف بطيء. قد يكون أسرع في الداخل تحت المكيّف.' : ''); }],
    [new RegExp('^' + H + '$'), function (m, h, mm, a) { return ap(h, mm, a); }],
    [/^(\d+(?:\.\d)?)h$/, '$1س'],
    [new RegExp('^Hang at ' + H + ': ' + D + '( \\(dust or rain while drying\\))?$'), function (m, h, mm, a, d, bad) { return 'النشر عند ' + ap(h, mm, a) + ': ' + dur(d) + (bad ? ' (غبار أو مطر أثناء الجفاف)' : ''); }],
    [/^It's dusty outside now \((\d+) µg\/m³\)\. Dry it indoors today if you can\.$/, 'الجو مغبر في الخارج الآن ($1 µg/m³). انشره في الداخل اليوم إن أمكن.'],
    [/^Dust picks up around (\S+)\. Bring it in before (\S+)\.$/, function (m, a, b) { return 'يزداد الغبار نحو ' + hr(a) + '. أدخل الغسيل قبل ' + hr(b) + '.'; }],
    [/^Dusty from about (\S+), so don't leave it out after it's dry\.$/, function (m, a) { return 'غبار ابتداءً من ' + hr(a) + ' تقريبًا، فلا تتركه في الخارج بعد أن يجف.'; }],
    [/^Rain is forecast around (\S+)\.$/, function (m, a) { return 'يُتوقع مطر نحو ' + hr(a) + '.'; }],
    [/^Humidity is (\d+)%, so clothes left out overnight may pick up dew\.$/, 'الرطوبة $1%، لذا قد يتكثّف الندى على الملابس المتروكة في الخارج ليلًا.'],
    [/^(-?\d+)°C$/, '$1°C'],
    [/^([\d.]+) kPa$/, '$1 kPa'],
    [/^(\d+) km\/h$/, '$1 km/h'],
    [/^air, (\d+)% humidity$/, 'الهواء، رطوبة $1%'],
    [/^wind, sun (\d+) W\/m²$/, 'الرياح، الشمس $1 W/m²'],
    [/^Fetching the forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب التوقعات لـ' + LabAr.t(n) + '…'; }],
    [/^(.+) · dust forecast unavailable right now$/, function (m, n) { return LabAr.t(n) + ' · توقعات الغبار غير متاحة الآن'; }]
  ]);
})();
