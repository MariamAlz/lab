(function () {
  var WORD = { 'In the shade': 'في الظل', 'Partly shaded': 'مظللة جزئيًا', 'In direct sun': 'تحت الشمس مباشرة', 'Sun is down': 'الشمس غائبة' };
  var LOW = {}; for (var k in WORD) LOW[k.toLowerCase()] = WORD[k];
  var TIME = '(\\d{1,2}(?::\\d\\d)?\\s?(?:AM|PM|am|pm|a\\.m\\.|p\\.m\\.)?)';
  function t(s) { var m = s.match(/^(\d{1,2}(?::\d\d)?)\s?(AM|PM|am|pm|a\.m\.|p\.m\.)?$/); return m ? m[1] + (m[2] ? (/^a/i.test(m[2]) ? ' ص' : ' م') : '') : s; }
  function hrs(s) { return s.replace(/(\d+)h/, '$1س').replace(/(\d+)m/, '$1د'); }
  LabAr.add({
    "Car in the Shade?": "هل سيارتي في الظل؟",
    "Tool · Outdoors · Sun · Maps": "أداة · في الخارج · الشمس · خرائط",
    "Will my car be in the shade?": "هل ستبقى سيارتي في الظل؟",
    "You found a shady spot at 9 am. By noon the shadow has moved and your steering wheel is too hot to touch. Mark where you parked and this shows, for every 10 minutes of today, whether the spot is in the shadow of a building or a tree, and when that changes.": "وجدت موقفًا مظللًا الساعة 9 صباحًا، وبحلول الظهر تحرك الظل وصار المقود أسخن من أن يُلمس. حدّد مكان وقوفك وستعرض لك هذه الأداة، لكل 10 دقائق من اليوم، هل الموقف في ظل مبنى أو شجرة، ومتى يتغير ذلك.",
    "📍 I'm at my car": "📍 أنا عند سيارتي",
    "Try Downtown Dubai": "جرّب وسط مدينة دبي",
    "Count trees": "احسب الأشجار",
    "Map. Tap where you parked.": "خريطة. اضغط على مكان وقوفك.",
    "Shadows on the map at": "الظلال على الخريطة الساعة",
    "Tap the map where you parked.": "اضغط على الخريطة حيث أوقفت سيارتك.",
    "Your spot": "موقفك",
    "Tap the map": "اضغط على الخريطة",
    "Mark the parking spot to see today's shade.": "حدّد الموقف لترى ظل اليوم.",
    "in shade today": "في الظل اليوم",
    "in direct sun": "تحت الشمس مباشرة",
    "next change": "التغيير التالي",
    "Today, every 10 minutes": "اليوم، كل 10 دقائق",
    "Shade timeline for today": "الخط الزمني للظل اليوم",
    "12am": "12 ص", "6am": "6 ص", "12pm": "12 م", "6pm": "6 م",
    "Shade": "ظل", "Partly shaded": "ظل جزئي", "Sun": "شمس", "Night": "ليل",
    "In the shade": "في الظل", "In direct sun": "تحت الشمس مباشرة", "Sun is down": "الشمس غائبة",
    "<b>How it works.</b> For each 10-minute step it finds where the sun is, then casts every nearby building's shadow along the ground: a building of height <i>h</i> throws a shadow <i>h</i> ÷ tan(sun altitude) long, pointing away from the sun. It checks five points around your car. Building heights come from OpenStreetMap, or floors × 3.2 m, or 3 floors if nothing is mapped. Trees are taken as 6 m tall with a 5 m crown unless mapped.": "<b>كيف تعمل.</b> لكل خطوة من 10 دقائق تحدد الأداة موقع الشمس، ثم ترسم ظل كل مبنى قريب على الأرض: المبنى الذي ارتفاعه <i>h</i> يلقي ظلًا طوله <i>h</i> ÷ tan(ارتفاع الشمس)، باتجاه معاكس للشمس. وتفحص خمس نقاط حول سيارتك. ارتفاعات المباني من OpenStreetMap، أو عدد الطوابق × 3.2 m، أو 3 طوابق إن لم تتوفر بيانات. وتُعتبر الأشجار بارتفاع 6 m وتاج بعرض 5 m ما لم تكن مسجلة.",
    "This is an estimate. It doesn't know about car park roofs, shade sails, parking canopies or trees that aren't on the map, so a covered spot will look sunnier here than it is.": "هذا تقدير. لا تعرف الأداة أسقف المواقف أو المظلات الشراعية أو مظلات المواقف أو الأشجار غير الموجودة على الخريطة، لذا قد يبدو الموقف المغطى هنا أكثر تعرضًا للشمس مما هو عليه.",
    "Right now": "الآن",
    "none today": "لا تغيير اليوم",
    "No change for the rest of today.": "لا تغيير لبقية اليوم.",
    "Now": "الآن",
    "Your car": "سيارتك",
    "Fetching nearby buildings and trees from OpenStreetMap…": "جارٍ جلب المباني والأشجار القريبة من OpenStreetMap…",
    "Couldn't reach the OpenStreetMap server (it gets busy). Tap your spot again in a moment.": "تعذّر الوصول إلى خادم OpenStreetMap (يكون مزدحمًا أحيانًا). اضغط على موقفك مرة أخرى بعد قليل.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Tap the map instead.": "لم تتم مشاركة الموقع. اضغط على الخريطة بدلًا من ذلك.",
    "Zoom in": "تكبير", "Zoom out": "تصغير"
  }, [
    [new RegExp('^' + TIME + '$'), function (m) { return t(m); }],
    [/^\d+h(?: \d+m)?$|^\d+m$/, function (m) { return hrs(m); }],
    [new RegExp('^' + TIME + ' · (in the shade|partly shaded|in direct sun|sun is down)$'), function (m, a, w) { return t(a) + ' · ' + LOW[w]; }],
    [new RegExp('^' + TIME + ': (In the shade|Partly shaded|In direct sun|Sun is down)$'), function (m, a, w) { return t(a) + ': ' + WORD[w]; }],
    [new RegExp('^' + TIME + ' to ' + TIME + '$'), function (m, a, b) { return 'من ' + t(a) + ' إلى ' + t(b); }],
    [new RegExp('^(Direct sun reaches it at|Part of the car gets sun from|The sun sets at about|Shade arrives at about) ' + TIME + '\\.$'), function (m, w, a) {
      return ({ 'Direct sun reaches it at': 'تصلها الشمس المباشرة الساعة ', 'Part of the car gets sun from': 'يتعرض جزء من السيارة للشمس من الساعة ', 'The sun sets at about': 'تغرب الشمس نحو الساعة ', 'Shade arrives at about': 'يصل الظل نحو الساعة ' })[w] + t(a) + '.'; }],
    [/^(\d+) buildings and (\d+) mapped trees nearby\.( Nothing mapped here, so the spot is in sun all day\.)?$/, function (m, b, tr, no) { return 'بالقرب منك ' + b + ' مبنى و' + tr + ' شجرة مسجلة.' + (no ? ' لا توجد بيانات هنا، لذا الموقف تحت الشمس طوال اليوم.' : ''); }]
  ]);
})();
