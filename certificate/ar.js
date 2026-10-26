(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var EKU = { 'websites (server)': 'المواقع (الخادم)', 'logging in (client)': 'تسجيل الدخول (العميل)', 'signing software': 'توقيع البرامج', 'email': 'البريد الإلكتروني', 'timestamps': 'الطوابع الزمنية', 'OCSP responses': 'ردود OCSP' };
  var KIND = {
    'A root authority: browsers ship it built in': 'جهة جذرية: تأتي مدمجة في المتصفحات',
    'Self-signed: it vouches for itself': 'موقّعة ذاتيًا: تشهد لنفسها',
    'A certificate authority (it signs other certificates)': 'جهة إصدار شهادات (توقّع شهادات أخرى)',
    'A website or user certificate': 'شهادة موقع أو مستخدم'
  };
  var TAIL = {
    'Longer than browsers accept for websites (398 days).': 'أطول مما تقبله المتصفحات لشهادات المواقع (398 يومًا).',
    "Short-lived, as automated services like Let's Encrypt issue them.": "قصيرة العمر، كما تصدرها الخدمات الآلية مثل Let's Encrypt."
  };
  LabAr.add({
    "Certificate inspector.": "فاحص الشهادات.",
    "Certificate inspector": "فاحص الشهادات",
    "Certificate Inspector": "فاحص الشهادات",
    "mariamalzaabi.ae": "mariamalzaabi.ae",
    "Tool · Security": "أداة · أمن المعلومات",
    "The padlock in your browser is a certificate: a signed card that says \"this key belongs to this website\". Look one up, drop in a file, or paste the text, and see who vouched for the site, what it covers, how strong it is and when it runs out.":
      "القفل في متصفحك هو شهادة: بطاقة موقّعة تقول «هذا المفتاح يخصّ هذا الموقع». ابحث عن شهادة، أو أفلت ملفًا، أو الصق النص، لترى من شهد للموقع، وما الذي تغطيه الشهادة، ومدى قوتها، ومتى تنتهي.",
    "Domain": "النطاق",
    "Look up": "ابحث",
    "OR": "أو",
    "Drop a .pem, .crt or .cer file here, or tap to choose": "أفلت هنا ملفًا بصيغة \u200E.pem\u200E أو \u200E.crt\u200E أو \u200E.cer\u200E، أو اضغط للاختيار",
    "PEM text": "نص PEM",
    "Inspect": "افحص",
    "Try a sample (Let's Encrypt root)": "جرّب مثالًا (شهادة Let's Encrypt الجذرية)",
    "Look-ups read Certificate Transparency logs through crt.sh: every public certificate must be logged there, so you can spot certificates you didn't ask for. Files and pasted text are decoded right here; nothing is uploaded.":
      "عمليات البحث تقرأ سجلات شفافية الشهادات عبر crt.sh: كل شهادة عامة يجب أن تُسجَّل هناك، فتستطيع أن تكتشف شهادات لم تطلبها. أما الملفات والنصوص الملصقة فتُفكّ هنا مباشرة، ولا يُرفع أي شيء.",
    "Certificates in the chain": "الشهادات في السلسلة",
    "Names it covers": "الأسماء التي تغطيها",
    "Details": "التفاصيل",
    "That doesn't look like a certificate. Paste the text between BEGIN CERTIFICATE and END CERTIFICATE.": "لا يبدو هذا شهادة. الصق النص الواقع بين BEGIN CERTIFICATE و END CERTIFICATE.",
    "No name": "بلا اسم",
    "Expired": "منتهية",
    "Expires soon": "تنتهي قريبًا",
    "In date": "سارية",
    "Vouched for by": "الجهة التي شهدت لها",
    "Itself. Roots like this come pre-installed in your phone and browser, and everything they sign inherits that trust.": "نفسها. الشهادات الجذرية مثل هذه مثبّتة مسبقًا في هاتفك ومتصفحك، وكل ما توقّعه يرث هذه الثقة.",
    "Nobody else. Browsers won't trust it unless it is a root they already ship.": "لا أحد غيرها. لن تثق بها المتصفحات ما لم تكن شهادة جذرية مدمجة فيها أصلًا.",
    "Only control of the domain was checked; no company name is included.": "جرى التحقق من السيطرة على النطاق فقط، ولا يتضمّن اسم شركة.",
    "Extended validation (EV)": "تحقّق موسّع (EV)",
    "Organisation validated (OV)": "تحقّق من المؤسسة (OV)",
    "Domain validated (DV)": "تحقّق من النطاق (DV)",
    "Individual validated (IV)": "تحقّق من الفرد (IV)",
    "Who was checked": "من جرى التحقق منه",
    "Strong. Comparable to 128-bit security.": "قوي. يعادل أمانًا بقوة 128 بت.",
    "Fine for today (about 112-bit security).": "مناسب حاليًا (أمان بقوة 112 بت تقريبًا).",
    "Weak by modern standards.": "ضعيف بالمعايير الحديثة.",
    "This signature type is broken and no longer trusted.": "هذا النوع من التوقيع مكسور ولم يعد موثوقًا.",
    "A modern, trusted signature.": "توقيع حديث وموثوق.",
    "Allowed for": "مسموح لـ",
    "No log receipts inside": "لا تحتوي على إيصالات تسجيل",
    "Embedded receipts from Certificate Transparency logs, which Chrome and Safari require.": "إيصالات مضمّنة من سجلات شفافية الشهادات، يشترطها Chrome و Safari.",
    "Browsers may need the receipts from somewhere else (TLS or OCSP).": "قد تحتاج المتصفحات إلى الإيصالات من مصدر آخر (TLS أو OCSP).",
    "Wildcard": "شهادة شاملة (Wildcard)",
    "Subject": "صاحب الشهادة",
    "Issuer": "الجهة المُصدِرة",
    "Serial": "الرقم التسلسلي",
    "Version": "الإصدار",
    "SHA-256 fingerprint": "بصمة SHA-256",
    "OCSP": "OCSP",
    "Issuer cert": "شهادة الجهة المُصدِرة",
    "Type a domain like example.com.": "اكتب نطاقًا مثل example.com.",
    "Searching public logs… (crt.sh can take up to 20 seconds)": "جارٍ البحث في السجلات العامة… (قد يستغرق crt.sh حتى 20 ثانية)",
    "No unexpired certificates are logged for that name.": "لا توجد شهادات سارية مسجّلة لهذا الاسم.",
    "crt.sh is busy or unreachable right now. Try again in a minute, or paste a certificate instead.": "الموقع crt.sh مشغول أو يتعذّر الوصول إليه الآن. حاول بعد دقيقة، أو الصق شهادة بدلًا من ذلك."
  }, [
    [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m, d, mo, y) { return d + ' ' + MON[mo] + ' ' + y; }],
    [/^(A root authority: browsers ship it built in|Self-signed: it vouches for itself|A certificate authority \(it signs other certificates\)|A website or user certificate)( · log copy \(precertificate\))?$/, function (m, k, pre) { return KIND[k] + (pre ? ' · نسخة للسجل (شهادة أولية)' : ''); }],
    [/^expired (\d+) days ago$/, 'انتهت قبل $1 يومًا'],
    [/^(-?\d+) days left$/, 'متبقٍّ $1 يومًا'],
    [/^Valid for (\d+) days in total\.(?: (.+))?$/, function (m, n, t) { return 'صالحة لمدة ' + n + ' يومًا إجمالًا.' + (t ? ' ' + (TAIL[t] || t) : ''); }],
    [/^The company "(.+)"(?: in (\w+))? was named and checked\.$/, function (m, o, c) { return 'جرى ذكر الشركة «' + o + '»' + (c ? ' في ' + c : '') + ' والتحقق منها.'; }],
    [/^Key: RSA (\d+)-bit$/, 'المفتاح: RSA بطول $1 بت'],
    [/^Key: Elliptic curve (.+)$/, 'المفتاح: منحنى إهليلجي $1'],
    [/^Key: unknown curve$/, 'المفتاح: منحنى غير معروف'],
    [/^Key: Ed25519$/, 'المفتاح: Ed25519'],
    [/^Key: Other \((.+)\)$/, 'المفتاح: نوع آخر ($1)'],
    [/^Signed with (.+?) with (.+)$/, 'التوقيع: $1 مع $2'],
    [/^Signed with (.+)$/, 'التوقيع: $1'],
    [/^Publicly logged (\d+) times$/, 'مسجّلة علنًا $1 مرات'],
    [/^Covers every first-level subdomain, such as anything\.(.+)\.$/, 'تغطي كل نطاق فرعي من المستوى الأول، مثل anything.$1.'],
    [/^Found (\d+) live logged certificates?\. Showing the newest\.$/, 'عُثر على $1 من الشهادات السارية المسجّلة. نعرض أحدثها.'],
    [/^(?:websites \(server\)|logging in \(client\)|signing software|email|timestamps|OCSP responses|[\d.]+)(?:, (?:websites \(server\)|logging in \(client\)|signing software|email|timestamps|OCSP responses|[\d.]+))*$/, function (m) { return m.split(', ').map(function (p) { return EKU[p] || p; }).join('، '); }]
  ]);
})();
