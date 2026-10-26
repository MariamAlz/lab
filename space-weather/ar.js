(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var BASE = {
    "The Kp feed did not answer.": "لم تستجب تغذية مؤشر Kp.",
    "Earth's magnetic field is being shaken by the solar wind. Precise GPS and HF radio can be affected for hours.": "الرياح الشمسية تهزّ المجال المغناطيسي للأرض. قد يتأثر GPS الدقيق واتصالات الراديو HF لساعات.",
    "A little more activity than usual. Everyday GPS is fine.": "نشاط أعلى قليلًا من المعتاد. GPS اليومي يعمل جيدًا.",
    "Space weather is calm. Your phone's GPS should be as good as it gets.": "الطقس الفضائي هادئ. يُفترض أن يكون GPS هاتفك في أفضل حالاته."
  };
  var d = {
    "Space weather now.": "الطقس الفضائي الآن.",
    "Space Weather Now": "الطقس الفضائي الآن",
    "Space · GNSS · Signals · Live": "الفضاء · الملاحة بالأقمار الصناعية · الإشارات · مباشر",
    "The Sun constantly throws out light, particles and magnetic fields. When it gets stormy, the upper atmosphere is disturbed, and that can bend GPS signals, black out long-range radio and drag on satellites. This reads NOAA's live space weather data and explains what today's levels mean.":
      "تقذف الشمس باستمرار الضوء والجسيمات والمجالات المغناطيسية. وحين تضطرب، يختل الغلاف الجوي العلوي، فقد تنحرف إشارات GPS، وينقطع الراديو بعيد المدى، وتتباطأ الأقمار الصناعية بفعل الاحتكاك. تقرأ هذه الصفحة بيانات الطقس الفضائي الحية من NOAA وتشرح معنى مستويات اليوم.",
    "Kp index gauge": "مقياس مؤشر Kp",
    "What it means right now": "ماذا يعني ذلك الآن",
    "Geomagnetic activity · past day and next 3 days (Kp)": "النشاط المغناطيسي الأرضي · اليوم الماضي والأيام الثلاثة القادمة (Kp)",
    "Kp index bar chart": "مخطط أعمدة لمؤشر Kp",
    "Quiet (0–3)": "هادئ (0–3)", "Unsettled (4)": "مضطرب قليلًا (4)", "Minor storm G1 (5)": "عاصفة طفيفة G1 (5)", "Moderate or worse G2+ (6–9)": "متوسطة أو أشد G2+ (6–9)", "Forecast bars are paler": "أعمدة التوقعات أفتح لونًا",
    "Latest NOAA alerts": "أحدث تنبيهات NOAA",
    "<b>Why the UAE gets its own kind of GPS trouble.</b> The UAE sits under the northern edge of a band of extra-dense ionosphere that follows the magnetic equator. In the hours after sunset, especially in spring and autumn and in years near solar maximum, this layer can break into bubbles that make satellite signals twinkle, a bit like stars twinkling through hot air. Phones barely notice, but precise GPS used for surveying, farming, drones and aviation can lose accuracy, even on days when Kp is low.":
      "<b>لماذا تعاني الإمارات نوعًا خاصًا من مشكلات GPS.</b> تقع الإمارات تحت الحافة الشمالية لحزام من الأيونوسفير شديد الكثافة يمتد بمحاذاة خط الاستواء المغناطيسي. في الساعات التي تلي الغروب، خاصة في الربيع والخريف وفي السنوات القريبة من ذروة النشاط الشمسي، قد تتفكّك هذه الطبقة إلى فقاعات تجعل إشارات الأقمار الصناعية تتلألأ، كما تتلألأ النجوم عبر الهواء الساخن. الهواتف بالكاد تلاحظ ذلك، لكن GPS الدقيق المستخدم في المساحة والزراعة والطائرات المسيّرة والطيران قد يفقد دقته، حتى في أيام انخفاض Kp.",
    "<b>Kp</b> is a 0 to 9 score of how disturbed Earth's magnetic field is, updated every three hours from magnetometers around the world. NOAA turns Kp 5 to 9 into storm levels G1 to G5. <b>X-ray flares</b> (classes A, B, C, M, X, each ten times stronger than the last) affect the sunlit side of Earth within minutes and set the radio blackout level R1 to R5.":
      "<b>Kp</b> مقياس من 0 إلى 9 لمدى اضطراب المجال المغناطيسي للأرض، يُحدَّث كل ثلاث ساعات من أجهزة قياس المغناطيسية حول العالم. وتحوّل NOAA قيم Kp من 5 إلى 9 إلى مستويات عواصف من G1 إلى G5. أما <b>التوهّجات بالأشعة السينية</b> (الفئات A و B و C و M و X، كل منها أقوى بعشر مرات من سابقتها) فتؤثر في الجانب المضاء من الأرض خلال دقائق، وتحدد مستوى انقطاع الراديو من R1 إلى R5.",
    "This page is for general interest and learning. For aviation, marine or survey work, follow official NOTAMs, notices and your equipment's own integrity warnings. Data from NOAA's Space Weather Prediction Center, refreshed every ten minutes.":
      "هذه الصفحة للاطلاع والتعلّم. في أعمال الطيران أو الملاحة البحرية أو المساحة، اتبع إشعارات NOTAM والتنبيهات الرسمية وتحذيرات السلامة في أجهزتك. البيانات من مركز التنبؤ بالطقس الفضائي التابع لـ NOAA، وتُحدَّث كل عشر دقائق.",
    "Kp index now": "\u2067مؤشر Kp الآن\u2069",
    "No Kp data": "لا توجد بيانات Kp",
    "storm": "عاصفة",
    "UAE time · 3-hour blocks": "توقيت الإمارات · فترات من 3 ساعات",
    "solar wind speed": "سرعة الرياح الشمسية", "fast": "سريعة", "a bit fast": "سريعة قليلًا", "normal": "عادية",
    "magnetic field Bz": "المجال المغناطيسي Bz", "strongly south: storm fuel": "جنوبي بقوة: وقود للعاصفة", "southward": "نحو الجنوب", "calm": "هادئ",
    "X-rays now": "الأشعة السينية الآن",
    "Right now": "الآن",
    "No reading": "لا توجد قراءة", "Strong geomagnetic storm": "عاصفة مغناطيسية أرضية قوية", "Geomagnetic storm": "عاصفة مغناطيسية أرضية", "Unsettled": "مضطرب قليلًا", "Quiet": "هادئ",
    ", a storm watch.": "، أي ترقّب لعاصفة.",
    "GPS and positioning": "GPS وتحديد المواقع", "HF radio": "راديو HF", "Satellites": "الأقمار الصناعية",
    "Unknown": "غير معروف", "No Kp reading right now.": "لا توجد قراءة Kp الآن.",
    "Degraded": "متراجع",
    "Precise GPS (survey, farming, drones) may be off by metres or lose its fix. Phones and car navigation may wander a little more than usual. Aviation systems that use GPS corrections may flag warnings.": "قد يخطئ GPS الدقيق (المساحة، الزراعة، الطائرات المسيّرة) بأمتار أو يفقد تحديد الموقع. وقد تتذبذب الهواتف وملاحة السيارات أكثر قليلًا من المعتاد. وقد تُصدر أنظمة الطيران التي تعتمد تصحيحات GPS تحذيرات.",
    "Some errors possible": "أخطاء محتملة",
    "Phones are fine. High-precision users may see slower fixes and errors of tens of centimetres to a few metres, mostly after dark.": "الهواتف بخير. قد يلاحظ مستخدمو الدقة العالية بطئًا في تحديد الموقع وأخطاء من عشرات السنتيمترات إلى بضعة أمتار، غالبًا بعد حلول الظلام.",
    "Normal": "طبيعي",
    "No X-ray reading right now.": "لا توجد قراءة للأشعة السينية الآن.",
    "A strong flare is under way. Long-distance HF radio on the sunlit half of Earth can fade out for an hour or more. Ships and aircraft switch to satellite links.": "توهّج قوي جارٍ الآن. قد ينقطع راديو HF بعيد المدى في النصف المضاء من الأرض لساعة أو أكثر. وتتحوّل السفن والطائرات إلى الاتصالات عبر الأقمار الصناعية.",
    "A medium flare can weaken HF signals on the sunlit side for minutes to an hour. Radio amateurs notice; most people don't.": "قد يُضعف توهّج متوسط إشارات HF في الجانب المضاء من دقائق إلى ساعة. يلاحظ ذلك هواة الراديو، ولا يلاحظه معظم الناس.",
    "Patchy at night": "متقطّع ليلًا",
    "The storm can make HF paths noisy and unreliable, especially at night and on routes toward the poles.": "قد تجعل العاصفة مسارات HF مشوّشة وغير موثوقة، خاصة ليلًا وعلى المسارات المتجهة نحو القطبين.",
    "Long-distance HF radio conditions are normal.": "ظروف راديو HF بعيد المدى طبيعية.",
    "Under stress": "تحت الضغط",
    "Operators may see charging and glitches.": "قد يلاحظ المشغّلون تراكم شحنات وأعطالًا.",
    "Some effects": "بعض التأثيرات",
    "Low satellites feel a bit more drag. Satellite TV and internet should be fine.": "تتعرّض الأقمار المنخفضة لاحتكاك أكبر قليلًا. يُفترض أن يعمل تلفزيون الأقمار الصناعية والإنترنت بشكل جيد.",
    "Satellites, including the UAE's own Earth observation and communication satellites, are operating in calm conditions.": "الأقمار الصناعية، ومنها أقمار الإمارات لرصد الأرض والاتصالات، تعمل في ظروف هادئة.",
    "No recent alerts.": "لا توجد تنبيهات حديثة.",
    "Notice": "إشعار",
    "Reading NOAA space weather data…": "جارٍ قراءة بيانات الطقس الفضائي من NOAA…",
    "Couldn't reach NOAA's data service. Check your connection and try again shortly.": "تعذّر الوصول إلى خدمة بيانات NOAA. تحقّق من اتصالك وحاول بعد قليل.",
    "No data": "لا توجد بيانات"
  };
  for (var k in BASE) d[k] = BASE[k];
  var ALERT = { ALERT: 'تنبيه', WARNING: 'تحذير', WATCH: 'ترقّب', SUMMARY: 'ملخّص', 'EXTENDED WARNING': 'تحذير ممدَّد', 'CANCEL WATCH': 'إلغاء ترقّب', 'CANCEL WARNING': 'إلغاء تحذير', 'CANCEL ALERT': 'إلغاء تنبيه' };
  function alertBody(b) {
    var m;
    if ((m = b.match(/^Geomagnetic K-index of (\d+)( expected)?(?: \(G(\d) .*\))?$/))) return 'مؤشر K المغناطيسي الأرضي ' + m[1] + (m[2] ? ' متوقَّع' : '');
    if ((m = b.match(/^Geomagnetic Storm Category G(\d) Predicted$/))) return 'توقّع عاصفة مغناطيسية أرضية من الفئة G' + m[1];
    if ((m = b.match(/^X-[Rr]ay (?:Flux|Event) exceeded ([A-Z]\d+)$/))) return 'تجاوزت الأشعة السينية ' + m[1];
    if ((m = b.match(/^Geomagnetic Sudden Impulse( expected)?$/))) return 'نبضة مغناطيسية أرضية مفاجئة' + (m[1] ? ' متوقَّعة' : '');
    return null;
  }
  function DT(s) { var m = s.match(/^(\w{3}) (\d\d:\d\d)$/); if (m && WD[m[1]]) return WD[m[1]] + ' ' + m[2]; m = s.match(/^(\d{1,2}) (\w{3}), (\d\d:\d\d)$/); if (m && MON[m[2]]) return m[1] + ' ' + MON[m[2]] + '، ' + m[3]; return s; }
  LabAr.add(d, [
    [/^(\w{3}) (\d{1,2})$/, function (m, w, n) { return WD[w] ? WD[w] + ' ' + n : m; }],
    [/^((?:\w{3} \d\d:\d\d)|(?:\d{1,2} \w{3}, \d\d:\d\d)) UAE(?:: Kp ([\d.]+)( \(forecast\))?)?$/, function (m, t, kp, fc) { return DT(t) + ' بتوقيت الإمارات' + (kp ? ': Kp ' + kp + (fc ? ' (توقّع)' : '') : ''); }],
    [/^Right now · (\w{3} \d\d:\d\d) UAE$/, function (m, t) { return 'الآن · ' + DT(t) + ' بتوقيت الإمارات'; }],
    [/^-?[\d.]+ (?:km\/s|nT)$|^\+[\d.]+ nT$|^[ABCMX]\d+\.\d$/, function (m) { return m; }],
    [/^24 h peak ([ABCMX][\d.]+)$/, 'ذروة 24 ساعة: $1'],
    [/^(No reading|Strong geomagnetic storm|Geomagnetic storm|Unsettled|Quiet) \(G(\d)\)$/, function (m, w, g) { return d[w] + ' (G' + g + ')'; }],
    [/^(.+?)(?: Highest Kp forecast in the next 3 days:)$/, function (m, b) { return BASE[b] ? BASE[b] + ' أعلى قيمة متوقعة لـ Kp في الأيام الثلاثة القادمة:' : m; }],
    [/^Blackout on the day side \(R(\d)\)$/, 'انقطاع في الجانب المضاء (R$1)'],
    [/^Minor fade-outs \(R(\d)\)$/, 'خفوت طفيف (R$1)'],
    [/^X-rays are at ([ABCMX][\d.]+), no flare blackout\. (.+)$/, function (m, x, rest) { return 'الأشعة السينية عند ' + x + '، ولا انقطاع بسبب التوهّج. ' + (d[rest] || rest); }],
    [/^The heated upper atmosphere puffs up and drags on low satellites, nudging their orbits\. (.+)$/, function (m, rest) {
      var r = rest.match(/^There is also a solar radiation storm \(S(\d)\), which can upset electronics and raise doses on polar flights\.$/);
      return 'ينتفخ الغلاف الجوي العلوي المسخَّن ويزيد الاحتكاك على الأقمار المنخفضة، فيحرّك مداراتها قليلًا. ' + (r ? 'وهناك أيضًا عاصفة إشعاع شمسي (S' + r[1] + ') قد تربك الإلكترونيات وترفع جرعات الإشعاع في الرحلات القطبية.' : (d[rest] || rest)); }],
    [/^A minor solar radiation storm \(S1\) is in progress\. (.+)$/, function (m, rest) { return 'عاصفة إشعاع شمسي طفيفة (S1) جارية. ' + (d[rest] || rest); }],
    [/^Phones get the usual 3 to 5 metres outdoors\. Any error you see is far more likely to be tall buildings, a cheap antenna or interference than the Sun\.( Slightly unsettled conditions only matter for centimetre-level work\.)?$/, function (m, u) { return 'تحصل الهواتف على الدقة المعتادة من 3 إلى 5 أمتار في الأماكن المفتوحة. وأي خطأ تلاحظه سببه على الأرجح المباني العالية أو هوائي رديء أو تداخل، لا الشمس.' + (u ? ' الاضطراب الطفيف لا يهم إلا في الأعمال التي تتطلب دقة بالسنتيمتر.' : ''); }],
    [/^(EXTENDED WARNING|CANCEL \w+|ALERT|WARNING|WATCH|SUMMARY):? ?(.*)$/, function (m, k, b) { var t = alertBody(b); return t ? (ALERT[k] || k) + ': ' + t : m; }],
    [/^Updated (\d\d:\d\d)(\. Some feeds didn't answer, so parts may be missing\.|\.)$/, function (m, t, rest) { return 'آخر تحديث ' + t + (rest.length > 1 ? '. بعض التغذيات لم تستجب، لذا قد تنقص بعض الأجزاء.' : '.'); }]
  ]);
})();
