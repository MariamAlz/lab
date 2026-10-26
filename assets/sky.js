/* Shared sky maths and a bright-star catalogue for lab experiments.
   Positions use Paul Schlyter's low-precision method (good to a few arcminutes for the Sun and Moon,
   a fraction of a degree for planets). Stars are J2000 and ignore precession, which is fine by eye. */
(function (root) {
  'use strict';
  var R = Math.PI / 180, D = 180 / Math.PI;
  function rev(x) { return x - Math.floor(x / 360) * 360; }
  function sind(x) { return Math.sin(x * R); } function cosd(x) { return Math.cos(x * R); }
  function dayNum(ms) { return ms / 86400000 + 2440587.5 - 2451543.5; }
  function kepler(M, e) { var E = M + D * e * sind(M) * (1 + e * cosd(M)); for (var k = 0; k < 6; k++) E = E - (E - D * e * sind(E) - M) / (1 - e * cosd(E)); return E; }
  function sun(d) {
    var w = 282.9404 + 4.70935e-5 * d, e = 0.016709 - 1.151e-9 * d, M = rev(356.0470 + 0.9856002585 * d), E = kepler(M, e);
    var xv = cosd(E) - e, yv = Math.sqrt(1 - e * e) * sind(E), lon = rev(Math.atan2(yv, xv) * D + w), r = Math.hypot(xv, yv);
    return { lon: lon, lat: 0, r: r, M: M, L: rev(M + w), x: r * cosd(lon), y: r * sind(lon) };
  }
  function moon(d, s) {
    var N = rev(125.1228 - 0.0529538083 * d), i = 5.1454, w = rev(318.0634 + 0.1643573223 * d), a = 60.2666, e = 0.0549, M = rev(115.3654 + 13.0649929509 * d), E = kepler(M, e);
    var xv = a * (cosd(E) - e), yv = a * Math.sqrt(1 - e * e) * sind(E), v = Math.atan2(yv, xv) * D, r = Math.hypot(xv, yv);
    var xh = r * (cosd(N) * cosd(v + w) - sind(N) * sind(v + w) * cosd(i)), yh = r * (sind(N) * cosd(v + w) + cosd(N) * sind(v + w) * cosd(i)), zh = r * sind(v + w) * sind(i);
    var lon = Math.atan2(yh, xh) * D, lat = Math.atan2(zh, Math.hypot(xh, yh)) * D, Ms = s.M, Mm = M, Lm = rev(N + w + M), Dd = Lm - s.L, F = Lm - N;
    lon += -1.274 * sind(Mm - 2 * Dd) + 0.658 * sind(2 * Dd) - 0.186 * sind(Ms) - 0.059 * sind(2 * Mm - 2 * Dd) - 0.057 * sind(Mm - 2 * Dd + Ms) + 0.053 * sind(Mm + 2 * Dd) +
      0.046 * sind(2 * Dd - Ms) + 0.041 * sind(Mm - Ms) - 0.035 * sind(Dd) - 0.031 * sind(Mm + Ms) - 0.015 * sind(2 * F - 2 * Dd) + 0.011 * sind(Mm - 4 * Dd);
    lat += -0.173 * sind(F - 2 * Dd) - 0.055 * sind(Mm - F - 2 * Dd) - 0.046 * sind(Mm + F - 2 * Dd) + 0.033 * sind(F + 2 * Dd) + 0.017 * sind(2 * Mm + F);
    r += -0.58 * cosd(Mm - 2 * Dd) - 0.46 * cosd(2 * Dd);
    return { lon: rev(lon), lat: lat, r: r, elong: Math.acos(cosd(lat) * cosd(lon - s.lon)) * D, dl: rev(lon - s.lon) };
  }
  var PL = {
    venus: function (d) { return [76.6799 + 2.46590e-5 * d, 3.3946 + 2.75e-8 * d, 54.8910 + 1.38374e-5 * d, 0.723330, 0.006773 - 1.302e-9 * d, 48.0052 + 1.6021302244 * d]; },
    mars: function (d) { return [49.5574 + 2.11081e-5 * d, 1.8497 - 1.78e-8 * d, 286.5016 + 2.92961e-5 * d, 1.523688, 0.093405 + 2.516e-9 * d, 18.6021 + 0.5240207766 * d]; },
    jupiter: function (d) { return [100.4542 + 2.76854e-5 * d, 1.3030 - 1.557e-7 * d, 273.8777 + 1.64505e-5 * d, 5.20256, 0.048498 + 4.469e-9 * d, 19.8950 + 0.0830853001 * d]; },
    saturn: function (d) { return [113.6634 + 2.38980e-5 * d, 2.4886 - 1.081e-7 * d, 339.3939 + 2.97661e-5 * d, 9.55475, 0.055546 - 9.499e-9 * d, 316.9670 + 0.0334442282 * d]; }
  };
  function planet(name, d, s) {
    var el = PL[name](d), N = rev(el[0]), i = el[1], w = rev(el[2]), a = el[3], e = el[4], M = rev(el[5]), E = kepler(M, e);
    var xv = a * (cosd(E) - e), yv = a * Math.sqrt(1 - e * e) * sind(E), v = Math.atan2(yv, xv) * D, r = Math.hypot(xv, yv);
    var xh = r * (cosd(N) * cosd(v + w) - sind(N) * sind(v + w) * cosd(i)), yh = r * (sind(N) * cosd(v + w) + cosd(N) * sind(v + w) * cosd(i)), zh = r * sind(v + w) * sind(i);
    var xg = xh + s.x, yg = yh + s.y, zg = zh;
    return { lon: rev(Math.atan2(yg, xg) * D), lat: Math.atan2(zg, Math.hypot(xg, yg)) * D, dist: Math.sqrt(xg * xg + yg * yg + zg * zg) };
  }
  function eclToEq(b, d) {
    var ecl = 23.4393 - 3.563e-7 * d, x = cosd(b.lat) * cosd(b.lon), y = cosd(b.lat) * sind(b.lon), z = sind(b.lat);
    var ye = y * cosd(ecl) - z * sind(ecl), ze = y * sind(ecl) + z * cosd(ecl);
    return { ra: rev(Math.atan2(ye, x) * D), dec: Math.atan2(ze, Math.hypot(x, ye)) * D };
  }
  function lst(ms, lon) { var d = dayNum(ms), s = sun(d), ut = ((ms % 86400000) + 86400000) % 86400000 / 3600000; return rev(s.L + 180 + ut * 15 + lon); }
  function toHoriz(ra, dec, lstDeg, lat) {
    var H = rev(lstDeg - ra + 180) - 180;
    var alt = Math.asin(sind(lat) * sind(dec) + cosd(lat) * cosd(dec) * cosd(H)) * D;
    var az = rev(Math.atan2(sind(H), cosd(H) * sind(lat) - Math.tan(dec * R) * cosd(lat)) * D + 180);
    return { alt: alt, az: az };
  }
  // Bright stars: [id, English name, Arabic name or '', meaning, RA hours, Dec degrees, magnitude]
  function hm(h, m) { return h + m / 60; } function dm(d, m) { return d < 0 || Object.is(d, -0) ? d - m / 60 : d + m / 60; }
  var STARS = [
    ['sirius', 'Sirius', 'الشعرى اليمانية', 'the Yemeni Shi‘ra', hm(6, 45.1), dm(-16, 43), -1.46],
    ['canopus', 'Canopus', 'سهيل', 'Suhail. When it rises before dawn in late August, the worst of the Gulf summer is over', hm(6, 24.0), dm(-52, 42), -0.74],
    ['rigilk', 'Rigil Kentaurus', 'رجل قنطورس', 'the centaur’s foot', hm(14, 39.6), dm(-60, 50), -0.27],
    ['arcturus', 'Arcturus', 'السماك الرامح', 'the Simak who carries a lance', hm(14, 15.7), dm(19, 11), -0.05],
    ['vega', 'Vega', 'النسر الواقع', 'the swooping eagle', hm(18, 36.9), dm(38, 47), 0.03],
    ['capella', 'Capella', 'العيوق', 'al-‘Ayyuq', hm(5, 16.7), dm(46, 0), 0.08],
    ['rigel', 'Rigel', 'رجل الجبار', 'the giant’s foot', hm(5, 14.5), dm(-8, 12), 0.13],
    ['procyon', 'Procyon', 'الشعرى الشامية', 'the Syrian Shi‘ra', hm(7, 39.3), dm(5, 13), 0.34],
    ['achernar', 'Achernar', 'آخر النهر', 'the end of the river', hm(1, 37.7), dm(-57, 14), 0.46],
    ['betelgeuse', 'Betelgeuse', 'يد الجوزاء', 'the hand of al-Jawza’', hm(5, 55.2), dm(7, 24), 0.5],
    ['hadar', 'Hadar', 'حضار', 'Hadar', hm(14, 3.8), dm(-60, 22), 0.61],
    ['altair', 'Altair', 'النسر الطائر', 'the flying eagle', hm(19, 50.8), dm(8, 52), 0.76],
    ['acrux', 'Acrux', '', '', hm(12, 26.6), dm(-63, 6), 0.77],
    ['aldebaran', 'Aldebaran', 'الدبران', 'the follower, because it follows the Pleiades across the sky', hm(4, 35.9), dm(16, 31), 0.86],
    ['antares', 'Antares', 'قلب العقرب', 'the heart of the scorpion', hm(16, 29.4), dm(-26, 26), 0.96],
    ['spica', 'Spica', 'السماك الأعزل', 'the unarmed Simak', hm(13, 25.2), dm(-11, 10), 0.97],
    ['pollux', 'Pollux', '', '', hm(7, 45.3), dm(28, 2), 1.14],
    ['fomalhaut', 'Fomalhaut', 'فم الحوت', 'the mouth of the fish', hm(22, 57.6), dm(-29, 37), 1.16],
    ['deneb', 'Deneb', 'ذنب الدجاجة', 'the hen’s tail', hm(20, 41.4), dm(45, 17), 1.25],
    ['mimosa', 'Mimosa', '', '', hm(12, 47.7), dm(-59, 41), 1.25],
    ['regulus', 'Regulus', 'قلب الأسد', 'the heart of the lion', hm(10, 8.4), dm(11, 58), 1.35],
    ['castor', 'Castor', '', '', hm(7, 34.6), dm(31, 53), 1.58],
    ['gacrux', 'Gacrux', '', '', hm(12, 31.2), dm(-57, 7), 1.6],
    ['shaula', 'Shaula', 'الشولة', 'the raised sting', hm(17, 33.6), dm(-37, 6), 1.62],
    ['bellatrix', 'Bellatrix', '', '', hm(5, 25.1), dm(6, 21), 1.64],
    ['elnath', 'Elnath', 'النطح', 'the butting horn', hm(5, 26.3), dm(28, 36), 1.65],
    ['alnilam', 'Alnilam', 'النظام', 'the string of pearls', hm(5, 36.2), dm(-1, 12), 1.69],
    ['alnitak', 'Alnitak', 'النطاق', 'the belt', hm(5, 40.8), dm(-1, 57), 1.74],
    ['alioth', 'Alioth', '', '', hm(12, 54.0), dm(55, 58), 1.76],
    ['dubhe', 'Dubhe', 'الدب', 'the bear', hm(11, 3.7), dm(61, 45), 1.79],
    ['mirfak', 'Mirfak', 'المرفق', 'the elbow', hm(3, 24.3), dm(49, 52), 1.8],
    ['kaus', 'Kaus Australis', '', '', hm(18, 24.2), dm(-34, 23), 1.85],
    ['alkaid', 'Alkaid', 'القائد', 'the leader (of the mourners, بنات نعش)', hm(13, 47.5), dm(49, 19), 1.86],
    ['sargas', 'Sargas', '', '', hm(17, 37.3), dm(-43, 0), 1.86],
    ['menkalinan', 'Menkalinan', 'منكب ذي العنان', 'the shoulder of the rein-holder', hm(5, 59.5), dm(44, 57), 1.9],
    ['alhena', 'Alhena', 'الهنعة', 'al-Han‘a', hm(6, 37.7), dm(16, 24), 1.93],
    ['polaris', 'Polaris', 'الجدي', 'al-Jady, the star Arab navigators measured to find their latitude', hm(2, 31.8), dm(89, 16), 1.98],
    ['alphard', 'Alphard', 'الفرد', 'the solitary one', hm(9, 27.6), dm(-8, 40), 1.98],
    ['hamal', 'Hamal', 'الحمل', 'the lamb', hm(2, 7.2), dm(23, 28), 2.0],
    ['diphda', 'Diphda', 'الضفدع', 'the frog', hm(0, 43.6), dm(-17, 59), 2.04],
    ['nunki', 'Nunki', '', '', hm(18, 55.3), dm(-26, 18), 2.05],
    ['saiph', 'Saiph', 'السيف', 'the sword', hm(5, 47.8), dm(-9, 40), 2.06],
    ['alpheratz', 'Alpheratz', 'سرة الفرس', 'the horse’s navel', hm(0, 8.4), dm(29, 5), 2.06],
    ['rasalhague', 'Rasalhague', 'رأس الحواء', 'the head of the snake charmer', hm(17, 34.9), dm(12, 34), 2.07],
    ['kochab', 'Kochab', '', '', hm(14, 50.7), dm(74, 9), 2.08],
    ['algieba', 'Algieba', 'الجبهة', 'the forehead', hm(10, 20.0), dm(19, 50), 2.08],
    ['algol', 'Algol', 'رأس الغول', 'the demon’s head. It dims every 2.9 days', hm(3, 8.2), dm(40, 57), 2.1],
    ['denebola', 'Denebola', 'ذنب الأسد', 'the lion’s tail', hm(11, 49.1), dm(14, 34), 2.14],
    ['gcas', 'γ Cassiopeiae', '', '', hm(0, 56.7), dm(60, 43), 2.15],
    ['sadr', 'Sadr', 'الصدر', 'the breast (of the hen)', hm(20, 22.2), dm(40, 15), 2.23],
    ['mintaka', 'Mintaka', 'المنطقة', 'the belt', hm(5, 32.0), dm(0, 18) * -1, 2.23],
    ['mizar', 'Mizar', 'المئزر', 'the wrapper. Its faint neighbour السها (Alcor) was an old eyesight test', hm(13, 23.9), dm(54, 56), 2.23],
    ['schedar', 'Schedar', 'الصدر', 'the breast', hm(0, 40.5), dm(56, 32), 2.24],
    ['caph', 'Caph', 'الكف', 'the palm', hm(0, 9.2), dm(59, 9), 2.27],
    ['dschubba', 'Dschubba', 'الجبهة', 'the forehead (of the scorpion)', hm(16, 0.3), dm(-22, 37), 2.29],
    ['epssco', 'ε Scorpii', '', '', hm(16, 50.2), dm(-34, 18), 2.3],
    ['merak', 'Merak', 'المراق', 'the loins', hm(11, 1.8), dm(56, 23), 2.37],
    ['enif', 'Enif', 'الأنف', 'the nose', hm(21, 44.2), dm(9, 53), 2.39],
    ['kapsco', 'κ Scorpii', '', '', hm(17, 42.5), dm(-39, 2), 2.4],
    ['scheat', 'Scheat', 'الساق', 'the shin', hm(23, 3.8), dm(28, 5), 2.42],
    ['phecda', 'Phecda', 'الفخذ', 'the thigh', hm(11, 53.8), dm(53, 42), 2.44],
    ['gienah', 'Gienah', 'الجناح', 'the wing', hm(20, 46.2), dm(33, 58), 2.48],
    ['markab', 'Markab', 'مركب', 'the saddle', hm(23, 4.8), dm(15, 12), 2.49],
    ['menkar', 'Menkar', 'المنخر', 'the nostril', hm(3, 2.3), dm(4, 5), 2.54],
    ['acrab', 'Acrab', 'العقرب', 'the scorpion', hm(16, 5.4), dm(-19, 48), 2.56],
    ['zubens', 'Zubeneschamali', 'الزبانى الشمالي', 'the northern claw', hm(15, 17.0), dm(-9, 23), 2.61],
    ['unuk', 'Unukalhai', 'عنق الحية', 'the serpent’s neck', hm(15, 44.3), dm(6, 26), 2.63],
    ['ruchbah', 'Ruchbah', 'الركبة', 'the knee', hm(1, 25.8), dm(60, 14), 2.68],
    ['lesath', 'Lesath', 'اللسعة', 'the sting', hm(17, 30.8), dm(-37, 18), 2.7],
    ['zubeng', 'Zubenelgenubi', 'الزبانى الجنوبي', 'the southern claw', hm(14, 50.9), dm(-16, 3), 2.75],
    ['tausco', 'τ Scorpii', '', '', hm(16, 35.9), dm(-28, 13), 2.8],
    ['dcru', 'δ Crucis', '', '', hm(12, 15.1), dm(-58, 45), 2.8],
    ['algenib', 'Algenib', 'الجنب', 'the side', hm(0, 13.2), dm(15, 11), 2.83],
    ['alcyone', 'Pleiades', 'الثريا', 'al-Thurayya, the cluster whose dawn rising in June marked the start of the hottest season', hm(3, 47.5), dm(24, 6), 2.87],
    ['dcyg', 'δ Cygni', '', '', hm(19, 45.0), dm(45, 8), 2.87],
    ['sigsco', 'σ Scorpii', '', '', hm(16, 21.2), dm(-25, 36), 2.9],
    ['pherkad', 'Pherkad', 'الفرقد', 'the calf. With Kochab they are الفرقدان, the two calves that circle the pole', hm(15, 20.7), dm(71, 50), 3.0],
    ['mu1sco', 'μ Scorpii', '', '', hm(16, 51.9), dm(-38, 3), 3.0],
    ['epsleo', 'ε Leonis', '', '', hm(9, 45.9), dm(23, 46), 3.0],
    ['albireo', 'Albireo', '', '', hm(19, 30.7), dm(27, 58), 3.1],
    ['etasco', 'η Scorpii', '', '', hm(17, 12.2), dm(-43, 14), 3.3],
    ['megrez', 'Megrez', 'المغرز', 'where the tail joins', hm(12, 15.4), dm(57, 2), 3.31],
    ['chertan', 'Chertan', '', '', hm(11, 14.2), dm(15, 26), 3.3],
    ['segin', 'Segin', '', '', hm(1, 54.4), dm(63, 40), 3.4],
    ['meissa', 'Meissa', '', '', hm(5, 35.1), dm(9, 56), 3.4],
    ['zetleo', 'ζ Leonis', '', '', hm(10, 16.7), dm(23, 25), 3.4],
    ['etaleo', 'η Leonis', '', '', hm(10, 7.3), dm(16, 46), 3.5],
    ['zosma', 'Zosma', '', '', hm(11, 14.1), dm(20, 31), 2.6],
    ['zet2sco', 'ζ Scorpii', '', '', hm(16, 54.6), dm(-42, 22), 3.6],
    ['muleo', 'μ Leonis', '', '', hm(9, 52.8), dm(26, 0), 3.9],
    ['alcor', 'Alcor', 'السها', 'the neglected one, the classic test of good eyesight', hm(13, 25.2), dm(54, 59), 4.0],
    ['epsumi', 'ε Ursae Minoris', '', '', hm(16, 46.0), dm(82, 2), 4.2],
    ['zetumi', 'ζ Ursae Minoris', '', '', hm(15, 44.1), dm(77, 48), 4.3],
    ['yildun', 'Yildun', '', '', hm(17, 32.2), dm(86, 35), 4.4],
    ['etaumi', 'η Ursae Minoris', '', '', hm(16, 17.5), dm(75, 45), 4.95]
  ].map(function (s) { return { id: s[0], en: s[1], ar: s[2], mean: s[3], ra: s[4] * 15, dec: s[5], mag: s[6] }; });
  var LINES = [
    ['Orion', 'الجبار', [['betelgeuse', 'meissa'], ['meissa', 'bellatrix'], ['betelgeuse', 'alnitak'], ['bellatrix', 'mintaka'], ['mintaka', 'alnilam'], ['alnilam', 'alnitak'], ['alnitak', 'saiph'], ['mintaka', 'rigel']]],
    ['Big Dipper', 'بنات نعش الكبرى', [['dubhe', 'merak'], ['merak', 'phecda'], ['phecda', 'megrez'], ['megrez', 'dubhe'], ['megrez', 'alioth'], ['alioth', 'mizar'], ['mizar', 'alkaid']]],
    ['Little Dipper', 'بنات نعش الصغرى', [['polaris', 'yildun'], ['yildun', 'epsumi'], ['epsumi', 'zetumi'], ['zetumi', 'kochab'], ['kochab', 'pherkad'], ['pherkad', 'etaumi'], ['etaumi', 'zetumi']]],
    ['Cassiopeia', 'ذات الكرسي', [['caph', 'schedar'], ['schedar', 'gcas'], ['gcas', 'ruchbah'], ['ruchbah', 'segin']]],
    ['Scorpius', 'العقرب', [['acrab', 'dschubba'], ['dschubba', 'sigsco'], ['sigsco', 'antares'], ['antares', 'tausco'], ['tausco', 'epssco'], ['epssco', 'mu1sco'], ['mu1sco', 'zet2sco'], ['zet2sco', 'etasco'], ['etasco', 'sargas'], ['sargas', 'kapsco'], ['kapsco', 'shaula'], ['shaula', 'lesath']]],
    ['Cygnus', 'الدجاجة', [['deneb', 'sadr'], ['sadr', 'albireo'], ['gienah', 'sadr'], ['sadr', 'dcyg']]],
    ['Leo', 'الأسد', [['regulus', 'etaleo'], ['etaleo', 'algieba'], ['algieba', 'zetleo'], ['zetleo', 'muleo'], ['muleo', 'epsleo'], ['regulus', 'chertan'], ['chertan', 'denebola'], ['denebola', 'zosma'], ['zosma', 'algieba'], ['zosma', 'chertan']]],
    ['Southern Cross', 'الصليب', [['acrux', 'gacrux'], ['mimosa', 'dcru']]],
    ['Pegasus square', 'مربع الفرس', [['alpheratz', 'scheat'], ['scheat', 'markab'], ['markab', 'algenib'], ['algenib', 'alpheratz']]]
  ];
  var byId = {}; STARS.forEach(function (s) { byId[s.id] = s; });
  function bodies(ms) { // Sun, Moon and planets with RA/Dec
    var d = dayNum(ms), s = sun(d), m = moon(d, s), out = [];
    var se = eclToEq(s, d); out.push({ id: 'sun', en: 'Sun', ar: 'الشمس', ra: se.ra, dec: se.dec, mag: -26 });
    var me = eclToEq(m, d); out.push({ id: 'moon', en: 'Moon', ar: 'القمر', ra: me.ra, dec: me.dec, mag: -10, lit: (1 - cosd(m.elong)) / 2, dl: m.dl, r: m.r });
    [['venus', 'Venus', 'الزهرة', -4], ['mars', 'Mars', 'المريخ', 0.5], ['jupiter', 'Jupiter', 'المشتري', -2.2], ['saturn', 'Saturn', 'زحل', 0.7]].forEach(function (p) {
      var e = eclToEq(planet(p[0], d, s), d); out.push({ id: p[0], en: p[1], ar: p[2], ra: e.ra, dec: e.dec, mag: p[3], planet: true });
    });
    return out;
  }
  root.Sky = { rev: rev, dayNum: dayNum, sun: sun, moon: moon, planet: planet, eclToEq: eclToEq, lst: lst, toHoriz: toHoriz, bodies: bodies, STARS: STARS, LINES: LINES, byId: byId };
})(window);
