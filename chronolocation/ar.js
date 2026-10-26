(function () {
  var C = { N: 'شمال', NNE: 'شمال الشمال الشرقي', NE: 'شمال شرق', ENE: 'شرق الشمال الشرقي', E: 'شرق', ESE: 'شرق الجنوب الشرقي', SE: 'جنوب شرق', SSE: 'جنوب الجنوب الشرقي', S: 'جنوب', SSW: 'جنوب الجنوب الغربي', SW: 'جنوب غرب', WSW: 'غرب الجنوب الغربي', W: 'غرب', WNW: 'غرب الشمال الغربي', NW: 'شمال غرب', NNW: 'شمال الشمال الغربي' };
  var CP = '(N|NNE|NE|ENE|E|ESE|SE|SSE|S|SSW|SW|WSW|W|WNW|NW|NNW)';
  var SAID = { 'date and time': 'التاريخ والوقت', 'time zone': 'المنطقة الزمنية', 'GPS position': 'موقع GPS', 'compass heading': 'اتجاه البوصلة' };
  function said(list) {
    return list.split(', ').map(function (p) {
      var m = p.match(/^(date and time|time zone|compass heading) (.+)$/);
      if (m) return SAID[m[1]] + ' ' + m[2];
      return SAID[p] || p;
    }).join('، ');
  }
  LabAr.add({
    "Shadow Chronolocation": "تحديد الوقت من الظل",
    "Tool · Verification · Sun": "أداة · تحقق · الشمس",
    "When and where was this photo taken?": "متى وأين التُقطت هذه الصورة؟",
    "A shadow is a clock. Its length tells you how high the sun was, and its direction tells you where the sun was in the sky. Draw an upright object and its shadow on a photo, and this checks which times of day fit a claimed place, or which places on Earth fit a claimed time. Your photo stays on your device.": "الظل ساعة. طوله يخبرك بارتفاع الشمس، واتجاهه يخبرك بموقعها في السماء. ارسم جسمًا قائمًا وظله على الصورة، وستعرف الأوقات التي تناسب المكان المزعوم، أو الأماكن على الأرض التي تناسب الوقت المزعوم. صورتك تبقى على جهازك.",
    "Photo. Drag on it to draw lines.": "الصورة. اسحب عليها لرسم الخطوط.",
    "Choose a photo": "اختر صورة",
    "Try the demo photo": "جرّب الصورة التجريبية",
    "Clear lines": "امسح الخطوط",
    "What to draw": "ما الذي ترسمه",
    "Draw": "ارسم",
    "1 · Object, base to top": "1 · الجسم، من القاعدة إلى القمة",
    "2 · Shadow, base to tip": "2 · الظل، من القاعدة إلى الطرف",
    "3 · North on the ground": "3 · الشمال على الأرض",
    "Pick an upright thing with a clear shadow on flat ground: a lamp post, a person, the edge of a wall. Drag from its base to its top, then from the same base to the tip of its shadow. Drag a dot to adjust it.": "اختر شيئًا قائمًا له ظل واضح على أرض مستوية: عمود إنارة، شخص، حافة جدار. اسحب من قاعدته إلى قمته، ثم من القاعدة نفسها إلى طرف ظله. اسحب أي نقطة لتعديلها.",
    "sun height": "ارتفاع الشمس",
    "sun direction": "اتجاه الشمس",
    "shadow ÷ height": "الظل ÷ الارتفاع",
    "The measurement": "القياس",
    "Camera looks down by": "الكاميرا مائلة للأسفل بمقدار",
    "Level, at eye height: about 10 to 20°. From a balcony or a drone: 35 to 70°. Only used for drawn lines.": "كاميرا مستوية بمستوى العين: من 10 إلى 20° تقريبًا. من شرفة أو طائرة مسيّرة: من 35 إلى 70°. يُستخدم للخطوط المرسومة فقط.",
    "Real object height (m)": "الارتفاع الحقيقي للجسم (م)",
    "Real shadow length (m)": "الطول الحقيقي للظل (م)",
    "from drawing": "من الرسم",
    "Shadow direction from": "اتجاه الظل من",
    "North line I drew": "خط الشمال الذي رسمته",
    "Camera heading": "اتجاه الكاميرا",
    "Unknown (height only)": "غير معروف (الارتفاع فقط)",
    "Camera heading (° from north)": "اتجاه الكاميرا (° من الشمال)",
    "e.g. 90 = facing east": "مثلًا 90 = باتجاه الشرق",
    "The claim": "الادعاء",
    "Latitude": "خط العرض",
    "Longitude": "خط الطول",
    "Time (optional)": "الوقت (اختياري)",
    "UTC offset (hours)": "فرق التوقيت عن UTC (ساعات)",
    "Tolerance ± (sun height / direction)": "هامش السماح ± (الارتفاع / الاتجاه)",
    "Where the sun was this high at the claimed time": "أين كانت الشمس بهذا الارتفاع في الوقت المزعوم",
    "Sun height matches": "ارتفاع الشمس مطابق",
    "Height and direction match": "الارتفاع والاتجاه مطابقان",
    "Claimed place": "المكان المزعوم",
    "Enter a date and a time to draw the band. Click the map to set the claimed place.": "أدخل تاريخًا ووقتًا لرسم الحزام. انقر على الخريطة لتحديد المكان المزعوم.",
    "When the sun matched at the claimed place": "متى طابقت الشمس القياس في المكان المزعوم",
    "Enter a place and a date.": "أدخل مكانًا وتاريخًا.",
    "The list fills in as soon as there is a measurement.": "تمتلئ القائمة فور وجود قياس.",
    "How it works.": "كيف يعمل.",
    "An upright object of height h casts a shadow of length L on flat ground when the sun is at height atan(h ÷ L) above the horizon. The same sun height happens twice a day, once in the morning and once in the afternoon, so direction is what tells them apart. Across the whole planet at one instant, the places where the sun has a given height form a ring around the point where the sun is straight overhead. That ring is the band on the map.": "الجسم القائم الذي ارتفاعه h يلقي على أرض مستوية ظلًا طوله L عندما تكون الشمس على ارتفاع atan(h ÷ L) فوق الأفق. يتكرر ارتفاع الشمس نفسه مرتين في اليوم، مرة صباحًا ومرة بعد الظهر، والاتجاه هو ما يفرّق بينهما. وفي لحظة واحدة على الكوكب كله، تشكّل الأماكن التي تكون فيها الشمس على ارتفاع معيّن حلقة حول النقطة التي تتعامد فيها الشمس. هذه الحلقة هي الحزام على الخريطة.",
    "What goes wrong.": "ما الذي قد يخطئ.",
    "A photo squashes the ground. A shadow pointing away from the camera looks much shorter than it is, while one running across the frame keeps its length. The tilt slider corrects for that, assuming a simple camera with little lens distortion, so prefer shadows near the middle of the picture. Sloping ground, a leaning pole, or a shadow falling on a wall or kerb all break the maths. Wide-angle and phone lenses bend lines near the edges. If you know the real height and shadow length (from a map, a satellite image, or a standard object like a door), type them in: that beats any drawing. Sun maths here is good to a few hundredths of a degree and ignores atmospheric refraction, which only matters within a few degrees of the horizon.": "الصورة تضغط الأرض. الظل الممتد بعيدًا عن الكاميرا يبدو أقصر بكثير من حقيقته، بينما يحتفظ الظل الممتد عرضيًا في الإطار بطوله. يصحّح شريط الميل ذلك بافتراض كاميرا بسيطة بتشوه عدسة قليل، لذا فضّل الظلال القريبة من وسط الصورة. الأرض المنحدرة أو العمود المائل أو الظل الواقع على جدار أو رصيف كلها تفسد الحساب. وعدسات الزاوية الواسعة وعدسات الهواتف تحني الخطوط قرب الحواف. إذا كنت تعرف الارتفاع الحقيقي وطول الظل (من خريطة أو صورة فضائية أو جسم قياسي كالباب)، فاكتبهما: هذا أدق من أي رسم. حسابات الشمس هنا دقيقة إلى جزء من مئة من الدرجة، وتتجاهل انكسار الضوء في الجو، وهو لا يؤثر إلا قرب الأفق ببضع درجات.",
    "Choose a photo, or try the demo": "اختر صورة، أو جرّب المثال",
    "object": "الجسم",
    "shadow": "الظل",
    "N": "ش",
    "Demo scene: 3 m lamp post, camera tilted 35° down, facing 30° east of north": "مشهد تجريبي: عمود إنارة 3 م، الكاميرا مائلة 35° للأسفل، باتجاه 30° شرق الشمال",
    "Sun straight overhead": "الشمس متعامدة",
    "Draw the object and its shadow, or type the two lengths.": "ارسم الجسم وظله، أو اكتب الطولين.",
    "Then the matching times appear here.": "ثم تظهر الأوقات المطابقة هنا.",
    "Pick a city, type coordinates, or click the map.": "اختر مدينة، أو اكتب الإحداثيات، أو انقر على الخريطة.",
    "No time that day fits.": "لا يوجد وقت مطابق في ذلك اليوم.",
    "The claim fits the shadow.": "الادعاء يتوافق مع الظل.",
    "The claim does not fit the shadow.": "الادعاء لا يتوافق مع الظل.",
    "That file could not be opened as an image.": "تعذّر فتح هذا الملف كصورة.",
    "No date or location in this file's metadata. Most apps strip it when sharing.": "لا يوجد تاريخ أو موقع في البيانات الوصفية لهذا الملف. معظم التطبيقات تحذفها عند المشاركة.",
    "Demo: the scene was drawn for Abu Dhabi on 15 March 2026 at 10:20. See whether the solver finds it, then try a claimed time to see the band.": "مثال: رُسم المشهد لأبوظبي في 15 مارس 2026 الساعة 10:20. لاحظ هل تجده الأداة، ثم جرّب وقتًا مزعومًا لترى الحزام.",
    "Zoom in": "تكبير",
    "Zoom out": "تصغير"
  }, [
    [new RegExp('^(\\d+)° ' + CP + '$'), function (m, d, c) { return d + '° ' + C[c]; }],
    [/^Height from the (lengths you typed|drawn lines, corrected for a (\d+)° camera tilt)(; direction from (your north line|the camera heading))?$/, function (m, a, t, b, d) {
      var s = t ? 'الارتفاع من الخطوط المرسومة، بعد تصحيح ميل الكاميرا ' + t + '°' : 'الارتفاع من الأطوال التي كتبتها';
      if (d) s += d === 'your north line' ? '؛ والاتجاه من خط الشمال الذي رسمته' : '؛ والاتجاه من اتجاه الكاميرا';
      return s;
    }],
    [/^; direction from (your north line|the camera heading)$/, function (m, d) { return d === 'your north line' ? '؛ والاتجاه من خط الشمال الذي رسمته' : '؛ والاتجاه من اتجاه الكاميرا'; }],
    [/^At (\d\d:\d\d) UTC the sun stood ([\d.]+)° ± ([\d.]+)° high along the gold ring\.( The teal part also matches the shadow direction\.| No part of it matches the shadow direction too\.| Add a shadow direction to narrow it down\.)?$/, function (m, t, e, tol, x) {
      var s = 'في الساعة ' + t + ' UTC كانت الشمس على ارتفاع ' + e + '° ± ' + tol + '° على طول الحلقة الذهبية.';
      if (/teal/.test(x || '')) s += ' والجزء الفيروزي يطابق اتجاه الظل أيضًا.';
      else if (/No part/.test(x || '')) s += ' ولا يطابق أي جزء منها اتجاه الظل.';
      else if (x) s += ' أضف اتجاه الظل لتضييق النطاق.';
      return s;
    }],
    [/^Nowhere on Earth had the sun at that height at (\d\d:\d\d) UTC\.$/, 'لم تكن الشمس بهذا الارتفاع في أي مكان على الأرض الساعة $1 UTC.'],
    [/^The sun never got higher than ([\d.-]+)° there that day\.$/, 'لم يتجاوز ارتفاع الشمس هناك $1° في ذلك اليوم.'],
    [/^Closest: (\d\d:\d\d) \(UTC([+-][\d.]+)\), with the sun at ([\d.-]+)° high towards (\d+)°\.$/, 'الأقرب: $1 (UTC$2)، والشمس على ارتفاع $3° باتجاه $4°.'],
    [/^At (\d\d:\d\d) local$/, 'الساعة $1 بالتوقيت المحلي'],
    [/^(\d\d:\d\d) to (\d\d:\d\d) local$/, 'من $1 إلى $2 بالتوقيت المحلي'],
    [new RegExp('^Sun ([\\d.-]+)° high, towards (\\d+)° \\(' + CP + '\\)$'), function (m, e, a, c) { return 'الشمس على ارتفاع ' + e + '°، باتجاه ' + a + '° (' + C[c] + ')'; }],
    [/^Times are UTC([+-][\d.]+)\. Tap a time to see where else on Earth matched at that moment\.$/, 'الأوقات بتوقيت UTC$1. اضغط على وقت لترى الأماكن الأخرى على الأرض التي طابقت في تلك اللحظة.'],
    [new RegExp('^At (\\d\\d:\\d\\d) the sun there was ([\\d.-]+)° high towards (\\d+)° ' + CP + '\\. You measured ([\\d.-]+)°(?: towards (\\d+)°)?\\.$'), function (m, t, e, a, c, me, ma) {
      return 'في الساعة ' + t + ' كانت الشمس هناك على ارتفاع ' + e + '° باتجاه ' + a + '° ' + C[c] + '. وقياسك ' + me + '°' + (ma ? ' باتجاه ' + ma + '°' : '') + '.';
    }],
    [/^Filled in from the photo's metadata: (.+)\. Metadata is easy to edit and camera clocks drift, so treat it as one more claim to test\.$/, function (m, l) { return 'عُبّئت من البيانات الوصفية للصورة: ' + said(l) + '. البيانات الوصفية سهلة التعديل وساعات الكاميرات تنحرف، فاعتبرها ادعاءً آخر يحتاج إلى اختبار.'; }]
  ]);
})();
