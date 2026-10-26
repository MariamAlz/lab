LabAr.add({
  "Duck or Rabbit?": "بطة أم أرنب؟",
  "Duck or rabbit?": "بطة أم أرنب؟",
  "Experiment · Philosophy of language · Perception": "تجربة · فلسفة اللغة · الإدراك",
  "Wittgenstein used this old drawing to ask what changes when a picture \"flips\". The lines stay the same, and yet you see something else. Here the picture drifts slowly from duck to rabbit and back. Tell it when it flips for you.":
    "استعمل فتغنشتاين هذا الرسم القديم ليسأل: ما الذي يتغيّر حين «تنقلب» الصورة؟ الخطوط تبقى كما هي، ومع ذلك ترى شيئًا آخر. هنا تنتقل الصورة ببطء من بطة إلى أرنب ثم تعود. أخبرها متى تنقلب في عينك.",
  "A drawing that can be seen as a duck facing left or a rabbit facing right": "رسم يمكن أن يُرى بطةً تتجه إلى اليسار أو أرنبًا يتجه إلى اليمين",
  "Two slow sweeps": "جولتان بطيئتان",
  "First the duck becomes a rabbit, then the rabbit becomes a duck. Press the button (or the space bar) the moment you see the other animal.": "أولًا تتحوّل البطة إلى أرنب، ثم يتحوّل الأرنب إلى بطة. اضغط الزر (أو مفتاح المسافة) في اللحظة التي ترى فيها الحيوان الآخر.",
  "Waiting…": "في الانتظار…",
  "Don't try to be clever. Just say when you see it.": "لا تحاول التذاكي. قل فقط متى تراه.",
  "I contemplate a face, and then suddenly notice its likeness to another. I see that it has not changed; and yet I see it differently. I call this experience \"noticing an aspect\".": "أتأمّل وجهًا، ثم ألاحظ فجأة شبهه بوجه آخر. أرى أنه لم يتغيّر، ومع ذلك أراه على نحو مختلف. أسمّي هذه التجربة «ملاحظة جانب».",
  "Wittgenstein, Philosophical Investigations, Part II, xi": "فتغنشتاين، بحوث فلسفية، الجزء الثاني، القسم 11",
  "It's a rabbit now": "صار أرنبًا الآن",
  "It's a duck now": "صارت بطة الآن",
  "Watching the duck. Press when you see a rabbit.": "أنت تنظر إلى البطة. اضغط حين ترى أرنبًا.",
  "Now the other way. Press when you see a duck.": "والآن في الاتجاه المعاكس. اضغط حين ترى بطة.",
  "Get ready…": "استعد…",
  "It never flipped for you. Interesting! Now the other way.": "لم تنقلب الصورة في عينك أبدًا. مثير للاهتمام! والآن في الاتجاه المعاكس.",
  "Got it. Now the other way.": "تم. والآن في الاتجاه المعاكس.",
  "You held on to the duck well past the middle on the way up, and to the rabbit on the way back. What you already saw kept shaping what you saw. Perception researchers call this hysteresis.": "تمسّكت بالبطة إلى ما بعد المنتصف بكثير في الذهاب، وبالأرنب في العودة. ما كنت تراه أصلًا ظلّ يشكّل ما تراه. يسمّي باحثو الإدراك هذا «التخلّف» (hysteresis).",
  "You flipped early both times, before the picture even reached the middle. You went looking for the other animal, and that was enough to see it.": "انقلبت الصورة عندك مبكرًا في المرتين، قبل أن تصل إلى المنتصف أصلًا. بحثت عن الحيوان الآخر، وكان ذلك كافيًا لتراه.",
  "You flipped at about the same point in both directions, so the picture alone decided it for you, not what you were already seeing.": "انقلبت الصورة عندك عند النقطة نفسها تقريبًا في الاتجاهين، فالصورة وحدها هي التي حسمت الأمر، لا ما كنت تراه من قبل.",
  "Where it flipped for you": "أين انقلبت الصورة عندك",
  "The drawing at 50% is the same in both sweeps. Only your seeing changed. Wittgenstein’s question is what that change is: not something new in the picture, so something in how you take it.": "الرسم عند 50% هو نفسه في الجولتين. الذي تغيّر هو رؤيتك فقط. وسؤال فتغنشتاين: ما هذا التغيّر؟ ليس شيئًا جديدًا في الصورة، فهو إذن شيء في طريقة تلقّيك لها.",
  "Look for yourself": "انظر بنفسك",
  "duck": "بطة",
  "rabbit": "أرنب",
  "Show the water and grass": "أظهر الماء والعشب",
  "Try it at 50% with the context off, and flip it on purpose.": "جرّبها عند 50% مع إخفاء الماء والعشب، واقلبها عن قصد.",
  "Run it again": "أعد التجربة"
}, [
  [/^to rabbit (\d+)%$/, 'إلى أرنب $1%'],
  [/^to duck (\d+)%$/, 'إلى بطة $1%'],
  [/^Duck to rabbit at (\d+)% of the way, rabbit to duck at (\d+)%\.$/, 'من بطة إلى أرنب عند $1% من الطريق، ومن أرنب إلى بطة عند $2%.'],
  [/^Your last runs: (.+)$/, 'محاولاتك الأخيرة: $1']
]);
(function () {
  // the shared dictionary may load after this file and would win for this key; add it again once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { LabAr.add({ "Done": "انتهى" }); });
})();
