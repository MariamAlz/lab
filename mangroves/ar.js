LabAr.add({
  "Mangrove Watch": "رصد أشجار القرم",
  "Experiment · Earth observation · UAE": "تجربة · رصد الأرض · الإمارات",
  "Mangrove watch.": "رصد أشجار القرم.",
  "One clear Sentinel-2 picture from every autumn since 2017, over Abu Dhabi's eastern mangroves and Mangrove National Park. Plants reflect near-infrared light strongly, so a simple index, NDVI, shows how green each 10 m pixel is.": "صورة واضحة واحدة من القمر Sentinel-2 لكل خريف منذ 2017، فوق أشجار القرم الشرقية في أبوظبي وحديقة القرم الوطنية. تعكس النباتات الأشعة تحت الحمراء القريبة بقوة، لذا يكشف مؤشر بسيط اسمه NDVI مدى اخضرار كل بكسل مساحته 10 م.",
  "Satellite view of the mangroves for the chosen year": "صورة الأقمار الصناعية لأشجار القرم في السنة المختارة",
  "Year": "السنة",
  "Play": "تشغيل",
  "View": "العرض",
  "True colour": "الألوان الحقيقية",
  "Greenness (NDVI)": "الاخضرار (NDVI)",
  "Change since 2017": "التغيّر منذ 2017",
  "Green area": "المساحة الخضراء",
  "vs 2017": "مقارنة بـ2017",
  "Picture": "الصورة",
  "Green area each year. Click a bar to jump to that year.": "المساحة الخضراء في كل سنة. انقر على عمود للانتقال إلى تلك السنة.",
  "The UAE has pledged to plant 100 million mangroves by 2030. Mangroves store carbon in their mud, shelter young fish and protect the coast from waves. \"Green area\" here counts every pixel with NDVI above 0.3 inside this box, so parks and lawns count too, and the tide and season nudge it from year to year.": "تعهّدت الإمارات بزراعة 100 مليون شجرة قرم بحلول 2030. تخزّن أشجار القرم الكربون في طينها، وتؤوي صغار الأسماك، وتحمي الساحل من الأمواج. \"المساحة الخضراء\" هنا تحسب كل بكسل قيمة NDVI فيه أعلى من 0.3 داخل هذا المربع، لذا تُحسب الحدائق والمسطحات العشبية أيضًا، ويغيّرها المد والموسم قليلًا من سنة إلى أخرى.",
  "Contains modified Copernicus Sentinel-2 data.": "تتضمن بيانات معدّلة من Copernicus Sentinel-2.",
  "water": "ماء",
  "bare sand": "رمل مكشوف",
  "some plants": "نباتات قليلة",
  "dense mangrove": "قرم كثيف",
  "greener than 2017": "أكثر اخضرارًا من 2017",
  "less green than 2017": "أقل اخضرارًا من 2017",
  "green both years": "أخضر في السنتين",
  "no change": "بلا تغيير",
  "green area, km²": "المساحة الخضراء، km²"
}, [
  [/^([\d.]+) km²$/, '$1 km²'],
  [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, function (m, d, mo) {
    return d + ' ' + { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' }[mo];
  }]
]);
