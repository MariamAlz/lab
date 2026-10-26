(function () {
  var GR = {
    'Barely changes. Calls and games stay smooth while others download.': 'بالكاد يتغيّر. تبقى المكالمات والألعاب سلسة بينما يحمّل الآخرون.',
    'Rises a bit. You might notice lag in games while someone downloads.': 'يرتفع قليلًا. قد تلاحظ تأخرًا في الألعاب حين يحمّل أحدهم.',
    'Rises a lot. Video calls may freeze when the line is busy.': 'يرتفع كثيرًا. قد تتجمّد مكالمات الفيديو حين يكون الخط مشغولًا.',
    'Jumps sharply. A router with "SQM" or "smart queue" settings can fix this.': 'يقفز بحدة. يمكن لراوتر يدعم إعدادات «SQM» أو «smart queue» أن يعالج ذلك.'
  };
  function n(k, one, two, few, many) { k = +k; return k === 1 ? one : k === 2 ? two : k >= 3 && k <= 10 ? k + ' ' + few : k + ' ' + many; }
  LabAr.add({
    "Speed truth.": "حقيقة السرعة.",
    "Speed Truth": "حقيقة السرعة",
    "Tool · Network": "أداة · الشبكة",
    "A speed test gives you a number. This one also tells you what the number means: how many 4K films you can stream at once, how long a big game takes to download, and whether your video calls stutter when someone else in the house is downloading.":
      "اختبار السرعة يعطيك رقمًا. أما هذا فيخبرك أيضًا بمعنى الرقم: كم فيلمًا بدقة 4K تستطيع بثّه في الوقت نفسه، وكم يستغرق تنزيل لعبة كبيرة، وهل تتقطّع مكالمات الفيديو حين يحمّل شخص آخر في البيت.",
    "Ready": "جاهز",
    "Mbps": "Mbps", "ms": "ms",
    "Download": "التنزيل", "Upload": "الرفع", "Ping · jitter": "الاستجابة · التذبذب",
    "Start the test": "ابدأ الاختبار",
    "Light test (uses about 15 MB instead of up to 150 MB)": "اختبار خفيف (يستهلك نحو 15 MB بدلًا من 150 MB كحد أقصى)",
    "Ping when busy": "زمن الاستجابة عند الانشغال",
    "Busy-hour grade": "تقييم وقت الذروة",
    "How much your ping rises while the line is full. Big rises make calls and games lag.": "مقدار ارتفاع زمن الاستجابة حين يكون الخط ممتلئًا. الارتفاع الكبير يسبّب تأخرًا في المكالمات والألعاب.",
    "What it means": "ماذا يعني ذلك",
    "Run the test to see your results in real terms.": "شغّل الاختبار لترى نتائجك بمقاييس واقعية.",
    "My plan is": "سرعة باقتي",
    "e.g. 500": "مثلًا 500",
    "Tests run against Cloudflare's nearest server, straight from your browser. Wi-Fi is usually the bottleneck: if you get much less than your plan, test again next to the router or on a cable. Nothing is saved or sent anywhere else.":
      "تُجرى الاختبارات مع أقرب خادم لـ Cloudflare مباشرة من متصفحك. شبكة Wi-Fi عادةً هي عنق الزجاجة: إن حصلت على أقل بكثير من باقتك، فاختبر مرة أخرى قرب الراوتر أو عبر كابل. لا يُحفظ شيء ولا يُرسل إلى أي مكان آخر.",
    "Testing…": "جارٍ الاختبار…",
    "Measuring ping": "قياس زمن الاستجابة",
    "Stopped": "توقّف",
    "Test again": "اختبر مرة أخرى",
    "Could not reach the test server. A content blocker or company network may be stopping it.": "تعذّر الوصول إلى خادم الاختبار. ربما تمنعه أداة حظر محتوى أو شبكة الشركة.",
    "The test was interrupted. Check your connection and try again.": "انقطع الاختبار. تحقّق من اتصالك وحاول مرة أخرى.",
    "A": "A", "B": "B", "C": "C", "D": "D",
    "Netflix in 4K at once": "بث Netflix بدقة 4K في الوقت نفسه", "about 15 Mbps each": "نحو 15 Mbps لكل بث",
    "Download a 2-hour HD film": "تنزيل فيلم HD مدته ساعتان", "4 GB": "4 GB",
    "Download a big game": "تنزيل لعبة كبيرة", "100 GB": "100 GB",
    "Upload 1,000 phone photos": "رفع 1,000 صورة من الهاتف", "about 4 GB": "نحو 4 GB",
    "Back up a 128 GB phone": "نسخ احتياطي لهاتف سعته 128 GB", "to iCloud or Google": "إلى iCloud أو Google",
    "HD video calls at once": "مكالمات فيديو HD في الوقت نفسه", "about 3.8 Mbps up each": "نحو 3.8 Mbps رفع لكل مكالمة",
    "Online gaming": "الألعاب عبر الإنترنت", "needs low ping and jitter": "تحتاج زمن استجابة وتذبذبًا منخفضين",
    "great": "ممتاز", "fine": "مقبول", "laggy": "متأخر",
    "People working from home": "أشخاص يعملون من البيت", "one HD call + browsing each": "مكالمة HD وتصفّح لكل شخص",
    "→ you got": "← حصلت على"
  }, [
    [/^jitter ([\d.]+) ms$/, 'التذبذب $1 ms'],
    [/^(\d+(?:\.\d+)?) s$/, '$1 ث'],
    [/^(\d+(?:\.\d+)?) h$/, '$1 ساعة'],
    [/^(\d+) streams$/, function (m, k) { return n(k, 'بث واحد', 'بثّان', 'بثوث', 'بثًا'); }],
    [/^(\d+) calls$/, function (m, k) { return n(k, 'مكالمة واحدة', 'مكالمتان', 'مكالمات', 'مكالمة'); }],
    [/^(.+) \(\+(\d+) ms\)$/, function (m, g, r) { return (GR[g] || g) + ' (+' + r + ' ms)'; }]
  ]);
})();
