(self.webpackChunkvsp_official_site=self.webpackChunkvsp_official_site||[]).push([[940],{5222:function(e,t,n){"use strict";n.r(t),n.d(t,{SidenavPageTemplate:function(){return s},default:function(){return o}});var a=n(7294),r=n(6630),l=n(4871),i=n(5444),c=function(e){var t=e.nav,n=e.current;return a.createElement("nav",{className:"Sidenav"},a.createElement("h2",null,t.title),a.createElement("ul",null,t.pages.map((function(e){return a.createElement("li",{key:e.id,className:e.slug==n?"current":""},a.createElement(i.Link,{to:e.slug},e.title))}))))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.contents,n=e.page_binder,r=e.slug;return a.createElement("main",{className:"SidenavPage container section"},a.createElement("div",{className:"side"},a.createElement(c,{nav:n,current:r})),a.createElement("section",null,a.createElement("div",null,a.createElement(l.Z,{source:t}))))},o=function(e){var t=e.data.cms.page,n=new Array({title:t.title,link:null});return null!=t.page_binder&&n.unshift({title:t.page_binder.title,link:t.page_binder.slug}),a.createElement(r.Z,{title:t.title||!1,subtitle:t.subtitle,featuredImages:t.featuredImages,breads:n},a.createElement(s,u({},t,{contents:t.contentsTransformed})))}}}]);