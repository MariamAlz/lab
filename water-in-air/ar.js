(function () {
  function u(x) { return '\u2066' + x + '\u2069'; }
  function day(d) { return d === 'today' ? 'اليوم' : d === 'tomorrow' ? 'غدًا' : d; }
  // "07:00–09:00 today", "from 22:00 today to 09:00 tomorrow", joined with " and "
  function range(r) {
    var a = r.match(/^(\d\d:\d\d)–(\d\d:\d\d) (today|tomorrow)$/); if (a) return 'من ' + a[1] + ' إلى ' + a[2] + ' ' + day(a[3]);
    var b = r.match(/^from (\d\d:\d\d) (today|tomorrow) to (\d\d:\d\d) (today|tomorrow)$/); if (b) return 'من ' + b[1] + ' ' + day(b[2]) + ' إلى ' + b[3] + ' ' + day(b[4]);
    return r;
  }
  function ranges(s) { return s.split(' and ').map(range).join(' و'); }
  var RG = '((?:(?:from )?\\d\\d:\\d\\d[– ](?:\\d\\d:\\d\\d |today |tomorrow |to |\\d\\d:\\d\\d )*(?:today|tomorrow))(?: and (?:from )?\\d\\d:\\d\\d[– ](?:\\d\\d:\\d\\d |today |tomorrow |to |\\d\\d:\\d\\d )*(?:today|tomorrow))*)';
  var FEEL = { oppressive: 'خانقة', muggy: 'رطبة ثقيلة', sticky: 'لزجة', comfortable: 'مريحة' };
  LabAr.add({
    "Water in the Air": "الماء في الهواء",
    "Tool · Weather · Science · Live": "أداة · الطقس · علوم · مباشر",
    "How much water is in the air.": "كم من الماء في الهواء.",
    "On a humid UAE summer night, the outdoor air that would fill an ordinary bedroom carries about a litre of water as invisible vapour. This turns the live temperature and humidity at your spot into numbers you can picture: grams per cubic metre, litres in your room, what your AC drips out each hour, and whether tomorrow morning will be foggy.": "في ليلة صيف رطبة في الإمارات، يحمل الهواء الخارجي الذي يكفي لملء غرفة نوم عادية نحو لتر من الماء على شكل بخار غير مرئي. تحوّل هذه الأداة درجة الحرارة والرطوبة الحاليتين في مكانك إلى أرقام يمكنك تخيّلها: غرامات في كل متر مكعب، ولترات في غرفتك، وكم يقطر مكيّفك كل ساعة، وهل سيكون صباح الغد ضبابيًا.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا",
    "Your AC as a dehumidifier": "مكيّفك كمجفف للهواء",
    "Fog watch · next 36 hours": "مراقبة الضباب · الساعات الـ36 القادمة",
    "Temperature and dew point": "درجة الحرارة ونقطة الندى",
    "Dew point": "نقطة الندى",
    "Fog likely (gap under 1.5°C)": "ضباب محتمل (الفرق أقل من 1.5°C)",
    "<b>Why mornings get foggy.</b> The dew point is the temperature at which the air is full and can't hold its water as vapour any more. On clear, calm nights the ground loses heat to the sky and the air above it cools. If it cools down to the dew point, the extra water condenses on dust and salt particles as tiny droplets: fog. Coastal UAE gets it most from September to March, when nights are cool and sea air is moist. It usually burns off within a couple of hours of sunrise.": "<b>لماذا تكون الصباحات ضبابية.</b> نقطة الندى هي الدرجة التي يمتلئ عندها الهواء فلا يعود قادرًا على حمل الماء بخارًا. في الليالي الصافية الهادئة تفقد الأرض حرارتها نحو السماء فيبرد الهواء فوقها. وإن برد حتى نقطة الندى تكثّف الماء الزائد على ذرات الغبار والملح قطيراتٍ صغيرة: إنه الضباب. يكثر على ساحل الإمارات من سبتمبر إلى مارس، حين تبرد الليالي ويكون هواء البحر رطبًا، ويتلاشى عادة خلال ساعتين من الشروق.",
    "<b>Why glasses and car windows steam up.</b> Any surface colder than the dew point collects water. Step out of a 22°C car into air with a 28°C dew point and your sunglasses fog instantly. In winter it flips: your breath makes the air inside the car more humid than the cold windscreen can handle, so it mists on the inside. Point the AC at the glass: it dries the air first.": "<b>لماذا يتكثف البخار على النظارات ونوافذ السيارة.</b> أي سطح أبرد من نقطة الندى يتجمع عليه الماء. اخرج من سيارة بدرجة 22°C إلى هواء نقطة نداه 28°C وسيغطي البخار نظارتك الشمسية فورًا. وفي الشتاء ينعكس الأمر: أنفاسك تجعل الهواء داخل السيارة أرطب مما يحتمله الزجاج الأمامي البارد، فيتكثف البخار من الداخل. وجّه المكيّف إلى الزجاج، فهو يجفف الهواء أولًا.",
    "Your room": "غرفتك",
    "Length (m)": "الطول (م)", "Width (m)": "العرض (م)", "Height (m)": "الارتفاع (م)",
    "Room temperature (°C)": "حرارة الغرفة (\u2066°C\u2069)",
    "Room humidity (%)": "رطوبة الغرفة (%)",
    "A cheap hygrometer will tell you the room's humidity. Most AC'd UAE homes sit at 40–60%.": "يخبرك مقياس رطوبة رخيص برطوبة الغرفة. معظم البيوت المكيّفة في الإمارات بين 40 و60%.",
    "Your AC": "مكيّفك",
    "Size (tons)": "السعة (طن)",
    "1 ton": "1 طن", "1.5 ton": "1.5 طن", "2 ton": "2 طن", "2.5 ton": "2.5 طن", "3 ton": "3 طن",
    "Airflow (m³ per hour)": "تدفق الهواء (م³ في الساعة)",
    "Coil temperature (°C)": "حرارة الملف (\u2066°C\u2069)",
    "Outside air leaking in (room volumes per hour)": "الهواء الخارجي المتسرب (حجم الغرفة في الساعة)",
    "Typical figures, edit to match yours. Split units move about 400 cubic feet a minute per ton (680 m³/h per ton). The cold coil inside the unit is usually 8 to 14°C. Picking a size fills in a typical airflow.": "أرقام نموذجية، عدّلها لتطابق مكيّفك. تدفع وحدات السبليت نحو 400 قدم مكعب في الدقيقة لكل طن (680 م³/س لكل طن). والملف البارد داخل الوحدة يكون عادة بين 8 و14°C. اختيار السعة يملأ تدفق الهواء النموذجي تلقائيًا.",
    "Humidity": "الرطوبة", "relative": "نسبية", "Water in the air": "الماء في الهواء",
    "oppressive": "خانقة", "muggy": "رطبة ثقيلة", "sticky": "لزجة", "comfortable": "مريحة",
    "Each bar is a 250 ml glass.": "كل عمود يمثل كوبًا سعته 250 مل.",
    "While the compressor runs, about": "أثناء عمل الضاغط، يتكثف نحو",
    "condense on the coil and drip out of the drain pipe.": "على الملف ويقطر من أنبوب التصريف.",
    "steam up": "سيغطيها البخار",
    "stay clear": "تبقى صافية",
    "The fog forecast needs live data.": "توقع الضباب يحتاج إلى بيانات مباشرة.",
    "Fog is likely": "الضباب محتمل", "Mist or patchy fog is possible": "قد تتشكل شبورة أو ضباب متقطع", "Fog is unlikely": "الضباب غير محتمل",
    "Wet car and sweating windows": "سيارة مبللة ونوافذ متعرّقة",
    "Your AC at home (°C)": "مكيّف البيت (\u2066°C\u2069)",
    "Your car's AC (°C)": "مكيّف السيارة (\u2066°C\u2069)",
    "Hour by hour: wet windscreen, sweating windows, fogging glasses": "ساعة بساعة: زجاج أمامي مبلل، نوافذ متعرّقة، نظارات يغطيها البخار",
    "Tips: a windscreen wet on the <b>outside</b> needs wipers, not cold air. Blowing AC onto it chills the glass and makes it worse, so point the vents away or set the screen to warm. Misting on the <b>inside</b> (cool, damp winter mornings) is the opposite: AC on the windscreen setting dries the air and clears it. Before stepping out with glasses or a camera, let them warm up in a pocket or bag for a few minutes.": "نصائح: الزجاج الأمامي المبلل من <b>الخارج</b> يحتاج إلى المساحات لا إلى هواء بارد. توجيه المكيّف إليه يبرّد الزجاج ويزيد الأمر سوءًا، فأبعد الفتحات عنه أو اضبطها على الدافئ. أما البخار من <b>الداخل</b> (في صباحات الشتاء الباردة الرطبة) فعكس ذلك: تشغيل المكيّف على وضع الزجاج الأمامي يجفف الهواء ويزيل البخار. وقبل الخروج بنظارة أو كاميرا، دعها تدفأ في جيبك أو حقيبتك بضع دقائق.",
    "Windscreen:": "الزجاج الأمامي:",
    "wet in the morning": "مبلل في الصباح",
    "should stay dry": "سيبقى جافًا على الأرجح",
    "overnight.": "طوال الليل.",
    "Windows: the": "النوافذ:",
    "outside of your AC'd windows will sweat": "سيتعرّق الوجه الخارجي لنوافذك المكيّفة",
    "Windows:": "النوافذ:",
    "no sweating": "لا تعرّق",
    "on the outside.": "على الوجه الخارجي.",
    "Glasses and phone cameras:": "النظارات وكاميرات الهواتف:",
    "will fog": "سيغطيها البخار",
    "Give them a few minutes to warm up before you take a photo.": "امنحها بضع دقائق لتدفأ قبل أن تلتقط صورة.",
    "This needs the live hourly forecast.": "يحتاج هذا إلى التوقعات المباشرة لكل ساعة.",
    "Windscreen": "الزجاج الأمامي", "Windows": "النوافذ", "Glasses": "النظارات",
    "Couldn't reach the weather service. Showing the room maths with typical summer values (35°C, 60%).": "تعذّر الوصول إلى خدمة الطقس. نعرض حسابات الغرفة بقيم صيفية نموذجية (35°C، 60%).",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  }, [
    [/^Fetching live conditions for (.+)…$/, function (m, n) { return 'جارٍ جلب الأحوال الحالية لـ' + LabAr.t(n) + '…'; }],
    [/^(.+) · live from Open-Meteo, (\d\d:\d\d) local time$/, function (m, n, t) { return LabAr.t(n) + ' · مباشر من Open-Meteo، الساعة ' + t + ' بالتوقيت المحلي'; }],
    [/^([\d.,-]+) g\/m³$/, function (m, a) { return u(a + ' g/m³'); }],
    [/^could hold ([\d.,]+) at this temperature$/, 'يمكنه حمل $1 عند هذه الحرارة'],
    [/^In your ([\d.,]+) m³ room$/, 'في غرفتك البالغة $1 م³'],
    [/^([\d.,]+) ml$/, '$1 مل'],
    [/^That's the water in the same volume of outdoor air right now \(([\d.,]+) g in every cubic metre\), about (a few sips|(\d+) glass(?:es)?)\. Your room at ([\d.]+)°C and ([\d.]+)% holds ([\d.,]+) ml\. Spread over the floor, the outdoor amount would make a film ([\d.,]+) mm thick\.$/, function (m, g, cups, n, t, rh, ml, mm) {
      return 'هذا هو الماء في الحجم نفسه من الهواء الخارجي الآن (' + g + ' غرام في كل متر مكعب)، أي ' + (n ? 'نحو ' + n + (n === '1' ? ' كوب' : ' أكواب') : 'بضع رشفات') + '. أما غرفتك عند ' + u(t + '°C') + ' ورطوبة ' + rh + '% فتحمل ' + ml + ' مل. ولو انتشرت كمية الهواء الخارجي على الأرضية لشكّلت طبقة سمكها ' + mm + ' مم.';
    }],
    [/^([\d.,]+) litres an hour$/, '$1 لتر في الساعة'],
    [/^How: ([\d.,]+) m³ of room air an hour carries ([\d.,]+) g of water per m³ into the unit\. Air leaving a ([\d.]+)°C coil can only hold about ([\d.,]+) g\/m³, so the difference becomes liquid \(allowing for some air slipping past the coil\)\. (Right now the room's dew point is below the coil temperature, so the coil stays dry and nothing drips\. )?To keep the room at ([\d.]+)%, the AC only needs to remove the moisture that arrives: about ([\d.,]+) L\/h leaking in from outside plus about ([\d.]+) L\/h per person breathing and sweating\. Once it has, it cycles off or slows down, which is why a too-big AC leaves rooms cold but clammy\.$/, function (m, f, a, tc, ac, dry, rh, leak, ppl) {
      return 'الطريقة: يدخل الوحدة ' + f + ' م³ من هواء الغرفة كل ساعة، في كل م³ منها ' + a + ' غرام من الماء. والهواء الخارج من ملف بدرجة ' + u(tc + '°C') + ' لا يحمل إلا نحو ' + ac + ' غرام/م³، فيتحول الفرق إلى سائل (مع احتساب بعض الهواء الذي يتجاوز الملف). ' + (dry ? 'نقطة ندى الغرفة الآن أقل من حرارة الملف، فيبقى الملف جافًا ولا يقطر شيء. ' : '') + 'وللإبقاء على رطوبة الغرفة عند ' + rh + '%، لا يحتاج المكيّف إلا إلى إزالة الرطوبة الداخلة: نحو ' + leak + ' لتر/س تتسرب من الخارج، ونحو ' + ppl + ' لتر/س لكل شخص من التنفس والتعرّق. وبعد ذلك يتوقف أو يبطئ، ولهذا يترك المكيّف الأكبر من اللازم الغرف باردة لكن رطبة.';
    }],
    [/^Right now, glasses or a phone at$/, 'الآن، النظارات أو الهاتف بدرجة'],
    [/^([\d.]+)°C$/, function (m, a) { return u(a + '°C'); }],
    [/^from an AC'd car or room will$/, 'الخارجة من سيارة أو غرفة مكيّفة'],
    [/^outdoors: the dew point is ([\d.-]+)°C, warmer than the glass\.$/, function (m, a) { return 'في الخارج: نقطة الندى ' + u(a + '°C') + '، أدفأ من الزجاج.'; }],
    [/^Right now, glasses at ([\d.]+)°C from an AC'd room$/, function (m, a) { return 'الآن، النظارات بدرجة ' + u(a + '°C') + ' الخارجة من غرفة مكيّفة'; }],
    [/^outdoors: the dew point \(([\d.-]+)°C\) is below their temperature\. Anything colder than ([\d.-]+)°C would still mist\.$/, function (m, a, b) { return 'في الخارج: نقطة الندى (' + u(a + '°C') + ') أقل من حرارتها. لكن أي شيء أبرد من ' + u(b + '°C') + ' سيغطيه البخار.'; }],
    [/^\. The closest the air gets to its dew point is around$/, '. أقرب ما يصل الهواء إلى نقطة الندى نحو الساعة'],
    [/^(today|tomorrow): ([\d.-]+)°C against a dew point of ([\d.-]+)°C, a gap of ([\d.-]+)°C(?:, with (\d+) km\/h wind)?(?:, and the model expects visibility down to ([\d.]+) km)?\. (Drive with low beams and keep your distance; watch for NCM fog alerts\.|Fog needs the gap to close to about 1°C, ideally with little wind\.)$/, function (m, d, t, td, gap, w, vis, tail) {
      return day(d) + ': ' + u(t + '°C') + ' مقابل نقطة ندى ' + u(td + '°C') + '، بفارق ' + u(gap + '°C') + (w ? '، مع رياح ' + w + ' كم/س' : '') + (vis ? '، ويتوقع النموذج انخفاض مدى الرؤية إلى ' + vis + ' كم' : '') + '. ' + (/^Drive/.test(tail) ? 'قُد بالأضواء المنخفضة وحافظ على المسافة، وتابع تنبيهات الضباب من المركز الوطني للأرصاد.' : 'يحتاج الضباب إلى أن يضيق الفرق إلى نحو 1°C، ويُفضّل مع رياح خفيفة.');
    }],
    [/^(\d{1,2})h$/, function (m, h) { return (h.length < 2 ? '0' : '') + h + ':00'; }],
    [/^\u2066[^\u2069]*\u2069$/, function (m) { return m; }],
    [/^(\d\d:\d\d) fog likely$/, '$1 ضباب محتمل'],
    [/^(\d\d:\d\d) · dew point ([\d.-]+)°C$/, '$1 · نقطة الندى $2°C'],
    [new RegExp('^, ' + RG + '\\.$'), function (m, r) { return '، ' + ranges(r) + '.'; }],
    [new RegExp('^' + RG + '\\.$'), function (m, r) { return ranges(r) + '.'; }],
    [new RegExp('^stepping out of a ([\\d.]+)°C car or room(?: ' + RG + ')?\\.$'), function (m, t, r) { return 'عند الخروج من سيارة أو غرفة بدرجة ' + u(t + '°C') + (r ? ' ' + ranges(r) : '') + '.'; }],
    [/^The air drops to within about (\d)°C of its dew point, and car glass under an open sky cools below the air\. Expect dew, or a coat of muddy drops if there's dust about\.$/, function (m, a) { return 'ينخفض الهواء إلى نحو ' + u(a + '°C') + ' من نقطة الندى، وزجاج السيارة تحت سماء مكشوفة يبرد أكثر من الهواء. توقّع الندى، أو قطرات موحلة إن كان في الجو غبار.'; }],
    [/^The closest the air gets to its dew point is ([\d.-]+)°C at (\d\d:\d\d)\.$/, function (m, a, t) { return 'أقرب ما يصل الهواء إلى نقطة الندى فارق ' + u(a + '°C') + ' عند ' + t + '.'; }],
    [/^The outdoor dew point reaches ([\d.-]+)°C, warmer than glass cooled to about ([\d.]+)°C by your AC\. Single glazing sweats most; it's harmless and clears by itself\.$/, function (m, a, b) { return 'تبلغ نقطة الندى في الخارج ' + u(a + '°C') + '، وهي أدفأ من زجاج برّده مكيّفك إلى نحو ' + u(b + '°C') + '. الزجاج المفرد يتعرّق أكثر، والأمر غير ضار ويزول وحده.'; }],
    [/^The outdoor dew point stays below ([\d.]+)°C, so glass at AC temperature stays dry\.$/, function (m, a) { return 'تبقى نقطة الندى في الخارج أقل من ' + u(a + '°C') + '، فيبقى الزجاج بحرارة المكيّف جافًا.'; }],
    [/^The dew point stays below ([\d.]+)°C\.$/, function (m, a) { return 'تبقى نقطة الندى أقل من ' + u(a + '°C') + '.'; }]
  ]);
})();
