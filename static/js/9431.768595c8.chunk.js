"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9431],{86121:function(e,r,n){n.d(r,{b8:function(){return Z},ZQ:function(){return c},tR:function(){return b}});var t=n(17551),i=n(35898),a=n(57829),s=n(61113),o=n(46417);function c(e){var r=e.colors,n=e.limit,c=void 0===n?3:n,l=e.sx,d=r.slice(0,c),u=r.length-c;return(0,o.jsxs)(i.Z,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:l,children:[d.map((function(e,r){return(0,o.jsx)(a.Z,{sx:{ml:-.75,width:16,height:16,borderRadius:"50%",border:function(e){return"solid 2px ".concat(e.palette.background.paper)},boxShadow:function(e){return"inset -1px 1px 2px ".concat((0,t.Fq)(e.palette.common.black,.24))},bgcolor:e}},e+r)})),r.length>c&&(0,o.jsx)(s.Z,{variant:"subtitle2",children:"+".concat(u)})]})}var l=n(1413),d=n(45987),u=n(44758),x=n(10978),h=["checked","whiteColor","sx"];function p(e){var r=e.checked,n=e.whiteColor,i=e.sx,s=(0,d.Z)(e,h),c=(0,o.jsx)(a.Z,{sx:{width:1,height:1,opacity:.48,borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"}}),u=(0,o.jsx)(x.Z,{icon:"eva:checkmark-fill",sx:(0,l.Z)({opacity:0},r&&(0,l.Z)({opacity:1,color:"common.white"},n&&{color:"common.black"}))});return(0,o.jsxs)(a.Z,(0,l.Z)((0,l.Z)({sx:(0,l.Z)((0,l.Z)((0,l.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},n&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat((0,t.Fq)(e.palette.grey[500],.24))}}),r&&{transform:"scale(1.4)"}),i)},s),{},{children:[r&&c,u]}))}var g=["colors","selected","onChangeColor","sx"];function Z(e){var r=e.colors,n=e.selected,t=e.onChangeColor,i=e.sx,s=(0,d.Z)(e,g);return(0,o.jsx)(a.Z,{sx:i,children:r.map((function(e){var r="#FFFFFF"===e||"white"===e;return(0,o.jsx)(u.Z,(0,l.Z)({size:"small",value:e,color:"default",checked:n.includes(e),onChange:function(){return t(e)},icon:(0,o.jsx)(p,{whiteColor:r}),checkedIcon:(0,o.jsx)(p,{checked:!0,whiteColor:r}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},s),e)}))})}var f=n(47313),j=n(54299),m=n(33827),v=["colors"],b=(0,f.forwardRef)((function(e,r){var n=e.colors,t=(0,d.Z)(e,v);return(0,o.jsx)(j.Z,(0,l.Z)((0,l.Z)({row:!0,ref:r},t),{},{children:n.map((function(e){var r="#FFFFFF"===e||"white"===e;return(0,o.jsx)(m.Z,{value:e,color:"default",icon:(0,o.jsx)(p,{whiteColor:r}),checkedIcon:(0,o.jsx)(p,{checked:!0,whiteColor:r}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},e)}))}))}))},37903:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(1413),i=n(45987),a=n(57829),s=n(35898),o=n(61113),c=n(3404),l=n(90891),d=n(2135),u=n(46417);function x(e){var r=e.link,n=e.activeLast,i=e.disabled,s=r.name,o=r.href,c=r.icon,x=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return o?(0,u.jsx)(l.Z,{component:d.rU,to:o,sx:x,children:h}):(0,u.jsxs)(a.Z,{sx:x,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function p(e){var r=e.links,n=e.action,d=e.heading,p=e.moreLink,Z=e.activeLast,f=e.sx,j=(0,i.Z)(e,h),m=r[r.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},f),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(c.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(g,{})},j),{},{children:r.map((function(e){return(0,u.jsx)(x,{link:e,activeLast:Z,disabled:e.name===m},e.name||"")}))}))]}),n&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,u.jsx)(a.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function g(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},2943:function(e,r,n){n.d(r,{fY:function(){return c},yM:function(){return d},hN:function(){return f}});var t=n(1413),i=n(17592),a=n(17551),s=n(24631),o=n(46417),c=(0,i.ZP)((function(e){return(0,o.jsx)(s.Z,(0,t.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var r=e.theme;return{"& fieldset":{display:"none"},"& select":(0,t.Z)((0,t.Z)({},r.typography.subtitle2),{},{padding:r.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(r.shape.borderRadius),backgroundColor:(0,a.Fq)(r.palette.grey[500],.08)}}})),l=n(4942),d=(0,i.ZP)(s.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var r=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:r,border:"solid 1px ".concat((0,a.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,t.Z)({boxShadow:n.customShadows.z20},r&&(0,l.Z)({},n.breakpoints.up("sm"),{width:r+60}))}}})),u=n(45987),x=n(47313),h=n(35898),p=n(47131),g=n(10978),Z=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],f=(0,x.forwardRef)((function(e,r){var n=e.quantity,i=e.onIncrease,s=e.onDecrease,c=e.disabledIncrease,l=e.disabledDecrease,d=e.sx,x=(0,u.Z)(e,Z);return(0,o.jsxs)(h.Z,(0,t.Z)((0,t.Z)({ref:r,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,t.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,a.Fq)(e.palette.grey[500],.32))}},d)},x),{},{children:[(0,o.jsx)(p.Z,{size:"small",color:"inherit",onClick:s,disabled:l,sx:{color:"text.secondary"},children:(0,o.jsx)(g.Z,{icon:"eva:minus-fill",width:16})}),n,(0,o.jsx)(p.Z,{size:"small",color:"inherit",onClick:i,disabled:c,sx:{color:"text.secondary"},children:(0,o.jsx)(g.Z,{icon:"eva:plus-fill",width:16})})]}))}))},75944:function(e,r,n){n.d(r,{i4:function(){return w},Ml:function(){return m},n6:function(){return Z},ZE:function(){return d},M2:function(){return l},Py:function(){return v},JJ:function(){return h}});var t=n(46417);var i=n(1413),a=n(36459),s=n(9019),o=n(84488),c=n(57829);function l(e){var r=Object.assign({},((0,a.Z)(e),e));return(0,t.jsxs)(s.ZP,(0,i.Z)((0,i.Z)({item:!0,xs:12,sm:6,md:3},r),{},{children:[(0,t.jsx)(o.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,t.jsxs)(c.Z,{sx:{display:"flex",mt:1.5},children:[(0,t.jsx)(o.Z,{variant:"circular",sx:{width:40,height:40}}),(0,t.jsx)(o.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]}))}function d(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,t.jsxs)(c.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,t.jsx)(o.Z,{variant:"circular",width:64,height:64}),(0,t.jsxs)(c.Z,{sx:{flexGrow:1,ml:2},children:[(0,t.jsx)(o.Z,{variant:"text",height:20}),(0,t.jsx)(o.Z,{variant:"text",height:20}),(0,t.jsx)(o.Z,{variant:"text",height:20})]})]})]})}var u=n(73428),x=n(35898);function h(e){var r=Object.assign({},((0,a.Z)(e),e));return(0,t.jsxs)(u.Z,(0,i.Z)((0,i.Z)({},r),{},{children:[(0,t.jsx)(o.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,t.jsxs)(x.Z,{spacing:2,sx:{p:3},children:[(0,t.jsx)(o.Z,{variant:"text",sx:{width:.5}}),(0,t.jsxs)(x.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsxs)(x.Z,{direction:"row",children:[(0,t.jsx)(o.Z,{variant:"circular",sx:{width:16,height:16}}),(0,t.jsx)(o.Z,{variant:"circular",sx:{width:16,height:16}}),(0,t.jsx)(o.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,t.jsx)(o.Z,{variant:"text",sx:{width:40}})]})]})]}))}var p=n(45987),g=["sx"];function Z(e){var r=e.sx,n=(0,p.Z)(e,g);return(0,t.jsxs)(x.Z,(0,i.Z)((0,i.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,i.Z)({px:3,py:1},r)},n),{},{children:[(0,t.jsx)(o.Z,{variant:"circular",width:32,height:32}),(0,t.jsx)(o.Z,{variant:"text",sx:{width:.5,height:16}})]}))}var f=n(93433),j=n(70501);function m(e){var r=Object.assign({},((0,a.Z)(e),e));return(0,t.jsx)(c.Z,(0,i.Z)((0,i.Z)({gap:3,display:"grid",gridTemplateColumns:"repeat(4, 1fr)"},r),{},{children:(0,f.Z)(Array(3)).map((function(e,r){return(0,t.jsx)(j.Z,{variant:"outlined",sx:{p:2.5,width:310},children:(0,t.jsxs)(x.Z,{spacing:2,children:[(0,t.jsx)(o.Z,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===r&&(0,t.jsx)(o.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==r&&(0,t.jsx)(o.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},r)}))}))}function v(e){var r=Object.assign({},((0,a.Z)(e),e));return(0,t.jsxs)(s.ZP,(0,i.Z)((0,i.Z)({container:!0,spacing:3},r),{},{children:[(0,t.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,t.jsx)(o.Z,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),(0,t.jsxs)(s.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,t.jsx)(o.Z,{variant:"circular",width:80,height:80}),(0,t.jsx)(o.Z,{variant:"text",height:240}),(0,t.jsx)(o.Z,{variant:"text",height:40}),(0,t.jsx)(o.Z,{variant:"text",height:40}),(0,t.jsx)(o.Z,{variant:"text",height:40})]})]}))}var b=["sx"];function w(e){var r=e.sx,n=(0,p.Z)(e,b);return(0,t.jsxs)(x.Z,(0,i.Z)((0,i.Z)({spacing:1,direction:"row",alignItems:"center",sx:(0,i.Z)({px:3,py:1.5},r)},n),{},{children:[(0,t.jsx)(o.Z,{variant:"circular",width:48,height:48}),(0,t.jsxs)(x.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,t.jsx)(o.Z,{variant:"text",sx:{width:.5,height:16}}),(0,t.jsx)(o.Z,{variant:"text",sx:{width:.25,height:12}})]})]}))}},99431:function(e,r,n){n.r(r),n.d(r,{default:function(){return Ie}});var t=n(29439),i=n(65964),a=n(47313),s=n(68520),o=n.n(s),c=n(72471),l=n(49566),d=n(75627),u=n(70178),x=n(35898),h=n(61113),p=n(1738),g=n(3880),Z=n(76025),f=n(50470),j=n(37903),m=n(59519),v=n(1413),b=n(46725),w=n(19860),y=n(66212),C=n(57829),k=n(24193),F=n(10978),R=n(46417);function I(e){var r=e.isFiltered,n=e.onResetFilter,t=(0,w.Z)(),i=(0,d.Gc)(),a=i.watch,s=i.setValue,o=a(),c=o.gender,l=o.category,u=o.colors,h=o.priceRange,p=o.rating,g=h[0],Z=h[1];return(0,R.jsxs)(x.Z,{flexGrow:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!c.length&&(0,R.jsx)(S,{label:"Gender:",children:c.map((function(e){return(0,R.jsx)(y.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=c.filter((function(r){return r!==e}));s("gender",r)}(e)},sx:{m:.5}},e)}))}),"All"!==l&&(0,R.jsx)(S,{label:"Category:",children:(0,R.jsx)(y.Z,{size:"small",label:l,onDelete:function(){s("category","All")},sx:{m:.5}})}),!!u.length&&(0,R.jsx)(S,{label:"Colors:",children:u.map((function(e){return(0,R.jsx)(y.Z,{size:"small",label:(0,R.jsx)(C.Z,{sx:{width:20,height:20,bgcolor:e,borderRadius:"50%",border:"solid 1px ".concat(t.palette.divider)}}),onDelete:function(){return function(e){var r=u.filter((function(r){return r!==e}));s("colors",r)}(e)},sx:{m:.5,color:t.palette.getContrastText(e),"& .MuiChip-label":{pl:.25}}},e)}))}),(0!==g||200!==Z)&&(0,R.jsx)(S,{label:"Price:",children:(0,R.jsx)(y.Z,{size:"small",label:"$".concat(g," - ").concat(Z),onDelete:function(){s("priceRange",[0,200])},sx:{m:.5}})}),!!p&&(0,R.jsx)(S,{label:"Rating:",children:(0,R.jsx)(y.Z,{size:"small",label:(0,b.G)(p),onDelete:function(){s("rating","")},sx:{m:.5}})}),r&&(0,R.jsx)(k.Z,{color:"error",size:"small",onClick:n,startIcon:(0,R.jsx)(F.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}function S(e){var r=e.label,n=e.children,t=e.sx;return(0,R.jsxs)(x.Z,{direction:"row",alignItems:"stretch",sx:(0,v.Z)({m:.5,borderRadius:1,overflow:"hidden",border:function(e){return"solid 1px ".concat(e.palette.divider)}},t),children:[(0,R.jsx)(x.Z,{component:"span",direction:"row",alignItems:"center",sx:{px:1,typography:"subtitle2",color:"text.secondary",bgcolor:"background.neutral",borderRight:function(e){return"solid 1px ".concat(e.palette.divider)}},children:r}),(0,R.jsx)(x.Z,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:n})]})}var P=n(74165),M=n(15861),A=n(73709),z=n(2135),E=n(73428),B=n(42420),D=n(90891),O=n(48148),T=n(16528),L=n(9651);function W(e){var r=e.product,n=r.id,t=r.name,i=r.cover,a=r.price,s=r.colors,o=r.status,c=r.available,l=r.sizes,d=r.priceSale,u=(0,p.I0)(),h=Z.vB.eCommerce.view((0,A.o)(t)),f=function(){var e=(0,M.Z)((0,P.Z)().mark((function e(){var r;return(0,P.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={id:n,name:t,cover:i,available:c,price:a,colors:[s[0]],size:l[0],quantity:1};try{u((0,g.Xq)(r))}catch(o){console.error(o)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,R.jsxs)(E.Z,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[(0,R.jsxs)(C.Z,{sx:{position:"relative",p:1},children:[o&&(0,R.jsx)(T.Z,{variant:"filled",color:"sale"===o?"error":"info",sx:{top:16,right:16,zIndex:9,position:"absolute",textTransform:"uppercase"},children:o}),(0,R.jsx)(B.Z,{color:"warning",size:"medium",className:"add-cart-btn",onClick:f,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:function(e){return e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter})}},children:(0,R.jsx)(F.Z,{icon:"ic:round-add-shopping-cart"})}),(0,R.jsx)(L.Z,{alt:t,src:"https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/hero-01-free-img.png",ratio:"1/1",sx:{borderRadius:1.5}})]}),(0,R.jsxs)(x.Z,{spacing:2.5,sx:{p:3},children:[(0,R.jsx)(D.Z,{component:z.rU,to:h,color:"inherit",variant:"subtitle2",noWrap:!0,children:t}),(0,R.jsx)(x.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,R.jsxs)(x.Z,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[d&&(0,R.jsx)(C.Z,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:(0,O.e_)(d)}),(0,R.jsx)(C.Z,{component:"span",children:(0,O.e_)(a)})]})})]})]})}var q=n(93433),G=n(45987),_=n(75944),Y=["products","loading"];function N(e){var r=e.products,n=e.loading,t=(0,G.Z)(e,Y);return console.log(r,"products"),(0,R.jsx)(C.Z,(0,v.Z)((0,v.Z)({gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}},t),{},{children:(n?(0,q.Z)(Array(12)):r).map((function(e,r){return e?(0,R.jsx)(W,{product:e},e.id):(0,R.jsx)(_.JJ,{},r)}))}))}var U=n(51405),$=n(90121),V=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High - Low"},{value:"priceAsc",label:"Price: Low - High"}];function H(e){return{featured:"Featured",newest:"Newest",priceDesc:"Price: High - Low",priceAsc:"Price: Low - High"}[e]}function Q(){var e=(0,d.Gc)().control,r=(0,a.useState)(null),n=(0,t.Z)(r,2),i=n[0],s=n[1],o=function(e){s(e.currentTarget)},c=function(){s(null)};return(0,R.jsx)(d.Qr,{name:"sortBy",control:e,render:function(e){var r=e.field;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.Z,{disableRipple:!0,color:"inherit",onClick:o,endIcon:(0,R.jsx)(F.Z,{icon:i?"eva:chevron-up-fill":"eva:chevron-down-fill"}),sx:{fontWeight:"fontWeightMedium"},children:["Sort By:",(0,R.jsx)(C.Z,{component:"span",sx:{color:"text.secondary",ml:.5},children:H(r.value)})]}),(0,R.jsx)($.Z,{open:i,onClose:c,children:V.map((function(e){return(0,R.jsx)(U.Z,{selected:e.value===r.value,onClick:function(){c(),r.onChange(e.value)},children:e.label},e.value)}))})]})}})}var J=n(17551),K=n(46923),X=n(47131),ee=n(19536),re=n(54299),ne=n(83929),te=n(33827),ie=n(55942),ae=n(84513),se=n(56605),oe=n(30404),ce=n(59743),le=n(86121),de=[{label:"Men",value:"Men"},{label:"Women",value:"Women"},{label:"Kids",value:"Kids"}],ue=[{label:"All",value:"All"},{label:"Shose",value:"Shose"},{label:"Apparel",value:"Apparel"},{label:"Accessories",value:"Accessories"}],xe=["up4Star","up3Star","up2Star","up1Star"],he=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function pe(e){var r=e.open,n=e.onOpen,t=e.onClose,i=e.isDefault,a=e.onResetFilter,s=(0,d.Gc)().control,o=(0,q.Z)(Array(21)).map((function(e,r){var n=10*r,t=0===r?"$".concat(n):"".concat(n);return{value:n,label:r%4?"":t}}));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k.Z,{disableRipple:!0,color:"inherit",endIcon:(0,R.jsx)(F.Z,{icon:"ic:round-filter-list"}),onClick:n,children:"Filters"}),(0,R.jsxs)(K.ZP,{anchor:"right",open:r,onClose:t,BackdropProps:{invisible:!0},PaperProps:{sx:{width:oe.w$.W_BASE}},children:[(0,R.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pl:2,pr:1,py:2},children:[(0,R.jsx)(h.Z,{variant:"subtitle1",children:"Filters"}),(0,R.jsx)(X.Z,{onClick:t,children:(0,R.jsx)(F.Z,{icon:"eva:close-fill"})})]}),(0,R.jsx)(ee.Z,{}),(0,R.jsx)(ce.Z,{children:(0,R.jsxs)(x.Z,{spacing:3,sx:{p:2.5},children:[(0,R.jsxs)(x.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{variant:"subtitle1",children:" Gender "}),(0,R.jsx)(f.s2,{name:"gender",options:de,sx:{width:1}})]}),(0,R.jsxs)(x.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{variant:"subtitle1",children:" Category "}),(0,R.jsx)(f.km,{name:"category",options:ue})]}),(0,R.jsxs)(x.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{variant:"subtitle1",children:" Color "}),(0,R.jsx)(d.Qr,{name:"colors",control:s,render:function(e){var r=e.field;return(0,R.jsx)(le.b8,{selected:r.value,colors:he,onChangeColor:function(e){return r.onChange((n=r.value,t=e,n.includes(t)?n.filter((function(e){return e!==t})):[].concat((0,q.Z)(n),[t])));var n,t},sx:{maxWidth:144}})}})]}),(0,R.jsxs)(x.Z,{spacing:1,sx:{pb:2},children:[(0,R.jsx)(h.Z,{variant:"subtitle1",sx:{flexGrow:1},children:"Price"}),(0,R.jsxs)(x.Z,{direction:"row",spacing:2,children:[(0,R.jsx)(ge,{type:"min"}),(0,R.jsx)(ge,{type:"max"})]}),(0,R.jsx)(f.kk,{name:"priceRange",step:10,min:0,max:200,marks:o,getAriaValueText:function(e){return"$".concat(e)},valueLabelFormat:function(e){return"$".concat(e)},sx:{alignSelf:"center",width:"calc(100% - 20px)"}})]}),(0,R.jsxs)(x.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{variant:"subtitle1",children:"Rating"}),(0,R.jsx)(d.Qr,{name:"rating",control:s,render:function(e){var r=e.field;return(0,R.jsx)(re.Z,(0,v.Z)((0,v.Z)({},r),{},{children:xe.map((function(e,n){return(0,R.jsx)(ne.Z,{value:e,control:(0,R.jsx)(te.Z,{disableRipple:!0,color:"default",icon:(0,R.jsx)(ie.Z,{readOnly:!0,value:4-n}),checkedIcon:(0,R.jsx)(ie.Z,{readOnly:!0,value:4-n}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:(0,v.Z)({my:.5,borderRadius:1,"&:hover":{opacity:.48}},r.value.includes(e)&&{bgcolor:"action.selected"})},e)}))}))}})]})]})}),(0,R.jsx)(C.Z,{sx:{p:2.5},children:(0,R.jsx)(ae.Z,{color:"error",variant:"dot",anchorOrigin:{vertical:"top",horizontal:"left"},invisible:i,sx:{width:1},children:(0,R.jsx)(k.Z,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",onClick:a,startIcon:(0,R.jsx)(F.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})})})]})]})}function ge(e){var r=e.type,n=(0,d.Gc)(),t=n.control,i=n.setValue;return(0,R.jsx)(d.Qr,{name:"priceRange",control:t,render:function(e){var n=e.field,t="min"===r,a=n.value[0],s=n.value[1];return(0,R.jsxs)(x.Z,{direction:"row",spacing:.5,alignItems:"center",sx:{width:1},children:[(0,R.jsx)(h.Z,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightBold"},children:"".concat(r," ($)")}),(0,R.jsx)(se.Z,{disableUnderline:!0,fullWidth:!0,size:"small",value:t?a:s,onChange:function(e){return t?n.onChange([Number(e.target.value),s]):n.onChange([a,Number(e.target.value)])},onBlur:function(){return function(e){var r=e[0],n=e[1];r<0&&i("priceRange",[0,n]),r>200&&i("priceRange",[200,n]),n<0&&i("priceRange",[r,0]),n>200&&i("priceRange",[r,200])}(n.value)},inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{pr:1,py:.5,borderRadius:.75,typography:"body2",bgcolor:function(e){return(0,J.Fq)(e.palette.grey[500],.12)},"& .MuiInput-input":{p:0,textAlign:"right"}}})]})}})}var Ze=n(83870),fe=n.n(Ze),je=n(46642),me=n.n(je),ve=n(58467),be=n(19065),we=n(41727),ye=n(85817),Ce=n(2943),ke=n(89902);function Fe(){var e=(0,ve.s0)(),r=(0,a.useState)(""),n=(0,t.Z)(r,2),i=n[0],s=n[1],o=(0,a.useState)([]),c=(0,t.Z)(o,2),l=c[0],d=c[1],u=function(){var e=(0,M.Z)((0,P.Z)().mark((function e(r){var n;return(0,P.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s(r),!r){e.next=7;break}return e.next=5,ye.Z.get("/api/products/search",{params:{query:r}});case 5:n=e.sent,d(n.data.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),x=function(r){e(Z.vB.eCommerce.view((0,A.o)(r)))},p=function(e){"Enter"===e.key&&x(i)};return(0,R.jsx)(be.Z,{size:"small",autoHighlight:!0,popupIcon:null,options:l,onInputChange:function(e,r){return u(r)},getOptionLabel:function(e){return e.name},noOptionsText:(0,R.jsx)(ke.Z,{query:i}),isOptionEqualToValue:function(e,r){return e.id===r.id},componentsProps:{popper:{sx:{width:"280px !important"}},paper:{sx:{"& .MuiAutocomplete-option":{px:"8px !important"}}}},renderInput:function(e){return(0,R.jsx)(Ce.yM,(0,v.Z)((0,v.Z)({},e),{},{width:220,placeholder:"Search...",onKeyUp:p,InputProps:(0,v.Z)((0,v.Z)({},e.InputProps),{},{startAdornment:(0,R.jsx)(we.Z,{position:"start",children:(0,R.jsx)(F.Z,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})})}))},renderOption:function(e,r,n){var t=n.inputValue,i=r.name,a=r.cover,s=me()(i,t),o=fe()(i,s);return(0,R.jsxs)("li",(0,v.Z)((0,v.Z)({},e),{},{children:[(0,R.jsx)(L.Z,{alt:a,src:a,sx:{width:48,height:48,borderRadius:1,flexShrink:0,mr:1.5}}),(0,R.jsx)(D.Z,{underline:"none",onClick:function(){return x(i)},children:o.map((function(e,r){return(0,R.jsx)(h.Z,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},r)}))})]}))}})}var Re=n(63786);function Ie(){var e=(0,m.K$)().themeStretch,r=(0,p.I0)(),n=(0,p.v9)((function(e){return e.product})),s=n.products,v=n.checkout,b=(0,a.useState)(!1),w=(0,t.Z)(b,2),y=w[0],C=w[1],k=(0,d.cI)({defaultValues:{gender:[],category:"All",colors:[],priceRange:[0,200],rating:"",sortBy:"featured"}}),F=k.reset,S=k.watch,P=k.formState.dirtyFields,M=!P.gender&&!P.category&&!P.colors&&!P.priceRange&&!P.rating||!1,A=function(e,r){var n=r.gender,t=r.category,i=r.colors,a=r.priceRange,s=r.rating,c=r.sortBy,l=a[0],d=a[1];"featured"===c&&(e=o()(e,["sold"],["desc"]));"newest"===c&&(e=o()(e,["createdAt"],["desc"]));"priceDesc"===c&&(e=o()(e,["price"],["desc"]));"priceAsc"===c&&(e=o()(e,["price"],["asc"]));n.length&&(e=e.filter((function(e){return n.includes(e.gender)})));"All"!==t&&(e=e.filter((function(e){return e.category===t})));i.length&&(e=e.filter((function(e){return e.colors.some((function(e){return i.includes(e)}))})));0===l&&200===d||(e=e.filter((function(e){return e.price>=l&&e.price<=d})));s&&(e=e.filter((function(e){var r=function(e){return"up4Star"===e?4:"up3Star"===e?3:"up2Star"===e?2:1};return e.totalRating>r(s)})));return e}(s,S());(0,a.useEffect)((function(){r((0,g.Xp)())}),[r]);var z=function(){F()};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(i.ql,{children:(0,R.jsx)("title",{children:" Ecommerce: Shop | Minimal UI"})}),(0,R.jsx)(f.ZP,{methods:k,children:(0,R.jsxs)(u.Z,{maxWidth:!e&&"lg",children:[(0,R.jsx)(j.Z,{heading:"Shop",links:[{name:"Dashboard",href:Z.vB.root},{name:"E-Ordering",href:Z.vB.eCommerce.root}]}),(0,R.jsxs)(x.Z,{spacing:2,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:2},children:[(0,R.jsx)(Fe,{}),(0,R.jsx)(c.EM,{data:l.xg}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsx)(c.EM,{data:l.Y2}),(0,R.jsxs)(x.Z,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[(0,R.jsx)(pe,{isDefault:M,open:y,onOpen:function(){C(!0)},onClose:function(){C(!1)},onResetFilter:z}),(0,R.jsx)(Q,{})]})]}),(0,R.jsx)(x.Z,{sx:{mb:3},children:!M&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(h.Z,{variant:"body2",gutterBottom:!0,children:[(0,R.jsx)("strong",{children:A.length}),"\xa0Products found"]}),(0,R.jsx)(I,{isFiltered:!M,onResetFilter:z})]})}),(0,R.jsx)(N,{products:A,loading:!s.length&&M}),(0,R.jsx)(Re.Z,{totalItems:v.totalItems})]})})]})}},63786:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(2135),i=n(17592),a=n(84513),s=n(76025),o=n(10978),c=n(46417),l=(0,i.ZP)("div")((function(e){var r=e.theme;return{zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:r.spacing(16),height:r.spacing(5),paddingLeft:r.spacing(2),paddingRight:r.spacing(2),paddingTop:r.spacing(1.25),boxShadow:r.customShadows.z20,color:r.palette.text.primary,backgroundColor:r.palette.background.paper,borderTopLeftRadius:2*Number(r.shape.borderRadius),borderBottomLeftRadius:2*Number(r.shape.borderRadius),transition:r.transitions.create("opacity"),"&:hover":{opacity:.72}}}));function d(e){var r=e.totalItems;return(0,c.jsx)(t.rU,{to:s.vB.eCommerce.checkout,children:(0,c.jsx)(l,{children:(0,c.jsx)(a.Z,{showZero:!0,badgeContent:r,color:"error",max:99,children:(0,c.jsx)(o.Z,{icon:"eva:shopping-cart-fill",width:24})})})})}}}]);