(function () {
  var SP = { 'Dubai Creek': 'خور دبي', 'Abu Dhabi Corniche breakwater': 'كاسر أمواج كورنيش أبوظبي', 'Khor Fakkan': 'خورفكان', 'Dibba': 'دبا', 'Fujairah': 'الفجيرة', 'RAK Al Marjan': 'جزيرة المرجان، رأس الخيمة', 'Umm Al Quwain': 'أم القيوين', 'Jebel Ali': 'جبل علي', 'Your location': 'موقعك' };
  var PH = { 'New moon': 'محاق', 'Waxing crescent': 'هلال متزايد', 'First quarter': 'تربيع أول', 'Waxing gibbous': 'أحدب متزايد', 'Full moon': 'بدر', 'Waning gibbous': 'أحدب متناقص', 'Last quarter': 'تربيع أخير', 'Waning crescent': 'هلال متناقص' };
  var HL = { high: 'المد', low: 'الجزر' };
  function u(x) { return '\u2066' + x + '\u2069'; }
  function day(d) { return d === 'today' ? 'اليوم' : d === 'tomorrow' ? 'غدًا' : LabAr.t(d); }
  // reasons may end in a full stop (summary) or not (lists)
  function R(re, fn) { return [new RegExp('^' + re + '(\\.)?$'), function () { var a = [].slice.call(arguments), dot = a[a.length - 1]; return fn.apply(null, a.slice(1, -1)) + (dot ? '.' : ''); }]; }
  var d = {
    "Fishing Now": "الصيد الآن",
    "Tool · Sea · Moon · Live": "أداة · البحر · القمر · مباشر",
    "Fishing now.": "الصيد الآن.",
    "Anglers on the Corniche and the breakwaters will tell you fish bite when the water is moving, at first and last light, and around the new and full moon. This puts those rules together with the tide, moon, pressure and wind forecast for your spot and picks the best three windows in the next 48 hours.": "سيخبرك الصيادون على الكورنيش وكواسر الأمواج أن السمك يأكل حين يتحرك الماء، وعند أول الضوء وآخره، وحول المحاق والبدر. تجمع هذه الأداة تلك القواعد مع توقعات المد والجزر والقمر والضغط الجوي والرياح لمكانك، وتختار أفضل ثلاث فترات في الـ48 ساعة القادمة.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Next 48 hours · fishing score": "الساعات الـ48 القادمة · درجة الصيد",
    "Hourly fishing score with the tide": "درجة الصيد لكل ساعة مع المد والجزر",
    "Fair": "متوسط", "Slow": "ضعيف", "Tide height": "ارتفاع المد", "Best windows": "أفضل الفترات",
    "Best three windows": "أفضل ثلاث فترات",
    "Right now": "الآن",
    "Good time to fish": "وقت جيد للصيد",
    "Moon": "القمر", "Next tide": "المد أو الجزر التالي", "Next moon event": "حدث القمر التالي", "Wind now": "الرياح الآن",
    "<b>Licence and rules.</b> Fishing in the UAE, even from the shore, needs a recreational fishing licence from the Ministry of Climate Change and Environment (MOCCAE) or your emirate's environment authority. There are also rules on species, sizes, areas and seasons. Check the current rules with the authority before you go.": "<b>الرخصة والأنظمة.</b> الصيد في الإمارات، حتى من الشاطئ، يتطلب رخصة صيد ترفيهي من وزارة التغير المناخي والبيئة أو من الجهة البيئية في إمارتك. وهناك أيضًا أنظمة تخص الأنواع والأحجام والمناطق والمواسم. راجع الأنظمة الحالية لدى الجهة المختصة قبل أن تذهب.",
    "<b>What the score rewards.</b> Water moving in the two hours or so either side of a high or low tide (bait gets stirred up). Solunar periods: the moon overhead or underfoot, plus or minus an hour (major), and moonrise and moonset, plus or minus 30 minutes (minor). An hour either side of sunrise and sunset. Steady or slowly falling pressure. Wind under 15 knots. And the few days around a new or full moon, when tides run strongest.": "<b>ما الذي يرفع الدرجة.</b> حركة الماء في نحو ساعتين قبل المد أو الجزر وبعده (حين يتحرك الطُّعم). الفترات القمرية: القمر فوق الرأس أو تحت القدمين، بفارق ساعة قبلها وبعدها (فترة رئيسية)، وشروق القمر وغروبه بفارق 30 دقيقة (فترة ثانوية). ساعة قبل الشروق والغروب وبعدهما. ضغط جوي ثابت أو ينخفض ببطء. رياح أقل من 15 عقدة. والأيام القليلة حول المحاق والبدر، حين يكون المد في أقواه.",
    "<b>What's approximate.</b> Tides come from the Open-Meteo marine model, not a harbour gauge, so turns can be 30 minutes or more off, more so inside creeks and lagoons. Moon times are computed in your browser from a low-precision model (within a few minutes). Solunar theory is folklore with mixed evidence. Treat the score as a guide to when to go, not a promise of fish. Check the weather and sea state before going out on the water.": "<b>ما هو تقريبي.</b> المد والجزر من النموذج البحري لـOpen-Meteo وليس من مقياس في الميناء، لذا قد تخطئ أوقات التحول بنصف ساعة أو أكثر، خصوصًا داخل الأخوار والبحيرات. أوقات القمر محسوبة في متصفحك بنموذج منخفض الدقة (بفارق دقائق قليلة). ونظرية الفترات القمرية موروث شعبي أدلته متباينة. اعتبر الدرجة دليلًا على وقت الذهاب لا وعدًا بالسمك، وتحقّق من الطقس وحالة البحر قبل الخروج إلى الماء.",
    "Mid-tide, strong current": "منتصف المد، تيار قوي",
    "Cloud cover dims the light": "الغيوم تخفف الضوء",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مجددًا.",
    "No data": "لا توجد بيانات",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a spot instead.": "لم تتم مشاركة الموقع. اختر مكانًا بدلًا من ذلك."
  };
  for (var k in SP) d[k] = SP[k];
  LabAr.add(d, [
    [/^Fetching tide, wind and pressure for (.+)…$/, function (m, n) { return 'جارٍ جلب المد والرياح والضغط لـ' + (SP[n] || n) + '…'; }],
    [/^(.+) · tide model cell ([\d.]+)°N ([\d.]+)°E$/, function (m, n, a, b) { return (SP[n] || n) + ' · خلية نموذج المد ' + u(a + '°N ' + b + '°E'); }],
    [/^(.+) · no tide data here, so the score leaves the tide out$/, function (m, n) { return (SP[n] || n) + ' · لا توجد بيانات مد هنا، لذا لا تحسب الدرجة المد والجزر'; }],
    [/^(\d+) · (Good time to fish|Fair|Slow)$/, function (m, n, w) { return n + ' · ' + { 'Good time to fish': 'وقت جيد للصيد', Fair: 'متوسط', Slow: 'ضعيف' }[w]; }],
    R('Slack water at the (high|low) tide \\((\\d\\d:\\d\\d)\\), about to turn', function (h, t) { return 'ماء راكد عند ذروة ' + HL[h] + ' (' + t + ')، على وشك أن يتحول'; }),
    R('Water moving (into|away from) the (high|low) tide at (\\d\\d:\\d\\d)', function (dir, h, t) { return dir === 'into' ? 'الماء يتحرك نحو ذروة ' + HL[h] + ' عند ' + t : 'الماء يتحرك بعد ذروة ' + HL[h] + ' عند ' + t; }),
    R('Mid-tide, strong current', function () { return 'منتصف المد، تيار قوي'; }),
    R('Major solunar period: moon (overhead|underfoot) at (\\d\\d:\\d\\d)', function (w, t) { return 'فترة قمرية رئيسية: القمر ' + (w === 'overhead' ? 'فوق الرأس' : 'تحت القدمين') + ' عند ' + t; }),
    R('Minor solunar period: moon(rise|set) at (\\d\\d:\\d\\d)', function (w, t) { return 'فترة قمرية ثانوية: ' + (w === 'rise' ? 'شروق القمر' : 'غروب القمر') + ' عند ' + t; }),
    R('(First|Last) light, (sunrise|sunset) (\\d\\d:\\d\\d)', function (f, s, t) { return f === 'First' ? 'أول الضوء، الشروق ' + t : 'آخر الضوء، الغروب ' + t; }),
    R('Pressure (falling slowly|steady|falling fast|rising) \\(([+-]?[\\d.]+) hPa in 6 h\\)', function (w, v) { return 'الضغط ' + { 'falling slowly': 'ينخفض ببطء', steady: 'ثابت', 'falling fast': 'ينخفض بسرعة', rising: 'يرتفع' }[w] + ' (' + (parseFloat(v) < 0 ? 'انخفاض ' : 'ارتفاع ') + Math.abs(parseFloat(v)).toFixed(1) + ' هكتوباسكال خلال 6 ساعات)'; }),
    R('(Light wind|Moderate wind|Windy), (\\d+) kt(?: gusting (\\d+))?', function (w, a, g) { return { 'Light wind': 'رياح خفيفة', 'Moderate wind': 'رياح معتدلة', Windy: 'رياح قوية' }[w] + '، ' + a + ' عقدة' + (g ? ' وهبّات ' + g : ''); }),
    R('Near (full|new) moon, so strong spring tides', function (w) { return (w === 'full' ? 'قرب البدر' : 'قرب المحاق') + '، فالمد في أقواه'; }),
    R('Cloud cover dims the light', function () { return 'الغيوم تخفف الضوء'; }),
    [/^(New moon|Waxing crescent|First quarter|Waxing gibbous|Full moon|Waning gibbous|Last quarter|Waning crescent), (\d+)%$/, function (m, p, n) { return PH[p] + '، ' + n + '%'; }],
    [/^(High|Low) (\d\d:\d\d)$/, function (m, h, t) { return (h === 'High' ? 'مد ' : 'جزر ') + t; }],
    [/^(Rise|Set|Overhead|Underfoot) (\d\d:\d\d)$/, function (m, w, t) { return { Rise: 'شروق ', Set: 'غروب ', Overhead: 'فوق الرأس ', Underfoot: 'تحت القدمين ' }[w] + t; }],
    [/^(\d+) kt$/, '$1 عقدة'],
    [/^(\d\d:\d\d)–(\d\d:\d\d) (\w+)$/, function (m, a, b, dd) { return 'من ' + a + ' إلى ' + b + ' ' + day(dd); }],
    [/^(\d\d)h$/, '$1:00']
  ]);
})();
