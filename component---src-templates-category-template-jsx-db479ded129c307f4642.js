(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(167),c=a.n(l),m=a(168),o=a(166),p=(a(77),a(173)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(s.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},s.a.createElement("div",{className:"page"},s.a.createElement("h1",{className:"page__title"},t),s.a.createElement("div",{className:"page__body"},e))))},t}(s.a.Component);a.d(t,"pageQuery",function(){return _});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return s.a.createElement(m.a,null,s.a.createElement("div",null,s.a.createElement(c.a,{title:t+" - "+e}),s.a.createElement(o.a,this.props),s.a.createElement(u,this.props)))},t}(s.a.Component),_=(t.default=d,"845668316")},163:function(e,t,a){},164:function(e,t,a){e.exports=a.p+"static/photo-e86b548881da5a0816131b9e69fe5870.jpg"},165:function(e,t,a){},166:function(e,t,a){"use strict";a(169);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(162),c=a.n(l),m=a(171),o=a.n(m),p=a(36),u=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=s.a.createElement(s.a.Fragment,null,e.map(function(e){return s.a.createElement("li",{className:"menu__list-item",key:e.path},s.a.createElement(p.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))})),a=s.a.createElement("div",null,s.a.createElement(c.a,{minDeviceWidth:1224},s.a.createElement("ul",{className:"menu__list"},t)),s.a.createElement(c.a,{maxDeviceWidth:1224},s.a.createElement("ul",{className:"menu__list menu-mobile"},t)));return s.a.createElement("nav",{className:"menu"},a)},t}(s.a.Component)),d=a(170),_=a(164),h=a.n(_),E=(a(165),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,l="/"===o()(e,"pathname","/"),m=s.a.createElement("img",{src:h.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name}),_=s.a.createElement("img",{src:h.a,className:"sidebar__author-photo img-mobile",width:"75",height:"75",alt:a.name}),E=s.a.createElement("div",null,s.a.createElement(p.Link,{to:"/"},s.a.createElement(c.a,{minDeviceWidth:1224},m),s.a.createElement(c.a,{maxDeviceWidth:1224},_)),l?s.a.createElement("h1",{className:"sidebar__author-title"},s.a.createElement(p.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):s.a.createElement("h2",{className:"sidebar__author-title"},s.a.createElement(p.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),s.a.createElement("p",{className:"sidebar__author-subtitle"},n));return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__inner"},s.a.createElement("div",{className:"sidebar__author"},E),s.a.createElement("div",null,s.a.createElement(u,{data:i}),s.a.createElement(d.a,{data:a}),s.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(s.a.Component));t.a=E},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(36),c=a(175),m=a.n(c),o=(a(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,i=this.props.data.node.fields,c=i.slug,o=i.categorySlug;return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__meta"},s.a.createElement("time",{className:"post__meta-time",dateTime:m()(a).format("MMMM D, YYYY")},m()(a).format("MMMM YYYY")),s.a.createElement("span",{className:"post__meta-divider"}),s.a.createElement("span",{className:"post__meta-category",key:o},s.a.createElement(l.Link,{to:o,className:"post__meta-category-link"},n))),s.a.createElement("h2",{className:"post__title"},s.a.createElement(l.Link,{className:"post__title-link",to:c},t)),s.a.createElement("p",{className:"post__description"},r),s.a.createElement(l.Link,{className:"post__readmore",to:c},"Read"))},t}(s.a.Component));t.a=o},174:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-db479ded129c307f4642.js.map