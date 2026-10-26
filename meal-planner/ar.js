(function () {
  var MEAL = {
    "Balaleet": "بلاليط", "Chebab pancakes": "جباب", "Khameer bread": "خبز خمير", "Regag with egg and cheese": "رقاق بالبيض والجبن",
    "Shakshuka": "شكشوكة", "Foul medames": "فول مدمس", "Za'atar manakish with labneh": "مناقيش زعتر مع لبنة", "Eggs with tomato": "بيض وطماط",
    "Oats with dates and milk": "شوفان بالتمر والحليب", "Yogurt, berries and granola": "زبادي مع توت وجرانولا", "Halloumi breakfast plate": "طبق فطور بالحلوم",
    "Cheese omelette": "أومليت بالجبن", "Fatteh with chickpeas": "فتة حمص", "Chicken machboos": "مجبوس دجاج", "Lamb machboos": "مجبوس لحم",
    "Fish machboos": "مجبوس سمك", "Harees": "هريس", "Thareed": "ثريد", "Chicken saloona with rice": "صالونة دجاج مع عيش",
    "Fish saloona with rice": "صالونة سمك مع عيش", "Lentil soup": "شوربة عدس", "Fattoush": "فتوش", "Tabbouleh": "تبولة", "Hummus plate": "صحن حمص",
    "Falafel wraps": "لفائف فلافل", "Chicken shawarma wraps": "شاورما دجاج", "Mujaddara": "مجدرة", "Chicken kabsa": "كبسة دجاج", "Madrouba": "مضروبة",
    "Maqluba": "مقلوبة", "Musakhan": "مسخّن", "Kofta and potato tray": "صينية كفتة بالبطاطس", "Okra stew with rice": "مرق بامية مع عيش",
    "Molokhia with chicken": "ملوخية بالدجاج", "Koshari": "كشري", "Chicken biryani": "برياني دجاج", "Dal with rice": "دال مع عيش",
    "Grilled hammour, rice and salad": "هامور مشوي مع عيش وسلطة", "Spaghetti bolognese": "سباغيتي بولونيز", "Grilled chicken with potatoes": "دجاج مشوي بالبطاطس",
    "Spinach fatayer": "فطاير سبانخ", "Vegetable soup": "شوربة خضار", "Tuna pasta bake": "معكرونة بالتونة في الفرن", "Chicken noodle stir fry": "نودلز مقلية بالدجاج"
  };
  var ING = {
    "Arabic bread": "خبز عربي", "Egyptian rice": "أرز مصري", "almonds": "لوز", "baharat": "بهارات مشكلة", "bananas": "موز", "basmati rice": "أرز بسمتي",
    "bell peppers": "فلفل حلو", "biryani masala": "بهارات برياني", "boneless chicken thighs": "أفخاذ دجاج بدون عظم", "broccoli": "بروكلي", "brown lentils": "عدس بني",
    "butter": "زبدة", "bzar spice mix": "بزار", "carrots": "جزر", "cauliflower": "قرنبيط", "cheddar cheese": "جبن شيدر", "chicken breast": "صدور دجاج",
    "chicken pieces": "قطع دجاج", "chickpeas": "حمص حب", "cinnamon sticks": "أعواد قرفة", "cooking oil": "زيت طبخ", "coriander": "كزبرة خضراء", "cucumbers": "خيار",
    "cumin seeds": "كمون حب", "date syrup": "دبس تمر", "dates": "تمر", "dried limes (loomi)": "لومي", "dried oregano": "أوريغانو مجفف", "dry yeast": "خميرة جافة",
    "egg noodles": "نودلز بالبيض", "eggplants": "باذنجان", "eggs": "بيض", "fava beans": "فول", "fennel seeds": "حبة شمر", "fine bulgur": "برغل ناعم",
    "frozen berries": "توت مجمد", "frozen falafel": "فلافل مجمدة", "frozen fries": "بطاطس مقلية مجمدة", "frozen mixed vegetables": "خضار مشكلة مجمدة",
    "frozen molokhia": "ملوخية مجمدة", "frozen okra": "بامية مجمدة", "frozen spinach": "سبانخ مجمدة", "frozen sweetcorn": "ذرة حلوة مجمدة",
    "garlic cloves": "فصوص ثوم", "ghee": "سمن", "ginger": "زنجبيل", "granola": "جرانولا", "green chillies": "فلفل أخضر حار", "green peppers": "فلفل أخضر",
    "ground cardamom": "هيل مطحون", "ground cinnamon": "قرفة مطحونة", "ground coriander": "كزبرة مطحونة", "ground cumin": "كمون مطحون", "halloumi": "جبن حلوم",
    "hammour fillets": "فيليه هامور", "harees wheat": "حب هريس", "honey": "عسل", "kabsa spice mix": "بهارات كبسة", "kingfish (kanaad) steaks": "شرائح كنعد",
    "labneh": "لبنة", "lamb cubes": "مكعبات لحم غنم", "lamb on the bone": "لحم غنم بالعظم", "lemons": "ليمون", "macaroni": "معكرونة", "milk": "حليب",
    "minced beef": "لحم بقر مفروم", "mint": "نعناع", "mozzarella": "موزاريلا", "olive oil": "زيت زيتون", "olives": "زيتون", "onions": "بصل", "paprika": "بابريكا",
    "parmesan": "بارميزان", "parsley": "بقدونس", "penne pasta": "معكرونة بيني", "pickles": "مخللات", "pine nuts": "صنوبر", "plain flour": "طحين أبيض",
    "plain yogurt": "زبادي سادة", "pomegranate molasses": "دبس رمان", "potatoes": "بطاطس", "processed cheese": "جبن مطبوخ", "radishes": "فجل", "raisins": "زبيب",
    "red lentils": "عدس أحمر", "regag bread": "خبز رقاق", "rolled oats": "شوفان", "romaine lettuce": "خس روماني", "rose water": "ماء ورد", "saffron": "زعفران",
    "salt": "ملح", "sesame seeds": "سمسم", "shawarma spice": "بهارات شاورما", "soy sauce": "صلصة صويا", "spaghetti": "سباغيتي", "spring onions": "بصل أخضر",
    "stock cubes": "مكعبات مرق", "sugar": "سكر", "sumac": "سماق", "tahini": "طحينة", "tamarind paste": "معجون تمر هندي", "tomato passata": "صلصة طماطم مصفاة",
    "tomato paste": "معجون طماطم", "tomatoes": "طماطم", "tuna": "تونة", "turmeric": "كركم", "vermicelli": "شعيرية", "vinegar": "خل",
    "yellow lentils (toor dal)": "عدس أصفر (توور دال)", "za'atar": "زعتر", "zucchini": "كوسة"
  };
  var SEC = { "Produce": "الخضار والفواكه", "Meat & fish": "اللحوم والأسماك", "Dairy & eggs": "الألبان والبيض", "Bakery": "المخبوزات", "Pantry": "المؤن", "Spices": "البهارات", "Frozen": "المجمدات" };
  var SLOT = { breakfast: 'الفطور', lunch: 'الغداء', dinner: 'العشاء', Breakfast: 'الفطور', Lunch: 'الغداء', Dinner: 'العشاء' };
  var DAY = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function alt(o) { return Object.keys(o).sort(function (a, b) { return b.length - a.length; }).map(esc).join('|'); }
  var I = alt(ING);
  function ing(n) { return ING[n] || n; }
  function meal(n) { return MEAL[n] || n; }
  var UNIT = { g: 'غ', kg: 'كغ', ml: 'مل', l: 'لتر', pack: 'عبوة', packs: 'عبوات', bunch: 'حزمة', bunches: 'حزم', can: 'علبة', cans: 'علب', tbsp: 'ملعقة كبيرة', tsp: 'ملعقة صغيرة', cup: 'كوب' };
  var Q = '([\\d.]+[¼½¾]?|[¼½¾])(?: (g|kg|ml|l|packs?|bunch(?:es)?|cans?|tbsp|tsp|cup))?';
  function qty(n, u) { return u ? n + ' ' + UNIT[u] : n; }
  var dict = {
    "Meal Planner": "مخطط الوجبات",
    "Weekly Meal Planner": "مخطط الوجبات الأسبوعي",
    "Tool · Home · Food": "أداة · البيت · الطعام",
    "Weekly meal planner.": "مخطط الوجبات الأسبوعي.",
    "Fill a week of breakfasts, lunches and dinners from about 40 everyday home dishes, from machboos and harees to shakshuka and lentil soup, or add your own. The shopping list builds itself, adds up the same ingredient across meals and sorts it by supermarket section. Send it to WhatsApp or print it.": "املأ أسبوعًا من وجبات الفطور والغداء والعشاء من نحو 40 طبقًا منزليًا يوميًا، من المجبوس والهريس إلى الشكشوكة وشوربة العدس، أو أضف أطباقك. قائمة المشتريات تتكوّن تلقائيًا، وتجمع المكوّن نفسه من كل الوجبات، وترتّبه حسب أقسام السوبرماركت. أرسلها إلى WhatsApp أو اطبعها.",
    "People eating": "عدد الأشخاص",
    "Suggest for empty slots": "اقترح للخانات الفارغة",
    "Clear week": "مسح الأسبوع",
    "meals planned": "وجبات مخططة", "items to buy": "أغراض للشراء", "slots still empty": "خانات ما زالت فارغة",
    "Meals · tap a slot, then a meal, or drag": "الوجبات · اختر خانة ثم وجبة، أو اسحبها",
    "Search meals or ingredients…": "ابحث عن وجبة أو مكوّن…", "Search meals": "ابحث في الوجبات",
    "Add your own meal": "أضف وجبتك", "Meal name": "اسم الوجبة", "Mum's chicken pasta": "معكرونة الدجاج على طريقة أمي",
    "Serves": "تكفي", "Good for": "مناسبة لـ", "B": "فطور", "L": "غداء", "D": "عشاء",
    "Ingredients, one per line": "المكوّنات، كل مكوّن في سطر",
    "500 g chicken breast 2 pcs onions 1 pack Arabic bread 200 ml cooking cream @dairy": "500 g صدور دجاج\n2 pcs بصل\n1 pack خبز عربي\n200 ml كريمة طبخ @dairy",
    "Start with an amount and a unit (g, kg, ml, l, pcs, tbsp, tsp, cup, bunch, pack, can). The section is guessed; add @produce, @meat, @dairy, @bakery, @pantry, @spices or @frozen to set it.": "ابدأ بالكمية والوحدة بالإنجليزية (g, kg, ml, l, pcs, tbsp, tsp, cup, bunch, pack, can). يُخمَّن القسم تلقائيًا؛ أضف @produce أو @meat أو @dairy أو @bakery أو @pantry أو @spices أو @frozen لتحديده.",
    "Save meal": "حفظ الوجبة",
    "Shopping list": "قائمة المشتريات",
    "Skip basics (salt, pepper, oil, sugar)": "تجاهل الأساسيات (الملح والفلفل والزيت والسكر)",
    "Untick all": "إلغاء كل العلامات",
    "Amounts are scaled from each recipe's usual serving count to the number of people eating, then added together. Grams and kilos are combined, so two dishes needing 500 g and 1.2 kg of chicken show as 1.7 kg. Things sold whole, like onions, bunches of parsley or packs of bread, are rounded up. Everything stays in this browser; nothing is sent anywhere.": "تُعدَّل الكميات من عدد الحصص المعتاد في كل وصفة إلى عدد الأشخاص، ثم تُجمع. الغرامات والكيلوغرامات تُدمج، فطبقان يحتاجان إلى 500 غ و1.2 كغ من الدجاج يظهران 1.7 كغ. وما يُباع كاملًا، كالبصل وحزم البقدونس وعبوات الخبز، يُقرَّب إلى الأعلى. كل شيء يبقى في هذا المتصفح؛ ولا يُرسل شيء إلى أي مكان.",
    "Breakfast": "الفطور", "Lunch": "الغداء", "Dinner": "العشاء", "All": "الكل", "Mine": "وجباتي",
    "Tap a slot to pick it. Then tap a meal on the right, or type a note like \"Eating out\" or \"Leftovers\". On a computer you can also drag meals into the week, or drag between days.": "اختر خانة بالضغط عليها، ثم اضغط على وجبة من قائمة الوجبات، أو اكتب ملاحظة مثل «أكل خارج البيت» أو «بقايا الأمس». على الكمبيوتر يمكنك أيضًا سحب الوجبات إلى الأسبوع، أو سحبها بين الأيام.",
    "Tap a meal on the right to put it here, or write a note.": "اضغط على وجبة من قائمة الوجبات لوضعها هنا، أو اكتب ملاحظة.",
    "Note, e.g. Eating out": "ملاحظة، مثل: أكل خارج البيت",
    "Set note": "حفظ الملاحظة",
    "No meals match. Try another word, or add your own below.": "لا توجد وجبات مطابقة. جرّب كلمة أخرى، أو أضف وجبتك أدناه.",
    "Delete this meal?": "حذف هذه الوجبة؟",
    "The week is full. Clear a slot first.": "الأسبوع ممتلئ. أفرغ خانة أولًا.",
    "Add at least one ingredient.": "أضف مكوّنًا واحدًا على الأقل.",
    "Your list appears here as you add meals to the week.": "ستظهر قائمتك هنا عندما تضيف وجبات إلى الأسبوع.",
    "Copied. Ticked items are left out.": "تم النسخ. الأغراض المعلَّمة لم تُدرج.",
    "Couldn't copy. Select the list and copy it by hand.": "تعذّر النسخ. حدّد القائمة وانسخها يدويًا.",
    "Clear the whole week?": "مسح الأسبوع كله؟",
    "No empty slots to fill.": "لا توجد خانات فارغة لملئها."
  };
  for (var k in MEAL) dict[k] = MEAL[k];
  for (k in ING) dict[k] = ING[k];
  dict.Sun = DAY.Sun; // "Sun" was dropped from ar-common
  LabAr.add(dict, [
    [/^(Produce|Meat & fish|Dairy & eggs|Bakery|Pantry|Spices|Frozen)$/, function (m, s) { return SEC[s]; }],
    [/^\+ (breakfast|lunch|dinner)$/, function (m, s) { return '+ ' + SLOT[s]; }],
    [/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Breakfast|Lunch|Dinner|breakfast|lunch|dinner)(?:: (.+))?$/, function (m, d, s, n) { return SLOT[s] + ' ' + DAY[d] + (n ? ': ' + meal(n) : ''); }],
    [/^Recipe serves (\d+), scaled ×([\d.]+) for (\d+) people$/, 'الوصفة تكفي $1، ومضروبة في ×$2 لـ$3 أشخاص'],
    [new RegExp('^' + Q + ' (' + I + ')$'), function (m, n, u, g) { return u ? qty(n, u) + ' ' + ing(g) : ing(g) + ' (' + n + ')'; }],
    [new RegExp('^' + Q + '$'), function (m, n, u) { return qty(n, u); }],
    [new RegExp('^(' + I + ')(?:, (?:' + I + '))*(…)?$'), function (m) { var e = /…$/.test(m); return m.replace(/…$/, '').split(', ').map(ing).join('، ') + (e ? '…' : ''); }],
    [/^· (\d+) meals$/, '· $1 وجبات'],
    [/^([BLD])(?: ([BLD]))?(?: ([BLD]))?$/, function (m) { return m.split(' ').map(function (x) { return { B: 'فطور', L: 'غداء', D: 'عشاء' }[x]; }).join(' · '); }],
    [new RegExp('^Delete (.+)$'), function (m, n) { return 'حذف ' + meal(n); }],
    [/^Added (\d+) suggestions\. Tap any slot to change it\.$/, 'أُضيف $1 اقتراحًا. اضغط على أي خانة لتغييرها.'],
    [/^Shopping list for (\d+) people \((\d+) meals\)$/, 'قائمة المشتريات لـ$1 أشخاص ($2 وجبات)'],
    [/^Saved "(.+)" with (\d+) ingredients: (.+)\.$/, function (m, n, c, l) {
      var S2 = { produce: 'الخضار والفواكه', 'meat & fish': 'اللحوم والأسماك', 'dairy & eggs': 'الألبان والبيض', bakery: 'المخبوزات', pantry: 'المؤن', spices: 'البهارات', frozen: 'المجمدات' };
      return 'تم حفظ «' + n + '» مع ' + c + ' مكوّنات: ' + l.replace(/\((produce|meat & fish|dairy & eggs|bakery|pantry|spices|frozen)\)/g, function (x, s) { return '(' + S2[s] + ')'; }).replace(/\), /g, ')، ') + '.'; }]
  ]);
})();
