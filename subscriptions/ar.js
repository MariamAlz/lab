(function () {
var CAT = { 'Streaming': 'البث', 'Music': 'الموسيقى', 'Gym & fitness': 'النادي واللياقة', 'Cloud storage': 'التخزين السحابي', 'Phone add-ons': 'إضافات الهاتف', 'Delivery & shopping': 'التوصيل والتسوق', 'Software & apps': 'البرامج والتطبيقات', 'News & reading': 'الأخبار والقراءة', 'Other': 'أخرى' };
var CYC = { 'week': 'أسبوع', 'month': 'شهر', '3 months': '3 أشهر', 'year': 'سنة' };
var CYC2 = { 'week': 'أسبوعيًا', 'month': 'شهريًا', '3 months': 'كل 3 أشهر', 'year': 'سنويًا' };
var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Sept: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
// generic names from the preset list (brand names stay as they are)
var NM = { 'Gym membership': 'اشتراك النادي الرياضي', 'Fitness class pack': 'باقة حصص لياقة', 'Fitness app': 'تطبيق لياقة', 'Mobile data add-on': 'باقة بيانات إضافية', 'International calling pack': 'باقة مكالمات دولية', 'Roaming pack': 'باقة تجوال', 'VPN app': 'تطبيق VPN', 'News subscription': 'اشتراك إخباري', 'Audiobooks': 'كتب صوتية', 'Adobe Photography plan': 'باقة Adobe للتصوير', 'TOD (football)': 'TOD (كرة القدم)', 'Subscription': 'اشتراك' };
function c(s) { return CAT[s] || s; }
function n(s) { return NM[s] || s; }
var D = {
  "Subscription Audit": "مراجعة الاشتراكات",
  "Tool · Money · Household": "أداة · المال · المنزل",
  "Subscription audit.": "مراجعة الاشتراكات.",
  "Streaming, music, the gym, cloud storage, delivery memberships, phone add-ons: each one is small, together they rarely are. List yours to see the monthly and yearly total, what each one costs every time you actually use it, and which ones you've quietly stopped using.": "البث، والموسيقى، والنادي الرياضي، والتخزين السحابي، وعضويات التوصيل، وإضافات الهاتف: كل واحد منها صغير، لكنها مجتمعةً نادرًا ما تكون كذلك. أدخل اشتراكاتك لترى مجموعها الشهري والسنوي، وكم يكلّفك كل اشتراك في كل مرة تستخدمه فعلًا، وأيها توقفت عن استخدامه دون أن تنتبه.",
  "AED a month": "درهم شهريًا",
  "AED a year": "درهم سنويًا",
  "to review": "للمراجعة",
  "Your subscriptions": "اشتراكاتك",
  "Nothing here yet. Add your first subscription on the right: pick a common one from the list to fill in the price.": "لا شيء هنا بعد. أضف أول اشتراك من النموذج: اختر اشتراكًا شائعًا من القائمة ليُملأ السعر تلقائيًا.",
  "By category, per month": "حسب الفئة، شهريًا",
  "Add subscriptions to see the split.": "أضف اشتراكات لترى التوزيع.",
  "Previous month": "الشهر السابق",
  "Next month": "الشهر التالي",
  "Mon": "اثنين", "Tue": "ثلاثاء", "Wed": "أربعاء", "Thu": "خميس", "Fri": "جمعة", "Sat": "سبت", "Sun": "أحد",
  "Add renewals to calendar (.ics)": "أضف مواعيد التجديد إلى التقويم (ملف ics)",
  "Repeating events with a reminder 3 days before each renewal.": "مواعيد متكررة مع تذكير قبل كل تجديد بثلاثة أيام.",
  "Cost per use is the number that changes minds. A 300 AED gym membership used twice a month is 150 AED a visit, more than a day pass. A 49 AED streaming plan watched every night is under 2 AED an evening. Enter roughly how often you use each one and the list will show it.": "تكلفة الاستخدام الواحد هي الرقم الذي يغيّر القرار. اشتراك نادٍ بقيمة 300 درهم تستخدمه مرتين في الشهر يكلّفك 150 درهمًا للزيارة، أي أكثر من تذكرة يوم واحد. وباقة بث بقيمة 49 درهمًا تشاهدها كل ليلة تكلّفك أقل من درهمين في الأمسية. أدخل تقريبًا عدد مرات استخدامك لكل اشتراك، وستعرضه القائمة.",
  "Add a subscription": "أضف اشتراكًا",
  "Start from a common one (optional)": "ابدأ باشتراك شائع (اختياري)",
  "Choose…": "اختر…",
  "Name": "الاسم",
  "Category": "الفئة",
  "Streaming": "البث", "Music": "الموسيقى", "Cloud storage": "التخزين السحابي", "Phone add-ons": "إضافات الهاتف", "Other": "أخرى",
  "Price (AED)": "السعر (درهم)",
  "Billed every": "يُدفع كل",
  "week": "أسبوع", "month": "شهر", "3 months": "3 أشهر", "year": "سنة",
  "Next renewal": "التجديد القادم",
  "Times used per month (optional)": "مرات الاستخدام شهريًا (اختياري)",
  "Last used (optional)": "آخر استخدام (اختياري)",
  "Cancel edit": "إلغاء التعديل",
  "Save changes": "حفظ التغييرات",
  "Used today": "استخدمته اليوم",
  "Mark cancelled": "علّمه كملغى",
  "Reactivate": "أعد التفعيل",
  "Enter a price.": "أدخل السعر.",
  "Could not save in this browser. Export a backup to keep your list.": "تعذّر الحفظ في هذا المتصفح. صدّر نسخة احتياطية للاحتفاظ بقائمتك.",
  "That file is not a backup from this tool.": "هذا الملف ليس نسخة احتياطية من هذه الأداة.",
  "Delete every subscription from this browser?": "حذف كل الاشتراكات من هذا المتصفح؟",
  "Logged as not used": "مسجّل أنه غير مستخدم",
  "Preset prices are typical UAE prices seen in October 2026 (from provider sites and tbreak.com, Khaleej Times reporting). Many are rounded or differ by plan and promotion, so edit them to match your bill.": "الأسعار المعدّة مسبقًا أسعار معتادة في الإمارات رُصدت في أكتوبر 2026 (من مواقع المزوّدين وtbreak.com وتقارير Khaleej Times). كثير منها مقرّب أو يختلف حسب الباقة والعروض، فعدّلها لتطابق فاتورتك.",
  "Backup": "النسخ الاحتياطي",
  "Saved only in this browser. Nothing is uploaded.": "محفوظ في هذا المتصفح فقط. لا يُرفع أي شيء.",
  "Export (.json)": "تصدير (ملف json)",
  "Load an example": "حمّل مثالًا",
  "Delete all": "احذف الكل"
};
for (var k in NM) D[k] = NM[k];
LabAr.add(D, [
  [/^(Gym & fitness|Delivery & shopping|Software & apps|News & reading)$/, function (m) { return CAT[m]; }],
  [/^Before cancelling, check whether the subscription is bundled\. Some du and e& home plans include streaming, some bank cards include delivery memberships, and family plans can be shared\. Paying twice for the same thing is one of the most common finds in an audit like this\.$/, 'قبل الإلغاء، تحقق هل الاشتراك مشمول في باقة أخرى. بعض باقات du وe& المنزلية تشمل البث، وبعض البطاقات البنكية تشمل عضويات التوصيل، ويمكن مشاركة الباقات العائلية. ودفع ثمن الشيء نفسه مرتين من أكثر ما يُكتشف في مراجعة كهذه.'],
  [/^(.+) · ([\d.]+) AED\/(week|month|3 months|year)$/, function (m, a, p, y) { return n(a) + ' · ' + p + ' درهم/' + CYC[y]; }],
  [/^(.+) · ([\d,.]+) AED every (week|month|3 months|year)( · cancelled| · renews (\d+) (\w{3,4}))?$/, function (m, a, p, y, x, d, mo) { return c(a) + ' · ' + p + ' درهم ' + CYC2[y] + (x ? (d ? ' · يتجدد ' + d + ' ' + MON[mo] : ' · ملغى') : ''); }],
  [/^([\d,.]+)\/mo$/, '$1/شهر'],
  [/^([\d,.]+)\/yr$/, '$1/سنة'],
  [/^([\d,.]+) AED per use$/, '$1 درهم لكل استخدام'],
  [/^⚑ (.+)$/, function (m, a) { var x = a.match(/^Not used for (\d+) days$/); return '⚑ ' + (x ? 'لم يُستخدم منذ ' + x[1] + ' يومًا' : LabAr.t(a)); }],
  [/^AED a year, ([\d,]+) saved by cancelling$/, 'درهم سنويًا، ووفّرت $1 بالإلغاء'],
  [/^to review, ([\d,]+) AED\/yr$/, 'للمراجعة، $1 درهم/سنة'],
  [/^([\d,.]+) AED$/, '$1 درهم'],
  [/^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})(?: · ([\d,]+) AED due)?$/, function (m, mo, y, t) { return LabAr.t(mo) + ' ' + y + (t ? ' · مستحق ' + t + ' درهم' : ''); }],
  [/^(.+): ([\d,.]+) AED$/, function (m, a, p) { return n(a) + ': ' + p + ' درهم'; }],
  [/^Added (.+)\.$/, function (m, a) { return 'تمت إضافة ' + n(a) + '.'; }],
  [/^Loaded (\d+) subscriptions\.$/, 'تم تحميل $1 اشتراك.'],
  [/^Edit (.+)$/, function (m, a) { return 'تعديل ' + n(a); }],
  [/^Delete (.+)\?$/, function (m, a) { return 'حذف ' + n(a) + '؟'; }]
]);
// <optgroup label> is not one of the attributes the engine translates
function og() { [].forEach.call(document.querySelectorAll('optgroup'), function (g) { var v = c(g.label); if (v !== g.label) g.label = v; }); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', og); else og();
})();
