(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var SND = { 'Doorbell': 'جرس الباب', 'Smoke alarm': 'إنذار الدخان', 'Baby crying': 'بكاء الطفل', 'Kettle': 'الغلاية', 'Washing machine': 'الغسالة', 'Custom sound': 'صوت مخصص' };
  function n(s) { return SND[s] || s; }
  function tm(s) { return s.replace(/(\d{1,2}:\d\d)\s?AM/i, '$1 ص').replace(/(\d{1,2}:\d\d)\s?PM/i, '$1 م'); }
  var d = {
    "Home Sound Alerts": "تنبيهات أصوات البيت",
    "Home Sound Alerts · Mariam's Lab": "تنبيهات أصوات البيت · مختبر مريم",
    "Tool · Sound · Accessibility": "أداة · صوت · إمكانية الوصول",
    "Home sound alerts.": "تنبيهات أصوات البيت.",
    "If you're deaf or hard of hearing, wear headphones a lot, or work in a far room, it's easy to miss the doorbell, the smoke alarm or the baby. Teach this page a sound with a few recordings. While it listens, it flashes the screen in that sound's colour, vibrates and logs the time when it hears it again.": "إذا كنت من الصم أو ضعاف السمع، أو تضع سماعات الرأس كثيرًا، أو تعمل في غرفة بعيدة، فمن السهل أن يفوتك جرس الباب أو إنذار الدخان أو بكاء الطفل. علّم هذه الصفحة صوتًا ببضعة تسجيلات. وأثناء الاستماع، تومض الشاشة بلون ذلك الصوت، ويهتز الجهاز، ويُسجَّل الوقت عندما تسمعه مجددًا.",
    "Start listening": "ابدأ الاستماع", "Stop listening": "أوقف الاستماع", "Test mode": "وضع التجربة",
    "sounds taught": "أصوات مُعلَّمة", "heard today": "سُمعت اليوم", "last alert": "آخر تنبيه",
    "Your sounds": "أصواتك", "Teach a new sound": "علّم صوتًا جديدًا", "Type": "النوع",
    "Custom…": "مخصص…", "Name": "الاسم", "Intercom": "الإنتركم",
    "Add this sound": "أضف هذا الصوت",
    "Then press Record on it and make the sound 2 to 5 times, one recording each. Each recording lasts 3 seconds.": "ثم اضغط «تسجيل» عليه وأصدر الصوت من 2 إلى 5 مرات، بتسجيل لكل مرة. كل تسجيل مدته 3 ثوانٍ.",
    "Sensitivity": "الحساسية",
    "Higher catches quieter or more distant sounds but gives more false alarms. In test mode, the bars show the live match and nothing flashes, so you can tune this.": "الحساسية الأعلى تلتقط الأصوات الأخفت أو الأبعد، لكنها تعطي إنذارات خاطئة أكثر. في وضع التجربة تُظهر الأشرطة نسبة التطابق المباشرة ولا يومض شيء، لتتمكن من ضبطها.",
    "Log": "السجل", "Nothing heard yet.": "لم يُسمع شيء بعد.", "Clear log": "مسح السجل",
    "Each recording becomes a fingerprint: how loud the sound is in 40 pitch bands spaced like human hearing, averaged over the sound, plus the shape of its loudness over time. While listening, the page compares the last moment of audio with every fingerprint using cosine similarity, a score from 0 to 1 for how alike two patterns are.": "يتحول كل تسجيل إلى بصمة: مدى علو الصوت في 40 نطاقًا من طبقات الصوت موزعة كما يسمع الإنسان، بمتوسطها على مدى الصوت، إضافة إلى شكل تغيّر علوه مع الوقت. وأثناء الاستماع، تقارن الصفحة آخر لحظة من الصوت بكل بصمة باستخدام تشابه جيب التمام، وهو درجة من 0 إلى 1 تبيّن مدى تشابه نمطين.",
    "Be honest with yourself about the limits. This tab must stay open and the screen on; it asks your device to keep the screen awake, but phones may still stop the microphone when you switch apps or lock the screen. It can miss sounds or alert on similar ones. It is not a certified alarm and doesn't replace a working smoke alarm or a visual doorbell. Audio never leaves your device; only the fingerprints are saved in this browser.": "كن واقعيًا بشأن حدود هذه الأداة. يجب أن يبقى هذا التبويب مفتوحًا والشاشة مضاءة؛ تطلب الصفحة من جهازك إبقاء الشاشة مستيقظة، لكن الهواتف قد توقف الميكروفون عند التبديل بين التطبيقات أو قفل الشاشة. قد تفوتها أصوات أو تنبّه لأصوات مشابهة. هذه ليست أداة إنذار معتمدة ولا تغني عن إنذار دخان يعمل أو جرس باب ضوئي. الصوت لا يغادر جهازك أبدًا؛ تُحفظ البصمات فقط في هذا المتصفح.",
    "Tap anywhere to dismiss": "اضغط في أي مكان للإغلاق",
    "No sounds yet. Add one below.": "لا توجد أصوات بعد. أضف صوتًا أدناه.",
    "Live match": "التطابق المباشر", "Recording…": "جارٍ التسجيل…", "Record": "تسجيل", "Replay last": "أعد تشغيل الأخير",
    "That was too quiet to learn. Move closer to the sound and try again.": "كان الصوت أخفت من أن يُتعلَّم. اقترب من مصدره وحاول مرة أخرى.",
    "Microphone permission was refused. Allow it in your browser settings.": "تم رفض إذن الميكروفون. اسمح به من إعدادات المتصفح.",
    "Screen kept awake.": "الشاشة ستبقى مستيقظة.",
    "Screen may sleep. Tap the page to keep it awake.": "قد تنطفئ الشاشة. اضغط على الصفحة لإبقائها مستيقظة.",
    "Your browser can't keep the screen awake. Turn off auto-lock while listening.": "متصفحك لا يستطيع إبقاء الشاشة مستيقظة. أوقف القفل التلقائي أثناء الاستماع.",
    "Couldn't keep the screen awake.": "تعذّر إبقاء الشاشة مستيقظة.",
    "That's the maximum of 8 sounds.": "هذا هو الحد الأقصى: 8 أصوات.",
    "Stopped.": "تم الإيقاف.",
    "Teach at least one sound first.": "علّم صوتًا واحدًا على الأقل أولًا.",
    "Listening. Keep this tab open and the screen on.": "جارٍ الاستماع. أبقِ هذا التبويب مفتوحًا والشاشة مضاءة."
  };
  for (var k in SND) d[k] = SND[k];
  LabAr.add(d, [
    [/^● (.+)$/, function (m, a) { return '● ' + n(a); }],
    [/^(\d+) of 5 recordings$/, '$1 من 5 تسجيلات'],
    [/^(\d+) \(match above ([\d.]+)\)$/, '$1 (تطابق أعلى من $2)'],
    [/^Would alert: (.+) \(match ([\d.]+)\)$/, function (m, a, b) { return 'كان سينبّه: ' + n(a) + ' (تطابق ' + b + ')'; }],
    [/^🔔 (.+) · Home Sound Alerts$/, function (m, a) { return '🔔 ' + n(a) + ' · تنبيهات أصوات البيت'; }],
    [/^Recording (.+) for 3 seconds\. Make the sound now\.$/, function (m, a) { return 'جارٍ تسجيل «' + n(a) + '» لمدة 3 ثوانٍ. أصدر الصوت الآن.'; }],
    [/^Got it\. (.+) has (\d+) recordings?(\. Add at least one more for reliability\.|\.)$/, function (m, a, c, e) { return 'تم. لدى «' + n(a) + '» ' + c + ' ' + (c === '1' ? 'تسجيل' : 'تسجيلات') + (e.length > 1 ? '. أضف تسجيلًا آخر على الأقل لمزيد من الدقة.' : '.'); }],
    [/^Replaying your last (.+) recording into the detector \(silently\)\. Watch its bar\.$/, function (m, a) { return 'جارٍ إعادة تشغيل آخر تسجيل لـ«' + n(a) + '» في الكاشف (بصمت). راقب شريطه.'; }],
    [/^Couldn't open the microphone: (.+)$/, 'تعذّر فتح الميكروفون: $1'],
    [/^Delete (.+)\?$/, function (m, a) { return 'حذف «' + n(a) + '»؟'; }],
    [/^Added (.+)\. Now press Record and make the sound\.$/, function (m, a) { return 'تمت إضافة «' + n(a) + '». الآن اضغط «تسجيل» وأصدر الصوت.'; }],
    [/^\d{1,2}:\d\d\s?(?:AM|PM)$/i, tm],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d+) (\d{1,2}:\d\d\s?(?:AM|PM))$/i, function (m, mo, dd, t) { return dd + ' ' + MO[mo] + ' ' + tm(t); }]
  ]);
})();
