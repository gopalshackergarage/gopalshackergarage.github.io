(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),i=a(0),s=a.n(i),l=a(152),c=a.n(l),m=a(153),o=a(151),p=(a(69),a(158)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(s.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},s.a.createElement("div",{className:"page"},s.a.createElement("h1",{className:"page__title"},t),s.a.createElement("div",{className:"page__body"},e))))},t}(s.a.Component);a.d(t,"pageQuery",function(){return h});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return s.a.createElement(m.a,null,s.a.createElement("div",null,s.a.createElement(c.a,{title:t+" - "+e}),s.a.createElement(o.a,this.props),s.a.createElement(u,this.props)))},t}(s.a.Component),h=(t.default=d,"845668316")},148:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/photo-e86b548881da5a0816131b9e69fe5870.jpg"},150:function(e,t,a){},151:function(e,t,a){"use strict";a(154);var n=a(6),r=a.n(n),i=a(0),s=a.n(i),l=a(147),c=a.n(l),m=a(156),o=a.n(m),p=a(32),u=(a(148),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=s.a.createElement(s.a.Fragment,null,e.map(function(e){return s.a.createElement("li",{className:"menu__list-item",key:e.path},s.a.createElement(p.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))})),a=s.a.createElement("div",null,s.a.createElement(c.a,{minDeviceWidth:1224},s.a.createElement("ul",{className:"menu__list"},t)),s.a.createElement(c.a,{maxDeviceWidth:1224},s.a.createElement("ul",{className:"menu__list",style:{marginTop:"-14px",marginRight:"20px",marginLeft:"3px",float:"left",position:"relative"}},t)));return s.a.createElement("nav",{className:"menu"},a)},t}(s.a.Component)),d=a(155),h=a(149),_=a.n(h),E=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,l="/"===o()(e,"pathname","/"),m=s.a.createElement("img",{src:_.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name}),h=s.a.createElement("img",{src:_.a,className:"sidebar__author-photo",style:{marginTop:"-4px",marginRight:"32px",float:"left"},width:"75",height:"75",alt:a.name}),E=s.a.createElement("div",null,s.a.createElement(p.Link,{to:"/"},s.a.createElement(c.a,{minDeviceWidth:1224},m),s.a.createElement(c.a,{maxDeviceWidth:1224},h)),l?s.a.createElement("h1",{className:"sidebar__author-title"},s.a.createElement(p.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):s.a.createElement("h2",{className:"sidebar__author-title"},s.a.createElement(p.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),s.a.createElement("p",{className:"sidebar__author-subtitle"},n));return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__inner"},s.a.createElement("div",{className:"sidebar__author"},E),s.a.createElement("div",null,s.a.createElement(u,{data:i}),s.a.createElement(d.a,{data:a}),s.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(s.a.Component));t.a=E},158:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),s=a.n(i),l=a(32),c=a(163),m=a.n(c),o=(a(159),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,i=this.props.data.node.fields,c=i.slug,o=i.categorySlug;return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__meta"},s.a.createElement("time",{className:"post__meta-time",dateTime:m()(a).format("MMMM D, YYYY")},m()(a).format("MMMM YYYY")),s.a.createElement("span",{className:"post__meta-divider"}),s.a.createElement("span",{className:"post__meta-category",key:o},s.a.createElement(l.Link,{to:o,className:"post__meta-category-link"},n))),s.a.createElement("h2",{className:"post__title"},s.a.createElement(l.Link,{className:"post__title-link",to:c},t)),s.a.createElement("p",{className:"post__description"},r),s.a.createElement(l.Link,{className:"post__readmore",to:c},"Read"))},t}(s.a.Component));t.a=o},159:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-f9d61b434a8797766df4.js.map