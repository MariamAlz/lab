(function () {
  var SM = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var TYPE = {
    'Emirates ID': 'الهوية الإماراتية', 'Passport': 'جواز السفر', 'Residence visa': 'تأشيرة الإقامة', 'Driving licence': 'رخصة القيادة',
    'Car registration (Mulkiya)': 'ملكية السيارة', 'Car insurance': 'تأمين السيارة', 'Health insurance': 'التأمين الصحي',
    'Tenancy / Ejari': 'عقد الإيجار / إيجاري', 'Trade licence': 'الرخصة التجارية', 'Something else': 'شيء آخر'
  };
  var CODE = { EID: 'هوية', PP: 'جواز', VISA: 'إقامة', DL: 'قيادة', REG: 'ملكية', INS: 'تأمين', HI: 'صحي', EJ: 'إيجار', TL: 'تجارية' };
  var DEMO = { 'Spouse': 'شريك الحياة', 'Child': 'الطفل', 'Family car': 'سيارة العائلة', 'Apartment': 'الشقة', 'School re-registration': 'إعادة التسجيل في المدرسة', 'Me': 'أنا' };
  function ty(s) { return TYPE[s] || DEMO[s] || s; }
  function cnt(n, one, two, few, many) { n = +n; return n === 1 ? one : n === 2 ? two : (n >= 3 && n <= 10) ? n + ' ' + few : n + ' ' + many; }
  function span(s) {
    var m = s.match(/^([\d.]+) (day|days|months|years)$/); if (!m) return s;
    if (m[2] === 'years') return m[1] + ' سنة';
    if (m[2] === 'months') return cnt(m[1], 'شهر', 'شهرين', 'أشهر', 'شهرًا');
    return cnt(m[1], 'يوم واحد', 'يومين', 'أيام', 'يومًا');
  }
  function when(s) {
    if (s === 'today') return 'اليوم';
    var m = s.match(/^expired (.+) ago$/); if (m) return 'انتهى قبل ' + span(m[1]);
    m = s.match(/^in (.+)$/); if (m) return 'بعد ' + span(m[1]);
    return s;
  }
  function date(s) { return s.replace(/^(\d+) (\w+) (\d{4})$/, function (m, d, mo, y) { return d + ' ' + (SM[mo] || mo) + ' ' + y; }); }
  var NOTES = {
    "Renews together with the residence visa (or every 10 years / 5 years for citizens, depending on age). Typically a 30-day grace period after expiry, then a fine of AED 20 a day up to AED 1,000 (ICP). Renew in the UAEICP app or at a typing centre.": "تُجدَّد مع تأشيرة الإقامة (وللمواطنين كل 10 أو 5 سنوات حسب العمر). عادةً هناك مهلة سماح 30 يومًا بعد الانتهاء، ثم غرامة 20 درهمًا يوميًا حتى 1,000 درهم (الهيئة الاتحادية للهوية والجنسية). جدّدها عبر تطبيق UAEICP أو في مركز طباعة.",
    "Many countries need at least 6 months of validity to enter. UAE passports renew in the UAEICP app. For other passports, book early with your embassy, then update the new passport details on your residence file (ICP or GDRFA) so the visa stays linked.": "تشترط دول كثيرة صلاحية لا تقل عن 6 أشهر للدخول. يُجدَّد جواز السفر الإماراتي عبر تطبيق UAEICP. أما الجوازات الأخرى فاحجز موعدًا مبكرًا مع سفارتك، ثم حدّث بيانات الجواز الجديد في ملف إقامتك (الهيئة الاتحادية للهوية والجنسية أو الإدارة العامة للإقامة وشؤون الأجانب) لتبقى التأشيرة مرتبطة به.",
    "Start renewal about a month before expiry: you usually need a valid passport, health insurance and (for employees) the employer or sponsor. After expiry or cancellation there is normally a grace period (often 30 days, longer for some visa types), then overstay fines of about AED 50 a day.": "ابدأ التجديد قبل الانتهاء بشهر تقريبًا: تحتاج عادةً جواز سفر ساريًا وتأمينًا صحيًا و(للموظفين) جهة العمل أو الكفيل. بعد الانتهاء أو الإلغاء توجد عادةً مهلة سماح (غالبًا 30 يومًا، وأطول لبعض أنواع التأشيرات)، ثم غرامات تجاوز الإقامة بنحو 50 درهمًا يوميًا.",
    "Renewal needs an eye test (many opticians do it and upload the result). Renew in the RTA, ADP or MOI app. Driving with an expired licence is a traffic fine, and you may not be able to renew a vehicle registration while it is expired.": "يتطلب التجديد فحص نظر (تجريه محلات بصريات كثيرة وترفع النتيجة). جدّد عبر تطبيق هيئة الطرق والمواصلات أو شرطة أبوظبي أو وزارة الداخلية. القيادة برخصة منتهية مخالفة مرورية، وقد لا تتمكن من تجديد ملكية مركبة ما دامت الرخصة منتهية.",
    "Renew every year. You need valid car insurance, no unpaid fines, and a passed vehicle test for cars older than about 3 years. Typically 30 days to renew after expiry. Driving with an expired registration is commonly a AED 500 fine plus black points.": "تُجدَّد سنويًا. تحتاج تأمينًا ساريًا للسيارة، وعدم وجود مخالفات غير مدفوعة، واجتياز الفحص الفني للسيارات التي يزيد عمرها على 3 سنوات تقريبًا. عادةً لديك 30 يومًا للتجديد بعد الانتهاء. القيادة بملكية منتهية غرامتها عادةً 500 درهم مع نقاط سوداء.",
    "No grace period: the car is uninsured from the day after expiry. Renew before the Mulkiya, because registration renewal checks for a valid policy. Shop around a month early; no-claims letters can lower the price.": "لا توجد مهلة سماح: تصبح السيارة غير مؤمَّنة من اليوم التالي للانتهاء. جدّده قبل الملكية، لأن تجديد الملكية يتحقق من وجود وثيقة سارية. قارن العروض قبل شهر؛ شهادة عدم وجود مطالبات قد تخفّض السعر.",
    "Mandatory for residents in Dubai and Abu Dhabi, and for private-sector workers across the UAE since January 2025. Usually renewed by the employer or sponsor and needed for visa renewal. Sponsors can face fines for gaps in cover (in Dubai, typically AED 500 a month).": "إلزامي للمقيمين في دبي وأبوظبي، ولموظفي القطاع الخاص في كل الإمارات منذ يناير 2025. تجدّده عادةً جهة العمل أو الكفيل، وهو مطلوب لتجديد التأشيرة. قد يتعرض الكفيل لغرامات عند انقطاع التغطية (في دبي عادةً 500 درهم شهريًا).",
    "In Dubai, either side must give 90 days written notice to change terms such as rent, or to not renew. Register the renewed contract with Ejari (Tawtheeq in Abu Dhabi) so DEWA, visas and school places keep working. Check the RERA rent index before agreeing to a rise.": "في دبي يجب على أي طرف إخطار الآخر كتابيًا قبل 90 يومًا لتغيير الشروط مثل الإيجار، أو لعدم التجديد. سجّل العقد المجدَّد في إيجاري (توثيق في أبوظبي) لتستمر خدمات هيئة كهرباء ومياه دبي والتأشيرات ومقاعد المدارس. راجع مؤشر الإيجارات لدى مؤسسة التنظيم العقاري (ريرا) قبل الموافقة على أي زيادة.",
    "Renew every year with the economic department or free zone. Late renewal usually brings a monthly penalty (in Dubai, typically about AED 250 a month) and can block visas for staff. Renew the Ejari for the business premises first if needed.": "تُجدَّد سنويًا لدى دائرة التنمية الاقتصادية أو المنطقة الحرة. يترتب على التأخير عادةً غرامة شهرية (في دبي نحو 250 درهمًا شهريًا) وقد يوقف تأشيرات الموظفين. جدّد إيجاري مقر العمل أولًا إن لزم.",
    "Add your own notes here, for example school re-registration, gun or boat licences, pet vaccinations or warranties.": "أضف ملاحظاتك هنا، مثل إعادة التسجيل في المدرسة، أو رخص الأسلحة أو القوارب، أو تطعيمات الحيوانات الأليفة، أو الضمانات."
  };
  var d = {
    "Document Expiry Tracker": "متتبّع انتهاء الوثائق",
    "Tool · Family · Paperwork · UAE": "أداة · العائلة · المعاملات · الإمارات",
    "Document expiry tracker.": "متتبّع انتهاء الوثائق.",
    "Emirates IDs, passports, visas, licences, Mulkiya, insurance, Ejari: a family of four can easily have twenty dates to remember, and a missed one means fines or a blocked renewal. Put them all here, see what's coming up on one timeline, and send reminders to your calendar 30 and 7 days before each one.": "الهوية الإماراتية، جوازات السفر، التأشيرات، الرخص، الملكية، التأمين، إيجاري: قد يكون لدى عائلة من أربعة أفراد عشرون تاريخًا يجب تذكّرها، ونسيان أحدها يعني غرامات أو تعطّل التجديد. أضفها كلها هنا، وشاهد ما يقترب على خط زمني واحد، وأرسل تذكيرات إلى تقويمك قبل كل موعد بـ30 و7 أيام.",
    ".ics": "\u200E.ics",
    "Expired": "منتهية", "Within 30 days": "خلال 30 يومًا", "Within 90 days": "خلال 90 يومًا", "More than 90 days": "أكثر من 90 يومًا",
    "Timeline of the next two years": "خط زمني للسنتين القادمتين",
    "Add all to calendar (.ics)": "أضف الكل إلى التقويم (\u200E.ics)",
    "Each date gets reminders 30 and 7 days before.": "لكل تاريخ تذكيران: قبل 30 يومًا وقبل 7 أيام.",
    "Nothing tracked yet. Add a document on the right, or start with an example family to see how it works.": "لا توجد وثائق بعد. أضف وثيقة من النموذج، أو ابدأ بعائلة تجريبية لترى طريقة العمل.",
    "Load an example": "حمّل مثالًا",
    "A small trick that saves a lot of hassle: many UAE renewals depend on each other. Health insurance must be valid to renew a residence visa, the visa renews the Emirates ID, and car insurance must be valid before the Mulkiya can be renewed. So when one date is close, check the ones it depends on too.": "حيلة صغيرة توفّر عناءً كبيرًا: كثير من معاملات التجديد في الإمارات مرتبطة ببعضها. يجب أن يكون التأمين الصحي ساريًا لتجديد تأشيرة الإقامة، وتجديد التأشيرة يجدّد الهوية الإماراتية، ويجب أن يكون تأمين السيارة ساريًا قبل تجديد الملكية. لذا حين يقترب موعد، تحقّق أيضًا من المواعيد التي يعتمد عليها.",
    "Add a document": "أضف وثيقة",
    "Whose": "لمن",
    "Document": "الوثيقة",
    "Name (optional, e.g. \"Indian passport\", \"Prado\")": "الاسم (اختياري، مثل \"الجواز الهندي\" أو \"برادو\")",
    "Expiry date": "تاريخ الانتهاء",
    "Cancel edit": "إلغاء التعديل",
    "Save changes": "حفظ التغييرات",
    "Family members": "أفراد العائلة",
    "Name or nickname": "الاسم أو اللقب",
    "e.g. Sara": "مثل: سارة",
    "Add person": "أضف شخصًا",
    "Backup": "نسخة احتياطية",
    "Your data stays in this browser only. Nothing is uploaded. Save a backup file before clearing your browser or switching phones.": "تبقى بياناتك في هذا المتصفح فقط، ولا يُرفع أي شيء. احفظ ملف نسخة احتياطية قبل مسح بيانات المتصفح أو تغيير هاتفك.",
    "Export backup (.json)": "تصدير نسخة احتياطية (\u200E.json)",
    "Import backup": "استيراد نسخة احتياطية",
    "Delete everything": "حذف كل شيء",
    "Renewal tips and grace periods": "نصائح التجديد ومهل السماح",
    "Typical rules as of October 2026, from ICP, GDRFA, RTA and emirate authority guidance. They change and differ by emirate and visa type, so check with the issuing authority. Edit any note to match what you were told; your edits are saved.": "قواعد شائعة حتى أكتوبر 2026، من إرشادات الهيئة الاتحادية للهوية والجنسية، والإدارة العامة للإقامة وشؤون الأجانب، وهيئة الطرق والمواصلات، والجهات المحلية في كل إمارة. هذه القواعد تتغير وتختلف حسب الإمارة ونوع التأشيرة، فتحقّق من الجهة المُصدِرة. عدّل أي ملاحظة لتطابق ما قيل لك، وستُحفظ تعديلاتك.",
    "Notes": "ملاحظات",
    "Reset to default": "استعادة النص الأصلي",
    "Tips": "نصائح",
    "Pick an expiry date.": "اختر تاريخ الانتهاء.",
    "Keep at least one person.": "أبقِ شخصًا واحدًا على الأقل.",
    "That file is not a backup from this tool.": "هذا الملف ليس نسخة احتياطية من هذه الأداة.",
    "Could not save in this browser (private mode?). Export a backup to keep your data.": "تعذّر الحفظ في هذا المتصفح (وضع التصفح الخاص؟). صدّر نسخة احتياطية للاحتفاظ ببياناتك.",
    "Delete all people, documents and notes from this browser?": "حذف كل الأشخاص والوثائق والملاحظات من هذا المتصفح؟"
  };
  [TYPE, CODE, DEMO, NOTES].forEach(function (o) { for (var k in o) d[k] = o[k]; });
  LabAr.add(d, [
    [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m) { return date(m); }],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d\d)$/, function (m, mo, y) { return SM[mo] + ' ' + y; }],
    [/^(today|expired .+ ago|in [\d.]+ (?:day|days|months|years))$/, function (m) { return when(m); }],
    // item subtitle: "name · type · 3 Nov 2026" or "name · 3 Nov 2026"
    [/^(.*?)(?: · (.+?))? · (\d+ \w{3} \d{4})$/, function (m, n, t, dt) { return ty(n) + (t ? ' · ' + ty(t) : '') + ' · ' + date(dt); }],
    [/^(.+) · (\d+ \w{3} \d{4}) · (.+)$/, function (m, t, dt, w) { return ty(t) + ' · ' + date(dt) + ' · ' + when(w); }],
    [/^Edit (.+)$/, function (m, t) { return 'تعديل ' + ty(t); }],
    [/^Added (.+) for (.+)\.$/, function (m, t, n) { return 'تمت إضافة ' + ty(t) + ' لـ' + ty(n) + '.'; }],
    [/^Delete (.+) for (.+)\?$/, function (m, t, n) { return 'حذف ' + ty(t) + ' (' + ty(n) + ')؟'; }],
    [/^Remove (.+?)(?: and their (\d+) documents?)?\?$/, function (m, n, k) { return 'إزالة ' + ty(n) + (k ? ' مع ' + cnt(k, 'وثيقة واحدة', 'وثيقتين', 'وثائق', 'وثيقة') : '') + '؟'; }],
    [/^Remove (.+)$/, function (m, n) { return 'إزالة ' + ty(n); }],
    [/^Backup loaded: (\d+) documents\.$/, function (m, k) { return 'تم تحميل النسخة الاحتياطية: ' + cnt(k, 'وثيقة واحدة', 'وثيقتان', 'وثائق', 'وثيقة') + '.'; }],
    // calendar file text
    [/^(.+) expires \((.+)\) in (\d+) days$/, function (m, t, n, k) { return 'تنتهي صلاحية ' + ty(t) + ' (' + ty(n) + ') بعد ' + k + ' يومًا'; }],
    [/^(.+) expires \((.+)\)$/, function (m, t, n) { return 'تنتهي صلاحية ' + ty(t) + ' (' + ty(n) + ')'; }]
  ]);
  // default notes sit in textareas, which the engine leaves alone: show the Arabic default until the user edits it
  function fixTA() { document.querySelectorAll('textarea[data-t]').forEach(function (ta) { if (NOTES[ta.value]) ta.value = NOTES[ta.value]; }); }
  function watch() { fixTA(); var n = document.getElementById('notes'); if (n) new MutationObserver(fixTA).observe(n, { childList: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
