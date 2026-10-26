LabAr.add({
  "Get a Fix": "حدّد موقعك",
  "Experiment · GNSS": "تجربة · الملاحة بالأقمار الصناعية",
  "Get a fix.": "حدّد موقعك.",
  "Satellites can't see you. They only know how far away you are. Find the receiver the way GPS does.": "الأقمار الصناعية لا تراك، بل تعرف فقط كم تبعد عنها. اعثر على جهاز الاستقبال بالطريقة التي يعمل بها GPS.",
  "Game board. Tap where the satellite range circles meet. With a keyboard, use the arrow keys to move the crosshair and Enter to lock the fix.": "لوحة اللعب. اضغط حيث تلتقي دوائر المسافة حول الأقمار الصناعية. باستخدام لوحة المفاتيح، حرّك علامة التصويب بالأسهم واضغط Enter لتثبيت الموقع.",
  "Ready for launch?": "مستعد للإطلاق؟",
  "Five rounds. The signals get noisier each time.": "خمس جولات، وتزداد الإشارات تشويشًا في كل مرة.",
  "Round": "الجولة",
  "Score": "النقاط",
  "Best": "الأفضل",
  "<span>01</span>Each satellite measures its distance to a hidden receiver.": "<span>01</span>كل قمر صناعي يقيس المسافة بينه وبين جهاز استقبال مخفي.",
  "<span>02</span>That distance is a circle around the satellite.": "<span>02</span>هذه المسافة تشكّل دائرة حول القمر الصناعي.",
  "<span>03</span>Tap where the circles meet. Closer means more points.": "<span>03</span>اضغط حيث تلتقي الدوائر. كلما اقتربت زادت نقاطك.",
  "Next round": "الجولة التالية",
  "This is trilateration. Real receivers solve it with four or more satellites, because they also have to work out their own clock error.": "هذا ما يُسمّى التثليث بالمسافات. أجهزة الاستقبال الحقيقية تحلّه بأربعة أقمار صناعية أو أكثر، لأنها تحتاج أيضًا إلى حساب خطأ ساعتها الداخلية."
}, [
  [/^0 — 5 km$/, '0 — 5 km'],
  [/^[GEC]\d\d$/, function (m) { return m; }]
]);
