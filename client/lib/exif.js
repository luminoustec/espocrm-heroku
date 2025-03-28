!function(){function l(e){return e instanceof l?e:this instanceof l?void(this.EXIFwrapped=e):new l(e)}var g=!1,f=("undefined"!=typeof exports?(exports="undefined"!=typeof module&&module.exports?module.exports=l:exports).EXIF=l:this.EXIF=l,l.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"}),m=l.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},p=l.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},h=l.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},S=l.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function o(e){return e.exifdata}function r(n,r){function t(e){var t=u(e),t=(n.exifdata=t||{},(e=>{var t=new DataView(e);if(g&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return g&&console.log("Not a valid JPEG"),!1;for(var n,r,o=2,i=e.byteLength;o<i;){if(((e,t)=>56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5))(t,o))return(r=t.getUint8(o+7))%2!=0&&(r+=1),n=o+8+(r=0===r?4:r),r=t.getUint16(o+6+r),((e,t,n)=>{for(var r,o,i=new DataView(e),a={},s=t;s<t+n;)28===i.getUint8(s)&&2===i.getUint8(s+1)&&(o=i.getUint8(s+2))in d&&(r=i.getInt16(s+3),o=d[o],r=F(i,s+5,r),a.hasOwnProperty(o)?a[o]instanceof Array?a[o].push(r):a[o]=[a[o],r]:a[o]=r),s++;return a})(e,n,r);o++}})(e));n.iptcdata=t||{},l.isXmpEnabled&&(t=(e=>{if("DOMParser"in self){var t=new DataView(e);if(g&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return g&&console.log("Not a valid JPEG"),!1;for(var n,r,o=2,i=e.byteLength,a=new DOMParser;o<i-4;){if("http"==F(t,o,4))return n=o-1,r=t.getUint16(o-2)-1,n=F(t,n,r),r=n.indexOf("xmpmeta>")+8,r=(n=n.substring(n.indexOf("<x:xmpmeta"),r)).indexOf("x:xmpmeta")+10,n=n.slice(0,r)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+n.slice(r),(e=>{try{var t={};if(0<e.children.length)for(var n=0;n<e.children.length;n++){var r,o=e.children.item(n),i=o.attributes;for(r in i){var a=i[r],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u,d=o.nodeName;void 0===t[d]?t[d]=c(o):(void 0===t[d].push&&(u=t[d],t[d]=[],t[d].push(u)),t[d].push(c(o)))}else t=e.textContent;return t}catch(e){console.log(e.message)}})(a.parseFromString(n,"text/xml"));o++}}})(e),n.xmpdata=t||{}),r&&r.call(n)}var e,o,i,a,s;n.src?/^data\:/i.test(n.src)?t(((e,t)=>{t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,t=new ArrayBuffer(r),o=new Uint8Array(t),i=0;i<r;i++)o[i]=n.charCodeAt(i);return t})(n.src)):/^blob\:/i.test(n.src)?((o=new FileReader).onload=function(e){t(e.target.result)},i=n.src,a=function(e){o.readAsArrayBuffer(e)},(s=new XMLHttpRequest).open("GET",i,!0),s.responseType="blob",s.onload=function(e){200!=this.status&&0!==this.status||a(this.response)},s.send()):((e=new XMLHttpRequest).onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";t(e.response),e=null},e.open("GET",n.src,!0),e.responseType="arraybuffer",e.send(null)):self.FileReader&&(n instanceof self.Blob||n instanceof self.File)&&((o=new FileReader).onload=function(e){g&&console.log("Got file of length "+e.target.result.byteLength),t(e.target.result)},o.readAsArrayBuffer(n))}function u(e){var t=new DataView(e);if(g&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return g&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength;n<r;){if(255!=t.getUint8(n))return g&&console.log("Not a valid marker at offset "+n+", found: "+t.getUint8(n)),!1;if(o=t.getUint8(n+1),g&&console.log(o),225==o){g&&console.log("Found 0xFFE1 marker");var o=t,i=n+4;if(t.getUint16(n+2),"Exif"!=F(o,i,4))return g&&console.log("Not valid EXIF data! "+F(o,i,4)),!1;var a,s,l,u,d,i=i+6;if(18761==o.getUint16(i))a=!1;else{if(19789!=o.getUint16(i))return g&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;a=!0}if(42!=o.getUint16(i+2,!a))return g&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var c=o.getUint32(i+4,!a);if(c<8)return g&&console.log("Not valid TIFF data! (First offset less than 8)",o.getUint32(i+4,!a)),!1;if((s=P(o,i,i+c,m,a)).ExifIFDPointer)for(l in u=P(o,i,i+s.ExifIFDPointer,f,a)){switch(l){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":u[l]=S[l][u[l]];break;case"ExifVersion":case"FlashpixVersion":u[l]=String.fromCharCode(u[l][0],u[l][1],u[l][2],u[l][3]);break;case"ComponentsConfiguration":u[l]=S.Components[u[l][0]]+S.Components[u[l][1]]+S.Components[u[l][2]]+S.Components[u[l][3]]}s[l]=u[l]}if(s.GPSInfoIFDPointer)for(l in d=P(o,i,i+s.GPSInfoIFDPointer,p,a))"GPSVersionID"===l&&(d[l]=d[l][0]+"."+d[l][1]+"."+d[l][2]+"."+d[l][3]),s[l]=d[l];return s.thumbnail=((e,t,n,r)=>{if(!(n=((e,t,n)=>{var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)})(e,t+n,r)))return{};if(n>e.byteLength)return{};var o,i,a=P(e,t,t+n,h,r);if(a.Compression)switch(a.Compression){case 6:a.JpegIFOffset&&a.JpegIFByteCount&&(o=t+a.JpegIFOffset,i=a.JpegIFByteCount,a.blob=new Blob([new Uint8Array(e.buffer,o,i)],{type:"image/jpeg"}));break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",a.Compression)}else 2==a.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return a})(o,i,c,a),s}n+=2+t.getUint16(n+2)}}var d={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function P(e,t,n,r,o){for(var i,a,s=e.getUint16(n,!o),l={},u=0;u<s;u++)!(a=r[e.getUint16(i=n+12*u+2,!o)])&&g&&console.log("Unknown tag: "+e.getUint16(i,!o)),l[a]=((e,t,n,r)=>{var o,i,a,s,l,u,d=e.getUint16(t+2,!r),c=e.getUint32(t+4,!r),g=e.getUint32(t+8,!r)+n;switch(d){case 1:case 7:if(1==c)return e.getUint8(t+8,!r);for(o=4<c?g:t+8,i=[],s=0;s<c;s++)i[s]=e.getUint8(o+s);return i;case 2:return F(e,o=4<c?g:t+8,c-1);case 3:if(1==c)return e.getUint16(t+8,!r);for(o=2<c?g:t+8,i=[],s=0;s<c;s++)i[s]=e.getUint16(o+2*s,!r);return i;case 4:if(1==c)return e.getUint32(t+8,!r);for(i=[],s=0;s<c;s++)i[s]=e.getUint32(g+4*s,!r);return i;case 5:if(1==c)return l=e.getUint32(g,!r),u=e.getUint32(g+4,!r),(a=new Number(l/u)).numerator=l,a.denominator=u,a;for(i=[],s=0;s<c;s++)l=e.getUint32(g+8*s,!r),u=e.getUint32(g+4+8*s,!r),i[s]=new Number(l/u),i[s].numerator=l,i[s].denominator=u;return i;case 9:if(1==c)return e.getInt32(t+8,!r);for(i=[],s=0;s<c;s++)i[s]=e.getInt32(g+4*s,!r);return i;case 10:if(1==c)return e.getInt32(g,!r)/e.getInt32(g+4,!r);for(i=[],s=0;s<c;s++)i[s]=e.getInt32(g+8*s,!r)/e.getInt32(g+4+8*s,!r);return i}})(e,i,t,o);return l}function F(e,t,r){var o="";for(n=t;n<t+r;n++)o+=String.fromCharCode(e.getUint8(n));return o}function c(e){var t={};if(1==e.nodeType){if(0<e.attributes.length){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i,a=e.childNodes.item(o),s=a.nodeName;null==t[s]?t[s]=c(a):(null==t[s].push&&(i=t[s],t[s]=[],t[s].push(i)),t[s].push(c(a)))}return t}l.enableXmp=function(){l.isXmpEnabled=!0},l.disableXmp=function(){l.isXmpEnabled=!1},l.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete||(o(e)?t&&t.call(e):r(e,t),0))},l.getTag=function(e,t){if(o(e))return e.exifdata[t]},l.getIptcTag=function(e,t){if(o(e))return e.iptcdata[t]},l.getAllTags=function(e){if(!o(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},l.getAllIptcTags=function(e){if(!o(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},l.pretty=function(e){if(!o(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},l.readFromBinaryFile=u,"function"==typeof define&&define.amd&&define("exif-js",[],function(){return l})}.call(this);
//# sourceMappingURL=exif.js.map