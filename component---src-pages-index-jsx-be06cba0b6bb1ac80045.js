(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(77);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(168),o=a.n(l),c=a(169),m=a(173),u=a(166),p=a(183),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle,r=t.logo;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(s.a.createElement(m.a,{data:t,key:t.node.fields.slug}))}),s.a.createElement(c.a,null,s.a.createElement(p.a,{image:r,description:n}),s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement("title",null,a),s.a.createElement("meta",{name:"description",content:n})),s.a.createElement(u.a,this.props),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},e))))},t}(s.a.Component);t.default=d;var h="651375970"},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(36),o=(a(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=s.a.createElement("ul",{className:"menu__list"},e.map(function(e){return s.a.createElement("li",{className:"menu__list-item",key:e.path},s.a.createElement(l.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return s.a.createElement("nav",{className:"menu"},t)},t}(s.a.Component)),c=a(170),m=(a(165),function(e){var t=e.label,a=e.symbol;return s.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},a)}),u=a(171),p=a(167),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu;return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__inner"},s.a.createElement("div",{className:"sidebar__author"},s.a.createElement(u.a,{author:a,subtitle:n,path:Object(p.b)(e)})),s.a.createElement("div",null,s.a.createElement(o,{data:i}),s.a.createElement(c.a,{data:a}),s.a.createElement("p",{className:"sidebar__copyright",style:{marginTop:0}},"This Blog is built with React.js ",s.a.createElement(m,{symbol:"⚛️"})),s.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(s.a.Component);t.a=d},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(36),o=a(178),c=a.n(o),m=(a(174),a(167)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,i=this.props.data.node.fields,o=i.slug,u=i.categorySlug,p=this.props.data.node.timeToRead;return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__meta"},s.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("MMMM YYYY")),s.a.createElement("span",{className:"post__meta-divider"}),s.a.createElement("span",{className:"post__meta-category",key:u},s.a.createElement(l.Link,{to:u,className:"post__meta-category-link"},n))),s.a.createElement("h2",{className:"post__title"},s.a.createElement(l.Link,{className:"post__title-link",to:o},t)),s.a.createElement("p",{className:"post__description"},r),s.a.createElement("div",null,""+Object(m.a)(p)))},t}(s.a.Component);t.a=u},174:function(e,t,a){},183:function(e,t,a){"use strict";a(26);var n=a(184),r=a(0),i=a.n(r),s=a(168),l=a.n(s),o=a(1),c=a.n(o),m=a(36),u=function(e){var t=e.meta,a=e.image,r=e.title,s=e.description,o=e.slug;return i.a.createElement(m.StaticQuery,{query:"1577310642",render:function(e){var n=e.site.siteMetadata,c=s||n.subtitle,m=a?n.siteurl+"/"+a:null,u=""+n.siteurl+o;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+n.title,title:r}:{title:n.title},{meta:[{name:"description",content:c},{property:"og:url",content:u},{property:"og:title",content:r||n.title},{name:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author.aboutme},{name:"twitter:title",content:r||n.title},{name:"twitter:description",content:c}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))},data:n})};u.defaultProps={meta:[],slug:""},u.propTypes={description:c.a.string.isRequired,image:c.a.string.isRequired,meta:c.a.array,slug:c.a.string,title:c.a.string.isRequired},t.a=u},184:function(e){e.exports={data:{site:{siteMetadata:{title:"It's All Over full-stack",subtitle:"So excited about this Craft that, I can't keep myself from blogging about it.",siteurl:"https://overfullstack.github.io",author:{aboutme:"http://bit.ly/agsabtme"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-be06cba0b6bb1ac80045.js.map