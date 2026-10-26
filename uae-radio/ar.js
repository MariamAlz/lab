(function () {
  var LANG = { arabic: 'العربية', english: 'الإنجليزية', hindi: 'الهندية', malayalam: 'المالايالامية', tamil: 'التاميلية', urdu: 'الأردية', tagalog: 'الفلبينية', filipino: 'الفلبينية', persian: 'الفارسية', farsi: 'الفارسية', russian: 'الروسية', french: 'الفرنسية', bengali: 'البنغالية', telugu: 'التيلوغوية', punjabi: 'البنجابية', pashto: 'البشتوية', sinhala: 'السنهالية', nepali: 'النيبالية', german: 'الألمانية', spanish: 'الإسبانية' };
  var CITY = { 'Dubai': 'دبي', 'Abu Dhabi': 'أبوظبي', 'Sharjah': 'الشارقة', 'Ajman': 'عجمان', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Umm Al Quwain': 'أم القيوين', 'Al Ain': 'العين' };
  function part(p) {
    var items = p.split(', ');
    if (items.every(function (x) { return LANG[x.toLowerCase()]; })) return items.map(function (x) { return LANG[x.toLowerCase()]; }).join('، ');
    var k = p.match(/^(?:(\S+) )?(\d+) kbps$/); if (k) return '⁦' + p + '⁩';
    if (CITY[p]) return CITY[p];
    return '⁦' + p + '⁩';
  }
  LabAr.add({
    "UAE Radio Live": "إذاعات الإمارات مباشرة",
    "Sound · Radio · UAE · Live": "صوت · راديو · الإمارات · مباشر",
    "UAE radio live.": "إذاعات الإمارات مباشرة.",
    "The UAE has radio in a dozen languages, from Quran and Arabic talk to English pop, Hindi film songs and Malayalam news. This lists the stations streaming online, most popular first, so you can listen in your browser, keep favourites and fall asleep to one with a timer.": "في الإمارات إذاعات بأكثر من عشر لغات، من القرآن الكريم والبرامج الحوارية العربية إلى الأغاني الإنجليزية وأغاني الأفلام الهندية والأخبار بالمالايالامية. تعرض هذه الصفحة المحطات التي تبث عبر الإنترنت، الأكثر شعبية أولًا، لتستمع إليها في متصفحك وتحفظ المفضلة وتنام على صوت إحداها مع مؤقت.",
    "Now playing": "يُبث الآن",
    "Pick a station": "اختر محطة",
    "Nothing playing yet.": "لا شيء قيد التشغيل بعد.",
    "No details from the station.": "لا توجد تفاصيل من المحطة.",
    "▶ Play": "▶ تشغيل",
    "❚❚ Pause": "❚❚ إيقاف مؤقت",
    "Volume": "مستوى الصوت",
    "Sleep timer": "مؤقت النوم",
    "15 min": "15 دقيقة", "30 min": "30 دقيقة", "45 min": "45 دقيقة", "1 hour": "ساعة", "1.5 hours": "ساعة ونصف",
    "Search stations or genres": "ابحث عن محطة أو نوع",
    "Search stations": "ابحث عن محطة",
    "All": "الكل", "★ Favourites": "★ المفضلة", "Arabic": "العربية", "English (language)": "الإنجليزية", "Hindi": "الهندية", "Malayalam": "المالايالامية", "Tamil": "التاميلية", "Urdu": "الأردية", "Filipino": "الفلبينية", "Persian": "الفارسية", "Other": "لغات أخرى",
    "Favourite": "مفضلة",
    "Loading stations…": "جارٍ تحميل المحطات…",
    "Couldn't reach the radio directory. Check your connection and try again in a minute.": "تعذّر الوصول إلى دليل الإذاعات. تحقّق من اتصالك وحاول بعد دقيقة.",
    "Connecting…": "جارٍ الاتصال…",
    "Playing.": "قيد التشغيل.",
    "Playing. No sound wave for this station, as it doesn't allow it.": "قيد التشغيل. لا تظهر الموجة الصوتية لهذه المحطة لأنها لا تسمح بذلك.",
    "Tap Play to start.": "اضغط «تشغيل» للبدء.",
    "This station uses a stream format (HLS) your browser can't play here. Try another.": "تستخدم هذه المحطة صيغة بث (HLS) لا يستطيع متصفحك تشغيلها هنا. جرّب محطة أخرى.",
    "This station isn't answering right now. Try another.": "هذه المحطة لا تستجيب الآن. جرّب محطة أخرى.",
    "Stopped. Good night.": "توقف التشغيل. تصبح على خير.",
    "<b>Why there's no song title.</b> Radio streams slip the song name into the audio data every few seconds (called ICY metadata), but browsers don't let a web page read it. So this shows what the station says about itself: its genre tags, language and bitrate. 128 kbps sounds about as good as FM; 64 kbps is fine for talk.": "<b>لماذا لا يظهر اسم الأغنية.</b> تدسّ الإذاعات اسم الأغنية داخل بيانات الصوت كل بضع ثوانٍ (تُسمى بيانات ICY)، لكن المتصفحات لا تسمح لصفحات الويب بقراءتها. لذلك تعرض الصفحة ما تقوله المحطة عن نفسها: نوعها ولغتها ومعدل البث. جودة 128 kbps تقارب إذاعة FM، و64 kbps كافية للبرامج الحوارية.",
    "<b>What's approximate.</b> The list comes from radio-browser.info, a free directory that anyone can edit, so a few names, languages or logos may be off, and stations change their stream links without warning. Only stations with a secure (https) stream can play on this page. The sound wave appears only when a station allows it.": "<b>ما هو تقريبي.</b> القائمة مأخوذة من radio-browser.info، وهو دليل مجاني يمكن لأي شخص تعديله، لذا قد تكون بعض الأسماء أو اللغات أو الشعارات غير دقيقة، وقد تغيّر المحطات روابط البث دون إشعار. لا تعمل في هذه الصفحة إلا المحطات ذات البث الآمن (https)، ولا تظهر الموجة الصوتية إلا إذا سمحت المحطة بذلك."
  }, [
    [/^(\d+) stations?(\. Tap ☆ on a station to add it here\.)?( · (\d+) more only stream over plain http, which browsers block on secure pages)?$/, function (m, n, fav, h, k) {
      return 'عدد المحطات: ' + n + (fav ? '. اضغط ☆ بجانب أي محطة لإضافتها هنا.' : '') + (h ? ' · وهناك ' + k + ' غيرها تبث عبر http غير الآمن، وتحجبها المتصفحات في الصفحات الآمنة' : '');
    }],
    [/^(\d+):(\d\d)( left| · fading out)$/, function (m, a, b, r) { return a + ':' + b + (r === ' left' ? ' متبقية' : ' · يخفت الصوت'); }],
    [/^(?![^]*[\u2066\u0600-\u06FF])(?=.*\b(kbps|arabic|english|hindi|malayalam|tamil|urdu|tagalog|persian|russian)\b)(.+)$/i, function (m) { return m.split(' · ').map(part).join(' · '); }]
    ,[/^[A-Z0-9]{1,2}$/, function (m) { return m; }]
  ]);
})();
