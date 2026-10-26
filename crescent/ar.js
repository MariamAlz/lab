(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var PL = { 'Abu Dhabi': 'أبوظبي', 'Dubai': 'دبي', 'Al Ain': 'العين', 'Fujairah': 'الفجيرة', 'Liwa': 'ليوا', 'Makkah': 'مكة المكرمة', 'your location': 'موقعك' };
  var DT = '(\\w{3},? \\d{1,2} \\w{3})';
  function D(s) { var m = s.match(/^(\w{3}),? (\d{1,2}) (\w{3})$/); return m ? (WD[m[1]] || m[1]) + ' ' + m[2] + ' ' + (MON[m[3]] || m[3]) : s; }
  function P(n) { return PL[n] || n; }
  var WHY = { 'Moon sets before the Sun': 'يغرب القمر قبل الشمس', "New moon hasn't happened yet at sunset": 'لم يحدث الاقتران بعد عند الغروب' };
  var TON = { 'naked eye': 'يُرى بالعين المجردة', 'optical aid only': 'يُرى بالأجهزة البصرية فقط', 'optical aid, maybe naked eye': 'يُرى بالأجهزة البصرية، وربما بالعين المجردة', 'not visible': 'لا يُرى', 'too early': 'مبكر جدًا', 'not possible': 'غير ممكن' };
  var d = {
    "Will the crescent be seen tonight?": "هل سيُرى الهلال الليلة؟",
    "Crescent Tonight": "الهلال الليلة",
    "Tool · Space · Moon · Hijri": "أداة · الفضاء · القمر · التقويم الهجري",
    "Each Hijri month starts with the first thin crescent after the new moon. Whether it can be seen depends on how far it is from the Sun, how long it stays up after sunset, and how thick it is. This works out those numbers for the evenings around each new moon and applies a published visibility rule, so you know which evening is worth going out to look.":
      "يبدأ كل شهر هجري بأول هلال رفيع بعد الاقتران. وتعتمد إمكانية رؤيته على بُعده عن الشمس، ومدة مكثه بعد الغروب، وسُمكه. تحسب هذه الأداة تلك الأرقام للأمسيات المحيطة بكل اقتران وتطبّق معيارًا منشورًا لرؤية الهلال، لتعرف أي مساء يستحق الخروج للتحرّي.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Working it out…": "جارٍ الحساب…",
    "The western sky at the best time to look": "السماء الغربية في أفضل وقت للتحرّي",
    "Western horizon after sunset with the Moon's position": "الأفق الغربي بعد الغروب مع موقع القمر",
    "Naked eye": "بالعين المجردة",
    "Optical aid, maybe naked eye": "بالأجهزة البصرية، وربما بالعين المجردة",
    "Optical aid only": "بالأجهزة البصرية فقط",
    "Not visible": "لا يُرى",
    "Too early": "مبكر جدًا",
    "Not possible": "غير ممكن",
    "What the numbers mean": "معنى الأرقام",
    "Age": "العمر",
    "Hours since the new moon (conjunction), when the Moon passes the Sun. A young Moon is thin and close to the Sun.": "عدد الساعات منذ الاقتران، حين يمرّ القمر بمحاذاة الشمس. القمر الحديث رفيع وقريب من الشمس.",
    "Lag": "المكث",
    "Minutes between sunset and moonset. More time means a darker sky while the Moon is still up.": "الدقائق بين غروب الشمس وغروب القمر. كلما طالت كانت السماء أشدّ ظلمة والقمر لا يزال فوق الأفق.",
    "How much higher the Moon is than the Sun, in degrees.": "قوس الرؤية: كم يرتفع القمر عن الشمس، بالدرجات.",
    "The angle between the Moon and the Sun (elongation). Below about 7° no crescent forms that anyone has seen.": "قوس الضوء: الزاوية بين القمر والشمس (الاستطالة). دون 7° تقريبًا لا يتكوّن هلال رآه أحد قط.",
    "The crescent's width in arcminutes. Even a good crescent is only about 0.5′ thick, less than a sixtieth of the Moon's width.": "عرض الهلال بالدقائق القوسية. حتى الهلال الجيد لا يتجاوز سُمكه نحو ‎0.5′‎، أي أقل من جزء من ستين من عرض القمر.",
    "The verdict uses <b>Odeh's criterion (2004)</b>, fitted to 737 real sighting reports. It compares ARCV with the width W at the \"best time\", which is sunset plus four ninths of the lag: V = ARCV − (−0.1018W³ + 0.7319W² − 6.3226W + 7.1651). V ≥ 5.65 means naked eye, 2 to 5.65 optical aid and maybe naked eye, −0.96 to 2 optical aid only, below −0.96 not visible. The older <b>Yallop q</b> value is shown for comparison.":
      "يعتمد الحكم على <b>معيار عودة (2004)</b>، المبني على 737 تقريرًا حقيقيًا لرؤية الهلال. يقارن قوس الرؤية ARCV بعرض الهلال W في «أفضل وقت»، وهو وقت الغروب مضافًا إليه أربعة أتساع المكث: <span class=\"ltr\" style=\"display:block;text-align:left;margin:4px 0\">V = ARCV − (−0.1018W³ + 0.7319W² − 6.3226W + 7.1651)</span>إذا كانت V ≥ 5.65 يُرى بالعين المجردة، ومن 2 إلى 5.65 بالأجهزة البصرية وربما بالعين المجردة، ومن −0.96 إلى 2 بالأجهزة البصرية فقط، وأقل من −0.96 لا يُرى. وتُعرض قيمة <b>q ليالوب</b> الأقدم للمقارنة.",
    "Calculation vs sighting": "الحساب والرؤية",
    "A calculation can say whether a crescent is <i>possible</i> to see. It can't promise someone will see it. Dust, haze and city lights near the horizon, the observer's eyesight and simply knowing where to look all matter. In the UAE, summer haze often hides crescents that the numbers say should be visible.":
      "يستطيع الحساب أن يقول إن كانت رؤية الهلال <i>ممكنة</i>، لكنه لا يضمن أن يراه أحد. فالغبار والضباب وأضواء المدن قرب الأفق، وحدّة بصر الراصد، ومعرفة أين ينظر، كلها عوامل مؤثرة. وفي الإمارات كثيرًا ما يحجب ضباب الصيف أهلّة تقول الأرقام إنها يجب أن تُرى.",
    "That's why months are announced in different ways. Many authorities, including in the UAE, still wait for a confirmed sighting by a moon-sighting committee, and use calculations to judge whether a reported sighting is believable. The Umm al-Qura calendar used for labels on this page is calculated in advance: a month starts when the Moon sets after the Sun in Makkah on the evening after the new moon, whether or not a crescent can be seen.":
      "لهذا تُعلَن بدايات الشهور بطرق مختلفة. فكثير من الجهات، ومنها في الإمارات، لا تزال تنتظر رؤية مؤكدة من لجنة تحرّي الأهلّة، وتستعمل الحساب للحكم على مدى قبول الرؤية المُبلَّغ عنها. أما تقويم أم القرى المستخدم في تسميات هذه الصفحة فيُحسب مسبقًا: يبدأ الشهر إذا غرب القمر بعد الشمس في مكة المكرمة مساء يوم الاقتران، سواء أمكنت رؤية الهلال أم لا.",
    "How it's calculated": "طريقة الحساب",
    "Sun and Moon positions use a low-precision orbit model (good to a couple of arcminutes), corrected for where you stand on Earth: the Moon is close enough that it looks about one degree lower from the ground than from Earth's centre. Sunset and moonset include normal refraction. Altitudes in the criteria are \"airless\", as the criteria require. Times are UAE time (Makkah time for Makkah, your device's time zone for your own location).":
      "تُحسب مواقع الشمس والقمر بنموذج مداري منخفض الدقة (بخطأ لا يتجاوز دقيقتين قوسيتين تقريبًا)، مع تصحيح لموقعك على سطح الأرض: فالقمر قريب بما يكفي ليبدو من سطح الأرض أخفض بنحو درجة واحدة مما يبدو من مركزها. ويشمل حساب غروب الشمس والقمر الانكسار الجوي المعتاد. أما الارتفاعات في المعايير فمحسوبة «من دون غلاف جوي» كما تشترط المعايير. الأوقات بتوقيت الإمارات (وبتوقيت مكة المكرمة لمكة، وبالمنطقة الزمنية لجهازك عند استخدام موقعك).",
    "This is an estimate for planning, not a ruling. For the official start of a month, follow the announcement from the relevant authority.": "هذا تقدير للتخطيط وليس حكمًا شرعيًا. لمعرفة البداية الرسمية للشهر، اتبع إعلان الجهة المختصة.",
    "Not a crescent-hunting evening": "ليست ليلة لتحرّي الهلال",
    "Moon age": "عمر القمر",
    "Moon alt. at sunset": "ارتفاع القمر عند الغروب",
    "Sunset · moonset": "غروب الشمس · غروب القمر",
    "Best time": "أفضل وقت",
    "ARCL · ARCV": "ARCL · ARCV",
    "Width W": "العرض W",
    "Odeh V": "قيمة V (عودة)",
    "Yallop q": "قيمة q (يالوب)",
    "S": "جنوب", "SW": "جنوب غرب", "W": "غرب", "NW": "شمال غرب",
    "ARCV": "ARCV", "ARCL": "ARCL",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a place instead.": "لم تتم مشاركة الموقع. اختر مكانًا بدلًا من ذلك.",
    "Liwa": "ليوا",
    "Makkah": "مكة المكرمة"
  };
  for (var w in WHY) d[w] = WHY[w];
  LabAr.add(d, [
    [new RegExp('^Evening of ' + DT + '$'), function (m, x) { return 'مساء ' + D(x); }],
    [/^Tonight: (.+)$/, function (m, w) { return 'الليلة: ' + (TON[w] || w); }],
    [/^(-?[\d.]+) h$/, '$1 ساعة'],
    [/^(\d+) min$/, '$1 دقيقة'],
    [/^(-?[\d.]+) \(([A-F])\)$/, '$1 ($2)'],
    [new RegExp('^(.+) · ' + DT + '$'), function (m, n, x) { return P(n) + ' · ' + D(x); }],
    [/^(.+) · (-?[\d.]+)°N, (-?[\d.]+)°E$/, function (m, n, a, b) { return P(n) + ' · ' + a + '° شمالًا، ' + b + '° شرقًا'; }],
    [/^At (.+?) the Moon is (-?[\d.]+) hours old at sunset \((\d\d:\d\d)\)(?: and sets (\d+) minutes after the Sun\.|\. (.*?)\.) Tap any evening below to see where to look\.$/, function (m, n, a, t, lag, why) {
      return 'في ' + P(n) + ' يبلغ عمر القمر ' + a + ' ساعة عند الغروب (' + t + ')' + (lag ? '، ويغرب بعد الشمس بـ ' + lag + ' دقيقة.' : '. ' + (WHY[why] || why) + '.') + ' اضغط أي مساء أدناه لترى أين تنظر.'; }],
    [new RegExp('^The Moon is (?:(\\d+) days past new|(nowhere near new)), so it\'s easy to see if it\'s up\\. The next new moon is ' + DT + ' at (\\d\\d:\\d\\d)\\. The evenings that matter are listed below\\.$'), function (m, n, far, x, t) {
      return (far ? 'القمر بعيد عن الاقتران' : 'مضى على الاقتران ' + n + ' يوم') + '، لذا تسهل رؤيته إن كان فوق الأفق. الاقتران القادم ' + D(x) + ' الساعة ' + t + '. الأمسيات المهمة مدرجة أدناه.'; }],
    [new RegExp('^New moon ' + DT + ' at (\\d\\d:\\d\\d)(?: · Umm al-Qura calendar starts the month on ' + DT + ')?$'), function (m, x, t, y) {
      return 'الاقتران ' + D(x) + ' الساعة ' + t + (y ? ' · يبدأ تقويم أم القرى الشهر يوم ' + D(y) : ''); }],
    [new RegExp('^Evening of ' + DT + ' at (\\d\\d:\\d\\d)(?: \\(best time\\)\\. The Moon is (-?[\\d.]+)° up, ([\\d.]+)° (left|right) of the Sun\'s position\\. The crescent is drawn much thicker than it really is\\.|\\. ?(.*))$'), function (m, x, t, alt, off, side, why) {
      if (alt == null) return 'مساء ' + D(x) + ' الساعة ' + t + '. ' + (WHY[why] || why || '');
      return 'مساء ' + D(x) + ' الساعة ' + t + ' (أفضل وقت). يرتفع القمر ' + alt + '°، وهو ' + off + '° ' + (side === 'left' ? 'إلى يسار' : 'إلى يمين') + ' موقع الشمس. الهلال مرسوم أسمك بكثير مما هو في الواقع.'; }]
  ]);
})();
// the sky picture is first drawn before this dictionary arrives; draw it again so its labels are Arabic
(function () {
  function redraw() { var b = document.querySelector('.eve[aria-pressed="true"]'); if (b) b.click(); }
  // the shared dictionary may load after this file and would win for this key; add it again once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { LabAr.add({ "Sun": "الشمس", "Moon": "القمر" }); redraw(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(redraw, 0); }); else setTimeout(redraw, 0);
})();
