(function () {
  var FL = { 'FRAGILE': 'قابل للكسر', '↑ THIS WAY UP': '↑ هذا الجانب للأعلى', 'HEAVY': 'ثقيل', 'OPEN FIRST': 'يُفتح أولًا' };
  function boxes(n, gen) { n = +n; return n === 1 ? 'صندوق واحد' : n === 2 ? (gen ? 'صندوقين' : 'صندوقان') : n <= 10 ? n + ' صناديق' : n + ' صندوقًا'; }
  function labels(n) { n = +n; return n === 1 ? 'ملصق واحد' : n === 2 ? 'ملصقان' : n <= 10 ? n + ' ملصقات' : n + ' ملصقًا'; }
  function pages(n) { n = +n; return n === 1 ? 'صفحة A4 واحدة' : n === 2 ? 'صفحتي A4' : n <= 10 ? n + ' صفحات A4' : n + ' صفحة A4'; }

  LabAr.add({
    "Moving Box Labels": "ملصقات صناديق النقل",
    "Tool · Home · Moving": "أداة · المنزل · الانتقال",
    "Moving box labels.": "ملصقات صناديق النقل.",
    "Number your boxes, say which room they go to and what's inside, then print big A4 labels. Each label has a QR code. Scan it with any phone camera and it shows the box's contents, even if you never open this site again. Later, search \"kettle\" to find which box it's in.":
      "رقّم صناديقك، وحدّد الغرفة التي يذهب إليها كل صندوق وما بداخله، ثم اطبع ملصقات كبيرة بحجم A4. على كل ملصق رمز QR، امسحه بكاميرا أي هاتف ليعرض محتويات الصندوق، حتى لو لم تفتح هذا الموقع مرة أخرى. ولاحقًا، ابحث عن «غلاية» لتعرف في أي صندوق وضعتها.",
    "New box": "صندوق جديد",
    "Box no.": "رقم الصندوق",
    "Room it goes to": "الغرفة المقصودة",
    "Kitchen": "المطبخ",
    "What's inside, one thing per line": "المحتويات، غرض واحد في كل سطر",
    "Kettle Mugs (6) Tea and coffee Dallah": "غلاية\nأكواب (6)\nشاي وقهوة\nدلّة",
    "Fragile": "قابل للكسر",
    "This way up": "هذا الجانب للأعلى",
    "↑ This way up": "↑ هذا الجانب للأعلى",
    "Heavy": "ثقيل",
    "Open first": "يُفتح أولًا",
    "Name on labels (optional)": "الاسم على الملصقات (اختياري)",
    "Al Mansoori family, Villa 12": "عائلة المنصوري، فيلا 12",
    "Add box": "إضافة الصندوق",
    "Cancel edit": "إلغاء التعديل",
    "Save changes": "حفظ التغييرات",
    "Find something": "ابحث عن غرض",
    "Which box has the kettle?": "أي صندوق فيه الغلاية؟",
    "Search boxes": "البحث في الصناديق",
    "boxes": "صناديق",
    "things listed": "غرض مُدرج",
    "fragile": "قابل للكسر",
    "Your boxes": "صناديقك",
    "Export JSON": "تصدير JSON",
    "Import JSON": "استيراد JSON",
    "Delete all": "حذف الكل",
    "Labels · A4": "الملصقات · A4",
    "Per page": "في كل صفحة",
    "2 (large)": "2 (كبيرة)",
    "Two labels per box": "ملصقان لكل صندوق",
    "Print labels": "طباعة الملصقات",
    "The QR code doesn't point to a database. The box number, room and contents are packed into the link itself, after the # sign. Browsers never send that part to a server, so this page just reads it and shows the list. That's why a scan works offline once the page has loaded, and why nothing about your stuff is stored anywhere except this browser.":
      "رمز QR لا يشير إلى قاعدة بيانات، بل إن رقم الصندوق والغرفة والمحتويات محفوظة داخل الرابط نفسه بعد علامة #. والمتصفحات لا ترسل هذا الجزء إلى أي خادم، فتقرؤه هذه الصفحة وتعرض القائمة مباشرة. لهذا يعمل المسح دون إنترنت بعد تحميل الصفحة، ولا تُحفظ أي معلومات عن أغراضك إلا في هذا المتصفح.",
    "Scanned box": "صندوق ممسوح",
    "No contents were listed for this box.": "لم تُدرج أي محتويات لهذا الصندوق.",
    "This box is already in your list on this device.": "هذا الصندوق موجود في قائمتك على هذا الجهاز.",
    "Add to my boxes on this device": "إضافته إلى صناديقي على هذا الجهاز",
    "Make your own labels": "أنشئ ملصقاتك",
    "This link looks damaged, so the contents can't be read. Try scanning again in better light.": "يبدو أن الرابط تالف، لذا تتعذر قراءة المحتويات. حاول المسح مرة أخرى في إضاءة أفضل.",
    "No contents listed": "لا توجد محتويات مُدرجة",
    "No boxes yet. Add your first one above.": "لا توجد صناديق بعد. أضف أول صندوق في الأعلى.",
    "Type the thing you're looking for, like \"kettle\" or \"passports\".": "اكتب الغرض الذي تبحث عنه، مثل «غلاية» أو «جوازات».",
    "All boxes for this room": "كل صناديق هذه الغرفة",
    "Scan for full list": "امسح لعرض القائمة كاملة",
    "Scan for list (shortened)": "امسح لعرض القائمة (مختصرة)",
    "QR unavailable": "رمز QR غير متاح",
    "Labels appear here once you add boxes.": "ستظهر الملصقات هنا بعد إضافة الصناديق.",
    "The QR code library didn't load, so labels will print without codes. Check your connection and reload.": "لم تُحمَّل مكتبة رموز QR، لذا ستُطبع الملصقات دون رموز. تحقّق من اتصالك وأعد تحميل الصفحة.",
    "Add a box first.": "أضف صندوقًا أولًا.",
    "That file isn't a box list exported from here.": "هذا الملف ليس قائمة صناديق مُصدَّرة من هنا."
  }, [
    [/^[A-Z↑ ·]+$/, function (m) {
      var p = m.split(' · '), out = [];
      for (var i = 0; i < p.length; i++) { if (!FL[p[i]]) return m; out.push(FL[p[i]]); }
      return out.join(' · ');
    }],
    [/^Box (\d+) saved\.( Note: another box already has number \d+\.)?$/, function (m, n, d) {
      return 'تم حفظ الصندوق ' + n + '.' + (d ? ' ملاحظة: يوجد صندوق آخر بالرقم ' + n + '.' : '');
    }],
    [/^Editing box (\d+)$/, 'تعديل الصندوق $1'],
    [/^Delete box (\d+)\??$/, function (m, n) { return 'حذف الصندوق ' + n + (m.slice(-1) === '?' ? '؟' : ''); }],
    [/^Box (\d+)$/, 'الصندوق $1'],
    [/^\+ (\d+) more \(scan\)$/, '+ $1 أخرى (امسح الرمز)'],
    [/^Nothing matches "([^"]*)"\. It may be listed under another word\.$/, function (m, w) { return 'لا توجد نتائج لـ«' + w + '». ربما أُدرج الغرض باسم آخر.'; }],
    [/^(\d+) labels on (\d+) A4 pages?\. In the print dialog, turn off headers and footers and use 100% scale\.$/, function (m, l, p) {
      return labels(l) + ' على ' + pages(p) + '. في نافذة الطباعة، أوقف الرؤوس والتذييلات واختر مقياس 100%.';
    }],
    [/^Replace your current (\d+) boxes with the (\d+) in the file\? Cancel adds them instead\.$/, function (m, a, b) {
      return 'هل تريد استبدال صناديقك الحالية (' + boxes(a) + ') بما في الملف (' + boxes(b) + ')؟ اختر «إلغاء» لإضافتها بدلًا من ذلك.';
    }],
    [/^Imported (\d+) boxes\.$/, function (m, n) { return 'تم استيراد ' + boxes(n, 1) + '.'; }],
    [/^Delete all (\d+) boxes from this device\?$/, function (m, n) { return 'هل تريد حذف كل الصناديق (' + boxes(n) + ') من هذا الجهاز؟'; }]
  ]);

  // Arabic room suggestions in the datalist (the English list is built by the page script).
  function rooms() {
    var dl = document.getElementById('rooms'); if (!dl) return;
    var R = ['غرفة المعيشة', 'المجلس', 'المطبخ', 'غرفة الطعام', 'غرفة النوم الرئيسية', 'غرفة النوم 2', 'غرفة النوم 3', 'غرفة الأطفال', 'المكتب', 'الحمّام', 'غرفة العاملة', 'غرفة الغسيل', 'المخزن', 'الكراج', 'الشرفة', 'الحديقة'];
    dl.innerHTML = R.map(function (r) { return '<option value="' + r + '">'; }).join('');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rooms); else rooms();
})();
