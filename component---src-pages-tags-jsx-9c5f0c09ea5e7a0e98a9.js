(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return x});var n=a(6),r=a.n(n),u=a(0),i=a.n(u),l=a(32),c=a(154),s=a.n(c),o=a(170),f=a.n(o),m=a(155),d=a(153),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return i.a.createElement(m.a,null,i.a.createElement("div",null,i.a.createElement(s.a,{title:"All Tags - "+e}),i.a.createElement(d.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},"Tags"),i.a.createElement("div",{className:"page__body"},i.a.createElement("div",{className:"tags"},i.a.createElement("ul",{className:"tags__list"},t.map(function(e){return i.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},i.a.createElement(l.Link,{to:"/tags/"+f()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(i.a.Component);t.default=p;var x="1172434022"},150:function(e,t,a){},151:function(e,t,a){e.exports=a.p+"static/photo-e86b548881da5a0816131b9e69fe5870.jpg"},152:function(e,t,a){},153:function(e,t,a){"use strict";a(156);var n=a(6),r=a.n(n),u=a(0),i=a.n(u),l=a(149),c=a.n(l),s=a(158),o=a.n(s),f=a(32),m=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement(i.a.Fragment,null,e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(f.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))})),a=i.a.createElement("div",null,i.a.createElement(c.a,{minDeviceWidth:1224},i.a.createElement("ul",{className:"menu__list"},t)),i.a.createElement(c.a,{maxDeviceWidth:1224},i.a.createElement("ul",{className:"menu__list menu-mobile"},t)));return i.a.createElement("nav",{className:"menu"},a)},t}(i.a.Component)),d=a(157),p=a(151),x=a.n(p),E=(a(152),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,u=t.menu,l="/"===o()(e,"pathname","/"),s=i.a.createElement("img",{src:x.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name}),p=i.a.createElement("img",{src:x.a,className:"sidebar__author-photo img-mobile",width:"75",height:"75",alt:a.name}),E=i.a.createElement("div",null,i.a.createElement(f.Link,{to:"/"},i.a.createElement(c.a,{minDeviceWidth:1224},s),i.a.createElement(c.a,{maxDeviceWidth:1224},p)),l?i.a.createElement("h1",{className:"sidebar__author-title"},i.a.createElement(f.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(f.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},E),i.a.createElement("div",null,i.a.createElement(m,{data:u}),i.a.createElement(d.a,{data:a}),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component));t.a=E},170:function(e,t,a){var n=a(171)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},171:function(e,t,a){var n=a(172),r=a(173),u=a(176),i=RegExp("['’]","g");e.exports=function(e){return function(t){return n(u(r(t).replace(i,"")),e,"")}}},172:function(e,t){e.exports=function(e,t,a,n){var r=-1,u=null==e?0:e.length;for(n&&u&&(a=e[++r]);++r<u;)a=t(a,e[r],r,e);return a}},173:function(e,t,a){var n=a(174),r=a(159),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(u,n).replace(i,"")}},174:function(e,t,a){var n=a(175)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},175:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},176:function(e,t,a){var n=a(177),r=a(178),u=a(159),i=a(179);e.exports=function(e,t,a){return e=u(e),void 0===(t=a?void 0:t)?r(e)?i(e):n(e):e.match(t)||[]}},177:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},178:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},179:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",u="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",o="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+i+"|"+l+")",m="(?:"+o+"|"+l+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,s].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),x="(?:"+[u,c,s].join("|")+")"+p,E=RegExp([o+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,o,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,o+f,"$"].join("|")+")",o+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",o+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(E)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-9c5f0c09ea5e7a0e98a9.js.map