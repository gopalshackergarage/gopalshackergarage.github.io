(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(168),c=a.n(l),o=a(169),m=a(166),p=(a(77),a(175)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),i.a.createElement("div",{className:"page__body"},e))))},t}(i.a.Component);a.d(t,"pageQuery",function(){return _});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{title:'All Posts tagged as "'+t+'" - '+e}),i.a.createElement(m.a,this.props),i.a.createElement(u,this.props)))},t}(i.a.Component),_=(t.default=d,"3193298672")},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(36),c=(a(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(l.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),o=a(170),m=(a(165),function(e){var t=e.label,a=e.symbol;return i.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},a)}),p=a(171),u=a(167),d=a(172),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,s=t.declaration,l=t.menu;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement(p.a,{className:"sidebar__author",author:a,subtitle:n,path:Object(u.b)(e)}),i.a.createElement("div",{className:"sidebar__inner-middle"},i.a.createElement(c,{data:l}),i.a.createElement(o.a,{data:a}),i.a.createElement(d.a,null)),i.a.createElement("div",null,i.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:"0"}},s," ",i.a.createElement(m,{symbol:"⚛️"})),i.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(i.a.Component);t.a=_},175:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(36),c=a(180),o=a.n(c),m=(a(176),a(167)),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,c=s.slug,p=s.categorySlug,u=this.props.data.node.timeToRead;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:o()(a).format("MMMM D, YYYY")},o()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:p},i.a.createElement(l.Link,{to:p,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:c},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement("div",null,""+Object(m.a)(u)))},t}(i.a.Component);t.a=p},176:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-0426562250ddc77d9cf2.js.map