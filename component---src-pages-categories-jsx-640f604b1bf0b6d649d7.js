(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return x});var n=a(7),r=a.n(n),u=a(189),i=a.n(u),l=a(0),c=a.n(l),o=a(36),s=a(168),f=a.n(s),d=a(169),m=a(166),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(f.a,{title:"All Categories - "+e}),c.a.createElement(m.a,this.props),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content__inner"},c.a.createElement("div",{className:"page"},c.a.createElement("h1",{className:"page__title"},"Categories"),c.a.createElement("div",{className:"page__body"},c.a.createElement("div",{className:"categories"},c.a.createElement("ul",{className:"categories__list"},t.map(function(e){return c.a.createElement("li",{key:e.fieldValue,className:"categories__list-item"},c.a.createElement(o.Link,{to:"/categories/"+i()(e.fieldValue)+"/",className:"categories__list-item-link"},e.fieldValue," ","(",e.totalCount,")"))})))))))))},t}(c.a.Component);t.default=p;var x="2756115948"},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),u=a(0),i=a.n(u),l=a(36),c=(a(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(l.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),o=a(170),s=(a(165),function(e){var t=e.label,a=e.symbol;return i.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},a)}),f=a(171),d=a(167),m=a(172),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,u=t.declaration,l=t.menu;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement(f.a,{className:"sidebar__author",author:a,subtitle:n,path:Object(d.b)(e)}),i.a.createElement("div",{className:"sidebar__inner-middle"},i.a.createElement(c,{data:l}),i.a.createElement(o.a,{data:a}),i.a.createElement(m.a,null)),i.a.createElement("div",null,i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:"0"}},u," ",i.a.createElement(s,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component);t.a=p},189:function(e,t,a){var n=a(190)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},190:function(e,t,a){var n=a(191),r=a(192),u=a(195),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(u(r(t).replace(i,"")),e,"")}}},191:function(e,t){e.exports=function(e,t,a,n){var r=-1,u=null==e?0:e.length;for(n&&u&&(a=e[++r]);++r<u;)a=t(a,e[r],r,e);return a}},192:function(e,t,a){var n=a(193),r=a(173),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(u,n).replace(i,"")}},193:function(e,t,a){var n=a(194)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},194:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},195:function(e,t,a){var n=a(196),r=a(197),u=a(173),i=a(198);e.exports=function(e,t,a){return e=u(e),void 0===(t=a?void 0:t)?r(e)?i(e):n(e):e.match(t)||[]}},196:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},197:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},198:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",u="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+i+"|"+l+")",d="(?:"+s+"|"+l+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,o].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[u,c,o].join("|")+")"+p,E=RegExp([s+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(E)||[]}}}]);
//# sourceMappingURL=component---src-pages-categories-jsx-640f604b1bf0b6d649d7.js.map