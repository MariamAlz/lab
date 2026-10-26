(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MALL = {
    'The Dubai Mall': 'دبي مول', 'Mall of the Emirates': 'مول الإمارات', 'Ibn Battuta Mall': 'ابن بطوطة مول', 'Dubai Marina Mall': 'دبي مارينا مول', 'Dubai Hills Mall': 'دبي هيلز مول',
    'Dubai Festival City Mall': 'دبي فستيفال سيتي مول', 'City Centre Deira': 'سيتي سنتر ديرة', 'City Centre Mirdif': 'سيتي سنتر مردف', 'BurJuman': 'برجمان', 'Wafi': 'وافي', 'Nakheel Mall': 'نخيل مول',
    'Dragon Mart': 'دراغون مارت', 'Yas Mall': 'ياس مول', 'The Galleria Al Maryah Island': 'الغاليريا جزيرة الماريه', 'Abu Dhabi Mall': 'أبوظبي مول', 'Marina Mall Abu Dhabi': 'مارينا مول أبوظبي',
    'Al Wahda Mall': 'الوحدة مول', 'Reem Mall': 'ريم مول', 'Dalma Mall': 'دلما مول', 'Al Ain Mall': 'العين مول', 'City Centre Sharjah': 'سيتي سنتر الشارقة', 'Sahara Centre': 'صحارى سنتر',
    'City Centre Al Zahia': 'سيتي سنتر الزاهية', 'City Centre Ajman': 'سيتي سنتر عجمان', 'Manar Mall': 'المنار مول', 'City Centre Fujairah': 'سيتي سنتر الفجيرة'
  };
  var TIP = {
    'Four separate car parks: Grand, Cinema, Fashion and Zabeel. Note which one, the level and the zone letter. Walking between them inside the mall can take 10 minutes or more.': 'أربعة مواقف منفصلة: جراند، والسينما، والأزياء، وزعبيل. سجّل أيّها، والطابق، وحرف المنطقة. قد يستغرق المشي بينها داخل المول 10 دقائق أو أكثر.',
    'The car park wraps around the mall. Note the level, the zone and the nearest entrance, for example the Ski Dubai end or the hotel end.': 'يلتفّ الموقف حول المول. سجّل الطابق والمنطقة وأقرب مدخل، مثل جهة سكي دبي أو جهة الفندق.',
    'The mall is a long row of six themed courts, over a kilometre end to end. Parking is named by the nearest court, so remember China, Persia, India, Egypt, Tunisia or Andalusia.': 'المول صفّ طويل من ستة أجنحة ذات طابع خاص، يزيد طوله على كيلومتر. تُسمّى المواقف باسم أقرب جناح، فتذكّر: الصين، أو بلاد فارس، أو الهند، أو مصر، أو تونس، أو الأندلس.',
    'Underground levels look alike. Snap the pillar sign by the lift you used.': 'الطوابق السفلية متشابهة. صوّر لافتة العمود قرب المصعد الذي استخدمته.',
    'Note the level and zone, plus the entrance you walked into the mall from.': 'سجّل الطابق والمنطقة، والمدخل الذي دخلت منه إلى المول.',
    'A long mall with car parks at both ends. Note whether you parked by IKEA or by the waterfront end.': 'مول طويل بمواقف عند طرفيه. سجّل إن كنت ركنت قرب ايكيا أو عند جهة الواجهة المائية.',
    'Several car park levels with colour codes. Note the colour, level and nearest entrance.': 'عدة طوابق للمواقف مميّزة بالألوان. سجّل اللون والطابق وأقرب مدخل.',
    'Note the level and colour zone, and the entrance (Carrefour end or the entertainment end).': 'سجّل الطابق ومنطقة اللون والمدخل (جهة كارفور أو جهة الترفيه).',
    'Note the level and whether you parked in the older or newer car park.': 'سجّل الطابق، وهل ركنت في الموقف القديم أم الجديد.',
    'Basement parking spreads under several buildings. A photo of the pillar sign helps most.': 'تمتد المواقف السفلية تحت عدة مبانٍ. صورة لافتة العمود هي أكثر ما يساعد.',
    'Underground car park. Note the level and the lift lobby.': 'موقف تحت الأرض. سجّل الطابق وردهة المصاعد.',
    'Very long buildings with open lots outside. Note the gate number nearest your car.': 'مبانٍ طويلة جدًا ومواقف مكشوفة في الخارج. سجّل رقم أقرب بوابة إلى سيارتك.',
    'Big multi-level car parks on several sides. Note the level, zone and the entrance, such as the Ferrari World side or the IKEA side.': 'مواقف كبيرة متعددة الطوابق على عدة جهات. سجّل الطابق والمنطقة والمدخل، مثل جهة عالم فيراري أو جهة ايكيا.',
    'Underground parking under each wing. Note the level and the wing.': 'مواقف تحت الأرض أسفل كل جناح. سجّل الطابق والجناح.',
    'Note the level and colour zone by the lift.': 'سجّل الطابق ومنطقة اللون قرب المصعد.',
    'Note the level and whether you parked on the corniche side.': 'سجّل الطابق، وهل ركنت في جهة الكورنيش.',
    'Note the level and the colour zone.': 'سجّل الطابق ومنطقة اللون.',
    'Note the level, zone and the entrance you used.': 'سجّل الطابق والمنطقة والمدخل الذي استخدمته.',
    'Large car park. Note the zone and the entrance number.': 'موقف كبير. سجّل المنطقة ورقم المدخل.',
    'Note the level and entrance.': 'سجّل الطابق والمدخل.',
    'Note the level and colour zone.': 'سجّل الطابق ومنطقة اللون.',
    'Big multi-storey car park. Note the level, the colour and the entrance.': 'موقف كبير متعدد الطوابق. سجّل الطابق واللون والمدخل.',
    'Note the level and zone.': 'سجّل الطابق والمنطقة.',
    'Note the level and the nearest entrance.': 'سجّل الطابق وأقرب مدخل.',
    'Note which side of the mall you parked.': 'سجّل في أي جهة من المول ركنت.',
    'Note the level and the entrance.': 'سجّل الطابق والمدخل.'
  };
  var ZONE = { Grand: 'جراند', Cinema: 'السينما', Fashion: 'الأزياء', Zabeel: 'زعبيل', China: 'الصين', Persia: 'بلاد فارس', India: 'الهند', Egypt: 'مصر', Tunisia: 'تونس', Andalusia: 'الأندلس' };
  var COL = { Red: 'أحمر', Orange: 'برتقالي', Yellow: 'أصفر', Green: 'أخضر', Blue: 'أزرق', Purple: 'بنفسجي', Pink: 'وردي', White: 'أبيض', Grey: 'رمادي' };
  var DIR = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
  function z(v) { return ZONE[v] || COL[v] || (v === 'Roof' ? 'السطح' : v); }
  function T(s) { var m = s.match(/^(\w{3}) (\d{1,2}) (\w{3}), (\d\d:\d\d)$/); return m ? WD[m[1]] + ' ' + m[2] + ' ' + MON[m[3]] + '، ' + m[4] : s; }
  var FT = '(\\w{3} \\d{1,2} \\w{3}, \\d\\d:\\d\\d)';
  function n(k, one, few) { k = +k; return k + ' ' + (k >= 3 && k <= 10 ? few : one); }
  function dist(s) { var m; if ((m = s.match(/^([\d.]+) m$/))) return m[1] + ' م'; if ((m = s.match(/^([\d.]+) km$/))) return m[1] + ' كم'; return s; }
  function bit(b) {
    var m;
    if ((m = b.match(/^Level (.+)$/))) return 'الطابق ' + z(m[1]);
    if ((m = b.match(/^Zone (.+)$/))) return 'المنطقة ' + z(m[1]);
    if ((m = b.match(/^(\d+) steps$/))) return n(m[1], 'خطوة', 'خطوات');
    if (/^\w{3} \d{1,2} \w{3}, \d\d:\d\d$/.test(b)) return T(b);
    return z(b);
  }
  var d = {
    "Find my car.": "أين سيارتي؟",
    "Find My Car": "أين سيارتي؟",
    "Tool · Car · UAE": "أداة · السيارة · الإمارات",
    "Tap once when you park. It saves your position, the time and a photo, and asks for the level when you're underground. It knows the big UAE malls and their car parks, counts your steps on the way out, and points you back. It can also remind you before paid parking runs out.":
      "اضغط مرة واحدة حين تركن. تحفظ الأداة موقعك والوقت وصورة، وتسألك عن الطابق حين تكون تحت الأرض. تعرف المولات الكبيرة في الإمارات ومواقفها، وتعدّ خطواتك وأنت تبتعد، وترشدك للعودة. ويمكنها أيضًا تذكيرك قبل انتهاء وقت الموقف المدفوع.",
    "🚗 I parked here": "🚗 ركنت هنا",
    "Saves GPS, time and level. Add a photo after.": "تحفظ الموقع والوقت والطابق. أضف صورة بعدها.",
    "Count my steps as I walk away": "عُدّ خطواتي وأنا أبتعد",
    "This spot": "هذا الموقف",
    "Level": "الطابق",
    "Zone or car park": "المنطقة أو الموقف",
    "Colour on the sign": "اللون على اللافتة",
    "Pillar or bay": "العمود أو الموقف",
    "Note": "ملاحظة",
    "e.g. C14": "مثلًا C14",
    "near the lifts…": "قرب المصاعد…",
    "Pillar letter": "حرف العمود",
    "📷 Add a photo": "📷 أضف صورة",
    "📍 Retry GPS": "📍 أعد محاولة تحديد الموقع",
    "⏹ Stop step count": "⏹ أوقف عدّ الخطوات",
    "Photo of where you parked": "صورة مكان ركن سيارتك",
    "Get back to the car": "العودة إلى السيارة",
    "Nothing saved yet. Tap \"I parked here\" when you park.": "لم يُحفظ شيء بعد. اضغط «ركنت هنا» حين تركن.",
    "🧭 Guide me back": "🧭 أرشدني للعودة",
    "⏹ Stop guiding": "⏹ أوقف الإرشاد",
    "Photo of the parking spot": "صورة الموقف",
    "Your walk from the car": "مشيك من السيارة",
    "Step trail map": "خريطة أثر الخطوات",
    "Open in maps ↗": "افتح في الخرائط ↗",
    "✓ Found it": "✓ وجدتها",
    "Paid parking timer": "مؤقّت الموقف المدفوع",
    "Remind me": "ذكّرني",
    "5 min before": "قبل 5 دقائق", "10 min before": "قبل 10 دقائق", "15 min before": "قبل 15 دقيقة", "20 min before": "قبل 20 دقيقة",
    "Start timer": "ابدأ المؤقّت",
    "The reminder only works while this page stays open in a tab. For a lock-screen alarm, also set one in your phone's clock app.": "لا يعمل التذكير إلا والصفحة مفتوحة في علامة تبويب. لتنبيه يظهر على شاشة القفل، اضبط منبّهًا أيضًا في تطبيق الساعة في هاتفك.",
    "+30 min": "+30 دقيقة",
    "Pay by SMS": "الدفع عبر الرسائل النصية",
    "Emirate": "الإمارة",
    "Dubai (7275)": "دبي (7275)", "Abu Dhabi (3009)": "أبوظبي (3009)", "Sharjah (5566)": "الشارقة (5566)",
    "Zone code on the sign": "رمز المنطقة على اللافتة",
    "e.g. 365C": "مثلًا 365C",
    "Plate (stays on this phone)": "رقم اللوحة (يبقى على هذا الهاتف)",
    "e.g. A 12345": "مثلًا A 12345",
    "Open SMS app": "افتح تطبيق الرسائل",
    "Dubai · 7275": "دبي · 7275", "Abu Dhabi · 3009": "أبوظبي · 3009", "Sharjah · 5566": "الشارقة · 5566",
    "<code>plate zone hours</code>, e.g. <code>A12345 365C 2</code>. Plates from other emirates add the emirate first.": "<code>plate zone hours</code> (اللوحة، المنطقة، الساعات)، مثلًا <code>A12345 365C 2</code>. لوحات الإمارات الأخرى تضيف اسم الإمارة أولًا.",
    "<code>plate zone hours</code> with the plate details as on the sign's example.": "<code>plate zone hours</code> مع بيانات اللوحة كما في المثال على اللافتة.",
    "<code>plate hours</code> or <code>plate zone hours</code>, as shown on the meter.": "<code>plate hours</code> أو <code>plate zone hours</code>، كما هو موضّح على العدّاد.",
    "Info only. Formats change, so follow the example printed on the parking sign or meter. A small SMS fee applies, and you get a reply before expiry with an option to extend.": "للعلم فقط. الصيغ تتغيّر، فاتبع المثال المطبوع على لافتة الموقف أو العدّاد. تُطبَّق رسوم بسيطة على الرسالة، وتصلك رسالة قبل انتهاء الوقت مع خيار التمديد.",
    "Last 10 spots": "آخر 10 مواقف",
    "<b>Why GPS fails underground.</b> Satellite signals are weak, about the strength of a car headlight seen from 20,000 km away. Concrete blocks them, so in a basement your phone guesses from Wi-Fi and the last fix, and the accuracy circle grows past 50 metres. That's the cue this page uses to ask for your level.":
      "<b>لماذا يتعطّل GPS تحت الأرض.</b> إشارات الأقمار الصناعية ضعيفة، بقوة مصباح سيارة يُرى من مسافة 20,000 km تقريبًا. والخرسانة تحجبها، لذا يخمّن هاتفك في الطوابق السفلية موقعه من شبكات Wi-Fi وآخر تحديد للموقع، فتتّسع دائرة الدقة إلى ما يزيد على 50 مترًا. وهذه هي العلامة التي تعتمدها الصفحة لتسألك عن الطابق.",
    "<b>Step counting</b> uses the phone's accelerometer to spot each footfall and the compass for direction. Each step is taken as about 70 cm. Errors add up, and steel beams can bend the compass, so treat the trail as a rough shape, not a map. Your photo of the pillar sign is the most reliable clue.":
      "<b>عدّ الخطوات</b> يستخدم مقياس التسارع في الهاتف لرصد كل خطوة، والبوصلة لمعرفة الاتجاه. تُحسب الخطوة نحو 70 cm. الأخطاء تتراكم، والعوارض الفولاذية قد تحرف البوصلة، فتعامل مع الأثر على أنه شكل تقريبي لا خريطة. صورتك للافتة العمود هي أوثق دليل.",
    "Everything stays on this phone: spots in local storage, photos in the browser's own database. Nothing is uploaded.": "كل شيء يبقى على هذا الهاتف: المواقف في التخزين المحلي، والصور في قاعدة بيانات المتصفح نفسه. لا يُرفع أي شيء.",
    "No GPS yet": "لا يوجد GPS بعد",
    "GPS ±": "GPS ±",
    "Probably indoors or underground": "على الأرجح داخل مبنى أو تحت الأرض",
    "Which level are you on?": "في أي طابق أنت؟",
    "tap a letter, then type the number": "اضغط حرفًا ثم اكتب الرقم",
    "Place": "المكان", "Zone": "المنطقة", "Colour": "اللون", "Pillar": "العمود",
    "you stopped": "توقّفت هنا",
    "Look for your car.": "ابحث عن سيارتك.",
    "No GPS": "لا يوجد GPS",
    "Here": "هنا",
    "No position was saved, so use the photo, level and step trail.": "لم يُحفظ موقع، فاستعن بالصورة والطابق وأثر الخطوات.",
    "Waiting for GPS…": "في انتظار GPS…",
    "Can't get your position. Use the photo, level and trail.": "تعذّر تحديد موقعك. استعن بالصورة والطابق والأثر.",
    "Marked as found. Safe drive.": "تم التعليم كموجودة. قيادة آمنة.",
    "Your last 10 spots will show here.": "ستظهر هنا آخر 10 مواقف.",
    "current": "الحالي",
    "Use": "استخدم",
    "1 h": "ساعة", "2 h": "ساعتان", "3 h": "3 ساعات", "4 h": "4 ساعات",
    "Expired": "انتهى",
    "Paid parking has run out.": "انتهى وقت الموقف المدفوع.",
    "Saved the time. Getting your position…": "تم حفظ الوقت. جارٍ تحديد موقعك…",
    "Getting your position…": "جارٍ تحديد موقعك…",
    "No GPS in this browser. Add the level and a photo.": "لا يوجد GPS في هذا المتصفح. أضف الطابق وصورة.",
    "No GPS fix. You're probably underground. Pick the level and take a photo of the pillar sign.": "تعذّر تحديد الموقع. على الأرجح أنت تحت الأرض. اختر الطابق والتقط صورة للافتة العمود.",
    "Shrinking the photo…": "جارٍ تصغير الصورة…",
    "Couldn't save the photo in this browser.": "تعذّر حفظ الصورة في هذا المتصفح.",
    "Counting steps. Walk normally with the phone in hand.": "جارٍ عدّ الخطوات. امشِ بشكل طبيعي والهاتف في يدك.",
    "No motion sensor here, so no step trail.": "لا يوجد مستشعر حركة هنا، لذا لن يُسجَّل أثر للخطوات.",
    "Roof": "السطح",
    "B3": "B3", "B2": "B2", "B1": "B1", "G": "G", "P1": "P1", "P2": "P2", "P3": "P3", "P4": "P4", "P5": "P5",
    "A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F", "H": "H"
  };
  [MALL, TIP, ZONE, COL].forEach(function (o) { for (var k in o) d[k] = o[k]; });
  LabAr.add(d, [
    [new RegExp('^' + FT + '$'), function (m, t) { return T(t); }],
    [/^(\d+) m$/, '$1 م'],
    [/^([\d.]+) km$/, '$1 كم'],
    [/^Looks like (.+)$/, function (m, n) { return 'يبدو أنه ' + (MALL[n] || n); }],
    [/^(\d+) steps counted$/, function (m, k) { return 'تم عدّ ' + n(k, 'خطوة', 'خطوات'); }],
    [/^(\d+) steps saved$/, function (m, k) { return 'تم حفظ ' + n(k, 'خطوة', 'خطوات'); }],
    [/^(\d+) steps$/, function (m, k) { return n(k, 'خطوة', 'خطوات'); }],
    [/^N ↑ · (\d+) m across$/, '\u2067ش ↑ · العرض $1 م\u2069'],
    [/^(?:Face ([a-z-]+)|Walk back) and walk about$/, function (m, dir) { return (dir ? 'اتجه نحو ' + (DIR[dir] || dir) : 'عُد') + ' وامشِ نحو'; }],
    [/^\((\d+) m\)$/, '($1 م)'],
    [/^Look for (.+)\.$/, function (m, s) { return 'ابحث عن ' + s.split(', ').map(function (b) { var x; if ((x = b.match(/^level (.+)$/))) return 'الطابق ' + z(x[1]); if ((x = b.match(/^zone (.+)$/))) return 'المنطقة ' + z(x[1]); if ((x = b.match(/^pillar (.+)$/))) return 'العمود ' + x[1]; return z(b); }).join('، ') + '.'; }],
    [/^Level (.+)$/, function (m, l) { return 'الطابق ' + z(l); }],
    [/^(?:(You're within a few metres\.)|Head ([a-z-]+)\. (Arrow follows your phone\.|Arrow shows north-up \(no compass\)\.)) GPS ±(\d+) m\.( GPS is weak here, so trust the level, photo and trail below\.)?$/, function (m, near, dir, arrow, acc, weak) {
      return (near ? 'أنت على بُعد أمتار قليلة. ' : 'اتجه نحو ' + (DIR[dir] || dir) + '. ' + (/follows/.test(arrow) ? 'السهم يتبع اتجاه هاتفك. ' : 'السهم يشير إلى الشمال في الأعلى (لا توجد بوصلة). ')) + 'دقة GPS ±' + acc + ' م.' + (weak ? ' إشارة GPS ضعيفة هنا، فاعتمد على الطابق والصورة والأثر أدناه.' : ''); }],
    [/^Position saved, but GPS is weak \(±(\d+) m\)\. You're probably indoors or underground\.$/, 'تم حفظ الموقع، لكن إشارة GPS ضعيفة (±$1 م). على الأرجح أنت داخل مبنى أو تحت الأرض.'],
    [/^Position saved \(±(\d+) m\)\.$/, 'تم حفظ الموقع (±$1 م).'],
    [/^Photo saved on this phone \((\d+) KB\)\.$/, 'تم حفظ الصورة على هذا الهاتف ($1 KB).'],
    [/^-?\d+\.\d{4}, -?\d+\.\d{4}$/, function (m) { return m; }],
    [new RegExp('^' + FT + '( · .+)?$'), function (m, t, rest) { return T(t) + (rest ? rest.slice(3).split(' · ').map(function (b) { return ' · ' + bit(b); }).join('') : ''); }],
    [/^Ends at (\d\d:\d\d) · reminder (\d+) min before$/, function (m, t, k) { return 'ينتهي الساعة ' + t + ' · التذكير قبل ' + n(k, 'دقيقة', 'دقائق'); }],
    [/^Parking ends in (\d+) min\. Extend by SMS or head back\.$/, function (m, k) { return 'ينتهي وقت الموقف بعد ' + n(k, 'دقيقة', 'دقائق') + '. مدّده برسالة نصية أو عُد إلى سيارتك.'; }],
    [/^Text (\d+): (.+)$/, 'أرسل إلى $1: \u2066$2\u2069'],
    [new RegExp('^Tap again to save a new spot\\. Current: ' + FT + '$'), function (m, t) { return 'اضغط مرة أخرى لحفظ موقف جديد. الحالي: ' + T(t); }]
  ]);
  // the compass letters (N, E, S, W) would clash with the zone letters, so set them here; this file only loads in Arabic
  function ring() { var t = document.querySelectorAll('#ring text'), a = ['ش', 'ق', 'ج', 'غ']; for (var i = 0; i < t.length && i < 4; i++) t[i].textContent = a[i]; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ring); else ring();
})();
