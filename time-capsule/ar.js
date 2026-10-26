(function () {
  var WD = { Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد' };
  var MO = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر' };
  var DATE = '((?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),? \\d{1,2} \\w+ \\d{4}(?:,| at) \\d\\d:\\d\\d)';
  function nice(s) {
    var m = s.match(/^(\w+),? (\d{1,2}) (\w+) (\d{4})(?:,| at) (\d\d:\d\d)$/);
    return m ? WD[m[1]] + ' ' + m[2] + ' ' + MO[m[3]] + ' ' + m[4] + '، الساعة ' + m[5] : s;
  }
  function plain(s) { var m = s.match(/^(\d{1,2}) (\w+) (\d{4})$/); return m && MO[m[2]] ? m[1] + ' ' + MO[m[2]] + ' ' + m[3] : s; }
  LabAr.add({
    "Letter to the Future": "رسالة إلى المستقبل",
    "Tool · Cryptography · Time · Live": "أداة · التشفير · الوقت · مباشر",
    "Letter to the future.": "رسالة إلى المستقبل.",
    "Write a letter to your child for their 18th birthday, to yourself in five years, or to a friend for next Eid. It gets locked so that nobody can read it before the date you pick. Not you, not the person you send it to, and not this website. The letter travels inside the link itself.": "اكتب رسالة لطفلك يقرؤها في عيد ميلاده الثامن عشر، أو لنفسك بعد خمس سنوات، أو لصديق في العيد القادم. تُقفل الرسالة بحيث لا يستطيع أحد قراءتها قبل التاريخ الذي تختاره: لا أنت، ولا من ترسلها إليه، ولا هذا الموقع. والرسالة نفسها محفوظة داخل الرابط.",
    "To (optional)": "إلى (اختياري)",
    "From (optional)": "من (اختياري)",
    "Sara": "سارة", "Mum": "أمي",
    "Your letter": "رسالتك",
    "By the time you read this…": "حين تقرأ هذه الرسالة…",
    "Add a small photo": "أضف صورة صغيرة",
    "Remove photo": "أزل الصورة",
    "Opens on (your local time)": "تُفتح في (بتوقيتك المحلي)",
    "Seal the letter": "اختم الرسالة",
    "Have a time capsule file (.txt)? Drop it here or": "لديك ملف كبسولة زمنية (.txt)؟ أفلته هنا أو",
    "choose it": "اختره",
    "How the lock works": "كيف يعمل القفل",
    "<b>A public clock that signs.</b> drand is run by a group of independent organisations, the League of Entropy, including Cloudflare, Protocol Labs and several universities. Together they publish a new signed random number every 3 seconds, numbered in order. Round 1 was in August 2023, so every future date has a known round number.": "<b>ساعة عامة توقّع.</b> تدير شبكةَ drand مجموعةٌ من المؤسسات المستقلة تُسمّى League of Entropy، منها Cloudflare وProtocol Labs وعدة جامعات. وتنشر معًا رقمًا عشوائيًا موقّعًا جديدًا كل 3 ثوانٍ، مرقّمًا بالتسلسل. كانت الجولة رقم 1 في أغسطس 2023، لذا لكل تاريخ مستقبلي رقم جولة معروف.",
    "<b>Locked to a signature that doesn't exist yet.</b> Your letter is encrypted in your browser so that the only thing that can unlock it is the network's signature for the round at your chosen date. That signature is made at that moment, by most members working together. Before then nobody has it, so nobody can open the letter.": "<b>مقفلة بتوقيع لم يوجد بعد.</b> تُشفَّر رسالتك داخل متصفحك بحيث لا يفتحها إلا توقيع الشبكة للجولة الموافقة للتاريخ الذي اخترته. ويُصنع هذا التوقيع في تلك اللحظة بتعاون أغلب الأعضاء. وقبل ذلك لا يملكه أحد، فلا يستطيع أحد فتح الرسالة.",
    "<b>No key to lose or leak.</b> There is no password and no copy on a server. The scrambled letter sits inside the link after the # sign, which browsers never send to websites. When the date arrives, the page fetches that round's public signature and uses it to unlock the letter.": "<b>لا مفتاح يضيع أو يتسرّب.</b> لا توجد كلمة مرور ولا نسخة على أي خادم. الرسالة المشفّرة موجودة داخل الرابط بعد علامة #، وهي جزء لا ترسله المتصفحات إلى المواقع أبدًا. وحين يحين الموعد، تجلب الصفحة التوقيع العام لتلك الجولة وتفتح به الرسالة.",
    "Honest limits: if the drand network shuts down before your date, the letter can never be opened. If most of its members secretly worked together, they could open it early. Keep the link or file somewhere safe, because it is the only copy. The lock uses the open <a href=\"https://github.com/drand/tlock-js\" style=\"color:var(--sat-b)\">tlock</a> format with the drand \"quicknet\" chain, so other tlock tools can open it too.": "حدود صريحة: إن توقفت شبكة drand قبل موعدك فلن تُفتح الرسالة أبدًا. وإن تواطأ أغلب أعضائها سرًا فقد يفتحونها مبكرًا. احفظ الرابط أو الملف في مكان آمن، فهو النسخة الوحيدة. يستخدم القفل صيغة <a href=\"https://github.com/drand/tlock-js\" style=\"color:var(--sat-b)\">tlock</a> المفتوحة مع سلسلة \"quicknet\" من drand، لذا يمكن لأدوات tlock الأخرى فتحها أيضًا.",
    "In 2 minutes (try it)": "بعد دقيقتين (للتجربة)", "1 month": "شهر", "1 year": "سنة", "5 years": "5 سنوات", "10 years": "10 سنوات", "18 years": "18 سنة",
    "That image couldn't be read.": "تعذّرت قراءة هذه الصورة.",
    "Pick a time at least a minute from now.": "اختر وقتًا بعد دقيقة على الأقل من الآن.",
    "Loading the lock and the network's public key…": "جارٍ تحميل القفل والمفتاح العام للشبكة…",
    "Sealing…": "جارٍ الختم…",
    "Copy link": "انسخ الرابط", "Send on WhatsApp": "أرسل عبر WhatsApp", "Download .txt": "نزّل ملف .txt", "Test the link": "جرّب الرابط",
    "Select the link and copy it": "حدّد الرابط وانسخه",
    "Your letter is too big for a link, so it comes as a small text file. Keep it safe or send it as an attachment.": "رسالتك أكبر من أن تتسع في رابط، لذا تأتي في ملف نصي صغير. احفظه أو أرسله مرفقًا.",
    "Nothing was saved anywhere. If you lose this link or file, the letter is gone.": "لم يُحفظ شيء في أي مكان. إن أضعت هذا الرابط أو الملف فقدت الرسالة.",
    "The time-lock library couldn't load (it comes from cdn.jsdelivr.net), so this letter can't be locked right now. Try again on another connection or browser. You can still keep an <b>unlocked</b> copy and a calendar reminder for the date, but anyone holding the file can read it.": "تعذّر تحميل مكتبة القفل الزمني (مصدرها cdn.jsdelivr.net)، لذا لا يمكن قفل هذه الرسالة الآن. حاول مجددًا من اتصال أو متصفح آخر. ما زال بإمكانك حفظ نسخة <b>غير مقفلة</b> وتذكير في التقويم بالموعد، لكن أي شخص يملك الملف يستطيع قراءتها.",
    "Save unlocked letter (.txt)": "احفظ الرسالة غير المقفلة (.txt)",
    "Calendar reminder (.ics)": "تذكير في التقويم (.ics)",
    "Time capsule": "كبسولة زمنية",
    "This doesn't look like a complete time capsule. The link may have been cut off when it was copied.": "لا تبدو هذه كبسولة زمنية كاملة. ربما انقطع جزء من الرابط عند نسخه.",
    "A sealed letter": "رسالة مختومة",
    "days": "يوم", "hours": "ساعة", "minutes": "دقيقة", "seconds": "ثانية",
    "Opening": "جارٍ الفتح",
    "Can't open yet": "لا يمكن الفتح بعد",
    "The unlocking code couldn't load from cdn.jsdelivr.net. Check your connection and reload.": "تعذّر تحميل شيفرة الفتح من cdn.jsdelivr.net. تحقّق من اتصالك وأعد تحميل الصفحة.",
    "Couldn't open": "تعذّر الفتح",
    "Couldn't reach the drand network. Check your connection and reload.": "تعذّر الوصول إلى شبكة drand. تحقّق من اتصالك وأعد تحميل الصفحة.",
    "The letter couldn't be unlocked. The link may be damaged or incomplete.": "تعذّر فتح الرسالة. ربما الرابط تالف أو ناقص.",
    "Photo sealed with the letter": "صورة مختومة مع الرسالة",
    "That file doesn't contain a time capsule.": "هذا الملف لا يحتوي على كبسولة زمنية."
  }, [
    [new RegExp('^Sealed until ' + DATE + '$'), function (m, d) { return 'مختومة حتى ' + nice(d); }],
    [new RegExp('^Opens ' + DATE + '$'), function (m, d) { return 'تُفتح ' + nice(d); }],
    [/^This link is ([\d,]+) characters long, too long for some chat apps\. The \.txt file is safer to keep and send\.$/, 'طول هذا الرابط $1 حرفًا، وهو طويل على بعض تطبيقات المحادثة. ملف .txt أكثر أمانًا للحفظ والإرسال.'],
    [/^The link is ([\d,]+) characters\. It is the letter, so anyone with it can open it after the date\.$/, 'طول الرابط $1 حرفًا. الرابط هو الرسالة نفسها، فمن يملكه يستطيع فتحها بعد الموعد.'],
    [/^Shrunk to (\d+)×(\d+), about (\d+) KB\. With a photo you'll usually get a file rather than a link\.$/, 'صُغّرت إلى $1×$2، نحو $3 KB. مع الصورة ستحصل غالبًا على ملف بدلًا من رابط.'],
    [/^Sealing failed: ([\s\S]+)\. Check your connection and try again\.$/, function (m, e) { return 'فشل الختم: ' + (e === 'network error' ? 'خطأ في الشبكة' : e) + '. تحقّق من اتصالك وحاول مرة أخرى.'; }],
    [/^This capsule is locked to a different drand network \((\w+)…\), which this page doesn't support\.$/, 'هذه الكبسولة مقفلة بشبكة drand مختلفة ($1…)، ولا تدعمها هذه الصفحة.'],
    [/^Nobody can read it yet, including this page\. Keep this (file|link) and come back on the day\. This page will open it by itself if you leave it open\.$/, function (m, w) { return 'لا يستطيع أحد قراءتها بعد، ولا حتى هذه الصفحة. احتفظ ' + (w === 'file' ? 'بهذا الملف' : 'بهذا الرابط') + ' وعُد في الموعد. وإن تركت الصفحة مفتوحة فستفتحها وحدها.'; }],
    [/^The date has passed\. Fetching the drand signature for round ([\d,]+) and unlocking…$/, 'حان الموعد. جارٍ جلب توقيع drand للجولة $1 وفتح الرسالة…'],
    [/^Waiting for the network to publish round ([\d,]+)…$/, 'بانتظار أن تنشر الشبكة الجولة $1…'],
    [/^Unlocked by drand round ([\d,]+)$/, 'فُتحت بجولة drand رقم $1'],
    [/^(?:To (.+?) · )?(?:From (.+?) · )?Written (\d{1,2} \w+ \d{4})$/, function (m, to, fr, w) { return (to ? 'إلى ' + to + ' · ' : '') + (fr ? 'من ' + fr + ' · ' : '') + 'كُتبت في ' + plain(w); }],
    // the sealed link itself
    [/^https?:\/\/\S+$/, '$&']
  ]);
})();
