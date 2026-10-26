(function () {
  var U = {
    'grams': 'غرام', 'tola': 'تولة', 'troy ounces': 'أونصة تروي', '10-tola TT bars': 'سبيكة TT (10 تولات)', 'kilograms': 'كيلوغرام', 'mithqal': 'مثقال', 'ounces (everyday)': 'أونصة (عادية)',
    'square feet': 'قدم مربع', 'square metres': 'متر مربع', 'square yards': 'ياردة مربعة', 'acres': 'أكر', 'hectares': 'هكتار', 'square km': 'كيلومتر مربع', 'plots of 15,000 sq ft': 'قطعة أرض (15,000 قدم مربع)',
    'AED per sq ft': 'درهم للقدم المربع', 'AED per m²': 'درهم للمتر المربع',
    'millimetres': 'مليمتر', 'centimetres': 'سنتيمتر', 'metres': 'متر', 'kilometres': 'كيلومتر', 'inches': 'بوصة', 'feet': 'قدم', 'yards': 'ياردة', 'miles': 'ميل', 'nautical miles': 'ميل بحري',
    'tonnes': 'طن', 'ounces': 'أونصة', 'pounds': 'رطل', 'stone': 'ستون',
    'millilitres': 'مليلتر', 'litres': 'لتر', 'UK (imperial) gallons': 'غالون بريطاني (إمبراطوري)', 'US gallons': 'غالون أمريكي', 'cubic metres': 'متر مكعب', 'imperial gallons (old water bills)': 'غالون إمبراطوري (فواتير المياه القديمة)', 'oil barrels': 'برميل نفط', 'US fl oz': 'أونصة سائلة أمريكية', 'cubic feet': 'قدم مكعب',
    '°C': '\u2066°C\u2069', '°F': '\u2066°F\u2069', 'kelvin': 'كلفن',
    'L/100 km': 'لتر/100 كم', 'km per litre': 'كم لكل لتر', 'mpg (US)': 'ميل لكل غالون (أمريكي)', 'mpg (UK)': 'ميل لكل غالون (بريطاني)',
    'km/h': 'كم/س', 'mph': 'ميل/س', 'm/s': 'م/ث', 'knots': 'عقدة',
    'kWh': 'kWh', 'megajoules': 'ميغاجول', 'BTU': 'BTU', 'kcal (food calories)': 'سعرة حرارية (غذائية)', 'ton-hours of cooling': 'طن تبريد في الساعة', 'MMBtu (gas)': 'MMBtu (غاز)',
    'kW': 'kW', 'watts': 'واط', 'BTU per hour': 'BTU في الساعة', 'tons of refrigeration': 'طن تبريد', 'horsepower': 'حصان',
    'US cups': 'كوب أمريكي', 'metric cups (250 ml)': 'كوب متري (250 مل)', 'tablespoons': 'ملعقة كبيرة', 'teaspoons': 'ملعقة صغيرة', 'ml': 'مل',
    'UAE dirhams': 'درهم إماراتي', 'US dollars': 'دولار أمريكي', 'fils': 'فلس'
  };
  var FOOD = { 'water / milk': 'الماء / الحليب', 'flour': 'الطحين', 'sugar': 'السكر', 'rice (uncooked)': 'الأرز (غير مطبوخ)', 'butter / ghee': 'الزبدة / السمن', 'honey': 'العسل' };
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  var UN = Object.keys(U).sort(function (a, b) { return b.length - a.length; }).map(esc).join('|');
  var NUM = '([-−]?[\\d,]*\\.?\\d+(?:e[-+]\\d+)?|—)';
  var d = {};
  Object.keys(U).forEach(function (k) { d[k] = U[k]; });
  LabAr.add(Object.assign(d, {
    "UAE Unit Converter": "محوّل الوحدات الإماراتي",
    "Tool · Everyday · UAE": "أداة · الحياة اليومية · الإمارات",
    "UAE unit converter.": "محوّل الوحدات الإماراتي.",
    "Type a number and a unit, like \"5 tola\" or \"1450 sqft\", and see every useful conversion at once. It covers the units that come up here: gold tolas with today's value, property in square feet, imperial versus US gallons, AC tons and BTU, fuel economy and cooking cups. Star the ones you use.": "اكتب رقمًا ووحدة، مثل \"5 tola\" أو \"1450 sqft\"، لترى كل التحويلات المفيدة دفعة واحدة. تغطي الصفحة الوحدات الشائعة هنا: تولات الذهب مع قيمتها اليوم، ومساحات العقارات بالقدم المربع، والغالون البريطاني مقابل الأمريكي، وأطنان التكييف وBTU، واستهلاك الوقود، وأكواب الطبخ. ضع نجمة على ما تستخدمه. تُكتب الوحدات بالإنجليزية.",
    "e.g. 10 tola, 1200 sq ft, 18000 btu/h, 8 l/100km": "مثال: 10 tola، 1200 sq ft، 18000 btu/h، 8 l/100km",
    "Number and unit to convert": "الرقم والوحدة المراد تحويلها",
    "Favourites": "المفضلة",
    "Good to know": "معلومات مفيدة",
    "A <b>tola</b> is 11.6638 grams, three-eighths of a troy ounce. Gold is priced per troy ounce (31.10 g), not the everyday ounce (28.35 g). The 10-tola TT bar sold in Dubai's souks weighs 116.64 g.": "<b>التولة</b> تساوي 11.6638 غرامًا، أي ثلاثة أثمان الأونصة التروي. ويُسعَّر الذهب بالأونصة التروي (31.10 غرام)، لا بالأونصة العادية (28.35 غرام). وسبيكة TT ذات العشر تولات التي تُباع في أسواق دبي تزن 116.64 غرامًا.",
    "A UK (imperial) gallon is 4.546 litres, a US gallon 3.785. Older car brochures from the region often quote miles per imperial gallon. An AC <b>ton</b> isn't a weight: it's the cooling power of melting one ton of ice a day, 12,000 BTU an hour or about 3.5 kW of heat moved. A typical bedroom split unit is 1.5 to 2 tons.": "الغالون البريطاني (الإمبراطوري) يساوي 4.546 لتر، والأمريكي 3.785. وكثيرًا ما تذكر كتيّبات السيارات القديمة في المنطقة الأميال لكل غالون إمبراطوري. و<b>طن</b> التكييف ليس وزنًا: بل هو قدرة التبريد اللازمة لإذابة طن من الجليد في اليوم، أي 12,000 BTU في الساعة أو نحو 3.5 kW من الحرارة المنقولة. ومكيّف السبليت المعتاد لغرفة النوم بين 1.5 و2 طن.",
    "The dirham has been pegged to the US dollar at 3.6725 since 1997, so this rate doesn't move. Gold value is spot price only; shops add making charges and VAT.": "الدرهم مربوط بالدولار الأمريكي بسعر 3.6725 منذ 1997، لذا لا يتغير هذا السعر. قيمة الذهب هنا بالسعر الفوري فقط؛ والمحلات تضيف المصنعية وضريبة القيمة المضافة.",
    "Try": "جرّب",
    "Gold": "الذهب", "Property area": "مساحة العقار", "Price per area": "السعر لكل مساحة", "Length": "الطول", "Weight": "الوزن", "Volume": "الحجم", "Fuel economy": "استهلاك الوقود", "Speed": "السرعة", "Energy": "الطاقة", "Cooking": "الطبخ", "AED ↔ USD": "درهم ↔ دولار",
    "Tap ☆ on any result to keep it here.": "انقر ☆ على أي نتيجة لتحتفظ بها هنا.",
    "Today's gold price couldn't be loaded, so only weights are shown.": "تعذّر تحميل سعر الذهب اليوم، لذا تُعرض الأوزان فقط.",
    "Grams are approximate: flour 125 g, sugar 200 g, rice 185 g, butter 227 g per US cup. Spoon flour into the cup and level it.": "الغرامات تقريبية: الطحين 125 غ، والسكر 200 غ، والأرز 185 غ، والزبدة 227 غ لكل كوب أمريكي. املأ الكوب بالطحين بالملعقة ثم سوِّه.",
    "Handy for comparing listings: Dubai prices are usually quoted per square foot, while some developers and Abu Dhabi documents use square metres.": "مفيد لمقارنة الإعلانات العقارية: الأسعار في دبي تُذكر عادةً بالقدم المربع، بينما يستخدم بعض المطورين ووثائق أبوظبي المتر المربع.",
    "Lower L/100 km is better; higher km/L or mpg is better. UK mpg figures look about 20% bigger than US mpg for the same car.": "كلما قلّ عدد اللترات لكل 100 كم كان أفضل، وكلما زاد كم/لتر أو ميل/غالون كان أفضل. أرقام الميل لكل غالون البريطانية تبدو أكبر بنحو 20% من الأمريكية للسيارة نفسها.",
    "DEWA and ADDC bills count electricity in kWh, which they call units. Gas is sold in MMBtu.": "تحسب فواتير هيئة كهرباء ومياه دبي وشركة أبوظبي للتوزيع الكهرباء بالكيلوواط ساعة، وتسميها «وحدات». ويُباع الغاز بوحدة MMBtu.",
    "Fixed peg: 1 USD = 3.6725 AED. Banks and exchange houses add their own margin.": "سعر ربط ثابت: 1 دولار = 3.6725 درهم. وتضيف البنوك ومحلات الصرافة هامشها الخاص.",
    "Petrol pumps here sell by the litre. US recipes and car specs use US gallons; old British ones use imperial.": "محطات الوقود هنا تبيع باللتر. والوصفات ومواصفات السيارات الأمريكية تستخدم الغالون الأمريكي، والبريطانية القديمة تستخدم الإمبراطوري."
  }), [
    [/^Power & AC$/, 'القدرة والتكييف'],
    [/^AED, (\d+)K$/, 'درهم، عيار $1'],
    [/^grams of (.+)$/, function (m, f) { return 'غرامات ' + (FOOD[f] || f); }],
    [new RegExp('^' + NUM + ' (' + UN + ')$'), function (m, n, u) { return /[\u0600-\u06ff]/.test(U[u]) ? n + ' ' + U[u] : '\u2066' + n + ' ' + U[u] + '\u2069'; }],
    [new RegExp('^Favourite (' + UN + ') to (' + UN + ')$'), function (m, a, b) { return 'أضف ' + U[a] + ' إلى ' + U[b] + ' للمفضلة'; }],
    [/^I don't know the unit "(.*)"\. Try one of the examples, or pick a category\.$/, 'لا أعرف الوحدة "$1". جرّب أحد الأمثلة، أو اختر فئة.'],
    [/^Spot value at US\$(\d+) per troy ounce \(([\d.]+) AED per gram of 24K\), updated (\d+) (\w+),? (\d\d:\d\d)\. Shop prices add making charges and 5% VAT on jewellery\.$/, function (m, a, b, dd, mo, t) {
      var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
      return 'القيمة بالسعر الفوري ' + a + ' دولار للأونصة التروي (' + b + ' درهم لغرام عيار 24)، آخر تحديث ' + dd + ' ' + (MO[mo] || mo) + ' ' + t + '. أسعار المحلات تضيف المصنعية وضريبة القيمة المضافة 5% على المجوهرات.';
    }],
    [/^One square metre is 10\.764 square feet\.(?: (For scale, a standard 7-a-side football pitch is about 1,800 m²\.))?$/, function (m, x) { return 'المتر المربع يساوي 10.764 قدم مربع.' + (x ? ' وللمقارنة، ملعب كرة القدم السباعي المعتاد مساحته نحو 1,800 m².' : ''); }],
    [/^Cooling ([\d,.]+) kW of heat\. A modern split AC uses roughly a third of that in electricity \(([\d,.]+) kW at an efficiency ratio of 3\.2\), so an hour costs about ([\d,.]+) AED at 38 fils per kWh\.$/, 'تبريد $1 kW من الحرارة. يستهلك مكيّف السبليت الحديث نحو ثلث ذلك كهرباءً ($2 kW بمعامل كفاءة 3.2)، فتكلّف الساعة نحو $3 درهم بسعر 38 فلسًا للكيلوواط ساعة.'],
    [/^-?[\d.]+e[-+]\d+$/, function (m) { return m; }]
  ]);
})();
