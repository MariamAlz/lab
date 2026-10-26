(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var DW = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var C = { N: 'شمال', NE: 'شمال شرق', E: 'شرق', SE: 'جنوب شرق', S: 'جنوب', SW: 'جنوب غرب', W: 'غرب', NW: 'شمال غرب' };
  function t12(s) { return s.replace(/(\d+):(\d\d)(am|pm)/g, function (m, h, mm, ap) { return h + ':' + mm + (ap === 'am' ? ' ص' : ' م'); }); }
  function legs(n) { n = +n; return n === 1 ? 'مقطع واحد' : n === 2 ? 'مقطعين' : n <= 10 ? n + ' مقاطع' : n + ' مقطعًا'; }
  LabAr.add({
    "Sun Glare on Your Drive": "وهج الشمس في طريقك",
    "Tool · Driving · Sun · UAE": "أداة · قيادة · الشمس · الإمارات",
    "Sun glare on your drive.": "وهج الشمس في طريقك.",
    "Some weeks of the year the sun sits low and dead ahead on your commute, and the visor can't help. Pick your route and your usual departure times. You'll see which months and times are worst, the next bad days, and the same for the drive home.": "في بعض أسابيع السنة تكون الشمس منخفضة وأمامك مباشرة في طريقك اليومي، ولا ينفع واقي الشمس. اختر طريقك ومواعيد انطلاقك المعتادة، وسترى أسوأ الأشهر والأوقات، والأيام السيئة القادمة، وكذلك لطريق العودة.",
    "Preset route": "طريق جاهز",
    "Undo point": "تراجع عن النقطة",
    "Or tap the map to place your start, any turns, then your destination.": "أو اضغط على الخريطة لتحديد نقطة البداية، ثم أي منعطفات، ثم وجهتك.",
    "Route map": "خريطة الطريق",
    "Zoom in": "تكبير", "Zoom out": "تصغير",
    "bad days there": "أيام سيئة في الذهاب",
    "bad days back": "أيام سيئة في العودة",
    "worst month": "أسوأ شهر",
    "Glare by month and time of day": "الوهج حسب الشهر ووقت اليوم",
    "There": "الذهاب",
    "Back": "العودة",
    "Heatmap of glare by month and time": "خريطة حرارية للوهج حسب الشهر والوقت",
    "No glare": "لا وهج",
    "Some of the route": "جزء من الطريق",
    "Much of the route": "جزء كبير من الطريق",
    "Most of the route": "معظم الطريق",
    "Your usual trips": "رحلاتك المعتادة",
    "Leave for the drive there at": "موعد الانطلاق ذهابًا",
    "Leave for the drive back at": "موعد الانطلاق عودةً",
    "Average speed (km/h)": "متوسط السرعة (km/h)",
    "Weekdays only (Mon to Fri)": "أيام العمل فقط (الاثنين إلى الجمعة)",
    "Next bad days · drive there": "الأيام السيئة القادمة · الذهاب",
    "Next bad days · drive back": "الأيام السيئة القادمة · العودة",
    "Glare here means the sun is less than 25° above the horizon and within 25° of the way you're facing. A car visor usually covers the sky above about 15 to 20°, so the worst glare is the lowest sun. In the UAE, roads running east and west get it in spring and autumn. Roads running southwest, like the E11 to Abu Dhabi, get it on winter afternoons.": "الوهج هنا يعني أن الشمس أقل من 25° فوق الأفق وفي حدود 25° من اتجاه سيرك. واقي الشمس في السيارة يغطي عادة السماء فوق 15 إلى 20° تقريبًا، لذا فأسوأ وهج يأتي من أخفض شمس. في الإمارات، تتعرض الطرق الممتدة شرقًا وغربًا للوهج في الربيع والخريف، أما الطرق المتجهة جنوبًا غربًا، مثل E11 إلى أبوظبي، فتتعرض له في عصر أيام الشتاء.",
    "This is approximate. Each leg is a straight line between the points you set, so curves, flyovers and buildings or trees that shade the road are ignored. Trip timing assumes a steady speed. Times are Gulf Standard Time. On a bad day, leaving 15 minutes earlier or later often fixes it, and sunglasses and a clean windscreen help a lot.": "هذه نتائج تقريبية. كل مقطع خط مستقيم بين النقاط التي حددتها، لذا لا تُحتسب المنعطفات والجسور والمباني أو الأشجار التي تظلل الطريق. ويفترض توقيت الرحلة سرعة ثابتة. الأوقات بتوقيت الخليج. في اليوم السيئ، كثيرًا ما يحل المشكلة أن تنطلق قبل الموعد أو بعده بـ15 دقيقة، كما تفيد النظارات الشمسية والزجاج الأمامي النظيف كثيرًا.",
    "Choose a UAE route…": "اختر طريقًا في الإمارات…",
    "E11 Dubai → Abu Dhabi (heading southwest)": "E11 دبي ← أبوظبي (باتجاه الجنوب الغربي)",
    "E11 Abu Dhabi → Dubai (heading northeast)": "E11 أبوظبي ← دبي (باتجاه الشمال الشرقي)",
    "E311 Dubai → Sharjah (heading northeast)": "E311 دبي ← الشارقة (باتجاه الشمال الشرقي)",
    "E66 Dubai → Al Ain (heading southeast)": "E66 دبي ← العين (باتجاه الجنوب الشرقي)",
    "E22 Abu Dhabi → Al Ain (heading east)": "E22 أبوظبي ← العين (باتجاه الشرق)",
    "E44 Dubai → Hatta (heading east)": "E44 دبي ← حتا (باتجاه الشرق)",
    "E88 Sharjah → Fujairah (heading east)": "E88 الشارقة ← الفجيرة (باتجاه الشرق)",
    "E11 Sharjah → Ras Al Khaimah (heading northeast)": "E11 الشارقة ← رأس الخيمة (باتجاه الشمال الشرقي)",
    "Sheikh Zayed Rd, Downtown → Marina (heading southwest)": "شارع الشيخ زايد، وسط المدينة ← المارينا (باتجاه الجنوب الغربي)",
    "Pick a route to see the map of glare.": "اختر طريقًا لترى خريطة الوهج.",
    "No bad days at this time in the next 12 months.": "لا أيام سيئة في هذا الوقت خلال الأشهر الـ12 القادمة.",
    "This direction rarely faces a low sun.": "نادرًا ما يواجه هذا الاتجاه شمسًا منخفضة.",
    "Start set. Tap where you're going.": "تم تحديد البداية. اضغط على وجهتك."
  }, [
    [/^(\d+)(a|p)$/, function (m, h, ap) { return h + (ap === 'a' ? 'ص' : 'م'); }],
    [/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),? (\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, function (m, w, d, mo) { return DW[w] + ' ' + d + ' ' + MO[mo]; }],
    [/^Sun ahead from (\S+) to (\S+), lowest (\d+)° around km (\d+)$/, function (m, a, b, l, k) { return 'الشمس أمامك من ' + t12(a) + ' إلى ' + t12(b) + '، وأخفض ارتفاع ' + l + '° عند الكيلومتر ' + k; }],
    [/^For this direction the worst glare is around (\S+) in (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.$/, function (m, t, mo) { return 'في هذا الاتجاه يكون أسوأ وهج نحو ' + t12(t) + ' في ' + MO[mo] + '.'; }],
    [/^(\d+) km in (\d+) legs?: (.+)$/, function (m, km, n, rest) { return km + ' km في ' + legs(n) + ': ' + rest.replace(/\b(NE|NW|SE|SW|N|E|S|W) (\d+)° · (\d+) km/g, function (x, c, b, k) { return C[c] + ' ' + b + '° · ' + k + ' km'; }).replace(/, /g, '، '); }],
    [/^Each row is a month, starting with this one\. Each column is 15 minutes\. The dashed line is your usual departure time for the drive (there|back)\.$/, function (m, w) { return 'كل صف شهر، بدءًا من الشهر الحالي، وكل عمود 15 دقيقة. الخط المتقطع هو موعد انطلاقك المعتاد في ' + (w === 'there' ? 'الذهاب' : 'العودة') + '.'; }],
    [/^.*[؀-ۿ⁦-⁩].*$/, '$&']
  ]);
  // the heatmap is drawn on the canvas before this file loads, so ask the page to redraw it
  function rd() { window.dispatchEvent(new Event('resize')); }
  if (document.readyState === 'complete') rd(); else window.addEventListener('load', rd);
})();
