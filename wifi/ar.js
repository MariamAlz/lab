(function () {
  var LV = { 'Excellent': 'ممتاز', 'Good for calls': 'جيد للمكالمات', 'Browsing OK': 'مقبول للتصفح', 'Weak': 'ضعيف', 'Dead': 'منعدم' };
  var dict = {
    "Wi-Fi Spot Planner": "مخطط مواقع الواي فاي",
    "Tool · Home": "أداة · المنزل",
    "Wi-Fi spot planner.": "مخطط مواقع الواي فاي.",
    "Wi-Fi fades with distance and loses a chunk at every wall, a lot more at concrete than at glass. Sketch your home, drop the router where it is now, and see roughly where the signal dies. Then drag it around, or let the planner find the best spot for a booster.": "تضعف إشارة الواي فاي مع المسافة وتفقد جزءًا عند كل جدار، والخرسانة أشد من الزجاج بكثير. ارسم بيتك، وضع الراوتر في مكانه الحالي، وانظر تقريبًا أين تنقطع الإشارة. ثم اسحبه، أو دع المخطط يجد أفضل مكان لمقوّي الإشارة.",
    "Floor plan with Wi-Fi signal map. Draw walls by dragging; drag the router to move it.": "مخطط الطابق مع خريطة إشارة الواي فاي. ارسم الجدران بالسحب، واسحب الراوتر لتحريكه.",
    "Brush": "أداة الرسم", "Draw": "ارسم",
    "Light wall": "جدار خفيف", "Block wall": "جدار طوب", "Concrete": "خرسانة", "Glass": "زجاج", "Metal / mirror": "معدن / مرآة", "Erase": "امسح",
    "Band": "النطاق",
    "+ Booster": "+ مقوّي", "Find best booster spot": "أفضل مكان للمقوّي", "Find best router spot": "أفضل مكان للراوتر",
    "Start from": "ابدأ من", "2-bedroom flat": "شقة بغرفتي نوم", "Villa floor": "طابق فيلا", "Empty": "فارغ",
    "Size": "المقاس", "Width in metres": "العرض بالأمتار", "Depth in metres": "العمق بالأمتار", "m": "م",
    "Trace a plan image": "تتبّع صورة مخطط",
    "Tap anywhere on the plan to read the signal there.": "اضغط في أي مكان على المخطط لقراءة الإشارة هناك.",
    "Patchy": "متقطعة",
    "Router: drag the gold dot. Boosters: teal dots; double-tap one to remove it. Walls: drag to draw; they snap straight.": "الراوتر: اسحب النقطة الذهبية. المقويات: النقاط الفيروزية؛ انقر مرتين على أحدها لإزالته. الجدران: اسحب لترسمها، وستستقيم تلقائيًا.",
    "This is a simple model: free-space loss plus a fixed loss per wall (light wall 3 dB, block 8, concrete 13, glass 3, metal 25). Real homes add reflections and furniture, so treat it as a guide. 5 and 6 GHz are faster but weaker through walls than 2.4 GHz. Your plan is kept on this device.": "هذا نموذج بسيط: خسارة المسافة في الفضاء الحر مع خسارة ثابتة لكل جدار (جدار خفيف 3 dB، طوب 8، خرسانة 13، زجاج 3، معدن 25). البيوت الحقيقية فيها انعكاسات وأثاث، فاعتبره دليلًا تقريبيًا. نطاقا 5 و6 GHz أسرع لكنهما أضعف عبر الجدران من 2.4 GHz. يُحفظ مخططك على هذا الجهاز.",
    "No spot hears the router well enough for a booster. Move the router first.": "لا يوجد مكان تصله إشارة الراوتر بقوة كافية للمقوّي. حرّك الراوتر أولًا.",
    "R": "ر", "B": "م"
  };
  for (var k in LV) dict[k] = LV[k];
  LabAr.add(dict, [
    [/^([\d.]+) GHz$/, '$1 GHz'],
    [/^At ([\d.]+), ([\d.]+) m$/, 'عند ⁦$1، $2⁩ م'],
    [/^(-?\d+) dBm$/, '⁦$1 dBm⁩'],
    [/^· (Excellent|Good for calls|Browsing OK|Weak|Dead)$/, function (m, l) { return '· ' + LV[l]; }],
    [/^(Excellent|Good for calls|Browsing OK|Weak) \(≥ (-?\d+) dBm\)$/, function (m, l, v) { return LV[l] + ' (⁦' + v + ' dBm⁩ أو أعلى)'; }],
    [/^1 m grid · ([\d.]+) × ([\d.]+) m$/, 'شبكة 1 م · $1 × $2 م']
  ]);
  // the plan is drawn on canvas before this dictionary loads: redraw it
  window.dispatchEvent(new Event('resize'));
})();
