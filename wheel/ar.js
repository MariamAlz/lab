LabAr.add({
  'Random Wheel': 'عجلة الاختيار العشوائي',
  'Tool · Just for fun': 'أداة · للتسلية',
  'Random wheel.': 'عجلة الاختيار العشوائي.',
  "Can't decide? Type the options, one per line, and spin. The pick is made with the browser's secure random source before the wheel even starts turning, so every option gets a truly fair chance.":
    'محتار؟ اكتب الخيارات، خيارًا في كل سطر، ثم أدر العجلة. يتم الاختيار بمصدر العشوائية الآمن في المتصفح قبل أن تبدأ العجلة بالدوران، فيحصل كل خيار على فرصة عادلة فعلًا.',
  'SPIN': 'أدر',
  'Spin': 'أدر العجلة',
  'Spin the wheel': 'أدر العجلة',
  'Remove it and spin again': 'احذفه وأدر مجددًا',
  'Quick lists': 'قوائم سريعة',
  'Yes or no': 'نعم أو لا',
  'Coin': 'عملة',
  'Dice': 'نرد',
  '1 to 10': 'من 1 إلى 10',
  'Day of the week': 'يوم من الأسبوع',
  'Options, one per line': 'الخيارات، خيار في كل سطر',
  'Give an option more chances by ending it with <b>*3</b> (three times as likely). Arabic works too.':
    'امنح خيارًا فرصًا أكثر بإضافة <b>*3</b> في نهايته (احتمال أكبر بثلاث مرات). العربية مدعومة أيضًا.',
  'Shuffle': 'خلط',
  'Sort A–Z': 'ترتيب أبجدي',
  'Copy share link': 'نسخ رابط المشاركة',
  'Link copied': 'تم نسخ الرابط',
  'Link is in the address bar': 'الرابط في شريط العنوان',
  'Take the winner off the wheel automatically': 'احذف الخيار الفائز من العجلة تلقائيًا',
  'Ticking sound': 'صوت التكتكة',
  'Last picks': 'آخر الاختيارات',
  'none yet': 'لا شيء بعد',
  "A real wheel's fairness depends on the spin. This one decides first and then animates to the answer, so a stronger flick can't sway it. The share link puts your list in the address, not on any server.":
    'عدالة العجلة الحقيقية تعتمد على قوة الدفع. أما هذه فتقرر النتيجة أولًا ثم تتحرك نحوها، فلا تؤثر فيها دفعة أقوى. ورابط المشاركة يضع قائمتك في العنوان نفسه، لا على أي خادم.',
  'Add at least two options': 'أضف خيارين على الأقل',
  'Spinning…': 'العجلة تدور…',
  'The wheel says': 'العجلة تقول'
}, [
  [/^1 option$/, 'خيار واحد'],
  [/^2 options$/, 'خياران'],
  [/^(\d+) options$/, function (m, n) { return n + (+n <= 10 ? ' خيارات' : ' خيارًا'); }]
]);
(function () { var c = document.getElementById('cv'); if (c) c.setAttribute('aria-label', 'أدر العجلة'); })();
