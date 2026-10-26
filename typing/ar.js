LabAr.add({
  "Typing Speed Test": "اختبار سرعة الكتابة",
  "Game · Language": "لعبة · لغة",
  "Typing speed test.": "اختبار سرعة الكتابة.",
  "Type the text as fast and accurately as you can, in Arabic or English. Afterwards a keyboard heat map shows exactly which keys trip you up, so you know what to practise.": "اكتب النص بأسرع ما يمكنك وبأعلى دقة، بالعربية أو بالإنجليزية. بعد ذلك تُظهر لك خريطة حرارية للوحة المفاتيح المفاتيح التي تتعثر فيها بالضبط، لتعرف ما الذي تحتاج إلى التدرّب عليه.",
  "Language": "اللغة", "English": "الإنجليزية", "Time": "المدة",
  "30 s": "30 ث", "1 min": "دقيقة", "2 min": "دقيقتان", "New text": "نص جديد",
  "Type here": "اكتب هنا",
  "Tap here and start typing": "اضغط هنا وابدأ الكتابة",
  "The timer starts with your first key.": "يبدأ المؤقت مع أول حرف تكتبه.",
  "Go!": "ابدأ!",
  "Press \"New text\" to go again": "اضغط «نص جديد» للمحاولة مرة أخرى",
  "Mistakes by key": "الأخطاء حسب المفتاح",
  "Speed": "السرعة", "Accuracy": "الدقة", "Time left": "الوقت المتبقي",
  "No weak keys. Lovely.": "لا توجد مفاتيح ضعيفة. رائع!",
  "Speed is in words per minute, counting every 5 correct characters as one word, which is the standard. Average adults type about 40 wpm; 70 is fast. Arabic words are often shorter, so the same rule keeps the two fair.": "تُقاس السرعة بعدد الكلمات في الدقيقة، بحساب كل 5 أحرف صحيحة كلمة واحدة، وهذا هو المعيار المعتمد. يكتب البالغ في المتوسط نحو 40 كلمة في الدقيقة، و70 تُعد سرعة عالية. الكلمات العربية غالبًا أقصر، لذا تحافظ القاعدة نفسها على عدالة المقارنة بين اللغتين."
}, [
  [/^([a-z])$/, '$1'],
  [/^(.): (\d+) of (\d+) wrong$/, '$1: $2 خطأ من $3'],
  [/^(.) · (\d+)% wrong$/, '$1 · $2% خطأ'],
  [/^(\d+) wpm · (\d+%|—) accurate$/, '$1 كلمة/دقيقة · دقة $2'],
  [/^Your last runs: (.+)$/, function (m, l) {
    return 'محاولاتك الأخيرة: ' + l.split(' · ').map(function (x) {
      return x.replace(/^(\d+) wpm \((AR|EN)\)$/, function (m, n, g) { return n + ' كلمة/دقيقة (' + (g === 'AR' ? 'عربي' : 'إنجليزي') + ')'; });
    }).join(' · ');
  }]
]);
