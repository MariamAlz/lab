/* Arabic strings shared by every lab page. Page-specific ones live in <page>/ar.js. */
LabAr.add({
  "All experiments": "كل التجارب",
  "mariamalzaabi.ae ↗": "mariamalzaabi.ae ↗",
  "© 2026 Mariam Alzaabi": "© 2026 مريم الزعابي",
  "Everything runs in your browser.": "كل شيء يعمل داخل متصفحك.",
  "Everything runs in your browser": "كل شيء يعمل داخل متصفحك",
  "Get in touch ↗": "تواصل معي ↗",
  "Lab": "المختبر",
  "Search experiments": "ابحث في التجارب",
  "Loading…": "جارٍ التحميل…",
  "Loading...": "جارٍ التحميل…",
  "Running…": "جارٍ التشغيل…",
  "Start": "ابدأ",
  "Stop": "إيقاف",
  "Pause": "إيقاف مؤقت",
  "Resume": "متابعة",
  "Reset": "إعادة ضبط",
  "Clear": "مسح",
  "Clear all": "مسح الكل",
  "Save": "حفظ",
  "Saved": "تم الحفظ",
  "Saved.": "تم الحفظ.",
  "Delete": "حذف",
  "Remove": "إزالة",
  "Edit": "تعديل",
  "Add": "إضافة",
  "Cancel": "إلغاء",
  "Close": "إغلاق",
  "Done": "تم",
  "Next": "التالي",
  "Back": "رجوع",
  "Previous": "السابق",
  "Copy": "نسخ",
  "Copied": "تم النسخ",
  "Copied!": "تم النسخ!",
  "Copied.": "تم النسخ.",
  "Download": "تنزيل",
  "Print": "طباعة",
  "Share": "مشاركة",
  "Export": "تصدير",
  "Import": "استيراد",
  "Try again": "حاول مرة أخرى",
  "Run again": "شغّل مرة أخرى",
  "Search": "بحث",
  "Settings": "الإعدادات",
  "Show more": "عرض المزيد",
  "Show less": "عرض أقل",
  "Use my location": "استخدم موقعي",
  "use my location": "استخدم موقعي",
  "My location": "موقعي",
  "Your location": "موقعك",
  "Location": "الموقع",
  "Today": "اليوم",
  "Tomorrow": "غدًا",
  "Yesterday": "أمس",
  "Now": "الآن",
  "now": "الآن",
  "Tonight": "الليلة",
  "This week": "هذا الأسبوع",
  "Day": "اليوم",
  "Days": "أيام",
  "Week": "أسبوع",
  "Month": "الشهر",
  "Year": "السنة",
  "Hour": "ساعة",
  "Hours": "ساعات",
  "Minutes": "دقائق",
  "Time": "الوقت",
  "Date": "التاريخ",
  "Sunrise": "الشروق",
  "Sunset": "الغروب",
  "Temperature": "درجة الحرارة",
  "Humidity": "الرطوبة",
  "Wind": "الرياح",
  "Dubai": "دبي",
  "Abu Dhabi": "أبوظبي",
  "Sharjah": "الشارقة",
  "Ajman": "عجمان",
  "Umm Al Quwain": "أم القيوين",
  "Ras Al Khaimah": "رأس الخيمة",
  "Fujairah": "الفجيرة",
  "Al Ain": "العين",
  "UAE": "الإمارات",
  "Monday": "الاثنين", "Tuesday": "الثلاثاء", "Wednesday": "الأربعاء", "Thursday": "الخميس", "Friday": "الجمعة", "Saturday": "السبت", "Sunday": "الأحد",
  "Mon": "الاثنين", "Tue": "الثلاثاء", "Wed": "الأربعاء", "Thu": "الخميس", "Fri": "الجمعة", "Sat": "السبت",
  "January": "يناير", "February": "فبراير", "March": "مارس", "April": "أبريل", "May": "مايو", "June": "يونيو", "July": "يوليو", "August": "أغسطس", "September": "سبتمبر", "October": "أكتوبر", "November": "نوفمبر", "December": "ديسمبر",
  "Jan": "يناير", "Feb": "فبراير", "Mar": "مارس", "Apr": "أبريل", "Jun": "يونيو", "Jul": "يوليو", "Aug": "أغسطس", "Sep": "سبتمبر", "Oct": "أكتوبر", "Nov": "نوفمبر", "Dec": "ديسمبر",
  "Yes": "نعم",
  "No": "لا",
  "On": "تشغيل",
  "Off": "إيقاف",
  "Low": "منخفض",
  "Medium": "متوسط",
  "High": "مرتفع",
  "Very high": "مرتفع جدًا",
  "Good": "جيد",
  "OK": "مقبول",
  "Bad": "سيئ",
  "Unknown": "غير معروف",
  "None": "لا شيء",
  "Total": "المجموع",
  "Error": "خطأ",
  "Couldn't load": "تعذّر التحميل",
  "Couldn't load the data. Try again later.": "تعذّر تحميل البيانات. حاول لاحقًا.",
  "Not medical advice.": "ليست نصيحة طبية.",
  "This is not medical advice.": "هذه ليست نصيحة طبية."
}, [
  [/^(\d+) days?$/, function (m, n) { n = +n; return n === 1 ? 'يوم واحد' : n === 2 ? 'يومان' : n <= 10 ? n + ' أيام' : n + ' يومًا'; }],
  [/^(\d+) hours?$/, '$1 ساعة'],
  [/^(\d+) min(?:utes?)?$/, '$1 دقيقة'],
  [/^(\d+) experiments?$/, '$1 تجربة'],
  [/^In (\d+) days$/, 'بعد $1 أيام'],
  [/^In (\d+) h$/, 'بعد $1 ساعة'],
  [/^(\d+) days? ago$/, function (m, n) { n = +n; return n === 1 ? 'قبل يوم' : n === 2 ? 'قبل يومين' : n <= 10 ? 'قبل ' + n + ' أيام' : 'قبل ' + n + ' يومًا'; }]
]);
/* index cards for newer tools */
LabAr.add({
 "Tool · Verification": "أداة · تحقق",
 "When and where was this photo taken?": "متى وأين التُقطت هذه الصورة؟",
 "Draw a shadow on a photo to find the sun's height and direction, then see which times or places fit the claim.": "ارسم ظلًا على صورة لتعرف ارتفاع الشمس واتجاهها، ثم الأوقات أو الأماكن التي تناسب الادعاء.",
 "Check a photo →": "افحص صورة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمان",
 "Wi-Fi guest card": "بطاقة Wi-Fi للضيوف",
 "Print a scan-to-join Wi-Fi card in English and Arabic, with a guest password generator. Your password never leaves the page.": "اطبع بطاقة برمز QR للاتصال بالشبكة بالعربية والإنجليزية، مع مولّد كلمة مرور للضيوف. كلمة مرورك لا تغادر الصفحة.",
 "Make a card →": "اصنع بطاقة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Privacy · Photos": "الخصوصية · الصور",
 "What your photo gives away": "ماذا تكشف صورتك",
 "See the GPS spot, device, serial numbers and hidden preview inside a photo, then save a clean copy without them.": "اعرف موقع GPS والجهاز والأرقام التسلسلية والمعاينة الخفية داخل الصورة، ثم احفظ نسخة نظيفة منها.",
 "Check a photo →": "افحص صورة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Privacy": "أداة · خصوصية",
 "Secret link": "رابط سري",
 "Lock a password or private note into a link with AES-256, encrypted on your device, with optional password, expiry and split key.": "اقفل كلمة مرور أو ملاحظة خاصة داخل رابط بتشفير AES-256 على جهازك، مع كلمة مرور ومدة صلاحية ومفتاح منفصل عند الحاجة.",
 "Lock a note →": "اقفل ملاحظة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمان",
 "Account recovery map": "خريطة استرداد الحسابات",
 "Map which email or phone number can reset your other accounts, simulate a SIM swap and get a fix list in order.": "اكتشف أي بريد أو رقم هاتف يستطيع إعادة تعيين حساباتك الأخرى، وحاكِ استبدال الشريحة، واحصل على قائمة إصلاحات مرتبة.",
 "Map it →": "ارسم خريطتك ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Flights": "أداة · رحلات",
 "Airport pickup timer": "مؤقت الاستقبال في المطار",
 "Track the flight live and get a countdown to when you should leave home.": "تتبّع الرحلة مباشرة واحصل على عدّ تنازلي لموعد خروجك من البيت.",
 "Track a flight →": "تتبّع رحلة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Privacy · Documents": "الخصوصية · المستندات",
 "Document leak check": "فحص تسريبات المستندات",
 "Find author names, tracked changes, comments, hidden sheets, speaker notes and earlier PDF versions before you send a file.": "اكتشف أسماء المؤلفين والتغييرات المتعقَّبة والتعليقات والأوراق المخفية وملاحظات المتحدث والنسخ السابقة من ملفات PDF قبل إرسال الملف.",
 "Check a file →": "افحص ملفًا ←",
 "Sky · Weather": "السماء · الطقس",
 "Tonight's sunset": "غروب الليلة",
 "A 0 to 100 sunset score from cloud layers, dust and the western horizon, with golden and blue hour.": "درجة من 0 إلى 100 لجمال الغروب حسب طبقات الغيوم والغبار والأفق الغربي، مع الساعة الذهبية والزرقاء.",
 "Score tonight →": "قيّم الليلة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Verification": "أداة · تحقق",
 "Video verification kit": "أدوات التحقق من الفيديو",
 "Pull key frames from a video for reverse image search, read its hidden creation date, and work through a fact-check list.": "استخرج الإطارات الرئيسية من فيديو للبحث العكسي عن الصور، واقرأ تاريخ إنشائه المخفي، واتبع قائمة للتحقق من صحته.",
 "Check a video →": "افحص فيديو ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Privacy": "أداة · خصوصية",
 "Privacy policy reader": "قارئ سياسات الخصوصية",
 "Paste a privacy policy in English or Arabic and see what it says about selling your data, ads, AI training, retention and deletion, with quotes.": "الصق سياسة خصوصية بالعربية أو الإنجليزية واعرف ما تقوله عن بيع بياناتك والإعلانات وتدريب الذكاء الاصطناعي ومدة الاحتفاظ والحذف، مع الاقتباسات.",
 "Read a policy →": "اقرأ سياسة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Guide · Security": "دليل · أمان",
 "SIM swap protection": "الحماية من استبدال الشريحة",
 "Spot the warning signs, close the gaps on your number and accounts, and know what to do in the first minutes.": "تعرّف على علامات التحذير، وسدّ الثغرات في رقمك وحساباتك، واعرف ما تفعله في الدقائق الأولى.",
 "Protect my number →": "احمِ رقمي ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Investigation": "أداة · تحقيق",
 "Post time decoder": "كاشف وقت المنشورات",
 "Paste a link from X, Discord, Instagram, TikTok, LinkedIn or Mastodon and read the exact creation time hidden in its ID.": "الصق رابطًا من X أو Discord أو Instagram أو TikTok أو LinkedIn أو Mastodon لتعرف وقت إنشائه الدقيق المخبأ في رقمه.",
 "Decode a post →": "اكشف منشورًا ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Home": "أداة · المنزل",
 "Open the windows or AC?": "النوافذ أم المكيّف؟",
 "Hour by hour for 48 hours: when outside air is cool, dry and dust-free enough to switch the AC off.": "ساعة بساعة لمدة 48 ساعة: متى يكون الهواء الخارجي باردًا وجافًا وخاليًا من الغبار لتطفئ المكيّف.",
 "Check the air →": "افحص الهواء ←"
});
/* index cards for newer tools */
LabAr.add({
 "Game · Probability": "لعبة · احتمالات",
 "Probability puzzles": "ألغاز الاحتمالات",
 "Play Monty Hall, test the birthday paradox, and see why your gut gets chance wrong.": "العب مونتي هول، واختبر مفارقة عيد الميلاد، واكتشف لماذا يخطئ حدسك في تقدير الصدفة.",
 "Play →": "العب ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Privacy": "أداة · خصوصية",
 "How unique is your browser?": "ما مدى تفرّد متصفحك؟",
 "See the 25 details any site can read without cookies, how much each gives away, and how to blend in.": "اطّلع على 25 تفصيلًا يقرؤها أي موقع من دون ملفات تعريف الارتباط، وكم يكشف كل منها، وكيف تندمج مع الآخرين.",
 "Check my browser →": "افحص متصفحي ←"
});
/* index cards for newer tools */
LabAr.add({
 "Heritage · Stars": "تراث · نجوم",
 "Al Durur star calendar": "حساب الدرور",
 "Today's durr in the old Gulf count from Suhail, a year wheel, and when the season stars really rise where you are.": "در اليوم في حساب أهل الخليج من طلوع سهيل، ودائرة السنة، ومتى تطلع نجوم المواسم فعلًا في مكانك.",
 "Find today's durr →": "اعرف در اليوم ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Running": "أداة · جري",
 "Race pace in the heat": "وتيرة السباق في الحر",
 "Predict your race times, then slow the goal pace for race-morning heat and humidity.": "توقّع أزمنة سباقاتك، ثم عدّل وتيرتك المستهدفة حسب حرارة صباح السباق ورطوبته.",
 "Plan →": "خطّط ←"
});
/* index cards for newer tools */
LabAr.add({
 "Sound · Radio": "صوت · راديو",
 "UAE radio live": "إذاعات الإمارات مباشرة",
 "UAE stations in a dozen languages, with favourites, a sleep timer and lock-screen controls.": "محطات الإمارات بأكثر من عشر لغات، مع المفضلة ومؤقت النوم والتحكم من شاشة القفل.",
 "Listen →": "استمع ←"
});
/* index cards for newer tools */
LabAr.add({
 "Guide · Security": "دليل · أمان",
 "Smart home hardening": "تحصين المنزل الذكي",
 "Step-by-step lock-down for your router, cameras, speakers, TV, robot vacuum and more, with a score you can track and print.": "خطوات واضحة لتأمين الراوتر والكاميرات والسماعات والتلفزيون والمكنسة الروبوتية وغيرها، مع نتيجة تتابعها وتطبعها.",
 "Harden my home →": "حصّن منزلي ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمان",
 "Lock down your phone": "أمّن هاتفك",
 "A step-by-step security checklist for iPhone, Pixel and Samsung, with the exact settings path for every step, from everyday protection to maximum.": "قائمة خطوات لحماية iPhone وPixel وSamsung، مع المسار الدقيق في الإعدادات لكل خطوة، من الحماية اليومية إلى أقصى حماية.",
 "Start securing →": "ابدأ التأمين ←"
});
/* index cards for newer tools */
LabAr.add({
 "Privacy · Documents": "الخصوصية · المستندات",
 "Bad redaction finder": "كاشف الحجب الخاطئ",
 "Find black boxes in a PDF that still have readable text under them, and pixelation or blur in screenshots that can be undone.": "اكتشف المربعات السوداء في ملفات PDF التي ما زال تحتها نص مقروء، والبكسلة أو التمويه في لقطات الشاشة الذي يمكن عكسه.",
 "Check a redaction →": "افحص الحجب ←"
});
/* index cards for newer tools */
LabAr.add({
 "Verify · Weather": "تحقق · الطقس",
 "Was the weather really like that?": "هل كان الطقس فعلًا هكذا؟",
 "Check a photo or video against the hourly weather record, dust levels and the sun's position for that place and time.": "قارن صورة أو مقطعًا بسجل الطقس بالساعة ومستويات الغبار وموقع الشمس في ذلك المكان والوقت.",
 "Check a claim →": "افحص ادعاءً ←",
 "Tool · Sea · Moon": "أداة · البحر · القمر",
 "Fishing now": "الصيد الآن",
 "The best three fishing windows in the next 48 hours from tide, moon, dawn and dusk, pressure and wind.": "أفضل ثلاث فترات للصيد في الـ48 ساعة القادمة حسب المد والجزر والقمر والفجر والغروب والضغط والرياح.",
 "Find a window →": "اعثر على فترة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمان",
 "Domain dossier": "ملف النطاق",
 "Registration age, DNS, email spoofing grade, certificates, subdomains, hosting and look-alike domains, as one exportable report.": "عمر التسجيل وسجلات DNS ودرجة الحماية من انتحال البريد والشهادات والنطاقات الفرعية والاستضافة والنطاقات المشابهة، في تقرير واحد قابل للتصدير.",
 "Build a dossier →": "أنشئ الملف ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Money": "أداة · مال",
 "Zakat calculator": "حاسبة الزكاة",
 "Zakat on cash, gold, silver, shares, business stock and crypto, with today's nisab and the scholars' views side by side.": "الزكاة على النقد والذهب والفضة والأسهم وعروض التجارة والعملات المشفرة، مع نصاب اليوم وآراء العلماء جنبًا إلى جنب.",
 "Work it out →": "احسب زكاتك ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Health · Sun": "أداة · الصحة · الشمس",
 "Sunburn timer": "مؤقت حروق الشمس",
 "Minutes until you burn from live UV, your skin type and sunscreen, with reapply reminders.": "كم دقيقة حتى تحترق بشرتك حسب الأشعة الحالية ونوع بشرتك والواقي، مع تذكير بإعادة وضعه.",
 "Start the timer →": "شغّل المؤقت ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمان",
 "What a stranger can learn from your profile": "ما الذي يستطيع غريب معرفته من حسابك؟",
 "Describe what you post and see the dossier a stranger could build: home area, weekly routine, security answers, with a fix for each.": "صِف ما تنشره وشاهد الملف الذي قد يجمعه غريب عنك: منطقة سكنك وروتينك الأسبوعي وإجابات أسئلة الأمان، مع حل لكل منها.",
 "See my dossier →": "اعرض ملفي ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Shopping": "أداة · تسوّق",
 "Which pack is cheaper?": "أي عبوة أرخص؟",
 "Compare supermarket packs by price per kg, litre, piece or wash, with buy 2 get 1 and extra free offers counted in.": "قارن عبوات السوبرماركت بسعر الكيلو أو اللتر أو القطعة أو الغسلة، مع احتساب عروض اشترِ 2 واحصل على 1 والكمية الإضافية المجانية.",
 "Compare packs →": "قارن العبوات ←"
});
/* index cards for newer tools */
LabAr.add({
 "Learn · Biology": "تعلّم · أحياء",
 "From DNA to protein": "من الحمض النووي إلى البروتين",
 "Watch a ribosome read the beta-globin gene, then change one letter and cause sickle cell.": "شاهد الريبوسوم يقرأ جين بيتا غلوبين، ثم غيّر حرفًا واحدًا لتسبب فقر الدم المنجلي.",
 "Translate →": "ترجم ←"
});
/* index cards for newer tools */
LabAr.add({
 "Privacy · Travel": "الخصوصية · السفر",
 "What your boarding pass reveals": "ماذا تكشف بطاقة صعودك إلى الطائرة",
 "Scan the barcode on a boarding pass to see the name, booking reference, ticket and frequent flyer numbers anyone can read from a photo of it.": "امسح الرمز الشريطي على بطاقة الصعود لترى الاسم ورقم الحجز ورقم التذكرة ورقم المسافر الدائم التي يستطيع أي شخص قراءتها من صورتها.",
 "Scan a pass →": "امسح بطاقة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security": "أداة · أمن",
 "What is this file, really?": "ما حقيقة هذا الملف؟",
 "Drop any file to see its real type from its bytes, catch disguised programs, macros and reversed names, and get its hashes to look up.": "أفلت أي ملف لتعرف نوعه الحقيقي من بايتاته، وتكشف البرامج المتنكرة ووحدات الماكرو والأسماء المعكوسة، وتحصل على بصماته للبحث عنها.",
 "Check a file →": "افحص ملفًا ←"
});
/* index cards for newer tools */
LabAr.add({
 "Game · Media literacy": "لعبة · الوعي الإعلامي",
 "Spot the manipulation": "اكشف التضليل",
 "Twenty made-up posts and twelve real tricks: fake urgency, recycled photos, bot swarms, lookalike accounts and more. Spot them, then learn how to check.": "عشرون منشورًا مختلَقًا واثنتا عشرة حيلة حقيقية: استعجال مصطنع، وصور معاد تدويرها، وحسابات آلية ومنتحلة. اكتشفها وتعلّم كيف تتحقق.",
 "Play →": "العب ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Privacy": "أداة · خصوصية",
 "Personal OPSEC audit": "تدقيق أمنك الشخصي",
 "37 quick questions on posts, accounts, devices, home and travel, scored by area, with a step-by-step fix plan.": "37 سؤالًا سريعًا عن منشوراتك وحساباتك وأجهزتك ومنزلك وسفرك، مع نتيجة لكل مجال وخطة إصلاح خطوة بخطوة.",
 "Start the audit →": "ابدأ التدقيق ←"
});
/* index cards for newer tools */
LabAr.add({
 "Privacy · Maps": "الخصوصية · الخرائط",
 "Is your home in your running routes?": "هل يظهر منزلك في مسارات جريك؟",
 "Load GPX, TCX or FIT files to see where your runs keep starting and ending, what a privacy zone still gives away, and save trimmed copies.": "حمّل ملفات GPX أو TCX أو FIT لترى أين تبدأ أنشطتك وتنتهي باستمرار، وما تكشفه منطقة الخصوصية رغم ذلك، واحفظ نسخًا مقصوصة.",
 "Check my routes →": "افحص مساراتي ←",
 "Learn · Chemistry": "تعلّم · كيمياء",
 "Molecule shapes": "أشكال الجزيئات",
 "Build molecules from atoms and lone pairs and see their 3D VSEPR shape, angles and polarity.": "ابنِ جزيئات من الذرات والأزواج الحرة وشاهد شكلها الثلاثي الأبعاد وزواياها وقطبيتها.",
 "Build →": "ابنِ ←"
});
/* index cards for newer tools */
LabAr.add({
 "Language · Arabic": "لغة · عربية",
 "Arabic root explorer": "مستكشف الجذور العربية",
 "Pick a root like ك ت ب and see the real words its patterns make, then guess the root of a word.": "اختر جذرًا مثل ك ت ب وشاهد الكلمات الحقيقية التي تصنعها أوزانه، ثم خمّن جذر كلمة.",
 "Explore roots →": "استكشف الجذور ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Vision": "أداة · رؤية حاسوبية",
 "Safe to post": "آمن للنشر",
 "Find and cover faces, plates, documents and addresses in a photo, then save a clean copy without location data.": "اكتشف الوجوه ولوحات السيارات والمستندات والعناوين في الصورة وغطِّها، ثم احفظ نسخة نظيفة بلا بيانات الموقع.",
 "Check a photo →": "افحص صورة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Sound · Music": "صوت · موسيقى",
 "Arabic rhythm machine": "آلة الإيقاعات العربية",
 "Play maqsum, baladi, saidi, sama'i thaqil, khaleeji and more on a synthesised darbuka and riq.": "اعزف المقسوم والبلدي والصعيدي والسماعي الثقيل والخليجي وغيرها على دربكة ورق مُركّبين رقميًا.",
 "Play →": "اعزف ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Security · UAE": "أداة · أمن · الإمارات",
 "Is this message a scam?": "هل هذه الرسالة احتيال؟",
 "Paste an SMS, WhatsApp or email in English or Arabic to see the scam tricks highlighted, every link checked against real UAE domains, and what to do next.": "الصق رسالة نصية أو واتساب أو بريدًا بالعربية أو الإنجليزية لترى حيل الاحتيال مميّزة، مع فحص كل رابط مقابل النطاقات الإماراتية الحقيقية، وماذا تفعل بعدها.",
 "Check a message →": "افحص رسالة ←"
});
/* index cards for newer tools */
LabAr.add({
 "Game · Psychology": "لعبة · علم النفس",
 "Brain tricks": "خدع الدماغ",
 "Stroop, reaction time, change blindness and memory span, against typical ranges.": "ستروب وزمن الاستجابة وعمى التغيير ومدى الذاكرة، مقارنة بالنطاقات المعتادة.",
 "Test yourself →": "اختبر نفسك ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Files · UAE": "أداة · ملفات · الإمارات",
 "Portal upload fixer": "مُصلح ملفات البوابات",
 "Shrink photos and PDFs under a portal's size limit, turn iPhone HEIC into JPG and crop to exact pixels, all on your device.": "صغّر الصور وملفات PDF لتناسب حد الحجم في البوابات، وحوّل صور HEIC من iPhone إلى JPG، واقصّها بأبعاد دقيقة بالبكسل، وكل ذلك على جهازك.",
 "Fix a file →": "أصلح ملفًا ←"
});
/* index cards for newer tools */
LabAr.add({
 "Tool · Money · UAE": "أداة · المال · الإمارات",
 "Credit card payoff planner": "مخطط سداد البطاقة الائتمانية",
 "Minimum payment vs a fixed payment vs a target date, with the interest each costs, plus avalanche vs snowball for several cards.": "قارن الحد الأدنى بدفعة ثابتة وبموعد تختاره، مع الفائدة التي يكلفها كل منها، وقارن طريقتي الانهيار وكرة الثلج لعدة بطاقات.",
 "Plan it →": "خطّط ←",
 "Tool · Privacy": "أداة · خصوصية",
 "Before you sell your phone": "قبل أن تبيع هاتفك",
 "A step-by-step wipe checklist in the right order for iPhone, Android, Mac, PC, iPad, watch or console, so you never lose your authenticator codes or leave Activation Lock on.": "قائمة تحقق للمسح بالترتيب الصحيح لـ iPhone وأندرويد وMac والحاسوب وiPad والساعة وجهاز الألعاب، حتى لا تفقد رموز المصادقة ولا تترك قفل التنشيط.",
 "Start the checklist →": "ابدأ القائمة ←",
 "Heritage · Game": "تراث · لعبة",
 "A pearl diving season": "موسم غوص",
 "Captain a Gulf pearling boat from June to September, share out the catch, and live through the collapse after 1929.": "كن نوخذة سفينة غوص من يونيو إلى سبتمبر، واقسم الحصيلة، وعِش انهيار تجارة اللؤلؤ بعد 1929.",
 "Set sail →": "أبحر ←"
});
/* index cards for newer tools */
LabAr.add({
 "Experiment · Physics · Heritage": "تجربة · فيزياء · تراث",
 "How a falcon dives": "كيف ينقضّ الصقر",
 "Simulate a falcon's stoop: wing shape, drag, terminal speed and the g-force of the pull-out.": "حاكِ انقضاضة الصقر: شكل الجناحين ومقاومة الهواء والسرعة الحدية وقوة الخروج من الانقضاض.",
 "Dive →": "انقضّ ←"
});
LabAr.add({ "Zoom in": "تكبير", "Zoom out": "تصغير", "Close popup": "إغلاق النافذة" });
/* index cards for newer tools */
LabAr.add({
 "Tool · Art": "أداة · فن",
 "Islamic pattern maker": "صانع الزخارف الإسلامية",
 "Grow 8, 10 and 12-fold star patterns from tilings, weave and colour them, and export SVG for laser cutting.": "كوّن زخارف نجمية ثمانية وعشرية واثني عشرية من التبليطات، وانسجها ولوّنها، وصدّرها SVG للقص بالليزر.",
 "Design →": "صمّم ←",
 "Tool · Work · UAE": "أداة · العمل · الإمارات",
 "Last working day calculator": "حاسبة آخر يوم عمل",
 "Resigning in the UAE? Your last day from the notice period, the leave you have built up and what unused days pay, as a timeline you can copy.": "ستستقيل في الإمارات؟ اعرف آخر يوم عمل من مدة الإشعار، ورصيد إجازتك المتراكم، وبدل الأيام غير المستخدمة، في جدول زمني يمكنك نسخه.",
 "Work it out →": "احسبها ←"
});
