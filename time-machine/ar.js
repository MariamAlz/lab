LabAr.add({
  "Website Time Machine": "آلة الزمن للمواقع",
  "Tool · Web history": "أداة · تاريخ الويب",
  "Website time machine.": "آلة الزمن للمواقع.",
  "The Internet Archive has been saving copies of the web since 1996. Type any site to see how often it was saved each year, then put two years side by side. Handy for nostalgia, for research, and for checking what a company's page said before it quietly changed.": "يحفظ أرشيف الإنترنت (Internet Archive) نسخًا من الويب منذ عام 1996. اكتب اسم أي موقع لترى كم مرة حُفظ في كل سنة، ثم ضع سنتين جنبًا إلى جنب. مفيد للحنين إلى الماضي، وللبحث، وللتحقق مما كانت تقوله صفحة شركة قبل أن تتغير بصمت.",
  "e.g. dubai.ae or a full page address": "مثلًا dubai.ae أو عنوان صفحة كاملًا",
  "Website": "الموقع", "Travel": "انطلق", "Try": "جرّب",
  "emirates.com": "emirates.com", "google.com": "google.com", "apple.com": "apple.com", "wikipedia.org": "wikipedia.org",
  "Saves per year. Tap a bar to set the <span style=\"color:var(--accent)\">left</span> view; tap again with <span style=\"color:var(--sat-a)\">Right</span> selected to set the other.": "عدد النسخ في كل سنة. اضغط على عمود لتحديد العرض <span style=\"color:var(--accent)\">الأيمن</span>؛ ثم اضغط مرة أخرى مع اختيار <span style=\"color:var(--sat-a)\">الأيسر</span> لتحديد الآخر.",
  "Which side": "أي جهة", "Left": "الأيمن", "Right": "الأيسر",
  "Open ↗": "فتح ↗", "Older version": "النسخة الأقدم", "Newer version": "النسخة الأحدث",
  "Copies come from web.archive.org and show inside this page with scripts switched off, so some old pages look plain or half-loaded. Use \"Open\" for the full archived page. Only the site name is sent to the Internet Archive.": "النسخ مصدرها web.archive.org وتُعرض داخل هذه الصفحة مع إيقاف السكربتات، لذا قد تبدو بعض الصفحات القديمة بسيطة أو غير مكتملة التحميل. استخدم «فتح» لرؤية الصفحة المؤرشفة كاملة. لا يُرسل إلى أرشيف الإنترنت سوى اسم الموقع.",
  "Type a website like example.com.": "اكتب اسم موقع مثل example.com.",
  "Asking the Internet Archive… (this can take a few seconds)": "جارٍ سؤال أرشيف الإنترنت… (قد يستغرق ذلك بضع ثوانٍ)",
  "The archive has no saved copies of that address.": "لا توجد في الأرشيف نسخ محفوظة لهذا العنوان.",
  "The Internet Archive didn't answer. It is sometimes slow or down; try again shortly.": "لم يردّ أرشيف الإنترنت. يكون بطيئًا أو متوقفًا أحيانًا؛ حاول بعد قليل."
}, [
  [/^(\d{4}): (\d+) saves$/, '$1: $2 نسخة'],
  [/^(.+) was first saved in (\d{4}), with copies in (\d+) different years\. Bars show how many months each year have a copy\.$/, function (m, s, y, n) { return 'حُفظ ' + s + ' أول مرة في ' + y + '، وله نسخ في ' + n + ' سنة مختلفة. تُبيّن الأعمدة عدد الأشهر التي فيها نسخة في كل سنة.'; }]
]);
