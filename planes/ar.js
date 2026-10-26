(function () {
  var t = function (s) { return LabAr.t(s); };
  var DIR = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
  var PH = { climbing: 'يصعد', descending: 'يهبط', cruising: 'في وضع التحليق' };
  var CITY = { 'London': 'لندن', 'Doha': 'الدوحة', 'Riyadh': 'الرياض', 'Jeddah': 'جدة', 'Muscat': 'مسقط', 'Kuwait City': 'الكويت', 'Bahrain': 'البحرين', 'Manama': 'المنامة', 'Cairo': 'القاهرة', 'Amman': 'عمّان', 'Beirut': 'بيروت', 'Istanbul': 'إسطنبول', 'Mumbai': 'مومباي', 'Delhi': 'دلهي', 'New Delhi': 'نيودلهي', 'Karachi': 'كراتشي', 'Paris': 'باريس', 'Frankfurt': 'فرانكفورت', 'Dammam': 'الدمام', 'Medina': 'المدينة المنورة', 'Madinah': 'المدينة المنورة' };
  function city(c) { return CITY[c] || t(c); }
  function nm(n) { return n === 'you' ? 'موقعك' : t(n); }
  LabAr.add({
    "What Plane Is That?": "ما هذه الطائرة؟",
    "Signals · Live · Camera": "الإشارات · مباشر · الكاميرا",
    "What plane is that?": "ما هذه الطائرة؟",
    "Planes broadcast their position, height and speed every second over a radio signal called ADS-B, and volunteers around the world receive it. This page asks those receivers what's near you and shows which flight is overhead, where it's going and how high it is. Point your phone at a plane to label it.": "تبث الطائرات موقعها وارتفاعها وسرعتها كل ثانية عبر إشارة لاسلكية تسمى ADS-B، ويستقبلها متطوعون حول العالم. تسأل هذه الصفحة تلك المستقبِلات عمّا يحلّق قربك، وتعرض الرحلة التي فوقك ووجهتها وارتفاعها. وجّه هاتفك نحو طائرة لتعرف اسمها.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Radar": "الرادار",
    "Point your phone": "وجّه هاتفك",
    "Closest to overhead": "الأقرب إلى ما فوقك",
    "Looking for planes…": "جارٍ البحث عن الطائرات…",
    "Live positions come from community receiver networks (adsb.lol, airplanes.live, adsb.fi or OpenSky, whichever answers), and routes come from adsbdb. Military and some private flights don't broadcast, and a route can be wrong when an airline reuses a flight number. Your location is used only to ask for nearby planes.": "تأتي المواقع المباشرة من شبكات مستقبِلات مجتمعية (adsb.lol أو airplanes.live أو adsb.fi أو OpenSky، أيها يجيب)، وتأتي المسارات من adsbdb. الرحلات العسكرية وبعض الرحلات الخاصة لا تبث موقعها، وقد يكون المسار خاطئًا إذا أعادت شركة طيران استخدام رقم رحلة. يُستخدم موقعك فقط للسؤال عن الطائرات القريبة.",
    "No planes nearby right now.": "لا توجد طائرات قريبة الآن.",
    "None of the flight networks answered. They limit how often they can be asked, so try again in a minute.": "لم تُجب أي من شبكات الرحلات. فهي تحدّ من عدد الطلبات، لذا حاول مرة أخرى بعد دقيقة.",
    "No camera, so drag the view to look around.": "لا توجد كاميرا، لذا اسحب العرض لتنظر حولك.",
    "Location not shared, so showing Dubai.": "لم تتم مشاركة الموقع، لذا نعرض دبي.",
    "Asking for your location…": "جارٍ طلب موقعك…"
  }, [
    [/^(\d+) planes within 75 km of (.+)\. Updated ([\d:]+)\.$/, function (m, n, w, tm) { return (+n === 1 ? 'طائرة واحدة' : +n === 2 ? 'طائرتان' : +n <= 10 ? n + ' طائرات' : n + ' طائرة') + ' ضمن 75 km من ' + nm(w) + '. آخر تحديث ' + tm + '.'; }],
    [/^No planes in the air near (.+) right now\.$/, function (m, w) { return 'لا توجد طائرات في الجو قرب ' + nm(w) + ' الآن.'; }],
    [/^(.*) \(([A-Z0-9]*)\) → (.*) \(([A-Z0-9]*)\)$/, function (m, a, ac, b, bc) { return city(a) + ' (' + ac + ') ← ' + city(b) + ' (' + bc + ')'; }],
    [/^(?:(.+) · )?([\d,]+) ft \(([\d.]+) km\) · (?:(\d+) km\/h · )?(climbing|descending|cruising)$/, function (m, ty, ft, km, sp, ph) {
      return PH[ph] + ' · الارتفاع ' + ft + ' قدم (' + km + ' كم)' + (sp ? ' · السرعة ' + sp + ' كم/س' : '') + (ty ? ' · ' + ty : '');
    }],
    [/^([\d.]+) km away · look (?:almost straight up|(\d+)° up, towards the ([a-z-]+))$/, function (m, d, el, dir) {
      return 'على بُعد ' + d + ' km · ' + (el ? 'انظر إلى الأعلى بزاوية ' + el + '° نحو ' + DIR[dir] : 'انظر إلى الأعلى مباشرة تقريبًا');
    }],
    [/^(\d+) km$/, '$1 km'],
    [/^(.+) → (.+) · (\d+)k ft$/, '$1 → $2 · $3 ألف قدم'],
    [/^(\d+)k ft · (\d+) km$/, '$1 ألف قدم · $2 km'],
    // call signs and airline names are kept as broadcast
    [/^[A-Z0-9-]{2,8}( · .+)?$/i, '$&']
  ]);
})();
