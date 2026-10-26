(function () {
  var NAMES = { 'Alif': 'ألف', 'Bāʾ': 'باء', 'Tāʾ': 'تاء', 'Thāʾ': 'ثاء', 'Jīm': 'جيم', 'Ḥāʾ': 'حاء', 'Khāʾ': 'خاء', 'Dāl': 'دال', 'Dhāl': 'ذال', 'Rāʾ': 'راء', 'Zāy': 'زاي', 'Sīn': 'سين', 'Shīn': 'شين', 'Ṣād': 'صاد', 'Ḍād': 'ضاد', 'Ṭāʾ': 'طاء', 'Ẓāʾ': 'ظاء', 'ʿAyn': 'عين', 'Ghayn': 'غين', 'Fāʾ': 'فاء', 'Qāf': 'قاف', 'Kāf': 'كاف', 'Lām': 'لام', 'Mīm': 'ميم', 'Nūn': 'نون', 'Hāʾ': 'هاء', 'Wāw': 'واو', 'Yāʾ': 'ياء',
    'bāb': 'باب', 'bayt': 'بيت', 'nūr': 'نور' };
  var WORDS = { 'bāb': 1, 'bayt': 1, 'nūr': 1 };
  function nm(n) { return WORDS[n] ? 'كلمة «' + NAMES[n] + '»' : 'حرف ' + NAMES[n]; }
  var names = Object.keys(NAMES).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
  var d = {};
  Object.keys(NAMES).forEach(function (k) { d[k] = nm(k); });
  function strokes(n) { n = +n; return n === 1 ? 'خط واحد' : 'خطوط ونقاط: ' + n; }
  function ord(i) { return 'الخط ' + i; }
  LabAr.add(Object.assign(d, {
    "Arabic Letter Tracing": "تتبّع الحروف العربية",
    "Game · Language · Handwriting": "لعبة · لغة · خط اليد",
    "Arabic letter tracing.": "تتبّع الحروف العربية.",
    "Trace each of the 28 Arabic letters over a faint guide, then try a few joined words. Every attempt gets a score for shape, stroke direction and stroke order, with a tip on what to fix. It works with a finger, a stylus or a mouse, and your best scores stay on this device.": "تتبّع كل حرف من الحروف العربية الثمانية والعشرين فوق دليل باهت، ثم جرّب بعض الكلمات المتصلة. تحصل كل محاولة على درجة للشكل واتجاه الخط وترتيب الخطوط، مع نصيحة لما يحتاج إلى تحسين. تعمل بالإصبع أو القلم الإلكتروني أو الفأرة، وتبقى أفضل درجاتك على هذا الجهاز.",
    "Tracing area. Draw over the faint guide.": "مساحة التتبّع. ارسم فوق الدليل الباهت.",
    "← Back": "→ السابق",
    "▶ Show me": "▶ أرني",
    "Check": "قيّم",
    "Next →": "التالي ←",
    "Start where the gold dot is and follow the arrow.": "ابدأ من النقطة الذهبية واتبع السهم.",
    "Check when I finish the last stroke": "قيّم عند انتهائي من الخط الأخير",
    "Show start points": "أظهر نقاط البداية",
    "traced": "مُنجَزة",
    "stars of": "نجمة من أصل",
    "average best": "متوسط الأفضل",
    "Letters": "الحروف",
    "Joined words": "كلمات متصلة",
    "<b>How the score works.</b> Your line and the guide are each resampled to 48 evenly spaced points, and the score comes from the average gap between matching points. It also checks the same comparison backwards, so it can tell when a stroke was drawn the wrong way, and it checks whether the strokes came in the right order. Dots can be a tap or a short dash.": "<b>كيف تُحسب الدرجة.</b> يُعاد تقسيم خطك والدليل كلٌّ منهما إلى 48 نقطة متساوية التباعد، وتأتي الدرجة من متوسط المسافة بين النقاط المتقابلة. وتُجرى المقارنة نفسها بالعكس أيضًا، فيُعرف إن رُسم الخط في الاتجاه الخاطئ، ويُتحقق كذلك من أن الخطوط جاءت بالترتيب الصحيح. يمكن رسم النقاط بنقرة أو بشَرطة قصيرة.",
    "<b>Why the dot matters.</b> Classical Naskh is measured in dots: the small rhombus a reed pen leaves when pressed once. The 10th-century Baghdad vizier Ibn Muqla is credited with a system that sized each letter in these dots and in proportion to the alif. The guides here are simplified, Naskh-like shapes for practice, not a calligrapher's exemplar.": "<b>لماذا النقطة مهمة.</b> يُقاس خط النسخ الكلاسيكي بالنقاط: وهي المعيّن الصغير الذي يتركه القلم القصبي حين يُضغط مرة واحدة. ويُنسب إلى الوزير البغدادي ابن مقلة في القرن العاشر الميلادي نظامٌ يقدّر حجم كل حرف بهذه النقاط وبالنسبة إلى الألف. الأدلة هنا أشكال مبسّطة قريبة من النسخ للتدريب، وليست نموذجًا لخطاط.",
    "Start over?": "تريد البدء من جديد؟",
    "Reset my progress": "امسح تقدّمي",
    "Draw over the guide first.": "ارسم فوق الدليل أولًا.",
    "Score": "الدرجة",
    "Lovely.": "رائع.",
    "Good.": "جيد.",
    "Getting there.": "تقترب.",
    "Try again.": "حاول مرة أخرى.",
    "Keep dots small: a tap or a tiny dash.": "اجعل النقاط صغيرة: نقرة أو شَرطة قصيرة جدًا.",
    "One dot is missing.": "تنقص نقطة واحدة.",
    "The strokes came in a different order. Follow the numbers.": "جاءت الخطوط بترتيب مختلف. اتبع الأرقام.",
    "Write the main shape first, then the dots.": "اكتب الشكل الرئيسي أولًا، ثم النقاط.",
    "Clean shape, right direction, right order.": "شكل نظيف، واتجاه صحيح، وترتيب صحيح.",
    "Shape is close. Try a steadier, slower line.": "الشكل قريب. جرّب خطًا أثبت وأبطأ.",
    "There are more dots than this word has.": "النقاط أكثر مما في هذه الكلمة.",
    "There are more dots than this letter has.": "النقاط أكثر مما في هذا الحرف.",
    "Press Next for the next one, or Clear to try again.": "اضغط «التالي» للانتقال، أو «مسح» لتحاول مرة أخرى.",
    "Press Clear and try again. Show me plays the strokes.": "اضغط «مسح» وحاول مرة أخرى. زر «أرني» يعرض الخطوط.",
    "Your turn. Start at the gold dot.": "دورك الآن. ابدأ من النقطة الذهبية.",
    "Watch the order and direction.": "راقب الترتيب والاتجاه.",
    "Clear all your best scores?": "هل تريد مسح كل أفضل درجاتك؟"
  }), [
    [new RegExp('^(' + names + ') · (.+)$'), function (m, n) { return nm(n); }],
    [new RegExp('^(' + names + '), best (\\d+)$'), function (m, n, b) { return nm(n) + '، أفضل درجة ' + b; }],
    [/^Letter (\d+) of 28 · (\d+) strokes?(?: and dots)?$/, function (m, i, n) { return 'الحرف ' + i + ' من 28 · ' + strokes(n); }],
    [/^Word (\d+) of (\d+) · (\d+) strokes and dots$/, function (m, i, t, n) { return 'الكلمة ' + i + ' من ' + t + ' · ' + strokes(n); }],
    [/^Stroke (\d+) of (\d+) done\.(?: Next: (?:(a dot)|stroke (\d+))\.)?$/, function (m, a, b, dot, k) { return 'اكتمل ' + ord(a) + ' من ' + b + '.' + (dot ? ' التالي: نقطة.' : k ? ' التالي: ' + ord(k) + '.' : ''); }],
    [/^Stroke (\d+) is missing\.$/, function (m, i) { return ord(i) + ' ناقص.'; }],
    [/^Stroke (\d+) went the wrong way\. Start at the gold dot and follow the arrow\.$/, function (m, i) { return ord(i) + ' رُسم في الاتجاه الخاطئ. ابدأ من النقطة الذهبية واتبع السهم.'; }],
    [/^Stroke (\d+) stopped early\. Carry it all the way to the end\.$/, function (m, i) { return ord(i) + ' توقّف مبكرًا. أكمله حتى النهاية.'; }],
    [/^Stroke (\d+) drifted from the guide\. Go slower on the curves\.$/, function (m, i) { return ord(i) + ' ابتعد عن الدليل. تمهّل عند المنحنيات.'; }],
    [/^There (is one extra stroke|are extra strokes)\. This shape needs (\d+) main strokes?\.$/, function (m, a, n) { return (a[0] === 'i' ? 'هناك خط زائد.' : 'هناك خطوط زائدة.') + ' يحتاج هذا الشكل إلى ' + (n === '1' ? 'خط رئيسي واحد' : n + ' خطوط رئيسية') + '.'; }],
    [/^(\d+) dots are missing\.$/, 'تنقص $1 نقاط.'],
    [/^(Lovely\.|Good\.|Getting there\.|Try again\.) New best \(was (\d+)\)\.$/, function (m, h, b) { return ({ 'Lovely.': 'رائع.', 'Good.': 'جيد.', 'Getting there.': 'تقترب.', 'Try again.': 'حاول مرة أخرى.' })[h] + ' رقم قياسي جديد (السابق ' + b + ').'; }]
  ]);
})();
