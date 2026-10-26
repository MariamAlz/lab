(function () {
var REG = { "UAE & Gulf": "الإمارات والخليج", "Strait of Hormuz": "مضيق هرمز", "Red Sea": "البحر الأحمر", "Eastern Mediterranean": "شرق البحر المتوسط", "Black Sea": "البحر الأسود", "Baltic": "بحر البلطيق" };
function sp(s) {
  var m;
  if (s === 'reported GPS loss') return 'أبلغت عن فقدان GPS';
  if ((m = s.match(/^GPS height ([\d,]+) ft away from barometric height$/))) return 'ارتفاع GPS يختلف بمقدار ' + m[1] + ' قدم عن الارتفاع البارومتري';
  if ((m = s.match(/^position jumped (\d+) km$/))) return 'قفز الموقع ' + m[1] + ' كم';
  return s;
}
var D = {
  "GPS Interference Now": "التشويش على GPS الآن",
  "GNSS · Signals · Live": "الملاحة بالأقمار الصناعية · إشارات · مباشر",
  "GPS interference now.": "التشويش على GPS الآن.",
  "Satellite navigation signals reach the ground about as faint as a car headlight seen from 20,000 km away, so they're easy to drown out (jamming) or fake (spoofing). Aircraft constantly broadcast how much they trust their own position. When many planes in one area report poor accuracy at once, something on the ground is interfering. This map collects those reports live.": "تصل إشارات الملاحة بالأقمار الصناعية إلى الأرض خافتة بقدر خفوت مصباح سيارة يُرى من مسافة 20,000 كم، لذلك يسهل إغراقها بالضجيج (التشويش) أو تزييفها (الانتحال). تبثّ الطائرات باستمرار مدى ثقتها في موقعها. وعندما تُبلغ طائرات كثيرة في منطقة واحدة عن دقة ضعيفة في الوقت نفسه، فهذا يعني أن شيئًا على الأرض يسبب تداخلًا. تجمع هذه الخريطة تلك البلاغات مباشرة.",
  "The receiver networks didn't answer. They limit how often they can be asked, so it will retry shortly.": "لم تستجب شبكات أجهزة الاستقبال. فهي تحدّ من عدد الطلبات المسموح بها، لذا ستُعاد المحاولة قريبًا.",
  "Zoom in": "تكبير",
  "Close popup": "إغلاق النافذة المنبثقة",
  "Zoom out": "تصغير",
  "Normal (under 2% of planes affected)": "طبيعي (أقل من 2% من الطائرات متأثرة)",
  "Some interference (2–10%)": "تشويش محدود (2–10%)",
  "Heavy interference (over 10%)": "تشويش شديد (أكثر من 10%)",
  "Signs of spoofing": "مؤشرات انتحال",
  "Hotspots right now": "بؤر التشويش الآن",
  "Collecting reports…": "جارٍ جمع البلاغات…",
  "Planes reporting": "طائرات تبثّ بياناتها",
  "Poor GPS accuracy": "دقة GPS ضعيفة",
  "Spoofing signs": "مؤشرات انتحال",
  "No interference hotspots in this area right now.": "لا توجد بؤر تشويش في هذه المنطقة حاليًا.",
  "Each square is about 100 km across. A square needs at least 3 planes before it's coloured, and reports build up over 10 minutes so one faulty plane doesn't paint a whole area. Purple marks planes showing spoofing signs: a GPS height that disagrees with the barometric height, a position that jumps faster than any aircraft can fly, or a report that GPS was lost.": "عرض كل مربع نحو 100 كم. لا يُلوَّن المربع إلا إذا كان فيه 3 طائرات على الأقل، وتتراكم البلاغات على مدى 10 دقائق حتى لا تُلوّن طائرةٌ واحدة معطّلة منطقة كاملة. اللون البنفسجي يميّز الطائرات التي تظهر عليها مؤشرات الانتحال: ارتفاع GPS لا يتفق مع الارتفاع البارومتري، أو موقع يقفز أسرع مما تستطيع أي طائرة أن تطير، أو بلاغ بفقدان GPS.",
  "Check your own phone": "افحص هاتفك",
  "Start the check": "ابدأ الفحص",
  "Check again": "افحص مجددًا",
  "Watching for 60 seconds…": "جارٍ المراقبة لمدة 60 ثانية…",
  "Your phone reports its own accuracy and position. This watches them for a minute for signs of trouble.<small>Works best outdoors with a clear view of the sky. Your location stays on the device.</small>": "يُبلغ هاتفك عن دقة موقعه وعن موقعه نفسه. تراقب هذه الأداة ذلك لمدة دقيقة بحثًا عن أي مؤشرات خلل.<small>تعمل بأفضل شكل في الخارج مع رؤية واضحة للسماء. يبقى موقعك على جهازك.</small>",
  "This browser can't share a location.": "هذا المتصفح لا يستطيع مشاركة الموقع.",
  "Location unavailable": "الموقع غير متاح",
  "Permission was refused.": "تم رفض الإذن.",
  "The phone couldn't get a fix. Try outdoors.": "تعذّر على الهاتف تحديد الموقع. جرّب في الخارج.",
  "Accuracy looks normal": "الدقة تبدو طبيعية",
  "Accuracy is weak": "الدقة ضعيفة",
  "Very poor accuracy": "الدقة ضعيفة جدًا",
  "Position jumped": "قفز الموقع",
  "No impossible jumps": "لا قفزات مستحيلة",
  "Your position moved smoothly.": "تحرّك موقعك بسلاسة.",
  "Fix time disagrees with your clock": "وقت تحديد الموقع لا يتفق مع ساعتك",
  "Fix time matches your clock": "وقت تحديد الموقع يتفق مع ساعتك",
  "Location updates arrive in step with the clock.": "تصل تحديثات الموقع متوافقة مع الساعة.",
  "What a web page can't see": "ما لا تستطيع صفحة الويب رؤيته",
  "Browsers don't show satellite signal strengths or which satellites are in view. Apps like GPSTest (Android) show those, and strong but uniform signal strengths are another spoofing sign.": "لا تعرض المتصفحات قوة إشارات الأقمار الصناعية ولا الأقمار الظاهرة. تطبيقات مثل GPSTest (على Android) تعرض ذلك، وتساوي قوة الإشارات مع ارتفاعها مؤشر آخر على الانتحال.",
  "Aircraft data comes from community ADS-B receiver networks (adsb.lol, airplanes.live, adsb.fi), fetched by your browser. Accuracy is read from the NIC and NACp values in each broadcast, the same method used by public interference maps. It shows where interference is likely, not who causes it, and gaps on the map are places with no planes or no receivers.": "بيانات الطائرات مصدرها شبكات مجتمعية لأجهزة استقبال ADS-B ‏(adsb.lol وairplanes.live وadsb.fi)، ويجلبها متصفحك مباشرة. تُقرأ الدقة من قيمتَي NIC وNACp في كل بث، وهي الطريقة نفسها التي تعتمدها خرائط التشويش العامة. تُظهر الخريطة أماكن التشويش المحتملة، لا الجهة المسببة له، والفراغات فيها أماكن لا توجد فيها طائرات أو أجهزة استقبال."
};
for (var k in REG) D[k] = REG[k];
function dir(v, p, n) { return v + '° ' + (p === 'N' ? 'شمالًا' : p === 'S' ? 'جنوبًا' : p === 'E' ? 'شرقًا' : 'غربًا'); }
LabAr.add(D, [
  [/^Asking receivers around (.+)…$/, function (m, r) { return 'جارٍ سؤال أجهزة الاستقبال حول ' + (REG[r] || r) + '…'; }],
  [/^Updated ([\d:]+)\. Refreshes every 30 seconds\.$/, 'آخر تحديث $1. يتجدد كل 30 ثانية.'],
  [/^Spoofing signs: (.+)$/, function (m, l) { return 'مؤشرات انتحال: ' + l.split(', ').map(sp).join('، '); }],
  [/^NIC (\S+) · NACp (\S+)$/, function (m) { return m; }],
  [/^(\d+) planes · (\d+)% with poor GPS accuracy(?: · (\d+) with spoofing signs)?$/, function (m, n, p, s) { return n + ' طائرة · ' + p + '% بدقة GPS ضعيفة' + (s ? ' · ' + s + ' بمؤشرات انتحال' : ''); }],
  [/^(-?\d+)°([NS]) (-?\d+)°([EW]) · (\d+) planes$/, function (m, a, b, c, d, n) { return dir(a, b) + ' ' + dir(c, d) + ' · ' + n + ' طائرة'; }],
  [/^(\d+)% · (\d+) spoof$/, '$1% · $2 انتحال'],
  [/^Watching… (\d+) updates so far$/, 'جارٍ المراقبة… $1 تحديث حتى الآن'],
  [/^Your phone says it's within about (\d+) m\. Outdoors, 3 to 15 m is typical\.$/, 'يقول هاتفك إن دقته في حدود $1 م تقريبًا. في الخارج، الدقة المعتادة بين 3 و15 م.'],
  [/^About (\d+) m\. Normal indoors or between tall buildings\. Outdoors under open sky, it can mean interference\.$/, 'نحو $1 م. هذا طبيعي داخل المباني أو بين الأبراج العالية. أما في الخارج تحت سماء مفتوحة، فقد يعني ذلك وجود تشويش.'],
  [/^About (\d+) m\. The phone is probably using Wi-Fi or cell towers, not satellites\. Under open sky, that can mean jamming\.$/, 'نحو $1 م. على الأرجح يستخدم الهاتف شبكة Wi-Fi أو أبراج الاتصالات بدل الأقمار الصناعية. وتحت سماء مفتوحة، قد يعني ذلك وجود تشويش.'],
  [/^The location moved ([\d.]+) km faster than you could travel, (\d+) time\(s\)\. Sudden jumps are a classic sign of spoofing \(or of switching between GPS and Wi-Fi positioning\)\.$/, 'تحرّك الموقع $1 كم أسرع مما يمكنك التنقل، $2 مرة. القفزات المفاجئة علامة معروفة على الانتحال (أو على التبديل بين تحديد الموقع عبر GPS وعبر Wi-Fi).'],
  [/^The location fix was stamped (\d+) s away from your phone's clock\. Spoofing can shift time as well as place, but some phones stamp fixes late\.$/, 'سُجّل وقت تحديد الموقع بفارق $1 ثانية عن ساعة هاتفك. الانتحال قد يغيّر الوقت كما يغيّر المكان، لكن بعض الهواتف تسجّل الوقت متأخرًا.'],
  [/^accuracy over 60 s \(max (\d+) m\)$/, 'الدقة خلال 60 ثانية (الأقصى $1 م)']
]);
})();
