(function () {
  var AP = { DXB: 'مطار دبي الدولي', DWC: 'مطار آل مكتوم الدولي، دبي ورلد سنترال', AUH: 'مطار زايد الدولي، أبوظبي', SHJ: 'مطار الشارقة الدولي', RKT: 'مطار رأس الخيمة الدولي' };
  function dur(s) { // "35 min" or "1 h 05 min"
    var m = s.match(/^(?:(\d+) h )?(\d+) min$/); if (!m) return s;
    return m[1] ? m[1] + ' س و' + m[2] + ' د' : m[2] + ' دقيقة';
  }
  var DUR = '((?:\\d+ h )?\\d+ min)';
  var REASON = { 'not found live': 'لم تُرصد مباشرة', 'not tracking': 'لا يوجد تتبع' };
  LabAr.add({
    "Airport Pickup Timer": "مؤقت الاستقبال في المطار",
    "Tool · Flights · UAE · Live": "أداة · رحلات · الإمارات · مباشر",
    "Airport pickup timer.": "مؤقت الاستقبال في المطار.",
    "Type the flight number of the person you're collecting. This finds the plane live, works out when it lands and when they'll walk out of arrivals, then counts down to the moment you should leave home. No more circling the terminal or paying for an hour of parking.": "اكتب رقم رحلة الشخص الذي ستستقبله. تعثر الأداة على الطائرة مباشرة، وتحسب موعد هبوطها وموعد خروجه من صالة الوصول، ثم تعدّ تنازليًا حتى اللحظة التي يجب أن تخرج فيها من البيت. لا دوران حول المبنى بعد اليوم، ولا ساعة كاملة من رسوم المواقف.",
    "Leave home at": "اخرج من البيت الساعة",
    "Enter a flight to start.": "أدخل رقم رحلة للبدء.",
    "Timeline": "الجدول الزمني",
    "Waiting for a flight": "بانتظار رقم رحلة",
    "Flight number or callsign": "رقم الرحلة أو رمز النداء",
    "EK202": "EK202", "DXB": "DXB", "DWC": "DWC", "AUH": "AUH", "SHJ": "SHJ", "RKT": "RKT",
    "Arriving at": "الوصول إلى",
    "Track this flight": "تتبّع هذه الرحلة",
    "🔔 Remind me when to leave": "🔔 ذكّرني بموعد الخروج",
    "Walk-out time after landing (min)": "وقت الخروج بعد الهبوط (دقيقة)",
    "Your drive to the airport (min)": "مدة قيادتك إلى المطار (دقيقة)",
    "Walk-out time covers taxiing to the gate, passport control and bags. 30 to 45 minutes is typical; hand luggage only on an e-gate passport can be 20, a full long-haul arrival at peak time can be over an hour.": "يشمل وقت الخروج سير الطائرة إلى البوابة والجوازات واستلام الحقائب. المعتاد من 30 إلى 45 دقيقة؛ ومع حقيبة يد فقط والبوابات الذكية قد يكون 20 دقيقة، أما رحلة طويلة ممتلئة في وقت الذروة فقد تتجاوز الساعة.",
    "📍 Estimate my drive": "📍 قدّر مدة قيادتي",
    "Scheduled arrival (UAE time), used if the plane isn't in the air yet": "موعد الوصول المجدول (بتوقيت الإمارات)، يُستخدم إن لم تكن الطائرة قد أقلعت بعد",
    "<b>How the landing time is worked out.</b> Planes broadcast their position, height and speed over ADS-B. This takes the straight-line (great-circle) distance to the runway and splits it into cruise and descent. Pilots plan to descend about 3 nautical miles for every 1,000 ft of height, slowing as they go, so a plane at 38,000 ft starts down roughly 200 km out. The last 30 km of approach and landing are counted as a flat 15 minutes.": "<b>كيف يُحسب موعد الهبوط.</b> تبث الطائرات موقعها وارتفاعها وسرعتها عبر نظام ADS-B. تأخذ الأداة المسافة المباشرة (على الدائرة العظمى) حتى المدرج وتقسمها إلى مرحلة طيران مستقر ومرحلة هبوط. يخطط الطيارون للنزول نحو 3 أميال بحرية لكل 1,000 قدم من الارتفاع مع تخفيف السرعة، لذا تبدأ طائرة على ارتفاع 38,000 قدم النزول على بعد 200 كم تقريبًا. وتُحسب آخر 30 كم من الاقتراب والهبوط 15 دقيقة ثابتة.",
    "<b>What's approximate.</b> The landing time is an estimate that can be off by 10 minutes or more: holding patterns, runway changes and headwinds aren't known. The walk-out and drive times are your guesses. Some airlines fly under a callsign that doesn't match the flight number, and volunteer receivers don't cover every route, so if nothing shows up, use the scheduled time. Flight data comes from adsb.lol, airplanes.live or adsb.fi, and routes from adsbdb. Your location is only used in your browser to estimate the drive.": "<b>ما هو تقريبي.</b> موعد الهبوط تقدير قد يخطئ بعشر دقائق أو أكثر، فالدوران في الانتظار وتغيير المدرج والرياح المعاكسة غير معروفة مسبقًا. ووقتا الخروج والقيادة من تقديرك أنت. بعض شركات الطيران تستخدم رمز نداء لا يطابق رقم الرحلة، وأجهزة الاستقبال التطوعية لا تغطي كل المسارات، فإن لم تظهر الرحلة استخدم الموعد المجدول. بيانات الرحلات من adsb.lol أو airplanes.live أو adsb.fi، والمسارات من adsbdb. ويُستخدم موقعك داخل متصفحك فقط لتقدير مدة القيادة.",
    "Map of the flight and the airport": "خريطة الرحلة والمطار",
    "Dubai International": AP.DXB, "Al Maktoum, Dubai World Central": AP.DWC, "Zayed International, Abu Dhabi": AP.AUH, "Sharjah International": AP.SHJ, "Ras Al Khaimah International": AP.RKT,
    "Zoom in": "تكبير", "Zoom out": "تصغير",
    "Height": "الارتفاع", "Speed": "السرعة", "Climb / sink": "صعود / نزول", "Phase": "المرحلة",
    "Ground": "على الأرض", "Landed": "هبطت", "On ground": "على الأرض", "Final approach": "الاقتراب النهائي", "Descending": "تهبط", "Climbing": "تصعد", "Cruising": "طيران مستقر",
    "No live position yet": "لا يوجد موقع مباشر بعد",
    "Add the scheduled arrival time and the countdown will use it until the plane appears.": "أضف موعد الوصول المجدول وسيعتمد عليه العدّ التنازلي حتى تظهر الطائرة.",
    "Type a flight number and press Track.": "اكتب رقم الرحلة واضغط «تتبّع».",
    "Leave home": "اخرج من البيت",
    "estimated from the live position": "تقدير من الموقع المباشر",
    "already on the ground": "الطائرة على الأرض",
    "Walks out of arrivals": "يخرج من صالة الوصول",
    "You pull up at the kerb": "تصل إلى رصيف الاستقبال",
    "if you leave on time": "إن خرجت في الوقت المحدد",
    "Leave now": "اخرج الآن",
    "Waiting for the plane or a scheduled time.": "بانتظار الطائرة أو موعد مجدول.",
    "Reminder off.": "أُلغي التذكير.",
    "You'll get an alert when it's time to leave. Keep this tab open.": "سيصلك تنبيه عندما يحين وقت الخروج. أبقِ هذه الصفحة مفتوحة.",
    "You'll get an alert on this page when it's time to leave. Keep this tab open.": "سيظهر تنبيه في هذه الصفحة عندما يحين وقت الخروج. أبقِها مفتوحة.",
    "Your browser can't share a location.": "متصفحك لا يستطيع مشاركة الموقع.",
    "Asking for your location…": "جارٍ طلب موقعك…",
    "Location not shared. Type your drive time instead.": "لم تتم مشاركة الموقع. اكتب مدة القيادة بنفسك.",
    "None of the flight networks answered. They limit how often they can be asked; trying again in 30 seconds.": "لم تستجب أي من شبكات تتبع الرحلات. لديها حد لعدد الطلبات، وسنحاول مجددًا بعد 30 ثانية.",
    "That doesn't look like a flight number. Try something like EK202 or FZ1234.": "لا يبدو هذا رقم رحلة. جرّب مثلًا EK202 أو FZ1234."
  }, [
    [/^Looking for (\S+)(?: \((\S+)\))?…$/, function (m, a, b) { return 'جارٍ البحث عن ' + a + (b ? ' (' + b + ')' : '') + '…'; }],
    [/^No live signal from (\S+)\. It may not have taken off yet, or it's out of receiver range\. Checking again every 30 seconds\.$/, 'لا توجد إشارة مباشرة من $1. ربما لم تقلع بعد، أو أنها خارج نطاق أجهزة الاستقبال. نتحقق مجددًا كل 30 ثانية.'],
    [/^(\S+) found\. Updated (\S+), next check in 30 seconds\.$/, 'عُثر على $1. آخر تحديث $2، والتحقق التالي بعد 30 ثانية.'],
    [/^I don't know the airline code (\S+)\. Type the callsign instead \(three letters and a number, like UAE202\)\.$/, 'لا أعرف رمز شركة الطيران $1. اكتب رمز النداء بدلًا منه (ثلاثة أحرف ورقم، مثل UAE202).'],
    [/^To ([A-Z]{3})$/, 'المسافة إلى $1'],
    [/^([\d,]+) ft$/, '$1 قدم'],
    [/^([\d,]+) km\/h$/, '$1 كم/س'],
    [/^([+-]?[\d,]+) ft\/min$/, '\u2066$1\u2069 قدم/دقيقة'],
    [/^([\d,]+) km$/, '$1 كم'],
    [/^Lands at ([A-Z]{3})$/, 'تهبط في $1'],
    [/^([A-Z]{3}) · (.+)$/, function (m, c, n) { return c + ' · ' + (AP[c] || n); }],
    [new RegExp('^' + DUR + ' drive$'), function (m, d) { return 'قيادة ' + dur(d); }],
    [new RegExp('^' + DUR + ' after landing$'), function (m, d) { return 'بعد ' + dur(d) + ' من الهبوط'; }],
    [/^scheduled time \((.+)\)$/, function (m, r) { var g = r.match(/^on the ground (\d+) km away, not departed yet$/); return 'الموعد المجدول (' + (g ? 'على الأرض على بعد ' + g[1] + ' كم، لم تقلع بعد' : REASON[r] || r) + ')'; }],
    [/^(\d+) min late$/, 'متأخر $1 دقيقة'],
    [/^(?:(\d+)h )?(\d+)m (\d+)s$/, function (m, h, mi, s) { return (h ? h + ' س ' : '') + mi + ' د ' + s + ' ث'; }],
    [/^(Based on the live flight\. |The plane has landed\. |Based on the scheduled time, so it will update once the plane is tracked\. )They should walk out around (\d\d:\d\d) UAE time\.$/, function (m, a, t) {
      var pre = { 'Based on the live flight. ': 'بناءً على الرحلة المباشرة. ', 'The plane has landed. ': 'هبطت الطائرة. ', 'Based on the scheduled time, so it will update once the plane is tracked. ': 'بناءً على الموعد المجدول، وسيتحدّث عند رصد الطائرة. ' }[a];
      return pre + 'يُتوقع خروجه نحو الساعة ' + t + ' بتوقيت الإمارات.';
    }],
    [/^About (\d+) km by road \(straight line × 1\.3\) at an average 65 km\/h, plus 10 min to park\. Edit it if you know your usual time\.$/, 'نحو $1 كم بالطريق (المسافة المباشرة × 1.3) بمتوسط 65 كم/س، مع 10 دقائق للوقوف. عدّلها إن كنت تعرف مدتك المعتادة.'],
    [/^The route database says this flight goes to ([A-Z]{3}), not ([A-Z]{3})\. Check the airport\.$/, 'تقول قاعدة بيانات المسارات إن هذه الرحلة متجهة إلى $1 وليس $2. تأكد من المطار.'],
    [/^This plane is flying away from ([A-Z]{3})\. It may be the outbound flight with the same number\.$/, 'هذه الطائرة تبتعد عن $1. ربما هي رحلة المغادرة بالرقم نفسه.'],
    [/^Time to leave for ([A-Z]{3})$/, 'حان وقت الخروج إلى $1'],
    [/^They walk out around (\d\d:\d\d)\.$/, 'يخرج من صالة الوصول نحو $1.']
  ]);
})();
