(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var MOS = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec';
  function mo(s) { return s.replace(new RegExp('\\b(' + MOS + ') (\\d{4})\\b', 'g'), function (m, a, y) { return MO[a] + ' ' + y; }); }
  var CLIFF = {
    'Warranty ends': 'انتهاء الضمان',
    '100,000 km': '100,000 km',
    'Five years old': 'عمر خمس سنوات',
    'New model, likely around here': 'طراز جديد، على الأرجح في هذا الوقت',
    'New model arrives': 'وصول الطراز الجديد'
  };
  var CV = { 'Warranty ends': 'انتهاء الضمان', '100,000 km': 'بلوغ 100,000 km', 'Five years old': 'إتمام خمس سنوات', 'New model, likely around here': 'الطراز الجديد المتوقع', 'New model arrives': 'وصول الطراز الجديد' };
  var CD = {
    'Buyers pay less once repairs are on them. Selling with a few months of warranty left helps.': 'يدفع المشترون أقل حين تصبح الإصلاحات على حسابهم. البيع مع بقاء بضعة أشهر من الضمان يفيدك.',
    'A big psychological line in listings and dealer offers.': 'حد نفسي مهم في الإعلانات وعروض الوكلاء.',
    'Many banks finance used cars only up to a certain age, and agency-repair insurance often stops around here, so fewer buyers can pay.': 'كثير من البنوك لا تموّل السيارات المستعملة إلا حتى عمر معيّن، وتأمين الإصلاح لدى الوكالة يتوقف غالبًا عند هذا الحد، فيقل عدد المشترين القادرين على الدفع.',
    'A refreshed design makes the old one look dated overnight.': 'التصميم المحدَّث يجعل الطراز القديم يبدو متقادمًا بين ليلة وضحاها.'
  };
  var NOTE = {
    'Japanese brands hold value best in the UAE. Toyota and Lexus 4x4s are famous for it.': 'العلامات اليابانية هي الأفضل في الحفاظ على قيمتها في الإمارات، وسيارات Toyota وLexus ذات الدفع الرباعي مشهورة بذلك.',
    'Korean cars drop faster at first, but long warranties help resale while they last.': 'السيارات الكورية تنخفض قيمتها أسرع في البداية، لكن الضمانات الطويلة تدعم إعادة البيع ما دامت سارية.',
    'German luxury cars lose value fast once the warranty and service plan end, because buyers fear repair bills.': 'السيارات الألمانية الفاخرة تفقد قيمتها بسرعة بعد انتهاء الضمان وباقة الصيانة، لأن المشترين يخشون فواتير الإصلاح.',
    'Big American SUVs and pickups sell steadily, but high fuel use hurts them with second buyers.': 'سيارات الدفع الرباعي والبيك أب الأمريكية الكبيرة تُباع بثبات، لكن استهلاكها العالي للوقود يضعفها لدى المشتري الثاني.',
    'Chinese brands are newer to the resale market and update models quickly, so values fall fastest. That is improving.': 'العلامات الصينية جديدة نسبيًا في سوق إعادة البيع وتحدّث طرازاتها بسرعة، لذا تنخفض قيمتها أسرع من غيرها. والوضع يتحسن.',
    'Electric cars lose value with battery worries and price cuts on new models. Battery warranties are usually 8 years.': 'السيارات الكهربائية تفقد قيمتها بسبب المخاوف من البطارية وتخفيض أسعار الطرازات الجديدة. ضمان البطارية عادة 8 سنوات.'
  };
  var d = {
    "When to Sell Your Car": "متى تبيع سيارتك",
    "Tool · Money · Car · UAE": "أداة · مال · سيارات · الإمارات",
    "When to sell your car.": "متى تبيع سيارتك.",
    "Cars lose value on a curve, with a few cliffs along the way: the end of the warranty, 100,000 km, the five-year mark and the new model arriving. Enter your car and this shows where you are on its curve, what the next cliff costs, and whether keeping it or switching is cheaper per kilometre.": "تفقد السيارات قيمتها على منحنى تتخلله بعض المنحدرات الحادة: انتهاء الضمان، وبلوغ 100,000 km، وإتمام خمس سنوات، ووصول الطراز الجديد. أدخل بيانات سيارتك لترى موقعك على منحناها، وكم سيكلفك المنحدر التالي، وأيهما أرخص لكل كيلومتر: الاحتفاظ بها أم استبدالها.",
    "Estimated value over time": "القيمة التقديرية مع الوقت",
    "Cliffs that cut the price": "المنحدرات التي تخفض السعر",
    "Next 12 months · keep it or switch to a new one": "الأشهر الـ12 القادمة · الاحتفاظ بها أم استبدالها بجديدة",
    "These are rough estimates from typical UAE resale patterns, not a valuation. Real prices swing with condition, colour, service history, accident record and demand. Get two or three offers before you decide.": "هذه تقديرات تقريبية مبنية على أنماط إعادة البيع المعتادة في الإمارات، وليست تثمينًا. الأسعار الفعلية تتأثر بالحالة واللون وسجل الصيانة وسجل الحوادث والطلب. احصل على عرضين أو ثلاثة قبل أن تقرر.",
    "Make": "العلامة التجارية",
    "Year you bought it (new)": "سنة الشراء (جديدة)",
    "Price paid, AED": "السعر المدفوع، بالدرهم",
    "Km per year": "كيلومترات في السنة",
    "Warranty, years": "الضمان، بالسنوات",
    "Odometer now (optional)": "قراءة العداد الآن (اختياري)",
    "New model expected (year)": "سنة الطراز الجديد المتوقع",
    "km": "km",
    "not sure": "غير متأكد",
    "GCC spec": "مواصفات خليجية",
    "<b>Why GCC spec matters.</b> Cars built for the Gulf have bigger radiators, stronger AC and dust filtering, and dealers here can service them under warranty. Imported US or Japanese spec cars often carry hidden accident or flood history, so buyers pay noticeably less for them.": "<b>لماذا تهم المواصفات الخليجية.</b> السيارات المصنوعة للخليج فيها مشعات أكبر ومكيف أقوى وفلترة للغبار، ويمكن للوكلاء هنا صيانتها ضمن الضمان. أما السيارات المستوردة بمواصفات أمريكية أو يابانية فكثيرًا ما تخفي سجل حوادث أو غرق، لذا يدفع المشترون فيها أقل بشكل واضح.",
    "<b>How the curve works.</b> A new car drops most in its first year, then loses a roughly steady share of its remaining value each year: an exponential decay. Each cliff is a step in what buyers will pay, smoothed over a few months. Mileage moves the whole curve: each 10,000 km above about 20,000 a year knocks off around 2%.": "<b>كيف يعمل المنحنى.</b> تنخفض قيمة السيارة الجديدة أكثر ما يكون في سنتها الأولى، ثم تفقد كل سنة نسبة شبه ثابتة من قيمتها المتبقية: أي تناقص أُسّي. وكل منحدر هو هبوط في ما يقبل المشترون دفعه، موزّع على بضعة أشهر. والمسافة المقطوعة تحرّك المنحنى كله: كل 10,000 km فوق نحو 20,000 سنويًا تُنقص القيمة بنحو 2%.",
    "Japanese": "يابانية", "Korean": "كورية", "German luxury": "ألمانية فاخرة", "American": "أمريكية", "Chinese": "صينية", "Electric": "كهربائية",
    "Other electric": "كهربائية أخرى",
    "Best window to sell": "أفضل وقت للبيع",
    "No cliff close ahead": "لا منحدر قريب",
    "The steepest losses are behind you. From here, keeping a reliable car is usually cheaper than switching, as long as repairs stay reasonable.": "أشد الخسائر صارت خلفك. من الآن فصاعدًا، الاحتفاظ بسيارة موثوقة أرخص عادة من استبدالها، ما دامت تكاليف الإصلاح معقولة.",
    "AED, worth about now": "درهم، قيمتها التقريبية الآن",
    "AED lost per month now": "درهم تخسرها شهريًا الآن",
    "AED per month in a year": "درهم شهريًا بعد سنة",
    "AED": "درهم",
    "Keep": "الاحتفاظ",
    "Switch to new": "الاستبدال بجديدة",
    "Value lost": "القيمة المفقودة",
    "Servicing and repairs": "الصيانة والإصلاح",
    "Insurance": "التأمين",
    "Charging": "الشحن",
    "Fuel": "الوقود",
    "Selling below market (dealer trade-in)": "البيع بأقل من سعر السوق (مبادلة لدى الوكيل)",
    "now": "الآن",
    "cliffs": "المنحدرات",
    "best window": "أفضل وقت",
    "AED, by year": "بالدرهم، حسب السنة",
    "Estimated car value by year": "القيمة التقديرية للسيارة حسب السنة"
  };
  ['Toyota', 'Lexus', 'Nissan', 'Mitsubishi', 'Honda', 'Mazda', 'Infiniti', 'Suzuki', 'Hyundai', 'Kia', 'Genesis', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Volkswagen', 'Ford', 'Chevrolet', 'GMC', 'Jeep', 'Dodge', 'Cadillac', 'MG', 'Geely', 'Chery', 'Changan', 'Haval', 'Jetour', 'Hongqi', 'Tesla', 'BYD', 'Polestar', 'Lucid', 'Zeekr'].forEach(function (b) { d[b] = b; });
  for (var k in CLIFF) d[k] = CLIFF[k];
  function months(n) { n = +n; return n === 1 ? 'شهر' : n === 2 ? 'شهرين' : n <= 10 ? n + ' أشهر' : n + ' شهرًا'; }
  var aed = function (s) { return s + ' درهم'; };
  LabAr.add(d, [
    [/^(\d+)k$/, '$1k'],
    [new RegExp('^(' + MOS + ') (\\d{4})$'), function (m) { return mo(m); }],
    [new RegExp('^(' + MOS + ') (\\d{4}) · passed$'), function (m) { return mo(m.replace(' · passed', '')) + ' · مضى'; }],
    [new RegExp('^Before (' + MOS + ') (\\d{4})$'), function (m) { return 'قبل ' + mo(m.slice(7)); }],
    [/^(.+?) Roughly −(\d+)%\.$/, function (m, a, p) { return (CD[a] || a) + ' نحو \u2066−' + p + '%\u2069.'; }],
    [/^(.+?) is coming in about (\d+) months\. Around then the value drops by roughly AED ([\d,]+) over six months(?:, about AED ([\d,]+) more than the normal slide)?\. If you are thinking of changing anyway, list it two or three months before\.$/, function (m, n, mths, a, b) {
      return 'موعد ' + (CV[n] || n) + ' بعد نحو ' + months(mths) + '. في ذلك الوقت تنخفض القيمة بنحو ' + aed(a) + ' خلال ستة أشهر' + (b ? '، أي أكثر بنحو ' + aed(b) + ' من الانخفاض المعتاد' : '') + '. إن كنت تفكر في التغيير على أي حال، فاعرضها للبيع قبلها بشهرين أو ثلاثة.';
    }],
    [new RegExp('^(' + Object.keys(NOTE).map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')( Using your odometer: about (\\d+)k km a year\\.)?$'), function (m, a, o, k) { return NOTE[a] + (o ? ' بحسب العداد: نحو ' + k + ' ألف km سنويًا.' : ''); }],
    [/^Per km, (\d+)k km a year$/, 'لكل كيلومتر، $1 ألف km سنويًا'],
    [/^.*[؀-ۿ⁦-⁩].*$/, '$&']
  ]);
  // <optgroup label> is not an attribute the engine translates
  function og() { [].forEach.call(document.querySelectorAll('optgroup'), function (o) { o.label = LabAr.t(o.label); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', og); else og();
})();
