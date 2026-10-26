(function () {
  var C = {
    'South Africa': 'جنوب أفريقيا', 'Ivory Coast': 'ساحل العاج', 'Angola': 'أنغولا', 'Kenya': 'كينيا', 'Tanzania': 'تنزانيا', 'Benin': 'بنين', 'Egypt': 'مصر', 'Morocco': 'المغرب', 'Ethiopia': 'إثيوبيا', 'Gabon': 'الغابون', 'Ghana': 'غانا',
    'Japan': 'اليابان', 'Sri Lanka': 'سريلانكا', 'Israel': 'إسرائيل', 'South Korea': 'كوريا الجنوبية', 'Kazakhstan': 'كازاخستان', 'China': 'الصين', 'India': 'الهند', 'Indonesia': 'إندونيسيا', 'Thailand': 'تايلاند', 'Myanmar': 'ميانمار', 'Iran': 'إيران', 'Pakistan': 'باكستان', 'Turkey': 'تركيا', 'Philippines': 'الفلبين', 'Singapore': 'سنغافورة', 'Malaysia': 'ماليزيا', 'Taiwan': 'تايوان', 'Vietnam': 'فيتنام',
    'United Kingdom': 'المملكة المتحدة', 'Germany': 'ألمانيا', 'Poland': 'بولندا', 'Switzerland': 'سويسرا', 'Czech Republic': 'التشيك', 'Hungary': 'المجر', 'Portugal': 'البرتغال', 'Slovakia': 'سلوفاكيا', 'Denmark': 'الدنمارك', 'Ireland': 'أيرلندا', 'Romania': 'رومانيا', 'Austria': 'النمسا', 'France': 'فرنسا', 'Spain': 'إسبانيا', 'Serbia': 'صربيا', 'Bulgaria': 'بلغاريا', 'Netherlands': 'هولندا', 'Russia': 'روسيا', 'Belgium': 'بلجيكا', 'Finland': 'فنلندا', 'Sweden': 'السويد', 'Italy': 'إيطاليا',
    'United States': 'الولايات المتحدة', 'Canada': 'كندا', 'Mexico': 'المكسيك', 'Australia': 'أستراليا', 'New Zealand': 'نيوزيلندا', 'Argentina': 'الأرجنتين', 'Chile': 'تشيلي', 'Venezuela': 'فنزويلا', 'Brazil': 'البرازيل', 'Colombia': 'كولومبيا',
    'Africa': 'أفريقيا', 'Asia': 'آسيا', 'Europe': 'أوروبا', 'North America': 'أمريكا الشمالية', 'Oceania': 'أوقيانوسيا', 'South America': 'أمريكا الجنوبية'
  };
  var Q = { 'SUV': 'SUV', 'MPV': 'MPV', 'SUV/MPV': 'SUV/MPV', 'truck': 'شاحنة', 'van': 'فان', 'bus': 'حافلة', 'bus/van': 'حافلة/فان', 'commercial': 'تجارية', 'motorcycle': 'دراجة نارية', 'export': 'للتصدير', 'chassis': 'هيكل', 'USA': 'أمريكا', 'UK': 'بريطانيا', 'Czechia': 'التشيك', 'Shanghai': 'شنغهاي', 'AutoAlliance': 'AutoAlliance', 'GM': 'GM', 'Stellantis': 'Stellantis' };
  for (var k in C) Q[k] = C[k];
  function country(s) { return C[s] || s; }
  // maker names stay as brands; the words in brackets are translated
  function maker(s) {
    var m = s.match(/^(.+?) \(([^)]+)\)$/);
    if (!m) return MK[s] || s;
    return (MK[m[1]] || m[1]) + ' (' + m[2].split(', ').map(function (x) { return Q[x] || x; }).join('، ') + ')';
  }
  var MK = { 'French maker (Renault, Peugeot or Citroën)': 'شركة فرنسية (Renault أو Peugeot أو Citroën)', 'British maker (often Land Rover or Jaguar)': 'شركة بريطانية (غالبًا Land Rover أو Jaguar)', 'Italian maker': 'شركة إيطالية', 'General Motors': 'General Motors', 'Chrysler group': 'مجموعة Chrysler' };
  var BRAND = /^[A-ZŠ0-9][\w.'ëšçşŠ-]*(?:(?: \/ | |-)[A-Z0-9][\w.'ëšçş-]*)*(?: \([^)]+\))?$|^smart$/;
  var d = {
    "VIN Decoder": "قارئ رقم الشاصي",
    "Tool · Cars · Used car checks": "أداة · السيارات · فحص السيارات المستعملة",
    "VIN decoder.": "قارئ رقم الشاصي (VIN).",
    "Every car since 1981 has a 17-character VIN, also called the chassis number. It's printed on the mulkiya, at the bottom of the windscreen and inside the driver's door. It tells you who made the car, where it was built and its model year, and whether the number has been typed or altered wrongly. Check it before you buy a used car, and compare it with the papers.": "لكل سيارة منذ 1981 رقم تعريف (VIN) من 17 خانة، ويُسمّى أيضًا رقم الشاصي. تجده مطبوعًا في الملكية، وأسفل الزجاج الأمامي، وداخل باب السائق. يخبرك بالشركة المصنّعة ومكان التصنيع وسنة الطراز، وهل كُتب الرقم أو عُدّل بشكل خاطئ. افحصه قبل شراء سيارة مستعملة، وقارنه بالأوراق.",
    "VIN / chassis number": "رقم VIN / رقم الشاصي",
    "e.g. JTMHV05J604123456": "مثال: JTMHV05J604123456",
    "Decode": "اقرأ الرقم",
    "Look up more details online": "ابحث عن تفاصيل أكثر عبر الإنترنت",
    "Try:": "جرّب:",
    "US Honda": "Honda أمريكية", "Japan Toyota": "Toyota يابانية", "German Mercedes": "Mercedes ألمانية", "US Tesla": "Tesla أمريكية",
    "Maker (WMI)": "الشركة المصنّعة (WMI)", "Vehicle details (VDS)": "تفاصيل المركبة (VDS)", "Check digit": "رقم التحقق", "Year": "السنة", "Plant": "المصنع", "Serial": "الرقم التسلسلي",
    "Decoded on this device": "قُرئ على هذا الجهاز",
    "From the NHTSA database": "من قاعدة بيانات NHTSA",
    "Press \"Look up more details online\" to ask the US government's free vPIC database for the model, engine and body. Only the VIN is sent. It knows US-market cars best, so GCC-only models may come back with little detail.": "اضغط \"ابحث عن تفاصيل أكثر عبر الإنترنت\" لتسأل قاعدة بيانات vPIC المجانية التابعة للحكومة الأمريكية عن الطراز والمحرك والهيكل. لا يُرسل سوى رقم VIN. وهي تعرف سيارات السوق الأمريكي أكثر من غيرها، لذا قد تأتي الطرازات الخليجية فقط بتفاصيل قليلة.",
    "GCC spec or import?": "مواصفات خليجية أم وارد؟",
    "A GCC-spec car was built for this region: a bigger radiator and stronger AC, dust filters, and a warranty and parts with local dealers. Imports from the US, Canada or Japan are often cheaper, but some arrive after an insurance write-off, a flood or a big crash. They can be fine. They just need more checking, and resale is usually lower.": "السيارة الخليجية صُنعت لهذه المنطقة: رديتر أكبر ومكيّف أقوى وفلاتر للغبار، وضمان وقطع غيار لدى الوكلاء المحليين. أما الواردات من أمريكا أو كندا أو اليابان فغالبًا أرخص، لكن بعضها يصل بعد شطب من التأمين أو غرق أو حادث كبير. قد تكون جيدة، لكنها تحتاج إلى فحص أكثر، وسعر إعادة بيعها أقل عادةً.",
    "The VIN shows where a car was built, not where it was sold. A Japan-built Land Cruiser starting with J can be GCC spec, and a US-built Tahoe starting with 1 can be too. So use the VIN with other clues: a speedometer in miles first, US-style amber side markers, a US radio band, a dealer service history abroad, or papers saying \"imported\". Cars made for the Japanese home market often carry a short frame number (like GRS200-1234567) instead of a 17-character VIN.": "يُظهر رقم VIN مكان تصنيع السيارة لا مكان بيعها. فقد تكون لاند كروزر المصنوعة في اليابان والتي يبدأ رقمها بحرف J خليجية المواصفات، وكذلك تاهو المصنوعة في أمريكا والتي يبدأ رقمها بـ1. لذا استخدم VIN مع قرائن أخرى: عدّاد سرعة يعرض الأميال أولًا، وإشارات جانبية كهرمانية على الطراز الأمريكي، وموجات راديو أمريكية، وسجل صيانة لدى وكيل في الخارج، أو أوراق مكتوب فيها \"وارد\". وكثيرًا ما تحمل السيارات المصنوعة للسوق اليابانية المحلية رقم هيكل قصيرًا (مثل GRS200-1234567) بدلًا من VIN من 17 خانة.",
    "Before you buy a used car in the UAE": "قبل شراء سيارة مستعملة في الإمارات",
    "<b>Match the VIN in three places</b>Mulkiya, windscreen plate and door pillar sticker. Scratched or replaced plates are a warning sign.": "<b>طابق رقم VIN في ثلاثة أماكن</b>الملكية، ولوحة الزجاج الأمامي، وملصق عمود الباب. اللوحات المخدوشة أو المستبدلة علامة تحذير.",
    "<b>Check the official history</b>As of 2026, Dubai RTA, the MOI e-services and Emirates Vehicle Gate offer vehicle and accident history lookups by chassis number. Abu Dhabi uses its own police and TAMM services. Fees and names change, so check the official sites.": "<b>افحص السجل الرسمي</b>حتى عام 2026، توفّر هيئة الطرق والمواصلات في دبي والخدمات الإلكترونية لوزارة الداخلية وبوابة الإمارات للمركبات الاستعلام عن سجل المركبة وحوادثها برقم الشاصي. وتستخدم أبوظبي خدمات شرطتها ومنصة تم. الرسوم والأسماء تتغيّر، فراجع المواقع الرسمية.",
    "<b>For a US or Canada import</b>Buy a history report (such as Carfax or AutoCheck) using the VIN. Look for salvage, flood, rebuilt or total-loss titles, and odometer jumps.": "<b>إذا كانت واردة من أمريكا أو كندا</b>اشترِ تقرير سجل (مثل Carfax أو AutoCheck) برقم VIN. ابحث عن سندات ملكية مثل salvage أو flood أو rebuilt أو total loss، وعن قفزات في عدّاد المسافة.",
    "<b>Look for flood signs</b>Musty smell, damp or new carpets, rust on seat rails and under the dash, silt in the spare-wheel well, foggy lights, and electrical faults.": "<b>ابحث عن علامات الغرق</b>رائحة رطوبة، وسجاد رطب أو جديد، وصدأ على سكك المقاعد وتحت لوحة القيادة، وطمي في مكان الإطار الاحتياطي، وأضواء ضبابية من الداخل، وأعطال كهربائية.",
    "<b>Get an independent inspection</b>Many garages and the RTA-approved test centres offer pre-purchase checks. Ask for paint thickness readings, which show repainted panels.": "<b>اطلب فحصًا مستقلًا</b>كثير من الكراجات ومراكز الفحص المعتمدة من هيئة الطرق والمواصلات تقدّم فحص ما قبل الشراء. اطلب قياس سماكة الطلاء، فهو يكشف القطع المعاد صبغها.",
    "<b>Check for loans and fines</b>Make sure any bank mortgage on the car is cleared and fines are paid before transfer.": "<b>تحقّق من القروض والمخالفات</b>تأكد من فك أي رهن بنكي على السيارة ومن سداد المخالفات قبل نقل الملكية.",
    "How the check digit works: each of the 17 characters becomes a number (letters have fixed values, so A=1, B=2 … J=1, S=2), each position has a weight (8, 7, 6 … 10 for position 8), and the weighted sum divided by 11 leaves a remainder that should equal character 9 (10 is written X). One mistyped or altered character almost always breaks it. It is required in North America and China. Many European and Japanese makers don't use it, so a mismatch on those cars is normal.": "كيف يعمل رقم التحقق: تتحول كل خانة من الخانات الـ17 إلى رقم (للحروف قيم ثابتة، فـA=1 وB=2 … وJ=1 وS=2)، ولكل موضع وزن (8، 7، 6 … و10 للموضع 8)، وباقي قسمة المجموع الموزون على 11 يجب أن يساوي الخانة التاسعة (ويُكتب 10 على شكل X). خانة واحدة مكتوبة خطأً أو معدّلة تكسره في الغالب. وهو إلزامي في أمريكا الشمالية والصين. أما كثير من الشركات الأوروبية واليابانية فلا تستخدمه، لذا عدم التطابق في سياراتها أمر طبيعي.",
    "This looks like a Japanese frame number, not a 17-character VIN. Cars built for the Japanese home market use these. The part before the dash is the model code.": "يبدو هذا رقم هيكل يابانيًا، لا رقم VIN من 17 خانة. تستخدمه السيارات المصنوعة للسوق اليابانية المحلية. والجزء الذي قبل الشَّرطة هو رمز الطراز.",
    // this message is written with innerHTML into an existing element, so it is translated piece by piece
    "VINs never contain the letters I, O or Q": "لا يحتوي رقم VIN أبدًا على الحروف I أو O أو Q",
    ", to avoid confusion with 1 and 0. Check for a typo.": "، تجنبًا للخلط مع 1 و0. تحقّق من وجود خطأ في الكتابة.",
    "Only letters and numbers, please.": "حروف وأرقام فقط من فضلك.",
    "Position 7 is a number, so the older cycle applies (North American rule).": "الخانة 7 رقم، لذا تنطبق الدورة الأقدم (قاعدة أمريكا الشمالية).",
    "Position 7 is a letter, so the 2010+ cycle applies (North American rule).": "الخانة 7 حرف، لذا تنطبق دورة ما بعد 2010 (قاعدة أمريكا الشمالية).",
    "Not a standard year code. Some non-US makers don't encode the year here.": "ليس رمز سنة قياسيًا. بعض الشركات غير الأمريكية لا تضع السنة هنا.",
    "The number is internally consistent.": "الرقم متّسق داخليًا.",
    "Normal for many European and Japanese makers, which don't use a check digit.": "أمر طبيعي لدى كثير من الشركات الأوروبية واليابانية التي لا تستخدم رقم تحقق.",
    "Maker": "الشركة المصنّعة", "Built in": "بلد التصنيع", "Model year": "سنة الطراز", "Plant code": "رمز المصنع", "Vehicle details": "تفاصيل المركبة", "Serial number": "الرقم التسلسلي",
    "Not in the built-in list": "ليست في القائمة المدمجة",
    "Unknown": "غير معروفة",
    "Position 11. Each maker has its own list of factory codes.": "الخانة 11. لكل شركة قائمتها الخاصة برموز المصانع.",
    "Positions 4 to 8 describe model, body and engine, in the maker's own code.": "الخانات من 4 إلى 8 تصف الطراز والهيكل والمحرك، برموز الشركة الخاصة.",
    "Small maker: positions 12 to 14 extend the maker code.": "شركة صغيرة: الخانات من 12 إلى 14 تكمل رمز الشركة.",
    "The car's production number.": "رقم إنتاج السيارة.",
    "Check digit fails": "رقم التحقق غير صحيح",
    "Either there's a typo or the number is not genuine. Re-type it carefully from the mulkiya, then compare with the plates on the car.": "إما أن هناك خطأ في الكتابة أو أن الرقم غير أصلي. أعد كتابته بعناية من الملكية، ثم قارنه باللوحات على السيارة.",
    "Many cars built in North America are sold new in the GCC too, but this is also where most US and Canada imports come from. Ask whether it is GCC spec, and run a US history report on this VIN.": "كثير من السيارات المصنوعة في أمريكا الشمالية تُباع جديدة في الخليج أيضًا، لكن من هناك تأتي معظم الواردات الأمريكية والكندية. اسأل هل هي خليجية المواصفات، واطلب تقرير سجل أمريكيًا لهذا الرقم.",
    "Japan builds many GCC-spec cars. A 17-character VIN suggests it was made for export rather than the Japanese home market.": "تصنع اليابان كثيرًا من السيارات الخليجية المواصفات. ورقم VIN من 17 خانة يدل على أنها صُنعت للتصدير لا للسوق اليابانية المحلية.",
    "The number looks well formed. Now match it with the mulkiya and the plates on the car.": "يبدو الرقم سليم البنية. طابقه الآن مع الملكية واللوحات على السيارة.",
    "Make": "الماركة", "Model": "الطراز", "Trim": "الفئة", "Series": "السلسلة", "Body": "الهيكل", "Type": "النوع", "Drive": "نظام الدفع", "Cylinders": "الأسطوانات", "Engine (L)": "المحرك (لتر)", "Power (hp)": "القوة (حصان)", "Fuel": "الوقود", "Gearbox": "ناقل الحركة", "Doors": "الأبواب", "Manufacturer": "الشركة المصنّعة", "Plant city": "مدينة المصنع", "Plant country": "بلد المصنع",
    "Asking vPIC…": "جارٍ سؤال vPIC…",
    "vPIC has no details for this VIN. That is common for cars made only for the GCC, Europe or Asia.": "لا توجد لدى vPIC تفاصيل لهذا الرقم. وهذا شائع في السيارات المصنوعة للخليج أو أوروبا أو آسيا فقط.",
    "Couldn't reach the vPIC service. Check your connection and try again. Everything above still works offline.": "تعذّر الوصول إلى خدمة vPIC. تحقّق من اتصالك وحاول مرة أخرى. كل ما سبق يعمل دون اتصال."
  };
  for (var c in C) d[c] = C[c];
  for (var m in MK) d[m] = MK[m];
  LabAr.add(d, [
    [/^A VIN has 17 characters\. This one has (\d+)\.( Cars from before 1981, and some Japanese home-market cars, use shorter numbers\.)?$/, function (m, n, x) { return 'يتكون رقم VIN من 17 خانة، وهذا الرقم فيه ' + n + '.' + (x ? ' السيارات المصنوعة قبل 1981 وبعض سيارات السوق اليابانية المحلية تستخدم أرقامًا أقصر.' : ''); }],
    [/^Probably (\d{4})\. The code repeats every 30 years \((\d{4}) or (\d{4})\), and some European and Japanese makers don't put the year here at all, so confirm it on the mulkiya\.$/, 'على الأرجح $1. يتكرر الرمز كل 30 سنة ($2 أو $3)، وبعض الشركات الأوروبية واليابانية لا تضع السنة هنا أصلًا، فتأكد منها في الملكية.'],
    [/^Probably (\d{4})$/, 'على الأرجح $1'],
    [/^From the first three characters \((\w{3})\)\.$/, 'من الخانات الثلاث الأولى ($1).'],
    [/^WMI (\w{3})\. Try the online lookup\.$/, 'WMI $1. جرّب البحث عبر الإنترنت.'],
    [/^(Africa|Asia|Europe|North America|Oceania|South America)\. This is where it was made, not where it was first sold\.$/, function (m, r) { return C[r] + '. هذا مكان التصنيع، لا مكان البيع الأول.'; }],
    [/^Valid \((\w)\)$/, 'صحيح ($1)'],
    [/^Doesn't match: expected (\w), found (\w)$/, 'غير مطابق: المتوقع $1، والموجود $2'],
    [/^Not used here \(calculated (\w), found (\w)\)$/, 'غير مستخدم هنا (المحسوب $1، والموجود $2)'],
    [/^For a car built in (China|North America) this should always match\. Check for a typo, then treat a mismatch on the papers as a serious warning\.$/, function (m, w) { return 'في سيارة مصنوعة في ' + (w === 'China' ? 'الصين' : 'أمريكا الشمالية') + ' يجب أن يتطابق دائمًا. تحقّق من وجود خطأ في الكتابة، ثم اعتبر عدم التطابق في الأوراق تحذيرًا جديًا.'; }],
    [/^Built in (.+?)(?:, (.+))?$/, function (m, ct, mk) { return 'صُنعت في ' + country(ct) + (mk ? '، ' + maker(mk) : ''); }],
    [/^Model year (\d{4})$/, 'سنة الطراز $1'],
    [/^VIN ([A-Z0-9]{17})$/, 'VIN $1'],
    [/^vPIC notes: ([\s\S]*)$/, 'ملاحظات vPIC: $1'],
    // codes cut from the VIN itself
    [/^[A-Z0-9]{1,9}$/, '$&'],
    [BRAND, function (m) { return maker(m); }]
  ]);
})();
