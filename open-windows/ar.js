(function () {
  var W = { 'Open the windows': 'افتح النوافذ', 'Maybe, with care': 'ربما، بحذر', 'Keep closed': 'أبقها مغلقة' };
  function u(x) { return '\u2066' + x + '\u2069'; }
  function day(s) { if (s === 'today') return 'اليوم'; if (s === 'tomorrow') return 'غدًا'; var m = s.match(/^on (\w+)$/); return m ? 'يوم ' + LabAr.t(m[1]) : s; }
  LabAr.add({
    "Open the Windows or AC?": "النوافذ أم المكيّف؟",
    "Tool · Weather · Home · Live": "أداة · الطقس · المنزل · مباشر",
    "Open the windows or AC?": "تفتح النوافذ أم تشغّل المكيّف؟",
    "From November to March, UAE evenings and early mornings are often cooler outside than inside. Opening the windows then airs the house for free. This checks every hour of the next two days for cool air, dry air, clean air and no dust, and tells you when the next good window is.": "من نوفمبر إلى مارس، تكون الأمسيات والصباحات الباكرة في الإمارات غالبًا أبرد في الخارج منها في الداخل، وفتح النوافذ حينها يجدد هواء البيت مجانًا. تفحص الأداة كل ساعة من اليومين القادمين: هل الهواء بارد وجاف ونظيف وخالٍ من الغبار؟ وتخبرك متى تأتي الفرصة المناسبة التالية.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Hatta": "حتا",
    "Next 48 hours · tap an hour": "الساعات الـ48 القادمة · اضغط على ساعة",
    "Open": "افتح", "Maybe": "ربما", "Keep closed": "أبقها مغلقة", "Open the windows": "افتح النوافذ",
    "Right now": "الآن",
    "Right now:": "الآن:",
    "Next good window": "الفرصة المناسبة التالية",
    "Keep the AC on": "أبقِ المكيّف يعمل",
    "No hour in the next 48 passes every check.": "لا توجد ساعة في الـ48 ساعة القادمة تجتاز كل الشروط.",
    "Keep the windows shut until then.": "أبقِ النوافذ مغلقة حتى ذلك الحين.",
    "Cooler, dry, clean air outside. Switch the AC off and let it in.": "الهواء في الخارج أبرد وجاف ونظيف. أطفئ المكيّف وافتح له الطريق.",
    "Indoor temperature (°C)": "درجة الحرارة في الداخل (\u2066°C\u2069)",
    "Indoor humidity (%)": "الرطوبة في الداخل (%)",
    "AC power when running (kW)": "قدرة المكيّف أثناء التشغيل (\u2066kW\u2069)",
    "Electricity price (AED per kWh)": "سعر الكهرباء (درهم لكل \u2066kWh\u2069)",
    "A 1.5 ton split unit draws about 1.5 to 2 kW. Check your bill for your real price per kWh, which depends on your emirate and how much you use.": "يستهلك مكيّف سبليت بقدرة 1.5 طن نحو 1.5 إلى 2 kW. راجع فاتورتك لمعرفة سعرك الفعلي لكل kWh، فهو يختلف حسب الإمارة وكمية الاستهلاك.",
    "If you use every open hour": "إن استفدت من كل ساعات الفتح",
    "Moisture": "الرطوبة",
    "Air quality": "جودة الهواء",
    "Dust": "الغبار",
    "Unavailable right now, so check for haze before opening up.": "غير متاحة الآن، فتأكد من عدم وجود غبار أو ضباب قبل الفتح.",
    "<b>Why the dew point matters more than humidity.</b> Air at 20°C and 80% humidity sounds cool, but its dew point is 16.5°C. Air at 26°C and 70% has a dew point near 20°C. Let that in and your sofa, walls and bedding soak up the moisture, and when you close up again the AC spends its first hour drying the house instead of cooling it. Below about 18°C dew point, outside air feels fresh. Above it, it feels sticky, even if it's cooler.": "<b>لماذا نقطة الندى أهم من الرطوبة.</b> هواء بدرجة 20°C ورطوبة 80% يبدو باردًا، لكن نقطة نداه 16.5°C. أما هواء بدرجة 26°C ورطوبة 70% فنقطة نداه قرابة 20°C. إن أدخلته امتصت الكنب والجدران والمفارش الرطوبة، وعندما تغلق النوافذ يقضي المكيّف ساعته الأولى في تجفيف البيت بدل تبريده. حين تكون نقطة الندى تحت 18°C تقريبًا يبدو الهواء الخارجي منعشًا، وفوقها يبدو لزجًا حتى لو كان أبرد.",
    "<b>What's approximate.</b> The weather and air quality are forecasts from Open-Meteo and the CAMS model, not a sensor on your street. A busy road, a building site or a neighbour's generator can make your air worse than the model. The energy figure assumes the AC would otherwise run about 40% of each hour; your real saving depends on your home and settings.": "<b>ما هو تقريبي.</b> الطقس وجودة الهواء توقعات من Open-Meteo ونموذج CAMS، وليست قراءة جهاز استشعار في شارعك. الطريق المزدحم أو موقع البناء أو مولّد الجيران قد يجعل هواءك أسوأ مما يقوله النموذج. ويفترض رقم الطاقة أن المكيّف كان سيعمل نحو 40% من كل ساعة، والتوفير الفعلي يعتمد على بيتك وإعداداتك.",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مجددًا.",
    "No data": "لا توجد بيانات",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  }, [
    [/^Fetching the forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب التوقعات لـ' + LabAr.t(n) + '…'; }],
    [/^(.+) · air quality is unavailable right now$/, function (m, n) { return LabAr.t(n) + ' · جودة الهواء غير متاحة الآن'; }],
    [/^until about (\d\d:\d\d) · (\d+)h (\d+)m left$/, 'حتى نحو $1 · متبقٍّ $2 س $3 د'],
    [/^starts in (\d+)h (\d+)m (\d+)s$/, 'تبدأ بعد $1 س $2 د $3 ث'],
    [/^(\d\d:\d\d) to (\d\d:\d\d) (today|tomorrow|on \w+)$/, function (m, a, b, d) { return 'من ' + a + ' إلى ' + b + ' ' + day(d); }],
    [/^(\d\d:\d\d) (Open the windows|Maybe, with care|Keep closed)$/, function (m, t, w) { return t + ' ' + W[w]; }],
    [/^(\d\d:\d\d) (today|tomorrow|on \w+): (Open the windows|Maybe, with care|Keep closed)$/, function (m, t, d, w) { return t + ' ' + day(d) + ': ' + W[w]; }],
    [/^Right now · (Open the windows|Maybe, with care|Keep closed)$/, function (m, w) { return 'الآن · ' + W[w]; }],
    [/^(\d\d:\d\d) (today|tomorrow|on \w+) · (Open the windows|Maybe, with care|Keep closed)$/, function (m, t, d, w) { return t + ' ' + day(d) + ' · ' + W[w]; }],
    [/^([\d.-]+)°C outside vs ([\d.-]+)°C inside(, so fresh air will cool the house\.|, about the same, so it won't cool much\.|, so opening up would heat the house\.)$/, function (m, o, i, r) {
      return u(o + '°C') + ' في الخارج مقابل ' + u(i + '°C') + ' في الداخل' + { ', so fresh air will cool the house.': '، فالهواء النقي سيبرّد البيت.', ", about the same, so it won't cool much.": '، أي متقاربان، فلن يبرّد كثيرًا.', ', so opening up would heat the house.': '، فالفتح سيُدخل الحرارة إلى البيت.' }[r];
    }],
    [/^Dew point ([\d.-]+)°C outside(, dry and fresh\.|, borderline\. It may feel a bit muggy\.|, muggy\. It would bring damp into the house\.)(?: Yours inside is ([\d.-]+)°C\.)?$/, function (m, o, r, i) {
      return 'نقطة الندى ' + u(o + '°C') + ' في الخارج' + { ', dry and fresh.': '، هواء جاف ومنعش.', ', borderline. It may feel a bit muggy.': '، على الحد. قد يبدو رطبًا قليلًا.', ', muggy. It would bring damp into the house.': '، هواء رطب خانق سيُدخل الرطوبة إلى البيت.' }[r] + (i ? ' ونقطة الندى عندك في الداخل ' + u(i + '°C') + '.' : '');
    }],
    [/^PM2\.5 (\d+) and PM10 (\d+) µg\/m³(\. Clean enough\.|\. Moderate; skip it if anyone has asthma\.|\. Polluted\. Keep the windows shut\.)$/, function (m, a, b, r) {
      return u('PM2.5 ' + a) + ' و' + u('PM10 ' + b + ' µg/m³') + { '. Clean enough.': '. نظيف بما يكفي.', '. Moderate; skip it if anyone has asthma.': '. متوسط؛ تجنّب الفتح إن كان في البيت مصاب بالربو.', '. Polluted. Keep the windows shut.': '. ملوّث. أبقِ النوافذ مغلقة.' }[r];
    }],
    [/^(\d+) µg\/m³ of desert dust(\. Fine\.|\. Some dust in the air; expect a film on surfaces\.|\. Dusty\. You'd be cleaning sand off the floor\.)$/, function (m, a, r) {
      return u(a + ' µg/m³') + ' من غبار الصحراء' + { '. Fine.': '. لا بأس.', '. Some dust in the air; expect a film on surfaces.': '. بعض الغبار في الجو؛ توقّع طبقة خفيفة على الأسطح.', ". Dusty. You'd be cleaning sand off the floor.": '. الجو مغبرّ، وستنظّف الرمل عن الأرض.' }[r];
    }],
    [/^(\d+|\?) km\/h(\. Fine\.|\. Breezy, may blow papers around\.|\. Strong enough to lift sand\.)$/, function (m, a, r) {
      return a + ' كم/س' + { '. Fine.': '. لا بأس.', '. Breezy, may blow papers around.': '. نسيم قوي قد يبعثر الأوراق.', '. Strong enough to lift sand.': '. قوية بما يكفي لإثارة الرمال.' }[r];
    }],
    [/^≈ ([\d.]+) kWh$/, '≈ $1 kWh'],
    [/^(\d+) hours? with the AC off in the next 48, worth about AED ([\d.]+)\. Small per day, but it adds up across a whole winter of evenings, and the house smells fresher too\.$/, '$1 ساعة دون مكيّف خلال الـ48 ساعة القادمة، بقيمة $2 درهم تقريبًا. مبلغ صغير يوميًا، لكنه يتراكم على مدى أمسيات الشتاء، ويصبح هواء البيت أنقى أيضًا.']
  ]);
})();
