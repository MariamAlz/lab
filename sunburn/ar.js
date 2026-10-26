(function () {
  function mins(s) { // "16 min", "1 h 04 min"
    var m = s.match(/^(?:(\d+) h )?(\d+) min$/); if (!m) return s;
    return m[1] ? m[1] + ' س ' + m[2] + ' د' : m[2] + ' دقيقة';
  }
  var MIN = '((?:\\d+ h )?\\d+ min)';
  var SKIN = {
    'Type I: very pale, always burns, never tans.': 'النوع I: بشرة شاحبة جدًا، تحترق دائمًا ولا تسمرّ أبدًا.',
    'Type II: fair, burns easily, tans a little.': 'النوع II: بشرة فاتحة، تحترق بسهولة وتسمرّ قليلًا.',
    'Type III: light olive, sometimes burns, tans evenly.': 'النوع III: بشرة زيتونية فاتحة، تحترق أحيانًا وتسمرّ بالتساوي.',
    'Type IV: olive or light brown, rarely burns, tans well.': 'النوع IV: بشرة زيتونية أو بنية فاتحة، نادرًا ما تحترق وتسمرّ جيدًا.',
    'Type V: brown, very rarely burns.': 'النوع V: بشرة بنية، نادرًا جدًا ما تحترق.',
    'Type VI: dark brown or black, almost never burns, but still can.': 'النوع VI: بشرة بنية داكنة أو سوداء، لا تكاد تحترق، لكن ذلك ممكن.'
  };
  var d = {
    "Sunburn Timer": "مؤقت حروق الشمس",
    "Tool · Health · Sun · Live": "أداة · الصحة · الشمس · مباشر",
    "Sunburn timer.": "مؤقت حروق الشمس.",
    "The UAE sun reaches a UV index of 11 or more for much of the year, enough to burn fair skin in about 15 minutes. Tell this your skin type and sunscreen, start the timer when you step out, and it counts down using the live UV for where you are, reminding you to reapply.": "تبلغ الأشعة فوق البنفسجية في الإمارات مؤشر 11 أو أكثر معظم العام، وهذا يكفي لحرق البشرة الفاتحة في نحو 15 دقيقة. أدخل نوع بشرتك وواقي الشمس، وشغّل المؤقت عند خروجك، فيعدّ تنازليًا حسب الأشعة الحالية في مكانك ويذكّرك بإعادة وضع الواقي.",
    "📍 Use my location": "📍 استخدم موقعي",
    "Liwa": "ليوا",
    "Time to burn at today's UV": "الوقت حتى الحرق بأشعة اليوم",
    "Pick your skin type to start.": "اختر نوع بشرتك للبدء.",
    "Pick your skin type first.": "اختر نوع بشرتك أولًا.",
    "☀ I'm going out now": "☀ سأخرج الآن",
    "I'm back in the shade": "عدت إلى الظل",
    "Today's UV": "الأشعة فوق البنفسجية اليوم",
    "Today's UV index by hour": "مؤشر الأشعة فوق البنفسجية اليوم لكل ساعة",
    "UV forecast": "توقع الأشعة", "Clear-sky UV": "الأشعة في سماء صافية", "Low risk (UV under 3)": "خطر منخفض (أقل من 3)",
    "Your skin": "بشرتك",
    "I": "I", "II": "II", "III": "III", "IV": "IV", "V": "V", "VI": "VI",
    "Not sure? Answer three quick questions": "لست متأكدًا؟ أجب عن ثلاثة أسئلة سريعة",
    "Your natural hair colour": "لون شعرك الطبيعي",
    "Red or blond": "أحمر أو أشقر", "Light brown": "بني فاتح", "Dark brown": "بني داكن", "Black": "أسود",
    "After an hour in strong sun without protection, you…": "بعد ساعة في شمس قوية دون حماية…",
    "Always burn, never tan": "أحترق دائمًا ولا أسمرّ", "Burn, then tan a little": "أحترق ثم أسمرّ قليلًا", "Sometimes burn, tan well": "أحترق أحيانًا وأسمرّ جيدًا", "Rarely or never burn": "نادرًا ما أحترق أو لا أحترق",
    "Your skin on the inside of your arm is…": "لون بشرتك في باطن ذراعك…",
    "Very pale": "شاحب جدًا", "Fair or beige": "فاتح أو بيج", "Olive or light brown": "زيتوني أو بني فاتح", "Brown or dark brown": "بني أو بني داكن",
    "Sunscreen": "واقي الشمس",
    "SPF": "SPF", "None": "بدون", "SPF 15": "SPF 15", "SPF 30": "SPF 30", "SPF 50": "SPF 50", "SPF 50+": "SPF 50+",
    "Applied at": "وُضع الساعة",
    "Applied just now": "وضعته الآن",
    "🏊 I've been swimming": "🏊 سبحت للتو",
    "I used a thick layer (about a teaspoon for each arm, the face and neck)": "وضعت طبقة سميكة (نحو ملعقة صغيرة لكل ذراع، وللوجه والرقبة)",
    "What's around you": "ما الذي حولك",
    "Grass, soil or shade around": "عشب أو تراب أو ظل",
    "Sand (beach or desert), +15%": "رمل (شاطئ أو صحراء)، +15%",
    "Water (pool or sea), +10%": "ماء (مسبح أو بحر)، +10%",
    "Concrete or paving, +10%": "خرسانة أو أرصفة، +10%",
    "Snow, +80% (not in the UAE)": "ثلج، +80% (غير موجود في الإمارات)",
    "<b>How it's worked out.</b> Burning starts at one \"minimal erythema dose\": about 200 J/m² of sunburn-weighted UV for skin type I, 250 for II, 300 for III, 450 for IV, 600 for V and 1,000 for VI. Each point of UV index is 0.025 W/m² of that light. So at UV 10, type II skin collects 250 J/m² in 1,000 seconds: about 17 minutes. Sunscreen multiplies the time, but most people put on half the tested amount, which gives roughly the square root of the SPF. SPF 30 behaves like SPF 5 or 6.": "<b>كيف تُحسب.</b> يبدأ الحرق عند «الجرعة الحمامية الدنيا»: نحو 200 J/m² من الأشعة المسببة للحروق للبشرة من النوع I، و250 للنوع II، و300 للنوع III، و450 للنوع IV، و600 للنوع V، و1,000 للنوع VI. وكل نقطة في مؤشر الأشعة تساوي 0.025 W/m² من هذه الأشعة. فعند مؤشر 10 تجمع بشرة من النوع II جرعة 250 J/m² في 1,000 ثانية: نحو 17 دقيقة. يضاعف الواقي هذا الوقت، لكن معظم الناس يضعون نصف الكمية المختبرة، فيكون الأثر نحو الجذر التربيعي لعامل الحماية. أي أن SPF 30 يعمل كأنه SPF 5 أو 6.",
    "<b>Vitamin D.</b> Skin makes vitamin D from the same UV that burns. For lighter skin, a few minutes of midday sun on arms and legs is usually enough; darker skin needs several times longer. When the UV is under 3, very little is made. There's no need to burn to get it.": "<b>فيتامين د.</b> تصنع البشرة فيتامين د من الأشعة نفسها التي تسبب الحروق. للبشرة الفاتحة تكفي عادة دقائق قليلة من شمس الظهيرة على الذراعين والساقين، والبشرة الداكنة تحتاج إلى وقت أطول بعدة مرات. وحين يكون المؤشر أقل من 3 لا يتكوّن إلا القليل. لا داعي لأن تحترق لتحصل عليه.",
    "<b>What's approximate.</b> UV comes from the Open-Meteo forecast, not a meter beside you, and clouds, dust and shade change it minute to minute. Skin types and burn doses vary a lot between people, and darker skin can still burn and still gets skin damage. Sunscreen wears off with sweat, towels and water whatever the label says. This is an estimate, not medical advice. If you're on medicines that make you sun-sensitive, ask your pharmacist.": "<b>ما هو تقريبي.</b> قيم الأشعة من توقعات Open-Meteo وليست من جهاز قياس بجانبك، والغيوم والغبار والظل تغيّرها من دقيقة لأخرى. أنواع البشرة وجرعات الحرق تختلف كثيرًا بين الناس، والبشرة الداكنة قد تحترق أيضًا وتتضرر. ويزول الواقي مع العرق والمنشفة والماء مهما قالت العبوة. هذا تقدير وليس نصيحة طبية. وإن كنت تتناول أدوية تزيد حساسيتك للشمس فاسأل الصيدلي.",
    "UV now": "المؤشر الآن", "Peak today": "الذروة اليوم", "none": "بدون", "worn off": "زال مفعوله",
    "No burn risk": "لا خطر حرق",
    "Get into the shade": "ادخل إلى الظل",
    "Waiting for the UV forecast.": "بانتظار توقعات الأشعة.",
    "The UV is too low to burn right now.": "الأشعة أضعف من أن تسبب حرقًا الآن.",
    "You've had about a full burning dose. Redness usually shows a few hours later.": "تعرّضت لجرعة حرق كاملة تقريبًا. يظهر الاحمرار عادة بعد بضع ساعات.",
    "Tap \"Applied just now\" when you put sunscreen on, so the timer can count it.": "اضغط «وضعته الآن» عند وضع الواقي ليحسبه المؤقت.",
    "🏊 You've been swimming since you put sunscreen on. Reapply now, then tap \"Applied just now\".": "🏊 سبحت بعد وضع الواقي. أعد وضعه الآن ثم اضغط «وضعته الآن».",
    "Time to reapply sunscreen": "حان وقت إعادة وضع الواقي",
    "Your last coat has worn off.": "زال مفعول الطبقة السابقة.",
    "You've had about a full sunburn dose.": "تعرّضت لجرعة حرق كاملة تقريبًا.",
    "Nearly at your sunburn limit": "اقتربت من حد الحرق",
    "Couldn't reach the UV forecast. Check your connection and try again.": "تعذّر الوصول إلى توقعات الأشعة. تحقّق من اتصالك وحاول مجددًا.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location was not shared. Pick a city instead.": "لم تتم مشاركة الموقع. اختر مدينة بدلًا من ذلك."
  };
  for (var k in SKIN) d[k] = SKIN[k];
  LabAr.add(d, [
    [/^Fetching the UV forecast for (.+)…$/, function (m, n) { return 'جارٍ جلب توقعات الأشعة لـ' + LabAr.t(n) + '…'; }],
    [/^(.+) · UV from Open-Meteo$/, function (m, n) { return LabAr.t(n) + ' · الأشعة من Open-Meteo'; }],
    [new RegExp('^' + MIN + '$'), function (m, a) { return mins(a); }],
    [new RegExp("^You've been out for " + MIN + '$'), function (m, a) { return 'مدة وجودك في الخارج: ' + mins(a); }],
    [/^(\d+) at (\d\d:\d\d)$/, '$1 عند $2'],
    [/^×([\d.]+)$/, '×$1'],
    [/^At UV ([\d.]+) with (no sunscreen|sunscreen working like SPF (\d+))( and (\d+)% extra reflected light)?\. Start the timer when you go out\.$/, function (m, uv, s, spf, r, pc) {
      return 'عند مؤشر ' + uv + (spf ? ' مع واقٍ يعمل كأنه SPF ' + spf : ' دون واقٍ') + (r ? ' و' + pc + '% أشعة منعكسة إضافية' : '') + '. شغّل المؤقت عند خروجك.';
    }],
    [/^You've had about (\d+)% of a burning dose(?:\. At this rate you'd start to burn around (\d\d:\d\d))?\.$/, function (m, p, t) { return 'تعرّضت لنحو ' + p + '% من جرعة الحرق' + (t ? '. بهذا المعدل ستبدأ بشرتك بالاحتراق نحو ' + t : '') + '.'; }],
    [/^Welcome back\. You had about (\d+)% of a burning dose\. Skin recovers overnight, so the count starts fresh tomorrow\.$/, 'أهلًا بعودتك. تعرّضت لنحو $1% من جرعة الحرق. تتعافى البشرة خلال الليل، فيبدأ العدّ من جديد غدًا.'],
    [/^⏰ It's been over 2 hours since you put sunscreen on \((\d\d:\d\d)\)\. Reapply now, then tap "Applied just now"\.$/, '⏰ مرّت أكثر من ساعتين منذ وضعت الواقي ($1). أعد وضعه الآن ثم اضغط «وضعته الآن».'],
    [/^That sounds like skin type (\w+)\. It's selected above\.$/, 'يبدو أن بشرتك من النوع $1. تم اختياره في الأعلى.'],
    [/^About (\d+) minutes left\.$/, 'بقي نحو $1 دقيقة.'],
    [/^(\d+)m$/, '$1 د']
  ]);
})();
