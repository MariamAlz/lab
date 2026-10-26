/* keep "23°C"-style values left-to-right inside Arabic text */
var LabArDeg = function (d, p) {
  function fx(s) { return typeof s === 'string' ? s.replace(/\u2066[^\u2069]*\u2069|(?:[-\u2212]?(?:\d+(?:\.\d+)?|\$\d)(?:\u2013[-\u2212]?\d+)?)\s?\u00b0[CFNESW]?/g, function (m) { return m.charAt(0) === '\u2066' ? m : '\u2066' + m + '\u2069'; }) : s; }
  for (var k in d) d[k] = fx(d[k]);
  LabAr.add(d, (p || []).map(function (x) { var r = x[1]; return [x[0], typeof r === 'function' ? function () { return fx(r.apply(null, arguments)); } : fx(r)]; }));
};
(function () {
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var SPOT = { 'Liwa (Moreeb)': 'ليوا (تل مرعب)', 'Al Qudra': 'القدرة', 'Al Wathba': 'الوثبة', 'Jebel Jais': 'جبل جيس', 'Hatta': 'حتا', 'Fossil Rock': 'صخرة الأحافير', 'Al Badayer': 'البداير', 'Rub al Khali edge': 'طرف الربع الخالي' };
  var WX = { 'clear': 'صافية', 'some cloud': 'غيوم قليلة', 'cloudy': 'غائمة', 'overcast': 'غائمة كليًا' };
  var D = '(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (\\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)';
  function dl(w, d, m) { return WD[w] + ' ' + d + ' ' + MO[m]; }
  function sp(n) { return SPOT[n] || n; }
  function moonTimes(s) { return s.replace(/rise (\d\d:\d\d)/g, 'شروق $1').replace(/set (\d\d:\d\d)/g, 'غروب $1'); }
  var dict = {
    "Desert Night Planner": "مخطط ليالي الصحراء",
    "Tool · Space · Weather · Live": "أداة · الفضاء · الطقس · مباشر",
    "Desert night planner.": "مخطط ليالي الصحراء.",
    "Heading out to camp under the stars? Pick a spot to see the next 14 nights: when the sky is truly dark, when the Moon is up, whether the Milky Way's bright core is visible, and the cloud and wind forecast. The best nights are ranked at the top.": "تخطط للتخييم تحت النجوم؟ اختر مكانًا لترى الليالي الأربع عشرة القادمة: متى تكون السماء مظلمة تمامًا، ومتى يكون القمر ظاهرًا، وهل يُرى قلب درب التبانة الساطع، مع توقعات الغيوم والرياح. أفضل الليالي تظهر في الأعلى.",
    "Working it out…": "جارٍ الحساب…",
    "The next 14 nights · sunset to sunrise, UAE time": "الليالي الأربع عشرة القادمة · من الغروب إلى الشروق، بتوقيت الإمارات",
    "Daylight": "نهار", "Twilight": "شفق", "Dark, no Moon": "ظلام بلا قمر", "Moon up": "القمر ظاهر", "Milky Way core above 10°": "قلب درب التبانة فوق 10°",
    "How the ranking works": "كيف يتم الترتيب",
    "<b>Dark hours</b> count the time when the Sun is more than 18° below the horizon (astronomical night) and the Moon is down or only a thin sliver. That's when the faint stars and the Milky Way show. Each night's score is those dark hours, reduced by the forecast cloud cover, with a penalty for strong wind and a bonus for hours when the Milky Way's core is up.": "<b>ساعات الظلام</b> هي الوقت الذي تكون فيه الشمس أكثر من 18° تحت الأفق (الليل الفلكي) والقمر غائبًا أو هلالًا رفيعًا. حينها تظهر النجوم الخافتة ودرب التبانة. ونتيجة كل ليلة هي ساعات الظلام هذه بعد خصم نسبة الغيوم المتوقعة، مع خصم إضافي للرياح القوية ومكافأة للساعات التي يكون فيها قلب درب التبانة ظاهرًا.",
    "The <b>Milky Way core</b> is the bright, dusty centre of our galaxy, in Sagittarius. From the UAE it's best from March to September. In winter it's below the horizon all night, but the winter sky has Orion, Sirius and the Pleiades instead.": "<b>قلب درب التبانة</b> هو المركز الساطع المغبر لمجرتنا، في كوكبة القوس. ويكون في أفضل حالاته من الإمارات بين مارس وسبتمبر. وفي الشتاء يبقى تحت الأفق طوال الليل، لكن سماء الشتاء تعوّض بالجبار والشِّعرى اليمانية والثريا.",
    "Moon times are calculated for the spot. Weather comes from the Open-Meteo forecast, which covers up to 16 days but becomes much less reliable after 4 or 5. Forecasts can't see local dust, so check again on the day.": "أوقات القمر محسوبة للمكان المختار. أما الطقس فمن توقعات Open-Meteo التي تغطي حتى 16 يومًا، لكنها تصبح أقل دقة بكثير بعد 4 أو 5 أيام. ولا ترصد التوقعات الغبار المحلي، فتحقق مجددًا في يوم الرحلة.",
    "Before you go": "قبل أن تنطلق",
    "Let your eyes adjust for 20 minutes with no phone screens, or use a red light. Park and camp well away from car headlights and the glow on the horizon from cities. Desert nights in winter can drop below 10°C, and Jebel Jais can get close to freezing. Wind over 30 km/h lifts sand and makes tents miserable.": "امنح عينيك 20 دقيقة لتتكيفا مع الظلام دون شاشات الهاتف، أو استخدم ضوءًا أحمر. اركن سيارتك وخيّم بعيدًا عن أضواء السيارات وعن وهج المدن في الأفق. قد تنخفض حرارة ليالي الصحراء شتاءً إلى أقل من 10°C، وقد يقترب جبل جيس من درجة التجمد. والرياح التي تتجاوز 30 km/h تثير الرمال وتجعل الخيام مزعجة.",
    "Tell someone where you're going, carry plenty of water and a charged phone, and only drive in the dunes with experience and a second car. Some areas are protected or need permission for camping, so check local rules first.": "أخبر أحدًا بوجهتك، واحمل ماءً وفيرًا وهاتفًا مشحونًا، ولا تقُد في الكثبان إلا إن كانت لديك خبرة وبرفقتك سيارة ثانية. بعض المناطق محمية أو تتطلب تصريحًا للتخييم، فتحقق من القواعد المحلية أولًا.",
    "Moon tonight": "القمر الليلة", "next new moon": "المحاق القادم", "Out of season": "خارج موسمه",
    "Milky Way core, best night": "قلب درب التبانة، أفضل ليلة", "Milky Way core": "قلب درب التبانة",
    "dark": "ظلام", "no forecast": "لا توقعات",
    "Couldn't reach the weather forecast, so this ranks nights on darkness only.": "تعذّر الوصول إلى توقعات الطقس، لذا رُتّبت الليالي حسب الظلام فقط."
  };
  for (var k in SPOT) dict[k] = SPOT[k];
  LabArDeg(dict, [
    [new RegExp('^' + D + '$'), function (m, w, d, mo) { return dl(w, d, mo); }],
    [new RegExp('^' + D + ' night$'), function (m, w, d, mo) { return 'ليلة ' + dl(w, d, mo); }],
    [/^Best night at (.+)$/, function (m, n) { return 'أفضل ليلة في ' + sp(n); }],
    [/^(\d+)% lit$/, '$1% مضاء'],
    [/^(\d+(?:\.\d+)?) h$/, '$1 ساعة'],
    [/^Moon (\d+)%(.*)$/, function (m, p, rest) { return 'القمر ' + p + '%' + moonTimes(rest); }],
    [/^#(\d+) best$/, 'الأفضل #$1'],
    [/^low (-?\d+)°C$/, 'الصغرى $1°C'],
    [/^☁ (\d+)% · 💨 (\d+) km\/h$/, '☁ $1% · 💨 $2 km/h'],
    [/^Working out the sky and fetching the forecast for (.+)…$/, function (m, n) { return 'جارٍ حساب السماء وجلب التوقعات لـ' + sp(n) + '…'; }],
    [/^(.+) · ([\d.]+)°N, ([\d.]+)°E · forecast from Open-Meteo$/, function (m, n, a, b) { return sp(n) + ' · \u2066' + a + '°N, ' + b + '°E\u2069 · التوقعات من Open-Meteo'; }],
    [/^Sunset (\S+), dark (\S+) to (\S+), Moon (\d+)% ?(.*)$/, function (m, s, a, b, p, mt) { return 'الغروب ' + s + '، الظلام من ' + a + ' إلى ' + b + '، القمر ' + p + '% ' + moonTimes(mt).replace(/, /g, '، '); }],
    [/^(\d+\.\d) hours of moonless dark sky(?: from (\d\d:\d\d))?, (.+?)(?:, down to about (-?\d+)°C)?\. (.+)$/, function (m, h, from, wx, t, gc) {
      var s = h + ' ساعة من الظلام بلا قمر' + (from ? ' ابتداءً من ' + from : '') + '، ';
      if (wx === 'no forecast yet') s += 'لا توقعات بعد';
      else { var w = wx.match(/^(clear|some cloud|cloudy|overcast), wind up to (\d+) km\/h$/); s += w ? 'السماء ' + WX[w[1]] + '، والرياح حتى ' + w[2] + ' km/h' : wx; }
      if (t != null) s += '، وتنخفض الحرارة إلى نحو ' + t + '°C';
      s += '. ';
      var g = gc.match(/^The Milky Way core is up for ([\d.]+) dark hours\.$/);
      s += g ? 'يظهر قلب درب التبانة لمدة ' + g[1] + ' ساعة من ساعات الظلام.' : 'قلب درب التبانة منخفض جدًا أو تحت الأفق خلال ساعات الظلام.';
      return s;
    }]
  ]);
})();
