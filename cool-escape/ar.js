(function () {
  var CITY = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Ajman': 'عجمان', 'Umm Al Quwain': 'أم القيوين', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Al Ain': 'العين', 'your location': 'موقعك', 'Your location': 'موقعك', 'where you are': 'مكانك' };
  var PLACE = {
    'Jebel Jais summit': 'قمة جبل جيس', 'Jebel Hafeet': 'جبل حفيت', 'Hatta': 'حتا', 'Dibba beach': 'شاطئ دبا', 'Khor Fakkan': 'خورفكان',
    'Al Ain oasis': 'واحة العين', 'Liwa': 'ليوا', 'Kalba mangroves': 'محمية قرم كلباء', 'Khasab, Musandam': 'خصب، مسندم',
    'Ras Al Khaimah beach': 'شاطئ رأس الخيمة', 'Abu Dhabi Corniche': 'كورنيش أبوظبي', 'Dubai beach': 'شاطئ دبي'
  };
  var REGION = {
    'Ras Al Khaimah · 1,650 m': 'رأس الخيمة · 1,650 م', 'Al Ain · 1,150 m': 'العين · 1,150 م', 'Dubai · 400 m': 'دبي · 400 م',
    'Fujairah · east coast': 'الفجيرة · الساحل الشرقي', 'Sharjah · east coast': 'الشارقة · الساحل الشرقي', 'Al Ain · 290 m': 'العين · 290 م',
    'Al Dhafra · desert': 'الظفرة · صحراء', 'Oman · fjords': 'عُمان · الخلجان', 'Al Marjan Island': 'جزيرة المرجان', 'Abu Dhabi': 'أبوظبي', 'Kite Beach': 'كايت بيتش'
  };
  var BEST = {
    'Early morning to hike, sunset at the viewing deck.': 'الصباح الباكر للمشي، والغروب من منصة المشاهدة.',
    'Late afternoon to sunset at the top.': 'من آخر العصر حتى الغروب في القمة.',
    'Trails at sunrise, kayaking mid-morning.': 'المسارات عند الشروق، والكاياك في منتصف الصباح.',
    'Swim in the morning, before the afternoon wind.': 'السباحة صباحًا، قبل رياح العصر.',
    'Morning swim, evening on the corniche.': 'سباحة في الصباح، ومساء على الكورنيش.',
    'The oasis in the morning, the zoo after 4pm.': 'الواحة في الصباح، وحديقة الحيوانات بعد 4 عصرًا.',
    'Sunrise on the dunes, stars after dark.': 'الشروق على الكثبان، والنجوم بعد حلول الظلام.',
    'Morning at high tide for kayaking.': 'الصباح وقت المد العالي للكاياك.',
    'Morning dhow trip, when the water is calmest.': 'رحلة الداو صباحًا، حين يكون البحر في أهدأ حالاته.',
    'Morning or late afternoon swim.': 'السباحة صباحًا أو آخر العصر.',
    'After 5pm, when the sea breeze is up.': 'بعد 5 مساءً، حين يهب نسيم البحر.',
    'Sunrise, or after sunset.': 'عند الشروق، أو بعد الغروب.'
  };
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  var reBest = new RegExp('^(' + Object.keys(BEST).map(esc).join('|') + ')(.*)$');
  var rePlace = new RegExp('^(\\d+)\\. (' + Object.keys(PLACE).map(esc).join('|') + ')$');
  function city(s) { return CITY[s] || s; }
  function hm(s) { return s.replace(/(\d+)h/, '$1 س').replace(/(\d+)m/, '$1 د'); }
  function H(s) { return s.replace(/(\d+)am/, '$1 ص').replace(/(\d+)pm/, '$1 م'); }
  var WHEN = { 'this weekend': 'في عطلة نهاية الأسبوع هذه', 'on Saturday': 'يوم السبت', 'on Sunday': 'يوم الأحد', 'today': 'اليوم' };
  var WANT = { 'cool air': 'للأجواء الباردة', 'a swim': 'للسباحة', 'a hike': 'لرحلة مشي', 'a night outdoors': 'لليلة في الهواء الطلق' };
  function hint(s) {
    var m;
    if (!s) return '';
    if ((m = s.match(/^Coolest around (\w+), (-?\d+)°C\.$/))) return 'الأبرد نحو ' + H(m[1]) + '، ' + m[2] + '\u200E°C.';
    if ((m = s.match(/^Calmest wind around (\w+) \((\d+) km\/h\)\.$/))) return 'أهدأ رياح نحو ' + H(m[1]) + ' (' + m[2] + ' كم/س).';
    if ((m = s.match(/^Under (\d+)°C all day\.$/))) return 'أقل من ' + m[1] + '\u200E°C طوال اليوم.';
    if ((m = s.match(/^Over (\d+)°C through daylight\. (Start before sunrise\.|Go in the evening\.)$/))) return 'فوق ' + m[1] + '\u200E°C طوال النهار. ' + (/Start/.test(m[2]) ? 'ابدأ قبل الشروق.' : 'اذهب في المساء.');
    if ((m = s.match(/^(?:Under (\d+)°C until about (\w+)|Warm all morning)(?:, and again from (\w+))?\.$/))) {
      var a = m[1] ? 'أقل من ' + m[1] + '\u200E°C حتى نحو ' + H(m[2]) : 'دافئ طوال الصباح';
      return a + (m[3] ? '، ويعود ليبرد من ' + H(m[3]) : '') + '.';
    }
    return s;
  }
  function line(l) {
    var m;
    if ((m = l.match(/^night low (-?\d+)°C$/i))) return 'أدنى حرارة ليلًا ' + m[1] + '\u200E°C';
    if ((m = l.match(/^high of (-?\d+)°C$/i))) return 'العظمى ' + m[1] + '\u200E°C';
    if ((m = l.match(/^(\d+)° cooler than (.+)$/i))) return 'أبرد من ' + city(m[2]) + ' بـ' + m[1] + '\u200E°\u200E';
    if ((m = l.match(/^sea (-?\d+)°C$/i))) return 'البحر ' + m[1] + '\u200E°C';
    if ((m = l.match(/^about (.+) drive from (.+)$/i))) return 'نحو ' + hm(m[1]) + ' بالسيارة من ' + city(m[2]);
    return l;
  }
  LabAr.add(Object.assign({
    "Cool Weekend Escape": "مهرب الأجواء الباردة",
    "Tool · Weather · UAE · Live": "أداة · طقس · الإمارات · مباشر",
    "Cool weekend escape.": "مهرب نهاية الأسبوع البارد.",
    "Hot in the city? Twelve UAE escapes, from the top of Jebel Jais to the mangroves at Kalba, with this weekend's live forecast side by side. See how many degrees cooler each one is than where you live, then rank them for what you want to do: cool air, a swim, a hike or a night under the stars.": "الجو حار في المدينة؟ اثنا عشر مكانًا في الإمارات، من قمة جبل جيس إلى أشجار القرم في كلباء، مع توقعات الطقس المباشرة لعطلة نهاية الأسبوع جنبًا إلى جنب. اعرف كم درجة يقل كل مكان عن حرارة مدينتك، ثم رتّبها حسب ما تريد: أجواء باردة، أو سباحة، أو رحلة مشي، أو ليلة تحت النجوم.",
    "From": "من",
    "📍 My location": "📍 موقعي",
    "When": "متى",
    "I want": "أريد",
    "Loading the forecast…": "جارٍ تحميل التوقعات…",
    "Map of the escapes, numbered by rank": "خريطة الأماكن مرقّمة حسب الترتيب",
    "Numbers show the ranking. The white dot is you.": "الأرقام تبيّن الترتيب. النقطة البيضاء هي أنت.",
    "<b>Why the mountains are cooler.</b> Air cools by about 6.5°C for every 1,000 m you climb, because rising air expands and loses heat as it does. The viewing deck on Jebel Jais sits around 1,650 m, so it's often 10°C cooler than the coast. Weather models smooth mountains into gentle hills, so this page asks for each forecast at the real height of the place you'd stand.": "<b>لماذا الجبال أبرد؟</b> يبرد الهواء نحو 6.5\u200E°C مع كل 1,000 م من الارتفاع، لأن الهواء الصاعد يتمدد ويفقد حرارته. منصة المشاهدة في جبل جيس على ارتفاع نحو 1,650 م، لذا تكون غالبًا أبرد من الساحل بـ10\u200E°C. نماذج الطقس تُنعّم الجبال فتجعلها تلالًا لطيفة، لذلك تطلب هذه الصفحة توقعات كل مكان على الارتفاع الحقيقي للنقطة التي ستقف عليها.",
    "<b>How the score works.</b> Each place gets 100 points, minus points for whatever spoils the plan. For cool air: heat and sticky humidity. For swimming: sea temperature away from about 27°C, wind that makes waves, and heat on the sand. For hiking: heat over 26°C, humidity and strong UV. For camping: a warm or windy night, or rain.": "<b>كيف يُحسب التقييم؟</b> يبدأ كل مكان بـ100 نقطة، وتُخصم نقاط لكل ما يفسد الخطة. للأجواء الباردة: الحر والرطوبة الخانقة. للسباحة: ابتعاد حرارة البحر عن نحو 27\u200E°C، والرياح التي تثير الأمواج، وحرارة الرمل. للمشي: الحرارة فوق 26\u200E°C، والرطوبة، والأشعة فوق البنفسجية القوية. للتخييم: ليلة دافئة أو عاصفة، أو المطر.",
    "Forecasts from Open-Meteo, sea temperature from the Open-Meteo marine model. Drive times are rough, without traffic. Mountain weather changes fast: check road closures and wadi warnings from the NCM before you go, and never enter a flowing wadi.": "التوقعات من Open-Meteo، وحرارة البحر من النموذج البحري لـOpen-Meteo. أوقات القيادة تقريبية ودون احتساب الزحام. طقس الجبال يتغير بسرعة: تحقّق من إغلاق الطرق وتحذيرات الأودية من المركز الوطني للأرصاد قبل أن تذهب، ولا تدخل واديًا جاريًا أبدًا.",
    "This weekend": "عطلة نهاية الأسبوع",
    "Saturday (today)": "السبت (اليوم)",
    "Cool air": "أجواء باردة", "Swimming": "سباحة", "Hiking": "مشي", "Camping at night": "تخييم ليلي",
    "Sea temperatures are unavailable right now.": "حرارة البحر غير متاحة حاليًا.",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مرة أخرى.",
    "No forecast right now": "لا توجد توقعات حاليًا",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick an emirate instead.": "لم تتم مشاركة الموقع. اختر إمارة بدلًا من ذلك.",
    "No sea here": "لا بحر هنا",
    "comfort": "الراحة",
    "Max": "العظمى", "Night low": "الصغرى ليلًا", "Rain": "المطر", "UV": "مؤشر UV", "Sea": "البحر",
    "Best time:": "أفضل وقت:",
    "You": "أنت",
    "Zoom in": "تكبير", "Zoom out": "تصغير", "Close popup": "إغلاق النافذة",
    "The UAE's highest road. Viewing deck, the Jais Flight zipline and short trails near the top.": "أعلى طريق في الإمارات. منصة مشاهدة، وحبل انزلاق Jais Flight، ومسارات قصيرة قرب القمة.",
    "Drive the 60 bends to the top for views over Al Ain, then the hot springs at Green Mubazzarah below.": "اصعد بالسيارة عبر 60 منعطفًا إلى القمة لتطل على العين، ثم العيون الحارة في المبزرة الخضراء أسفل الجبل.",
    "Kayak the dam, ride or hike the Hatta trails, and walk the heritage village.": "جدّف بالكاياك في السد، وانطلق بالدراجة أو سيرًا في مسارات حتا، وتجوّل في القرية التراثية.",
    "Snorkel or dive at Dibba Rock, take a boat toward Musandam, camp on the beach.": "غطس سطحي أو غوص عند صخرة دبا، ورحلة بالقارب نحو مسندم، وتخييم على الشاطئ.",
    "Beach and corniche, Shark Island snorkelling, Al Rafisah dam and the waterfall.": "الشاطئ والكورنيش، والغطس السطحي عند جزيرة القرش، وسد الرفيصة والشلال.",
    "Shaded walks under the date palms, Al Jahili Fort, Al Ain Zoo when it cools down.": "مشي في الظل تحت النخيل، وقلعة الجاهلي، وحديقة حيوانات العين حين يبرد الجو.",
    "Tal Moreeb, one of the tallest dunes on earth. Desert camping and dark skies for stars.": "تل مرعب، من أعلى الكثبان الرملية في العالم. تخييم صحراوي وسماء مظلمة لمشاهدة النجوم.",
    "Kayak through the oldest mangroves in the UAE, look for herons and turtles, then Kalba beach.": "جدّف بالكاياك بين أقدم أشجار القرم في الإمارات، وابحث عن طيور البلشون والسلاحف، ثم شاطئ كلباء.",
    "Dhow trips through the fjords, dolphins, snorkelling near Telegraph Island, the Jebel Harim drive.": "رحلات الداو بين الخلجان، والدلافين، والغطس السطحي قرب جزيرة التلغراف، وطريق جبل حريم.",
    "Beaches on Al Marjan Island, kayaking the Al Qurm mangroves, Jebel Jais an hour away.": "شواطئ جزيرة المرجان، والكاياك في قرم القرم، وجبل جيس على بعد ساعة.",
    "Lifeguarded Corniche beach, the cycle path, kayaking in Mangrove National Park.": "شاطئ الكورنيش بوجود منقذين، ومسار الدراجات، والكاياك في حديقة القرم الوطنية.",
    "Kite Beach and JBR for a swim and a run on the track.": "كايت بيتش وJBR للسباحة والجري على المسار.",
    "Oman: you cross the border at Tibat (via RAK). Bring your passport or Emirates ID, check visa rules for your nationality, and get Oman cover on your car insurance.": "عُمان: تعبر الحدود من منفذ تيبات (عبر رأس الخيمة). أحضر جواز سفرك أو الهوية الإماراتية، وتحقق من شروط التأشيرة لجنسيتك، وأضف تغطية عُمان إلى تأمين سيارتك."
  }, PLACE), [
    [/^(-?\d+(?:\.\d+)?)°C$/, '$1°C'],
    [/^(\d+) km\/h$/, '$1 كم/س'],
    [rePlace, function (m, i, p) { return i + '. ' + PLACE[p]; }],
    [/^Fetching forecasts for 12 places and (.+)…$/, function (m, c) { return 'جارٍ جلب التوقعات لـ12 مكانًا و' + city(c) + '…'; }],
    [/^Best for (cool air|a swim|a hike|a night outdoors) (this weekend|on Saturday|on Sunday|today)$/, function (m, w, d) { return 'الأفضل ' + WANT[w] + ' ' + WHEN[d]; }],
    [/^(.+?)\. (Looks great\.|Decent, with some compromises\.|Nowhere is ideal (this weekend|on Saturday|on Sunday|today), but this is the least bad\.)$/, function (m, ls, q, d) {
      var Q = /^Looks/.test(q) ? 'يبدو رائعًا.' : /^Decent/.test(q) ? 'جيد، مع بعض التنازلات.' : 'لا يوجد مكان مثالي ' + WHEN[d] + '، لكن هذا الأقل سوءًا.';
      return ls.split(', ').map(line).join('، ') + '. ' + Q; }],
    [/^(.+): high (-?\d+)°C, low (-?\d+)°C(?:, (\d+)% humidity in the day)?\.$/, function (m, c, hi, lo, rh) { return city(c) + ': العظمى ' + hi + '\u200E°C، الصغرى ' + lo + '\u200E°C' + (rh ? '، ورطوبة ' + rh + '% نهارًا' : '') + '.'; }],
    [/^(.+) · ~(.+) from (.+)$/, function (m, r, t, c) { return (REGION[r] || r) + ' · نحو ' + hm(t) + ' من ' + city(c); }],
    [/^(\d+)° cooler than (.+)$/, function (m, n, c) { return 'أبرد من ' + city(c) + ' بـ' + n + '\u200E°\u200E'; }],
    [/^(\d+)° warmer than (.+)$/, function (m, n, c) { return 'أدفأ من ' + city(c) + ' بـ' + n + '\u200E°\u200E'; }],
    [/^About the same as (.+)$/, function (m, c) { return 'مثل ' + city(c) + ' تقريبًا'; }],
    [/^(-?\d+)°C max(?: · score (\d+))?$/, function (m, t, s) { return 'العظمى ' + t + '\u200E°C' + (s ? ' · التقييم ' + s : ''); }],
    [reBest, function (m, k, h) { h = h.trim(); return BEST[k] + (h ? ' ' + hint(h) : ''); }]
  ]);
})();
