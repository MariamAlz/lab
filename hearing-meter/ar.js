(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  function dur(s) {
    var m;
    if (s === 'no limit') return 'بلا حد';
    if ((m = s.match(/^([\d.]+) h$/))) return m[1] + ' ساعة';
    if ((m = s.match(/^(\d+) min$/))) return m[1] + ' دقيقة';
    if ((m = s.match(/^([\d.]+) s$/))) return m[1] + ' ثانية';
    return s;
  }
  LabAr.add({
    "Hearing Safety Meter": "مقياس سلامة السمع",
    "Tool · Sound · Health": "أداة · الصوت · الصحة",
    "How loud is it, and for how long is it safe?": "ما مدى ارتفاع الصوت، وإلى متى يبقى آمنًا؟",
    "A sound level meter that uses your phone or laptop microphone. It shows the level in dB(A) right now, on average and at its peak, and how long you could listen at that level before risking your hearing. It can also keep a log of loud moments with times, which you can export, for example to back up a noise complaint.": "مقياس لمستوى الصوت يستخدم ميكروفون هاتفك أو حاسوبك. يعرض المستوى بوحدة dB(A) الآن، وفي المتوسط، وفي الذروة، والمدة التي يمكنك فيها الاستماع عند هذا المستوى قبل أن يتعرض سمعك للخطر. ويمكنه أيضًا تسجيل لحظات الضجيج مع أوقاتها لتصديرها، مثلًا لدعم شكوى إزعاج.",
    "dB(A)": "dB(A)",
    "Press start to listen.": "اضغط «ابدأ» للاستماع.",
    "Average (Leq)": "المتوسط (Leq)",
    "Loudest": "الأعلى",
    "Daily dose used": "الجرعة اليومية المستهلكة",
    "Reset average": "صفّر المتوسط",
    "Sound level over the last minute": "مستوى الصوت خلال الدقيقة الأخيرة",
    "Calibration offset": "تعديل المعايرة",
    "Phone microphones differ by up to 10 dB or more. If you have a proper sound meter, or a meter app you trust, play steady noise and nudge this until both agree. It's saved on this device.": "تختلف ميكروفونات الهواتف بما يصل إلى 10 dB أو أكثر. إن كان لديك مقياس صوت حقيقي أو تطبيق قياس تثق به، فشغّل ضجيجًا ثابتًا وعدّل هذا الشريط حتى تتطابق القراءتان. يُحفظ الإعداد على هذا الجهاز.",
    "Noise log": "سجل الضجيج",
    "Log anything louder than": "سجّل كل ما هو أعلى من",
    "When": "الوقت", "Length": "المدة", "Max": "الأقصى", "Avg": "المتوسط",
    "Export CSV": "تصدير CSV",
    "Clear log": "مسح السجل",
    "Keep screen awake while listening": "أبقِ الشاشة مضاءة أثناء الاستماع",
    "How loud are everyday places?": "ما مستوى الصوت في الأماكن اليومية؟",
    "<b>The 3 dB rule.</b> Decibels are logarithmic: every extra 3 dB is twice the sound energy. So the safe time halves with every 3 dB. The US workplace safety body NIOSH sets 85 dB(A) for 8 hours as the limit. At 88 it's 4 hours, at 100 just 15 minutes, and at 110 (a loud concert) under 2 minutes. Damage adds up across the day, which is what the dose tile shows.": "<b>قاعدة الـ 3 dB.</b> الديسيبل مقياس لوغاريتمي: كل 3 dB إضافية تعني ضعف طاقة الصوت، لذا ينخفض الوقت الآمن إلى النصف مع كل 3 dB. وتحدد هيئة السلامة المهنية الأمريكية NIOSH الحد بـ 85 dB(A) لمدة 8 ساعات. عند 88 يصبح 4 ساعات، وعند 100 ربع ساعة فقط، وعند 110 (حفل صاخب) أقل من دقيقتين. ويتراكم الضرر على مدار اليوم، وهذا ما تعرضه خانة الجرعة.",
    "<b>Why \"A\"?</b> Your ears are less sensitive to deep bass and very high sounds. A-weighting filters the microphone signal the same way, turning down low and very high frequencies, so the number matches what harms hearing. This page builds that filter from the standard's equations and runs it live on your microphone.": "<b>لماذا «A»؟</b> أذناك أقل حساسية للأصوات الجهيرة العميقة والأصوات الحادة جدًا. ويرشّح الترجيح A إشارة الميكروفون بالطريقة نفسها، فيخفض الترددات المنخفضة والعالية جدًا، ليتوافق الرقم مع ما يضر السمع فعلًا. تبني هذه الصفحة هذا المرشح من معادلات المعيار وتشغّله مباشرة على ميكروفونك.",
    "<b>An estimate, not a certified meter.</b> Phone mics are tuned for speech and may clip above about 100 dB. Use it to compare and to spot patterns. For a formal noise complaint, the times and patterns in your log help, but your building management or municipality may want their own measurement. If your ears ring or sound muffled after noise, give them a rest, and see a doctor if it doesn't clear within a day or two.": "<b>تقدير، وليس جهازًا معتمدًا.</b> ميكروفونات الهواتف مضبوطة للكلام وقد تتشبّع فوق نحو 100 dB. استخدمه للمقارنة ولملاحظة الأنماط. وفي الشكاوى الرسمية من الإزعاج تفيد الأوقات والأنماط في سجلك، لكن قد تطلب إدارة المبنى أو البلدية قياسها الخاص. وإن شعرت بطنين أو كتمة في أذنيك بعد الضجيج، فأرحهما، وراجع الطبيب إن لم يزل ذلك خلال يوم أو يومين.",
    "Quiet bedroom at night": "غرفة نوم هادئة ليلًا",
    "Library": "مكتبة",
    "Office or a normal chat": "مكتب أو حديث عادي",
    "Busy restaurant": "مطعم مزدحم",
    "City traffic, inside a taxi with the window down": "زحام المدينة، داخل سيارة أجرة والنافذة مفتوحة",
    "Hair dryer, blender": "مجفف شعر، خلاط",
    "Gym class with music": "حصة رياضية مع موسيقى",
    "Cinema, loud action scene": "سينما، مشهد أكشن صاخب",
    "Headphones at full volume": "سماعات بأعلى صوت",
    "Concert or nightclub": "حفل موسيقي أو ملهى",
    "Fireworks at close range": "ألعاب نارية عن قرب",
    "no limit": "بلا حد",
    "Safe for any length of time.": "آمن لأي مدة.",
    "Safe all day, but tiring over long periods.": "آمن طوال اليوم، لكنه مُتعب على المدى الطويل.",
    "Paused. Press start to listen again.": "متوقف مؤقتًا. اضغط «ابدأ» للاستماع مجددًا.",
    "This browser cannot use the microphone.": "لا يستطيع هذا المتصفح استخدام الميكروفون.",
    "Asking for the microphone…": "جارٍ طلب إذن الميكروفون…",
    "Microphone access was blocked. Allow it in your browser settings.": "تم حظر الوصول إلى الميكروفون. اسمح به من إعدادات المتصفح.",
    "Could not open the microphone.": "تعذّر فتح الميكروفون.",
    "The last minute of sound appears here": "يظهر هنا الصوت خلال الدقيقة الأخيرة",
    "Loud moments will be listed here while the meter is running.": "ستظهر لحظات الضجيج هنا أثناء تشغيل المقياس."
  }, [
    [/^([+-]?\d+) dB$/, '$1 dB'],
    [/^(\d+) dB\(A\)$/, '$1 dB(A)'],
    [/^([\d.]+ h|\d+ min|[\d.]+ s)$/, function (m) { return dur(m); }],
    [/^Safe for about (.+) a day at this level\.$/, function (m, d) { return 'آمن لنحو ' + dur(d) + ' يوميًا عند هذا المستوى.'; }],
    [/^(\d+) limit for 8 h$/, '$1 الحد لمدة 8 ساعات'],
    [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d\d:\d\d:\d\d)$/, function (m, d, mo, t) { return d + ' ' + MO[mo] + ' ' + t; }],
    [/^Clear all (\d+) logged events\?$/, 'هل تريد مسح كل الأحداث المسجلة وعددها $1؟']
  ]);
  // the empty graph is drawn before this dictionary loads
  window.dispatchEvent(new Event('resize'));
})();
