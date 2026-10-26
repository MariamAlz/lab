(function () {
  function extra(e) {
    if (!e) return '';
    var m = e.match(/^ It is getting closer by about (.+?) a minute(?:, and could be within 10 km in about (\d+) min\.|\.)$/);
    if (m) return ' تقترب العاصفة بنحو ' + m[1] + ' في الدقيقة' + (m[2] ? '، وقد تصبح على بعد 10 km خلال ' + (m[2] === '1' ? 'دقيقة تقريبًا.' : m[2] === '2' ? 'دقيقتين تقريبًا.' : 'نحو ' + m[2] + (+m[2] <= 10 ? ' دقائق.' : ' دقيقة.')) : '.');
    m = e.match(/^ It is moving away, about (.+?) a minute\.$/); if (m) return ' تبتعد العاصفة بنحو ' + m[1] + ' في الدقيقة.';
    if (e === ' It is staying at about the same distance.') return ' تبقى العاصفة على المسافة نفسها تقريبًا.';
    return e;
  }
  var EX = '((?: It is .+)?)';
  LabAr.add({
    "Lightning Distance": "مسافة البرق",
    "Tool · Weather · Sound": "أداة · الطقس · الصوت",
    "How far was that lightning?": "كم يبعد ذلك البرق؟",
    "Light reaches you almost instantly, but thunder travels at the speed of sound, about a kilometre every three seconds. Tap when you see the flash and again when you hear the thunder. Log a few strikes and the page tells you whether the storm is coming closer or moving away.": "يصلك الضوء فورًا تقريبًا، أما الرعد فينتقل بسرعة الصوت، نحو كيلومتر كل ثلاث ثوانٍ. اضغط حين ترى الوميض، ثم اضغط مرة أخرى حين تسمع الرعد. سجّل بضع ضربات وستخبرك الصفحة هل العاصفة تقترب أم تبتعد.",
    "Tap at the flash": "اضغط عند الوميض",
    "Then tap again when you hear the thunder. Space bar works too.": "ثم اضغط مرة أخرى حين تسمع الرعد. يعمل مفتاح المسافة أيضًا.",
    "Now tap when you hear the thunder.": "الآن اضغط حين تسمع الرعد.",
    "Cancel this one": "ألغِ هذه",
    "Cancelled.": "تم الإلغاء.",
    "No strikes logged yet.": "لم تُسجَّل أي ضربة بعد.",
    "When you see lightning, tap the big button.": "حين ترى البرق، اضغط الزر الكبير.",
    "Last strike": "آخر ضربة",
    "Closest": "الأقرب",
    "Trend": "الاتجاه",
    "Closer": "تقترب", "Away": "تبتعد", "Steady": "ثابتة", "Need 3": "تحتاج 3",
    "Distance of each strike over time": "مسافة كل ضربة عبر الزمن",
    "Strikes": "الضربات",
    "Each strike you time appears here.": "تظهر هنا كل ضربة تقيس زمنها.",
    "Clear the list": "امسح القائمة",
    "Air temperature": "حرارة الهواء",
    "°C": "°C",
    "Air temperature in °C": "حرارة الهواء بالدرجات المئوية",
    "📍 Use live temperature": "📍 استخدم الحرارة الحالية",
    "Sound travels at": "ينتقل الصوت بسرعة",
    "m/s at this temperature.": "m/s عند هذه الحرارة.",
    "m/s.": "m/s.",
    "m/s). You can type your own.": "m/s). يمكنك كتابة الحرارة بنفسك.",
    "The 30/30 rule": "قاعدة 30/30",
    "<b>30 seconds:</b> if the thunder comes less than 30 seconds after the flash, the storm is within about 10 km. That's close enough to be struck. Go indoors now. <b>30 minutes:</b> wait 30 minutes after the last thunder you hear before going back outside. Lightning often strikes behind the rain, after the sky looks like it's clearing.": "<b>30 ثانية:</b> إذا جاء الرعد بعد الوميض بأقل من 30 ثانية، فالعاصفة على بعد 10 km تقريبًا أو أقل، وهذا قريب بما يكفي لتصيبك صاعقة. ادخل إلى مكان مغلق الآن. <b>30 دقيقة:</b> انتظر 30 دقيقة بعد آخر رعد تسمعه قبل أن تخرج. كثيرًا ما يضرب البرق خلف المطر، بعد أن تبدو السماء وكأنها تصفو.",
    "Storm safety in the UAE": "السلامة أثناء العواصف في الإمارات",
    "<b>Stay out of wadis and low roads.</b> Rain on the Hajar mountains can send a flash flood down a dry wadi in minutes, even where it isn't raining.": "<b>ابتعد عن الأودية والطرق المنخفضة.</b> قد يتسبب المطر على جبال الحجر في سيل جارف عبر وادٍ جاف خلال دقائق، حتى في مكان لا تمطر فيه.",
    "<b>Get off the beach, out of the water and off open desert,</b> golf courses and rooftops. You don't want to be the tallest thing around.": "<b>غادر الشاطئ والماء والصحراء المكشوفة،</b> وملاعب الغولف والأسطح. لا تكن أعلى شيء في المكان.",
    "<b>A building or a hard-topped car is safe.</b> Close the windows and don't touch metal parts. A tent, majlis shade or bus shelter is not safe.": "<b>المبنى أو السيارة ذات السقف المعدني مكان آمن.</b> أغلق النوافذ ولا تلمس الأجزاء المعدنية. أما الخيمة أو مظلة المجلس أو موقف الحافلات فليست آمنة.",
    "<b>Don't shelter under a lone tree or palm,</b> or next to light poles and fences.": "<b>لا تحتمِ تحت شجرة أو نخلة منفردة،</b> ولا بجانب أعمدة الإنارة والأسوار.",
    "<b>Don't drive through water on the road.</b> 30 cm of moving water can float a car. Turn round if you can't see the road markings.": "<b>لا تقُد عبر المياه على الطريق.</b> 30 cm من الماء الجاري تكفي لتعويم سيارة. ارجع إذا لم تستطع رؤية علامات الطريق.",
    "<b>Follow the National Center of Meteorology (NCM)</b> for yellow, orange and red alerts, and police alerts on your phone. In an emergency call 999.": "<b>تابع المركز الوطني للأرصاد</b> لمعرفة التنبيهات الصفراء والبرتقالية والحمراء، وتنبيهات الشرطة على هاتفك. في الطوارئ اتصل بـ 999.",
    "<b>Indoors,</b> unplug sensitive electronics and avoid corded phones and showers while the storm is overhead.": "<b>داخل البيت،</b> افصل الأجهزة الإلكترونية الحساسة، وتجنب الهواتف السلكية والاستحمام والعاصفة فوقك.",
    "Sound is faster in warm air because the air molecules are already moving faster. At 0 °C it travels at 331 m/s, at 40 °C about 355 m/s. On a summer night in the UAE that's a 7% difference from the textbook value, which this page adjusts for. Your reaction time adds some error, so treat each distance as give or take a few hundred metres.": "الصوت أسرع في الهواء الدافئ لأن جزيئات الهواء تتحرك أصلًا بسرعة أكبر. عند \u200E0 °C ينتقل بسرعة 331 m/s، وعند \u200E40 °C نحو 355 m/s. وفي ليلة صيفية في الإمارات يكون الفرق 7% عن القيمة المعتادة في الكتب، وهذه الصفحة تأخذه في الحساب. ويضيف زمن رد فعلك بعض الخطأ، فاعتبر كل مسافة تقريبية بزيادة أو نقصان بضع مئات من الأمتار.",
    "That was too quick to be thunder. Try again.": "كان ذلك أسرع من أن يكون رعدًا. حاول مرة أخرى.",
    "No thunder after 2 minutes, so that one was cancelled. Thunder is rarely heard beyond about 15 to 25 km.": "لم يُسمع رعد بعد دقيقتين، لذا أُلغيت هذه الضربة. نادرًا ما يُسمع الرعد على بعد أكثر من 15 إلى 25 km.",
    "No thunder logged for 30 minutes.": "لم يُسجَّل رعد منذ 30 دقيقة.",
    "By the 30/30 rule it is reasonable to go back outside, if you have not heard any more thunder.": "حسب قاعدة 30/30 يمكنك الخروج الآن، ما دمت لم تسمع رعدًا آخر.",
    "Within striking distance. Stay indoors.": "ضمن مدى الصواعق. ابقَ في الداخل.",
    "Distance of each strike over the last hour (near at top)": "مسافة كل ضربة خلال الساعة الأخيرة (الأقرب في الأعلى)",
    "Getting the temperature…": "جارٍ جلب درجة الحرارة…",
    "Finding your location…": "جارٍ تحديد موقعك…",
    "Location isn't available here. Type the temperature instead.": "الموقع غير متاح هنا. اكتب درجة الحرارة بدلًا من ذلك."
  }, [
    [/^[\d.]+ k?m$/, '\u200E$&'],
    [/^\d+km$/, '$&'],
    [/^([\d.]+) s$/, '$1 ث'],
    [/^([\d.]+) s · ([\d.]+ k?m)$/, '$1 ث · $2'],
    [/^([\d.]+) s between flash and thunder\.$/, '$1 ث بين الوميض والرعد.'],
    [/^The storm is about (.+) away\.$/, 'العاصفة على بعد $1 تقريبًا.'],
    [new RegExp('^Thunder came less than 30 seconds after a flash in the last half hour\\. Stay inside until (\\d\\d:\\d\\d) at the earliest \\(30 minutes after the last thunder\\)\\.' + EX + '$'), function (m, t, e) { return 'وصل الرعد بعد الوميض بأقل من 30 ثانية خلال نصف الساعة الأخيرة. ابقَ في الداخل حتى ' + t + ' على الأقل (30 دقيقة بعد آخر رعد).' + extra(e); }],
    [new RegExp('^Thunder takes more than 30 seconds to reach you, so it is over 10 km off for now\\. Keep timing strikes\\.' + EX + '$'), function (m, e) { return 'يستغرق الرعد أكثر من 30 ثانية ليصلك، لذا تبعد العاصفة أكثر من 10 km حاليًا. واصل قياس الضربات.' + extra(e); }],
    [/^Live temperature where you are: (-?[\d.]+) °C, so sound travels at$/, 'الحرارة الحالية في موقعك \u200E$1 °C، لذا ينتقل الصوت بسرعة'],
    [/^Couldn't get the live temperature\. Using (-?[\d.]+) °C \($/, 'تعذّر جلب الحرارة الحالية. نستخدم \u200E$1 °C ('],
    [/^Location was blocked\. Using (-?[\d.]+) °C \($/, 'تم حظر الموقع. نستخدم \u200E$1 °C (']
  ]);
  window.dispatchEvent(new Event('labar-ready'));
})();
