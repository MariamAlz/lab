(function () {
  var N = '([\\d,]+)';
  var CAT = { 'Rent': 'الإيجار', 'Housing fee': 'رسوم السكن', 'Bills and internet': 'الفواتير والإنترنت', 'Groceries': 'البقالة', 'School fees': 'الرسوم المدرسية', 'Car': 'السيارة', 'Sent home': 'تحويلات للأهل', 'Lifestyle': 'نمط الحياة', 'Travel': 'السفر', 'Savings goals': 'أهداف الادخار', 'Left over': 'المتبقي' };
  var dict = {
    "Salary Planner": "مخطط الراتب",
    "Tool · Money · UAE": "أداة · المال · الإمارات",
    "Salary planner.": "مخطط الراتب.",
    "Rent paid in a few big cheques, school fees once a term, money sent home, the car: a UAE salary has its own rhythm. Enter yours and see where each dirham goes, what's left, how it compares with the 50/30/20 rule, and how big your emergency fund should be.": "إيجار يُدفع بشيكات قليلة كبيرة، ورسوم مدرسية كل فصل، وتحويلات للأهل، والسيارة: للراتب في الإمارات إيقاعه الخاص. أدخل أرقامك لترى أين يذهب كل درهم، وكم يتبقى، وكيف تقارن بقاعدة 50/30/20، وكم يجب أن يكون صندوق الطوارئ.",
    "Left over each month": "المتبقي كل شهر",
    "Where your take-home pay goes": "أين يذهب صافي راتبك",
    "50/30/20 check": "فحص قاعدة 50/30/20",
    "A popular rule of thumb: about half on needs, under a third on wants, at least a fifth saved. The white line marks the target. In the UAE rent alone often pushes needs past 50%, which is why many people aim higher on savings in other years to catch up.": "قاعدة تقريبية شائعة: نحو النصف للاحتياجات، وأقل من الثلث للرغبات، والخمس على الأقل للادخار. يحدد الخط الأبيض الهدف. في الإمارات كثيرًا ما يرفع الإيجار وحده الاحتياجات فوق 50%، ولهذا يرفع كثيرون نسبة الادخار في سنوات أخرى للتعويض.",
    "A planning aid, not financial advice. For decisions about loans, investments or pensions, talk to a licensed adviser.": "أداة للتخطيط، وليست نصيحة مالية. لقرارات القروض أو الاستثمار أو التقاعد، استشر مستشارًا مرخّصًا.",
    "Income (per month)": "الدخل (شهريًا)",
    "Basic salary (AED)": "الراتب الأساسي (درهم)", "Housing allowance": "بدل السكن", "Transport allowance": "بدل المواصلات", "Other allowances or income": "بدلات أو دخل آخر",
    "I'm a UAE national paying into a pension (GPSSA or ADPF)": "أنا مواطن إماراتي مشترك في صندوق التقاعد (الهيئة العامة للمعاشات أو صندوق أبوظبي للمعاشات)",
    "Employee pension share (%)": "حصة الموظف في التقاعد (%)", "Of (contribution salary)": "من (راتب حساب الاشتراك)",
    "Basic + allowances": "الأساسي + البدلات", "Basic only": "الأساسي فقط",
    "There is no personal income tax in the UAE. UAE nationals contribute to the pension fund: 11% for people who joined on or after October 2023 (GPSSA) or December 2023 (ADPF), 5% for many who joined earlier, worked out on basic plus fixed allowances and capped at AED 70,000 a month for GPSSA. Check your payslip and edit the percentage to match.": "لا توجد ضريبة دخل شخصية في الإمارات. ويساهم المواطنون في صندوق التقاعد: 11% لمن التحقوا في أكتوبر 2023 أو بعده (الهيئة العامة للمعاشات) أو في ديسمبر 2023 أو بعده (صندوق أبوظبي للمعاشات)، و5% لكثير ممن التحقوا قبل ذلك، وتُحسب على الراتب الأساسي مع البدلات الثابتة بحد أقصى 70,000 درهم شهريًا لدى الهيئة العامة للمعاشات. راجع قسيمة راتبك وعدّل النسبة لتطابقها.",
    "Home": "السكن",
    "Annual rent (AED)": "الإيجار السنوي (درهم)", "Paid in": "يُدفع على",
    "1 cheque": "شيك واحد", "2 cheques": "شيكين", "4 cheques": "4 شيكات", "6 cheques": "6 شيكات", "12 cheques": "12 شيكًا",
    "Dubai housing fee: 5% of annual rent, added to the DEWA bill": "رسوم السكن في دبي: 5% من الإيجار السنوي، تُضاف إلى فاتورة هيئة كهرباء ومياه دبي",
    "Electricity and water": "الكهرباء والماء", "Internet and mobile": "الإنترنت والهاتف", "Groceries and household": "البقالة ومستلزمات البيت", "Domestic help, chiller, other bills": "العمالة المنزلية والتبريد وفواتير أخرى",
    "Family": "العائلة", "School fees per child per year": "الرسوم المدرسية لكل طفل سنويًا", "Children in school": "عدد الأطفال في المدرسة",
    "Money sent home each month": "المبلغ المحوّل للأهل شهريًا", "Count remittances as": "احسب التحويلات ضمن",
    "Needs (family support)": "الاحتياجات (إعالة الأسرة)", "Savings (building a home or fund back home)": "الادخار (بناء بيت أو مدخرات في الوطن)", "Wants": "الرغبات",
    "Loan or lease per month": "القرض أو الإيجار التمويلي شهريًا", "Fuel, Salik, parking": "الوقود وسالك والمواقف", "Insurance, registration and service per year": "التأمين والتسجيل والصيانة سنويًا",
    "Lifestyle": "نمط الحياة", "Eating out, shopping, fun (per month)": "المطاعم والتسوق والترفيه (شهريًا)", "Holidays and flights home (per year)": "الإجازات وتذاكر السفر للوطن (سنويًا)",
    "Savings goals": "أهداف الادخار",
    "Each goal shows what you need to put aside each month to reach it by the date.": "يوضح كل هدف ما يلزمك ادخاره كل شهر لبلوغه في موعده.",
    "Already saved for emergencies (AED)": "المدخر للطوارئ حاليًا (درهم)", "Emergency fund: months of essentials": "صندوق الطوارئ: عدد أشهر الأساسيات",
    "3 months": "3 أشهر", "6 months": "6 أشهر", "9 months": "9 أشهر", "12 months": "12 شهرًا",
    "Reset to the example": "ارجع إلى المثال",
    "Amount": "المبلغ", "By": "بحلول", "e.g. Hajj, wedding": "مثل: الحج، الزواج",
    "Needs": "الاحتياجات", "Savings (goals and what's left)": "الادخار (الأهداف والمتبقي)",
    "AED emergency fund target": "درهم هدف صندوق الطوارئ", "AED still to save": "درهم متبقٍ للادخار",
    "nothing left to save": "لا يتبقى شيء للادخار", "at your current pace": "بوتيرتك الحالية",
    "Your essentials come to about": "تبلغ احتياجاتك الأساسية نحو",
    ". For most expats a residence visa depends on the job, and after a job ends there is usually a short grace period to find the next one, so many planners suggest at least 6 months of essentials put aside. Your end-of-service gratuity helps, but it can take weeks to be paid. See the": ". لمعظم المقيمين ترتبط الإقامة بالوظيفة، وبعد انتهاء العمل تكون هناك عادةً مهلة قصيرة لإيجاد وظيفة جديدة، لذا ينصح كثير من المخططين بادخار ما يعادل 6 أشهر من الأساسيات على الأقل. وتساعدك مكافأة نهاية الخدمة، لكن صرفها قد يستغرق أسابيع. استخدم",
    "gratuity calculator": "حاسبة مكافأة نهاية الخدمة",
    "to estimate yours.": "لتقدير مكافأتك."
  };
  for (var k in CAT) dict[k] = CAT[k];
  function cat(c) { return CAT[c] || c; }
  LabAr.add(dict, [
    [/^Goal (\d)$/, 'الهدف $1'],
    [new RegExp('^(−?)' + N + ' AED$'), '$1$2 درهم'],
    [new RegExp('^' + N + ' AED a month$'), '$1 درهم شهريًا'],
    [/^(\d+) mo$/, '$1 شهر'],
    [new RegExp('^From ' + N + ' AED take-home(?: \\(' + N + ' gross, ' + N + ' pension\\))?, after ' + N + ' AED of spending and goals\\.$'), function (m, net, g, p, s) { return 'من صافي ' + net + ' درهم' + (g ? ' (' + g + ' إجمالي، و' + p + ' تقاعد)' : '') + '، بعد ' + s + ' درهم للإنفاق والأهداف.'; }],
    [new RegExp('^You are planning to spend ' + N + ' AED a month more than you earn\\. Something in the list needs to shrink, or a goal needs a later date\\.$'), 'تخطط لإنفاق $1 درهم شهريًا أكثر مما تكسب. يجب تقليص بند في القائمة، أو تأجيل موعد أحد الأهداف.'],
    [/^Rent is (\d+)% of take-home pay\. Banks and landlords often use about a third as a comfortable limit\.$/, 'الإيجار يمثل $1% من صافي الراتب. وكثيرًا ما تعتمد البنوك والملاك نحو الثلث حدًا مريحًا.'],
    [new RegExp('^Each rent cheque is ' + N + ' AED\\. Setting aside ' + N + ' AED every month keeps the next one covered\\.$'), 'قيمة كل شيك إيجار ' + '$1 درهم. ادخار $2 درهم كل شهر يضمن تغطية الشيك التالي.'],
    [new RegExp('^(.+): ' + N + ' AED$'), function (m, c, v) { return cat(c) + ': ' + v + ' درهم'; }],
    [/^(?:.+ [\d,]+ AED)(?:, .+ [\d,]+ AED)*$/, function (m) { return m.split(', ').map(function (x) { var q = x.match(/^(.+) ([\d,]+) AED$/); return cat(q[1]) + ' ' + q[2] + ' درهم'; }).join('، '); }]
  ]);
  // default goal names are input values, which the page keeps in English: swap them on load and after a reset
  var GN = { 'Emergency fund top-up': 'تعزيز صندوق الطوارئ', 'Car deposit': 'دفعة أولى للسيارة' };
  function goals() { ['g0n', 'g1n'].forEach(function (id) { var e = document.getElementById(id); if (e && GN[e.value]) { e.value = GN[e.value]; e.dispatchEvent(new Event('input', { bubbles: true })); } }); }
  function init() { goals(); var r = document.getElementById('reset'); if (r) r.addEventListener('click', goals); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
