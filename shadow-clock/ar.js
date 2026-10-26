(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var CARD = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
  function P(n) { return n === 'your location' ? 'موقعك' : LabAr.t(n); }
  function NS(x) { return x === 'N' ? 'شمالًا' : 'جنوبًا'; }
  function EW(x) { return x === 'E' ? 'شرقًا' : 'غربًا'; }
  var EXTRA_TWICE = 'The Sun is this high twice a day. Add the shadow direction, or say whether the shadow is shrinking or growing, to pick one.';
  function extra(s) {
    if (!s) return '';
    if (s === EXTRA_TWICE) return 'تبلغ الشمس هذا الارتفاع مرتين في اليوم. أضف اتجاه الظل، أو حدد إن كان الظل يقصر أم يطول، لاختيار إحداهما.';
    var m = s.match(/^Matched using the shadow direction\. The Sun at that time is at (\d+)°, you measured (\d+)°\.$/);
    return m ? 'تمت المطابقة باستخدام اتجاه الظل. اتجاه الشمس في ذلك الوقت ' + m[1] + '°، وقد قستَ ' + m[2] + '°.' : s;
  }
  LabAr.add({
    "Shadow Clock": "ساعة الظل",
    "Experiment · Earth · Sun · Navigation": "تجربة · الأرض · الشمس · الملاحة",
    "Shadow clock.": "ساعة الظل.",
    "Stand a straight stick upright in the sun and measure its shadow. From those two numbers you can work out how high the Sun is, roughly what time it is, and even how far north you are. It's how people kept time and found their way long before clocks and GPS.": "اغرس عصا مستقيمة في الشمس وقِس طول ظلها. من هذين الرقمين يمكنك حساب ارتفاع الشمس، والوقت تقريبًا، بل وحتى بُعدك نحو الشمال. هكذا عرف الناس الوقت واهتدوا إلى طريقهم قبل الساعات والـGPS بزمن طويل.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا",
    "Your measurement": "قياسك",
    "Stick height (cm)": "طول العصا (سم)",
    "Shadow length (cm)": "طول الظل (سم)",
    "Shadow direction (° from north, optional)": "اتجاه الظل (درجات من الشمال، اختياري)",
    "e.g. 320": "مثلًا 320",
    "🧭 Read direction from phone": "🧭 اقرأ الاتجاه من الهاتف",
    "Is the shadow getting": "الظل الآن:",
    "shorter (morning)": "يقصر (صباحًا)",
    "longer (afternoon)": "يطول (بعد الظهر)",
    "not sure": "غير متأكد",
    "Stick and shadow": "العصا والظل",
    "What it tells you": "ماذا يخبرك",
    "Clock time of the shortest shadow (UAE time)": "وقت أقصر ظل على الساعة (بتوقيت الإمارات)",
    "Shadow length through the day": "طول الظل على مدار اليوم",
    "Seen from above · where the shadow tip goes today": "من الأعلى · أين يتحرك طرف الظل اليوم",
    "Path of the shadow tip seen from above": "مسار طرف الظل من الأعلى",
    "Each dot is the shadow tip on the hour. The tip moves from west to east during the day, which is the trick behind the shadow-tip method.": "كل نقطة هي طرف الظل عند تمام الساعة. يتحرك الطرف من الغرب إلى الشرق خلال النهار، وهذا هو سر طريقة طرف الظل.",
    "Find east and west: the shadow-tip method": "حدد الشرق والغرب: طريقة طرف الظل",
    "<b>Push a stick upright</b> into flat ground in the sun.": "<b>اغرس عصا عموديًا</b> في أرض مستوية تحت الشمس.",
    "<b>Mark the tip</b> of its shadow with a stone. This first mark is <b>west</b>.": "<b>علّم طرف</b> ظلها بحجر. هذه العلامة الأولى هي <b>الغرب</b>.",
    "<b>Wait 15 to 20 minutes</b> and mark the new tip.": "<b>انتظر 15 إلى 20 دقيقة</b> ثم علّم الطرف الجديد.",
    "<b>Draw a line</b> from the first mark to the second. It points roughly <b>east</b>. Stand with the first mark on your left and the second on your right, and you're facing north.": "<b>ارسم خطًا</b> من العلامة الأولى إلى الثانية، فيشير تقريبًا إلى <b>الشرق</b>. قف والعلامة الأولى على يسارك والثانية على يمينك، فتكون مواجهًا للشمال.",
    "It works because the Sun moves east to west, so the shadow moves west to east. It's most accurate around midday and near the equinoxes. In early morning or late afternoon in summer it can be off by 10° or more. Marking the tip at two times when the shadow has the <b>same length</b>, before and after noon, gives an exact east-west line.": "تنجح الطريقة لأن الشمس تتحرك من الشرق إلى الغرب، فيتحرك الظل من الغرب إلى الشرق. وهي أدق ما تكون حول منتصف النهار وقرب الاعتدالين. أما في الصباح الباكر أو آخر العصر صيفًا فقد يصل الخطأ إلى 10° أو أكثر. وإذا علّمت الطرف في وقتين يكون فيهما الظل <b>بالطول نفسه</b>، قبل الظهر وبعده، تحصل على خط دقيق بين الشرق والغرب.",
    "Before GPS": "قبل الـGPS",
    "The Sun at noon gives your latitude: its height above the horizon depends only on how far you are from the equator and the date. Sailors measured it with a sextant every day at noon. Arab navigators in the Indian Ocean used the same idea at night with stars and a simple wooden <b>kamal</b>, a card on a knotted string. Ahmad ibn Majid, the 15th century master navigator born in Julfar near today's Ras Al Khaimah, wrote guides full of these star heights.": "الشمس عند الظهر تعطيك خط العرض: فارتفاعها فوق الأفق لا يعتمد إلا على بُعدك عن خط الاستواء وعلى التاريخ. كان البحارة يقيسونه بالسدسية كل يوم عند الظهر. واستخدم الملاحون العرب في المحيط الهندي الفكرة نفسها ليلًا مع النجوم وأداة خشبية بسيطة هي <b>الكمال</b>، لوح صغير مربوط بخيط معقود. وقد كتب أحمد بن ماجد، معلّم الملاحة في القرن الخامس عشر المولود في جلفار قرب رأس الخيمة اليوم، أدلة مليئة بارتفاعات هذه النجوم.",
    "Longitude is harder, because it needs an accurate clock. If you know the exact time when the shadow is shortest, the difference from noon at Greenwich tells you how far east you are: 15° for every hour. That's what the clock box above does. Measurements with a stick are usually good to a degree or two, about 100 to 200 km.": "خط الطول أصعب لأنه يحتاج إلى ساعة دقيقة. إذا عرفت الوقت الدقيق لأقصر ظل، فإن الفرق بينه وبين الظهر في غرينتش يخبرك كم أنت شرقًا: 15° لكل ساعة. وهذا ما يفعله حقل الوقت أعلاه. القياسات بالعصا دقيقة عادة في حدود درجة أو درجتين، أي نحو 100 إلى 200 km.",
    "Enter the stick height and shadow length.": "أدخل طول العصا وطول الظل.",
    "Not today": "ليس اليوم",
    "Add the clock time when the shadow was shortest to estimate your longitude too.": "أضف الوقت الذي كان فيه الظل أقصر ما يكون لتقدير خط الطول أيضًا.",
    "Lay the phone flat with its top pointing along the shadow…": "ضع الهاتف مسطحًا وأعلاه متجه على امتداد الظل…",
    "No compass reading. Type the direction instead.": "لا توجد قراءة للبوصلة. اكتب الاتجاه بدلًا من ذلك.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "نطلب موقعك…",
    "Location was not shared. Pick a place instead.": "لم تتم مشاركة الموقع. اختر مكانًا بدلًا من ذلك.",
    "now": "الآن",
    "stick": "العصا",
    "N": "شمال", "E": "شرق", "W": "غرب", "S": "جنوب"
  }, [
    [/^Sun ([\d.]+)° up$/, 'ارتفاع الشمس $1°'],
    [/^The angle whose tangent is height ÷ shadow \(([\d.]+) ÷ ([\d.]+) = ([\d.]+|Infinity)\)\.(?: The Sun is in the ([a-z-]+), opposite the shadow\.)?$/, function (m, h, l, r, c) { return 'الزاوية التي ظلّها يساوي الطول ÷ الظل (' + h + ' ÷ ' + l + ' = ' + (r === 'Infinity' ? '∞' : r) + ').' + (c ? ' الشمس في ' + CARD[c] + '، عكس اتجاه الظل.' : ''); }],
    [/^About (\d\d:\d\d)$/, 'نحو $1'],
    [/^About (\d\d:\d\d) or (\d\d:\d\d)$/, 'نحو $1 أو $2'],
    [/^At (.+) the Sun only reaches ([\d.-]+)° on this date, so a shadow this short can't happen\. Check the measurements, the date or the place\.$/, function (m, n, a) { return 'في ' + P(n) + ' لا يتجاوز ارتفاع الشمس ' + a + '° في هذا التاريخ، لذا لا يمكن أن يكون الظل بهذا القِصَر. راجع القياسات أو التاريخ أو المكان.'; }],
    [/^UAE time, assuming you are near (.+?) on this date\. (.*?) ?Near noon the shadow barely changes, so the estimate there is rough\.$/, function (m, n, x) { var e = extra(x); return 'بتوقيت الإمارات، على افتراض أنك قرب ' + P(n) + ' في هذا التاريخ. ' + (e ? e + ' ' : '') + 'قرب الظهر لا يكاد الظل يتغير، لذا يكون التقدير حينها تقريبيًا.'; }],
    [/^Latitude ([\d.]+)°(N|S)$/, function (m, a, h) { return 'خط العرض ' + a + '° ' + NS(h); }],
    [/^If this was the shortest shadow of the day: latitude = Sun's declination \(([\d.-]+)° on this date\) ([+−]) \(90° − ([\d.]+)°\)\. (.+) is at ([\d.-]+)°N\. At noon today the shadow of this stick would be ([\d.]+) cm, at (\d\d:\d\d)\.$/, function (m, d, s, a, n, la, l, t) { return 'إذا كان هذا أقصر ظل في اليوم: خط العرض = ميل الشمس (' + d + '° في هذا التاريخ) ' + s + ' (90° − ' + a + '°). يقع ' + P(n) + ' على ' + la + '° شمالًا. وعند ظهر اليوم سيكون ظل هذه العصا ' + l + ' سم، في الساعة ' + t + '.'; }],
    [/^Longitude ([\d.]+)°(E|W) \((.+) is at ([\d.-]+)°E\)\. Each minute off on the clock moves this by 0\.25°, about 25 km\.$/, function (m, a, h, n, lo) { return 'خط الطول ' + a + '° ' + EW(h) + ' (يقع ' + P(n) + ' على ' + lo + '° شرقًا). كل دقيقة خطأ في الساعة تغيّر النتيجة 0.25°، أي نحو 25 km.'; }],
    [/^Add the clock time when the shadow was shortest to estimate your longitude too\. Here it should be about (\d\d:\d\d)\.$/, 'أضف الوقت الذي كان فيه الظل أقصر ما يكون لتقدير خط الطول أيضًا. يُفترض أن يكون هنا نحو $1.'],
    [/^([\d.]+) cm shadow$/, 'ظل $1 سم'],
    [/^\? cm shadow$/, 'ظل ? سم'],
    [/^Shadow of a ([\d.]+) cm stick on (\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) at (.+)$/, function (m, s, d, mo, n) { return 'ظل عصا طولها ' + s + ' سم يوم ' + d + ' ' + MO[mo] + ' في ' + P(n); }],
    [/^noon (\d\d:\d\d)$/, 'الظهر $1'],
    [/^Shortest at (\d\d:\d\d): ([\d.]+) cm, with the Sun ([\d.]+)° up\. Times are UAE time\. The shadow is longer than the stick whenever the Sun is below 45°\.$/, 'أقصر ظل الساعة $1: $2 سم، وارتفاع الشمس $3°. الأوقات بتوقيت الإمارات. يكون الظل أطول من العصا كلما كانت الشمس تحت 45°.'],
    [/^Read (\d+)°\. Tap again to update\.$/, 'القراءة $1°. اضغط مجددًا للتحديث.'],
    [/^(.+) · ([\d.-]+)°N, ([\d.-]+)°E$/, function (m, n, a, b) { return P(n) + ' · ' + a + '° شمالًا، ' + b + '° شرقًا'; }],
    [/^Your location · ([\d.-]+)°, ([\d.-]+)° · times still shown in UAE time$/, 'موقعك · $1°، $2° · الأوقات ما زالت بتوقيت الإمارات'],
    [/^.*[\u0600-\u06FF\u2066-\u2069].*$/, '$&']
  ]);
})();
