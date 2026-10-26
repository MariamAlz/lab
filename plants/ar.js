(function () {
  var NAME = {
    'Pothos (money plant)': 'بوتس (نبتة المال)', 'Snake plant': 'جلد النمر', 'ZZ plant': 'زاميا', 'Peace lily': 'زنبق السلام', 'Spider plant': 'نبتة العنكبوت',
    'Areca palm': 'نخلة الأريكا', 'Monstera': 'مونستيرا', 'Fiddle-leaf fig': 'تين الكمان', 'Rubber plant': 'المطاط', 'Calathea': 'كالاثيا', 'Boston fern': 'سرخس بوسطن',
    'Aloe vera': 'الصبار (ألوفيرا)', 'Jade plant': 'نبتة اليشم', 'Echeveria and other succulents': 'إشيفيريا وعصاريات أخرى', 'Cactus': 'صبار (كاكتوس)',
    'Desert rose (Adenium)': 'وردة الصحراء (أدينيوم)', 'Bougainvillea': 'جهنمية', 'Frangipani (plumeria)': 'الفل الهندي (بلوميريا)', 'Hibiscus': 'كركديه',
    'Arabian jasmine': 'فل / ياسمين عربي', 'Oleander': 'الدفلة', 'Ghaf tree': 'شجرة الغاف', 'Date palm': 'النخلة', 'Sidr (lote tree)': 'السدر', 'Neem tree': 'شجرة النيم',
    'Lemon or lime tree': 'شجرة الليمون', 'Mango tree': 'شجرة المانجو', 'Basil': 'ريحان', 'Mint': 'نعناع', 'Coriander': 'كزبرة', 'Parsley': 'بقدونس', 'Rosemary': 'إكليل الجبل',
    'Tomato': 'طماطم', 'Chilli pepper': 'فلفل حار', 'Okra (bamya)': 'بامية', 'Moringa': 'المورينجا', 'Sunflower': 'دوار الشمس', 'Petunia': 'بيتونيا',
    'Portulaca (moss rose)': 'رجلة الزينة', 'Lantana': 'لانتانا', 'Lawn (Bermuda or paspalum)': 'عشب (برمودا أو باسبالوم)'
  };
  var NOTE = {
    'Nearly unkillable indoors. Let the top half of the soil dry between waterings.': 'يكاد لا يموت داخل البيت. اترك النصف العلوي من التربة يجف بين كل سقاية وأخرى.',
    'Stores water in its leaves. Overwatering is the only common way to kill it.': 'يخزّن الماء في أوراقه. الإفراط في السقي هو الطريقة الشائعة الوحيدة لقتله.',
    'Thrives on neglect and AC rooms. Water every 2 to 3 weeks indoors.': 'ينمو جيدًا مع الإهمال وفي الغرف المكيّفة. اسقه كل 2 إلى 3 أسابيع داخل البيت.',
    'Droops dramatically when thirsty, then perks up within hours of watering.': 'يذبل بشكل واضح حين يعطش، ثم ينتعش خلال ساعات من سقيه.',
    'Safe for cats and dogs. Brown tips usually mean salty or chlorinated tap water.': 'آمن للقطط والكلاب. الأطراف البنية تعني غالبًا ماء صنبور مالحًا أو مكلورًا.',
    'Pet-safe palm. Likes bright indirect light and steady moisture.': 'نخلة آمنة للحيوانات الأليفة. تحب الضوء الساطع غير المباشر ورطوبة ثابتة.',
    'Bright indirect light makes the split leaves. Wipe dust off the leaves monthly.': 'الضوء الساطع غير المباشر يمنحها أوراقها المشقوقة. امسح الغبار عن الأوراق شهريًا.',
    'Hates being moved and AC drafts. Drops leaves when stressed.': 'يكره النقل وتيارات المكيّف، ويُسقط أوراقه حين يتعرض للإجهاد.',
    'Tough and glossy. Let the top 5 cm dry out between waterings.': 'قوي ولامع. اترك أعلى 5 سم من التربة يجف بين كل سقاية وأخرى.',
    'Pet-safe but fussy: wants humidity, which UAE AC rooms lack. Group plants together.': 'آمن للحيوانات لكنه متطلّب: يحتاج رطوبة تفتقدها الغرف المكيّفة في الإمارات. اجمع النباتات بجانب بعضها.',
    'Pet-safe. Needs humidity; a bathroom with a window is ideal.': 'آمن للحيوانات. يحتاج رطوبة، والحمّام ذو النافذة مثالي له.',
    'Loves sun and heat. Water deeply but rarely. Mildly toxic to pets.': 'يحب الشمس والحرارة. اسقه بعمق لكن نادرًا. سام قليلًا للحيوانات الأليفة.',
    'A succulent that handles balcony heat in winter; give afternoon shade in summer.': 'نبتة عصارية تتحمل حرارة الشرفة في الشتاء، وتحتاج ظلًا بعد الظهر في الصيف.',
    'Most echeverias are pet-safe. Need sun but can scorch in UAE July.': 'معظم أنواع الإشيفيريا آمنة للحيوانات. تحتاج الشمس لكنها قد تحترق في يوليو بالإمارات.',
    'Water every 2 to 4 weeks in summer, almost never in winter.': 'اسقه كل 2 إلى 4 أسابيع في الصيف، ونادرًا جدًا في الشتاء.',
    'Built for UAE sun. Very toxic sap: keep away from pets and children.': 'مهيّأة لشمس الإمارات. عصارتها شديدة السمّية: أبعدها عن الحيوانات والأطفال.',
    'Flowers best when slightly dry. Overwatering gives leaves, not flowers.': 'تزهر أفضل حين تكون جافة قليلًا. الإفراط في السقي يعطي أوراقًا لا أزهارًا.',
    'Loves heat. Drops leaves in winter, which is normal.': 'يحب الحرارة، ويُسقط أوراقه في الشتاء وهذا طبيعي.',
    'Thirsty in summer. Yellow leaves usually mean irregular watering.': 'يعطش في الصيف. اصفرار الأوراق يعني غالبًا سقيًا غير منتظم.',
    'Pet-safe and fragrant. Morning sun, afternoon shade in summer.': 'آمن للحيوانات وعطِر. شمس الصباح وظل بعد الظهر في الصيف.',
    'Very common and very tough, but every part is highly toxic to people and pets.': 'شائع جدًا وقوي جدًا، لكن كل أجزائه شديدة السمّية للناس والحيوانات.',
    'The UAE national tree. Deep roots: once established it needs little water.': 'الشجرة الوطنية لدولة الإمارات. جذورها عميقة، فبعد أن تثبت تحتاج ماءً قليلًا.',
    'Needs a lot of water in summer for good fruit. Water deeply, less often.': 'تحتاج ماءً كثيرًا في الصيف لتعطي ثمرًا جيدًا. اسقها بعمق وعلى فترات أبعد.',
    'A native tree that handles heat and some salt.': 'شجرة محلية تتحمل الحرارة وبعض الملوحة.',
    'Fast shade tree, very heat tolerant.': 'شجرة ظل سريعة النمو، تتحمل الحرارة جيدًا.',
    'Mildly toxic to pets. Deep, regular watering; mulch to keep roots cool.': 'سامة قليلًا للحيوانات. سقي عميق ومنتظم، وغطِّ التربة بالنشارة لتبقى الجذور باردة.',
    'Grows well in UAE gardens with regular water and wind protection.': 'تنمو جيدًا في حدائق الإمارات مع سقي منتظم وحماية من الرياح.',
    'Pet-safe. Grows all year if shaded in summer. Pinch flowers off.': 'آمن للحيوانات. ينمو طوال السنة إذا ظُلّل في الصيف. اقطف الأزهار أولًا بأول.',
    'Thirsty. Best October to April outdoors; indoors near a window in summer.': 'يحتاج ماءً كثيرًا. أفضل وقت له في الخارج من أكتوبر إلى أبريل، وفي الصيف داخل البيت قرب نافذة.',
    'A cool-season herb. Sow October to February; it bolts in heat.': 'عشبة للموسم البارد. ازرعها من أكتوبر إلى فبراير، فهي تُزهر وتفسد في الحر.',
    'Cool season. Pet-safe in small amounts.': 'للموسم البارد. آمن للحيوانات بكميات قليلة.',
    'Pet-safe and drought tolerant. Let it dry between waterings.': 'آمن للحيوانات ويتحمل الجفاف. اتركه يجف بين كل سقاية وأخرى.',
    'Plant September to November. Leaves and stems are toxic to pets.': 'ازرعها من سبتمبر إلى نوفمبر. أوراقها وسيقانها سامة للحيوانات.',
    'Handles heat better than tomatoes. Can fruit into early summer with shade.': 'يتحمل الحرارة أكثر من الطماطم، ويمكن أن يثمر حتى أوائل الصيف مع الظل.',
    'A rare summer vegetable that loves UAE heat. Plant March to June.': 'من الخضار الصيفية القليلة التي تحب حرارة الإمارات. ازرعها من مارس إلى يونيو.',
    'Fast-growing, heat-loving, with edible leaves.': 'سريعة النمو، تحب الحرارة، وأوراقها صالحة للأكل.',
    'Sow October to March. Kids love it.': 'ازرعه من أكتوبر إلى مارس. يحبه الأطفال.',
    'Classic UAE winter bedding flower; dies off in summer heat.': 'زهرة الأحواض الشتوية المعتادة في الإمارات، وتموت في حر الصيف.',
    'Summer flowers that love full sun and heat.': 'أزهار صيفية تحب الشمس الكاملة والحرارة.',
    'Tough and colourful but toxic berries for dogs.': 'قوية وملوّنة، لكن ثمارها سامة للكلاب.',
    'Summer lawns can need 6 to 8 L per m² a day. Consider artificial or native ground cover.': 'قد يحتاج العشب في الصيف 6 إلى 8 لترات لكل m² يوميًا. فكّر في العشب الصناعي أو غطاء نباتي محلي.'
  };
  var CAUSE = {
    'Overwatering or poor drainage': 'الإفراط في السقي أو سوء التصريف',
    'Let the soil dry before watering again and make sure the pot has a drainage hole. Remove any water sitting in the saucer. If the roots are brown and mushy, trim them and repot in fresh, airy soil.': 'اترك التربة تجف قبل السقي مرة أخرى، وتأكد أن في الأصيص فتحة تصريف. أفرغ أي ماء متجمع في الصحن. وإذا كانت الجذور بنية وطرية، فقصّها وانقل النبتة إلى تربة جديدة جيدة التهوية.',
    'Underwatering or heat stress': 'قلة السقي أو الإجهاد الحراري',
    'Water deeply until it runs out of the bottom, then check daily in summer. On balconies, move pots out of the afternoon sun and group them so they shade each other.': 'اسقِ بعمق حتى يخرج الماء من الأسفل، ثم افحصها يوميًا في الصيف. في الشرفات أبعد الأصص عن شمس ما بعد الظهر واجمعها لتظلّل بعضها.',
    'Sunburn': 'حروق الشمس',
    "Common after moving a plant outside or to a new window. Give it shade and move it gradually over 2 weeks. Burnt patches won't recover, but new leaves will be fine.": 'شائعة بعد نقل النبتة إلى الخارج أو إلى نافذة جديدة. ظلّلها وانقلها تدريجيًا خلال أسبوعين. البقع المحترقة لن تتعافى، لكن الأوراق الجديدة ستكون سليمة.',
    'Salty or hard water': 'ماء مالح أو عسر',
    'UAE tap water can carry salts that build up in pots. Once a month, flush the pot with plenty of water, or use filtered or AC-condensate water for sensitive plants.': 'قد يحمل ماء الصنبور في الإمارات أملاحًا تتراكم في الأصص. مرة في الشهر اغسل التربة بكمية وفيرة من الماء، أو استخدم ماءً مفلترًا أو ماء تكثيف المكيّف للنباتات الحساسة.',
    'Dry AC air and drafts': 'هواء المكيّف الجاف والتيارات',
    'Move the plant away from AC vents. Group plants, or set the pot on a tray of wet pebbles to raise humidity around it.': 'أبعد النبتة عن فتحات المكيّف. اجمع النباتات معًا، أو ضع الأصيص على صينية فيها حصى مبلل لرفع الرطوبة حوله.',
    'Mealybugs or scale': 'البق الدقيقي أو الحشرات القشرية',
    'Wipe the fluff off with cotton dipped in rubbing alcohol, then spray with neem oil or insecticidal soap weekly for a month. Isolate the plant.': 'امسح الزغب بقطنة مبللة بالكحول الطبي، ثم رشّ زيت النيم أو الصابون المبيد للحشرات أسبوعيًا لمدة شهر. واعزل النبتة.',
    'Spider mites': 'العنكبوت الأحمر',
    "Thrive in hot, dry, dusty air, so they're very common in the UAE. Rinse the leaves (especially undersides) in the shower, then spray neem oil weekly.": 'ينتشر في الهواء الحار الجاف المغبر، لذا هو شائع جدًا في الإمارات. اغسل الأوراق (خاصة من الأسفل) تحت الدش، ثم رشّ زيت النيم أسبوعيًا.',
    'Not enough light': 'ضوء غير كافٍ',
    'Move it closer to a bright window. Flowering plants usually need several hours of direct sun.': 'قرّبها من نافذة مضيئة. النباتات المزهرة تحتاج عادةً عدة ساعات من الشمس المباشرة.',
    'Nutrient shortage': 'نقص العناصر الغذائية',
    'Feed with a balanced liquid fertiliser every 2 to 4 weeks in the growing season. Yellow new leaves with green veins often means iron: use a chelated iron feed.': 'سمّدها بسماد سائل متوازن كل 2 إلى 4 أسابيع في موسم النمو. اصفرار الأوراق الجديدة مع بقاء العروق خضراء يدل غالبًا على نقص الحديد: استخدم سماد حديد مخلّبي.',
    'Too much fertiliser or nitrogen': 'سماد أو نيتروجين زائد',
    'Lots of leaves and no flowers usually means too much nitrogen. Flush the soil and switch to a feed for flowering plants.': 'كثرة الأوراق مع غياب الأزهار تعني غالبًا نيتروجينًا زائدًا. اغسل التربة بالماء وانتقل إلى سماد للنباتات المزهرة.',
    'Fungal leaf spot': 'تبقّع الأوراق الفطري',
    'Remove affected leaves, water the soil rather than the leaves, and improve airflow.': 'أزل الأوراق المصابة، واسقِ التربة لا الأوراق، وحسّن التهوية.',
    'Dust on the leaves': 'الغبار على الأوراق',
    'UAE dust blocks light from the leaves. Wipe them with a damp cloth or rinse the plant every few weeks.': 'غبار الإمارات يحجب الضوء عن الأوراق. امسحها بقطعة قماش رطبة أو اغسل النبتة كل بضعة أسابيع.'
  };
  var SYM = {
    'Yellow lower leaves': 'اصفرار الأوراق السفلية', 'Yellow new leaves': 'اصفرار الأوراق الجديدة', 'Brown crispy tips or edges': 'أطراف أو حواف بنية جافة',
    'Brown or black soft spots': 'بقع طرية بنية أو سوداء', 'Wilting or drooping': 'ذبول أو تدلٍّ', 'Leaves falling off': 'تساقط الأوراق',
    'Pale, bleached or white patches': 'بقع باهتة أو مبيضّة', 'White crust on soil or pot': 'قشرة بيضاء على التربة أو الأصيص', 'Sticky leaves or white fluff': 'أوراق لزجة أو زغب أبيض',
    'Fine webs or tiny dots under leaves': 'خيوط دقيقة أو نقاط صغيرة تحت الأوراق', 'Long, stretched, pale stems': 'سيقان طويلة ممتدة وباهتة', 'Bad smell from the soil': 'رائحة كريهة من التربة',
    'Leaves curling': 'التفاف الأوراق', 'Healthy leaves but no flowers': 'أوراق سليمة بلا أزهار', 'Dull, dusty leaves': 'أوراق باهتة مغبرة'
  };
  var CAL = {
    'Lettuce, rocket, spinach, radish, carrots, beetroot, peas, coriander, dill. Petunias and marigolds in full bloom.': 'الخس والجرجير والسبانخ والفجل والجزر والشمندر والبازلاء والكزبرة والشبت. والبيتونيا والقطيفة في أوج إزهارها.',
    'Last chance for leafy greens and herbs. Sow sunflowers, cucumbers and beans for spring.': 'الفرصة الأخيرة للخضار الورقية والأعشاب. ازرع دوار الشمس والخيار والفاصولياء للربيع.',
    'Plant okra, chillies, aubergine, watermelon and melons. Heat-loving flowers: portulaca, vinca, zinnia.': 'ازرع البامية والفلفل الحار والباذنجان والبطيخ والشمام. ومن الأزهار المحبة للحرارة: رجلة الزينة والونكة والزينيا.',
    'Okra, moringa, sweet potato and heat-tolerant herbs like holy basil. Start shading delicate pots.': 'البامية والمورينجا والبطاطا الحلوة والأعشاب التي تتحمل الحرارة مثل الريحان المقدس. ابدأ بتظليل الأصص الحساسة.',
    'Mostly maintenance: mulch, shade cloth (30 to 50%), water early. Okra keeps producing.': 'غالبًا صيانة: تغطية التربة بالنشارة، وشباك تظليل (30 إلى 50%)، والسقي مبكرًا. وتستمر البامية في الإنتاج.',
    'Too hot to plant most things outside. Grow herbs and microgreens indoors.': 'الجو حار جدًا لزراعة معظم النباتات في الخارج. ازرع الأعشاب والنبتات الصغيرة داخل البيت.',
    'Survival mode: water morning and evening, move pots into shade. Plan the winter garden.': 'وضع النجاة: اسقِ صباحًا ومساءً، وانقل الأصص إلى الظل. وخطط لحديقة الشتاء.',
    'Prepare beds: add compost, check drip lines. Start tomato and pepper seeds indoors late in the month.': 'جهّز الأحواض: أضف السماد العضوي وافحص خطوط التنقيط. وابدأ بذور الطماطم والفلفل داخل البيت آخر الشهر.',
    'Sow tomatoes, peppers, aubergine, beans, cucumbers and squash. Plant new trees and shrubs from late September.': 'ازرع الطماطم والفلفل والباذنجان والفاصولياء والخيار والكوسا. وازرع الأشجار والشجيرات الجديدة من أواخر سبتمبر.',
    'The best month: almost everything. Tomatoes, cucumbers, beans, lettuce, herbs, and winter flowers like petunias.': 'أفضل شهر: يصلح لكل شيء تقريبًا. الطماطم والخيار والفاصولياء والخس والأعشاب، وأزهار الشتاء مثل البيتونيا.',
    'Leafy greens, onions, garlic, broccoli, cauliflower, strawberries, coriander, parsley, mint.': 'الخضار الورقية والبصل والثوم والبروكلي والقرنبيط والفراولة والكزبرة والبقدونس والنعناع.',
    'Lettuce, spinach, carrots, radish, peas and herbs. Plant bulbs and winter annuals.': 'الخس والسبانخ والجزر والفجل والبازلاء والأعشاب. وازرع الأبصال والحوليات الشتوية.'
  };
  var LOCN = { 'indoors with AC': 'داخل البيت مع المكيّف', 'by a sunny window': 'قرب نافذة مشمسة', 'on a shaded balcony': 'في شرفة مظللة', 'on a sunny balcony': 'في شرفة مشمسة', 'in the ground': 'في الأرض مباشرة' };
  var WD = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  var SM = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  function nm(s) { return NAME[s] || s; }
  function place(s) { return s === 'Dubai' ? 'دبي' : s === 'Your location' ? 'موقعك' : s; }
  function dur(s) {
    var m = s.match(/^([\d.]+) (hours|days)$/); if (!m) return s;
    var n = +m[1];
    if (m[2] === 'hours') return n === 1 ? 'ساعة' : n === 2 ? 'ساعتين' : m[1] + (n <= 10 && n % 1 === 0 ? ' ساعات' : ' ساعة');
    return n === 1 ? 'يوم' : n === 2 ? 'يومين' : m[1] + (n % 1 ? ' يوم' : n <= 10 ? ' أيام' : ' يومًا');
  }
  function amt(s) { return s.replace(/^([\d.]+) L$/, '$1 لتر').replace(/^(\d+) ml$/, '$1 مل'); }
  var d = {
    "Plant Care for UAE Homes": "العناية بالنباتات في بيوت الإمارات",
    "Tool · Plants · UAE · Live": "أداة · نباتات · الإمارات · مباشر",
    "Plant care for UAE homes.": "العناية بالنباتات في بيوت الإمارات.",
    "Most plant advice is written for cool, rainy countries. Here a pot on a sunny balcony can dry out in a day in July, while the same plant indoors under AC might need water once a week. This page follows the real weather where you live to say when to water, works out how much a garden needs, and helps diagnose a struggling plant.": "معظم نصائح العناية بالنباتات مكتوبة لبلدان باردة وممطرة. أما هنا فقد يجف أصيص في شرفة مشمسة خلال يوم واحد في يوليو، بينما النبتة نفسها داخل البيت تحت المكيّف قد تحتاج الماء مرة في الأسبوع. تتابع هذه الصفحة الطقس الفعلي حيث تعيش لتخبرك متى تسقي، وتحسب حاجة حديقتك من الماء، وتساعدك على تشخيص النبتة المتعبة.",
    "Loading today's weather…": "جارٍ تحميل طقس اليوم…",
    "My plants": "نباتاتي", "Plant doctor": "طبيب النباتات", "Garden water": "مياه الحديقة", "Plant library": "مكتبة النباتات", "Planting calendar": "تقويم الزراعة",
    "Add a plant": "أضف نبتة", "Plant": "النبتة", "Nickname (optional)": "اسم مستعار (اختياري)", "e.g. Kitchen basil": "مثل: ريحان المطبخ",
    "Where it lives": "مكانها", "Indoors with AC": "داخل البيت مع المكيّف", "Indoors, sunny window": "داخل البيت، قرب نافذة مشمسة", "Shaded balcony": "شرفة مظللة",
    "Sunny balcony or roof": "شرفة أو سطح مشمس", "In the garden ground": "في أرض الحديقة",
    "Pot size": "حجم الأصيص", "Small (up to 15 cm)": "صغير (حتى \u200E15 cm)", "Medium (20–25 cm)": "متوسط (\u200E20–25 cm)", "Large (30–40 cm)": "كبير (\u200E30–40 cm)", "Very large or planter": "كبير جدًا أو حوض زراعة",
    "Add plant": "أضف النبتة",
    "How it works: each day the weather service estimates how much water evaporates from soil and leaves (evapotranspiration). The page multiplies that by the plant's thirst and its spot, and compares it with how much water the pot can hold. In summer outdoors, small pots can need water twice a day.": "كيف تعمل: تقدّر خدمة الطقس يوميًا كمية الماء التي تتبخر من التربة والأوراق (التبخر والنتح). تضرب الصفحة هذه القيمة في حاجة النبتة للماء وفي عامل مكانها، ثم تقارنها بكمية الماء التي يتسع لها الأصيص. في الصيف وفي الخارج قد تحتاج الأصص الصغيرة السقي مرتين يوميًا.",
    "Your plants": "نباتاتك",
    "No plants yet. Add one to get a watering schedule that follows the weather.": "لا توجد نباتات بعد. أضف نبتة لتحصل على جدول سقي يتبع الطقس.",
    "Check soil today": "افحص التربة اليوم", "Water now": "اسقِها الآن", "💧 Watered now": "💧 سقيتها الآن",
    "What do you see? Pick all that apply": "ماذا ترى؟ اختر كل ما ينطبق",
    "Where is it?": "أين هي؟", "Indoors": "داخل البيت", "Outdoors": "خارج البيت",
    "Soil when you touch it": "التربة عند لمسها", "Not sure": "لست متأكدًا", "Wet or soggy": "مبللة أو مشبعة بالماء", "Bone dry": "جافة تمامًا", "Slightly moist": "رطبة قليلًا",
    "Most likely causes": "الأسباب الأرجح", "Pick a symptom to start.": "اختر عَرَضًا للبدء.",
    "No clear match. Check the roots: healthy roots are firm and white or tan.": "لا يوجد تطابق واضح. افحص الجذور: الجذور السليمة متماسكة وبيضاء أو بنية فاتحة.",
    "Your garden": "حديقتك", "Lawn (m²)": "العشب (m²)", "Shrubs and flower beds (m²)": "الشجيرات وأحواض الزهور (m²)", "Trees (count)": "الأشجار (العدد)", "Palms (count)": "النخيل (العدد)",
    "Lawn grass": "نوع العشب", "Bermuda or paspalum (warm-season)": "برمودا أو باسبالوم (للموسم الحار)", "Thirsty grass": "عشب كثير الاستهلاك للماء", "Artificial or none": "صناعي أو لا يوجد",
    "System": "نظام الري", "Drip": "تنقيط", "Sprinklers": "رشاشات", "Hose by hand": "خرطوم يدوي",
    "Drip emitter flow (litres per hour)": "تدفق النقّاط (لتر في الساعة)", "Water price (AED per 1,000 L)": "سعر الماء (درهم لكل 1,000 لتر)",
    "Daily need by month (litres)": "الحاجة اليومية حسب الشهر (لتر)",
    "Uses today's evapotranspiration for \"now\" and typical Dubai monthly values for the year. Water early in the morning or after sunset: midday watering in summer can lose a third to evaporation. Many UAE water bills use slabs, so edit the price to match yours.": "تستخدم قيمة التبخر والنتح لليوم في حساب \"الآن\"، والقيم الشهرية المعتادة في دبي لبقية السنة. اسقِ في الصباح الباكر أو بعد الغروب: السقي وقت الظهيرة صيفًا قد يُفقد الثلث بالتبخر. كثير من فواتير المياه في الإمارات تعتمد الشرائح، فعدّل السعر ليطابق فاتورتك.",
    "Search plants, or try: pet safe, low light, heat": "ابحث عن نبتة، أو جرّب: آمن للحيوانات، إضاءة منخفضة، حرارة",
    "Search plants": "ابحث في النباتات",
    "Low light": "إضاءة منخفضة", "Medium light": "إضاءة متوسطة", "Bright light": "إضاءة ساطعة", "Full sun": "شمس كاملة",
    "Dislikes heat": "لا تحب الحرارة", "Some heat": "تتحمل بعض الحرارة", "Loves heat": "تحب الحرارة",
    "Rarely thirsty": "قليلة العطش", "Average water": "سقي متوسط", "Thirsty": "كثيرة العطش", "Pet safe": "آمنة للحيوانات", "Toxic to pets": "سامة للحيوانات",
    "No match.": "لا توجد نتائج.",
    "داخلي": "داخلي",
    "The UAE growing season runs opposite to Europe's: plant from October and harvest through spring. Tap a month.": "موسم الزراعة في الإمارات عكس موسم أوروبا: ازرع من أكتوبر واحصد حتى الربيع. اختر شهرًا.",
    "Weather from Open-Meteo (FAO-56 reference evapotranspiration). Pet safety follows ASPCA plant lists; if a pet eats a plant marked toxic, call your vet. Plant care is never exact, so check the soil with a finger before watering.": "الطقس من Open-Meteo (التبخر والنتح المرجعي وفق FAO-56). تتبع معلومات سلامة الحيوانات قوائم ASPCA للنباتات؛ إذا أكل حيوانك الأليف نبتة موصوفة بأنها سامة فاتصل بالطبيب البيطري. العناية بالنباتات ليست علمًا دقيقًا، فافحص التربة بإصبعك قبل السقي.",
    "Live weather unavailable, so using typical values for this month.": "الطقس المباشر غير متاح، لذا نستخدم القيم المعتادة لهذا الشهر.",
    "Soil and leaves lose about": "تفقد التربة والأوراق نحو",
    "of water today": "من الماء اليوم",
    "of water today, and rain is expected": "من الماء اليوم، ويُتوقع هطول أمطار",
    "Dubai ·": "دبي ·",
    "Your location ·": "موقعك ·"
  };
  [NAME, NOTE, CAUSE, SYM, CAL].forEach(function (o) { for (var k in o) d[k] = o[k]; });
  LabAr.add(d, [
    [/^In ([\d.]+) days$/, function (m, n) { return 'بعد ' + dur(n + ' days'); }],
    [/^-?\d+°C$/, '\u200E$&'],
    [/^[\d.]+ mm$/, '\u200E$&'],
    [/^now, high (-?\d+)°C$/, 'الآن، والعظمى \u200E$1°C'],
    [/^Humidity (\d+)%$/, 'الرطوبة $1%'],
    [/^([\d,]+) L a day$/, '$1 لتر يوميًا'],
    [/^(\d+) L$/, '$1 لتر'],
    [/^About ([\d,]+) AED a month at this rate\.(?: With 2 drippers per m² in the beds, run them about (\d+) minutes a day\.)?$/, function (m, c, mi) { return 'نحو ' + c + ' درهم شهريًا بهذا المعدل.' + (mi ? ' مع نقّاطتين لكل m² في الأحواض، شغّلها نحو ' + mi + ' دقيقة يوميًا.' : ''); }],
    [/^Today's evapotranspiration ([\d.]+) mm (?:\(live, (.+)\)|\(typical for this month\))\. Summer peak: about ([\d,]+) L a day\.$/, function (m, e, w, pk) { return 'التبخر والنتح اليوم \u200E' + e + ' mm ' + (w ? '(مباشر، ' + place(w) + ')' : '(القيمة المعتادة لهذا الشهر)') + '. ذروة الصيف: نحو ' + pk + ' لتر يوميًا.'; }],
    [/^(.+?) (indoors with AC|by a sunny window|on a shaded balcony|on a sunny balcony|in the ground)\. Water about every (.+?) right now, around (.+?) each time( \(per plant\))?\.(?: Last watered (\w{3}) (\d+) (\w{3})\.)?( Too hot here in summer: move it to shade\.)?$/,
      function (m, n, l, every, a, per, wd, dd, mo, hot) {
        return nm(n) + ' ' + LOCN[l] + '. اسقِها حاليًا كل ' + dur(every) + ' تقريبًا، بنحو ' + amt(a) + ' في كل مرة' + (per ? ' (لكل نبتة)' : '') + '.' +
          (wd ? ' آخر سقي: ' + (WD[wd] || wd) + ' ' + dd + ' ' + (SM[mo] || mo) + '.' : '') + (hot ? ' المكان حار جدًا عليها في الصيف: انقلها إلى الظل.' : '');
      }]
  ]);
})();
