(function () {
  // anything taken from the link the user typed (hosts, domains, brand names, endings) is kept exactly as is,
  // wrapped in a left-to-right isolate so it reads correctly inside Arabic sentences
  var D = function (x) { return '⁦' + x + '⁩'; };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var MOS = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec';
  function date(s) { return s.replace(new RegExp('(\\d+) (' + MOS + ') (\\d{4})'), function (m, d, mo, y) { return d + ' ' + MO[mo] + ' ' + y; }); }
  function age(s) {
    var m = s.match(/^(\d+) days$/); if (m) { var n = +m[1]; return n === 1 ? 'يوم واحد' : n === 2 ? 'يومان' : n <= 10 ? n + ' أيام' : n + ' يومًا'; }
    m = s.match(/^(\d+) months$/); if (m) { n = +m[1]; return n === 1 ? 'شهر واحد' : n === 2 ? 'شهران' : n <= 10 ? n + ' أشهر' : n + ' شهرًا'; }
    m = s.match(/^([\d.]+) years$/); if (m) return m[1] + ' سنة';
    return s;
  }
  var DA = new RegExp('^(\\d+ (?:' + MOS + ') \\d{4})$');
  LabAr.add({
    "Domain & Link Inspector": "فاحص النطاقات والروابط",
    "Tool · Security": "أداة · أمان",
    "Domain & link inspector.": "فاحص النطاقات والروابط.",
    "Got a link in a text message or an email? Paste it here before you tap it. You'll see whether the address is pretending to be someone else, how long the domain has existed and who registered it, how well the site is secured, and every subdomain that has ever had a public certificate.": "وصلك رابط في رسالة نصية أو بريد إلكتروني؟ الصقه هنا قبل أن تضغط عليه. سترى هل العنوان ينتحل صفة جهة أخرى، ومنذ متى يوجد النطاق ومن سجّله، ومدى تأمين الموقع، وكل نطاق فرعي حصل يومًا على شهادة علنية.",
    "Paste a link or a domain, e.g. https://rta-fines-pay.top/login": "الصق رابطًا أو نطاقًا، مثلًا https://rta-fines-pay.top/login",
    "Link or domain": "الرابط أو النطاق",
    "Inspect": "افحص",
    "Try": "جرّب",
    "a look-alike trick": "خدعة التشابه",
    "a hidden letter": "حرف مخفي",
    "The address itself": "العنوان نفسه",
    "checked on your device": "يُفحص على جهازك",
    "Age and owner": "العمر والمالك",
    "RDAP registry": "سجل RDAP",
    "Asking the registry…": "نسأل جهة التسجيل…",
    "Security grade": "درجة الأمان",
    "Mozilla Observatory": "Mozilla Observatory",
    "Scanning the site's headers…": "نفحص ترويسات الموقع…",
    "Certificates and subdomains": "الشهادات والنطاقات الفرعية",
    "crt.sh logs": "سجلات crt.sh",
    "Searching public logs (can take 20 s)…": "نبحث في السجلات العامة (قد يستغرق 20 ثانية)…",
    "Nothing here opens the link itself. The domain name (never the full link) is sent to the public registry, Mozilla Observatory and crt.sh. A clean result doesn't prove a site is safe: brand-new scam sites start clean. When a message pushes you to act fast, go to the company's site or app yourself instead.": "لا شيء هنا يفتح الرابط نفسه. يُرسل اسم النطاق فقط (وليس الرابط كاملًا أبدًا) إلى جهة التسجيل العامة وMozilla Observatory وcrt.sh. النتيجة النظيفة لا تثبت أن الموقع آمن، فمواقع الاحتيال الجديدة تبدأ نظيفة. وإذا ضغطت عليك رسالة لتتصرف بسرعة، فاذهب بنفسك إلى موقع الشركة أو تطبيقها.",
    "Hidden international letters": "حروف دولية مخفية",
    "A bare IP address": "عنوان IP مجرد",
    "Real companies use names, not numbers.": "الشركات الحقيقية تستخدم أسماء لا أرقامًا.",
    "A link shortener": "خدمة تقصير روابط",
    "It hides where you will really end up. Ask the sender for the full link.": "تُخفي الوجهة الحقيقية التي ستنتهي إليها. اطلب من المرسل الرابط الكامل.",
    "Brand name in the wrong place": "اسم علامة تجارية في غير موضعه",
    "A cheap, often-abused ending": "امتداد رخيص كثيرًا ما يُساء استخدامه",
    "Lots of hyphens": "شرطات كثيرة",
    "Names like \"pay-fine-now-online\" are a scam favourite.": "الأسماء مثل «pay-fine-now-online» مفضلة لدى المحتالين.",
    "Not encrypted": "غير مشفّر",
    "The link starts with http://, so anything you type could be read on the way.": "يبدأ الرابط بـ http://، لذا يمكن قراءة أي شيء تكتبه أثناء انتقاله.",
    "An @ sign in the address": "علامة @ في العنوان",
    "Asks you to act": "يطلب منك اتخاذ إجراء",
    "The link points at a login, payment or verification page. Scams nearly always do.": "يشير الرابط إلى صفحة تسجيل دخول أو دفع أو تحقق، وهذا ما يفعله الاحتيال دائمًا تقريبًا.",
    "Nothing odd in the address": "لا شيء غريب في العنوان",
    "Don't trust this link": "لا تثق بهذا الرابط",
    "Several warning signs together. Go to the company's app or type their address yourself.": "عدة علامات تحذير مجتمعة. اذهب إلى تطبيق الشركة أو اكتب عنوانها بنفسك.",
    "Be careful": "توخَّ الحذر",
    "Something doesn't add up. Check with the sender another way before entering anything.": "هناك شيء غير منطقي. تحقق من المرسل بطريقة أخرى قبل إدخال أي شيء.",
    "No obvious red flags": "لا علامات تحذير واضحة",
    "Domain age:": "عمر النطاق:",
    "Registered": "تاريخ التسجيل",
    "Expires": "تاريخ الانتهاء",
    "Last changed": "آخر تعديل",
    "Registrar": "جهة التسجيل",
    "Registered to": "مسجّل باسم",
    "Status": "الحالة",
    "not shown": "غير معروض",
    "hidden for privacy (normal)": "مخفي للخصوصية (أمر طبيعي)",
    "Registered very recently. Most scam domains are used within weeks of being bought.": "سُجّل حديثًا جدًا. معظم نطاقات الاحتيال تُستخدم خلال أسابيع من شرائها.",
    "No registration record found. The domain may not exist, or its registry (some country endings, including .ae) doesn't publish RDAP data.": "لم يُعثر على سجل تسجيل. ربما لا يوجد النطاق، أو أن جهة تسجيله (بعض امتدادات الدول، ومنها ae.) لا تنشر بيانات RDAP.",
    "The registry didn't answer. Try again later.": "لم تستجب جهة التسجيل. حاول لاحقًا.",
    "This grades the protective settings a site sends to browsers (forcing HTTPS, blocking clickjacking and script injection). It says how carefully a site is set up, not whether its owner is honest.": "تقيّم هذه الدرجة إعدادات الحماية التي يرسلها الموقع إلى المتصفحات (فرض HTTPS، ومنع اختطاف النقرات وحقن السكربتات). إنها تبيّن مدى العناية بإعداد الموقع، لا مدى أمانة مالكه.",
    "Full report ↗": "التقرير الكامل ↗",
    "Couldn't scan this site. It may not run a website, or it blocked the scanner.": "تعذّر فحص هذا الموقع. ربما لا يشغّل موقعًا إلكترونيًا، أو أنه حظر الفاحص.",
    "First certificate:": "أول شهادة:",
    "No certificates logged. A site without one can't use HTTPS.": "لا شهادات مسجّلة. الموقع الذي لا يملك شهادة لا يمكنه استخدام HTTPS.",
    "For your own domain, this shows forgotten test or staging sites that the whole internet can see.": "إن كان النطاق لك، فهذا يكشف مواقع الاختبار أو التجهيز المنسية التي يراها الإنترنت كله.",
    "crt.sh is busy or slow right now. Try again in a minute.": "خدمة crt.sh مشغولة أو بطيئة الآن. حاول بعد دقيقة.",
    "That doesn't look like a link or domain.": "لا يبدو هذا رابطًا أو نطاقًا."
  }, [
    [/^It displays as "(.*)" but is really (\S+)\. Letters from other alphabets can look identical to Latin ones\.$/, function (m, s, h) { return 'يظهر على شكل «' + D(s) + '» لكنه في الحقيقة ' + D(h) + '. الحروف من أبجديات أخرى قد تبدو مطابقة للحروف اللاتينية.'; }],
    [/^"(\S+)" appears before the real domain, which is (\S+)\. The part just before the ending is what counts\.$/, function (m, b, r) { return 'يظهر «' + D(b) + '» قبل النطاق الحقيقي، وهو ' + D(r) + '. الجزء الذي يسبق الامتداد مباشرة هو المهم.'; }],
    [/^Looks like (\S+)$/, function (m, b) { return 'يشبه ' + D(b); }],
    [/^(\S+) is not (\S+)'s domain, but it is close enough to fool a quick glance\.$/, function (m, r, b) { return D(r) + ' ليس نطاق ' + D(b) + '، لكنه قريب بما يكفي لخداع النظرة السريعة.'; }],
    [/^\.(\S+) domains cost very little and are common in scam texts\.$/, function (m, t) { return 'نطاقات ' + D('.' + t) + ' زهيدة الثمن وشائعة في رسائل الاحتيال.'; }],
    [/^Borrows the name (\S+)$/, function (m, b) { return 'يستعير اسم ' + D(b); }],
    [/^(\S+) is not run by (\S+); anyone can buy a name with a company's name in it\.$/, function (m, r, b) { return D(r) + ' لا تديره ' + D(b) + '؛ يمكن لأي شخص شراء اسم يتضمن اسم شركة.'; }],
    [/^Everything before @ is ignored; you would really go to (\S+)\.$/, function (m, h) { return 'كل ما قبل @ يُتجاهل؛ ستذهب في الحقيقة إلى ' + D(h) + '.'; }],
    [/^The name is plain and the real domain is (\S+)\.$/, function (m, r) { return 'الاسم واضح، والنطاق الحقيقي هو ' + D(r) + '.'; }],
    [/^Nothing alarming found, but always check the real domain \((\S+)\) before logging in or paying\.$/, function (m, r) { return 'لم نجد ما يثير القلق، لكن تحقق دائمًا من النطاق الحقيقي (' + D(r) + ') قبل تسجيل الدخول أو الدفع.'; }],
    [/^(\d+ days|\d+ months|[\d.]+ years)$/, function (m) { return age(m); }],
    [DA, function (m) { return date(m); }],
    [new RegExp('^(\\d+ (?:' + MOS + ') \\d{4}) \\((\\d+ days|\\d+ months|[\\d.]+ years) ago\\)$'), function (m, d, a) { return date(d) + ' (قبل ' + age(a) + ')'; }],
    [/^Score (\d+)\/100$/, 'النتيجة $1/100'],
    [/^(\d+) of (\d+) checks passed$/, 'الفحوص الناجحة: $1 من $2'],
    [/^· ([\d,]+) certificates logged · ([\d,]+) names$/, '· الشهادات المسجّلة: $1 · الأسماء: $2'],
    [/^…and (\d+) more\.$/, '…و$1 أخرى.'],
    [/^.*[؀-ۿ⁦-⁩].*$/, '$&']
  ]);
})();
