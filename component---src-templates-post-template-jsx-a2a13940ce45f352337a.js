(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(168),o=a.n(l),m=a(169),c=(a(263),a(36)),u=a(179),g=a.n(u),d=a(37),M=a.n(d),p=a(265),N=a.n(p),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(M()(M()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(M()(M()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.postNode,a=e.siteMetadata;if(!a.disqusShortname)return null;var n=t.frontmatter,r=a.url+t.fields.slug;return s.a.createElement(N.a,{shortname:a.disqusShortname,identifier:n.title,title:n.title,url:r,category_id:n.category_id,onNewComment:this.notifyAboutComment})},t}(i.Component),f=(a(267),a(170)),y=a(171),D=a(167),I=a(268),h=a.n(I),b=(a(202),a(270)),C=a.n(b),S=a(271),v=a(278),w=(a(288),a(289),a(290)),A=a.n(w),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleOnChangeEmail=function(e){a.setState({email:e.target.value})},a.handleOnChangeName=function(e){a.setState({listFields:{NAME:e.target.value}})},a.handleSubmit=function(){var e=C()(h.a.mark(function e(t){var n,r,i,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.listFields,e.next=4,Object(S.a)(r,i);case 4:"error"===(s=e.sent).result?v.toast.error(s.msg,{position:v.toast.POSITION.BOTTOM_CENTER}):v.toast.success(s.msg,{position:v.toast.POSITION.BOTTOM_CENTER});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",listFields:{NAME:""}},a}return r()(t,e),t.prototype.render=function(){return s.a.createElement("form",{className:"seva-form formkit-form",method:"post",style:{backgroundColor:"rgb(255, 255, 255)",borderRadius:"6px"},onSubmit:this.handleSubmit},s.a.createElement("div",{"data-style":"full"},s.a.createElement("div",{"data-element":"column",className:"formkit-column",style:{backgroundColor:"rgb(249, 250, 251)"}},s.a.createElement("h1",{className:"formkit-header","data-element":"header",style:{color:"rgb(77, 77, 77)",fontSize:"20px",fontWeight:700}},"Join the Newsletter"),s.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader",style:{color:"rgb(104, 104, 104)",fontsize:"15px"}},s.a.createElement("p",null,"Subscribe to get my latest content by email.")),s.a.createElement("div",{className:"formkit-image"},s.a.createElement("img",{alt:"",src:A.a,style:{maxWidth:"100%"}}))),s.a.createElement("div",{"data-element":"column",className:"formkit-column"},s.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),s.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},s.a.createElement("div",{className:"formkit-field"},s.a.createElement("input",{className:"formkit-input","aria-label":"Your first name",name:"fields[first_name]",placeholder:"Your first name",type:"text",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},value:this.state.listFields.NAME,onChange:this.handleOnChangeName})),s.a.createElement("div",{className:"formkit-field"},s.a.createElement("input",{className:"formkit-input",name:"email_address","aria-label":"Your email address",placeholder:"Your email address",required:"",type:"email",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},value:this.state.email,onChange:this.handleOnChangeEmail})),s.a.createElement("button",{type:"submit","data-element":"submit",className:"formkit-submit formkit-submit",style:{backgroundColor:"rgb(252, 211, 225)",borderRadius:"24px",color:"rgb(110, 110, 110)",fontWeight:700}},s.a.createElement("div",{className:"formkit-spinner"}),s.a.createElement("span",null,"Subscribe")),s.a.createElement(v.ToastContainer,{autoClose:8e3})),s.a.createElement("div",{"data-element":"guarantee",className:"formkit-guarantee",style:{color:"rgb(77, 77, 77)",fontSize:"13px",fontWeight:400}},s.a.createElement("p",null,"I won't send you spam."),s.a.createElement("p",null,"Unsubscribe at ",s.a.createElement("em",null,"any")," time.")))))},t}(s.a.Component),j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,a=e.author,n=this.props.pageContext,r=n.previous,i=n.next,l=this.props.data.markdownRemark,o=l.fields.tagSlugs,m=this.props.location,u=s.a.createElement("div",{className:"applause"},s.a.createElement("applause-button",{multiclap:"true"})),d=s.a.createElement("div",null,s.a.createElement(c.Link,{className:"post-single__home-button",to:"/"},"All Articles"),u),M=s.a.createElement("div",{className:"post-single__tags"},s.a.createElement("ul",{className:"post-single__tags-list"},o&&o.map(function(e,t){return s.a.createElement("li",{className:"post-single__tags-list-item",key:e},s.a.createElement(c.Link,{to:e,className:"post-single__tags-list-item-link"},l.frontmatter.tags[t]))}))),p=s.a.createElement("div",null,s.a.createElement(E,{postNode:l,siteMetadata:this.props.data.site.siteMetadata}));return s.a.createElement("div",null,d,s.a.createElement("div",{className:"post-single"},s.a.createElement("div",{className:"post-single__inner"},s.a.createElement("h1",{className:"post-single__title"},l.frontmatter.title),s.a.createElement("div",{style:{textAlign:"center",fontSize:"larger"}},""+Object(D.a)(l.timeToRead)),s.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:l.html}}),s.a.createElement("div",{className:"post-single__date"},s.a.createElement("em",null,"Published ",g()(l.frontmatter.date).format("D MMM YYYY")))),s.a.createElement("div",{className:"post-single__footer"},M,s.a.createElement("div",{className:"mobile-footer-clap"},u),s.a.createElement("hr",null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(c.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,i&&s.a.createElement(c.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))),s.a.createElement("div",{className:"post-single__footer-text",style:{marginBottom:"1.625rem"}},s.a.createElement(y.a,{author:a,subtitle:t,path:Object(D.b)(m)}),s.a.createElement("a",{href:""+a.resume,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("strong",null,"My Résumé"))),s.a.createElement("div",{className:"post-single__footer-text"},s.a.createElement(f.a,{data:a,isFlat:!0}),s.a.createElement("div",{style:{marginBottom:"1.625rem"}},s.a.createElement(k,null))),p)))},t}(s.a.Component),T=a(186);a.d(t,"pageQuery",function(){return O});var L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.subtitle,n=this.props.data.markdownRemark,r=n.frontmatter,i=r.title,l=r.description,c=r.cover,u=null!==l?l:a,g=i+" - "+t;return s.a.createElement(m.a,null,s.a.createElement(T.a,{title:g,description:u,image:c.childImageSharp.original.src,slug:n.fields.slug}),s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement("title",null,g),s.a.createElement("meta",{name:"description",content:u})),s.a.createElement(j,this.props)))},t}(s.a.Component),O=(t.default=L,"3842582372")},186:function(e,t,a){"use strict";a(26);var n=a(187),r=a(0),i=a.n(r),s=a(168),l=a.n(s),o=a(1),m=a.n(o),c=a(36),u=function(e){var t=e.meta,a=e.image,r=e.title,s=e.description,o=e.slug;return i.a.createElement(c.StaticQuery,{query:"1577310642",render:function(e){var n=e.site.siteMetadata,m=s||n.subtitle,c=a?n.siteurl+"/"+a:null,u=""+n.siteurl+o;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+n.title,title:r}:{title:n.title},{meta:[{name:"description",content:m},{property:"og:url",content:u},{property:"og:title",content:r||n.title},{name:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author.aboutme},{name:"twitter:title",content:r||n.title},{name:"twitter:description",content:m}].concat(c?[{property:"og:image",content:c},{name:"twitter:image",content:c}]:[]).concat(t)}))},data:n})};u.defaultProps={meta:[],slug:""},u.propTypes={description:m.a.string.isRequired,image:m.a.string.isRequired,meta:m.a.array,slug:m.a.string,title:m.a.string.isRequired},t.a=u},187:function(e){e.exports={data:{site:{siteMetadata:{title:"It's All Over full-stack",subtitle:"So excited about this Craft that, I can't keep myself from blogging about it.",siteurl:"https://overfullstack.github.io",author:{aboutme:"http://bit.ly/agsabtme"}}}}}},267:function(e,t,a){},289:function(e,t,a){},290:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiIgdmlld0JveD0iMCAwIDQ2IDQ2Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZmlsbD0iI0REOTJBQiIgZD0iTTIzLDM2IEMyMi44MTMsMzYgMjIuNjI3LDM1Ljk0OCAyMi40NjMsMzUuODQ0IEwwLjQ2MywyMS44NDQgQzAuMTU5LDIxLjY1MSAtMC4wMTcsMjEuMzA4IDAuMDAxLDIwLjk0OCBDMC4wMiwyMC41ODkgMC4yMywyMC4yNjYgMC41NTMsMjAuMTA1IEwyMyw2IEw0NS40NDcsMjAuMTA1IEM0NS43NjksMjAuMjY2IDQ1Ljk4LDIwLjU4OCA0NS45OTksMjAuOTQ4IEM0Ni4wMTgsMjEuMzA4IDQ1Ljg0MSwyMS42NSA0NS41MzcsMjEuODQ0IEwyMy41MzcsMzUuODQ0IEMyMy4zNzMsMzUuOTQ4IDIzLjE4NywzNiAyMywzNiBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzgsMzcgTDgsMzcgTDgsMSBDOCwwLjQ0OCA4LjQ0OCwwIDksMCBMMzcsMCBDMzcuNTUyLDAgMzgsMC40NDggMzgsMSBMMzgsMzcgWiIvPgogICAgPHBhdGggZmlsbD0iI0ZGQTdDNCIgZD0iTTQ1LDQ2IEM0NC45MTYsNDYgNDQuODMxLDQ1Ljk4OSA0NC43NDgsNDUuOTY4IEwyMS43NDgsMzkuOTY4IEwyMiwzMyBMNDYsMjEgTDQ2LDQ1IEM0Niw0NS4zMSA0NS44NTYsNDUuNjAyIDQ1LjYxMSw0NS43OTIgQzQ1LjQzNSw0NS45MjggNDUuMjE5LDQ2IDQ1LDQ2IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkMzRDciIGQ9Ik00NSw0NiBMMSw0NiBDMC40NDcsNDYgMCw0NS41NTIgMCw0NSBMMCwyMSBMNDUuNDc5LDQ0LjEyMiBDNDUuODgsNDQuMzQxIDQ2LjA4Myw0NC44MDQgNDUuOTY5LDQ1LjI0NyBDNDUuODU2LDQ1LjY5IDQ1LjQ1Nyw0NiA0NSw0NiBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZBN0M0IiBkPSJNMTkgMjAuNDE0TDE0LjI5MyAxNS43MDdDMTMuOTAyIDE1LjMxNiAxMy45MDIgMTQuNjg0IDE0LjI5MyAxNC4yOTNMMTkgOS41ODYgMjAuNDE0IDExIDE2LjQxNCAxNSAyMC40MTQgMTkgMTkgMjAuNDE0ek0yNyAyMC40MTRMMjUuNTg2IDE5IDI5LjU4NiAxNSAyNS41ODYgMTEgMjcgOS41ODYgMzEuNzA3IDE0LjI5M0MzMi4wOTggMTQuNjg0IDMyLjA5OCAxNS4zMTYgMzEuNzA3IDE1LjcwN0wyNyAyMC40MTR6Ii8+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-a2a13940ce45f352337a.js.map