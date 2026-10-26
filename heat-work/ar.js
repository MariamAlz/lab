(function () {
  var LVN = { 'Lower risk': 'خطر أقل', 'Moderate': 'متوسط', 'High': 'مرتفع', 'Very high': 'مرتفع جدًا', 'Extreme': 'شديد' };
  var WR = {
    'Normal work, regular breaks': 'عمل عادي مع استراحات منتظمة',
    '50 min work, 10 min rest': '50 دقيقة عمل، 10 دقائق راحة',
    '45 min work, 15 min rest': '45 دقيقة عمل، 15 دقيقة راحة',
    '30 min work, 30 min rest': '30 دقيقة عمل، 30 دقيقة راحة',
    'Stop heavy work. Light essential work only, 15 min on, 45 min rest': 'أوقف العمل الشاق. العمل الخفيف الضروري فقط: 15 دقيقة عمل، 45 دقيقة راحة'
  };
  var WA = { '0.5 L an hour': '0.5 لتر في الساعة', '0.75 L an hour': '0.75 لتر في الساعة', '1 L an hour': '1 لتر في الساعة' };
  var d = {
    "Safe Hours Outside": "ساعات العمل الآمنة في الخارج",
    "Tool · Weather · Work · Live": "أداة · الطقس · العمل · مباشر",
    "Safe hours to work outside.": "ساعات العمل الآمنة في الخارج.",
    "For anyone planning outdoor work in the UAE: building sites, gardens, deliveries, car washing, events. It takes the hourly forecast for your area and turns it into heat risk, how long to work and rest each hour, and how much water to drink. It also finds the best hours today and tomorrow.":
      "لكل من يخطط لعمل في الهواء الطلق في الإمارات: مواقع البناء، الحدائق، التوصيل، غسيل السيارات، الفعاليات. تأخذ الأداة التوقعات الساعية لمنطقتك وتحوّلها إلى مستوى خطر الحرارة، ومدة العمل والراحة في كل ساعة، وكمية الماء المطلوبة. كما تجد أفضل الساعات اليوم وغدًا.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا", "Ruwais": "الرويس",
    "Work in the sun": "العمل تحت الشمس", "Work in the shade": "العمل في الظل",
    "Work between": "العمل بين الساعة", "and": "و", "Block of": "فترة مدتها",
    "2 hours": "ساعتان", "3 hours": "3 ساعات", "4 hours": "4 ساعات",
    "air temperature": "حرارة الهواء", "heat index": "مؤشر الحرارة", "WBGT (estimated)": "WBGT (تقديري)",
    "Best slots": "أفضل الفترات", "Hour by hour": "ساعة بساعة",
    "Show all 24 hours": "اعرض الساعات الـ24 كلها",
    "Risk levels · moderate work": "مستويات الخطر · عمل متوسط الجهد",
    "Work / rest each hour": "العمل / الراحة في كل ساعة", "Water": "الماء",
    "under 25°C": "أقل من 25°C", "25 to 27.9°C": "من 25 إلى 27.9°C", "28 to 29.9°C": "من 28 إلى 29.9°C", "30 to 31.9°C": "من 30 إلى 31.9°C", "32°C and above": "32°C فأكثر",
    "For workers used to the heat. In the first week of hot work, or for heavy work like digging or carrying, step up one level. Drink a cup (about 250 ml) every 15 to 20 minutes rather than a lot at once, and not more than about 1.5 litres an hour.":
      "للعمال المعتادين على الحرارة. في الأسبوع الأول من العمل في الحر، أو في العمل الشاق كالحفر والحمل، انتقل إلى المستوى الأعلى. اشرب كوبًا (نحو 250 مل) كل 15 إلى 20 دقيقة بدلًا من كمية كبيرة دفعة واحدة، ولا تتجاوز نحو 1.5 لتر في الساعة.",
    "Heat exhaustion": "الإجهاد الحراري",
    "Heavy sweating, cold clammy skin": "تعرّق غزير، وجلد بارد ورطب",
    "Dizziness, headache, feeling sick": "دوار، صداع، غثيان",
    "Muscle cramps, weakness, fast pulse": "تشنجات عضلية، ضعف، نبض سريع",
    "What to do": "ماذا تفعل",
    "Stop work and move to shade or AC": "أوقف العمل وانتقل إلى الظل أو مكان مكيّف",
    "Loosen clothes, cool with wet cloths": "خفّف الملابس، وبرّد الجسم بقطع قماش مبللة",
    "Sip water or an electrolyte drink": "اشرب الماء أو مشروب أملاح على دفعات صغيرة",
    "No better in 30 to 60 minutes? Get medical help": "لم يتحسن خلال 30 إلى 60 دقيقة؟ اطلب المساعدة الطبية",
    "Heat stroke · emergency": "ضربة الشمس · حالة طارئة",
    "Confused, slurred speech, acting strangely": "ارتباك، تلعثم في الكلام، تصرفات غريبة",
    "Hot skin, may stop sweating": "جلد ساخن، وقد يتوقف التعرّق",
    "Fainting, fits, collapse": "إغماء، تشنجات، انهيار",
    "Call 998 for an ambulance now": "اتصل بالإسعاف على 998 فورًا",
    "Cool them fast: shade, water on skin, fan, ice packs at neck, armpits and groin": "برّده بسرعة: ظل، ماء على الجلد، مروحة، كمادات ثلج على الرقبة والإبطين وأعلى الفخذين",
    "Don't give drinks if they aren't fully awake": "لا تعطه أي مشروب إن لم يكن واعيًا تمامًا",
    "Stay with them until help arrives": "ابقَ معه حتى تصل المساعدة",
    "<b>Why WBGT and not the temperature?</b> Your body cools by sweating, and sweat only works if it can evaporate. The wet bulb globe temperature (WBGT) adds humidity, sun and air together into one number, which is why occupational heat rules use it. The heat index only adds humidity, and it assumes shade.":
      "<b>لماذا WBGT وليس درجة الحرارة؟</b> يبرد جسمك بالتعرّق، والعرق لا يفيد إلا إذا تبخّر. مؤشر الحرارة الرطبة الكروية (WBGT) يجمع الرطوبة والشمس والهواء في رقم واحد، ولهذا تعتمد عليه قواعد السلامة المهنية من الحرارة. أما مؤشر الحرارة فيضيف الرطوبة فقط، ويفترض الوجود في الظل.",
    "How it's worked out: the heat index uses the NOAA (Rothfusz) formula. WBGT is <b>estimated</b>, not measured. In the shade it is 0.7 × wet-bulb + 0.3 × air temperature (Stull's wet-bulb formula). In the sun it moves towards the Australian Bureau of Meteorology approximation, 0.567 × air temperature + 0.393 × vapour pressure + 3.94, in proportion to the forecast sunshine. Wind is not included, so a strong breeze can make it feel a little easier. Work/rest and water follow general occupational heat guidance (the kind used by safety bodies and the military). Forecasts from Open-Meteo. This is a planning aid, not medical or legal advice. Follow your employer's heat plan and MOHRE rules.":
      "طريقة الحساب: يُحسب مؤشر الحرارة بمعادلة NOAA (روثفوس). أما WBGT فهو <b>تقديري</b> وليس قياسًا. في الظل يساوي 0.7 × درجة الحرارة الرطبة + 0.3 × حرارة الهواء (معادلة Stull للحرارة الرطبة). وتحت الشمس يقترب من تقريب مكتب الأرصاد الجوية الأسترالي، 0.567 × حرارة الهواء + 0.393 × ضغط بخار الماء + 3.94، بحسب شدة الإشعاع الشمسي المتوقعة. الرياح غير محسوبة، لذلك قد يخفف النسيم القوي الشعور قليلًا. تتبع أوقات العمل والراحة وكميات الماء الإرشادات المهنية العامة للعمل في الحر (كالتي تعتمدها جهات السلامة والجيوش). التوقعات من Open-Meteo. هذه أداة للتخطيط وليست نصيحة طبية أو قانونية. اتبع خطة جهة عملك للحرارة وقواعد وزارة الموارد البشرية والتوطين.",
    "Right now": "الآن",
    "No data": "لا توجد بيانات", "WBGT": "WBGT",
    "Outside your work hours": "خارج ساعات عملك",
    "Midday break from 12:30": "استراحة منتصف النهار من 12:30",
    "Midday break: no work in the sun": "استراحة منتصف النهار: لا عمل تحت الشمس",
    "Midday break is on: no outdoor work in the sun until 15:00.": "استراحة منتصف النهار سارية: لا عمل تحت الشمس حتى 15:00.",
    "Midday break is in force today": "استراحة منتصف النهار سارية اليوم",
    "Midday break: not in force today": "استراحة منتصف النهار: غير سارية اليوم",
    "Outdoor work in direct sun is not allowed from 12:30 to 15:00, from 15 June to 15 September. Employers must give shade and water. Check MOHRE for this year's dates and exemptions.":
      "يُمنع العمل تحت أشعة الشمس المباشرة من 12:30 إلى 15:00، من 15 يونيو إلى 15 سبتمبر. وعلى أصحاب العمل توفير الظل والماء. راجع وزارة الموارد البشرية والتوطين لمعرفة مواعيد هذا العام والاستثناءات.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك.",
    "Couldn't reach the forecast service. Check your connection and try again.": "تعذّر الوصول إلى خدمة التوقعات. تحقق من اتصالك وحاول مرة أخرى."
  };
  for (var k in LVN) d[k] = LVN[k];
  for (k in WR) d[k] = WR[k];
  for (k in WA) d[k] = WA[k];
  function place(n) { return LabAr.t(n); }
  LabAr.add(d, [
    [/^Right now · (\d\d:\d\d)$/, 'الآن · $1'],
    [/^([\d.]+)°C$/, '$1°C'],
    [/^(.+)\. ([\d.]+ L an hour)\.$/, function (m, a, b) { return (WR[a] || a) + '. ' + (WA[b] || b) + '.'; }],
    [/^(.+) · ([\d.]+ L an hour)$/, function (m, a, b) { return (WR[a] || a) + ' · ' + (WA[b] || b); }],
    [/^(Lower risk|Moderate|High|Very high|Extreme) · WBGT up to ([\d.]+)°C · (.+)$/, function (m, a, w, b) { return LVN[a] + ' · \u2066WBGT ' + w + '°C\u2069 · ' + (WR[b] || b); }],
    [/^No (\d)-hour block left in your work hours today\.$/, 'لم تعد هناك فترة من $1 ساعات ضمن ساعات عملك اليوم.'],
    [/^No (\d)-hour block fits your work hours\.$/, 'لا توجد فترة من $1 ساعات ضمن ساعات عملك.'],
    [/^Fetching the forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب التوقعات لـ' + place(n) + '…'; }],
    [/^(.+) · forecast from Open-Meteo$/, function (m, n) { return place(n) + ' · التوقعات من Open-Meteo'; }],
    [/^· (\d+)% · HI (\d+) · WBGT$/, '· $1% · مؤشر الحرارة $2 · WBGT']
  ]);
})();
