(function () {
  var HINT = { 'In tune': 'مضبوط', 'Too low: tighten the string': 'منخفض: شُدّ الوتر', 'Too high: loosen the string': 'مرتفع: أرخِ الوتر', 'Quarter tone': 'ربع تون' };
  LabAr.add({
    "Instrument Tuner": "دوزان الآلات",
    "Tool · Sound · Music": "أداة · صوت · موسيقى",
    "Instrument tuner.": "دوزان الآلات.",
    "Pluck a string and your microphone finds its pitch. Most tuners only know the 12 Western notes. This one also knows the quarter tones of Arabic maqam, like the half-flat E in Rast and Bayati, so you can check those notes too.": "انقر وترًا وسيلتقط الميكروفون نغمته. معظم أجهزة الدوزان لا تعرف إلا النغمات الغربية الاثنتي عشرة، أما هذا فيعرف أيضًا أرباع التون في المقامات العربية، مثل E نصف بيمول في الراست والبياتي، لتتحقق من هذه النغمات أيضًا.",
    "Instrument": "الآلة",
    "Press start, then play a single string.": "اضغط ابدأ، ثم اعزف على وتر واحد.",
    "Start tuning": "ابدأ الدوزان",
    "Settings": "الإعدادات",
    "Reference pitch (A4, in Hz)": "النغمة المرجعية (A4 بالهرتز)",
    "Show Arabic quarter tones": "أظهر أرباع التون العربية",
    "Tap a string to hear its note": "اضغط على وتر لتسمع نغمته",
    "Arabic oud tuning (low to high): C F A D G C. Turkish oud: E A B E A D. In Arabic practice a quarter tone sits halfway between two semitones, about 50 cents. Players bend it slightly by maqam and region, so trust your ear too.": "دوزان العود العربي (من الغليظ إلى الحاد): \u2066C F A D G C\u2069. العود التركي: \u2066E A B E A D\u2069. في الممارسة العربية يقع ربع التون في منتصف المسافة بين نصفي تون، أي نحو 50 سنتًا. ويميل به العازفون قليلًا بحسب المقام والمنطقة، فثق بأذنك أيضًا.",
    "Quarter tones you'll meet": "أرباع تون ستصادفها",
    '<b>Rast</b> (راست): C D <b>E half-flat</b> F G A <b>B half-flat</b> C. <b>Bayati</b> (بياتي): D <b>E half-flat</b> F G A B♭ C D. <b>Sikah</b> (سيكاه) starts on E half-flat itself. <b>Saba</b> (صبا): D <b>E half-flat</b> F G♭ A B♭ C. Play one of these notes and the tuner should read "half-flat" at the centre.':
      '<b>الراست</b>: C D <b>E نصف بيمول</b> F G A <b>B نصف بيمول</b> C. <b>البياتي</b>: D <b>E نصف بيمول</b> F G A B♭ C D. <b>السيكاه</b> يبدأ من E نصف بيمول نفسها. <b>الصبا</b>: D <b>E نصف بيمول</b> F G♭ A B♭ C. اعزف إحدى هذه النغمات ويُفترض أن يُظهر الدوزان «نصف بيمول» والمؤشر في المنتصف.',
    "Pitch is found on your device by autocorrelation: the sound wave is compared with shifted copies of itself to find how often it repeats. Nothing is recorded or sent anywhere.": "تُحسب النغمة على جهازك بطريقة الارتباط الذاتي: تُقارَن الموجة الصوتية بنسخ مزاحة منها لمعرفة مدى تكرارها. لا يُسجَّل أي شيء ولا يُرسل إلى أي مكان.",
    "Oud (Arabic)": "عود عربي",
    "Oud (Turkish)": "عود تركي",
    "Guitar": "جيتار",
    "Violin": "كمان",
    "Ukulele": "يوكوليلي",
    "Bass": "باص",
    "Any note": "أي نغمة",
    "Yakah": "يكاه", "Ushayran": "عشيران", "Dukah": "دوكاه", "Nawa": "نوى", "Kirdan": "كردان",
    "half-flat": "نصف بيمول",
    "half-sharp": "نصف دييز",
    "Quarter tone ·": "ربع تون ·",
    "Listening… play a single string.": "أستمع… اعزف على وتر واحد.",
    "Microphone access was blocked. Allow it in your browser settings.": "تم حظر الوصول إلى الميكروفون. اسمح به من إعدادات المتصفح."
  }, [
    [/^([A-G][♯♭#b]?\d?)$/, '$1'],
    [/^(\d+(?:\.\d+)?) Hz$/, '\u2066$1 Hz\u2069'],
    [/^· (\d+(?:\.\d+)?) Hz$/, '· \u2066$1 Hz\u2069'],
    [/^(In tune|Too low: tighten the string|Too high: loosen the string|Quarter tone) · (\d+(?:\.\d+)?) Hz$/, function (m, h, f) { return HINT[h] + ' · \u2066' + f + ' Hz\u2069'; }],
    [/^([+\-−]?\d+) cents$/, '\u2066$1\u2069 سنت'],
    [/^.*[\u0600-\u06FF\u2066-\u2069].*$/, '$&']
  ]);
})();
