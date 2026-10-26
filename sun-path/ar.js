(function () {
  var C = { N: 'شمال', NE: 'شمال شرق', E: 'شرق', SE: 'جنوب شرق', S: 'جنوب', SW: 'جنوب غرب', W: 'غرب', NW: 'شمال غرب' };
  var KIND = { 'full sun': 'شمس كاملة', 'part sun': 'شمس جزئية', 'mostly shade': 'ظل في الغالب' };
  function t(h, m, ap) { return h + (m ? ':' + m : '') + (ap === 'am' ? ' ص' : ' م'); }
  function tt(s) { return s.replace(/(\d+)(?::(\d\d))?(am|pm)/g, function (x, h, m, ap) { return t(h, m, ap); }); }
  function span(s) {
    if (!s) return '';
    if (s === ' (early morning and late afternoon)') return ' (في الصباح الباكر وآخر العصر)';
    var m = s.match(/^ \((.+) to (.+)\)$/); return m ? ' (من ' + tt(m[1]) + ' إلى ' + tt(m[2]) + ')' : s;
  }
  var d = {
    "Sun Path on Your Balcony": "مسار الشمس على شرفتك",
    "Tool · Home · Camera": "أداة · المنزل · كاميرا",
    "Sun path on your balcony.": "مسار الشمس على شرفتك.",
    "Stand at your window or on your balcony and point your phone out. You'll see the sun's path today drawn over the view, along with its highest path in June and lowest in December. That tells you where shade falls, where plants will thrive or burn, and whether a solar panel or a new curtain is worth it.": "قف عند نافذتك أو في شرفتك ووجّه هاتفك إلى الخارج. سترى مسار الشمس اليوم مرسومًا فوق المشهد، ومعه أعلى مساراتها في يونيو وأدناها في ديسمبر. هكذا تعرف أين يقع الظل، وأين ستزدهر النباتات أو تحترق، وهل يستحق الأمر لوحًا شمسيًا أو ستارة جديدة.",
    "Start the camera": "شغّل الكاميرا",
    "Explore without camera": "استكشف دون كاميرا",
    "Your phone will ask for the camera, motion sensors and location. Nothing leaves your device.": "سيطلب هاتفك الإذن باستخدام الكاميرا وحساسات الحركة والموقع. لا شيء يغادر جهازك.",
    "21 June (longest day)": "21 يونيو (أطول يوم)",
    "21 December (shortest day)": "21 ديسمبر (أقصر يوم)",
    "Horizon": "الأفق",
    "Which way does your window face?": "إلى أي اتجاه تطل نافذتك؟",
    "Or set it from the camera's direction": "أو حدده من اتجاه الكاميرا",
    "Use where I'm pointing": "استخدم الاتجاه الذي أشير إليه",
    "Start the view first": "شغّل العرض أولًا",
    "Hours of direct sun on the window, each month": "ساعات الشمس المباشرة على النافذة في كل شهر",
    "Reading the result": "كيف تقرأ النتيجة",
    "<b>For plants:</b> 6 hours or more of sun is \"full sun\" (bougainvillea, frangipani, herbs in winter). 3 to 6 hours is \"part sun\", good for most balcony plants. Under 3 hours suits shade lovers such as pothos and peace lilies. In a UAE summer, afternoon sun from the west is the harshest, so even sun-loving plants want shade after 2 pm.": "<b>للنباتات:</b> 6 ساعات أو أكثر من الشمس تعني «شمسًا كاملة» (الجهنمية والفتنة والأعشاب في الشتاء). ومن 3 إلى 6 ساعات «شمس جزئية» تناسب معظم نباتات الشرفات. وأقل من 3 ساعات يناسب محبي الظل مثل البوتس وزنبق السلام. وفي صيف الإمارات تكون شمس العصر من الغرب هي الأقسى، لذا تحتاج حتى النباتات المحبة للشمس إلى الظل بعد الساعة 2 ظهرًا.",
    "<b>For cooling:</b> windows facing west or south-west take the most heat in the hot months. Shade or reflective film on them saves the most on cooling bills. North-facing windows get almost no direct sun and stay cooler.": "<b>للتبريد:</b> النوافذ المطلة على الغرب أو الجنوب الغربي تتلقى أكبر قدر من الحرارة في الأشهر الحارة، وتظليلها أو تركيب طبقة عاكسة عليها يوفر أكثر في فواتير التبريد. أما النوافذ المطلة على الشمال فلا تكاد تصلها الشمس المباشرة وتبقى أبرد.",
    "Paths are calculated for your location (Abu Dhabi if you don't share it) and ignore buildings around you. That's what the camera is for: you can see whether a tower blocks part of the path.": "تُحسب المسارات لموقعك (أو أبوظبي إن لم تشاركه)، ولا تأخذ المباني المحيطة بك في الحسبان. ولهذا وُجدت الكاميرا: لترى إن كان برج ما يحجب جزءًا من المسار.",
    "noon": "الظهر",
    "Sun now": "الشمس الآن",
    "Sun (below horizon)": "الشمس (تحت الأفق)",
    "It takes the hot afternoon sun, so shade it in summer.": "تتلقى شمس العصر الحارة، فظلّلها في الصيف.",
    "Morning sun only, the gentlest kind.": "شمس الصباح فقط، وهي الألطف.",
    "Almost no direct sun all year, so it stays the coolest.": "لا تكاد تصلها الشمس المباشرة طوال العام، لذا تبقى الأبرد.",
    "Sun mostly in winter, when it's welcome. The summer sun is so high it barely reaches inside.": "تصلها الشمس غالبًا في الشتاء حين تكون مرغوبة. أما شمس الصيف فعالية جدًا فلا تكاد تدخل."
  };
  for (var k in C) d[k] = C[k];
  ["J", "F", "M", "A", "O", "D"].forEach(function (x) { d[x] = x; }); // month initials, replaced by numbers below
  LabAr.add(d, [
    [/^(\d+)(am|pm)$/, function (m, h, ap) { return t(h, '', ap); }],
    [/^(\d+(?:\.\d+)?) h$/, '$1 ساعة'],
    [/^Facing (\d+)° (N|NE|E|SE|S|SW|W|NW) · (up|down) (\d+)°$/, function (m, a, c, u, b) { return 'الاتجاه ' + a + '° ' + C[c] + ' · ' + (u === 'up' ? 'للأعلى ' : 'للأسفل ') + b + '°'; }],
    [/^Facing (N|NE|E|SE|S|SW|W|NW) \((\d+)°\): (full sun|part sun|mostly shade) in winter$/, function (m, c, a, k) { return 'باتجاه ' + C[c] + ' (' + a + '°): ' + KIND[k] + ' في الشتاء'; }],
    [/^About ([\d.]+) h of direct sun a day in winter( \(.+?\))?, and ([\d.]+) h in summer( \(.+?\))?\.$/, function (m, w, ws, s, ss) { return 'نحو ' + w + ' ساعة من الشمس المباشرة يوميًا في الشتاء' + span(ws) + '، و' + s + ' ساعة في الصيف' + span(ss) + '.'; }],
    [/^.*[؀-ۿ⁦-⁩].*$/, '$&']
  ]);
  // month initials (J F M ...) can't be told apart from their text, so number the months instead
  function months() {
    var el = document.getElementById('months'); if (!el) return;
    var fix = function () { [].forEach.call(el.children, function (div, i) { var n = div.lastChild; if (n && n.nodeType === 3 && n.nodeValue !== String(i + 1)) n.nodeValue = String(i + 1); }); };
    fix(); new MutationObserver(fix).observe(el, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', months); else months();
})();
