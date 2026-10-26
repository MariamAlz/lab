(function () {
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Sept: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var CITY = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ajman': 'عجمان', 'Umm Al Quwain': 'أم القيوين', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'your location': 'موقعك' };
  var T = '(\\d{1,2}:\\d\\d (?:am|pm))';
  function t(s) { return s.replace(/(\d{1,2}:\d\d) am/g, '$1 ص').replace(/(\d{1,2}:\d\d) pm/g, '$1 م'); }
  function date(s) { return s.replace(/^(?:(\w{3}),? )?(\d+) (\w+) (\d{4})$/, function (m, w, d, mo, y) { return (w ? WD[w] + '، ' : '') + d + ' ' + MO[mo] + ' ' + y; }); }
  var LBL = {
    'Suhoor, then Fajr prayer': 'السحور ثم صلاة الفجر', 'Get ready': 'الاستعداد', 'Commute': 'الطريق إلى العمل', 'Work': 'العمل', 'Commute home': 'العودة إلى البيت',
    'Dhuhr prayer': 'صلاة الظهر', 'Asr prayer': 'صلاة العصر', 'Iftar and Maghrib': 'الإفطار وصلاة المغرب', 'Isha and Taraweeh': 'العشاء والتراويح', 'Isha prayer': 'صلاة العشاء'
  };
  var d = {
    "Ramadan Sleep Planner": "مخطط النوم في رمضان",
    "Tool · Ramadan · Sleep · UAE": "أداة · رمضان · نوم · الإمارات",
    "Ramadan sleep planner.": "مخطط النوم في رمضان.",
    "In Ramadan, sleep gets cut in two by suhoor and Fajr, and the evening fills up with iftar and Taraweeh. Waking in the middle of a sleep cycle is what leaves you groggy. This fits whole 90-minute cycles around your prayer times, work and commute, as one core block plus naps.": "في رمضان ينقسم النوم إلى قسمين بسبب السحور والفجر، ويمتلئ المساء بالإفطار والتراويح. الاستيقاظ في منتصف دورة النوم هو ما يتركك مثقلًا. تُرتّب هذه الأداة دورات كاملة مدتها 90 دقيقة حول أوقات صلاتك وعملك وطريقك، في فترة نوم رئيسية مع قيلولات.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Day of Ramadan": "يوم رمضان",
    "Calculation method": "طريقة الحساب",
    "UAE, 18.2°": "الإمارات، 18.2\u200E°\u200E", "Umm al-Qura": "أم القرى",
    "Your day": "يومك",
    "Suhoor at": "السحور الساعة", "Work starts": "بداية العمل", "Work ends": "نهاية العمل",
    "Commute each way (min)": "الطريق في كل اتجاه (دقيقة)",
    "Getting ready before leaving (min)": "الاستعداد قبل الخروج (دقيقة)",
    "Taraweeh at the mosque": "التراويح في المسجد",
    "Sleep goal": "هدف النوم",
    "4 cycles (6 h)": "4 دورات (6 ساعات)", "5 cycles (7.5 h)": "5 دورات (7.5 ساعات)", "6 cycles (9 h)": "6 دورات (9 ساعات)",
    "total sleep": "مجموع النوم", "full cycles": "دورات كاملة", "main bedtime": "موعد النوم الرئيسي",
    "24-hour plan": "خطة الأربع والعشرين ساعة",
    "Sleep": "النوم", "Work": "العمل", "Commute and getting ready": "الطريق والاستعداد", "Meals and prayer": "الوجبات والصلاة",
    "Your plan for the day": "خطتك لليوم",
    "Tips": "نصائح",
    "Sleep runs in cycles of roughly 90 minutes, from light sleep to deep sleep to dreaming and back. Waking at the end of a cycle feels far easier than waking from deep sleep. Cycle length varies from about 80 to 110 minutes between people, so treat 90 as a starting point and adjust by 10 minutes if you wake groggy.": "يسير النوم في دورات مدة كل منها نحو 90 دقيقة، من النوم الخفيف إلى العميق إلى الأحلام ثم العودة. الاستيقاظ في نهاية الدورة أسهل بكثير من الاستيقاظ من النوم العميق. يختلف طول الدورة بين الناس من نحو 80 إلى 110 دقائق، لذا اعتبر 90 نقطة بداية، وعدّلها بمقدار 10 دقائق إذا استيقظت مثقلًا.",
    "Prayer times use the UAE method by default (Fajr and Isha when the sun is 18.2° below the horizon, Maghrib at sunset). Umm al-Qura uses 18.5° for Fajr and puts Isha 90 minutes after Maghrib, or 2 hours in Ramadan. They are calculated, not taken from an official timetable, and can differ by a few minutes from your mosque or the official UAE app. Ramadan dates use the Umm al-Qura calendar in your browser; in the UAE the start is confirmed by moon sighting. This is a planning aid, not medical advice. If you have diabetes or another condition, check fasting and sleep plans with your doctor.": "تعتمد أوقات الصلاة افتراضيًا طريقة الإمارات (الفجر والعشاء عندما تكون الشمس 18.2\u200E°\u200E تحت الأفق، والمغرب عند الغروب). أما أم القرى فتعتمد 18.5\u200E°\u200E للفجر وتجعل العشاء بعد المغرب بـ90 دقيقة، أو بساعتين في رمضان. الأوقات محسوبة وليست مأخوذة من تقويم رسمي، وقد تختلف ببضع دقائق عن مسجدك أو عن التطبيق الرسمي في الإمارات. تواريخ رمضان من تقويم أم القرى في متصفحك؛ وفي الإمارات تُعتمد البداية برؤية الهلال. هذه أداة للتخطيط وليست نصيحة طبية. إذا كنت مصابًا بالسكري أو بحالة صحية أخرى، فراجع خطط الصيام والنوم مع طبيبك.",
    "Fajr (fast begins)": "الفجر (بدء الصيام)", "Dhuhr": "الظهر", "Asr": "العصر", "Maghrib (iftar)": "المغرب (الإفطار)", "Isha": "العشاء",
    "of sleep": "من النوم", "F": "ف", "M": "م",
    "Keep both sleep blocks at the same times every day. Your body adapts to a split pattern within a week or so if it's regular.": "حافظ على فترتي النوم في الأوقات نفسها كل يوم. يتكيّف جسمك مع النوم المقسّم خلال أسبوع تقريبًا إذا كان منتظمًا.",
    "For sleep after Fajr, use blackout curtains or an eye mask. Morning light is the strongest signal that tells your body it's daytime.": "للنوم بعد الفجر، استخدم ستائر معتمة أو قناعًا للعينين. ضوء الصباح أقوى إشارة تُخبر جسمك أن الوقت نهار.",
    "Spread water between iftar and suhoor, about 2 to 3 litres in small amounts, rather than a lot at once before bed.": "وزّع شرب الماء بين الإفطار والسحور، نحو 2 إلى 3 لترات على دفعات صغيرة، بدلًا من كمية كبيرة دفعة واحدة قبل النوم.",
    "Have your last coffee or karak before Taraweeh. Caffeine lasts 5 to 6 hours in the body.": "اجعل آخر قهوة أو كرك قبل التراويح. يبقى الكافيين في الجسم 5 إلى 6 ساعات.",
    "Eat a lighter suhoor with slow carbs, protein and some salt, and avoid lying down straight after a heavy iftar.": "تناول سحورًا أخف فيه نشويات بطيئة الهضم وبروتين وقليل من الملح، وتجنّب الاستلقاء مباشرة بعد إفطار ثقيل.",
    "Under 6 hours a day makes driving riskier, especially on the way home before iftar. Pull over if you feel drowsy.": "النوم أقل من 6 ساعات يوميًا يجعل القيادة أخطر، خاصة في طريق العودة قبل الإفطار. توقّف جانبًا إذا شعرت بالنعاس.",
    "Your browser can't show the Hijri calendar, so times are for today.": "متصفحك لا يعرض التقويم الهجري، لذا الأوقات لليوم.",
    "Location not available. Pick an emirate instead.": "الموقع غير متاح. اختر إمارة بدلًا من ذلك."
  };
  for (var k in LBL) d[k] = LBL[k];
  LabAr.add(d, [
    [new RegExp('^' + T + '$'), t],
    [new RegExp('^until ' + T + '$'), function (m, a) { return 'حتى ' + t(a); }],
    [/^(\d+)h(?: (\d\d))?$/, function (m, h, mm) { return h + ' س' + (mm ? ' ' + mm + ' د' : ''); }],
    [/^(\d+) of (\d+)$/, '$1/$2'],
    [/^(\d+)([ap])$/, function (m, h, a) { return h + (a === 'a' ? 'ص' : 'م'); }],
    [/^(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),? )?\d+ \w+ \d{4}$/, date],
    [/^In bed\. (Power nap, 20 minutes|(Core sleep|Second sleep block), (\d+) cycles?)$/, function (m, a, b, n) { return 'في السرير. ' + (b ? (b === 'Core sleep' ? 'النوم الرئيسي' : 'فترة نوم ثانية') + '، ' + n + ' ' + (n === '1' ? 'دورة' : 'دورات') : 'قيلولة قصيرة، 20 دقيقة'); }],
    [new RegExp('^asleep about ' + T + ', alarm ' + T + '$'), function (m, a, b) { return 'النوم نحو ' + t(a) + '، والمنبّه ' + t(b); }],
    [/^Your day only fits (\d+) full cycles?\. A shorter commute, eating suhoor closer to bedtime, or praying Taraweeh at home some nights would free up another one\.$/, 'يومك يتسع لـ$1 دورة كاملة فقط. طريق أقصر، أو سحور أقرب إلى موعد النوم، أو صلاة التراويح في البيت بعض الليالي قد يوفّر دورة أخرى.'],
    [/^Ramadan (\d+) AH$/, 'رمضان $1 هـ'],
    [/^runs about (\d+ \w+ \d{4}) to (\d+ \w+ \d{4}) \(Umm al-Qura calendar\)\. Times for (.+)\.$/, function (m, a, b, c) { return 'يمتد تقريبًا من ' + date(a) + ' إلى ' + date(b) + ' (تقويم أم القرى). الأوقات لـ' + (CITY[c] || c) + '.'; }]
  ]);
})();
