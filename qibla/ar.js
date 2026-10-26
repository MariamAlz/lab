(function () {
var C8 = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
LabAr.add({
  "Qibla Compass": "بوصلة القبلة",
  "Tool · Earth · Compass · Live": "أداة · الأرض · البوصلة · مباشر",
  "Qibla and the compass, explained.": "القبلة والبوصلة، بشرح مبسّط.",
  "Point your phone and turn until the gold arrow lines up with the top. This shows the direction of the Kaaba from where you are, how far it is, and the small gap between true north and magnetic north. On a laptop it still shows the bearing on a compass card, so you can line it up with a landmark.": "وجّه هاتفك واستدر حتى يصبح السهم الذهبي في الأعلى. تعرض الصفحة اتجاه الكعبة من موقعك، والمسافة إليها، والفرق الصغير بين الشمال الجغرافي والشمال المغناطيسي. وعلى الحاسوب المحمول تعرض الاتجاه على قرص البوصلة، لتطابقه مع معلم تعرفه.",
  "📍 Use my location": "📍 استخدم موقعي",
  "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
  "Asking for your location…": "جارٍ طلب موقعك…",
  "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك.",
  "Qibla from true north": "اتجاه القبلة من الشمال الجغرافي",
  "to the Kaaba": "إلى الكعبة",
  "magnetic declination": "الانحراف المغناطيسي",
  "Compass": "البوصلة",
  "Start live compass": "شغّل البوصلة المباشرة",
  "Compass on": "البوصلة تعمل",
  "Try the compass again": "جرّب البوصلة مجددًا",
  "North is at the top": "الشمال في الأعلى",
  "Facing the Qibla": "أنت باتجاه القبلة",
  "Compass card": "قرص البوصلة",
  "N": "ش", "E": "ق", "S": "ج", "W": "غ",
  "mag": "مغناطيسي",
  "Makkah": "مكة المكرمة",
  "N ↑": "ش ↑",
  "<i style=\"background:#ff4f6d\"></i>True north": "<i style=\"background:#ff4f6d\"></i>الشمال الجغرافي",
  "<i style=\"background:#4fd3bd\"></i>Magnetic north": "<i style=\"background:#4fd3bd\"></i>الشمال المغناطيسي",
  "<i style=\"background:#ffc857\"></i>Qibla": "<i style=\"background:#ffc857\"></i>القبلة",
  "<i style=\"background:#e8ecff\"></i>Your phone": "<i style=\"background:#e8ecff\"></i>هاتفك",
  "My phone already reports true north (skip the declination correction)": "هاتفي يعرض الشمال الجغرافي أصلًا (تخطَّ تصحيح الانحراف)",
  "Hold the phone flat, or upright with the camera facing ahead. Calibrate with a figure of eight if it seems off.": "أمسك الهاتف مسطّحًا، أو قائمًا والكاميرا متجهة إلى الأمام. إذا بدا الاتجاه غير دقيق فعايِر البوصلة بتحريك الهاتف على شكل الرقم 8.",
  "Motion access was not allowed, so the card stays with north at the top.": "لم يُسمح بالوصول إلى مستشعرات الحركة، لذلك يبقى الشمال في أعلى القرص.",
  "No compass found on this device, so the card stays with north at the top. Line up the gold arrow using a known landmark or the Sun.": "لم نجد بوصلة في هذا الجهاز، لذلك يبقى الشمال في أعلى القرص. طابق السهم الذهبي مع معلم معروف أو مع الشمس.",
  "Why the arrow points there": "لماذا يشير السهم إلى هناك",
  "The Qibla is the direction of the <b>shortest path over the globe</b> to the Kaaba, a great circle. It's worked out with spherical trigonometry from your latitude and longitude. From the UAE it points a little south of west. From New York it points north-east, not south-east, because the shortest route curves up over the Atlantic.": "القبلة هي اتجاه <b>أقصر طريق على سطح الكرة الأرضية</b> إلى الكعبة، أي على دائرة عظمى. ويُحسب بحساب المثلثات الكروي من خط العرض وخط الطول لموقعك. من الإمارات يشير إلى جنوب الغرب قليلًا. ومن نيويورك يشير إلى الشمال الشرقي لا الجنوب الشرقي، لأن أقصر طريق ينحني صعودًا فوق المحيط الأطلسي.",
  "Map centred on your location with the path to Makkah": "خريطة مركزها موقعك مع الطريق إلى مكة المكرمة",
  "This map is centred on you. On this projection every straight line from the centre is a great circle, so the Qibla is simply a straight line. Distances from the centre are true.": "مركز هذه الخريطة موقعك. وفي هذا الإسقاط يكون كل خط مستقيم يخرج من المركز دائرة عظمى، لذا تظهر القبلة خطًا مستقيمًا. والمسافات من المركز حقيقية.",
  "True north vs magnetic north": "الشمال الجغرافي والشمال المغناطيسي",
  "A compass needle points to <b>magnetic north</b>, which is not the North Pole. The difference is called <b>declination</b>. It changes from place to place and slowly over the years as Earth's molten core moves. Here it's worked out with the <b>World Magnetic Model 2025</b>, the same model phones and navigation systems use. In the UAE it's only about 2° east, so it barely matters for prayer. In parts of Canada or Russia it can be 20° or more.": "تشير إبرة البوصلة إلى <b>الشمال المغناطيسي</b>، وهو ليس القطب الشمالي. ويُسمّى الفرق بينهما <b>الانحراف المغناطيسي</b>، وهو يختلف من مكان إلى آخر ويتغير ببطء على مر السنين مع حركة لب الأرض المنصهر. يُحسب هنا باستخدام <b>النموذج المغناطيسي العالمي 2025</b>، وهو النموذج نفسه الذي تستخدمه الهواتف وأنظمة الملاحة. في الإمارات يبلغ نحو 2° شرقًا فقط، فلا يكاد يؤثر في الصلاة. وفي أجزاء من كندا أو روسيا قد يبلغ 20° أو أكثر.",
  "Most phones correct for declination themselves once they know your location. Android's absolute orientation and iPhone's compass heading may or may not, depending on the device. If your phone's own compass app shows true north, tick the box under the compass.": "معظم الهواتف تصحّح الانحراف بنفسها بمجرد أن تعرف موقعك. أما الاتجاه المطلق في Android واتجاه البوصلة في iPhone فقد يشملان التصحيح أو لا، حسب الجهاز. إذا كان تطبيق البوصلة في هاتفك يعرض الشمال الجغرافي، فأشّر على الخانة تحت البوصلة.",
  "Why phones get it wrong": "لماذا تخطئ الهواتف",
  "<b>Calibrate.</b> Phone compasses drift. Wave the phone in a slow figure of eight a few times, away from anything metal. <b>Metal and magnets</b> nearby, like steel desks, car bodies, reinforced concrete, speakers or a magnetic phone case, can bend the reading by 10° to 30°. <b>Hold it flat</b> or upright and steady, and step away from walls and cars.": "<b>عايِر البوصلة.</b> بوصلات الهواتف تنحرف مع الوقت. حرّك الهاتف ببطء على شكل الرقم 8 بضع مرات، بعيدًا عن أي معدن. <b>المعادن والمغانط</b> القريبة، مثل المكاتب الفولاذية وهياكل السيارات والخرسانة المسلحة ومكبرات الصوت أو غطاء الهاتف المغناطيسي، قد تحرف القراءة بين 10° و30°. <b>أمسكه مسطّحًا</b> أو قائمًا وثابتًا، وابتعد عن الجدران والسيارات.",
  "A good check without any sensor: at the right time of day the Sun is directly above Makkah (about 12:18 on 28 May and 12:27 on 16 July, Makkah time), and shadows everywhere that can see the Sun point straight away from the Qibla. Mosques also show the direction, so you can compare.": "طريقة جيدة للتحقق دون أي مستشعر: في وقت معيّن من اليوم تكون الشمس فوق مكة المكرمة مباشرة (نحو 12:18 في 28 مايو و12:27 في 16 يوليو بتوقيت مكة)، فتشير الظلال في كل مكان تُرى فيه الشمس إلى عكس اتجاه القبلة تمامًا. والمساجد أيضًا تبيّن الاتجاه، فيمكنك المقارنة.",
  "This is a helper, not a religious ruling. If in doubt, follow the direction of your local mosque.": "هذه أداة مساعدة وليست فتوى شرعية. وإذا شككت، فاتبع اتجاه المسجد القريب منك."
}, [
  [/^Qibla from true north \((.+)\)$/, function (m, c) { return 'اتجاه القبلة من الشمال الجغرافي (' + (C8[c] || c) + ')'; }],
  [/^([\d,.]+) km$/, '$1 كم'],
  [/^([\d.]+)° ([EW])$/, function (m, a, d) { return a + '° ' + (d === 'E' ? 'شرقًا' : 'غربًا'); }],
  [/^(.+) · (-?[\d.]+)°, (-?[\d.]+)° · on a magnetic compass the Qibla is ([\d.]+)°\. A constant-heading route would use ([\d.]+)° instead, ([\d.]+)° different\.$/, function (m, n, la, lo, q, r, d) { return LabAr.t(n) + ' · ' + la + '°, ' + lo + '° · على البوصلة المغناطيسية تكون القبلة ' + q + '°. أما الطريق بزاوية اتجاه ثابتة فيستخدم ' + r + '°، بفارق ' + d + '°.'; }],
  [/^Turn (right|left) (\d+)°$/, function (m, d, a) { return 'استدر ' + (d === 'right' ? 'يمينًا' : 'يسارًا') + ' ' + a + '°'; }]
]);
// the starting city was drawn before this dictionary loaded: draw it again
setTimeout(function () { var b = document.querySelector('#where .sm[aria-pressed="true"]'); if (b && b.id !== 'me') b.click(); }, 0);
})();
