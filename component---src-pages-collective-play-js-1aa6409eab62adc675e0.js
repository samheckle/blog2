(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6Gk8":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(){var e=Object(r.useStaticQuery)("3257411868").site.siteMetadata,t=e.author,a=e.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:2.5}},n.a.createElement("p",null,"a blog by ",n.a.createElement("strong",null,t.name)," ",t.summary," ",n.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"twitter.")))}},"rU/Q":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("6Gk8"),c=a("Bl7J"),o=a("vrFN");t.default=function(e){var t=e.data,a=e.location,l=t.site.siteMetadata.title,m=t.allMarkdownRemark.edges;return n.a.createElement(c.a,{location:a,title:l},n.a.createElement(o.a,{title:"Collective Play"}),n.a.createElement(i.a,null),n.a.createElement("hr",{margin:"2px"}),m.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return t.fields.slug.includes("/collective-play")?n.a.createElement("article",{key:t.fields.slug,className:"blog"},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:1/4}},n.a.createElement(r.Link,{to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))):null})),n.a.createElement("hr",{margin:"2px"}),n.a.createElement("footer",null,"© ",(new Date).getFullYear()))};var m="173509685"}}]);
//# sourceMappingURL=component---src-pages-collective-play-js-1aa6409eab62adc675e0.js.map