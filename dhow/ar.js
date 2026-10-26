(function () {
var DIR = { N: 'شمالًا', S: 'جنوبًا', E: 'شرقًا', W: 'غربًا', NE: 'شمال شرق', NW: 'شمال غرب', SE: 'جنوب شرق', SW: 'جنوب غرب' };
var PORT = { Julfar: 'جلفار', Muscat: 'مسقط', Aden: 'عدن', Socotra: 'سقطرى', Goa: 'غوا', Calicut: 'قاليقوط' };
function port(n) { return PORT[n] || n; }
function adv(a) {
  var m;
  if ((m = a.match(/^You are on (.+)'s latitude: run (east|west) along it\.$/))) return 'أنت على خط عرض ' + port(m[1]) + ': أبحر ' + (m[2] === 'east' ? 'شرقًا' : 'غربًا') + ' على امتداده.';
  if ((m = a.match(/^(.+) is at ([\d.]+) isba‘\. Keep going (south|north) until the kamal says so\.$/))) return port(m[1]) + ' على ارتفاع ' + m[2] + ' إصبع. واصل الإبحار ' + (m[3] === 'south' ? 'جنوبًا' : 'شمالًا') + ' حتى يشير الكمال إلى ذلك.';
  return a;
}
LabAr.add({
  "Dhow Navigator": "ملّاح الداو",
  "Experiment · Navigation · Game": "تجربة · ملاحة · لعبة",
  "Dhow navigator.": "ملّاح الداو.",
  "Sail from Julfar, today's Ras Al Khaimah, with no GPS and no clock good enough to tell your longitude. What you do have is <span class=\"ar\" lang=\"ar\">الجدي</span>, the Pole Star, and a kamal: a small board on a knotted string that measures how high it stands. Its height is your latitude.": "أبحِر من جلفار، رأس الخيمة اليوم، بلا GPS وبلا ساعة دقيقة بما يكفي لمعرفة خط الطول. لكن معك <span class=\"ar\" lang=\"ar\">الجدي</span>، نجم القطب، ومعك الكمال: لوح صغير مربوط بخيط معقود يقيس ارتفاع النجم. وارتفاعه هو خط عرضك.",
  "Chart of the Arabian Sea with your estimated position": "خريطة بحر العرب مع موقعك التقديري",
  "The night sky to the north, with your kamal. Use the slider to move the kamal.": "سماء الليل جهة الشمال مع الكمال. حرّك المنزلق لتحريك الكمال.",
  "Sail to": "أبحِر إلى",
  "Julfar": "جلفار", "Muscat": "مسقط", "Aden": "عدن", "Socotra": "سقطرى", "Goa": "غوا", "Calicut": "قاليقوط",
  "Day": "اليوم",
  "Kamal": "الكمال",
  "Goal": "الهدف",
  "Night: hold the kamal so its bottom edge sits on the horizon and its top touches the Pole Star": "في الليل: أمسك الكمال بحيث تستقر حافته السفلى على الأفق وتلامس حافته العليا نجم القطب",
  "Kamal height": "ارتفاع الكمال",
  "Take the reading": "سجّل القراءة",
  "Then choose a course for tomorrow": "ثم اختر اتجاه الغد",
  "Course": "الاتجاه",
  "N": "ش", "S": "ج", "E": "ق", "W": "غ", "NE": "شق", "NW": "شغ", "SE": "جق", "SW": "جغ",
  "Sail one day": "أبحِر يومًا",
  "New voyage": "رحلة جديدة",
  "You slip out of Julfar past the Musandam coast. Tonight, measure the Pole Star.": "تخرج من جلفار مارًّا بساحل مسندم. الليلة، قِس ارتفاع نجم القطب.",
  "Choose a course first.": "اختر الاتجاه أولًا.",
  "Forty days at sea and the water is running low. The voyage is over. Your true track is now shown in teal.": "أربعون يومًا في البحر والماء يوشك أن ينفد. انتهت الرحلة. يظهر مسارك الحقيقي الآن باللون الفيروزي.",
  "Breakers ahead!": "أمواج متكسّرة أمامك!",
  "Reading:": "القراءة:",
  "your chart": "خريطتك",
  "north": "الشمال",
  "Ahmad ibn Majid, born in Julfar in the 1400s, wrote one of the great guides to sailing by the stars. Navigators measured star heights in <i>isba‘</i> (finger widths, about 1.6°), and sailed north or south to a port's latitude first, then ran east or west along it until land appeared. In his day the Pole Star sat a few degrees from the true pole and needed a correction; here it's exact, to keep things simple.": "أحمد بن ماجد، المولود في جلفار في القرن الخامس عشر، كتب واحدًا من أعظم أدلة الملاحة بالنجوم. كان الملاحون يقيسون ارتفاع النجوم بـ<i>الإصبع</i> (عرض الإصبع، نحو 1.6°)، فيبحرون شمالًا أو جنوبًا أولًا حتى يبلغوا خط عرض الميناء، ثم يتجهون شرقًا أو غربًا على امتداده حتى تظهر اليابسة. في زمنه كان نجم القطب يبعد بضع درجات عن القطب الحقيقي ويحتاج إلى تصحيح، أما هنا فهو دقيق تمامًا للتبسيط."
}, [
  [/^([\d.]+)i$/, '$1 إصبع'],
  [/^([\d.]+) isba‘ ≈ ([\d.]+)°$/, '$1 إصبع ≈ $2°'],
  [/^([\d.]+) isba‘$/, '$1 إصبع'],
  [/^(\d+)° · ([\d.]+)i$/, '$1° · $2'],
  [/^Course (\w+)$/, function (m, d) { return 'الاتجاه ' + (DIR[d] || d).replace(/ًا$/, ''); }],
  [/^, so you are at about$/, '، أي أنك على خط عرض'],
  [/^([\d.]+)°N$/, '$1° شمالًا'],
  [/^\. (Hmm, check the kamal sits on the horizon and touches the star exactly\.|Your chart position is corrected north–south\. East–west is still a guess\.) (.+)$/, function (m, a, b) {
    return '. ' + (/^Hmm/.test(a) ? 'تمهّل، تأكد أن الكمال يستقر على الأفق ويلامس النجم تمامًا.' : 'تم تصحيح موقعك على الخريطة شمالًا وجنوبًا. أما الشرق والغرب فما زالا تخمينًا.') + ' ' + adv(b);
  }],
  [/^Day (\d+)\. A day's sailing (\w+)\. Night falls\. Measure the Pole Star again\.$/, function (m, d, h) { return 'اليوم ' + d + '. يوم من الإبحار باتجاه ' + (DIR[h] || h).replace(/ًا$/, '') + '. حلّ الليل. قِس ارتفاع نجم القطب مجددًا.'; }],
  [/^Land ho! (.+) \($/, 'اليابسة أمامك! وصلت إلى '],
  [/^\) on day (\d+)\.$/, ' في اليوم $1.'],
  [/^(Your best for this port\.|Your best is (\d+) days\.) The teal line is where you really went\.$/, function (m, a, n) { return (n ? 'أفضل رقم لك ' + n + ' يوم.' : 'هذا أفضل رقم لك لهذا الميناء.') + ' الخط الفيروزي هو المسار الذي سلكته فعلًا.'; }],
  [/^You ran onto the coast(?: near (.+?))? on day (\d+)\. The teal line shows where you really were, compared with your chart\.$/, function (m, p, d) { return 'جنحت إلى الساحل' + (p ? ' قرب ' + port(p) : '') + ' في اليوم ' + d + '. يُظهر الخط الفيروزي موقعك الحقيقي مقارنةً بخريطتك.'; }]
]);
// the charts were drawn before this dictionary loaded: redraw them
setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 0);
})();
