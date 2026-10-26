(function () {
  var MON = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر',
    Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WD = { Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت', Sunday: 'الأحد', Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var HM = { 'Muharram': 'محرم', 'Safar': 'صفر', 'Rabi I': 'ربيع الأول', 'Rabi II': 'ربيع الآخر', 'Jumada I': 'جمادى الأولى', 'Jumada II': 'جمادى الآخرة', 'Rajab': 'رجب', 'Shaban': 'شعبان', 'Ramadan': 'رمضان', 'Shawwal': 'شوال', 'Dhul-Qidah': 'ذو القعدة', 'Dhul-Hijjah': 'ذو الحجة' };
  function hm(n) { return HM[n.replace(/[ʻʼ'’]/g, '')] || n; }
  var PL = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Sharjah': 'الشارقة', 'Al Ain': 'العين', 'Ajman': 'عجمان', 'Umm Al Quwain': 'أم القيوين', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Your location': 'موقعك' };
  var ANCH = { 'same time': 'الوقت نفسه', 'before suhoor ends': 'قبل انتهاء السحور', 'after iftar': 'بعد الإفطار', 'before iftar': 'قبل الإفطار' };
  // toDateString(): "Mon Oct 26 2026"
  function ds(s) { var m = s.match(/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/); return m ? WD[m[1]] + ' ' + (+m[3]) + ' ' + MON[m[2]] + ' ' + m[4] : s; }
  var DS = '(\\w{3} \\w{3} \\d{2} \\d{4})';
  function plural(n, one, two, few, many) { n = +n; return n === 1 ? one : n === 2 ? two : n >= 3 && n <= 10 ? n + ' ' + few : n + ' ' + many; }
  LabAr.add({
    "Habit tracker.": "متتبّع العادات.",
    "Habit Tracker": "متتبّع العادات",
    "Tool · Habits · Ramadan": "أداة · العادات · رمضان",
    "Track the small things you want to do every day or a few times a week. Tap the circle to check in, watch your streak grow, and see the whole year at a glance. In Ramadan, reminders move around suhoor and iftar for where you are. Nothing leaves your device.":
      "تابع الأشياء الصغيرة التي تريد أن تفعلها كل يوم أو بضع مرات في الأسبوع. اضغط الدائرة لتسجيل الإنجاز، وشاهد سلسلتك تطول، واطّلع على السنة كلها بنظرة واحدة. في رمضان تتحرّك التذكيرات حول السحور والإفطار بحسب موقعك. لا شيء يغادر جهازك.",
    "done today": "أُنجزت اليوم",
    "best current streak": "أفضل سلسلة حالية",
    "last 30 days": "آخر 30 يومًا",
    "Add a habit": "أضف عادة",
    "e.g. Read 10 pages, Walk after Maghrib": "مثلًا: قراءة 10 صفحات، المشي بعد المغرب",
    "Habit name": "اسم العادة",
    "How often": "كم مرة",
    "Every day": "كل يوم",
    "Times a week": "مرات في الأسبوع",
    "Times per week": "عدد المرات في الأسبوع",
    "Reminder": "تذكير",
    "Reminder time": "وقت التذكير",
    "Ideas:": "أفكار:",
    "Ramadan mode": "وضع رمضان",
    "Auto": "تلقائي",
    "📍 Use my location": "📍 استخدم موقعي",
    "Today's reminders": "تذكيرات اليوم",
    "🔔 Turn on notifications": "🔔 فعّل الإشعارات",
    "🔔 Notifications on": "🔔 الإشعارات مفعّلة",
    "🔕 Notifications blocked": "🔕 الإشعارات محظورة",
    "Notifications only fire while this page is open in a tab. For reminders that always arrive, copy the times into your phone's alarm or calendar.": "لا تظهر الإشعارات إلا والصفحة مفتوحة في علامة تبويب. لتذكيرات تصلك دائمًا، انسخ الأوقات إلى منبّه هاتفك أو تقويمه.",
    "Backup": "النسخ الاحتياطي",
    "⬇ Export JSON": "⬇ تصدير JSON",
    "⬆ Import JSON": "⬆ استيراد JSON",
    "Fill with demo data": "املأ ببيانات تجريبية",
    "<b>How the Ramadan times work.</b> Fajr is when the sun is 18.2° below the horizon before dawn, the angle used for UAE timetables, and that is when suhoor ends. Maghrib, and iftar, is sunset. Both come from the sun's position for your latitude and longitude on that date. The Ramadan dates come from your browser's built-in Umm al-Qura calendar, so the start can differ by a day from the moon-sighting announcement. Check your local mosque or the official UAE timetable, which uses its own settings and can differ by a few minutes.":
      "<b>كيف تُحسب أوقات رمضان.</b> الفجر حين تكون الشمس تحت الأفق بزاوية 18.2° قبل الشروق، وهي الزاوية المعتمدة في تقاويم الإمارات، وعنده ينتهي السحور. والمغرب، أي الإفطار، هو غروب الشمس. ويُحسب كلاهما من موقع الشمس بحسب خط العرض وخط الطول في ذلك التاريخ. أما تواريخ رمضان فمن تقويم أم القرى المدمج في متصفحك، لذا قد تختلف البداية بيوم عن إعلان رؤية الهلال. راجع مسجدك أو التقويم الرسمي في الإمارات، فله إعداداته الخاصة وقد يختلف ببضع دقائق.",
    "<b>Streaks.</b> A daily streak counts days in a row up to today, and today doesn't break it until it's over. A weekly streak counts weeks in a row (Monday to Sunday) where you hit your target.":
      "<b>السلاسل.</b> السلسلة اليومية تعدّ الأيام المتتالية حتى اليوم، ولا ينقطع اليوم الحالي السلسلة قبل أن ينتهي. والسلسلة الأسبوعية تعدّ الأسابيع المتتالية (من الاثنين إلى الأحد) التي حققت فيها هدفك.",
    "No habits yet. Add one below, or tap an idea to start.": "لا توجد عادات بعد. أضف واحدة أدناه، أو اضغط فكرة لتبدأ.",
    "Done today": "أُنجزت اليوم",
    "Not yet today": "لم تُنجز اليوم بعد",
    "Name": "الاسم",
    "In Ramadan:": "في رمضان:",
    "Ramadan reminder": "تذكير رمضان",
    "Same time": "الوقت نفسه",
    "Before suhoor ends": "قبل انتهاء السحور",
    "After iftar": "بعد الإفطار",
    "Before iftar": "قبل الإفطار",
    "min": "دقيقة",
    "Colour": "اللون",
    "↑ Move up": "↑ انقل للأعلى",
    "Hide year": "أخفِ السنة",
    "Show year": "اعرض السنة",
    "Best streak": "أفضل سلسلة",
    "Last 30 days": "آخر 30 يومًا",
    "Tap a square to fix a past day.": "اضغط مربعًا لتصحيح يوم سابق.",
    "day streak": "سلسلة أيام", "days streak": "سلسلة أيام", "week streak": "سلسلة أسابيع", "weeks streak": "سلسلة أسابيع",
    "No reminders set. Add a time to a habit.": "لا توجد تذكيرات. أضف وقتًا إلى إحدى العادات.",
    "This browser has no Umm al-Qura calendar, so Auto can't tell when Ramadan is. Use On and Off instead.": "هذا المتصفح لا يحتوي على تقويم أم القرى، لذا لا يستطيع الوضع التلقائي معرفة موعد رمضان. استخدم «تشغيل» و«إيقاف» بدلًا منه.",
    "Suhoor ends (Fajr)": "انتهاء السحور (الفجر)",
    "Iftar (Maghrib)": "الإفطار (المغرب)",
    "My location": "موقعي",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك.",
    "This browser doesn't support notifications.": "هذا المتصفح لا يدعم الإشعارات.",
    "Saved a backup file.": "تم حفظ ملف النسخة الاحتياطية.",
    "That file doesn't look like a habits backup.": "لا يبدو هذا الملف نسخة احتياطية للعادات.",
    "Replace your habits with demo data?": "هل تريد استبدال عاداتك ببيانات تجريبية؟",
    "Demo data loaded. Export first if you want to keep your own.": "تم تحميل البيانات التجريبية. صدّر بياناتك أولًا إن أردت الاحتفاظ بها.",
    "Read 10 pages": "قراءة 10 صفحات",
    "Drink 8 glasses of water": "شرب 8 أكواب ماء",
    "Walk 20 minutes": "المشي 20 دقيقة",
    "Quran, one page": "القرآن، صفحة واحدة",
    "No phone after 10 pm": "لا هاتف بعد الساعة 10 مساءً",
    "Call family": "الاتصال بالعائلة",
    "Mo": "ن", "Tu": "ث", "We": "ر", "Th": "خ", "Fr": "ج", "Sa": "س", "Su": "ح"
  }, [
    [/^(\w+day) (\d{1,2}) (\w+)(?: · (.+?) (\d+), (\d+) AH)?$/, function (m, w, d, mo, h, hd, hy) { return WD[w] + ' ' + d + ' ' + MON[mo] + (h ? ' · ' + hd + ' ' + hm(h) + ' ' + hy + ' هـ' : ''); }],
    [new RegExp('^' + DS + '(, done| · done)?$'), function (m, d, dn) { return ds(d) + (dn ? (dn[0] === ',' ? '، ' : ' · ') + 'مُنجز' : ''); }],
    [/^(\d+) of (\d+) this week(?: · 🔔 (\d\d:\d\d))?$/, function (m, a, b, t) { return a + ' من ' + b + ' هذا الأسبوع' + (t ? ' · 🔔 ' + t : ''); }],
    [/^(Done today|Not yet today) · 🔔 (\d\d:\d\d)$/, function (m, a, t) { return (a === 'Done today' ? 'أُنجزت اليوم' : 'لم تُنجز اليوم بعد') + ' · 🔔 ' + t; }],
    [/^· (.+)$/, function (m, a) { return ANCH[a] ? '· ' + ANCH[a] : m; }],
    [/^Check in (.+)$/, 'سجّل إنجاز $1'],
    [/^Undo (.+)$/, 'تراجع عن $1'],
    [/^Year heatmap for (.+)$/, 'خريطة السنة لعادة $1'],
    [/^Delete "(.+)" and its history\?$/, 'هل تريد حذف «$1» وسجلّه؟'],
    [/^Reminder: (.+)$/, 'تذكير: $1'],
    [/^Replace your current habits with (\d+) from this file\?$/, 'هل تريد استبدال عاداتك الحالية بـ $1 من هذا الملف؟'],
    [/^Imported (\d+) habits\.$/, 'تم استيراد $1 من العادات.'],
    [/^(.*?) ?(Ramadan mode is on: habits set to follow suhoor or iftar use the times below\.|Ramadan mode is off\.)$/, function (m, a, b) {
      var s = '';
      var r;
      if ((r = a.match(/^Ramadan Kareem\. Today is day (\d+) of Ramadan, with about (\d+) days? to go\.$/))) s = 'رمضان كريم. اليوم هو اليوم ' + r[1] + ' من رمضان، ويتبقّى ' + plural(r[2], 'يوم واحد تقريبًا', 'يومان تقريبًا', 'أيام تقريبًا', 'يومًا تقريبًا') + '.';
      else if ((r = a.match(/^Ramadan is expected to start in (\d+) days, on (\d+) (\w+) (\d{4})\.$/))) s = 'يُتوقّع أن يبدأ رمضان بعد ' + r[1] + ' يومًا، في ' + r[2] + ' ' + MON[r[3]] + ' ' + r[4] + '.';
      else if (a === "This browser has no Umm al-Qura calendar, so Auto can't tell when Ramadan is. Use On and Off instead.") s = 'هذا المتصفح لا يحتوي على تقويم أم القرى، لذا لا يستطيع الوضع التلقائي معرفة موعد رمضان. استخدم «تشغيل» و«إيقاف» بدلًا منه.';
      else if (a) s = a;
      return (s ? s + ' ' : '') + (/off/.test(b) ? 'وضع رمضان متوقّف.' : 'وضع رمضان مفعّل: العادات المضبوطة على السحور أو الإفطار تستخدم الأوقات أدناه.');
    }],
    [/^(.+) today · fasting time about (\d+) h (\d+) min · times in UTC([+-]?[\d.]+)$/, function (m, n, h, mi, tz) { return (PL[n] || n) + ' اليوم · مدة الصيام نحو ' + h + ' ساعة و' + mi + ' دقيقة · الأوقات بتوقيت UTC' + tz; }]
  ]);
  // the heatmap's day labels have room for one letter; these keys also exist in the shared dictionary, so add them once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { LabAr.add({ "Mon": "ن", "Wed": "ر", "Fri": "ج" }); });
})();
