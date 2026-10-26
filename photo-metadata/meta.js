/* PhotoMeta: a small, read-only image metadata parser (EXIF, GPS, XMP, IPTC, MakerNote basics).
   Handles JPEG, PNG, WebP and HEIC/AVIF. Runs entirely in the browser. Used by /photo-metadata/ and /doc-leaks/. */
(function (root) {
  'use strict';
  var TAGS = {
    0x010E: 'ImageDescription', 0x010F: 'Make', 0x0110: 'Model', 0x0112: 'Orientation', 0x011A: 'XResolution', 0x0131: 'Software', 0x0132: 'DateTime',
    0x013B: 'Artist', 0x013C: 'HostComputer', 0x8298: 'Copyright', 0x0100: 'ImageWidth', 0x0101: 'ImageHeight', 0xC62F: 'CameraSerialNumber', 0x9C9B: 'XPTitle', 0x9C9C: 'XPComment', 0x9C9D: 'XPAuthor', 0x9C9E: 'XPKeywords',
    0x829A: 'ExposureTime', 0x829D: 'FNumber', 0x8827: 'ISO', 0x9003: 'DateTimeOriginal', 0x9004: 'DateTimeDigitized', 0x9010: 'OffsetTime', 0x9011: 'OffsetTimeOriginal',
    0x920A: 'FocalLength', 0xA405: 'FocalLengthIn35mm', 0x927C: 'MakerNote', 0x9286: 'UserComment', 0x9291: 'SubSecTimeOriginal', 0xA002: 'PixelXDimension', 0xA003: 'PixelYDimension', 0xA420: 'ImageUniqueID',
    0xA430: 'CameraOwnerName', 0xA431: 'BodySerialNumber', 0xA432: 'LensSpecification', 0xA433: 'LensMake', 0xA434: 'LensModel', 0xA435: 'LensSerialNumber', 0x9209: 'Flash', 0xA403: 'WhiteBalance'
  };
  var GPSTAGS = { 0: 'GPSVersionID', 1: 'GPSLatitudeRef', 2: 'GPSLatitude', 3: 'GPSLongitudeRef', 4: 'GPSLongitude', 5: 'GPSAltitudeRef', 6: 'GPSAltitude', 7: 'GPSTimeStamp', 12: 'GPSSpeedRef', 13: 'GPSSpeed', 16: 'GPSImgDirectionRef', 17: 'GPSImgDirection', 27: 'GPSProcessingMethod', 29: 'GPSDateStamp', 31: 'GPSHPositioningError' };
  var IPTC = { 5: 'ObjectName', 25: 'Keywords', 55: 'DateCreated', 60: 'TimeCreated', 65: 'OriginatingProgram', 80: 'By-line', 85: 'By-lineTitle', 90: 'City', 92: 'Sublocation', 95: 'Province-State', 101: 'Country', 105: 'Headline', 110: 'Credit', 115: 'Source', 116: 'CopyrightNotice', 118: 'Contact', 120: 'Caption', 122: 'Writer' };
  var SIZES = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 6: 1, 7: 1, 8: 2, 9: 4, 10: 8, 11: 4, 12: 8 };
  function ascii(u8, s, n) { var o = ''; for (var i = 0; i < n && s + i < u8.length; i++) o += String.fromCharCode(u8[s + i]); return o; }
  function utf8(u8) { try { return new TextDecoder('utf-8').decode(u8); } catch (e) { var o = ''; for (var i = 0; i < u8.length; i++) o += String.fromCharCode(u8[i]); return o; } }
  function clean(s) { return String(s).replace(/\0+$/, '').replace(/\0/g, ' ').trim(); }

  // ---- TIFF / EXIF ----
  function readTiff(u8, base, out) {
    var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    if (base + 8 > u8.length) return;
    var le = u8[base] === 0x49; if (!le && u8[base] !== 0x4D) return;
    var u16 = function (o) { return dv.getUint16(base + o, le); }, u32 = function (o) { return dv.getUint32(base + o, le); };
    if (u16(2) !== 42) return;
    var seen = {};
    function val(type, count, off) {
      var sz = SIZES[type] || 1, total = sz * count, p = total <= 4 ? off : u32(off);
      if (base + p + total > u8.length) return null;
      if (type === 2) return clean(ascii(u8, base + p, count));
      if (type === 7 || type === 1 && count > 4) return u8.subarray(base + p, base + p + total);
      var arr = [];
      for (var i = 0; i < Math.min(count, 64); i++) {
        var q = base + p + i * sz;
        if (type === 1 || type === 6) arr.push(u8[q]);
        else if (type === 3) arr.push(dv.getUint16(q, le));
        else if (type === 8) arr.push(dv.getInt16(q, le));
        else if (type === 4) arr.push(dv.getUint32(q, le));
        else if (type === 9) arr.push(dv.getInt32(q, le));
        else if (type === 5) { var d = dv.getUint32(q + 4, le); arr.push(d ? dv.getUint32(q, le) / d : 0); }
        else if (type === 10) { var d2 = dv.getInt32(q + 4, le); arr.push(d2 ? dv.getInt32(q, le) / d2 : 0); }
        else arr.push(0);
      }
      return count === 1 ? arr[0] : arr;
    }
    function ifd(off, names, dest, kind) {
      if (!off || seen[off] || base + off + 2 > u8.length) return 0; seen[off] = 1;
      var n = u16(off); if (n > 500) return 0;
      for (var i = 0; i < n; i++) {
        var e = off + 2 + i * 12; if (base + e + 12 > u8.length) break;
        var tag = u16(e), type = u16(e + 2), count = u32(e + 4), v;
        if (!SIZES[type] || count > 1e7) continue;
        if (kind === 'main' && tag === 0x8769) { ifd(u32(e + 8), TAGS, dest, 'exif'); continue; }
        if (kind === 'main' && tag === 0x8825) { ifd(u32(e + 8), GPSTAGS, out.gpsRaw, 'gps'); continue; }
        if (tag === 0x927C) { out.makerNoteRaw = { off: base + (count <= 4 ? e + 8 : u32(e + 8)), len: count, tiffBase: base, le: le }; dest.MakerNote = count + ' bytes'; continue; }
        if (tag === 0x02BC && kind === 'main') { var xb = val(type === 1 ? 7 : type, count, e + 8); if (xb && xb.length) out.xmp = out.xmp || utf8(xb); continue; }
        if (tag === 0x83BB && kind === 'main') { var ib = val(7, count * (SIZES[type] || 1), e + 8); if (ib) readIptc(ib, out); continue; }
        if (kind === 'ifd1') { if (tag === 0x0201) out._thOff = u32(e + 8); if (tag === 0x0202) out._thLen = u32(e + 8); continue; }
        v = val(type, count, e + 8);
        var name = names[tag]; if (!name) continue;
        if (/^XP/.test(name) && v && v.length) { var s = ''; for (var k = 0; k + 1 < v.length; k += 2) s += String.fromCharCode(v[k] | v[k + 1] << 8); v = clean(s); }
        else if (name === 'UserComment' && v && v.length > 8) { v = clean(ascii(v, 8, v.length - 8)); }
        else if (name === 'GPSProcessingMethod' && v && v.length > 8) { v = clean(ascii(v, 8, v.length - 8)); }
        else if (v && v.subarray) v = clean(ascii(v, 0, Math.min(v.length, 200)));
        if (v === '' || v == null) continue;
        dest[name] = v;
      }
      var next = base + off + 2 + n * 12 + 4 <= u8.length ? u32(off + 2 + n * 12) : 0;
      return next;
    }
    var next = ifd(u32(4), TAGS, out.exif, 'main');
    if (next) { ifd(next, TAGS, {}, 'ifd1'); if (out._thOff && out._thLen && base + out._thOff + out._thLen <= u8.length) out.thumb = u8.slice(base + out._thOff, base + out._thOff + out._thLen); }
    delete out._thOff; delete out._thLen;
  }

  // ---- MakerNote basics ----
  function makerNote(u8, out) {
    var m = out.makerNoteRaw; if (!m) return;
    var mk = (out.exif.Make || '').toLowerCase(), info = { vendor: out.exif.Make || 'Unknown', bytes: m.len, fields: {} };
    var head = ascii(u8, m.off, 16);
    function ifdAt(tiffBase, off, le, wanted) {
      var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength), res = {};
      try {
        var n = dv.getUint16(off, le); if (n > 300) return res;
        for (var i = 0; i < n; i++) {
          var e = off + 2 + i * 12, tag = dv.getUint16(e, le), type = dv.getUint16(e + 2, le), count = dv.getUint32(e + 4, le);
          if (!wanted[tag]) continue;
          var sz = (SIZES[type] || 1) * count, p = sz <= 4 ? e + 8 : tiffBase + dv.getUint32(e + 8, le);
          if (p + sz > u8.length) continue;
          res[wanted[tag]] = type === 2 || type === 7 ? clean(ascii(u8, p, Math.min(count, 64))) : type === 4 ? dv.getUint32(p, le) : type === 3 ? dv.getUint16(p, le) : '';
        }
      } catch (e) {}
      return res;
    }
    if (/^Apple iOS/.test(head)) { info.vendor = 'Apple'; info.note = 'Apple MakerNote: undocumented fields such as burst, focus and scene-analysis data. Not a serial number.'; }
    else if (/^Nikon\0/.test(head)) { var tb = m.off + 10, le = u8[tb] === 0x49; var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength); info.vendor = 'Nikon'; try { info.fields = ifdAt(tb, tb + dv.getUint32(tb + 4, le), le, { 0x001D: 'SerialNumber', 0x00A7: 'ShutterCount' }); } catch (e) {} }
    else if (/^FUJIFILM/.test(head)) { info.vendor = 'Fujifilm'; var dv2 = new DataView(u8.buffer, u8.byteOffset, u8.byteLength); info.fields = ifdAt(m.off, m.off + dv2.getUint32(m.off + 8, true), true, { 0x0010: 'InternalSerialNumber' }); }
    else if (mk.indexOf('canon') >= 0) { info.vendor = 'Canon'; info.fields = ifdAt(m.tiffBase, m.off, m.le, { 0x0006: 'ImageType', 0x0007: 'Firmware', 0x0009: 'OwnerName', 0x000C: 'SerialNumber', 0x0095: 'LensModel' }); }
    else if (/^(OLYMPUS|OM SYSTEM|Panasonic|SONY|PENTAX|SAMSUNG|LEICA|Google|HUAWEI)/i.test(head)) info.vendor = head.replace(/[^\w ]/g, ' ').trim().split(' ')[0];
    if (info.fields.SerialNumber === 0) delete info.fields.SerialNumber;
    out.makerNote = info; delete out.makerNoteRaw;
  }

  // ---- IPTC IIM ----
  function readIptc(u8, out) {
    for (var i = 0; i + 5 <= u8.length; i++) {
      if (u8[i] !== 0x1C) continue;
      var rec = u8[i + 1], ds = u8[i + 2], len = u8[i + 3] << 8 | u8[i + 4];
      if (len & 0x8000) break;
      if (rec === 2 && IPTC[ds]) { var v = clean(utf8(u8.subarray(i + 5, i + 5 + len))); if (v) out.iptc[IPTC[ds]] = out.iptc[IPTC[ds]] ? out.iptc[IPTC[ds]] + ', ' + v : v; }
      i += 4 + len;
    }
  }
  function readPhotoshop(u8, s, e, out) {
    var i = s;
    while (i + 12 <= e) {
      if (ascii(u8, i, 4) !== '8BIM') break;
      var id = u8[i + 4] << 8 | u8[i + 5], nl = u8[i + 6], p = i + 7 + nl; if ((nl + 1) % 2) p++;
      var size = (u8[p] << 24 | u8[p + 1] << 16 | u8[p + 2] << 8 | u8[p + 3]) >>> 0; p += 4;
      if (id === 0x0404) readIptc(u8.subarray(p, p + size), out);
      i = p + size + (size % 2);
    }
  }

  // ---- XMP ----
  function xget(x, name) {
    var m = x.match(new RegExp('\\b' + name + '="([^"]*)"')); if (m) return dec(m[1]);
    m = x.match(new RegExp('<' + name + '(?:\\s[^>]*)?>([\\s\\S]*?)</' + name + '>'));
    if (!m) return '';
    var lis = m[1].match(/<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/g);
    if (lis) return lis.map(function (l) { return dec(l.replace(/<[^>]+>/g, '').trim()); }).filter(Boolean).join(', ');
    return dec(m[1].replace(/<[^>]+>/g, '').trim());
  }
  function dec(s) { return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#x([0-9a-f]+);/gi, function (_, h) { return String.fromCharCode(parseInt(h, 16)); }).replace(/&amp;/g, '&'); }
  var XMPF = ['xmp:CreatorTool', 'xmp:CreateDate', 'xmp:ModifyDate', 'xmp:MetadataDate', 'dc:creator', 'dc:rights', 'dc:title', 'dc:description', 'photoshop:DateCreated', 'photoshop:City', 'photoshop:State', 'photoshop:Country', 'photoshop:AuthorsPosition', 'Iptc4xmpCore:Location', 'aux:SerialNumber', 'aux:Lens', 'aux:LensSerialNumber', 'aux:OwnerName', 'exifEX:BodySerialNumber', 'exifEX:LensModel', 'exif:GPSLatitude', 'exif:GPSLongitude', 'xmpMM:DocumentID', 'xmpMM:OriginalDocumentID', 'xmpMM:InstanceID', 'tiff:Make', 'tiff:Model', 'pdf:Producer', 'pdf:Author'];
  function parseXmp(x, out) {
    var f = {};
    XMPF.forEach(function (k) { var v = xget(x, k); if (v) f[k] = v; });
    var h = x.match(/<xmpMM:History>([\s\S]*?)<\/xmpMM:History>/), hist = [];
    if (h) (h[1].match(/<rdf:li\b[\s\S]*?(?:\/>|<\/rdf:li>)/g) || []).forEach(function (li) {
      var ev = { action: xget(li, 'stEvt:action'), when: xget(li, 'stEvt:when'), software: xget(li, 'stEvt:softwareAgent'), changed: xget(li, 'stEvt:changed') };
      if (ev.action || ev.when) hist.push(ev);
    });
    var anc = xget(x, 'photoshop:DocumentAncestors'); if (anc) f['photoshop:DocumentAncestors'] = anc.split(', ').length + ' earlier documents';
    if (/crs:|lr:hierarchicalSubject|<lr:/.test(x)) f['Lightroom/Camera Raw'] = 'edit settings present';
    if (/xmpMM:DerivedFrom/.test(x)) f['xmpMM:DerivedFrom'] = xget(x, 'stRef:documentID') || 'yes';
    out.xmpFields = f; out.history = hist;
    if (!out.gps && f['exif:GPSLatitude'] && f['exif:GPSLongitude']) {
      var cv = function (s) { var m = s.match(/^(\d+),(\d+(?:\.\d+)?)(?:,(\d+(?:\.\d+)?))?([NSEW])$/); if (!m) return NaN; var d = +m[1] + m[2] / 60 + (m[3] ? m[3] / 3600 : 0); return /[SW]/.test(m[4]) ? -d : d; };
      var la = cv(f['exif:GPSLatitude']), lo = cv(f['exif:GPSLongitude']); if (isFinite(la) && isFinite(lo)) out.gps = { lat: la, lon: lo, source: 'XMP' };
    }
  }

  // ---- containers ----
  function jpeg(u8, out) {
    var i = 2;
    while (i + 4 <= u8.length) {
      if (u8[i] !== 0xFF) { i++; continue; }
      var mk = u8[i + 1]; if (mk === 0xD8 || mk === 0x01 || mk >= 0xD0 && mk <= 0xD7 || mk === 0xFF) { i++; continue; }
      if (mk === 0xDA || mk === 0xD9) break;
      var len = u8[i + 2] << 8 | u8[i + 3], s = i + 4, e = i + 2 + len;
      if (mk === 0xE1 && ascii(u8, s, 6) === 'Exif\0\0') readTiff(u8, s + 6, out);
      else if (mk === 0xE1 && ascii(u8, s, 28) === 'http://ns.adobe.com/xap/1.0/') out.xmp = utf8(u8.subarray(s + 29, e));
      else if (mk === 0xE1 && ascii(u8, s, 34) === 'http://ns.adobe.com/xmp/extension/') out.xmpExt = true;
      else if (mk === 0xED && ascii(u8, s, 13) === 'Photoshop 3.0') readPhotoshop(u8, s + 14, e, out);
      else if (mk === 0xE0 && ascii(u8, s, 4) === 'JFIF') out.containers.push('JFIF');
      else if (mk === 0xE2 && ascii(u8, s, 11) === 'ICC_PROFILE') out.containers.push('ICC colour profile');
      else if (mk === 0xE2 && ascii(u8, s, 4) === 'MPF\0') out.containers.push('Multi-picture (extra embedded image)');
      else if (mk === 0xFE) out.comment = clean(ascii(u8, s, len - 2));
      else if (mk === 0xEB || mk === 0xE4) out.containers.push('APP' + (mk - 0xE0) + ' extension data');
      i = e;
    }
    // trailing data after the end of the image (e.g. Samsung or Google motion photos)
  }
  function png(u8, out) {
    var i = 8, dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    while (i + 12 <= u8.length) {
      var len = dv.getUint32(i), type = ascii(u8, i + 4, 4), s = i + 8, d = u8.subarray(s, s + len);
      if (type === 'eXIf') readTiff(u8, s, out);
      else if (type === 'iTXt' || type === 'tEXt') {
        var z = d.indexOf(0), key = ascii(d, 0, z), val;
        if (type === 'tEXt') val = ascii(d, z + 1, d.length - z - 1);
        else { var comp = d[z + 1], p = z + 3; p = d.indexOf(0, p) + 1; p = d.indexOf(0, p) + 1; val = comp ? '(compressed)' : utf8(d.subarray(p)); }
        if (key === 'XML:com.adobe.xmp') out.xmp = val;
        else if (/^Raw profile type (exif|APP1)$/.test(key)) { var hex = val.replace(/^\s*\w+\s+\d+\s*/, '').replace(/\s+/g, ''), b = new Uint8Array(hex.length >> 1); for (var k = 0; k < b.length; k++) b[k] = parseInt(hex.substr(k * 2, 2), 16); var o = ascii(b, 0, 6) === 'Exif\0\0' ? 6 : 0; readTiff(b, o, out); }
        else out.text[key] = clean(val).slice(0, 300);
      } else if (type === 'zTXt') out.text[ascii(d, 0, d.indexOf(0))] = '(compressed text)';
      else if (type === 'tIME') out.text['Last modified (tIME)'] = dv.getUint16(s) + '-' + pad(d[2]) + '-' + pad(d[3]) + ' ' + pad(d[4]) + ':' + pad(d[5]);
      else if (type === 'iCCP') out.containers.push('ICC colour profile');
      else if (type === 'IEND') break;
      i = s + len + 4;
    }
  }
  function webp(u8, out) {
    var i = 12, dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    while (i + 8 <= u8.length) {
      var type = ascii(u8, i, 4), len = dv.getUint32(i + 4, true), s = i + 8;
      if (type === 'EXIF') readTiff(u8, ascii(u8, s, 6) === 'Exif\0\0' ? s + 6 : s, out);
      else if (type === 'XMP ') out.xmp = utf8(u8.subarray(s, s + len));
      else if (type === 'ICCP') out.containers.push('ICC colour profile');
      i = s + len + (len & 1);
    }
  }
  function heic(u8, out) {
    var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    function boxes(s, e, cb) { var i = s; while (i + 8 <= e) { var sz = dv.getUint32(i), t = ascii(u8, i + 4, 4), h = 8; if (sz === 1) { sz = dv.getUint32(i + 12); h = 16; } else if (sz === 0) sz = e - i; if (sz < 8) break; cb(t, i + h, i + sz); i += sz; } }
    var meta = null; boxes(0, u8.length, function (t, s, e) { if (t === 'meta') meta = [s + 4, e]; });
    if (!meta) return;
    var items = {}, locs = {};
    boxes(meta[0], meta[1], function (t, s, e) {
      if (t === 'iinf') {
        var v = u8[s], n = v === 0 ? dv.getUint16(s + 4) : dv.getUint32(s + 4);
        boxes(s + (v === 0 ? 6 : 8), e, function (t2, s2) {
          if (t2 !== 'infe') return; var iv = u8[s2], p = s2 + 4;
          if (iv < 2) return; var id = iv === 2 ? dv.getUint16(p) : dv.getUint32(p); p += iv === 2 ? 4 : 6;
          var ty = ascii(u8, p, 4); p += 4; var name = ''; while (u8[p]) name += String.fromCharCode(u8[p++]); p++;
          var ct = ''; if (ty === 'mime') while (u8[p]) ct += String.fromCharCode(u8[p++]);
          items[id] = { type: ty, ct: ct };
        }); void n;
      } else if (t === 'iloc') {
        var v2 = u8[s], p = s + 4, a = u8[p] >> 4, b = u8[p] & 15, c = u8[p + 1] >> 4, ix = v2 > 0 ? u8[p + 1] & 15 : 0; p += 2;
        var rd = function (n) { var r = n === 4 ? dv.getUint32(p) : n === 8 ? dv.getUint32(p + 4) : n === 2 ? dv.getUint16(p) : 0; p += n; return r; };
        var cnt = v2 < 2 ? dv.getUint16(p) : dv.getUint32(p); p += v2 < 2 ? 2 : 4;
        for (var k = 0; k < cnt && p < e; k++) {
          var id = v2 < 2 ? dv.getUint16(p) : dv.getUint32(p); p += v2 < 2 ? 2 : 4;
          if (v2 > 0) p += 2; p += 2; var bo = rd(c), ec = dv.getUint16(p), ex = []; p += 2;
          for (var j = 0; j < ec; j++) { if (ix) rd(ix); ex.push([bo + rd(a), rd(b)]); }
          locs[id] = ex;
        }
      }
    });
    Object.keys(items).forEach(function (id) {
      var it = items[id], l = locs[id]; if (!l || !l.length) return;
      var off = l[0][0], len = l[0][1]; if (off + len > u8.length) return;
      if (it.type === 'Exif') { var skip = dv.getUint32(off); readTiff(u8, off + 4 + skip, out); }
      else if (it.type === 'mime' && /rdf\+xml|xmp/.test(it.ct)) out.xmp = utf8(u8.subarray(off, off + len));
    });
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function sniff(u8) {
    if (u8[0] === 0xFF && u8[1] === 0xD8) return 'JPEG';
    if (u8[0] === 0x89 && ascii(u8, 1, 3) === 'PNG') return 'PNG';
    if (ascii(u8, 0, 4) === 'RIFF' && ascii(u8, 8, 4) === 'WEBP') return 'WebP';
    if (ascii(u8, 4, 4) === 'ftyp') { var b = ascii(u8, 8, 4); return /avif|avis/.test(b) ? 'AVIF' : 'HEIC'; }
    if (ascii(u8, 0, 4) === 'II*\0' || ascii(u8, 0, 4) === 'MM\0*') return 'TIFF';
    return '';
  }
  function gpsFrom(g) {
    if (!g || g.GPSLatitude == null || g.GPSLongitude == null) return null;
    var d = function (v) { return Array.isArray(v) ? v[0] + (v[1] || 0) / 60 + (v[2] || 0) / 3600 : +v; };
    var lat = d(g.GPSLatitude), lon = d(g.GPSLongitude);
    if (g.GPSLatitudeRef === 'S') lat = -lat; if (g.GPSLongitudeRef === 'W') lon = -lon;
    if (!isFinite(lat) || !isFinite(lon) || lat === 0 && lon === 0) return null;
    var r = { lat: lat, lon: lon, source: 'EXIF' };
    if (g.GPSAltitude != null) r.alt = (g.GPSAltitudeRef === 1 || g.GPSAltitudeRef === '1' ? -1 : 1) * g.GPSAltitude;
    if (g.GPSImgDirection != null) r.dir = g.GPSImgDirection;
    if (g.GPSHPositioningError != null) r.err = g.GPSHPositioningError;
    if (g.GPSDateStamp) { var t = g.GPSTimeStamp || [0, 0, 0]; r.time = g.GPSDateStamp.replace(/:/g, '-') + ' ' + pad(t[0] | 0) + ':' + pad(t[1] | 0) + ':' + pad(Math.round(t[2] || 0)) + ' UTC'; }
    return r;
  }
  function parse(buf) {
    var u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    var out = { format: sniff(u8), exif: {}, gpsRaw: {}, iptc: {}, text: {}, containers: [], xmp: null, xmpFields: {}, history: [], thumb: null, gps: null, makerNote: null };
    try {
      if (out.format === 'JPEG') jpeg(u8, out); else if (out.format === 'PNG') png(u8, out); else if (out.format === 'WebP') webp(u8, out);
      else if (out.format === 'HEIC' || out.format === 'AVIF') heic(u8, out); else if (out.format === 'TIFF') readTiff(u8, 0, out);
    } catch (e) { out.error = String(e && e.message || e); }
    try { makerNote(u8, out); } catch (e) {}
    out.gps = gpsFrom(out.gpsRaw);
    if (out.xmp) try { parseXmp(out.xmp, out); } catch (e) {}
    if (out.thumb && !(out.thumb[0] === 0xFF && out.thumb[1] === 0xD8)) out.thumb = null;
    return out;
  }
  // Flatten everything into a {label: value} list (for diffs and tables)
  function flat(m) {
    var o = {};
    Object.keys(m.exif).forEach(function (k) { o['EXIF ' + k] = fmt(m.exif[k]); });
    Object.keys(m.gpsRaw).forEach(function (k) { o['GPS ' + k.replace(/^GPS/, '')] = fmt(m.gpsRaw[k]); });
    Object.keys(m.iptc).forEach(function (k) { o['IPTC ' + k] = m.iptc[k]; });
    Object.keys(m.xmpFields).forEach(function (k) { o['XMP ' + k] = m.xmpFields[k]; });
    if (m.history.length) o['XMP edit history'] = m.history.length + ' steps';
    Object.keys(m.text).forEach(function (k) { o['PNG ' + k] = m.text[k]; });
    if (m.makerNote) { o['MakerNote'] = m.makerNote.vendor + ', ' + m.makerNote.bytes + ' bytes'; Object.keys(m.makerNote.fields).forEach(function (k) { o['MakerNote ' + k] = String(m.makerNote.fields[k]); }); }
    if (m.thumb) o['Embedded thumbnail'] = Math.round(m.thumb.length / 1024 * 10) / 10 + ' KB JPEG';
    if (m.comment) o['JPEG comment'] = m.comment;
    m.containers.forEach(function (c) { o['Block: ' + c] = 'present'; });
    return o;
  }
  function fmt(v) {
    if (Array.isArray(v)) return v.map(function (x) { return typeof x === 'number' ? +x.toFixed(6) : x; }).join(', ');
    if (typeof v === 'number') return String(+v.toFixed(6));
    return String(v);
  }
  root.PhotoMeta = { parse: parse, flat: flat, sniff: sniff };
})(typeof window !== 'undefined' ? window : this);
