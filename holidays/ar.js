(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var HOL = { "New Year's Day": 'رأس السنة الميلادية', 'Eid al-Fitr': 'عيد الفطر', 'Eid al-Fitr (eve)': 'عيد الفطر (29 رمضان)', 'Arafat Day': 'يوم عرفة', 'Eid al-Adha': 'عيد الأضحى', 'Islamic New Year': 'رأس السنة الهجرية', "Prophet's Birthday": 'المولد النبوي الشريف', 'Commemoration Day': 'يوم الشهيد', 'National Day': 'عيد الاتحاد' };
  function D(s) { var m = s.match(/^(?:(\w{3}),? )?(\d{1,2}) (\w{3})$/); return m ? (m[1] ? WD[m[1]] + ' ' : '') + m[2] + ' ' + MON[m[3]] : s; }
  var DT = '((?:\\w{3},? )?\\d{1,2} \\w{3})';
  var d = {
    "Holiday planner.": "مخطّط الإجازات.",
    "UAE Holiday Planner": "مخطّط الإجازات في الإمارات",
    "Tool · UAE": "أداة · الإمارات",
    "Put a leave day or two next to a public holiday and a weekend, and a short break becomes a proper trip. Tell it how many leave days you have, and it finds the plan that gives you the most days off.":
      "ضع يوم إجازة أو يومين بجانب عطلة رسمية وعطلة نهاية أسبوع، فتتحوّل الاستراحة القصيرة إلى رحلة حقيقية. أخبره بعدد أيام إجازتك، وسيجد لك الخطة التي تمنحك أكبر عدد من أيام الراحة.",
    "Year": "السنة",
    "Leave days to use": "أيام الإجازة المتاحة",
    "Weekend": "عطلة نهاية الأسبوع",
    "Saturday and Sunday": "السبت والأحد",
    "Friday and Saturday": "الجمعة والسبت",
    "Friday only": "الجمعة فقط",
    "Plan from": "خطّط بدءًا من",
    "today": "اليوم",
    "1 January": "1 يناير",
    "Your best breaks": "أفضل إجازاتك",
    "Add the plan to my calendar": "أضف الخطة إلى تقويمي",
    "Leave used": "الإجازة المستخدمة",
    "Days off": "أيام الراحة",
    "Multiplier": "المضاعِف",
    "Public holidays": "العطلات الرسمية",
    "Islamic holidays follow the moon and are estimated from the Umm al-Qura calendar, so they can shift by a day once the moon is sighted. The government sometimes also moves a holiday to make a long weekend. Check the official announcement before booking flights.":
      "تتبع العطلات الإسلامية القمر، وهي مقدّرة هنا من تقويم أم القرى، لذا قد تتغيّر بيوم بعد رؤية الهلال. وأحيانًا تنقل الحكومة العطلة لتصنع عطلة نهاية أسبوع طويلة. راجع الإعلان الرسمي قبل حجز الرحلات.",
    "public holiday": "عطلة رسمية",
    "suggested leave": "إجازة مقترحة",
    "weekend": "عطلة نهاية الأسبوع",
    "days off": "أيام راحة",
    "take leave": "خذ إجازة",
    "No holiday breaks left to stretch this year. Try next year.": "لم تتبقَّ عطلات يمكن إطالتها هذا العام. جرّب العام القادم."
  };
  for (var k in HOL) d[k] = HOL[k];
  LabAr.add(d, [
    [/^(.+) \*$/, function (m, n) { return HOL[n] ? HOL[n] + ' *' : m; }],
    [/^(\d+) leave$/, 'إجازة: $1'],
    [new RegExp('^' + DT + '(?: – ' + DT + ')?$'), function (m, a, b) { return D(a) + (b ? ' – ' + D(b) : ''); }],
    [/^(.+?)\. Take (.+)\.$/, function (m, w, t) { return w.split(' + ').map(function (x) { return HOL[x] || x; }).join(' + ') + '. خذ إجازة في: ' + t.split(', ').map(D).join('، ') + '.'; }],
    [/^(\d+(?:\.\d)?)×$/, '$1×']
  ]);
})();
