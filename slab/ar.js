(function () {
  // invented words get invented Arabic-script forms; Wittgenstein's four words use the usual Arabic renderings
  var W = { Tuka: 'توكا', Mela: 'ميلا', Varo: 'فارو', Shen: 'شين', Pilo: 'بيلو', Dask: 'داسك', Ruma: 'روما', Keb: 'كِب', Zolt: 'زولت', Nimo: 'نيمو', Fesh: 'فيش', Brak: 'براك', Block: 'مكعّب', Pillar: 'عمود', Slab: 'بلاطة', Beam: 'عارضة' };
  var N = { a: 'أ', b: 'ب', c: 'ج', d: 'د' };
  var LOOK = { 'a cube': 'مكعّب', 'a tall column': 'عمود طويل', 'a flat slab': 'بلاطة مسطّحة', 'a long beam': 'عارضة طويلة' };
  var d = {
    "Slab!": "بلاطة!",
    "Experiment · Philosophy of language": "تجربة · فلسفة اللغة",
    "Wittgenstein opens the <i>Philosophical Investigations</i> with two builders and a language of four words. You are the assistant. The builder calls out words you've never heard, and nobody will tell you what they mean.":
      "يفتتح فتغنشتاين كتابه <i>بحوث فلسفية</i> ببنّاءَين ولغة من أربع كلمات فقط. أنت المساعد. ينادي البنّاء بكلمات لم تسمعها من قبل، ولن يشرح لك أحد معناها.",
    "The wall you are building": "الجدار الذي تبنيه",
    "The stones": "الحجارة",
    "Hand them over": "سلّمها له",
    "Start again": "ابدأ من جديد",
    "Builder's voice: off": "صوت البنّاء: متوقّف",
    "Builder's voice: on": "صوت البنّاء: يعمل",
    "No voice in this browser": "لا يوجد صوت في هذا المتصفح",
    "Calls": "النداءات",
    "Wrong": "الأخطاء",
    "Stones": "الحجارة",
    "Click the stone you think the builder wants. If you're wrong, he'll say so, but he won't say why.": "اضغط الحجر الذي تظن أن البنّاء يريده. إن أخطأت سيقول لك ذلك، لكنه لن يقول لماذا.",
    "Click the stone you think the builder wants. If you’re wrong, he’ll say so, but he won’t say why.": "اضغط الحجر الذي تظن أن البنّاء يريده. إن أخطأت سيقول لك ذلك، لكنه لن يقول لماذا.",
    "These are Wittgenstein’s own four words. Too easy? That is part of the point.": "هذه كلمات فتغنشتاين الأربع نفسها. سهلة جدًا؟ هذا جزء من الفكرة.",
    "Click the stone you think the builder wants.": "اضغط الحجر الذي تظن أن البنّاء يريده.",
    "Tap a stone as many times as you think he means, then hand them over.": "اضغط الحجر بعدد المرات الذي تظن أنه يقصده، ثم سلّمه الحجارة.",
    "New words. Tap a stone as many times as you think he means, then hand them over.": "كلمات جديدة. اضغط الحجر بعدد المرات الذي تظن أنه يقصده، ثم سلّمه الحجارة.",
    "He points at a stone. (Wittgenstein calls this ostensive teaching, §6.)": "يشير إلى حجر. (يسمّي فتغنشتاين هذا «التعليم الإشاري»، الفقرة 6.)",
    "The builder is building with stones: blocks, pillars, slabs and beams. The assistant passes them in the order he needs them, and they use a language of just four words.": "البنّاء يبني بالحجارة: مكعّبات وأعمدة وبلاطات وعوارض. والمساعد يناوله إياها بالترتيب الذي يحتاجها به، ويستعملان لغة من أربع كلمات فقط.",
    "Paraphrasing Philosophical Investigations §2": "بتصرّف عن بحوث فلسفية، الفقرة 2",
    "Now the language grows. It gets a series of number words, a, b, c, d, and the builder calls out a number together with a stone.": "الآن تتّسع اللغة. تُضاف إليها سلسلة من كلمات الأعداد، أ، ب، ج، د، وصار البنّاء ينادي بعدد مع اسم الحجر.",
    "Paraphrasing Philosophical Investigations §8": "بتصرّف عن بحوث فلسفية، الفقرة 8",
    "Nothing picked yet": "لم تختر شيئًا بعد",
    "No.": "لا.",
    "Thank you!": "شكرًا!",

    "You speak Builder.": "أنت الآن تتكلّم لغة البنّائين.",
    "a, b, c, d": "أ، ب، ج، د",
    "one, two, three, four": "واحد، اثنان، ثلاثة، أربعة",
    "New words": "كلمات جديدة",
    "Play with Wittgenstein’s words": "العب بكلمات فتغنشتاين",
    "For a large class of cases—though not for all—in which we employ the word “meaning” it can be defined thus: the meaning of a word is its use in the language.": "في طائفة كبيرة من الحالات، وإن لم يكن في جميعها، التي نستعمل فيها كلمة «معنى»، يمكن تعريفها هكذا: معنى الكلمة هو استعمالها في اللغة.",
    "Wittgenstein, Philosophical Investigations §43": "فتغنشتاين، بحوث فلسفية، الفقرة 43",
    "I shall also call the whole, consisting of language and the actions into which it is woven, the “language-game”.": "وسأسمّي أيضًا الكلَّ المؤلَّف من اللغة ومن الأفعال التي تتشابك معها «لعبة لغوية».",
    "Wittgenstein, Philosophical Investigations §7": "فتغنشتاين، بحوث فلسفية، الفقرة 7"
  };
  for (var k in W) { d[k] = W[k]; d[k + '!'] = W[k] + '!'; }
  for (var l in LOOK) d[l] = LOOK[l];
  LabAr.add(d, [
    [/^([abcd]) – (\w+)!$/, function (m, n, w) { return N[n] + ' – ' + (W[w] || w) + '!'; }],
    [/^Stone: (.+)$/, function (m, l) { return 'حجر: ' + (LOOK[l] || l); }],
    [/^(\d+) × (.+)$/, function (m, n, l) { return n + ' × ' + (LOOK[l] || l); }],
    [/^learned by call (.+)$/, 'تعلّمتها في النداء $1'],
    [/^The wall so far: (\d+) stones$/, 'عدد الحجارة في الجدار حتى الآن: $1'],
    [/^He points at a stone and holds up (\d) fingers?\.$/, function (m, k) { return 'يشير إلى حجر ويرفع ' + (k === '1' ? 'إصبعًا واحدًا' : k === '2' ? 'إصبعين' : k + ' أصابع') + '.'; }],
    [/^(\d+) calls, (\d+) wrong, and a wall of (\d+) stones\. Nobody ever told you what a single word meant\. You learned each one by doing something with it and seeing what happened\.$/,
      'عدد النداءات $1، والأخطاء $2، وفي الجدار $3 من الحجارة. لم يخبرك أحد قط بمعنى كلمة واحدة. تعلّمت كل كلمة بأن فعلت بها شيئًا ورأيت ما حدث.'],
    [/^Was what you learned a definition, or a skill\? Could you now explain what “(\w+)” means without pointing at anything, or doing anything\? That question is where the Investigations begins\.$/,
      function (m, w) { return 'هل ما تعلّمته تعريف أم مهارة؟ هل تستطيع الآن أن تشرح ما تعنيه «' + (W[w] || w) + '» من دون أن تشير إلى شيء أو تفعل شيئًا؟ من هذا السؤال تبدأ «بحوث فلسفية».'; }]
  ]);
})();
(function () {
  // the shared dictionary may load after this file and would win for this key; add it again once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { LabAr.add({ "Done": "انتهت" }); });
})();
