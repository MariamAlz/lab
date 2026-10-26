(function () {
  function a(h, t) { return '<a href="' + h + '">' + t + '</a>'; }
  var U1 = 'https://backup1.idadesal.org/wp-content/uploads/2019/04/The-state-of-desalination-2019.pdf', U2 = 'https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2012/IRENA-ETSAP-Tech-Brief-I12-Water-Desalination.pdf', U3 = 'https://masdar.ae/-/media/corporate/projects/downloads/renewable-energy-desalination-pilot/desal-factsheet.pdf', U4 = 'https://www.dewa.gov.ae/en/about-us/media-publications/latest-news/2023/11/dubai-electricity-and-water-authority-pjsc', U5 = 'https://oer.enviraj.com/data/country-wise-electricity-emissions-factors-2022/', U6 = 'https://gulfnews.com/uae/environment/two-pipelines-to-ensure-70-wastewater-recycling-in-abu-dhabi-1.1967374';
  var K = function (x) { return '⁦' + x + '⁩'; };
  var NAMES = { 'Showers': 'الاستحمام', 'Baths': 'حوض الاستحمام', 'Toilet': 'المرحاض', 'Laundry': 'الغسيل', 'Dishwasher': 'غسالة الصحون', 'Sink': 'المغسلة', 'Garden & car': 'الحديقة والسيارة' };
  var NN = Object.keys(NAMES).join('|');
  var d = {
    "Your Shower's Journey": "رحلة ماء استحمامك",
    "Explainer · Water · Energy · UAE": "شرح · المياه · الطاقة · الإمارات",
    "Your shower's journey.": "رحلة ماء استحمامك.",
    "Almost every drop from a UAE tap started as Gulf seawater. Tell it how your household uses water and it follows that water from the sea, through a desalination plant, into your shower and back out as treated water for the city's trees. Along the way it adds up the seawater, energy, CO₂ and salty brine behind it.": "كل قطرة تقريبًا من صنابير الإمارات بدأت مياهًا من الخليج. أخبر الصفحة كيف يستخدم بيتك المياه، وستتبع هذه المياه من البحر، عبر محطة التحلية، إلى حمّامك، ثم خروجها مياهًا معالجة لأشجار المدينة. وعلى الطريق تحسب مياه البحر والطاقة وCO₂ والمحلول الملحي وراءها.",
    "Your household, per day": "بيتك، يوميًا",
    "Assumptions you can change": "افتراضات يمكنك تغييرها",
    "Reset to defaults": "استعادة القيم الافتراضية",
    "Your water, per day": "مياهك، يوميًا",
    "litres of seawater pumped in": "لتر من مياه البحر تُضخ",
    "kWh of energy": "kWh من الطاقة",
    "kg of CO₂": "كغ من CO₂",
    "litres of brine back to the Gulf": "لتر من المحلول الملحي يعود إلى الخليج",
    "litres reused for irrigation": "لتر يُعاد استخدامه للري",
    "tonnes of CO₂ a year": "طن من CO₂ سنويًا",
    "The journey of today's water": "رحلة مياه اليوم",
    "Where the numbers come from": "من أين جاءت الأرقام",
    "All figures are rough averages, meant for a sense of scale. Real plants vary with season, salinity and age, and your own supply may blend water from several plants. The Gulf is saltier and warmer than most seas, which pushes energy use up and recovery down compared with plants elsewhere.": "كل الأرقام متوسطات تقريبية لإعطاء فكرة عن الحجم. المحطات الفعلية تختلف بحسب الموسم والملوحة والعمر، وقد تمزج إمداداتك مياهًا من عدة محطات. والخليج أكثر ملوحة ودفئًا من معظم البحار، مما يرفع استهلاك الطاقة ويخفض نسبة الاسترداد مقارنةً بمحطات أخرى.",
    "People at home": "عدد أفراد البيت",
    "Showers a day (whole household)": "مرات الاستحمام يوميًا (البيت كله)",
    "Minutes per shower": "دقائق كل استحمام",
    "Shower flow, litres a minute": "تدفّق الدش، لتر في الدقيقة",
    "Standard heads 9–12, water-saving 6–8": "الرؤوس العادية 9–12، والموفّرة 6–8",
    "Baths a week": "حوض الاستحمام أسبوعيًا",
    "about 150 L each": "نحو 150 لترًا للمرة",
    "Toilet flushes a day (all)": "مرات شطف المرحاض يوميًا (الكل)",
    "6 L each, older cisterns 9–12 L": "6 لترات للمرة، والخزانات القديمة 9–12 لترًا",
    "Washing machine loads a week": "دورات الغسالة أسبوعيًا",
    "about 60 L a load": "نحو 60 لترًا للدورة",
    "Dishwasher runs a week": "دورات غسالة الصحون أسبوعيًا",
    "about 12 L, sink washing up uses far more": "نحو 12 لترًا، والغسل في المغسلة يستهلك أكثر بكثير",
    "Hand-washing up, minutes a day": "غسل الصحون يدويًا، دقائق يوميًا",
    "tap running at about 8 L/min": "الصنبور يتدفق بنحو 8 لترات/دقيقة",
    "Garden and car washing, litres a day": "ري الحديقة وغسل السيارة، لتر يوميًا",
    "a hose runs at about 15 L/min": "الخرطوم يتدفق بنحو 15 لترًا/دقيقة",
    "Share of your water that is desalinated (%)": "نسبة مياهك المحلّاة (%)",
    "Close to 100% for UAE drinking water": "قرابة 100% لمياه الشرب في الإمارات",
    "Share made by reverse osmosis (%)": "النسبة المنتجة بالتناضح العكسي (%)",
    "Dubai about 13% in 2023, rising fast; the rest thermal": "دبي نحو 13% في 2023 وترتفع بسرعة؛ والباقي حراري",
    "Reverse osmosis recovery ratio": "نسبة الاسترداد في التناضح العكسي",
    "fresh water out per seawater in": "المياه العذبة الناتجة لكل مياه بحر داخلة",
    "Thermal (MSF) recovery ratio": "نسبة الاسترداد الحراري (MSF)",
    "Reverse osmosis energy, kWh/m³": "طاقة التناضح العكسي، kWh/m³",
    "Thermal energy, kWh/m³ (electricity equivalent)": "الطاقة الحرارية، kWh/m³ (مكافئ كهربائي)",
    "3 kWh power + 80 kWh heat ≈ 12–18 kWh lost power": "كهرباء 3 kWh + حرارة 80 kWh ≈ كهرباء مفقودة 12–18 kWh",
    "Pumping and distribution, kWh/m³": "الضخ والتوزيع، kWh/m³",
    "Sewage treatment, kWh/m³": "معالجة الصرف الصحي، kWh/m³",
    "Grid CO₂, kg per kWh": "CO₂ الشبكة، كغ لكل kWh",
    "UAE about 0.40": "الإمارات نحو 0.40",
    "Share of indoor water that reaches the sewer (%)": "نسبة المياه المنزلية التي تصل إلى الصرف (%)",
    "Share of treated sewage reused (%)": "نسبة مياه الصرف المعالجة المُعاد استخدامها (%)",
    "Abu Dhabi about half, target 70–100%": "أبوظبي نحو النصف، والهدف 70–100%",
    "Intake from the Gulf": "السحب من الخليج",
    "Large pumps draw seawater through screens that keep out fish and jellyfish. The Gulf is about 4% salt, more than the open ocean, because it is shallow and evaporates fast.": "تسحب مضخات كبيرة مياه البحر عبر شبكات تمنع دخول الأسماك وقناديل البحر. ونسبة الملح في الخليج نحو 4%، أعلى من المحيط المفتوح، لأنه ضحل ويتبخر سريعًا.",
    "Desalination": "التحلية",
    "Two ways to pull the salt out. Thermal plants (multi-stage flash) boil seawater under low pressure using waste heat from power stations, then condense the steam. Reverse osmosis pushes seawater through membranes at 60 to 70 bar, about 30 times the pressure in a car tyre. It needs a third to a quarter of the energy, which is why new UAE plants use it.": "هناك طريقتان لاستخلاص الملح. المحطات الحرارية (التبخير الوميضي متعدد المراحل) تغلي مياه البحر تحت ضغط منخفض باستخدام الحرارة المهدرة من محطات الكهرباء، ثم تكثّف البخار. والتناضح العكسي يدفع مياه البحر عبر أغشية بضغط 60 إلى 70 بار، أي نحو 30 ضعف ضغط إطار السيارة. ويحتاج من ثلث إلى ربع الطاقة، ولهذا تعتمده محطات الإمارات الجديدة.",
    "Brine back to the sea": "المحلول الملحي يعود إلى البحر",
    "What isn't turned into fresh water goes back to the Gulf as brine, saltier and often warmer than the water around it. Outfalls are designed to mix it quickly, but in a shallow, enclosed sea it adds up: the UAE produces about a fifth of the world's desalination brine.": "ما لا يتحول إلى مياه عذبة يعود إلى الخليج محلولًا ملحيًا، أكثر ملوحة وغالبًا أدفأ من المياه المحيطة. صُممت المصبّات لمزجه بسرعة، لكنه يتراكم في بحر ضحل وشبه مغلق: فالإمارات تنتج نحو خُمس المحلول الملحي الناتج عن التحلية في العالم.",
    "Treatment and storage": "المعالجة والتخزين",
    "The fresh water is almost too pure, so minerals are added back to protect pipes and make it taste right, plus a little chlorine. It is stored in big reservoirs and, in Abu Dhabi, aquifer storage that holds a strategic reserve.": "المياه العذبة تكاد تكون نقية أكثر من اللازم، فتُضاف إليها المعادن لحماية الأنابيب وتحسين طعمها، مع قليل من الكلور. وتُخزَّن في خزانات كبيرة، وفي أبوظبي في مخزون جوفي يحفظ احتياطيًا استراتيجيًا.",
    "Through the network": "عبر الشبكة",
    "Pumping stations push it through thousands of kilometres of mains to your area's tanks and then to your building, often to a roof tank that heats up in summer.": "تدفعها محطات الضخ عبر آلاف الكيلومترات من الأنابيب الرئيسية إلى خزانات منطقتك ثم إلى مبناك، وغالبًا إلى خزان على السطح يسخن في الصيف.",
    "Your tap and shower": "صنبورك ودشّك",
    "This is the part you control. Showers are usually the biggest single use, then garden watering in villas.": "هذا هو الجزء الذي تتحكم فيه. الاستحمام عادةً أكبر استخدام منفرد، يليه ري الحدائق في الفلل.",
    "Down the drain": "إلى المصرف",
    "Nearly all indoor water goes to the sewer. Garden water soaks into the ground or evaporates. Sewage plants treat it in stages: screening, settling, bacteria that eat the waste, filtering and disinfection.": "تذهب كل المياه المنزلية تقريبًا إلى الصرف الصحي، أما مياه الحديقة فتتشربها الأرض أو تتبخر. وتعالج محطات الصرف المياه على مراحل: الغربلة، والترسيب، والبكتيريا التي تتغذى على الفضلات، والترشيح، والتعقيم.",
    "Treated water for irrigation": "مياه معالجة للري",
    "The cleaned water, called treated sewage effluent (TSE), travels in a separate pipe network (often purple) to water parks, roadside trees and golf courses, saving desalinated water. Some is still released to the sea when there is more than the network can use.": "تنتقل المياه المنظفة، المعروفة بمياه الصرف الصحي المعالجة (TSE)، عبر شبكة أنابيب منفصلة (غالبًا بنفسجية) لري الحدائق وأشجار الطرق وملاعب الغولف، فتوفّر المياه المحلّاة. ويُصرف بعضها إلى البحر حين يزيد عن حاجة الشبكة.",
    "seawater": "مياه البحر", "reverse osmosis": "التناضح العكسي", "thermal": "حراري", "energy": "الطاقة", "brine": "المحلول الملحي", "salt in it": "الملح فيه",
    "your share": "حصتك", "pumping": "الضخ", "showers": "الاستحمام", "everything else": "كل ما عداه", "to sewer": "إلى الصرف", "treatment": "المعالجة", "reused": "مُعاد استخدامه", "released": "مُصرَّف",
    "Recovery ratios (reverse osmosis 0.42, multi-stage flash 0.22) and the UAE's share of world brine (about 20%): Jones et al., <a href=\"https://backup1.idadesal.org/wp-content/uploads/2019/04/The-state-of-desalination-2019.pdf\">The state of desalination and brine production</a>, Science of the Total Environment, 2019.": "نسب الاسترداد (التناضح العكسي 0.42، والتبخير الوميضي متعدد المراحل 0.22) وحصة الإمارات من المحلول الملحي العالمي (نحو 20%): Jones et al.، " + a(U1, 'The state of desalination and brine production') + "، مجلة Science of the Total Environment، 2019.",
    "Pumping, distribution and sewage treatment energy (about 0.4 and 0.6 kWh/m³) and the heat-to-electricity equivalent for thermal plants are typical engineering values, not UAE-specific measurements. Change them above if you have better numbers.": "طاقة الضخ والتوزيع ومعالجة الصرف (نحو 0.4 و0.6 kWh/m³) والمكافئ الكهربائي للحرارة في المحطات الحرارية قيم هندسية نموذجية، وليست قياسات خاصة بالإمارات. غيّرها أعلاه إن كانت لديك أرقام أدق."
  };
  d["Thermal (MSF) plants use about 2.5–3.5 kWh of electricity plus around 80 kWh of heat per m³; reverse osmosis 3.5–5 kWh: " + a(U2, 'IRENA–ETSAP Water Desalination brief') + ". Masdar's UAE pilots reached under 3.6 kWh/m³ with reverse osmosis: " + a(U3, 'Masdar desalination factsheet') + ", which also notes Abu Dhabi gets virtually all its drinking water from desalination."] =
    "تستهلك المحطات الحرارية (MSF) نحو 2.5–3.5 kWh من الكهرباء ونحو 80 kWh من الحرارة لكل m³؛ والتناضح العكسي 3.5–5 kWh: " + a(U2, 'IRENA–ETSAP Water Desalination brief') + ". ووصلت مشاريع مصدر التجريبية في الإمارات إلى أقل من 3.6 kWh/m³ بالتناضح العكسي: " + a(U3, 'نشرة مصدر عن التحلية') + "، التي تذكر أيضًا أن أبوظبي تحصل على كل مياه الشرب تقريبًا من التحلية.";
  d["Dubai's capacity mix (427 MIGD thermal, 63 MIGD reverse osmosis in 2023, with all new capacity to 2030 being reverse osmosis): " + a(U4, 'DEWA results, Q3 2023') + "."] =
    "مزيج القدرة الإنتاجية في دبي (427 مليون غالون يوميًا حراريًا، و63 مليون غالون يوميًا بالتناضح العكسي في 2023، على أن تكون كل القدرة الجديدة حتى 2030 بالتناضح العكسي): " + a(U4, 'نتائج هيئة كهرباء ومياه دبي، الربع الثالث 2023') + ".";
  d["Grid emissions about 0.40 kg CO₂ per kWh: DEWA sustainability report 2021, via " + a(U5, 'country grid emission factors') + "."] =
    "انبعاثات الشبكة نحو 0.40 كغ CO₂ لكل kWh: تقرير الاستدامة لهيئة كهرباء ومياه دبي 2021، عبر " + a(U5, 'معاملات انبعاثات الشبكات حسب الدولة') + ".";
  d["Treated wastewater reuse in Abu Dhabi around half, with pipelines planned to reach 70%: " + a(U6, 'Gulf News') + "."] =
    "إعادة استخدام مياه الصرف المعالجة في أبوظبي نحو النصف، مع خطوط أنابيب مخطط لها لبلوغ 70%: " + a(U6, 'Gulf News') + ".";
  LabAr.add(d, [
    [/^([\d,]+) L$/, '$1 لتر'],
    [/^([\d,.]+) kWh$/, function (m, x) { return K(x + ' kWh'); }],
    [/^about ([\d,.]+) kg$/, 'نحو $1 كغ'],
    [/^([\d,]+) L from ([\d,]+) L sea$/, '$1 لتر من $2 لتر من البحر'],
    [/^([\d,]+) L desalinated$/, '$1 لتر محلّاة'],
    [/^([\d,]+) litres per person a day · ([\d,]+) m³ a year\.$/, '$1 لتر للفرد يوميًا · $2 m³ سنويًا.'],
    [new RegExp('^(' + NN + ') ([\\d,]+) L$'), function (m, n, x) { return NAMES[n] + ' ' + x + ' لتر'; }],
    [new RegExp('^(' + NN + '): ([\\d,]+) L$'), function (m, n, x) { return NAMES[n] + ': ' + x + ' لتر'; }],
    [/^Just making and moving your water uses about as much electricity as running a 1\.5-ton split AC for ([\d,.]+) hours, and that's before heating any of it\. The showers alone are (\d+)% of it\. Cutting each shower by 2 minutes saves ([\d,]+) litres and ([\d,]+) litres of seawater a day\.$/,
      'إنتاج مياهك ونقلها وحدهما يستهلكان من الكهرباء ما يعادل تشغيل مكيّف سبليت بقدرة 1.5 طن لمدة $1 ساعة، وذلك قبل تسخين أي منها. والاستحمام وحده يمثّل $2% منها. وتقليص كل استحمام بدقيقتين يوفّر $3 لتر و$4 لتر من مياه البحر يوميًا.']
  ]);
})();
