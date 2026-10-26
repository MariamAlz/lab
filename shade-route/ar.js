(function () {
  var TIME = '(\\d{1,2}(?::\\d\\d)?\\s?(?:AM|PM|am|pm|a\\.m\\.|p\\.m\\.)?)';
  function t(s) { var m = s.match(/^(\d{1,2}(?::\d\d)?)\s?(AM|PM|am|pm|a\.m\.|p\.m\.)?$/); return m ? m[1] + (m[2] ? (/^a/i.test(m[2]) ? ' ص' : ' م') : '') : s; }
  var DIR = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
  var ROUTE = { 'Shadiest route': 'المسار الأكثر ظلًا', 'Shortest route': 'المسار الأقصر' };
  function mins(n) { n = +n; return n === 1 ? 'دقيقة' : n === 2 ? 'دقيقتين' : n + (n >= 3 && n <= 10 ? ' دقائق' : ' دقيقة'); }
  LabAr.add({
    "Shady Walk": "مشي في الظل",
    "Tool · Outdoors · Sun · Maps": "أداة · في الخارج · الشمس · خرائط",
    "Shady walk.": "مشي في الظل.",
    "Map apps find the shortest walk. On a hot afternoon you'd happily walk a bit further to stay out of the sun. Pick a start and an end, and this works out where the building shadows fall at that time and finds the route with the most shade.": "تجد تطبيقات الخرائط أقصر طريق للمشي، لكن في عصر يوم حار ستمشي مسافة أطول قليلًا بكل سرور لتبتعد عن الشمس. اختر نقطة البداية والنهاية، وستحسب هذه الأداة أين تقع ظلال المباني في ذلك الوقت وتجد المسار الأكثر ظلًا.",
    "📍 Start from my location": "📍 ابدأ من موقعي",
    "Try Dubai Marina": "جرّب دبي مارينا",
    "Map. Tap to set the start, then tap again to set the end.": "خريطة. اضغط لتحديد البداية، ثم اضغط مرة أخرى لتحديد النهاية.",
    "Shadiest route": "المسار الأكثر ظلًا",
    "Shortest route": "المسار الأقصر",
    "Building shadow": "ظل المبنى",
    "Tap the map to set your start, then tap again for your end.": "اضغط على الخريطة لتحديد نقطة البداية، ثم اضغط مرة أخرى لنقطة النهاية.",
    "When you'll walk": "وقت المشي",
    "How much you want to avoid the sun": "إلى أي حد تريد تجنّب الشمس",
    "shade on the shady route": "الظل في المسار الظليل",
    "shade on the shortest": "الظل في المسار الأقصر",
    "extra walking": "مشي إضافي",
    "<b>How it works.</b> A building of height <i>h</i> casts a shadow <i>h</i> ÷ tan(sun altitude) long, pointing away from the sun. At 4 pm in Dubai the sun is about 25° up, so a 10 m villa throws a 21 m shadow and a 100 m tower more than 200 m. The route finder treats a sunny metre as costing more than a shady one (1 + your setting), then picks the cheapest path.": "<b>كيف تعمل.</b> المبنى الذي ارتفاعه <i>h</i> يلقي ظلًا طوله <i>h</i> ÷ tan(ارتفاع الشمس)، باتجاه معاكس للشمس. في الساعة 4 عصرًا في دبي تكون الشمس على ارتفاع 25° تقريبًا، فتلقي فيلا بارتفاع 10 m ظلًا طوله 21 m، ويلقي برج بارتفاع 100 m ظلًا يزيد على 200 m. وتعتبر أداة إيجاد المسار المتر المشمس أعلى كلفة من المتر الظليل (1 + إعدادك)، ثم تختار المسار الأقل كلفة.",
    "Building outlines, heights and paths come from OpenStreetMap. Where a height is missing it uses floors × 3.2 m, or 3 floors. Trees, arcades and shade sails are not counted, and many buildings are mapped roughly, so treat it as a good guess. Keep the start and end within about 2 km.": "مخططات المباني وارتفاعاتها والممرات من OpenStreetMap. وحين لا يتوفر الارتفاع تُستخدم عدد الطوابق × 3.2 m، أو 3 طوابق. لا تُحتسب الأشجار والأروقة والمظلات الشراعية، وكثير من المباني مرسوم تقريبيًا، فاعتبر النتيجة تقديرًا جيدًا. اجعل المسافة بين البداية والنهاية في حدود 2 km.",
    "Now": "الآن",
    "Start": "البداية",
    "End": "النهاية",
    "Now tap where you want to go.": "الآن اضغط على وجهتك.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Tap the map instead.": "لم تتم مشاركة الموقع. اضغط على الخريطة بدلًا من ذلك.",
    "Fetching buildings and paths from OpenStreetMap…": "جارٍ جلب المباني والممرات من OpenStreetMap…",
    "Couldn't reach the OpenStreetMap server (it gets busy). Wait a moment and tap Clear to try again.": "تعذّر الوصول إلى خادم OpenStreetMap (يكون مزدحمًا أحيانًا). انتظر قليلًا ثم اضغط \"مسح\" وحاول مرة أخرى.",
    "The sun is down at this time, so every route is in shade.": "الشمس غائبة في هذا الوقت، لذا كل المسارات في الظل.",
    "The sun is down at this time.": "الشمس غائبة في هذا الوقت.",
    "No walkable paths are mapped here. Try two points along streets.": "لا توجد ممرات مشاة مسجلة هنا. جرّب نقطتين على الشوارع.",
    "The start and end aren't connected by mapped paths. Try moving them onto streets.": "لا تربط الممرات المسجلة بين البداية والنهاية. جرّب نقلهما إلى الشوارع.",
    "Sun is down, so the shortest route is the one to take.": "الشمس غائبة، لذا خذ المسار الأقصر.",
    "The shortest route is already the shadiest one. Drag the time slider to compare.": "المسار الأقصر هو أصلًا الأكثر ظلًا. حرّك شريط الوقت للمقارنة.",
    "not at all": "لا يهم",
    "0 m": "0 m",
    "Zoom in": "تكبير", "Zoom out": "تصغير"
  }, [
    [new RegExp('^' + TIME + '$'), function (m) { return t(m); }],
    [new RegExp('^Now · ' + TIME + '$'), function (m, a) { return 'الآن · ' + t(a); }],
    [/^a sunny metre counts as (\d+) m$/, 'المتر المشمس يُحسب $1 m'],
    [/^Sun (-?\d+)° up, from the ([a-z-]+)\.(?: Shadows are ([\d.]+)× building height\.)?$/, function (m, a, d, k) { return 'الشمس على ارتفاع ' + a + '° من جهة ' + (DIR[d] || d) + '.' + (k ? ' طول الظلال ' + k + '× ارتفاع المباني.' : ''); }],
    [/^\+(\d+) m$/, '+$1 m'],
    [/^(\d+) m · about (\d+) min · (\d+) m in the sun$/, function (m, l, w, s) { return l + ' m · نحو ' + mins(w) + ' مشيًا · ' + s + ' m تحت الشمس'; }],
    [/^(\d+)% shade$/, '$1% ظل'],
    [/^Those points are ([\d.]+) km apart\. Keep them within about 2 km so the map data stays small\.$/, 'المسافة بين النقطتين ' + '$1 km. اجعلها في حدود 2 km تقريبًا ليبقى حجم بيانات الخريطة صغيرًا.'],
    [/^(.*?)( Note: a point is (\d+) m from the nearest mapped path\.)$/, function (m, a, b, d) { return LabAr.t(a) + ' ملاحظة: إحدى النقطتين تبعد ' + d + ' m عن أقرب ممر مسجل.'; }],
    [/^Same distance, but (\d+) points more shade: the teal route picks the shady side streets\.$/, 'المسافة نفسها، لكن بظل أكثر بـ$1 نقطة مئوية: المسار الفيروزي يختار الشوارع الجانبية الظليلة.'],
    [/^Walking (\d+) m further saves you (\d+) m in direct sun\. (\d+) buildings checked\.$/, 'المشي $1 m إضافية يوفّر عليك $2 m تحت الشمس المباشرة. تم فحص $3 مبنى.']
  ]);
})();
