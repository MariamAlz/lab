(function () {
  var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var SER = { 'Cash': 'النقد', 'Savings account': 'حساب التوفير', 'Index fund': 'صندوق المؤشرات', 'Gold': 'الذهب' };
  var N = '([\\d,]+)';
  var d = {
    "What AED is really worth.": "كم يساوي الدرهم فعلًا.",
    "What AED Is Worth": "كم يساوي الدرهم",
    "Tool · Money · Inflation · UAE": "أداة · المال · التضخم · الإمارات",
    "Money kept as cash keeps its number but slowly loses what it can buy. Pick a year and an amount to see how UAE inflation has eaten into it, and how the same money would have done in a savings account, a stock index fund or gold.":
      "المال المحفوظ نقدًا يحتفظ برقمه لكنه يفقد ببطء قدرته الشرائية. اختر سنة ومبلغًا لترى كيف تآكل بفعل التضخم في الإمارات، وكيف كان المبلغ نفسه سيؤدي في حساب توفير أو صندوق مؤشرات أسهم أو في الذهب.",
    "Show values": "طريقة عرض القيم",
    "After inflation": "بعد التضخم",
    "On paper": "على الورق",
    "Value over time": "القيمة عبر الزمن",
    "The UAE dirham has been pegged to the US dollar at 3.6725 since 1997, so it doesn't lose value against the dollar. Inflation is a different thing: it measures what dirhams buy in shops, rents and school fees here. UAE prices actually fell in 2019 and 2020 as rents dropped, then jumped in 2022 with fuel and food.":
      "الدرهم الإماراتي مربوط بالدولار الأمريكي بسعر 3.6725 منذ عام 1997، لذا لا يفقد قيمته أمام الدولار. أما التضخم فشيء مختلف: إنه يقيس ما يشتريه الدرهم هنا في المتاجر والإيجارات والرسوم المدرسية. وقد انخفضت الأسعار في الإمارات فعلًا في 2019 و2020 مع تراجع الإيجارات، ثم قفزت في 2022 مع الوقود والغذاء.",
    "An illustration with simplified assumptions (no fees, taxes, spreads or making charges), not financial advice. Past returns don't predict future ones.": "توضيح بافتراضات مبسّطة (بلا رسوم أو ضرائب أو فروق أسعار أو أجور صياغة)، وليس نصيحة مالية. العوائد السابقة لا تتنبأ بالعوائد المستقبلية.",
    "Your money": "أموالك",
    "Amount (AED)": "المبلغ (درهم)",
    "Starting in": "بدءًا من",
    "What did 100 AED buy in…": "ماذا كانت تشتري 100 درهم في…",
    "Assumptions (editable)": "الافتراضات (قابلة للتعديل)",
    "Savings account (% a year)": "حساب التوفير (% سنويًا)",
    "Index fund (% a year)": "صندوق المؤشرات (% سنويًا)",
    "Savings: UAE banks paid close to nothing in the 2010s and up to about 4–5% on some accounts since 2023, so 2.5% is a rough average. Index fund: 7% a year is a common long-run assumption for a global or US stock index, in dollars, which equals dirhams thanks to the peg. Real years swing a lot: some are −20%, some +25%.":
      "التوفير: دفعت البنوك الإماراتية ما يقارب الصفر في العقد الثاني من الألفية، وحتى نحو 4–5% على بعض الحسابات منذ 2023، لذا فإن 2.5% متوسط تقريبي. صندوق المؤشرات: 7% سنويًا افتراض شائع على المدى الطويل لمؤشر أسهم عالمي أو أمريكي، بالدولار، وهو يساوي الدرهم بفضل الربط. والسنوات الفعلية تتأرجح كثيرًا: بعضها −20% وبعضها +25%.",
    "Gold: yearly average prices in US dollars per ounce (LBMA, via metalcharts.org), converted at 3.6725.": "الذهب: متوسط الأسعار السنوية بالدولار الأمريكي للأونصة (LBMA، عبر metalcharts.org)، محوّلة بسعر 3.6725.",
    "UAE inflation by year (%)": "التضخم في الإمارات حسب السنة (%)",
    "Edit the yearly figures": "عدّل الأرقام السنوية",
    "Reset to published figures": "أعد الأرقام المنشورة",
    "Annual consumer price inflation for the UAE, World Bank series (FCSC data), via FRED, checked October 2026. 2026 is an estimate of 2%, applied for the part of the year that has passed. Edit any year.":
      "التضخم السنوي لأسعار المستهلك في الإمارات، سلسلة البنك الدولي (بيانات المركز الاتحادي للتنافسية والإحصاء)، عبر FRED، تمت المراجعة في أكتوبر 2026. رقم 2026 تقدير بنسبة 2%، مطبَّق على الجزء المنقضي من السنة. عدّل أي سنة.",
    "Where you started": "نقطة البداية"
  };
  for (var k in SER) d[k] = SER[k];
  function S(n) { return SER[n] || n; }
  LabAr.add(d, [
    [/^(\d{4}) est\.$/, '$1 تقديري'],
    [/^[\d.]+[kM]$/, function (m) { return m; }],
    [new RegExp('^(Cash|Savings account|Index fund|Gold): ' + N + ' AED$'), function (m, s, v) { return S(s) + ': ' + v + ' درهم'; }],
    [new RegExp('^' + N + ' AED$'), '$1 درهم'],
    [new RegExp('^' + N + ' AED on paper$'), '$1 درهم على الورق'],
    [/^in (\d{4}) money, ([+−])(\d+)%$/, 'بقيمة نقود $1، $2$3%'],
    [/^Since (\d{4})$/, 'منذ $1'],
    [new RegExp('^' + N + ' AED kept as cash now buys what ' + N + ' AED did in (\\d{4})\\.$'), '$1 درهم محفوظة نقدًا تشتري اليوم ما كانت تشتريه $2 درهم في $3.'],
    [/^Prices are up about (-?\d+)% since then\. And 100 AED in (\d{4}) bought what about$/, 'ارتفعت الأسعار بنحو $1% منذ ذلك الحين. و100 درهم في $2 كانت تشتري ما يعادل نحو'],
    [/^buys today\.$/, 'اليوم.'],
    [new RegExp('^Value of ' + N + ' AED from (\\d{4}) to today, (after inflation, in \\d{4} dirhams|as nominal amounts): (.+)$'), function (m, a, y, mode, list) {
      return 'قيمة ' + a + ' درهم من ' + y + ' حتى اليوم، ' + (/after/.test(mode) ? 'بعد التضخم، بدراهم ' + y : 'بالمبالغ الاسمية') + ': ' + list.split(', ').map(function (x) { var r = x.match(/^(Cash|Savings account|Index fund|Gold) ([\d,]+)$/); return r ? S(r[1]) + ' ' + r[2] : x; }).join('، ');
    }],
    [/^Gold: yearly average prices in US dollars per ounce \(LBMA, via metalcharts\.org\), and today's price of \$([\d,]+) \(([\d,]+) AED\) per ounce from (\d{1,2}) (\w{3}) (\d{4}), converted at 3\.6725\. Buying jewellery adds making charges\.$/, function (m, usd, aed, dd, mo, y) {
      return 'الذهب: متوسط الأسعار السنوية بالدولار الأمريكي للأونصة (LBMA، عبر metalcharts.org)، وسعر اليوم ' + usd + '$ (' + aed + ' درهم) للأونصة بتاريخ ' + dd + ' ' + (MON[mo] || mo) + ' ' + y + '، محوّلة بسعر 3.6725. شراء المجوهرات يضيف أجور الصياغة.';
    }]
  ]);
})();
