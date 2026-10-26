(function () {
  var N = '[\\d,]+(?:\\.\\d+)?';
  function dh(s) { return s.replace(/AED ([\d,]+(?:\.\d+)?)/g, '$1 درهم'); }
  function ltr(s) { return '⁦' + s + '⁩'; }
  LabAr.add({
    "End-of-Service Gratuity": "مكافأة نهاية الخدمة",
    "Tool · Money · UAE": "أداة · المال · الإمارات",
    "End-of-service gratuity.": "مكافأة نهاية الخدمة.",
    "Leaving a private-sector job in the UAE after at least a year? The law (Federal Decree-Law 33 of 2021) owes you a gratuity based on your basic salary. Enter your dates and see the amount, with every step of the sum shown.": "تترك وظيفتك في القطاع الخاص في الإمارات بعد سنة على الأقل؟ يمنحك القانون (المرسوم بقانون اتحادي رقم 33 لسنة 2021) مكافأة نهاية خدمة تُحسب على أساس راتبك الأساسي. أدخل التواريخ لترى المبلغ مع كل خطوة من خطوات الحساب.",
    "First working day": "أول يوم عمل", "Last working day": "آخر يوم عمل",
    "Basic monthly salary (AED), not including allowances": "الراتب الأساسي الشهري (درهم)، دون البدلات",
    "Unpaid leave or unpaid absence during the job (days)": "الإجازات أو الغيابات غير المدفوعة خلال الخدمة (أيام)",
    "Daily wage worked out as": "طريقة حساب الأجر اليومي",
    "basic ÷ 30 (most common)": "الأساسي ÷ 30 (الأكثر شيوعًا)",
    "basic × 12 ÷ 365": "الأساسي × 12 ÷ 365",
    "I owe my employer money they may deduct (loan, advance)": "عليّ مبلغ لصاحب العمل قد يخصمه (قرض أو سلفة)",
    "Amount owed (AED)": "المبلغ المستحق عليك (درهم)",
    "Under the 2021 law it no longer matters whether you resign or are let go, or whether your contract was limited or unlimited: the gratuity is the same. Only the basic salary counts, not housing or transport allowances.": "بموجب قانون 2021 لم يعد مهمًا إن استقلت أو أُنهيت خدمتك، ولا إن كان عقدك محدد المدة أو غير محدد: المكافأة واحدة. ويُحتسب الراتب الأساسي فقط، دون بدلات السكن أو المواصلات.",
    "Your gratuity": "مكافأتك",
    "first 5 years, 21 days each": "أول 5 سنوات، 21 يومًا عن كل سنة",
    "after 5 years, 30 days each": "بعد 5 سنوات، 30 يومًا عن كل سنة",
    "This follows the federal private-sector rules. Different rules apply in the DIFC and ADGM free zones (which use savings schemes), for federal and local government jobs (pension), for UAE nationals registered with a pension fund, and if your employer enrolled you in the voluntary savings scheme. Check your final settlement with MOHRE (call 80060) if it doesn't match.": "تتبع هذه الحاسبة قواعد القطاع الخاص الاتحادية. وتنطبق قواعد مختلفة في مركز دبي المالي العالمي وسوق أبوظبي العالمي (حيث تُستخدم أنظمة ادخار)، وفي الوظائف الحكومية الاتحادية والمحلية (التقاعد)، وعلى المواطنين المسجلين في صندوق تقاعد، وإذا سجّلك صاحب العمل في نظام الادخار الاختياري. إذا لم تتطابق تسويتك النهائية، فراجع وزارة الموارد البشرية والتوطين (اتصل على 80060).",
    "Check the dates.": "تحقق من التواريخ.",
    "Service counted": "مدة الخدمة المحتسبة",
    "Daily basic wage": "الأجر الأساسي اليومي",
    "Capped at two years of basic pay": "الحد الأقصى أجر سنتين أساسي",
    "Minus what you owe": "ناقص المبلغ المستحق عليك",
    "Employers may deduct debts you owe them": "يحق لصاحب العمل خصم الديون المستحقة له عليك"
  }, [
    [new RegExp('^AED (' + N + ')$'), '$1 درهم'],
    [new RegExp('^− AED (' + N + ')$'), '− $1 درهم'],
    [new RegExp('^(' + N + ') days(?: \\(after removing (\\d+) unpaid days\\))? = (' + N + ') years$'), function (m, d, u, y) { return d + ' يومًا' + (u ? ' (بعد خصم ' + u + ' يومًا غير مدفوع)' : '') + ' = ' + y + ' سنة'; }],
    [new RegExp('^(' + N + ') y$'), '$1 سنة'],
    [new RegExp('^AED (' + N + ')( ÷ 30| × 12 ÷ 365)$'), function (m, a, f) { return ltr(a + f) + ' درهم'; }],
    [/^First (5|[\d.]+) years × 21 days$/, 'أول $1 سنوات × 21 يومًا'],
    [/^Remaining ([\d.]+) years × 30 days$/, 'السنوات المتبقية $1 × 30 يومًا'],
    [/^([\d.]+ × (?:21|30) × [\d.]+)$/, function (m) { return ltr(m); }],
    [new RegExp('^The law caps the total at 24 × AED (' + N + ')$'), function (m, a) { return 'يحدد القانون سقف المجموع عند ' + ltr('24 × ' + a) + ' درهم'; }],
    [/^You need at least one full year of continuous service to be owed a gratuity\. You are (\d+) days short\.$/, 'تحتاج إلى سنة كاملة على الأقل من الخدمة المتواصلة لتستحق المكافأة. ينقصك $1 يومًا.'],
    [/^About ([\d.]+) months of basic salary\. It should be paid within 14 days of your last day\.$/, 'ما يعادل نحو $1 شهر من الراتب الأساسي. ويجب أن تُدفع خلال 14 يومًا من آخر يوم عمل.']
  ]);
})();
