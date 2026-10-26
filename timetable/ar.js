(function () {
var DAY = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء' };
function pl(n, one, two, few, many) { n = +n; return n === 1 ? one : n === 2 ? two : n <= 10 ? n + ' ' + few : n + ' ' + many; }
LabAr.add({
  "Timetable Puzzle": "لغز الجدول الدراسي",
  "Experiment · Algorithms · Puzzle": "تجربة · الخوارزميات · لغز",
  "Timetable puzzle.": "لغز الجدول الدراسي.",
  "Fit every class into the week so no lecturer and no student group is in two places at once, with two rooms per time slot. Then race the hybrid algorithm from my course scheduling project: a genetic algorithm followed by an ant colony.": "وزّع كل المحاضرات على الأسبوع بحيث لا يكون أي محاضر أو مجموعة طلاب في مكانين في الوقت نفسه، مع قاعتين لكل فترة زمنية. ثم تسابق مع الخوارزمية الهجينة من مشروعي لجدولة المقررات: خوارزمية جينية تليها خوارزمية مستعمرة النمل.",
  "Mon": "اثنين", "Tue": "ثلاثاء", "Wed": "أربعاء",
  "Classes to place. Select a class, then a room slot.": "المحاضرات المطلوب توزيعها. اختر محاضرة، ثم مكانًا في قاعة.",
  "Dr. Noor": "د. نور", "Dr. Saeed": "د. سعيد", "Dr. Huda": "د. هدى", "Dr. Omar": "د. عمر",
  "Placed": "الموزّعة",
  "Clashes": "التعارضات",
  "Time": "الوقت",
  "<span>01</span>Tap a class, then tap a room slot. Tap a placed class to pick it up again.": "<span>01</span>اضغط على محاضرة، ثم على مكان في قاعة. واضغط على محاضرة موزّعة لترفعها من جديد.",
  "<span>02</span>A red class clashes: its lecturer or its group is busy elsewhere at that time.": "<span>02</span>المحاضرة الحمراء متعارضة: محاضرها أو مجموعتها مشغول في مكان آخر في الوقت نفسه.",
  "<span>03</span>Stuck, or done? Let the algorithm try the same puzzle.": "<span>03</span>علقت أو انتهيت؟ دع الخوارزمية تحاول حل اللغز نفسه.",
  "Let the algorithm try": "دع الخوارزمية تحاول",
  "New puzzle": "لغز جديد",
  "Chart of the algorithm's clashes over its iterations": "رسم بياني لتعارضات الخوارزمية عبر دوراتها",
  "The algorithm’s progress shows here.": "يظهر تقدّم الخوارزمية هنا.",
  "Genetic": "الجينية",
  "Ant colony": "مستعمرة النمل",
  "Genetic algorithm: breeding timetables…": "الخوارزمية الجينية: تزاوج الجداول…",
  "Ant colony: refining with pheromone trails…": "مستعمرة النمل: تحسين الجدول بمسارات الفيرومون…",
  "A genetic algorithm breeds whole timetables: the fittest mix and mutate. An ant colony then builds timetables piece by piece, following \"pheromone\" left on good choices. Together they find clash-free schedules that take days by hand.": "الخوارزمية الجينية تزاوج جداول كاملة: الأصلح منها يتمازج ويتحوّر. ثم تبني مستعمرة النمل الجداول قطعة قطعة، متتبعةً «الفيرومون» المتروك على الخيارات الجيدة. ومعًا تجدان جداول خالية من التعارض يستغرق إعدادها يدويًا أيامًا."
}, [
  [/^[A-Z]{2}\d{3}$/, function (m) { return m; }],
  [/^Group (Y\d)$/, 'المجموعة $1'],
  [/^(\d+)s$/, '$1 ث'],
  [/^(Mon|Tue|Wed) ([\d:]+), room ([AB])(?:: ([A-Z]{2}\d{3})(, clashes)?|, empty)$/, function (m, d, t, r, c, cl) { return DAY[d] + ' ' + t + '، القاعة ' + r + (c ? ': ' + c + (cl ? '، متعارضة' : '') : '، فارغة'); }],
  [/^Solved by hand in (\d+) s\. Now see how the algorithm does it\.$/, 'حللته يدويًا في $1 ثانية. والآن شاهد كيف تحلّه الخوارزمية.'],
  [/^(Clash-free|(\d+) clash(?:es)? left) after (\d+) generations?(?: and (\d+) ant-colony rounds)?, in ([\d.]+) s\. ?(?:You had (\d+)\/(\d+) placed with (\d+) clash(?:es)?\.)?$/, function (m, a, n, g, r, s, p, t, c) {
    return (n ? 'بقي ' + pl(n, 'تعارض واحد', 'تعارضان', 'تعارضات', 'تعارضًا') : 'بلا تعارضات') + ' بعد ' + pl(g, 'جيل واحد', 'جيلين', 'أجيال', 'جيلًا') + (r ? ' و' + pl(r, 'جولة واحدة', 'جولتين', 'جولات', 'جولة') + ' من مستعمرة النمل' : '') + '، في ' + s + ' ثانية.' + (p ? ' كان لديك ' + p + '/' + t + ' موزّعة مع ' + (c === '0' ? 'صفر تعارضات' : pl(c, 'تعارض واحد', 'تعارضين', 'تعارضات', 'تعارضًا')) + '.' : '');
  }]
]);
// the chart's placeholder text was drawn before this dictionary loaded: start a fresh puzzle to redraw it
setTimeout(function () { var b = document.getElementById('newp'); if (b) b.click(); }, 0);
})();
