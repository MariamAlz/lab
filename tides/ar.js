(function () {
  var t = function (s) { return LabAr.t(s); };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var DAY = '((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) \\d{1,2} \\w{3})';
  function day(s) { var m = s.match(/^(\w{3}) (\d{1,2}) (\w{3})$/); return m ? WD[m[1]] + ' ' + m[2] + ' ' + MO[m[3]] : s; }
  function when(s) { return s === 'today' ? 'اليوم' : s === 'tomorrow' ? 'غدًا' : 'يوم ' + day(s); }
  // keep signed numbers such as +0.45 m in one left-to-right piece
  function sig(v) { return '⁦' + v + '⁩'; }
  var PHASE = { 'New moon': 'محاق', 'Waxing crescent': 'هلال متزايد', 'First quarter': 'تربيع أول', 'Waxing gibbous': 'أحدب متزايد', 'Full moon': 'بدر', 'Waning gibbous': 'أحدب متناقص', 'Last quarter': 'تربيع أخير', 'Waning crescent': 'هلال متناقص' };
  var d = {
    "Tides Now": "المد والجزر الآن",
    "Tool · Earth · Sea · Live": "أداة · الأرض · البحر · مباشر",
    "Tides now.": "المد والجزر الآن.",
    "When is high tide at the Corniche, or low tide in the Kalba mangroves? Pick a spot on the UAE coast to see the sea level today and for the next three days, with the times of each high and low. Below, see how the Moon and Sun pull the sea, and why some weeks the tides are much bigger than others.": "متى يكون المد عند الكورنيش، أو الجزر في أشجار القرم بكلباء؟ اختر مكانًا على ساحل الإمارات لترى مستوى البحر اليوم وفي الأيام الثلاثة القادمة، مع أوقات كل مد وجزر. وفي الأسفل، شاهد كيف يجذب القمر والشمس البحر، ولماذا يكون المد في بعض الأسابيع أكبر بكثير من غيرها.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Dubai Creek": "خور دبي", "Abu Dhabi Corniche": "كورنيش أبوظبي", "Khor Kalba": "خور كلباء", "Umm Al Quwain lagoon": "بحيرة أم القيوين",
    "Sea level · today and the next 3 days (metres above mean sea level)": "مستوى البحر · اليوم والأيام الثلاثة القادمة (بالمتر فوق متوسط مستوى سطح البحر)",
    "Tide chart": "مخطط المد والجزر",
    "Why the sea goes up and down": "لماذا يرتفع البحر وينخفض",
    "Diagram of Earth, Moon and Sun with the ocean bulges": "رسم للأرض والقمر والشمس مع انتفاخات المحيط",
    "▶ Play the month": "▶ شغّل الشهر",
    "❚❚ Pause": "❚❚ إيقاف مؤقت",
    "Days from today": "الأيام من اليوم",
    "How it works": "كيف يعمل",
    "The Moon's gravity pulls hardest on the side of Earth facing it and weakest on the far side. That difference stretches the oceans into two bulges, one under the Moon and one opposite. Earth turns under both bulges every day, so most coasts get two highs and two lows, about 12 hours 25 minutes apart.": "تكون جاذبية القمر أقوى ما تكون على جانب الأرض المواجه له وأضعف ما تكون على الجانب البعيد. هذا الفرق يمطّ المحيطات في انتفاخين، أحدهما تحت القمر والآخر في الجهة المقابلة. وتدور الأرض تحت الانتفاخين كل يوم، فتشهد معظم السواحل مدّين وجزرين، يفصل بينهما نحو 12 ساعة و25 دقيقة.",
    "The Sun does the same, a bit less than half as strongly. At new and full moon the two pulls line up and add: <b>spring tides</b>, with the highest highs and lowest lows. At first and last quarter they pull at right angles and partly cancel: <b>neap tides</b>, with a small range. The biggest tides usually arrive a day or two after the new or full moon, because the sea takes time to respond.": "وتفعل الشمس الشيء نفسه بقوة تقل قليلًا عن النصف. في المحاق والبدر تصطف القوتان وتتجمعان: <b>المد الأعلى (الربيعي)</b>، بأعلى مدّ وأدنى جزر. وفي التربيعين الأول والأخير تتعامدان فيلغي بعضهما بعضًا جزئيًا: <b>المد الأدنى (المحاقي)</b>، بمدى صغير. وتأتي أكبر موجات المد عادةً بعد المحاق أو البدر بيوم أو يومين، لأن البحر يحتاج وقتًا ليستجيب.",
    "The Arabian Gulf is shallow and almost closed, so its tide sloshes around fixed \"pivot\" points where the range is nearly zero. That's why the tide at Abu Dhabi, Dubai and Ras Al Khaimah can differ by hours. Kalba and Fujairah face the open Gulf of Oman and follow a different rhythm.": "الخليج العربي ضحل وشبه مغلق، لذا يتأرجح المد فيه حول نقاط \"ارتكاز\" ثابتة يكاد المدى عندها يكون صفرًا. ولهذا قد يختلف توقيت المد بين أبوظبي ودبي ورأس الخيمة بساعات. أما كلباء والفجيرة فتطلّان على خليج عُمان المفتوح وتتبعان إيقاعًا مختلفًا.",
    "These numbers come from the Open-Meteo marine model, not a tide gauge. Times can be off by 30 minutes or more and heights by tens of centimetres, especially inside creeks and lagoons. For boating, fishing or anything safety related, check official tide tables from the port or coastguard.": "هذه الأرقام من النموذج البحري لـ Open-Meteo، لا من مقياس للمد. قد تخطئ الأوقات بـ30 دقيقة أو أكثر والارتفاعات بعشرات السنتيمترات، خصوصًا داخل الأخوار والبحيرات. للإبحار أو الصيد أو أي أمر يتعلق بالسلامة، راجع جداول المد الرسمية من الميناء أو خفر السواحل.",
    "Right now": "الآن",
    "Tide unknown": "المد غير معروف",
    "next high": "المد التالي", "next low": "الجزر التالي", "metres range today": "متر مدى اليوم",
    "now": "الآن",
    "High": "مد", "Low": "جزر",
    "No clear turning points": "لا توجد نقاط تحوّل واضحة",
    "No tide data here": "لا توجد بيانات مد هنا",
    "No data": "لا توجد بيانات",
    "Couldn't reach the marine model. Check your connection and try again.": "تعذّر الوصول إلى النموذج البحري. تحقّق من اتصالك وحاول مرة أخرى.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a place instead.": "لم تتم مشاركة الموقع. اختر مكانًا بدلًا من ذلك.",
    "Sun": "الشمس", "Earth": "الأرض", "Moon": "القمر",
    "Seen from above the North Pole": "كما يُرى من فوق القطب الشمالي",
    "Spring tides": "مد أعلى (ربيعي)", "Neap tides": "مد أدنى (محاقي)", "Towards spring": "يقترب من المد الأعلى", "In between": "بين الحالين"
  };
  for (var k in PHASE) d[k] = PHASE[k];
  LabAr.add(d, [
    [/^Fetching the sea level model for (.+)…$/, function (m, n) { return 'جارٍ جلب نموذج مستوى البحر لـ' + t(n) + '…'; }],
    [/^The model has no sea level for (.+)\. Try a spot closer to open water\.$/, function (m, n) { return 'لا يوفّر النموذج مستوى البحر لـ' + t(n) + '. جرّب مكانًا أقرب إلى المياه المفتوحة.'; }],
    [/^(.+) · model cell at ([\d.]+)°N, ([\d.]+)°E$/, function (m, n, a, b) { return t(n) + ' · خلية النموذج عند ' + a + '° شمالًا، ' + b + '° شرقًا'; }],
    [/^(Rising|Falling), ([+\-]?[\d.]+ m)$/, function (m, r, v) { return (r === 'Rising' ? 'يرتفع، ' : 'ينخفض، ') + sig(v); }],
    [new RegExp('^Next (high|low) tide (today|tomorrow|' + DAY + ') at ([\\d:]+) \\(([+\\-]?[\\d.]+ m)\\)\\.$'), function (m, hl, w, x, tm, v) {
      return (hl === 'high' ? 'المد التالي ' : 'الجزر التالي ') + when(w) + ' عند ' + tm + ' (' + sig(v) + ').';
    }],
    [new RegExp('^next (high|low) \\((tomorrow|' + DAY + ')\\)$'), function (m, hl, w) { return (hl === 'high' ? 'المد التالي' : 'الجزر التالي') + ' (' + (w === 'tomorrow' ? 'غدًا' : day(w)) + ')'; }],
    [new RegExp('^' + DAY + '$'), function (m) { return day(m); }],
    [/^([\d:]+) · ([+\-]?[\d.]+ m)$/, function (m, tm, v) { return tm + ' · ' + sig(v); }],
    [new RegExp('^(Now|\\+([\\d.]+) days) · ' + DAY + ' · (.+), (\\d+)% lit$'), function (m, a, n, dd, ph, p) {
      return (n ? 'بعد ' + n + ' يوم' : 'الآن') + ' · ' + day(dd) + ' · ' + (PHASE[ph] || ph) + '، مضاء ' + p + '%';
    }],
    [/^tidal pull (\d+)% of the maximum$/, 'قوة الجذب المدّي $1% من أقصاها'],
    [new RegExp('^Next (new|full) moon ' + DAY + ', so expect the biggest tides around ' + DAY + '\\.$'), function (m, nf, a, b) {
      return (nf === 'new' ? 'المحاق التالي ' : 'البدر التالي ') + 'يوم ' + day(a) + '، فتوقّع أكبر موجات المد نحو يوم ' + day(b) + '.';
    }]
  ]);
})();
// the Moon diagram is drawn once before this dictionary arrives, so draw it again in Arabic
(function () {
  function redraw() { var o = document.getElementById('off'); if (o) o.dispatchEvent(new Event('input')); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', redraw); else redraw();
})();
