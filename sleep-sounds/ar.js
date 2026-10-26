(function () {
  var PRE = { 'Rainy night': 'ليلة ماطرة', 'Beach camp': 'تخييم على الشاطئ', 'Desert night': 'ليلة في الصحراء', 'Bedroom fan': 'مروحة غرفة النوم', 'Just noise': 'ضجيج فقط', 'Storm at sea': 'عاصفة في البحر' };
  var d = {
    "Sleep sounds mixer.": "مازج أصوات النوم.",
    "Sleep Sounds Mixer": "مازج أصوات النوم",
    "Tool · Sound · Sleep": "أداة · الصوت · النوم",
    "Build your own background for sleeping, napping or calming down: rain on the window, waves, a desert night with wind and crickets, a fan, a campfire. None of it is recorded. Every sound is generated live by your browser, so it never loops, and the sleep timer fades it out slowly instead of cutting off.":
      "اصنع خلفيتك الصوتية للنوم أو القيلولة أو الاسترخاء: مطر على النافذة، وأمواج، وليلة صحراوية فيها ريح وصراصير، ومروحة، ونار مخيّم. لا شيء منها مسجَّل. كل صوت يولّده متصفحك مباشرة، فلا يتكرّر أبدًا، ومؤقّت النوم يخفضه ببطء بدلًا من أن يقطعه فجأة.",
    "Play": "تشغيل",
    "Master volume": "مستوى الصوت العام",
    "Sleep timer": "مؤقّت النوم",
    "Sleep timer:": "مؤقّت النوم:",
    "Ready-made mixes": "مزائج جاهزة",
    "Your mixes (this device)": "مزائجك (هذا الجهاز)",
    "Name this mix": "سمِّ هذا المزيج",
    "Mix name": "اسم المزيج",
    "Save mix": "احفظ المزيج",
    "<b>How the sounds are made.</b> Almost everything starts as noise: random numbers played as sound. White noise has equal energy at every pitch and sounds like hiss. Filtering it so lower pitches are louder gives pink noise (steady rain) and brown noise (a deep rumble, like distant surf). Waves are brown noise that swells and fades every 6 to 12 seconds. Crickets are a 4,500 Hz tone switched on and off in quick pulses, the way a real cricket scrapes its wings. Campfire crackles are tiny random bursts of filtered noise, a few milliseconds long.":
      "<b>كيف تُصنع الأصوات.</b> كل شيء تقريبًا يبدأ ضجيجًا: أرقامًا عشوائية تُشغَّل صوتًا. الضجيج الأبيض طاقته متساوية في كل النغمات ويبدو كالصفير. وترشيحه بحيث تعلو النغمات المنخفضة يعطي الضجيج الوردي (مطر ثابت) والضجيج البني (هدير عميق، كأمواج بعيدة). الأمواج ضجيج بني يعلو ويخفت كل 6 إلى 12 ثانية. والصراصير نغمة بتردد 4,500 Hz تُشغَّل وتُطفأ بنبضات سريعة، كما يحكّ الصرصار الحقيقي جناحيه. وطقطقة نار المخيّم دفعات عشوائية صغيرة من الضجيج المرشَّح، طول كل منها بضعة أجزاء من الألف من الثانية.",
    "<b>Tips.</b> Keep the volume low: about the level of a quiet conversation is plenty, and well under the 60% mark on most phones. Some phones pause web audio when the screen locks. If that happens, leave the screen on at the lowest brightness, or plug in. Sound for sleep helps many people, but if you often can't sleep, talk to a doctor.":
      "<b>نصائح.</b> أبقِ الصوت منخفضًا: مستوى محادثة هادئة يكفي، وهو أقل بكثير من علامة 60% في معظم الهواتف. بعض الهواتف توقف صوت الويب عند قفل الشاشة. إن حدث ذلك فاترك الشاشة مضاءة بأدنى سطوع، أو صِل الشاحن. الأصوات تساعد كثيرين على النوم، لكن إن كنت كثيرًا ما تعجز عن النوم فتحدّث إلى طبيب.",
    "Rain": "المطر", "On a window, with drops": "على النافذة، مع قطرات",
    "Sea waves": "أمواج البحر", "Slow swells on a beach": "أمواج هادئة على الشاطئ",
    "Desert wind": "رياح الصحراء", "Gusts over open sand": "هبّات فوق رمال مفتوحة",
    "Fan": "مروحة", "Steady whirr, low hum": "أزيز ثابت وطنين منخفض",
    "Campfire": "نار المخيّم", "Crackles and pops": "طقطقة وفرقعة",
    "Crickets": "الصراصير", "A summer night chorus": "جوقة ليلة صيفية",
    "Brown noise": "ضجيج بني", "Deep and soft": "عميق وناعم",
    "Pink noise": "ضجيج وردي", "Even, like steady rain": "متوازن، كمطر ثابت",
    "Distant thunder": "رعد بعيد", "A far-off rumble now and then": "هدير بعيد بين حين وآخر",
    "off": "متوقف",
    "1 h": "ساعة", "1.5 h": "ساعة ونصف", "2 h": "ساعتان",
    "No timer": "بلا مؤقّت",
    "This browser has no Web Audio support.": "هذا المتصفح لا يدعم Web Audio.",
    "Turn up a sound below, or pick a ready-made mix.": "ارفع أحد الأصوات أدناه، أو اختر مزيجًا جاهزًا.",
    "Sleep timer finished. Good night.": "انتهى مؤقّت النوم. تصبح على خير.",
    "Set the sliders how you like, name it and save.": "اضبط المنزلقات كما تحب، ثم سمِّ المزيج واحفظه.",
    "Turn up at least one sound first.": "ارفع صوتًا واحدًا على الأقل أولًا."
  };
  for (var k in PRE) { d[k] = PRE[k]; d[k + '.'] = PRE[k] + '.'; }
  LabAr.add(d, [
    [/^(\d+:\d\d(?::\d\d)?) · fading$/, '$1 · يخفت تدريجيًا'],
    [/^Delete (.+)$/, 'حذف $1'],
    [/^Saved "(.+)"\.$/, 'تم حفظ «$1».'],
    [/^Mix (\d+)\.?$/, function (m, n) { return 'مزيج ' + n + (/\.$/.test(m) ? '.' : ''); }]
  ]);
  // "Play" and "Pause" are swapped on the same button; "Pause" comes from the shared dictionary
})();
