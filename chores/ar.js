(function () {
  var SM = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  function cnt(n, one, two, few, many) { n = +n; return n === 1 ? one : n === 2 ? two : (n >= 3 && n <= 10) ? n + ' ' + few : n + ' ' + many; }
  function hm(s) {
    s = s.trim();
    var m = s.match(/^(\d+) h(?: (\d+) min)?$/); if (m) return cnt(m[1], 'ساعة', 'ساعتان', 'ساعات', 'ساعة') + (m[2] ? ' و' + cnt(m[2], 'دقيقة', 'دقيقتان', 'دقائق', 'دقيقة') : '');
    m = s.match(/^(\d+) min$/); if (m) return cnt(m[1], 'دقيقة', 'دقيقتان', 'دقائق', 'دقيقة');
    return s;
  }
  LabAr.add({
    "Fair Chore Wheel": "توزيع عادل للمهام المنزلية",
    "Tool · Home": "أداة · المنزل",
    "Fair chore wheel.": "توزيع عادل للمهام المنزلية.",
    "Chores are split by minutes, not by count, so \"cook dinner\" and \"water the plants\" don't weigh the same. People with less free time get less, likes and dislikes are respected where possible, and the unpopular jobs rotate every week. Share the plan with one link; no accounts.": "تُوزَّع المهام حسب الدقائق لا حسب العدد، فـ\"طبخ العشاء\" لا يساوي \"سقي النباتات\". من لديه وقت فراغ أقل يحصل على مهام أقل، وتُراعى التفضيلات قدر الإمكان، وتتناوب المهام غير المحبوبة كل أسبوع. شارك الخطة برابط واحد، دون حسابات.",
    "← Last week": "→ السابق",
    "Next week →": "التالي ←",
    "Last week": "الأسبوع الماضي",
    "Next week": "الأسبوع القادم",
    "Copy share link": "انسخ رابط المشاركة",
    "Link copied": "تم نسخ الرابط",
    "Link is in the address bar": "الرابط في شريط العنوان",
    "Fair share means minutes in proportion to each person's free hours. Tap the names under a chore to cycle: <span style=\"color:var(--sat-b)\">likes it</span>, <span style=\"color:var(--sat-c)\">dislikes it</span>, <s>can't do it</s>, or neutral. The plan is saved on this device and inside the share link only.": "الحصة العادلة تعني دقائق تتناسب مع ساعات فراغ كل شخص. اضغط على الأسماء تحت كل مهمة للتبديل بين: <span style=\"color:var(--sat-b)\">يحبها</span>، <span style=\"color:var(--sat-c)\">لا يحبها</span>، <s>لا يستطيع القيام بها</s>، أو محايد. تُحفظ الخطة على هذا الجهاز وداخل رابط المشاركة فقط.",
    "People": "الأشخاص",
    "name · free hours a week": "الاسم · ساعات الفراغ في الأسبوع",
    "+ Person": "+ شخص",
    "Chores": "المهام",
    "chore · minutes each time · times a week": "المهمة · الدقائق في كل مرة · المرات في الأسبوع",
    "+ Chore": "+ مهمة",
    "Name": "الاسم",
    "Free hours a week": "ساعات الفراغ في الأسبوع",
    "Chore": "المهمة",
    "Times a week": "المرات في الأسبوع",
    "Someone": "شخص ما",
    "Nothing this week": "لا شيء هذا الأسبوع",
    "Add at least one person and one chore.": "أضف شخصًا واحدًا ومهمة واحدة على الأقل."
  }, [
    [/^(\d+) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, function (m, d, mo) { return 'أسبوع ' + d + ' ' + SM[mo]; }],
    [/^\d+ h(?: \d+ min)?$/, function (m) { return hm(m); }],
    [/^\d+ min$/, function (m) { return hm(m); }],
    [/^(\d+)% of a fair share \((.+)\)$/, function (m, p, t) { return p + '% من الحصة العادلة (' + hm(t) + ')'; }]
  ]);
})();
