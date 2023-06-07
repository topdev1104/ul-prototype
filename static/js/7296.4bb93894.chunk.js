"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[7296],{65630:function(e,t,n){n.d(t,{SA:function(){return r.SA},ZP:function(){return a.Z}});var r=n(47974),a=n(5603)},37903:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),a=n(45987),i=n(57829),s=n(35898),o=n(61113),l=n(3404),c=n(90891),d=n(2135),u=n(46417);function x(e){var t=e.link,n=e.activeLast,a=e.disabled,s=t.name,o=t.href,l=t.icon,x=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return o?(0,u.jsx)(c.Z,{component:d.rU,to:o,sx:x,children:m}):(0,u.jsxs)(i.Z,{sx:x,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,n=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,g=e.sx,v=(0,a.Z)(e,m),Z=t[t.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(p,{})},v),{},{children:t.map((function(e){return(0,u.jsx)(x,{link:e,activeLast:f,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,u.jsx)(i.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},27296:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(65964),a=n(19860),i=n(57829),s=n(70178),o=n(61689),l=n(82403),c=n(76025),d=n(65630),u=n(10978),x=n(55346),m=n(37903),h=n(45),p=n(14461),f=n(46417),g=["default","primary","secondary","info","success","warning","error"],v=["tiny","small","medium","large"],Z=["circular","rounded","square"],j=["online","away","busy","invisible"];function y(){var e=(0,a.Z)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Avatar | Minimal UI"})}),(0,f.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,f.jsx)(s.Z,{children:(0,f.jsx)(m.Z,{heading:"Avatar",links:[{name:"Components",href:c.ko.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})})}),(0,f.jsx)(s.Z,{sx:{my:10},children:(0,f.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,f.jsx)(p.g,{title:"Image avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[1,2,3,4,5].map((function(e,t){return(0,f.jsx)(h.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},t)}))}),(0,f.jsx)(p.g,{title:"Letter avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:g.map((function(e,t){return(0,f.jsx)(o.Z,{title:e,children:(0,f.jsx)(h.z,{name:d.ZP.name.fullName(t)})},e)}))}),(0,f.jsx)(p.g,{title:"Icon avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:g.map((function(e){return(0,f.jsx)(h.z,{color:e,children:(0,f.jsx)(u.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,f.jsx)(p.g,{title:"Variant",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:Z.map((function(e){return(0,f.jsx)(h.z,{variant:e,color:"primary",children:(0,f.jsx)(u.Z,{icon:"eva:folder-add-outline",width:24})},e)}))}),(0,f.jsxs)(p.g,{title:"Grouped",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[v.map((function(e){return(0,f.jsx)(o.Z,{title:e,children:(0,f.jsx)(h._,{size:e,children:g.map((function(e,t){return(0,f.jsx)(h.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},e)}))},e)},e)})),(0,f.jsx)(o.Z,{title:"compact",children:(0,f.jsx)(h._,{compact:!0,sx:{width:48,height:48},children:g.slice(0,2).map((function(e,t){return(0,f.jsx)(h.z,{alt:"Remy Sharp",src:d.ZP.image.avatar(t+1)},e)}))})})]}),(0,f.jsxs)(p.g,{title:"With badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,f.jsx)(h.z,{alt:"Travis Howard",src:d.ZP.image.avatar(1),BadgeProps:{badgeContent:(0,f.jsx)(h.z,{alt:"Travis Howard",src:d.ZP.image.avatar(7),sx:{width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}})}}),j.map((function(e,t){return(0,f.jsx)(h.z,{alt:"Travis Howard",src:d.ZP.image.avatar(t+1),BadgeProps:{badgeContent:(0,f.jsx)(x.Z,{status:e,size:"large"})}},e)}))]}),(0,f.jsx)(p.g,{title:"Sizes",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[24,32,48,56,64,80,128].map((function(e,t){return(0,f.jsx)(h.z,{alt:"Travis Howard",src:d.ZP.image.avatar(t+4),sx:{width:e,height:e}},e)}))})]})})]})}},14461:function(e,t,n){n.d(t,{_:function(){return u},g:function(){return d}});var r=n(1413),a=n(17551),i=n(70501),s=n(54641),o=n(57829),l=n(61113),c=n(46417);function d(e){var t=e.title,n=e.sx,l=e.children;return(0,c.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(s.Z,{title:t}),(0,c.jsx)(o.Z,{sx:(0,r.Z)({p:5,minHeight:180},n),children:l})]})}function u(e){var t=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},54641:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(4942),a=n(63366),i=n(87462),s=n(47313),o=n(83061),l=n(21921),c=n(61113),d=n(77342),u=n(17592),x=n(77430),m=n(32298);function h(e){return(0,m.Z)("MuiCardHeader",e)}var p=(0,x.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=n(46417),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,i.Z)((n={},(0,r.Z)(n,"& .".concat(p.title),t.title),(0,r.Z)(n,"& .".concat(p.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),b=s.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=n.action,s=n.avatar,u=n.className,x=n.component,m=void 0===x?"div":x,p=n.disableTypography,b=void 0!==p&&p,w=n.subheader,C=n.subheaderTypographyProps,k=n.title,P=n.titleTypographyProps,I=(0,a.Z)(n,g),z=(0,i.Z)({},n,{component:m,disableTypography:b}),R=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(z),H=k;null==H||H.type===c.Z||b||(H=(0,f.jsx)(c.Z,(0,i.Z)({variant:s?"body2":"h5",className:R.title,component:"span",display:"block"},P,{children:H})));var S=w;return null==S||S.type===c.Z||b||(S=(0,f.jsx)(c.Z,(0,i.Z)({variant:s?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:S}))),(0,f.jsxs)(v,(0,i.Z)({className:(0,o.Z)(R.root,u),as:m,ref:t,ownerState:z},I,{children:[s&&(0,f.jsx)(Z,{className:R.avatar,ownerState:z,children:s}),(0,f.jsxs)(y,{className:R.content,ownerState:z,children:[H,S]}),r&&(0,f.jsx)(j,{className:R.action,ownerState:z,children:r})]}))}))}}]);