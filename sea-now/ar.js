(function () {
  var B = { 'Kite Beach, Dubai': 'كايت بيتش، دبي', 'Saadiyat': 'السعديات', 'Corniche, Abu Dhabi': 'كورنيش أبوظبي', 'Al Mamzar': 'الممزر', 'Al Aqah, Fujairah': 'العقة، الفجيرة', 'Khor Fakkan': 'خورفكان', 'Al Marjan, RAK': 'جزيرة المرجان، رأس الخيمة', 'Your location': 'موقعك' };
  var CP = { N: 'الشمال', NE: 'الشمال الشرقي', E: 'الشرق', SE: 'الجنوب الشرقي', S: 'الجنوب', SW: 'الجنوب الغربي', W: 'الغرب', NW: 'الشمال الغربي' };
  var ACT = { swimming: 'للسباحة', kitesurfing: 'للكايت سيرف', paddleboarding: 'للتجديف وقوفًا', 'boat trip': 'لرحلة بالقارب' };
  var WORD = { 'Good': 'مناسب', 'OK, with care': 'مقبول، بحذر', 'Not advised': 'لا يُنصح', 'Too light': 'رياح ضعيفة' };
  var REL = { onshore: 'باتجاه الشاطئ', offshore: 'من البر نحو البحر', 'cross-shore': 'موازية للشاطئ' };
  var WHY = {
    'some waves': 'بعض الأمواج', 'rough water': 'مياه هائجة', 'strong wind': 'رياح قوية', 'breezy': 'نسيم نشط',
    'offshore wind can carry floats out': 'الرياح القادمة من البر قد تجرف العوّامات إلى البحر',
    'after dark: most public beaches ban night swimming': 'بعد حلول الظلام: معظم الشواطئ العامة تمنع السباحة ليلًا',
    'chilly water': 'مياه باردة', 'bath-warm water, check for jellyfish': 'مياه دافئة جدًا، انتبه لقناديل البحر',
    'not enough wind': 'الرياح غير كافية', 'light: big kite needed': 'رياح خفيفة: تحتاج طائرة كبيرة', 'too strong': 'قوية جدًا',
    'strong: small kite, experts': 'قوية: طائرة صغيرة، للمحترفين', 'offshore wind, never kite in it': 'رياح من البر، لا تمارس الكايت فيها أبدًا',
    'gusty': 'هبّات متقطعة', 'big waves': 'أمواج كبيرة', 'dark': 'الظلام', 'too windy': 'رياح شديدة', 'some wind': 'بعض الرياح',
    'too choppy': 'متلاطم جدًا', 'small chop': 'تلاطم خفيف', 'offshore wind pushes boards out to sea': 'الرياح من البر تدفع الألواح نحو البحر',
    'rough sea': 'بحر هائج', 'moderate sea': 'بحر متوسط', 'fresh wind': 'رياح منعشة', 'short, steep waves: a bumpy ride': 'أمواج قصيرة وحادة: رحلة متقلبة'
  };
  var KEYS = Object.keys(WHY).sort(function (a, b) { return b.length - a.length; });
  function why(s) {
    var x = s, out = [];
    while (x.length) {
      var hit = null;
      for (var i = 0; i < KEYS.length; i++) if (x.indexOf(KEYS[i]) === 0) { hit = KEYS[i]; break; }
      if (!hit) return null;
      out.push(WHY[hit]); x = x.slice(hit.length).replace(/^, /, '');
    }
    return out.join('، ');
  }
  function hr(h, a) { return h + ' ' + (a === 'am' ? 'ص' : 'م'); }
  var DAYS = { Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد' };
  var BN = Object.keys(B).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
  var d = {};
  Object.keys(B).forEach(function (k) { d[k] = B[k]; });
  Object.keys(WORD).forEach(function (k) { d[k] = WORD[k]; });
  LabAr.add(Object.assign(d, {
    "Tool · Sea · UAE · Live": "أداة · البحر · الإمارات · مباشر",
    "Beach and sea now.": "الشاطئ والبحر الآن.",
    "Is today a good sea day? Pick a beach to see waves, wind and water temperature, with a simple verdict for swimming, kitesurfing, paddleboarding and a boat trip. The strip below shows the best hours over the next two days.": "هل اليوم مناسب للبحر؟ اختر شاطئًا لترى الأمواج والرياح وحرارة المياه، مع حكم بسيط للسباحة والكايت سيرف والتجديف وقوفًا ورحلات القوارب. ويعرض الشريط أدناه أفضل الساعات خلال اليومين القادمين.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Next 48 hours": "الساعات الـ 48 القادمة",
    "OK, with care": "مقبول، بحذر",
    "Too light (kite)": "رياح ضعيفة (للكايت)",
    "Faded = dark": "باهت = ظلام",
    "How the verdicts work": "كيف تُحدَّد الأحكام",
    "<b>Waves</b> here are the significant wave height: the average of the biggest third of waves. About one wave in a hundred is nearly twice that size. <b>Period</b> is the time between waves. Long-period swell, which reaches the east coast from the Arabian Sea, carries more power than its height suggests.": "<b>الأمواج</b> هنا هي الارتفاع الكبير للموج: متوسط أعلى ثلث من الأمواج. وتقريبًا موجة من كل مئة تكون ضعف هذا الحجم. و<b>الدورة</b> هي الزمن بين موجة وأخرى. والأمواج الطويلة الدورة التي تصل إلى الساحل الشرقي من بحر العرب تحمل قوة أكبر مما يوحي به ارتفاعها.",
    "<b>Wind direction matters as much as speed.</b> Onshore wind (from the sea) brings chop but pushes you back to the beach. Offshore wind (from the land) looks calm near the shore but can blow a paddleboard, kite or swimmer out to sea, so the verdicts get stricter. In winter, the shamal wind from the north-west can rise quickly on the Gulf coast.": "<b>اتجاه الرياح مهم بقدر سرعتها.</b> الرياح القادمة من البحر تجلب التلاطم لكنها تدفعك نحو الشاطئ. أما الرياح القادمة من البر فتبدو هادئة قرب الشاطئ، لكنها قد تدفع لوح التجديف أو الطائرة الشراعية أو السبّاح نحو عرض البحر، لذا تصبح الأحكام أشد صرامة. وفي الشتاء قد تشتد رياح الشمال القادمة من الشمال الغربي بسرعة على ساحل الخليج.",
    "These are model forecasts from Open-Meteo, not readings from a buoy at the beach, and a guide rather than safety advice. Swim at beaches with lifeguards, follow the beach flags and coast guard warnings, and check with your boat operator. In an emergency call 999.": "هذه توقعات نموذجية من Open-Meteo، وليست قراءات من عوّامة عند الشاطئ، وهي دليل لا نصيحة سلامة. اسبح في الشواطئ التي فيها منقذون، والتزم بأعلام الشاطئ وتحذيرات خفر السواحل، وتحقّق مع مشغّل القارب. وفي الطوارئ اتصل بـ 999.",
    "Swimming": "السباحة", "Kitesurfing": "الكايت سيرف", "Paddleboarding": "التجديف وقوفًا", "Boat trip": "رحلة بالقارب",
    "Conditions look fine right now.": "الأحوال تبدو جيدة الآن.",
    "Waves": "الأمواج", "Swell": "الموج المتضخم", "Water": "المياه", "Air": "الهواء",
    "cool, a wetsuit helps": "باردة، بدلة الغوص تفيد", "pleasant": "لطيفة", "warm": "دافئة", "very warm": "دافئة جدًا",
    "No data": "لا توجد بيانات",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقّق من اتصالك وحاول مرة أخرى.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a beach instead.": "لم تتم مشاركة الموقع. اختر شاطئًا بدلًا من ذلك."
  }), [
    [/^Beach & Sea Now$/, 'الشاطئ والبحر الآن'],
    [/^([\d.]+) m$/, '$1 م'],
    [/^every (\d+) s$/, 'كل $1 ث'],
    [/^(\d+) s period$/, 'دورة $1 ث'],
    [/^(\d+) kn$/, '$1 عقدة'],
    [/^(-?\d+)°C$/, '$1°C'],
    [/^UV (\d+|—)$/, 'UV $1'],
    [/^from (N|NE|E|SE|S|SW|W|NW|)(?:, (onshore|offshore|cross-shore))? · gusts (\d+)$/, function (m, c, r, g) { return 'من ' + (CP[c] || '—') + (r ? '، ' + REL[r] : '') + ' · هبّات ' + g; }],
    [/^(\d\d)-(\d\d) (\d+)(am|pm): (Good|OK, with care|Not advised|Too light)(?: \((.+)\))?\. Waves (?:([\d.]+) m|–), wind (\d+) kn from (N|NE|E|SE|S|SW|W|NW|)$/, function (m, mo, dd, h, a, w, r, wv, wd, c) {
      return dd + '/' + mo + ' ' + hr(h, a) + ': ' + WORD[w] + (r ? ' (' + (why(r) || r) + ')' : '') + '. الأمواج ' + (wv ? wv + ' م' : '–') + '، الرياح ' + wd + ' عقدة من ' + (CP[c] || '—');
    }],
    [/^Numbers on top are (wind in knots|wave height in metres)\. A gap marks midnight\.$/, function (m, w) { return 'الأرقام في الأعلى هي ' + (w === 'wind in knots' ? 'سرعة الرياح بالعقدة' : 'ارتفاع الموج بالمتر') + '. الفراغ يدل على منتصف الليل.'; }],
    [/^Numbers on top are (wind in knots|wave height in metres)\. A gap marks midnight\. No clearly good daylight hour for (.+) in the next 48 hours\.$/, function (m, w, a) { return 'الأرقام في الأعلى هي ' + (w === 'wind in knots' ? 'سرعة الرياح بالعقدة' : 'ارتفاع الموج بالمتر') + '. الفراغ يدل على منتصف الليل. لا توجد ساعة نهارية مناسبة بوضوح ' + (ACT[a] || a) + ' خلال الـ 48 ساعة القادمة.'; }],
    [/^Next good hour for (.+):$/, function (m, a) { return 'أقرب ساعة مناسبة ' + (ACT[a] || a) + ':'; }],
    [/^now\.$/, 'الآن.'],
    [/^(today|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) at (\d+)(am|pm)\.$/, function (m, d, h, a) { return (d === 'today' ? 'اليوم' : 'يوم ' + DAYS[d]) + ' الساعة ' + hr(h, a) + '.'; }],
    [new RegExp('^Fetching the sea forecast for (' + BN + ')…$'), function (m, n) { return 'جارٍ جلب توقعات البحر لـ' + B[n] + '…'; }],
    [new RegExp('^(' + BN + ')( · no sea data here\\. Pick a spot on the coast, or a beach above\\.)?( · we don\'t know which way this shore faces, so offshore wind isn\'t checked\\.)?$'), function (m, n, a, b) { return B[n] + (a ? ' · لا توجد بيانات بحرية هنا. اختر موقعًا على الساحل، أو شاطئًا من الأعلى.' : '') + (b ? ' · لا نعرف اتجاه هذا الشاطئ، لذا لا نتحقق من الرياح القادمة من البر.' : ''); }],
    [/^([\s\S]+)\.$/, function (m, s) { var w = why(s.charAt(0).toLowerCase() + s.slice(1)); if (w == null && /i18ndebug/.test(location.search)) window.__i18nMissing.add(m); return w == null ? m : w + '.'; }]
  ]);
})();
