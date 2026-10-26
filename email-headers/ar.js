(function () {
  var t = function (s) { return LabAr.t(s); };
  var RES = { pass: 'ناجح', fail: 'فاشل', softfail: 'فشل جزئي', none: 'غير موجود', neutral: 'محايد', permerror: 'خطأ دائم', temperror: 'خطأ مؤقت', policy: 'سياسة', 'not shown': 'غير ظاهر' };
  function delay(d) {
    var m;
    if (d === 'clock mismatch') return 'اختلاف في الساعات';
    if (d === 'under 1 s') return 'أقل من ثانية';
    if ((m = d.match(/^(\d+) s$/))) return m[1] + ' ث';
    if ((m = d.match(/^(\d+) min$/))) return m[1] + ' د';
    if ((m = d.match(/^([\d.]+) h$/))) return m[1] + ' س';
    return d;
  }
  var D = '(clock mismatch|under 1 s|\\d+ s|\\d+ min|[\\d.]+ h)';
  LabAr.add({
    "Email Header Detective": "محقّق ترويسات البريد",
    "Tool · Security": "أداة · الأمن",
    "Email header detective.": "محقّق ترويسات البريد.",
    "Every email carries a hidden travel log. Paste it here to see which servers handed it along, how long each step took, who really sent it, and whether the sender's domain vouched for it. The headers stay in your browser.": "تحمل كل رسالة بريد إلكتروني سجل رحلة مخفيًا. الصقه هنا لترى الخوادم التي تناقلتها، والوقت الذي استغرقته كل خطوة، ومن أرسلها فعلًا، وهل شهد لها نطاق المرسل. تبقى الترويسات داخل متصفحك.",
    "Raw headers": "الترويسات الخام",
    "Paste the full headers (or the whole message source) here…": "الصق الترويسات كاملة (أو مصدر الرسالة كله) هنا…",
    "Investigate": "حقّق",
    "Try a suspicious example": "جرّب مثالًا مشبوهًا",
    "Look up server names": "ابحث عن أسماء الخوادم",
    "How do I get the headers?": "كيف أحصل على الترويسات؟",
    "<b>Gmail:</b> open the email, ⋮ menu → Show original → Copy to clipboard.": "<b>Gmail:</b> افتح الرسالة، ثم قائمة ⋮ ← عرض الرسالة الأصلية ← نسخ إلى الحافظة.",
    "<b>Outlook (web):</b> ⋯ → View → View message source. <b>Outlook (Windows):</b> File → Properties → Internet headers.": "<b>Outlook (الويب):</b> ⋯ ← عرض ← عرض مصدر الرسالة. <b>Outlook (Windows):</b> ملف ← خصائص ← رؤوس الإنترنت.",
    "<b>Apple Mail:</b> View → Message → All Headers (or Raw Source).": "<b>Apple Mail:</b> عرض ← الرسالة ← كل الترويسات (أو المصدر الخام).",
    "<b>iPhone and Android apps</b> usually can't show them. Open the email in a web browser instead.": "<b>تطبيقات iPhone وAndroid</b> لا تعرضها عادةً. افتح الرسالة في متصفح الويب بدلًا من ذلك.",
    "Headers name servers, addresses and timestamps, not passwords. Still, they can include your own email address, so only share them with people you trust. Server-name lookups go to Cloudflare's DNS; nothing else leaves this page.": "تذكر الترويسات الخوادم والعناوين والطوابع الزمنية، لا كلمات المرور. ومع ذلك قد تتضمن عنوان بريدك، فلا تشاركها إلا مع من تثق بهم. يُرسَل البحث عن أسماء الخوادم إلى DNS من Cloudflare، ولا يغادر هذه الصفحة شيء غير ذلك.",
    "The route, from sender to you": "المسار، من المرسل إليك",
    "Who is who": "من هو من",
    "SPF": "SPF", "DKIM": "DKIM", "DMARC": "DMARC",
    "pass": "ناجح", "fail": "فاشل", "softfail": "فشل جزئي", "none": "غير موجود", "neutral": "محايد", "permerror": "خطأ دائم", "temperror": "خطأ مؤقت", "not shown": "غير ظاهر",
    "DMARC failed": "فشل DMARC",
    "DMARC passed": "نجح DMARC",
    "No valid DKIM signature": "لا يوجد توقيع DKIM صالح",
    "The message was not signed, or the signature broke on the way.": "الرسالة غير موقّعة، أو تعطّل التوقيع في الطريق.",
    "No authentication results": "لا توجد نتائج مصادقة",
    "These headers have no Authentication-Results line. Copy them from your inbox provider's \"show original\" view for the full picture.": "لا يوجد في هذه الترويسات سطر Authentication-Results. انسخها من خيار \"عرض الرسالة الأصلية\" لدى مزوّد بريدك لترى الصورة كاملة.",
    "Fake address in the name": "عنوان مزيف داخل الاسم",
    "Replies go somewhere else": "الردود تذهب إلى مكان آخر",
    "Different envelope sender": "مرسل مختلف في المغلّف",
    "Look-alike domain?": "نطاق مشابه؟",
    "Sent by a script": "أُرسلت عبر برنامج نصي",
    "Encrypted on the way": "مشفّرة في الطريق",
    "At least one hop used TLS (ESMTPS).": "استخدمت قفزة واحدة على الأقل التشفير TLS (ESMTPS).",
    "From the first server that wrote a timestamp to your inbox.": "من أول خادم سجّل طابعًا زمنيًا حتى صندوق بريدك.",
    "unknown server": "خادم غير معروف",
    "No \"Received\" lines": "لا توجد أسطر \"Received\"",
    "Paste the full headers to see the route.": "الصق الترويسات كاملة لترى المسار.",
    "no reverse name": "لا يوجد اسم عكسي",
    "From": "المرسل (From)", "Display name": "الاسم الظاهر", "Reply-To": "عنوان الرد (Reply-To)", "Return-Path": "مسار الإرجاع (Return-Path)",
    "Signed by (DKIM)": "الموقِّع (DKIM)", "Message-ID host": "مضيف Message-ID", "First public IP": "أول عنوان IP عام", "Subject": "الموضوع", "Mail program": "برنامج البريد",
    "Very likely spoofed or phishing": "على الأرجح رسالة منتحلة أو تصيّد",
    "Several warning signs together. Don't click links or reply; report it as phishing.": "عدة علامات تحذير مجتمعة. لا تنقر على الروابط ولا ترد، وأبلغ عنها كرسالة تصيّد.",
    "Suspicious": "مشبوهة",
    "Something doesn't line up. Check with the sender through a channel you already trust.": "هناك ما لا يتطابق. تحقّق من المرسل عبر وسيلة تثق بها مسبقًا.",
    "Looks genuine": "تبدو أصلية",
    "The sender's domain vouched for it and the route looks normal. Still read links carefully.": "شهد لها نطاق المرسل والمسار يبدو طبيعيًا. ومع ذلك اقرأ الروابط بعناية.",
    "Not enough to tell": "لا يكفي للحكم",
    "Nothing alarming, but the headers don't prove who sent it.": "لا شيء مقلق، لكن الترويسات لا تثبت هوية المرسل."
  }, [
    [/^SPF (\w+)$/, function (m, r) { return 'SPF: ' + (RES[r] || r); }],
    [/^The domain in "From" \((.*)\) did not vouch for this message\. This is the strongest sign of spoofing\.$/, 'لم يشهد النطاق الموجود في "From" ‏($1) لهذه الرسالة. وهذه أقوى علامة على الانتحال.'],
    [/^The sending domain (.*) vouched for this message\. \(Scammers can still own look-alike domains, so check the spelling\.\)$/, 'شهد النطاق المرسِل $1 لهذه الرسالة. (قد يملك المحتالون نطاقات مشابهة، فتحقّق من التهجئة.)'],
    [/^The server that delivered it is not on (.+)'s list of allowed senders\.$/, function (m, d) { return 'الخادم الذي سلّمها ليس ضمن قائمة المرسلين المسموح لهم لدى ' + (d === 'the sender' ? 'المرسل' : d) + '.'; }],
    [/^The display name shows "(.*)" but the real sender is (.*)\.$/, 'يعرض الاسم الظاهر "$1" لكن المرسل الحقيقي هو $2.'],
    [/^If you hit reply, it goes to (.*), not (.*)\.$/, 'إذا ضغطت "رد"، فسيذهب ردك إلى $1، لا إلى $2.'],
    [/^Bounces go to (.*)\. Normal for newsletters and mailing services, odd for a bank or a friend\.$/, 'رسائل الارتداد تذهب إلى $1. هذا طبيعي في النشرات وخدمات البريد الجماعي، وغريب من بنك أو صديق.'],
    [/^(.*) contains digits or international characters, a common trick \(paypa1, rnicrosoft\)\.$/, 'يحتوي $1 على أرقام أو أحرف دولية، وهي حيلة شائعة (paypa1، rnicrosoft).'],
    [/^X-Mailer says (.*)\. Big companies rarely send from bulk PHP scripts\.$/, 'يذكر X-Mailer أنها من $1. نادرًا ما ترسل الشركات الكبيرة من برامج PHP للإرسال الجماعي.'],
    [/^Long wait at hop (\d+)$/, 'انتظار طويل عند القفزة $1'],
    [new RegExp('^The message sat for ' + D + ' before (.+) took it\\. Usually spam filtering or a busy queue\\.$'), function (m, d, s) { return 'بقيت الرسالة ' + delay(d) + ' قبل أن يستلمها ' + (s === 'a server' ? 'خادم' : s) + '. غالبًا بسبب تصفية الرسائل المزعجة أو ازدحام الطابور.'; }],
    [new RegExp('^(\\d+) hops, ' + D + ' in total$'), function (m, n, d) { return n + ' قفزات، ' + delay(d) + ' في المجموع'; }],
    [new RegExp('^\\+' + D + '$'), function (m, d) { return '+' + delay(d); }],
    [/^from (\S+)( \[([^\],]+)(, private network)?\])?( · (\S+))?$/, function (m, f, x, ip, pv, y, w) { return 'من ' + (f === '?' ? '؟' : f) + (ip ? ' [' + ip + (pv ? '، شبكة خاصة' : '') + ']' : '') + (w ? ' · ' + w : ''); }],
    [/^reverse name: (.+)$/, 'الاسم العكسي: $1'],
    // server host names in the route are data
    [/^[\w-]+(\.[\w-]+)+\.?$/, '$&'],
    [/^[0-9a-f]*:[0-9a-f:]+$/i, '$&']
  ]);
})();
