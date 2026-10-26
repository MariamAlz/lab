(function () {
  var M = '(-?[\\d.]+)';
  function aed(v) { return v + ' درهم'; }
  function inc(list) { return list.split(', ').map(function (x) { var m; if ((m = x.match(/^service ([\d.]+)%$/))) return 'رسوم خدمة ' + m[1] + '%'; return { '5% VAT': 'ضريبة القيمة المضافة 5%', 'VAT added': 'ضريبة مضافة', 'VAT included': 'ضريبة مشمولة', 'tip': 'إكرامية', 'discount': 'خصم' }[x] || x; }).join('، '); }
  function items(s) { return s.split(', ').map(function (x) { return x === 'item' ? 'صنف' : x.replace(/^(½|1\/\d+) item$/, '$1 صنف'); }).join('، '); }
  LabAr.add({
    "Split a receipt.": "قسّم الفاتورة.",
    "Split a Receipt": "قسّم الفاتورة",
    "Tool · Money · Everyday": "أداة · المال · الحياة اليومية",
    "Take a photo of the bill, tap who had what, and get each person's fair share. Shared dishes split evenly, and the service charge, 5% VAT, tip and any discount are spread in proportion to what each person ordered. The photo is read on your phone, never uploaded.":
      "صوّر الفاتورة، وحدّد من طلب ماذا، واحصل على الحصة العادلة لكل شخص. الأطباق المشتركة تُقسَّم بالتساوي، أما رسوم الخدمة وضريبة القيمة المضافة 5% والإكرامية وأي خصم فتُوزَّع بنسبة ما طلبه كل شخص. تُقرأ الصورة على هاتفك ولا تُرفع أبدًا.",
    "1 · The receipt": "1 · الفاتورة",
    "📷 Scan a receipt": "📷 امسح فاتورة",
    "Arabic too": "مع العربية",
    "Paste text": "الصق نصًا",
    "Start over": "ابدأ من جديد",
    "Read these lines": "اقرأ هذه الأسطر",
    "2 · Who's paying": "2 · من سيدفع",
    "Name or emoji": "اسم أو رمز تعبيري",
    "3 · Items · tap a row to give it to the selected person": "3 · الأصناف · اضغط صفًا لتعطيه للشخص المحدد",
    "+ Add an item": "+ أضف صنفًا",
    "Unassigned → shared by all": "غير المخصّص ← مشترك بين الجميع",
    "4 · Charges": "4 · الرسوم",
    "Service charge": "رسوم الخدمة",
    "VAT 5%": "ضريبة القيمة المضافة 5%",
    "Already in the prices": "مشمولة في الأسعار",
    "Add on top": "تُضاف على الأسعار",
    "No VAT": "بلا ضريبة",
    "Discount": "الخصم",
    "Tip": "الإكرامية",
    "AED": "درهم",
    "5 · Each person pays": "5 · ما يدفعه كل شخص",
    "Copy for WhatsApp": "انسخ لواتساب",
    "Open WhatsApp ↗": "افتح واتساب ↗",
    "Copied ✓": "تم النسخ ✓",
    "<b>Why proportional?</b> If you had a 30 dirham salad and your friend a 120 dirham steak, the 10% service charge on your share should be 3, not half of 15. Discounts, VAT and tip work the same way: each person's share follows what they ordered. In the UAE, VAT is also charged on the service charge.":
      "<b>لماذا بالتناسب؟</b> إذا طلبت سلطة بـ 30 درهمًا وطلب صديقك ستيك بـ 120 درهمًا، فرسوم الخدمة 10% على حصتك يجب أن تكون 3 دراهم، لا نصف 15. والخصومات والضريبة والإكرامية تعمل بالطريقة نفسها: حصة كل شخص تتبع ما طلبه. وفي الإمارات تُفرض ضريبة القيمة المضافة على رسوم الخدمة أيضًا.",
    "The receipt is read by Tesseract, an open-source text reader that runs inside your browser. Its code and language files download the first time (a few MB). Crumpled or faded receipts read badly, so check the prices. Everything you enter is saved on this device only.":
      "تُقرأ الفاتورة بواسطة Tesseract، وهو قارئ نصوص مفتوح المصدر يعمل داخل متصفحك. تُنزَّل شيفرته وملفات اللغة في المرة الأولى (بضعة MB). الفواتير المجعّدة أو الباهتة تُقرأ بشكل سيئ، فتحقّق من الأسعار. كل ما تدخله يُحفظ على هذا الجهاز فقط.",
    "No lines with prices found. Add the items by hand below, or try a sharper, flatter photo.": "لم يُعثر على أسطر فيها أسعار. أضف الأصناف يدويًا أدناه، أو جرّب صورة أوضح وأكثر استواءً.",
    "Loading the text reader…": "جارٍ تحميل قارئ النصوص…",
    "Reading the receipt. This takes 10 to 30 seconds…": "جارٍ قراءة الفاتورة. يستغرق ذلك من 10 إلى 30 ثانية…",
    "Couldn't run the text reader here (offline or blocked). No problem: add the items by hand below, or paste the receipt text.": "تعذّر تشغيل قارئ النصوص هنا (لا يوجد اتصال أو أنه محظور). لا مشكلة: أضف الأصناف يدويًا أدناه، أو الصق نص الفاتورة.",
    "Clear all items and charges? People stay.": "هل تريد مسح كل الأصناف والرسوم؟ سيبقى الأشخاص.",
    "Add a person first, then tap items to give them to that person.": "أضف شخصًا أولًا، ثم اضغط الأصناف لتعطيها له.",
    "Add everyone at the table. Names or emoji both work.": "أضف كل من على الطاولة. تصلح الأسماء أو الرموز التعبيرية.",
    "No items yet. Scan a receipt or add them by hand.": "لا توجد أصناف بعد. امسح فاتورة أو أضفها يدويًا.",
    "Burger 45.00 2 x Mint lemonade 36.00 Fries 18.00": "برغر 45.00\n2 x ليمون بالنعناع 36.00\nبطاطس 18.00",
    "Item": "الصنف",
    "Item name": "اسم الصنف",
    "Price": "السعر",
    "Remove item": "إزالة الصنف",
    "Unassigned: shared by everyone": "غير مخصّص: مشترك بين الجميع",
    "Everyone": "الجميع",
    "nothing yet": "لا شيء بعد",
    "Add people to see the split.": "أضف أشخاصًا لترى التقسيم.",
    "Items": "الأصناف",
    "includes VAT of": "يشمل ضريبة بقيمة",
    "Receipt total says": "إجمالي الفاتورة يقول"
  }, [
    [new RegExp('^AED ' + M + '$'), function (m, v) { return aed(v); }],
    [new RegExp('^−AED ' + M + '$'), function (m, v) { return '−' + aed(v); }],
    [/^Add (.+)$/, 'أضف $1'],
    [/^Remove (.+)$/, 'إزالة $1'],
    [/^split (\d+) ways$/, 'مقسّم على $1'],
    [/^Service ([\d.]+)%$/, 'رسوم الخدمة $1%'],
    [/^Selected: (.+?)\. Tap items on the list to give them to this person\. Tap again to take back\. Two or more people on one item share it\.$/, 'المحدد: $1. اضغط الأصناف في القائمة لتعطيها لهذا الشخص، واضغط مرة أخرى لاستعادتها. إذا اشترك شخصان أو أكثر في صنف يتقاسمونه.'],
    [new RegExp('^(.+) · items AED ' + M + '$'), function (m, l, v) { return items(l) + ' · الأصناف ' + aed(v); }],
    [/^Read (\d+) items\. Check the prices, then tap rows to assign them\.$/, 'تمت قراءة $1 من الأصناف. تحقّق من الأسعار، ثم اضغط الصفوف لتخصيصها.'],
    [/^Found on the receipt: (.+)\. Check these\.$/, function (m, l) { return 'وُجد في الفاتورة: ' + l.replace(/service ([\d.]+)%/, 'رسوم خدمة $1%').replace(/VAT AED ([\d.]+) \(in the prices\)/, 'ضريبة $1 درهم (مشمولة في الأسعار)').replace(/VAT AED ([\d.]+) \(added\)/, 'ضريبة $1 درهم (مضافة)').replace(/discount AED ([\d.]+)/, 'خصم $1 درهم').replace(/, /g, '، ') + '. تحقّق منها.'; }],
    [new RegExp('^🧾 Bill split · total AED ' + M + '$'), function (m, v) { return '🧾 تقسيم الفاتورة · الإجمالي ' + aed(v); }],
    [new RegExp('^• (.+?): AED ' + M + '(?: \\((.*)\\))?$'), function (m, n, v, l) { return '• ' + n + ': ' + aed(v) + (l ? ' (' + items(l) + ')' : ''); }],
    [/^Includes (.+), shared by what each ordered\.$/, function (m, l) { return 'يشمل ' + inc(l) + '، موزّعة بحسب ما طلبه كل شخص.'; }]
  ]);
  // the WhatsApp link is first built before this dictionary arrives; rebuild it once every script is in
  (function (go) { if (document.readyState === 'complete') setTimeout(go, 300); else addEventListener('load', go); })(function () { var e = document.getElementById('svc'); if (e) e.dispatchEvent(new Event('input')); });
})();
