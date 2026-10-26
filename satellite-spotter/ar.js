(function () {
var DIR = { 'north': 'الشمال', 'north-east': 'الشمال الشرقي', 'east': 'الشرق', 'south-east': 'الجنوب الشرقي', 'south': 'الجنوب', 'south-west': 'الجنوب الغربي', 'west': 'الغرب', 'north-west': 'الشمال الغربي' };
var DAY = { Mon: 'الاثنين', Tue: 'الثلاثاء', Wed: 'الأربعاء', Thu: 'الخميس', Fri: 'الجمعة', Sat: 'السبت', Sun: 'الأحد' };
var MON = { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Sept: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
var NAME = { 'International Space Station': 'محطة الفضاء الدولية', "China's space station": 'محطة الفضاء الصينية', 'Hubble Space Telescope': 'تلسكوب هابل الفضائي' };
var BR = { 'very bright': 'ساطع جدًا', 'bright': 'ساطع', 'easy to see away from city lights': 'يسهل رؤيته بعيدًا عن أضواء المدينة', 'faint, needs a dark sky': 'خافت، يحتاج إلى سماء مظلمة' };
function d(s) { return DIR[s] || s; }
function day(s) { if (s === 'Tonight') return 'الليلة'; if (s === 'Tomorrow') return 'غدًا'; var x = s.match(/^(\w{3}) (\d+) (\w{3,4})$/); return x ? DAY[x[1]] + ' ' + x[2] + ' ' + MON[x[3]] : s; }
function name(s) { var x = s.match(/^Starlink train \(launch (.+)\)$/); return x ? 'قطار ستارلينك' + ' (إطلاق ' + x[1] + ')' : NAME[s] || s; }
var D8 = '(north|north-east|east|south-east|south|south-west|west|north-west)';
var DT = '(Tonight|Tomorrow|\\w{3} \\d+ \\w{3,4})';
LabAr.add({
  "Space · Live · Phone": "الفضاء · مباشر · الهاتف",
  "The International Space Station is the brightest thing in the night sky after the Moon and Venus. It's easy to see from the UAE if you know when and where to look. It shows up just after sunset or before dawn, when you're in darkness but it's still lit by the Sun. Here are the next passes over you, and an arrow that points your phone straight at it.": "محطة الفضاء الدولية ألمع ما في سماء الليل بعد القمر والزهرة، ويسهل رؤيتها من الإمارات إذا عرفت متى وأين تنظر. تظهر بعد الغروب بقليل أو قبل الفجر، حين تكون أنت في الظلام بينما ما زالت الشمس تضيئها. هنا مواعيد مرورها القادمة فوقك، وسهم يوجّه هاتفك نحوها مباشرة.",
  "📍 Use my location": "📍 استخدم موقعي",
  "Satellite": "القمر الصناعي",
  "Space station": "محطة الفضاء",
  "Tiangong": "تيانغونغ",
  "Hubble": "هابل",
  "Starlink trains": "قطارات ستارلينك",
  "Working out passes…": "جارٍ حساب مواعيد المرور…",
  "Next visible pass": "المرور المرئي التالي",
  "Up right now": "في السماء الآن",
  "Right now": "الآن",
  "No visible passes soon": "لا مرور مرئي قريبًا",
  "Add to calendar": "أضف إلى التقويم",
  "Visible passes, next 10 days": "مرات المرور المرئية خلال 10 أيام",
  "Path across your sky": "مساره في سمائك",
  "Sky map of the selected pass": "خريطة السماء للمرور المختار",
  "N": "ش", "E": "ق", "S": "ج", "W": "غ",
  "Point your phone": "وجّه هاتفك",
  "Use the phone's compass": "استخدم بوصلة الهاتف",
  "Hold the phone up and follow the arrow": "ارفع الهاتف واتبع السهم",
  "No compass found on this device": "لم نجد بوصلة في هذا الجهاز",
  "Motion sensors were blocked": "تم حظر مستشعرات الحركة",
  "Here!": "هنا!",
  "Asking for your location…": "جارٍ طلب موقعك…",
  "Location not shared, so using Abu Dhabi. Anywhere in the UAE gives similar times.": "لم تتم مشاركة الموقع، لذلك نستخدم أبوظبي. أي مكان في الإمارات يعطي مواعيد متقاربة.",
  "No Starlink launches in the last few weeks, so there are no trains to see.": "لا توجد عمليات إطلاق لستارلينك في الأسابيع الأخيرة، لذا لا توجد قطارات لرؤيتها.",
  "No orbit data yet.": "لا توجد بيانات مدارية بعد.",
  "No visible passes in the next 10 days. Passes come in runs of a few weeks, with gaps in between.": "لا مرور مرئي خلال الأيام العشرة القادمة. تأتي مرات المرور في فترات تمتد بضعة أسابيع، تتخللها فجوات.",
  "Orbit data unavailable": "البيانات المدارية غير متاحة",
  "Try again in a few minutes.": "حاول مجددًا بعد بضع دقائق.",
  "Orbits come from CelesTrak and are refreshed every few hours. The ISS fires its engines now and then, which can shift times by a minute, so check again on the day. A pass is listed only when the satellite rises at least 10° and is sunlit while your sky is dark. Brightness uses the magnitude scale, where lower is brighter: Venus is about −4 and the faintest stars you can see in a city are about +3.": "البيانات المدارية مصدرها CelesTrak وتُحدَّث كل بضع ساعات. تشغّل محطة الفضاء الدولية محركاتها بين حين وآخر، ما قد يغيّر المواعيد بدقيقة، فتحقق مجددًا في اليوم نفسه. لا يُدرج المرور إلا إذا ارتفع القمر الصناعي 10° على الأقل وكانت الشمس تضيئه بينما سماؤك مظلمة. يُقاس السطوع بمقياس القدر، وكلما قلّ الرقم زاد السطوع: الزهرة نحو −4، وأخفت النجوم التي تُرى في المدينة نحو +3."
}, [
  [/^ISS & Satellite Spotter$/, 'رصد محطة الفضاء والأقمار الصناعية'],
  [/^ISS & satellite spotter\.$/, 'رصد محطة الفضاء الدولية والأقمار الصناعية.'],
  [/^Passes for (.+?)(?:\. Orbits updated (\d+) (\w{3,4}), ([\d:]+))?\.$/, function (m, n, dd, mo, t) { return 'مواعيد المرور فوق ' + (n === 'your location' ? 'موقعك' : LabAr.t(n)) + (dd ? '. آخر تحديث للمدارات ' + dd + ' ' + MON[mo] + '، ' + t : '') + '.'; }],
  [new RegExp('^' + DT + ' · ([\\d:]+)$'), function (m, a, t) { return day(a) + ' · ' + t; }],
  [new RegExp('^' + DT + ' at ([\\d:]+)$'), function (m, a, t) { return day(a) + ' الساعة ' + t; }],
  [/^(\d+)° high$/, 'ارتفاع \u2066$1°\u2069'],
  [/^(\d+)°$/, '$1°'],
  [new RegExp('^(?:(.+) · )?From the ' + D8 + ' to the ' + D8 + ' · (\\d+) min · (.+) \\(mag (-?[\\d.]+)\\)$'), function (m, l, a, b, n, br, mg) { return (l ? name(l) + ' · ' : '') + 'من ' + d(a) + ' إلى ' + d(b) + ' · ' + n + ' د · ' + (BR[br] || br) + ' (القدر ' + mg + ')'; }],
  [new RegExp('^In (?:(\\d+) days|(?:(\\d+) h )?(\\d+) min)\\. Look ' + D8 + ' and low, then follow it up to (\\d+)° in the ' + D8 + '\\. It looks like a steady, bright star moving quickly with no blinking lights\\.$'), function (m, dd, h, mi, a, e, b) {
    return 'بعد ' + (dd ? dd + ' أيام' : (h ? h + ' س ' : '') + mi + ' د') + '. انظر نحو ' + d(a) + ' قرب الأفق، ثم تابعه وهو يرتفع إلى ' + e + '° في ' + d(b) + '. يبدو كنجم ساطع ثابت يتحرك بسرعة دون أضواء وامضة.'; }],
  [new RegExp('^Look ' + D8 + ', (-?\\d+)° up$'), function (m, a, e) { return 'انظر نحو ' + d(a) + '، بارتفاع ' + e + '°'; }],
  [new RegExp('^(.+) is crossing your sky\\. It sets in the ' + D8 + ' at ([\\d:]+)\\.$'), function (m, n, a, t) { return name(n) + ' تعبر سماءك الآن. تغيب في ' + d(a) + ' الساعة ' + t + '.'; }],
  [/^It is ([\d,]+) km from you, (?:(\d+)° above|below) your horizon\.$/, function (m, k, e) { return 'تبعد عنك ' + k + ' كم، ' + (e ? 'وترتفع ' + e + '° فوق' : 'وهي تحت') + ' الأفق.'; }],
  [/^You're pointing at (it now|where it will appear)$/, function (m, w) { return w === 'it now' ? 'أنت تشير إليه الآن' : 'أنت تشير إلى مكان ظهوره'; }],
  [/^Turn towards the arrow · (\d+)° off$/, 'استدر نحو السهم · الفرق $1°'],
  [new RegExp('^Pointing at (it now|where it will appear): ' + D8 + ', (-?\\d+)° up$'), function (m, w, a, e) { return (w === 'it now' ? 'موقعه الآن' : 'مكان ظهوره') + ': ' + d(a) + '، بارتفاع ' + e + '°'; }]
]);
})();
