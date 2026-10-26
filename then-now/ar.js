(function () {
  var MO = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var PL = { 'Palm Jumeirah': 'نخلة جميرا', 'Saadiyat Island': 'جزيرة السعديات', 'Yas Island': 'جزيرة ياس', 'Downtown Dubai': 'وسط مدينة دبي' };
  var d = {
    "Then and Now": "بين الأمس واليوم",
    "Experiment · Earth observation · UAE": "تجربة · رصد الأرض · الإمارات",
    "Then and now.": "بين الأمس واليوم.",
    "The same patch of the UAE seen from orbit in 2000 and this month. Drag across the picture to wipe between them.": "البقعة نفسها من الإمارات كما تُرى من المدار عام 2000 وهذا الشهر. اسحب على الصورة للتنقل بينهما.",
    "Place": "المكان",
    "Wipe between then and now": "التنقل بين الأمس واليوم",
    "The 2000 images come from Landsat 7, which sees the ground in 30 m pixels; today's are Sentinel-2 at 10 m, which is why the old ones look softer. Both are real surface reflectance, colour-balanced the same way.": "صور عام 2000 من القمر Landsat 7 الذي يرى الأرض بدقة 30 مترًا للبكسل، أما صور اليوم فمن Sentinel-2 بدقة 10 أمتار، ولهذا تبدو الصور القديمة أقل حدة. كلتاهما انعكاسية سطح حقيقية، وموازنة ألوانهما واحدة.",
    "Landsat imagery courtesy of the U.S. Geological Survey. Contains modified Copernicus Sentinel-2 data.": "صور Landsat بإذن من هيئة المسح الجيولوجي الأمريكية. تتضمن بيانات معدّلة من Copernicus Sentinel-2.",
    "In 2000 this was a plain stretch of beach. Work on the Palm began in 2001, building the trunk, 16 fronds and an 11 km breakwater from dredged sand and rock.": "كان هذا المكان عام 2000 مجرد شاطئ مفتوح. بدأ العمل في النخلة عام 2001، فبُني الجذع و16 سعفة وحاجز أمواج بطول 11 km من الرمل والصخر المجروف.",
    "A low, sandy island of dunes and mangrove creeks. Today it holds the Louvre Abu Dhabi, new neighbourhoods and protected beaches where hawksbill turtles still nest.": "جزيرة رملية منخفضة من الكثبان وخيران القرم. واليوم تضم متحف اللوفر أبوظبي وأحياء جديدة وشواطئ محمية ما زالت سلاحف منقار الصقر تعشش فيها.",
    "Mostly sand and sabkha in 2000. The Yas Marina Circuit hosted its first Formula 1 race in 2009, and the island grew around it.": "كانت عام 2000 رمالًا وسبخات في معظمها. استضافت حلبة مرسى ياس أول سباق فورمولا 1 عام 2009، ونمت الجزيرة من حولها.",
    "Sheikh Zayed Road is already there in 2000, with desert beside it. The Burj Khalifa, the tallest building in the world, opened here in 2010, along with the lake and the Dubai Mall.": "شارع الشيخ زايد موجود منذ عام 2000 والصحراء بجانبه. وهنا افتُتح برج خليفة، أطول مبنى في العالم، عام 2010، ومعه البحيرة ودبي مول."
  };
  for (var k in PL) d[k] = PL[k];
  LabAr.add(d, [
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m, a, y) { return MO[a] + ' ' + y; }],
    [/^(.+) from space in (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, function (m, p, a, y) { return (PL[p] || p) + ' من الفضاء في ' + MO[a] + ' ' + y; }]
  ]);
})();
