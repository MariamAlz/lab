(function () {
  var SYM = {
    "Group p4m (orbifold *442). The pattern repeats in two directions, turns onto itself every quarter turn around the star centres, and has mirror lines in four directions.": "المجموعة p4m (أوربيفولد *442). يتكرر النمط في اتجاهين، وينطبق على نفسه كل ربع دورة حول مراكز النجوم، وله خطوط تناظر مرآوي في أربعة اتجاهات.",
    "Group p6m (orbifold *632). The pattern repeats in two directions, turns onto itself every sixth of a turn around the star centres, and has mirror lines in six directions. It is the most symmetric wallpaper group.": "المجموعة p6m (أوربيفولد *632). يتكرر النمط في اتجاهين، وينطبق على نفسه كل سدس دورة حول مراكز النجوم، وله خطوط تناظر مرآوي في ستة اتجاهات. وهي أكثر مجموعات الزخرفة الجدارية تناظرًا.",
    "Dihedral group D10. A single rosette, not a repeating pattern: it turns onto itself every tenth of a turn and has ten mirror lines. No wallpaper group allows 10-fold turns.": "المجموعة الزوجية D10. وردة واحدة وليست نمطًا متكررًا: تنطبق على نفسها كل عُشر دورة ولها عشرة خطوط تناظر مرآوي. لا تسمح أي مجموعة زخرفة جدارية بدوران عُشري."
  };
  var D = {
    "Islamic Pattern Maker": "صانع الزخارف الإسلامية",
    "Tool · Art · Geometry": "أداة · فن · هندسة",
    "Islamic pattern maker.": "صانع الزخارف الإسلامية.",
    "The star patterns on mosque doors, mashrabiya screens and zellige walls can be drawn from plain tilings of squares, hexagons and octagons. Pick a tiling and a contact angle, and the stars grow by themselves. Weave the lines over and under, colour the shapes, and export the result for a print or a laser cutter.": "الزخارف النجمية على أبواب المساجد والمشربيات وجدران الزليج يمكن رسمها من تبليطات بسيطة من المربعات والسداسيات والثمانيات. اختر تبليطًا وزاوية تلامس، فتنمو النجوم وحدها. انسج الخطوط فوق وتحت، ولوّن الأشكال، وصدّر النتيجة للطباعة أو للقص بالليزر.",
    "Classic designs": "تصاميم كلاسيكية",
    "8-fold khatam": "خاتم ثماني",
    "12-fold star": "نجمة اثنا عشرية",
    "Hexagram": "النجمة السداسية",
    "Six-point rosettes": "وردات سداسية",
    "Square weave": "نسيج مربع",
    "Stars and hexagons": "نجوم وسداسيات",
    "10-fold rosette": "وردة عشرية",
    "Open rosettes": "وردات مفتوحة",
    "Pattern": "النمط",
    "Zoom in": "تكبير",
    "Zoom out": "تصغير",
    "Reset view": "إعادة العرض",
    "Drag to move · scroll or pinch to zoom · tap a shape to recolour it": "اسحب للتحريك · مرّر أو اقرص للتكبير · انقر شكلًا لتغيير لونه",
    "Export SVG for laser": "تصدير SVG للقص بالليزر",
    "Export SVG artwork": "تصدير SVG ملوّن",
    "Export PNG": "تصدير PNG",
    "Tiling": "التبليط",
    "Squares (4.4.4.4)": "مربعات (4.4.4.4)",
    "Hexagons (6.6.6)": "سداسيات (6.6.6)",
    "Triangles and hexagons (3.6.3.6)": "مثلثات وسداسيات (3.6.3.6)",
    "Octagons and squares (4.8.8)": "ثمانيات ومربعات (4.8.8)",
    "Dodecagons, hexagons, squares (4.6.12)": "اثنا عشريات وسداسيات ومربعات (4.6.12)",
    "Decagon rosette (10-fold patch)": "وردة عشرية (رقعة عشرية)",
    "Contact angle": "زاوية التلامس",
    "Offset": "الإزاحة",
    "Line width": "سماكة الخط",
    "Weave over and under": "نسج فوق وتحت",
    "Colour the shapes": "لوّن الأشكال",
    "Show the tiling": "أظهر التبليط",
    "Colours": "الألوان",
    "Zellige": "زليج", "Desert": "صحراء", "Night": "ليل", "Garden": "حديقة", "Ink": "حبر",
    "fold star": "نجمة (عدد الرؤوس)",
    "symmetry group": "مجموعة التناظر",
    "shape types": "أنواع الأشكال",
    "p4m": "p4m", "p4": "p4", "p6m": "p6m", "p6": "p6", "D10": "D10",
    "How a contact angle works": "كيف تعمل زاوية التلامس",
    "<b>The contact angle.</b> In the 1920s the engineer Ernest Hanbury Hankin noticed how these patterns could be built. Take a tiling. From the middle of every edge, draw two lines into each tile, tilted by the same angle. Stop each line where it meets its partner from the next edge. Small angles give thin crosses, around 60 to 70 degrees gives classic stars, and large angles give wide rosettes. The offset splits each crossing point into two.": "<b>زاوية التلامس.</b> في عشرينيات القرن الماضي لاحظ المهندس إرنست هانبري هانكن طريقة بناء هذه الزخارف. خذ تبليطًا. من منتصف كل ضلع، ارسم خطين داخل كل بلاطة بالميل نفسه. أوقف كل خط حيث يلتقي بنظيره القادم من الضلع التالي. الزوايا الصغيرة تعطي صلبانًا رفيعة، والزوايا بين 60 و70 درجة تعطي النجوم الكلاسيكية، والزوايا الكبيرة تعطي وردات عريضة. أما الإزاحة فتقسم كل نقطة تقاطع إلى نقطتين.",
    "<b>Symmetry groups.</b> Every repeating flat pattern belongs to one of exactly 17 symmetry types, called wallpaper groups, proved in 1891. A square tiling gives p4m: it turns onto itself a quarter turn at a time and has mirror lines. Hexagon-based tilings give p6m, with sixth turns. Weaving breaks the mirror lines, because a mirror would swap over and under, and leaves the rotations.": "<b>مجموعات التناظر.</b> كل نمط مستوٍ متكرر ينتمي إلى واحد من 17 نوعًا من التناظر بالضبط، تسمى مجموعات الزخرفة الجدارية، وقد أُثبت ذلك عام 1891. التبليط المربع يعطي p4m: ينطبق على نفسه كل ربع دورة وله خطوط تناظر مرآوي. والتبليطات المبنية على السداسي تعطي p6m بدوران كل سدس دورة. النسج يكسر خطوط المرآة، لأن المرآة تبدّل الفوق بالتحت، ويُبقي الدورانات.",
    "<b>Why there are no 10-fold tilings.</b> You can't tile a flat floor with regular decagons and nothing else, and no repeating pattern can have 5-fold or 10-fold turns. Craftsmen in Iran and Morocco got around this with patches built around one big star. The decagon rosette here is one: a decagon ringed by ten pentagons. For laser cutting, export the plain SVG. It has only the lines, as thin strokes with no fill.": "<b>لماذا لا توجد تبليطات عشرية؟</b> لا يمكن تبليط أرضية مستوية بعشاريات منتظمة وحدها، ولا يمكن لأي نمط متكرر أن يملك دورانًا خماسيًا أو عشريًا. تجاوز الحرفيون في إيران والمغرب ذلك برقع مبنية حول نجمة كبيرة واحدة. الوردة العشرية هنا مثال: عشاري تحيط به عشرة خماسيات. للقص بالليزر، صدّر ملف SVG البسيط، ففيه الخطوط فقط كخطوط رفيعة بلا تعبئة.",
    "Saved pattern.svg with colours and weaving.": "حُفظ pattern.svg بالألوان والنسج.",
    "PNG export failed in this browser. Try the SVG instead.": "فشل تصدير PNG في هذا المتصفح. جرّب SVG بدلًا منه."
  };
  var SUF = " Weaving removes the mirrors.", SUFAR = " النسج يزيل خطوط المرآة.";
  for (var k in SYM) { D[k] = SYM[k]; D[k + SUF] = SYM[k] + SUFAR; }
  LabAr.add(D, [
    [/^Saved pattern-laser\.svg: (\d+) lines, 200 mm wide, cut lines in black and the frame in red\.$/, 'حُفظ pattern-laser.svg: ‏$1 خطًا، بعرض 200 مم، خطوط القص بالأسود والإطار بالأحمر.'],
    [/^Saved pattern\.png at (\d+) × (\d+) pixels\.$/, 'حُفظ pattern.png بأبعاد $1 × $2 بكسل.']
  ]);
})();
