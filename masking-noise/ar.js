(function () {
  var DESC = {
    'Your room is mostly low rumble, typical of AC units and traffic.': 'غرفتك يغلب عليها هدير منخفض، كما هو معتاد مع المكيّفات وحركة المرور.',
    'Your room has a lot of hiss, like fans or vents.': 'في غرفتك صفير كثير، مثل المراوح أو فتحات التهوية.',
    'Your room has a fairly even mix of hum and hiss.': 'في غرفتك مزيج متوازن تقريبًا من الطنين والصفير.'
  };
  var d = {
    "Noise that matches your room.": "ضجيج يطابق غرفتك.",
    "Noise That Matches Your Room": "ضجيج يطابق غرفتك",
    "Tool · Sound · Sleep · Focus": "أداة · الصوت · النوم · التركيز",
    "White noise apps play the same hiss everywhere. This listens to your room for a few seconds, the AC, the traffic on Sheikh Zayed Road, the neighbour's TV, then plays soft noise with the same shape. Sudden sounds stand out less against it, so they wake you or distract you less. Nothing is recorded or sent anywhere.":
      "تطبيقات الضجيج الأبيض تشغّل الصفير نفسه في كل مكان. أما هذه الأداة فتستمع إلى غرفتك بضع ثوانٍ: المكيّف، وحركة المرور في شارع الشيخ زايد، وتلفاز الجيران، ثم تشغّل ضجيجًا ناعمًا بالشكل نفسه. فتبرز الأصوات المفاجئة أقل، وتوقظك أو تشتّتك أقل. لا يُسجَّل شيء ولا يُرسل إلى أي مكان.",
    "Room spectrum and masking noise shape": "طيف الغرفة وشكل ضجيج الإخفاء",
    "Your room (measured)": "غرفتك (مقيسة)",
    "Masking noise (A)": "ضجيج الإخفاء (A)",
    "Plain noise (B)": "ضجيج عادي (B)",
    "1 · Listen to the room": "1 · استمع إلى الغرفة",
    "Keep the room as it normally is, with the AC on, and stay quiet. Put your phone or laptop where you'll be sitting or sleeping.": "اترك الغرفة على حالها المعتادة والمكيّف يعمل، والزم الهدوء. ضع هاتفك أو حاسوبك حيث ستجلس أو تنام.",
    "Listen for": "استمع لمدة",
    "2 · Play": "2 · التشغيل",
    "▶ Play": "▶ تشغيل",
    "■ Stop": "■ إيقاف",
    "Which noise": "أي ضجيج",
    "A · Matched": "A · مطابق",
    "B · Plain pink": "B · وردي عادي",
    "Cover strength": "قوة الإخفاء",
    "Tone, darker ↔ brighter": "النبرة، أعمق ↔ أسطع",
    "How closely to match": "درجة المطابقة",
    "Sleep timer": "مؤقّت النوم",
    "1 hour": "ساعة واحدة",
    "8 hours": "8 ساعات",
    "Masking works because your ear notices change, not level. A door closing or a motorbike stands out against silence but blends into a steady sound that already covers the same pitches. Noise shaped like the room fills the gaps between the AC's hum and hiss without needing to be loud. Start low and raise it only until the sounds that bother you stop popping out.":
      "ينجح الإخفاء لأن أذنك تلاحظ التغيّر لا مستوى الصوت. فإغلاق باب أو مرور دراجة نارية يبرز في الصمت، لكنه يذوب في صوت ثابت يغطي النغمات نفسها أصلًا. والضجيج المشكَّل على هيئة الغرفة يملأ الفجوات بين طنين المكيّف وصفيره دون أن يكون عاليًا. ابدأ بصوت منخفض وارفعه فقط حتى تكفّ الأصوات المزعجة عن البروز.",
    "How it's made: the microphone signal is split into 2,048 frequency bins about 20 times a second for the time you choose, and the power in each is averaged. Those are grouped into 16 half-octave bands. White noise is then passed through 16 equaliser filters set to those band levels, plus a gentle downward slope so it never sounds harsh. The audio stays in memory and the microphone is switched off right after. Only the 16 band levels are kept, in this browser, so the shape is ready next time. Keep it at a comfortable volume, and for babies keep the speaker across the room and quiet.":
      "طريقة الصنع: تُقسَّم إشارة الميكروفون إلى 2,048 خانة ترددية نحو 20 مرة في الثانية طوال المدة التي تختارها، ويُحسب متوسط القدرة في كل خانة. ثم تُجمع في 16 نطاقًا بعرض نصف أوكتاف. بعدها يمرّ الضجيج الأبيض عبر 16 مرشّح معادلة مضبوطة على مستويات تلك النطاقات، مع انحدار خفيف نحو الأسفل كي لا يبدو حادًا أبدًا. يبقى الصوت في الذاكرة ويُطفأ الميكروفون فورًا بعد ذلك. لا يُحفظ سوى مستويات النطاقات الـ16، في هذا المتصفح، ليكون الشكل جاهزًا في المرة القادمة. أبقِ الصوت عند مستوى مريح، وللرضّع ضع السمّاعة في الطرف الآخر من الغرفة بصوت منخفض.",
    "Playing noise matched to your room.": "يُشغَّل ضجيج مطابق لغرفتك.",
    "Playing a typical air-conditioned room shape. Listen to your room first for a closer match.": "يُشغَّل شكل غرفة مكيّفة نموذجية. استمع إلى غرفتك أولًا لمطابقة أدق.",
    "Stopped.": "توقّف.",
    "Timer finished. Faded out.": "انتهى المؤقّت. خفت الصوت تدريجيًا.",
    "This browser can't use the microphone here. You can still play the typical room shape.": "لا يستطيع هذا المتصفح استخدام الميكروفون هنا. ما زال بإمكانك تشغيل شكل الغرفة النموذجية.",
    "Asking for the microphone…": "جارٍ طلب الإذن باستخدام الميكروفون…",
    "Listening… stay quiet.": "جارٍ الاستماع… الزم الهدوء.",
    "The microphone gave no sound. Check it isn't muted and try again.": "لم يلتقط الميكروفون أي صوت. تأكّد أنه غير مكتوم وحاول مرة أخرى.",
    "Microphone access was blocked. You can still play the typical room shape, or allow the mic and try again.": "تم حظر الوصول إلى الميكروفون. ما زال بإمكانك تشغيل شكل الغرفة النموذجية، أو اسمح بالميكروفون وحاول مرة أخرى.",
    "dB, relative": "\u2067dB، نسبي\u2069",
    "typical AC room (not measured yet)": "غرفة مكيّفة نموذجية (لم تُقَس بعد)"
  };
  for (var k in DESC) d[k] = DESC[k];
  function ds(s) { return DESC[s] || s; }
  LabAr.add(d, [
    [/^(\d+) s$/, '$1 ث'],
    [/^\d+(?:\.\d+)?k$/, function (m) { return m; }],
    [/^([+-]?[\d.]+) dB\/oct$/, '\u2066$1 dB\u2069 لكل أوكتاف'],
    [/^stops in (\d+:\d\d)$/, 'يتوقف بعد $1'],
    [/^Done\. Microphone off, nothing saved but the 16 band levels\. (.+?)( The room is very quiet, so the match is rough\.)?$/, function (m, a, q) { return 'تم. أُطفئ الميكروفون، ولم يُحفظ سوى مستويات النطاقات الـ16. ' + ds(a) + (q ? ' الغرفة هادئة جدًا، لذا المطابقة تقريبية.' : ''); }],
    [/^Using your last room measurement\. (.+)$/, function (m, a) { return 'نستخدم آخر قياس لغرفتك. ' + ds(a); }]
  ]);
  // the chart is first drawn before this dictionary arrives; redraw it once everything is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { dispatchEvent(new Event('resize')); });
})();
