LabAr.add({
  "Hide a Message in a Picture": "أخفِ رسالة في صورة",
  "Tool · Security · Fun": "أداة · الأمن · تسلية",
  "Hide a message in a picture.": "أخفِ رسالة في صورة.",
  "Every pixel's colour is three numbers from 0 to 255. Change the last bit of each and the picture looks identical, but those bits can spell out a secret. Hide text in a photo, lock it with a password if you like, and send the picture. Only someone who knows to look can read it.": "لون كل بكسل ثلاثة أرقام من 0 إلى 255. غيّر آخر بت في كل منها وستبدو الصورة كما هي تمامًا، لكن هذه البتات يمكن أن تحمل سرًّا. أخفِ نصًا في صورة، واقفله بكلمة مرور إن شئت، ثم أرسل الصورة. لن يقرأه إلا من يعرف أين يبحث.",
  "Mode": "الوضع",
  "Hide a message": "أخفِ رسالة",
  "Reveal a message": "اكشف رسالة",
  "Drop a photo, or tap to choose (a sample satellite photo is loaded)": "أفلت صورة هنا أو انقر لاختيارها (حُمّلت صورة أقمار صناعية كمثال)",
  "Your secret message (Arabic works too)": "رسالتك السرية (تعمل بالعربية أيضًا)",
  "Password (optional, locks the message with AES)": "كلمة مرور (اختيارية، تقفل الرسالة بتشفير AES)",
  "Hide it and download": "أخفِها ونزّل الصورة",
  "Drop a picture that might hide a message": "أفلت صورة قد تخفي رسالة",
  "Password, if it was locked": "كلمة المرور، إن كانت مقفلة",
  "Reveal": "اكشف",
  "Original": "الأصلية",
  "With the message": "مع الرسالة",
  "Pixels that changed (white), enlarged": "البكسلات التي تغيّرت (بالأبيض)، مكبّرة",
  "Last bits only: where the secret lives": "آخر البتات فقط: حيث يسكن السر",
  "Send the result as a <b>file or document</b>, not as a photo. WhatsApp, Instagram and most chat apps re-compress photos, which wipes the hidden bits. This hides a message from casual eyes; forensic tools can still tell that something is there. With a password the text itself stays unreadable even then.": "أرسل النتيجة <b>كملف أو مستند</b>، لا كصورة. فواتساب وإنستغرام ومعظم تطبيقات المحادثة تعيد ضغط الصور، فتمحو البتات المخفية. هذه الطريقة تخفي الرسالة عن العين العابرة، لكن أدوات التحليل الجنائي الرقمي قد تكتشف أن شيئًا ما موجود. ومع كلمة المرور يبقى النص نفسه غير مقروء حتى في هذه الحالة.",
  "(too long)": "(طويلة جدًا)",
  "Type a message first.": "اكتب رسالة أولًا.",
  "Too long for this picture. Use a bigger photo or a shorter message.": "الرسالة أطول مما تتسع له هذه الصورة. استخدم صورة أكبر أو رسالة أقصر.",
  "Done.": "تم.",
  "No message from this tool found.": "لم يُعثر على رسالة من هذه الأداة.",
  "If it was sent through a chat app as a photo, compression has erased it.": "إن أُرسلت عبر تطبيق محادثة كصورة، فقد محاها الضغط.",
  "The message is damaged.": "الرسالة تالفة.",
  "Found it.": "عُثر عليها.",
  "Unlocked with your password.": "فُتحت بكلمة مرورك.",
  "This message is locked.": "هذه الرسالة مقفلة.",
  "That password is wrong.": "كلمة المرور خاطئة.",
  "Type the password and press Reveal.": "اكتب كلمة المرور واضغط \"اكشف\".",
  "JPEG files lose hidden bits; trying anyway…": "ملفات JPEG تفقد البتات المخفية، سنحاول على أي حال…"
}, [
  [/^Room for ([\d,]+) bytes in this picture · your message uses ([\d,]+)$/, 'تتسع هذه الصورة لـ $1 بايت · رسالتك تستخدم $2'],
  [/^([\d,]+) hidden bits written \(about half of them actually flip\) among ([\d,]+) colour values\. Saved as PNG(, locked with your password)?\.$/, function (m, a, b, l) {
    return 'كُتب ' + a + ' بت مخفي (يتغيّر نحو نصفها فعلًا) بين ' + b + ' قيمة لونية. حُفظت بصيغة PNG' + (l ? '، ومقفلة بكلمة مرورك.' : '.');
  }]
]);
// the sample secret in Arabic too
(function () {
  function swap() {
    var t = document.getElementById('text');
    if (t && t.value === 'Meet me at the dhow harbour at sunset. 🌅') { t.value = 'نلتقي عند مرفأ السفن الشراعية وقت الغروب. 🌅'; t.dispatchEvent(new Event('input')); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', swap); else swap();
})();
