LabAr.add({
  "Solar House": "البيت الشمسي",
  "Experiment · Energy · AI": "تجربة · الطاقة · الذكاء الاصطناعي",
  "Solar house.": "البيت الشمسي.",
  "A day in a solar-powered home in Abu Dhabi. The panels follow the sun and the air conditioning follows the heat. You decide when to run everything else. Run things while the sun shines and you buy less from the grid.": "يوم في بيت يعمل بالطاقة الشمسية في أبوظبي. الألواح تتبع الشمس والتكييف يتبع الحرارة، وأنت تقرر متى تشغّل كل شيء آخر. شغّل الأجهزة والشمس مشرقة لتشتري كهرباء أقل من الشبكة.",
  "Chart of a day: solar power, the home's load, and when it draws from the grid": "رسم بياني ليوم كامل: الطاقة الشمسية، واستهلاك البيت، ومتى يسحب من الشبكة",
  "Solar": "الشمس", "Grid kWh": "الشبكة (كيلوواط ساعة)", "Cost AED": "التكلفة بالدرهم",
  "Weather": "الطقس", "Clear day": "يوم صافٍ", "Dusty day": "يوم مغبر", "July heat": "حر يوليو",
  "Let the model plan": "دع النموذج يخطط", "Back to the evening rush": "ارجع إلى ذروة المساء",
  "Everything starts in the evening, when most families run it. Move the sliders to shift each job.": "كل شيء يبدأ مساءً، كما تفعل معظم العائلات. حرّك المؤشرات لتغيير موعد كل مهمة.",
  "This is the idea behind SaveSmart, my senior design project for Khalifa University's solar home: LSTM models forecast tomorrow's sunshine and power use, and an app suggests when to run appliances. The house placed 2nd in energy efficiency at Solar Decathlon Middle East 2021.": "هذه هي فكرة SaveSmart، مشروع تخرجي لبيت جامعة خليفة الشمسي: نماذج LSTM تتنبأ بسطوع الشمس واستهلاك الكهرباء في اليوم التالي، وتطبيق يقترح متى تُشغَّل الأجهزة. وحصل البيت على المركز الثاني في كفاءة الطاقة في مسابقة Solar Decathlon Middle East 2021.",
  "Simplified model: a 7 kW rooftop system, grid power at an assumed 0.30 AED per kWh, and no battery.": "نموذج مبسّط: نظام بقدرة 7 kW على السطح، وسعر مفترض لكهرباء الشبكة 0.30 درهم لكل kWh، ودون بطارية.",
  "Washing machine": "الغسالة", "Dishwasher": "غسالة الصحون", "Car charging": "شحن السيارة", "Water heater": "سخان الماء", "Pool pump": "مضخة المسبح",
  "Sun": "الشمس", "AC and everyday use": "التكييف والاستخدام اليومي", "Bought from the grid": "مشترى من الشبكة",
  "Back to the evening rush. Try beating the model yourself.": "عدنا إلى ذروة المساء. حاول أن تتفوق على النموذج بنفسك.",
  "The plan moves the big jobs into the sunniest hours. Grid power:": "تنقل الخطة المهام الكبيرة إلى أكثر الساعات شمسًا. كهرباء الشبكة:",
  ", about": "، أي توفير نحو",
  "if every day went like this.": "لو كانت كل الأيام هكذا."
}, [
  [/^([\d.]+) kW for ([\d.]+) h$/, '\u2066$1 kW\u2069 لمدة $2 ساعة'],
  [/^(\d+) kW$/, '$1 kW'],
  [/^([\d.]+) → ([\d.]+) kWh$/, '⁦$1 → $2 kWh⁩'],
  [/^(-?\d+) AED a year$/, '$1 درهم سنويًا']
]);
// the chart is drawn before this dictionary loads: redraw it
(function () { var b = document.querySelector('.day button[aria-pressed="true"]'); if (b) b.click(); })();
