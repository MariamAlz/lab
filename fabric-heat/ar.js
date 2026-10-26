(function () {
  var C = { Black: 'أسود', Navy: 'كحلي', Grey: 'رمادي', Beige: 'بيج', White: 'أبيض' };
  var WV = { crepe: 'كريب', nida: 'ندى', chiffon: 'شيفون', cotton: 'قطن', linen: 'كتّان', polyester: 'بوليستر' };
  var FT = { loose: 'واسع', regular: 'عادي', fitted: 'ضيّق' };
  var PL = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Liwa': 'ليوا', 'Your location': 'موقعك', 'Typical July day': 'يوم نموذجي في يوليو' };
  function P(n) { return PL[n] || n; }
  LabAr.add({
    "Abaya and kandura in the sun.": "العباءة والكندورة تحت الشمس.",
    "Learn · Physics · UAE · Live": "تعلّم · فيزياء · الإمارات · مباشر",
    "Black soaks up sunlight and white reflects it. But how hot does the cloth get, and how much of that reaches your skin? This takes today's live sun, wind and temperature where you are and compares colours and weaves side by side.":
      "الأسود يمتص ضوء الشمس والأبيض يعكسه. لكن إلى أي حد يسخن القماش، وكم من هذه الحرارة يصل إلى جلدك؟ تأخذ هذه الأداة الشمس والرياح ودرجة الحرارة الحية اليوم في مكانك، وتقارن الألوان وأنواع النسيج جنبًا إلى جنب.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Air temperature": "حرارة الهواء",
    "Sunshine": "أشعة الشمس",
    "Right now": "الآن",
    "Today's strongest sun": "أقوى شمس اليوم",
    "Ranked · hottest on the skin first": "مرتّبة · الأشد حرارة على الجلد أولًا",
    "Fabric surface, sun-facing side": "سطح القماش، الجهة المواجهة للشمس",
    "Feels on the skin underneath": "الإحساس على الجلد تحته",
    "Fabric surface through today": "سطح القماش على مدار اليوم",
    "Colours": "الألوان",
    "Pick a custom colour": "اختر لونًا مخصّصًا",
    "+ Add this colour": "+ أضف هذا اللون",
    "Weave": "النسيج",
    "Fit": "القَصّة",
    "Myth check: is a black robe always hotter?": "تصحيح خرافة: هل الثوب الأسود أشد حرارة دائمًا؟",
    "In 1980, Shkolnik and colleagues measured Bedouin robes in the Negev desert (Nature, vol. 283). Black robes got about 6°C hotter on the outside than white ones. Yet the heat reaching the body was about the same. The hot black cloth warms the air inside, the warm air rises and leaves through the opening, and wind pumps the loose robe like a bellows, carrying the heat away before it reaches the skin.":
      "في عام 1980 قاس شكولنيك وزملاؤه أثواب البدو في صحراء النقب (مجلة Nature، المجلد 283). كانت الأثواب السوداء من الخارج أسخن من البيضاء بنحو 6°C، ومع ذلك كانت الحرارة الواصلة إلى الجسم متقاربة. فالقماش الأسود الساخن يدفّئ الهواء في الداخل، والهواء الدافئ يرتفع ويخرج من الفتحة، والرياح تنفخ الثوب الواسع كالمنفاخ فتحمل الحرارة بعيدًا قبل أن تصل إلى الجلد.",
    "The catch is the word loose. Switch the fit to \"fitted\" above and black pulls clearly ahead, because there's no air gap to carry heat away.": "السر في كلمة «واسع». غيّر القَصّة أعلاه إلى «ضيّق» وسترى الأسود يتقدّم بوضوح، لأنه لا توجد فجوة هواء تحمل الحرارة بعيدًا.",
    "<b>How the estimate works.</b> The sun-facing side of the cloth gets about 40% of the sunshine falling on flat ground. It absorbs a share set by its colour: about 90% for black, 30% for white. It sheds that heat by wind on the outside, by radiation, and by air moving through the gap inside. Thin, open weaves like chiffon let more air through but also let some sunlight straight onto the skin, and light colours let more through than dark ones. Skin is taken as 34°C.":
      "<b>كيف يُحسب التقدير.</b> تتلقّى الجهة المواجهة للشمس من القماش نحو 40% من أشعة الشمس الساقطة على أرض مستوية. ويمتص منها نسبة يحددها لونه: نحو 90% للأسود و30% للأبيض. ويتخلّص من هذه الحرارة بالرياح من الخارج، وبالإشعاع، وبالهواء المارّ في الفجوة من الداخل. الأنسجة الرقيقة المفتوحة مثل الشيفون تمرّر هواءً أكثر، لكنها تسمح أيضًا لبعض أشعة الشمس بالوصول إلى الجلد مباشرة، والألوان الفاتحة تمرّر أكثر من الداكنة. تُفترض حرارة الجلد 34°C.",
    "This is a simple energy-balance model to compare fabrics, not a lab measurement. Real numbers depend on how you move, sweat, shade and the exact fabric. Weather from Open-Meteo.": "هذا نموذج بسيط لتوازن الطاقة للمقارنة بين الأقمشة، وليس قياسًا مخبريًا. الأرقام الحقيقية تعتمد على حركتك وتعرّقك والظل ونوع القماش بالضبط. بيانات الطقس من Open-Meteo.",
    "Sun, W/m²": "الشمس، W/m²",
    "Wind, km/h": "الرياح، km/h",
    "Air now": "الهواء الآن",
    "The sun is low or down, so colour barely matters right now.": "الشمس منخفضة أو غائبة، لذا لا يكاد اللون يُحدث فرقًا الآن.",
    "Bare skin in the sun": "جلد مكشوف تحت الشمس",
    "Pick at least one colour and one weave.": "اختر لونًا واحدًا ونسيجًا واحدًا على الأقل.",
    "Fabric surface temperature by hour": "حرارة سطح القماش حسب الساعة",
    "Couldn't reach the weather service. Showing a typical clear summer noon in Dubai instead.": "تعذّر الوصول إلى خدمة الطقس. نعرض بدلًا من ذلك ظهيرة صيفية صافية نموذجية في دبي.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك.",
    "Black": "أسود", "Navy": "كحلي", "Grey": "رمادي", "Beige": "بيج", "White": "أبيض",
    "Crepe": "كريب", "Nida": "ندى", "Chiffon": "شيفون", "Cotton": "قطن", "Linen": "كتّان", "Polyester": "بوليستر",
    "Loose": "واسع", "Regular": "عادي", "Fitted": "ضيّق",
    "Liwa": "ليوا"
  }, [
    [/^Abaya & Kandura in the Sun$/, 'العباءة والكندورة تحت الشمس'],
    [/^Air at (\d\d:\d\d)$/, 'الهواء الساعة $1'],
    [/^-?\d+(?:\.\d+)?°C$/, function (m) { return m; }],
    [/^Custom (#[0-9A-F]{6})$/, 'لون مخصّص \u200E$1'],
    [/^(Black|Navy|Grey|Beige|White|Custom #[0-9A-F]{6}) (crepe|nida|chiffon|cotton|linen|polyester)$/, function (m, c, w) { return WV[w] + ' ' + (C[c] || 'مخصّص'); }],
    [/^absorbs about (\d+)% of sunlight$/, 'يمتص نحو $1% من ضوء الشمس'],
    [/^Lines: (\w+), (\w+) fit, one per colour\. Dashed grey: air temperature\.$/, function (m, w, f) { return 'الخطوط: ' + (WV[w] || w) + '، قَصّة ' + (FT[f] || f) + '، خط لكل لون. الخط الرمادي المتقطّع: حرارة الهواء.'; }],
    [/^Fetching today's sun and wind for (.+)…$/, function (m, n) { return 'جارٍ جلب شمس اليوم ورياحه في ' + P(n) + '…'; }],
    [/^(.+) · Open-Meteo, updated (\d\d:\d\d) local time$/, function (m, n, t) { return P(n) + ' · Open-Meteo، آخر تحديث ' + t + ' بالتوقيت المحلي'; }]
  ]);
  // the shared dictionary may load after this file and would win for this key; add it again once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { LabAr.add({ "now": "الآن" }); });
})();
