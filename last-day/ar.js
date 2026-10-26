(function () {
  var WD = { Sunday: 'الأحد', Monday: 'الاثنين', Tuesday: 'الثلاثاء', Wednesday: 'الأربعاء', Thursday: 'الخميس', Friday: 'الجمعة', Saturday: 'السبت' };
  var MON = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر' };
  var SH = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var D = '(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday) \\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December) \\d{4}';
  function dt(s) { var m = s.split(' '); return WD[m[0]] + ' ' + m[1] + ' ' + MON[m[2]] + ' ' + m[3]; }
  function days(n) { var v = +n; return v === 1 ? 'يوم واحد' : v === 2 ? 'يومان' : (v % 1 === 0 && v >= 3 && v <= 10) ? n + ' أيام' : n + ' يومًا'; }
  var HOL = { "New Year's Day": 'رأس السنة الميلادية', 'Eid al-Fitr': 'عيد الفطر', 'Arafat Day': 'يوم عرفة', 'Eid al-Adha': 'عيد الأضحى', 'Islamic New Year': 'رأس السنة الهجرية', "Prophet's Birthday": 'المولد النبوي الشريف', 'Commemoration Day': 'يوم الشهيد', 'National Day': 'عيد الاتحاد' };
  var d = {
    "Last Working Day": "آخر يوم عمل",
    "Tool · Work · UAE": "أداة · العمل · الإمارات",
    "Last working day calculator.": "حاسبة آخر يوم عمل.",
    "Handing in your resignation in the UAE private sector? Enter the date and your notice period to see your last working day, how much annual leave you have built up under Federal Decree-Law 33 of 2021, and roughly what any unused days pay. You get a timeline and a summary you can copy.": "ستقدّم استقالتك من وظيفة في القطاع الخاص بالإمارات؟ أدخل التاريخ ومدة الإشعار لترى آخر يوم عمل لك، وكم تراكم لك من الإجازة السنوية بموجب المرسوم بقانون اتحادي رقم 33 لسنة 2021، وما يقارب بدل الأيام غير المستخدمة. ستحصل على جدول زمني وملخص يمكنك نسخه.",
    "last working day": "آخر يوم عمل",
    "leave days left": "أيام الإجازة المتبقية",
    "leave payout, estimate": "بدل الإجازة، تقديري",
    "Timeline": "الجدول الزمني",
    "Summary": "الملخص",
    "Copy summary": "انسخ الملخص",
    "Date you hand in notice": "تاريخ تقديم الإشعار",
    "First day at this job": "أول يوم في هذه الوظيفة",
    "Notice period in your contract (days)": "مدة الإشعار في عقدك (أيام)",
    "Notice starts": "يبدأ الإشعار",
    "the next day": "في اليوم التالي",
    "the same day": "في اليوم نفسه",
    "The law lets the contract set notice between 30 and 90 days. Your contract or offer letter says which.": "يسمح القانون بأن يحدد العقد مدة إشعار بين 30 و90 يومًا. عقدك أو خطاب العرض يبيّن المدة.",
    "Basic monthly salary (AED), not including allowances": "الراتب الأساسي الشهري (درهم)، دون البدلات",
    "Leave balance": "رصيد الإجازة",
    "Work it out from my dates": "احسبه من تواريخي",
    "I know my balance": "أعرف رصيدي",
    "Leave days already taken (whole job)": "أيام الإجازة المأخوذة (طوال مدة الوظيفة)",
    "Leave days left today": "أيام الإجازة المتبقية اليوم",
    "Working it out assumes no leave was lost along the way. Many contracts limit how many unused days carry over to the next year, so if HR gives you a balance, use that.": "يفترض الحساب أنك لم تخسر أي إجازة على مر السنوات. كثير من العقود تحدّ من عدد الأيام غير المستخدمة التي تُرحَّل إلى السنة التالية، فإذا أعطتك الموارد البشرية رصيدًا فاستخدمه.",
    "Daily rate for leave pay": "الأجر اليومي لبدل الإجازة",
    "basic ÷ 30": "الأساسي ÷ 30",
    "basic × 12 ÷ 365": "الأساسي × 12 ÷ 365",
    "Use leave during the notice period (only if your employer agrees)": "استخدم إجازتك خلال فترة الإشعار (فقط بموافقة صاحب العمل)",
    "Leave days to use before the last day": "أيام الإجازة التي ستستخدمها قبل اليوم الأخير",
    "Weekend": "عطلة نهاية الأسبوع",
    "Saturday and Sunday": "السبت والأحد",
    "Friday and Saturday": "الجمعة والسبت",
    "Sunday only": "الأحد فقط",
    "Friday only": "الجمعة فقط",
    "Show UAE public holidays": "أظهر العطلات الرسمية في الإمارات",
    "How leave builds up under the law: nothing is owed for the first six months, then 2 days for each month worked until the first year, then 30 days a year, counted pro rata for part of a year. Unused days you haven't taken are paid out on your basic salary when you leave.": "كيف تتراكم الإجازة وفق القانون: لا تُستحق إجازة في الأشهر الستة الأولى، ثم يومان عن كل شهر عمل حتى إتمام السنة الأولى، ثم 30 يومًا في السنة، وتُحتسب نسبيًا عن جزء السنة. والأيام التي لم تأخذها تُدفع لك على أساس راتبك الأساسي عند المغادرة.",
    "Also worth knowing: if one side skips the notice period, it owes the other the pay for the notice days not worked. On probation, different notice rules apply. Final dues, including your <a href=\"../gratuity/\">end-of-service gratuity</a>, are due within 14 days of the contract ending. This is an estimate, not legal advice: check your contract and MOHRE (80060), and free-zone or government jobs may follow other rules.": "من المفيد أيضًا أن تعرف: إذا لم يلتزم أحد الطرفين بمدة الإشعار، فعليه أن يدفع للآخر أجر أيام الإشعار التي لم تُعمل. وتنطبق قواعد إشعار مختلفة خلال فترة التجربة. وتُستحق المستحقات النهائية، ومنها <a href=\"../gratuity/\">مكافأة نهاية الخدمة</a>، خلال 14 يومًا من انتهاء العقد. هذا تقدير وليس استشارة قانونية: راجع عقدك ووزارة الموارد البشرية والتوطين (80060)، وقد تتبع وظائف المناطق الحرة والجهات الحكومية قواعد أخرى.",
    "Check the dates: your first day should be before the day you hand in notice.": "تحقق من التواريخ: يجب أن يكون أول يوم عمل قبل يوم تقديم الإشعار.",
    "The law sets a minimum notice of 30 days, so a shorter period only works if both sides agree to waive part of it.": "يحدد القانون حدًا أدنى للإشعار قدره 30 يومًا، فلا تصح مدة أقصر إلا إذا اتفق الطرفان على التنازل عن جزء منها.",
    "The law caps notice at 90 days. A longer period in the contract may not be enforceable.": "يحدد القانون حدًا أقصى للإشعار قدره 90 يومًا، وقد لا تكون المدة الأطول في العقد نافذة.",
    "You have worked under six months by the last day, so the law does not yet give annual leave. Your contract may.": "مدة عملك حتى اليوم الأخير أقل من ستة أشهر، فلا يمنحك القانون إجازة سنوية بعد. قد يمنحك عقدك ذلك.",
    "You have taken more leave than the law builds up for this period. Your employer may deduct the extra days from final pay.": "أخذت إجازة أكثر مما يتراكم لك قانونًا عن هذه المدة. قد يخصم صاحب العمل الأيام الزائدة من مستحقاتك النهائية.",
    "You hand in notice": "تقدّم الإشعار",
    "Give it in writing and keep a dated copy or email.": "قدّمه كتابيًا واحتفظ بنسخة مؤرخة أو برسالة بريد إلكتروني.",
    "Notice period starts": "بداية فترة الإشعار",
    "Public holiday (Islamic dates are estimates)": "عطلة رسمية (التواريخ الهجرية تقديرية)",
    "Last day in the office": "آخر يوم في المكتب",
    "Leave starts": "بداية الإجازة",
    "Agreed with your employer": "بالاتفاق مع صاحب العمل",
    "Contract ends": "انتهاء العقد",
    "Your last working day": "آخر يوم عمل لك",
    "Final dues due by": "موعد استحقاق المستحقات النهائية",
    "Leave pay, gratuity and any wages owed, within 14 days": "بدل الإجازة والمكافأة وأي أجور مستحقة، خلال 14 يومًا"
  };
  for (var k in HOL) d[k] = HOL[k];
  function T(s) { return LabAr.t(s); }
  LabAr.add(d, [
    [new RegExp('^' + D + '$'), function (m) { return dt(m); }],
    [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m, a, b, c) { return a + ' ' + SH[b] + ' ' + c; }],
    [/^AED ([\d,]+)$/, '$1 درهم'],
    [/^(\d+) days? of notice$/, function (m, n) { return 'إشعار مدته ' + days(n); }],
    [new RegExp('^Falls on a day off\\. Last day worked: (' + D + ')$'), function (m, a) { return 'يصادف يوم عطلة. آخر يوم عمل فعلي: ' + dt(a); }],
    [/^Then (\d+) leave days? to the end of notice$/, function (m, n) { return 'ثم ' + days(n) + ' إجازة حتى نهاية الإشعار'; }],
    [/^Only (\d+) working days fit inside the notice period\.$/, function (m, n) { return 'لا يتسع الإشعار إلا لـ ' + days(n) + ' عمل.'; }],
    [new RegExp('^Notice handed in: (' + D + ')$'), function (m, a) { return 'تاريخ تقديم الإشعار: ' + dt(a); }],
    [/^Notice period: (\d+) days?$/, function (m, n) { return 'مدة الإشعار: ' + days(n); }],
    [new RegExp('^Contract ends: (' + D + ')$'), function (m, a) { return 'انتهاء العقد: ' + dt(a); }],
    [new RegExp('^Last working day: (' + D + ')$'), function (m, a) { return 'آخر يوم عمل: ' + dt(a); }],
    [new RegExp('^Last day in the office: (' + D + '), using (\\d+) leave days?$'), function (m, a, n) { return 'آخر يوم في المكتب: ' + dt(a) + '، باستخدام ' + days(n) + ' إجازة'; }],
    [/^Leave earned under the law: ([\d.]+) days, taken: ([\d.]+)$/, function (m, a, b) { return 'الإجازة المستحقة قانونًا: ' + days(a) + '، المأخوذة: ' + b; }],
    [/^Leave days left at the end: ([\d.]+)$/, 'أيام الإجازة المتبقية في النهاية: $1'],
    [/^Leave payout estimate: AED ([\d,]+) \(([\d.]+) × AED ([\d,]+) a day\)$/, function (m, a, b, c) { return 'بدل الإجازة التقديري: ' + a + ' درهم (' + b + ' × ' + c + ' درهم يوميًا)'; }],
    [new RegExp('^Final dues due by: (' + D + ')$'), function (m, a) { return 'موعد استحقاق المستحقات النهائية: ' + dt(a); }],
    [/^(.+?\.) ((?:The law|You have|Only \d).+)$/, function (m, a, b) { return T(a) + ' ' + T(b); }]
  ]);
})();
