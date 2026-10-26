(function () {
  var SZ = '([\\d.]+ (?:KB|MB))';
  function pages(n) { n = +n; return n === 1 ? 'صفحة واحدة' : n === 2 ? 'صفحتان' : n <= 10 ? n + ' صفحات' : n + ' صفحة'; }
  function files(n) { n = +n; return n === 1 ? 'ملف واحد جاهز' : n === 2 ? 'ملفان جاهزان' : n <= 10 ? n + ' ملفات جاهزة' : n + ' ملفًا جاهزًا'; }
  function L(x) { return '⁦' + x + '⁩'; }
  function dims(d) {
    if (!d) return '';
    var m = d.match(/^(\d+) pages?$/); if (m) return ' · ' + pages(m[1]);
    return ' · ⁦' + d + '⁩';
  }
  LabAr.add({
    "Portal Upload Fixer": "مُصلح ملفات البوابات",
    "Tool · Files · UAE": "أداة · ملفات · الإمارات",
    "Portal upload fixer.": "مُصلح ملفات البوابات.",
    "Government and visa portals often reject a file for being 1.4 MB when the limit is 500 KB, or for being an iPhone HEIC photo. Drop your photos or PDFs here, pick the limit, and get files that fit. Nothing is uploaded: the shrinking happens on your device.": "كثيرًا ما ترفض البوابات الحكومية وبوابات التأشيرات ملفًا حجمه 1.4 MB والحد المسموح 500 KB، أو صورة HEIC من iPhone. أضف صورك أو ملفات PDF هنا، واختر الحد المطلوب، واحصل على ملفات مناسبة. لا يُرفع أي شيء: التصغير يتم على جهازك.",
    "Drop photos or PDFs here": "أفلت الصور أو ملفات PDF هنا",
    "or tap to choose. JPG, PNG, HEIC, WebP and PDF.": "أو اضغط للاختيار. JPG وPNG وHEIC وWebP وPDF.",
    "Your files": "ملفاتك",
    "Nothing yet. Add a file above.": "لا شيء بعد. أضف ملفًا في الأعلى.",
    "Download all (.zip)": "تنزيل الكل (.zip)",
    "Redo with new settings": "أعد التجهيز بالإعدادات الجديدة",
    "How it hits the limit: a JPG has a quality dial from 0 to 100. The page saves your photo at the middle setting, checks the size, then halves the gap again and again (a binary search). Seven tries finds the best quality that still fits. If even low quality is too big, it makes the picture a bit smaller and tries again.": "كيف يصل إلى الحد المطلوب: لصورة JPG مؤشر جودة من 0 إلى 100. تحفظ الصفحة صورتك عند منتصف المؤشر، وتتحقق من الحجم، ثم تقسم المسافة إلى النصف مرة بعد مرة (بحث ثنائي). سبع محاولات تكفي للعثور على أفضل جودة تبقى ضمن الحد. وإذا بقي الحجم كبيرًا حتى بجودة منخفضة، تُصغَّر الصورة قليلًا وتُعاد المحاولة.",
    "To be safe it counts 1 KB as 1000 bytes, the stricter reading, and aims a little under. Saving a photo again also removes its hidden location and camera data.": "للاحتياط تُحسب 1 KB على أنها 1000 بايت، وهو التفسير الأشد، ويُستهدف حجم أقل بقليل من الحد. كما أن إعادة حفظ الصورة تزيل بيانات الموقع والكاميرا المخفية فيها.",
    "Size limit": "حد الحجم",
    "Custom": "مخصص",
    "Custom limit (KB)": "حد مخصص (KB)",
    "Photo size in pixels": "أبعاد الصورة بالبكسل",
    "What to do with the dimensions": "ماذا نفعل بالأبعاد",
    "Keep, shrink only if needed to fit the limit": "أبقِها، وصغّرها فقط عند الحاجة للوصول إلى الحد",
    "Make the longest side at most…": "اجعل الضلع الأطول بحد أقصى…",
    "Exact size, crop to fill": "مقاس محدد، مع القص لملء الإطار",
    "Exact size, fit inside with padding": "مقاس محدد، مع الاحتواء وإضافة هامش",
    "Longest side (px)": "الضلع الأطول (px)",
    "Width (px)": "العرض (px)",
    "Height (px)": "الارتفاع (px)",
    "35 × 45 mm at 300 dpi": "35 × 45 مم بدقة 300 dpi",
    "40 × 60 mm at 300 dpi": "40 × 60 مم بدقة 300 dpi",
    "Starting points, not official specs. Check the portal's own rule for pixels, background and face size.": "هذه نقاط بداية وليست مواصفات رسمية. راجع شروط البوابة نفسها بشأن البكسل والخلفية وحجم الوجه.",
    "mm wide": "العرض بالمم",
    "mm high": "الارتفاع بالمم",
    "dpi": "dpi",
    "Use these mm as pixels": "حوّل هذه المليمترات إلى بكسل",
    "Background and padding colour": "لون الخلفية والهامش",
    "White background": "خلفية بيضاء",
    "Fills transparent areas and padding. It doesn't remove the background behind a person.": "يملأ المناطق الشفافة والهامش. ولا يزيل الخلفية خلف الشخص.",
    "PDFs": "ملفات PDF",
    "Sharpest page quality to try first": "أعلى جودة للصفحات تُجرَّب أولًا",
    "200 dpi (crisp, bigger)": "200 dpi (حادة، حجم أكبر)",
    "150 dpi (good for forms)": "150 dpi (مناسبة للنماذج)",
    "110 dpi (smaller)": "110 dpi (حجم أصغر)",
    "Put all the photos into one PDF (for \"upload one file\" boxes)": "اجمع كل الصور في ملف PDF واحد (لخانات \"ارفع ملفًا واحدًا\")",
    "Pages": "الصفحات",
    "A4, photo fitted with a margin": "A4، والصورة داخلها مع هامش",
    "Page the same size as each photo": "صفحة بحجم كل صورة",
    "PDFs are shrunk by turning each page into a JPG picture. Text will no longer be selectable, which portals don't mind. Keep the original. To merge or reorder PDFs first, use <a href=\"../pdf-tools/\">PDF tools</a>.": "تُصغَّر ملفات PDF بتحويل كل صفحة إلى صورة JPG، فلا يعود النص قابلًا للتحديد، وهذا لا يزعج البوابات. احتفظ بالأصل. لدمج ملفات PDF أو إعادة ترتيبها أولًا، استخدم <a href=\"../pdf-tools/\">أدوات PDF</a>.",
    "Download JPG": "تنزيل JPG",
    "Download PDF": "تنزيل PDF",
    "PDF": "PDF",
    "HEIC → JPG": "HEIC → JPG",
    "Those files are not photos or PDFs.": "هذه الملفات ليست صورًا ولا ملفات PDF.",
    "This photo could not be opened.": "تعذّر فتح هذه الصورة.",
    "Opening HEIC photo (first time loads a 1.3 MB decoder)…": "جارٍ فتح صورة HEIC (في المرة الأولى يُحمَّل مفكك بحجم 1.3 MB)…",
    "This HEIC photo could not be opened here. On an iPhone, open it in Safari, or set Camera > Formats to Most Compatible.": "تعذّر فتح صورة HEIC هذه هنا. على iPhone افتحها في Safari، أو اختر من الإعدادات: الكاميرا > التنسيقات > الأكثر توافقًا.",
    "Too detailed to fit at these exact pixels, even at low quality. Try a smaller size or a higher limit.": "الصورة غنية بالتفاصيل ولا تتسع لهذه الأبعاد حتى بجودة منخفضة. جرّب أبعادًا أصغر أو حدًا أعلى.",
    "Could not get it under the limit.": "تعذّر إنزال الحجم تحت الحد.",
    "Could not get it under the limit. Try fewer photos or a higher limit.": "تعذّر إنزال الحجم تحت الحد. جرّب صورًا أقل أو حدًا أعلى.",
    "Could not get it under the limit, even at low quality. Try a higher limit or split it with PDF tools.": "تعذّر إنزال الحجم تحت الحد حتى بجودة منخفضة. جرّب حدًا أعلى أو قسّم الملف بأدوات PDF.",
    "Already under the limit. You can upload the original.": "الملف ضمن الحد أصلًا. يمكنك رفع الأصل.",
    "Only the first 200 pages were kept.": "احتُفظ بأول 200 صفحة فقط.",
    "This PDF could not be read. It may be password protected.": "تعذّرت قراءة ملف PDF هذا. ربما هو محمي بكلمة مرور.",
    "Something went wrong.": "حدث خطأ ما."
  }, [
    [new RegExp('^' + SZ + '$'), '$1'],
    [/^Working on (.+)…$/, 'جارٍ تجهيز $1…'],
    [/^(.+): page (\d+) of (\d+)…$/, function (m, l, a, b) { return (l === 'Combining photos' ? 'جارٍ جمع الصور' : l) + ': الصفحة ' + a + ' من ' + b + '…'; }],
    [new RegExp('^Before ' + SZ + '(?: · (.+))?$'), function (m, s, d) { return 'قبل ' + s + dims(d); }],
    [new RegExp('^After ' + SZ + '(?: · (.+))?$'), function (m, s, d) { return 'بعد ' + s + dims(d); }],
    [/^(\d+) photos?$/, function (m, n) { n = +n; return n === 1 ? 'صورة واحدة' : n === 2 ? 'صورتان' : n <= 10 ? n + ' صور' : n + ' صورة'; }],
    [new RegExp('^(\\d+) files? ready, all under ' + SZ + '\\.$'), function (m, n, s) { return files(n) + '، وكلها تحت ' + s + '.'; }],
    [/^(\d+) files? ready, (\d+) still over the limit\.$/, function (m, n, k) { return files(n) + '، و' + k + ' منها ما زال فوق الحد.'; }]
  ]);
})();
