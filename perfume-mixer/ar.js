(function () {
  var N = { 'Oud': 'عود', 'Sandalwood': 'صندل', 'Vetiver': 'نجيل الهند', 'Bakhoor': 'بخور', 'Frankincense': 'لبان', 'Amber': 'عنبر', 'Rose': 'ورد', 'Jasmine': 'ياسمين', 'Orange blossom': 'زهر البرتقال', 'Saffron': 'زعفران', 'Cardamom': 'هيل', 'Vanilla': 'فانيلا', 'Tonka': 'تونكا', 'Citrus': 'حمضيات', 'White musk': 'مسك أبيض', 'Leather': 'جلد' };
  var DEF = { 'Oud': 'العود', 'Sandalwood': 'الصندل', 'Vetiver': 'نجيل الهند', 'Bakhoor': 'البخور', 'Frankincense': 'اللبان', 'Amber': 'العنبر', 'Rose': 'الورد', 'Jasmine': 'الياسمين', 'Orange blossom': 'زهر البرتقال', 'Saffron': 'الزعفران', 'Cardamom': 'الهيل', 'Vanilla': 'الفانيلا', 'Tonka': 'التونكا', 'Citrus': 'الحمضيات', 'White musk': 'المسك الأبيض', 'Leather': 'الجلد' };
  var LOW = {}; Object.keys(DEF).forEach(function (k) { LOW[k.toLowerCase()] = DEF[k]; });
  var ADJ = { deep: 'عميق', woody: 'خشبي', animalic: 'حيواني', creamy: 'كريمي', soft: 'ناعم', earthy: 'ترابي', green: 'أخضر', dry: 'جاف', smoky: 'دخاني', sweet: 'حلو', resinous: 'راتنجي', airy: 'خفيف', peppery: 'فلفلي', warm: 'دافئ', golden: 'ذهبي', balmy: 'بلسمي', rosy: 'وردي', lush: 'غني', romantic: 'رومانسي', heady: 'آسر', floral: 'زهري', sunny: 'مشمس', clean: 'نظيف', honeyed: 'عسلي', leathery: 'جلدي', metallic: 'معدني', luxurious: 'فاخر', cool: 'بارد', spicy: 'متبّل', aromatic: 'عطري', cosy: 'مريح', almondy: 'لوزي', bright: 'مشرق', zesty: 'لاذع', fresh: 'منعش', 'skin-like': 'قريب من البشرة', rugged: 'خشن', dark: 'داكن' };
  var MOOD = {
    'Rich and long-lasting. Made for cool evenings, weddings and winter majlis nights.': 'غني ويدوم طويلًا. مناسب للأمسيات الباردة والأعراس وليالي المجلس الشتوية.',
    'Balanced enough for day into evening, and polite in an office if applied lightly.': 'متوازن يناسب النهار حتى المساء، ولائق في المكتب إن وُضع بخفة.',
    'Light and airy. Good for hot days and daytime, but expect to reapply.': 'خفيف ومنعش. مناسب للأيام الحارة وساعات النهار، لكن توقّع أن تعيد وضعه.'
  };
  var TIP = { 'Oil on pulse points': 'زيت على نقاط النبض', 'Oil or cream on skin': 'زيت أو كريم على البشرة', 'A light spray': 'رشّة خفيفة', 'Smoke on clothes and hair': 'دخان على الملابس والشعر', 'A spray, or a little smoke': 'رشّة، أو قليل من الدخان', 'Oil or balm on skin': 'زيت أو بلسم على البشرة', 'Oil or a spray': 'زيت أو رشّة', 'A spray on top': 'رشّة في الأعلى', 'Just a touch (it is strong)': 'لمسة فقط (فهو قوي)', 'Lotion or oil': 'لوشن أو زيت', 'A spray, always last': 'رشّة، دائمًا في النهاية', 'Oil or lotion': 'زيت أو لوشن', 'A spray': 'رشّة' };
  var NN = Object.keys(N).join('|');
  var d = {};
  Object.keys(N).forEach(function (k) { d[k] = N[k]; });
  function nm(s) { return N[s] || s; }
  LabAr.add(Object.assign(d, {
    "Perfume Layering Mixer": "خلّاط طبقات العطور",
    "Game · Scent · Layering": "لعبة · العطور · الطبقات",
    "Perfume layering mixer.": "خلّاط طبقات العطور.",
    "Layering scents is an everyday art in the Gulf: bakhoor smoke on the clothes, an oil on the skin, a spray on top. Pick two to four notes on the wheel to see how well they get along, what the blend might feel like, and which one to put on first. Save the ones you want to try.": "مزج العطور طبقةً فوق طبقة فنّ يومي في الخليج: دخان البخور على الملابس، ودهن على البشرة، ورشّة في الأعلى. اختر من نوتتين إلى أربع نوتات على العجلة لترى مدى انسجامها، وكيف قد يكون إحساس المزيج، وأيّها تضعه أولًا. واحفظ ما تودّ تجربته.",
    "Scent wheel. Choose up to four notes.": "عجلة الروائح. اختر حتى أربع نوتات.",
    "Your blend": "مزيجك",
    "🎲 Surprise me": "🎲 فاجئني",
    "Harmony": "الانسجام",
    "Pick at least two notes.": "اختر نوتتين على الأقل.",
    "Layering order": "ترتيب الطبقات",
    "Save this blend": "احفظ هذا المزيج",
    "Give it a name": "أعطه اسمًا",
    "Blend name": "اسم المزيج",
    "saved blends": "مزيج محفوظ",
    "best harmony": "أفضل انسجام",
    "notes on the wheel": "نوتة على العجلة",
    "<b>Why heavy goes first.</b> Base notes such as oud, amber, sandalwood and musk are made of larger, slower molecules that stay on skin for hours. Bright notes like citrus evaporate in minutes. Put the heavy one on first, and the light one on top, so you still smell the top note when you walk out of the door instead of it being buried.": "<b>لماذا يأتي الثقيل أولًا.</b> النوتات القاعدية مثل العود والعنبر والصندل والمسك مكوّنة من جزيئات أكبر وأبطأ تبقى على البشرة ساعات، أما النوتات المشرقة كالحمضيات فتتبخر في دقائق. ضع الثقيل أولًا والخفيف فوقه، لتبقى تشمّ النوتة العليا حين تخرج من الباب بدل أن تختفي تحت غيرها.",
    "The harmony score comes from a handful of simple rules about which scent families tend to sit well together, plus classic pairings like rose with oud. It's a starting point for your own nose, not a perfumer's verdict. Test new oils on a small patch of skin first, and keep strong oils off silk and white fabric.": "تأتي درجة الانسجام من بضع قواعد بسيطة عن عائلات الروائح التي تنسجم عادةً معًا، إضافةً إلى ثنائيات كلاسيكية مثل الورد مع العود. إنها نقطة بداية لأنفك أنت، لا حكم خبير عطور. جرّب الدهون الجديدة أولًا على مساحة صغيرة من البشرة، وأبعد الدهون القوية عن الحرير والأقمشة البيضاء.",
    "Woody": "خشبي", "Floral": "زهري", "Spice": "توابل", "Sweet": "حلو", "Fresh": "منعش",
    "NOTES": "نوتات",
    "Four notes is the limit. Remove one first.": "الحد أربع نوتات. أزل واحدة أولًا.",
    "Rose and oud is a classic Gulf pairing: the rose lifts the oud's darkness.": "الورد والعود ثنائي خليجي كلاسيكي: الورد يخفّف عتمة العود.",
    "Saffron gives oud a polished, leathery glow.": "الزعفران يمنح العود لمعانًا مصقولًا بلمسة جلدية.",
    "Saffron and rose is a long-standing pair in Arabian perfumery.": "الزعفران والورد ثنائي عريق في العطور العربية.",
    "Amber and vanilla melt into a warm, golden base.": "العنبر والفانيلا يذوبان في قاعدة دافئة ذهبية.",
    "Musk makes rose feel soft and close to the skin.": "المسك يجعل الورد ناعمًا وقريبًا من البشرة.",
    "Jasmine and sandalwood are a creamy, classic match.": "الياسمين والصندل ثنائي كلاسيكي كريمي.",
    "Bakhoor and oud share smoky woods, so they deepen each other.": "البخور والعود يشتركان في الأخشاب الدخانية، فيعمّق كلٌّ منهما الآخر.",
    "Citrus over musk is the classic clean, fresh layer.": "الحمضيات فوق المسك هي الطبقة الكلاسيكية النظيفة المنعشة.",
    "Frankincense and amber are old companions in resin blends.": "اللبان والعنبر رفيقان قديمان في مزيج الراتنجات.",
    "Cardamom adds a cool, coffee-like spice to oud.": "الهيل يضيف إلى العود لمسة بهار باردة تشبه القهوة.",
    "Saffron naturally smells a little leathery, so these blend smoothly.": "رائحة الزعفران جلدية قليلًا بطبيعتها، فيمتزجان بسلاسة.",
    "Orange blossom and musk feel freshly washed and soft.": "زهر البرتقال والمسك يمنحان إحساسًا بالنظافة والنعومة.",
    "Tonka and vanilla are close cousins, cosy but very sweet together.": "التونكا والفانيلا قريبان جدًا، مريحان لكنهما حلوان جدًا معًا.",
    "Bright citrus and dark leather pull in opposite directions.": "الحمضيات المشرقة والجلد الداكن يتجهان في اتجاهين متعاكسين.",
    "Bakhoor smoke tends to swallow citrus.": "دخان البخور يطغى عادةً على الحمضيات.",
    "Sweet vanilla can make leather smell a bit plasticky.": "الفانيلا الحلوة قد تجعل رائحة الجلد بلاستيكية قليلًا.",
    "Heady jasmine with leather can turn heavy and indolic.": "الياسمين الآسر مع الجلد قد يصبح ثقيلًا وحيوانيّ الطابع.",
    "Cardamom and tonka give a spiced, dessert-like warmth.": "الهيل والتونكا يمنحان دفئًا متبّلًا يشبه الحلويات.",
    "Vetiver and citrus make a crisp, green, summery pair.": "نجيل الهند والحمضيات ثنائي منعش أخضر صيفي.",
    "Rose, oud and saffron together is a signature Gulf trio.": "الورد والعود والزعفران معًا ثلاثي خليجي مميز.",
    "Good spread from heavy base to lighter top.": "توزيع جيد من قاعدة ثقيلة إلى قمة أخف.",
    "No real base note, so it may fade fast. Add a wood, resin or musk.": "لا توجد نوتة قاعدية حقيقية، فقد يتلاشى بسرعة. أضف خشبًا أو راتنجًا أو مسكًا.",
    "All from one family: smooth but one-dimensional.": "كلها من عائلة واحدة: سلس لكنه أحادي البعد.",
    "Four families in one blend gives it real depth.": "أربع عائلات في مزيج واحد تمنحه عمقًا حقيقيًا.",
    "Two sweet notes together can turn cloying.": "نوتتان حلوتان معًا قد تصبحان مُتخمتين.",
    "Beautiful match.": "انسجام رائع.", "Works well.": "ينسجم جيدًا.", "Worth a try.": "يستحق التجربة.", "Tricky.": "صعب.", "Likely to clash.": "غالبًا يتنافر.",
    "Tap notes on the wheel.": "انقر النوتات على العجلة.",
    "Add one more note.": "أضف نوتة أخرى.",
    "Let the smoke drift through your clothes or hair, then wait a few minutes before anything on skin.": "دع الدخان يتخلّل ملابسك أو شعرك، ثم انتظر بضع دقائق قبل وضع أي شيء على البشرة.",
    "Load": "تحميل",
    "No saved blends yet.": "لا توجد مزائج محفوظة بعد.",
    "Pick at least two notes to save.": "اختر نوتتين على الأقل للحفظ."
  }), [
    [/^Resin & smoke$/, 'راتنج ودخان'],
    [/^Musky & leather$/, 'مسكي وجلدي'],
    [/^(\d+) heavy base notes may feel dense\. Use a light hand\.$/, '$1 نوتات قاعدية ثقيلة قد تجعله كثيفًا. ضعه بخفة.'],
    [/^A (.+) and (\S+) blend\. (.+?) sets the base(?:, while (.+?) is what people notice first)?\. (.+)$/, function (m, list, last, lead, top, mood) {
      var ws = list.split(', ').concat([last]).map(function (w) { return ADJ[w] || w; });
      return 'مزيج ' + ws.slice(0, -1).join('، ') + ' و' + ws[ws.length - 1] + '. ' + (DEF[lead] || lead) + ' هو الأساس' + (top ? '، بينما ' + (LOW[top] || top) + ' أول ما يلاحظه الناس' : '') + '. ' + (MOOD[mood] || mood);
    }],
    [/^(.+)\. Let it settle for a minute\.$/, function (m, t) { return (TIP[t] || t) + '. اتركه يستقر دقيقة.'; }],
    [/^(.+)\. This is what people notice first\.$/, function (m, t) { return (TIP[t] || t) + '. هذا أول ما يلاحظه الناس.'; }],
    [/^(.+), over the base\.$/, function (m, t) { return (TIP[t] || t) + '، فوق القاعدة.'; }],
    [new RegExp('^Remove (' + NN + ')$'), function (m, n) { return 'إزالة ' + nm(n); }],
    [new RegExp('^((?:' + NN + ')(?: \\+ (?:' + NN + '))*) · (\\d+)$'), function (m, l, s) { return l.split(' + ').map(nm).join(' + ') + ' · ' + s; }],
    [new RegExp('^((?:' + NN + ')(?: & (?:' + NN + '))+)$'), function (m, l) { return l.split(' & ').map(nm).join(' و'); }],
    [/^Delete (.+)$/, function (m, n) { return 'حذف ' + n; }]
  ]);
})();
