"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[6954],{66954:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var i=r(65964),t=r(73709),a=r(58467),u=r(70178),o=r(76025),c=r(96626),s=r(59519),d=r(37903),l=r(63312),f=r(46417);function m(){var n=(0,s.K$)().themeStretch,e=(0,a.UO)().name,r=c.Xz.find((function(n){return(0,t.o)(n.name)===e}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.ql,{children:(0,f.jsx)("title",{children:" User: Edit user | Minimal UI"})}),(0,f.jsxs)(u.Z,{maxWidth:!n&&"lg",children:[(0,f.jsx)(d.Z,{heading:"Edit user",links:[{name:"Dashboard",href:o.vB.root},{name:"User",href:o.vB.user.list},{name:null===r||void 0===r?void 0:r.name}]}),(0,f.jsx)(l.Z,{isEdit:!0,currentUser:r})]})]})}},59023:function(n,e,r){r.d(e,{$:function(){return a}});var i=r(66797),t=r(26675);function a(n,e){return void 0===e&&(e={}),(0,t.B)(n,(0,i.pi)({delimiter:"."},e))}},26675:function(n,e,r){r.d(e,{B:function(){return u}});function i(n){return n.toLowerCase()}var t=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function u(n,e){void 0===e&&(e={});for(var r=e.splitRegexp,u=void 0===r?t:r,c=e.stripRegexp,s=void 0===c?a:c,d=e.transform,l=void 0===d?i:d,f=e.delimiter,m=void 0===f?" ":f,h=o(o(n,u,"$1\0$2"),s,"\0"),v=0,p=h.length;"\0"===h.charAt(v);)v++;for(;"\0"===h.charAt(p-1);)p--;return h.slice(v,p).split("\0").map(l).join(m)}function o(n,e,r){return e instanceof RegExp?n.replace(e,r):e.reduce((function(n,e){return n.replace(e,r)}),n)}},73709:function(n,e,r){r.d(e,{o:function(){return a}});var i=r(66797),t=r(59023);function a(n,e){return void 0===e&&(e={}),(0,t.$)(n,(0,i.pi)({delimiter:"-"},e))}}}]);