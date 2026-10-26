(function () {
  var MEAN = {
    "the Yemeni Shi‘ra": "الشعرى اليمانية",
    "Suhail. When it rises before dawn in late August, the worst of the Gulf summer is over": "سهيل. حين يطلع قبل الفجر أواخر أغسطس، يكون أشد صيف الخليج قد انقضى",
    "the centaur’s foot": "قدم القنطور", "the Simak who carries a lance": "السماك الذي يحمل رمحًا", "the swooping eagle": "النسر المنقضّ", "al-‘Ayyuq": "العيّوق",
    "the giant’s foot": "قدم الجبار", "the Syrian Shi‘ra": "الشعرى الشامية", "the end of the river": "آخر النهر", "the hand of al-Jawza’": "يد الجوزاء", "Hadar": "حضار",
    "the flying eagle": "النسر الطائر", "the follower, because it follows the Pleiades across the sky": "التابع، لأنه يتبع الثريا عبر السماء", "the heart of the scorpion": "قلب العقرب",
    "the unarmed Simak": "السماك الأعزل", "the mouth of the fish": "فم الحوت", "the hen’s tail": "ذنب الدجاجة", "the heart of the lion": "قلب الأسد", "the raised sting": "الذنب المرفوع",
    "the butting horn": "القرن النطّاح", "the string of pearls": "عقد اللؤلؤ", "the belt": "الحزام", "the bear": "الدب", "the elbow": "المرفق",
    "the leader (of the mourners, بنات نعش)": "القائد (قائد بنات نعش)", "the shoulder of the rein-holder": "كتف ممسك العنان", "al-Han‘a": "الهنعة",
    "al-Jady, the star Arab navigators measured to find their latitude": "الجدي، النجم الذي قاسه الملاحون العرب لمعرفة خط العرض",
    "the solitary one": "المنفرد", "the lamb": "الحمل", "the frog": "الضفدع", "the sword": "السيف", "the horse’s navel": "سرة الفرس", "the head of the snake charmer": "رأس الحوّاء",
    "the forehead": "الجبهة", "the demon’s head. It dims every 2.9 days": "رأس الغول. يخفت كل 2.9 يوم", "the lion’s tail": "ذنب الأسد", "the breast (of the hen)": "الصدر (صدر الدجاجة)",
    "the wrapper. Its faint neighbour السها (Alcor) was an old eyesight test": "المئزر. جاره الخافت السها كان اختبارًا قديمًا لحدة البصر",
    "the breast": "الصدر", "the palm": "الكف", "the forehead (of the scorpion)": "الجبهة (جبهة العقرب)", "the loins": "المراق", "the nose": "الأنف", "the shin": "الساق",
    "the thigh": "الفخذ", "the wing": "الجناح", "the saddle": "السرج", "the nostril": "المنخر", "the scorpion": "العقرب", "the northern claw": "الكفة الشمالية",
    "the serpent’s neck": "عنق الحية", "the knee": "الركبة", "the sting": "اللسعة", "the southern claw": "الكفة الجنوبية", "the side": "الجنب",
    "al-Thurayya, the cluster whose dawn rising in June marked the start of the hottest season": "الثريا، العنقود الذي كان طلوعه فجرًا في يونيو يعلن بداية أشد فصول الحر",
    "the calf. With Kochab they are الفرقدان, the two calves that circle the pole": "العجل. ومع Kochab يشكّلان الفرقدين، العجلين اللذين يدوران حول القطب",
    "where the tail joins": "حيث يتصل الذنب", "the neglected one, the classic test of good eyesight": "المهمَل، الاختبار التقليدي لحدة البصر"
  };
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  var reMean = Object.keys(MEAN).map(esc).join('|');
  function place(s) { return s === 'Abu Dhabi' ? 'أبوظبي' : s === 'Your location' ? 'موقعك' : s; }
  var d = {
    "Sky Through Your Camera": "السماء عبر كاميرتك",
    "Space · Camera · Live": "فضاء · كاميرا · مباشر",
    "Sky through your camera.": "السماء عبر كاميرتك.",
    "Hold your phone up to the night sky and the stars, planets, Moon and UAE satellites are labelled right over the camera view, with the old Arabic star names many of them still carry. Without a phone, drag the sky to look around.": "وجّه هاتفك نحو سماء الليل، وستظهر أسماء النجوم والكواكب والقمر والأقمار الصناعية الإماراتية فوق صورة الكاميرا مباشرة، مع الأسماء العربية القديمة التي ما زال كثير منها يحملها. وبدون هاتف، اسحب السماء لتتجول فيها.",
    "Start the camera": "شغّل الكاميرا", "Explore without camera": "استكشف بدون كاميرا",
    "Your phone will ask for the camera, motion sensors and location. Nothing leaves your device.": "سيطلب هاتفك إذن الكاميرا وحساسات الحركة والموقع. لا شيء يغادر جهازك.",
    "Labels": "التسميات", "Names": "الأسماء", "Both": "كلاهما",
    "Find something": "ابحث عن جرم", "Choose…": "اختر…",
    "Constellation lines": "خطوط الكوكبات", "Show things below the horizon": "أظهر ما تحت الأفق", "Field of view": "مجال الرؤية",
    "If labels sit off their stars, match the field of view to your camera and wave the phone in a figure of eight to settle the compass. Phone compasses are thrown off by cars, metal railings and magnetic cases.": "إذا ظهرت التسميات بعيدًا عن نجومها، فاضبط مجال الرؤية ليطابق كاميرتك، وحرّك الهاتف على شكل الرقم 8 لضبط البوصلة. بوصلات الهواتف تتأثر بالسيارات والحواجز المعدنية والأغطية المغناطيسية.",
    "What you're seeing": "ما الذي تراه",
    "Positions are worked out on your phone from the time and your location: around 100 of the brightest stars, the Sun, Moon, Venus, Mars, Jupiter and Saturn, and the UAE's satellites from fresh orbit data. Many star names in use worldwide are Arabic: Aldebaran (الدبران, \"the follower\"), Betelgeuse (يد الجوزاء), Altair (الطائر) and Vega (الواقع).": "تُحسب المواقع على هاتفك من الوقت وموقعك: نحو 100 من ألمع النجوم، والشمس والقمر والزهرة والمريخ والمشتري وزحل، والأقمار الصناعية الإماراتية من بيانات مدارية حديثة. كثير من أسماء النجوم المستخدمة عالميًا عربية الأصل: Aldebaran (الدبران، «التابع»)، وBetelgeuse (يد الجوزاء)، وAltair (الطائر)، وVega (الواقع).",
    "Most UAE satellites are in geostationary orbit, about 36,000 km up. They sit still over the equator to the south and are far too faint to see by eye. MBZ-SAT and other low satellites move across the sky in a few minutes.": "معظم الأقمار الصناعية الإماراتية في مدار ثابت بالنسبة للأرض، على ارتفاع نحو 36,000 كم. تبقى ثابتة فوق خط الاستواء جهة الجنوب، وهي أخفت بكثير من أن تُرى بالعين. أما MBZ-SAT وغيره من الأقمار المنخفضة فتعبر السماء في دقائق.",
    "Below the horizon right now": "تحت الأفق الآن",
    "Never look at the Sun directly or through a camera zoom.": "لا تنظر إلى الشمس مباشرة أبدًا، ولا عبر تقريب الكاميرا.",
    "A planet: it shines steadily rather than twinkling.": "كوكب: يلمع بثبات بدلًا من أن يتلألأ.",
    "No compass found": "لم يُعثر على بوصلة",
    "This device didn't share its motion sensors, so drag the sky to look around instead.": "هذا الجهاز لم يشارك حساسات الحركة، لذا اسحب السماء لتتجول فيها."
  };
  LabAr.add(d, [
    [/^Facing (\d+)° · (up|down) (\d+)°$/, function (m, h, u, a) { return 'الاتجاه ' + h + '\u200E°\u200E · ' + (u === 'up' ? 'لأعلى ' : 'لأسفل ') + a + '\u200E°\u200E'; }],
    [/^(Abu Dhabi|Your location) · (\d\d:\d\d)$/, function (m, p, t) { return place(p) + ' · ' + t; }],
    [/^(.+) \(below the horizon\)$/, function (m, n) { return LabAr.t(n) + ' (تحت الأفق)'; }],
    [/^Height (-?\d+)° above the horizon, bearing (\d+)°$/, 'الارتفاع $1\u200E°\u200E فوق الأفق، والاتجاه $2\u200E°\u200E'],
    [/^(\d+)% lit$/, 'مضاء بنسبة $1%'],
    [/^(Geostationary, fixed over the equator\.|Low orbit, crosses the sky in minutes\.) ([\d,]+) km away\.$/, function (m, n, km) { return (/^Geo/.test(n) ? 'في مدار ثابت فوق خط الاستواء.' : 'مدار منخفض، يعبر السماء في دقائق.') + ' على بعد ' + km + ' كم.'; }],
    [new RegExp('^(?:Meaning: (' + reMean + ')\\. ?)?Magnitude (-?[\\d.]+) \\(lower is brighter\\)\\.$'), function (m, mn, mag) { return (mn ? 'المعنى: ' + MEAN[mn] + '. ' : '') + 'القدر ' + mag + ' (الأقل أكثر لمعانًا).'; }],
    [/^(.+) · ([\u0600-\u06FF ]+)$/, '$2 · $1'],
    [/^(.+) \(satellite\)$/, '$1 (قمر صناعي)']
  ]);
})();
