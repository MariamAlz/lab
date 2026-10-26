(function () {
  var SH = {
    "Linear": "خطي", "Bent": "منحنٍ", "Trigonal planar": "مثلث مستوٍ", "Trigonal pyramidal": "هرم ثلاثي", "Tetrahedral": "رباعي الأوجه",
    "Trigonal bipyramidal": "هرم ثلاثي مزدوج", "Seesaw": "أرجوحة", "T-shaped": "على شكل حرف T", "Octahedral": "ثماني الأوجه",
    "Square pyramidal": "هرم مربع", "Square planar": "مربع مستوٍ", "Polar": "قطبي", "Nonpolar": "غير قطبي"
  };
  var low = {}; for (var k in SH) low[k.toLowerCase()] = SH[k];
  var D = {
    "Molecule Shapes": "أشكال الجزيئات",
    "Learn · Chemistry · 3D": "تعلّم · كيمياء · ثلاثي الأبعاد",
    "Molecule shapes.": "أشكال الجزيئات.",
    "Why is water bent but carbon dioxide straight? Electron pairs around the central atom push each other as far apart as they can. Add atoms and lone pairs, drag the model to turn it, and see the shape, the bond angles, and whether the molecule ends up polar.": "لماذا جزيء الماء منحنٍ بينما ثاني أكسيد الكربون مستقيم؟ أزواج الإلكترونات حول الذرة المركزية يدفع بعضها بعضًا لأبعد مسافة ممكنة. أضف ذرات وأزواجًا حرة، واسحب النموذج لتدويره، وشاهد الشكل وزوايا الروابط وهل الجزيء قطبي أم لا.",
    "Presets": "جزيئات جاهزة",
    "3D model of the molecule": "نموذج ثلاثي الأبعاد للجزيء",
    "Drag to turn": "اسحب للتدوير",
    "Central atom": "الذرة المركزية",
    "Slow spin": "دوران بطيء",
    "Show lone pairs": "أظهر الأزواج الحرة",
    "Add a bonded atom": "أضف ذرة مرتبطة",
    "Tap the bond button on an atom to switch single, double or triple.": "اضغط زر الرابطة على أي ذرة للتبديل بين أحادية وثنائية وثلاثية.",
    "Lone pairs on the central atom": "الأزواج الحرة على الذرة المركزية",
    "Fewer lone pairs": "أزواج حرة أقل",
    "More lone pairs": "أزواج حرة أكثر",
    "Bond order": "رتبة الرابطة",
    "VSEPR type": "نوع VSEPR",
    "Electron groups": "مجموعات الإلكترونات",
    "Electron geometry": "الشكل الإلكتروني",
    "Molecular shape": "الشكل الجزيئي",
    "Bond angle": "زاوية الرابطة",
    "Lone pair check": "تحقق الأزواج الحرة",
    "Polarity": "القطبية",
    "Quiz": "اختبار",
    "Test yourself on the shapes.": "اختبر نفسك في الأشكال.",
    "New question": "سؤال جديد",
    "What shape is this molecule?": "ما شكل هذا الجزيء؟",
    "Is this molecule polar?": "هل هذا الجزيء قطبي؟",
    "Right. Here it is in 3D.": "صحيح. ها هو بالأبعاد الثلاثة.",
    "Too many electron groups": "مجموعات إلكترونات أكثر من اللازم",
    "Six electron groups is the most VSEPR handles here.": "ست مجموعات إلكترونات هي الحد الأقصى هنا.",
    "Keep at least one bonded atom.": "أبقِ ذرة مرتبطة واحدة على الأقل.",
    "120° and 90°": "120° و90°",
    "None (only one bond)": "لا توجد (رابطة واحدة فقط)",
    "Ozone has resonance: the middle O carries a +1 charge and keeps one lone pair.": "للأوزون رنين: ذرة O الوسطى تحمل شحنة +1 وتحتفظ بزوج حر واحد.",
    "The bonds are nearly nonpolar and the shape is symmetric.": "الروابط شبه غير قطبية والشكل متماثل.",
    "The bond dipoles cancel out because the shape is symmetric.": "عزوم ثنائي القطب للروابط تلغي بعضها لأن الشكل متماثل.",
    "The bond dipoles don't cancel. The arrow points to the more negative side.": "عزوم ثنائي القطب للروابط لا تلغي بعضها. يشير السهم إلى الجانب الأكثر سالبية.",
    "The bonds cancel, but the lone pairs sit on one side and make it lopsided.": "الروابط تلغي بعضها، لكن الأزواج الحرة تقع في جانب واحد فتجعل الجزيء غير متوازن.",
    "All three atoms are oxygen, but the middle one carries a positive charge and the shape is bent, so ozone is slightly polar.": "الذرات الثلاث كلها أكسجين، لكن الوسطى تحمل شحنة موجبة والشكل منحنٍ، لذا فالأوزون قطبي قليلًا.",
    "<b>How VSEPR works.</b> Count the groups of electrons around the central atom. Each bonded atom is one group, even with a double or triple bond, and each lone pair is one group. Two groups sit in a line, three in a triangle, four in a tetrahedron, five in a trigonal bipyramid and six in an octahedron. That is the electron geometry. The molecular shape is what you see if you look only at the atoms.": "<b>كيف تعمل نظرية VSEPR.</b> عُدّ مجموعات الإلكترونات حول الذرة المركزية. كل ذرة مرتبطة مجموعة واحدة، حتى لو كانت الرابطة ثنائية أو ثلاثية، وكل زوج حر مجموعة واحدة. مجموعتان تصطفان على خط، وثلاث على مثلث، وأربع على رباعي أوجه، وخمس على هرم ثلاثي مزدوج، وست على ثماني أوجه. هذا هو الشكل الإلكتروني. أما الشكل الجزيئي فهو ما تراه إذا نظرت إلى الذرات فقط.",
    "<b>Why lone pairs squeeze.</b> A lone pair is held by one nucleus, so it spreads wider than a bonding pair and pushes the bonds closer together. Methane has the perfect tetrahedral 109.5°. Ammonia, with one lone pair, closes to about 107°. Water, with two, closes to about 104.5°.": "<b>لماذا تضغط الأزواج الحرة؟</b> الزوج الحر تمسكه نواة واحدة، فينتشر أوسع من زوج الرابطة ويدفع الروابط لتتقارب. للميثان زاوية رباعي الأوجه المثالية 109.5°. الأمونيا، بزوج حر واحد، تضيق إلى نحو 107°. والماء، بزوجين، يضيق إلى نحو 104.5°.",
    "<b>Polar or not.</b> Each bond is a small arrow pointing to the atom that pulls electrons harder, its electronegativity (Pauling scale). Add the arrows. If they cancel and the lone pairs are spread evenly, the molecule is nonpolar, like CO<sub>2</sub> or CH<sub>4</sub>. If not, one end is slightly negative, like water. That's why water dissolves salt and oil doesn't mix with it.": "<b>قطبي أم لا.</b> كل رابطة سهم صغير يشير إلى الذرة التي تجذب الإلكترونات بقوة أكبر، أي الأعلى كهرسلبية (مقياس باولنغ). اجمع الأسهم. إن ألغت بعضها وتوزعت الأزواج الحرة بالتساوي، فالجزيء غير قطبي، مثل CO<sub>2</sub> أو CH<sub>4</sub>. وإلا فأحد طرفيه سالب قليلًا، مثل الماء. لهذا يذيب الماء الملح ولا يمتزج معه الزيت.",
    "Angles shown are measured values for well-known molecules and typical values for the rest. VSEPR is a simple model. It gets most shapes right, but heavier atoms and unusual bonding can bend the rules.": "الزوايا المعروضة قيم مقيسة للجزيئات المعروفة وقيم نموذجية لغيرها. نظرية VSEPR نموذج بسيط يصيب معظم الأشكال، لكن الذرات الأثقل والروابط غير المعتادة قد تخالف القواعد."
  };
  for (var s in SH) D[s] = SH[s];
  ['H', 'Be', 'B', 'C', 'N', 'O', 'F', 'P', 'S', 'Cl', 'Br', 'I', 'Xe'].forEach(function (e) { D[e] = e; D['+ ' + e] = '+ ' + e; });
  function lp(n) { return n === '1' ? 'زوج حر واحد' : n === '2' ? 'زوجان حران' : n + ' أزواج حرة'; }
  LabAr.add(D, [
    [/^(\d+) \((\d+) bonded, (\d+) lone\)$/, '$1 ($2 مرتبطة، $3 حرة)'],
    [/^(About|Typically about) ([\d.]+)° and ([\d.]+)°(, squeezed by the lone pair)?$/, function (m, a, x, y, sq) { return 'نحو ' + x + '° و' + y + '°' + (sq ? '، بضغط من الزوج الحر' : ''); }],
    [/^(About|Typically about) ([\d.]+)°(, squeezed by lone pairs)?$/, function (m, a, x, sq) { return (a === 'About' ? 'نحو ' : 'عادةً نحو ') + x + '°' + (sq ? '، بضغط من الأزواج الحرة' : ''); }],
    [/^Too many bonds for a neutral (\w+)\.$/, 'روابط أكثر من اللازم لذرة $1 متعادلة.'],
    [/^(\w+) would have an odd electron left over, so this needs a charge or resonance\.$/, 'سيبقى لذرة $1 إلكترون مفرد، لذا يحتاج هذا إلى شحنة أو رنين.'],
    [/^Matches: (\d+) lone pairs?\.$/, function (m, n) { return 'مطابق: ' + lp(n) + '.'; }],
    [/^A neutral (\w+) would have (\d+) lone pairs?\.$/, function (m, e, n) { return 'ذرة ' + e + ' المتعادلة سيكون لها ' + lp(n) + '.'; }],
    [/^Hint: (\w+) in the middle, with (\d+) lone pairs?\.$/, function (m, e, n) { return 'تلميح: ' + e + ' في الوسط، ومعها ' + (n === '0' ? 'لا أزواج حرة' : lp(n)) + '.'; }],
    [/^Not quite\. It's (.+)\. Here it is in 3D\.$/, function (m, s) { return 'ليس تمامًا. الإجابة: ' + (low[s] || s) + '. ها هو بالأبعاد الثلاثة.'; }]
  ]);
})();
