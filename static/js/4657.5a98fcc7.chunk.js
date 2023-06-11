(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[4657],{84657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var i=n(29439),r=n(65964),l=n(47313),o=n(88718),a=n.n(o),c=n(58467),s=n(19860),u=n(70178),d=n(73428),f=n(35898),h=n(19536),x=n(5297),v=n(65280),g=n(51629),p=n(61689),m=n(47131),j=n(66835),Z=n(57861),w=n(24193),S=n(76025),b=n(881),D=n(96626),C=n(16528),y=n(10978),k=n(59743),P=n(49657),R=n(37903),F=n(59519),I=n(31126),_=n(17551),B=n(85281),L=n(61113),O=n(57829),N=n(48148),A=n(46417);function E(e){var t=e.title,n=e.total,i=e.icon,r=e.color,l=e.percent,o=e.price;return(0,A.jsxs)(f.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[(0,A.jsxs)(f.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[(0,A.jsx)(y.Z,{icon:i,width:24,sx:{color:r,position:"absolute"}}),(0,A.jsx)(B.Z,{variant:"determinate",value:l,size:56,thickness:4,sx:{color:r,opacity:.48}}),(0,A.jsx)(B.Z,{variant:"determinate",value:100,size:56,thickness:4,sx:{top:0,left:0,opacity:.48,position:"absolute",color:function(e){return(0,_.Fq)(e.palette.grey[500],.16)}}})]}),(0,A.jsxs)(f.Z,{spacing:.5,sx:{ml:2},children:[(0,A.jsx)(L.Z,{variant:"h6",children:t}),(0,A.jsxs)(L.Z,{variant:"subtitle2",children:[(0,N.v1)(n)," ",(0,A.jsx)(O.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"invoices"})]}),(0,A.jsx)(L.Z,{variant:"subtitle2",sx:{color:r},children:(0,N.e_)(o)})]})]})}var W=n(60705),z=["all","full stack development","backend development","ui design","ui/ux design","front end development"],T=[{id:"invoiceNumber",label:"Client",align:"left"},{id:"createDate",label:"Create",align:"left"},{id:"dueDate",label:"Due",align:"left"},{id:"price",label:"Amount",align:"center",width:140},{id:"sent",label:"Sent",align:"center",width:140},{id:"status",label:"Status",align:"left"},{id:""}];function q(){var e=(0,s.Z)(),t=(0,F.K$)().themeStretch,n=(0,c.s0)(),o=(0,I.x6)({defaultOrderBy:"createDate"}),_=o.dense,B=o.page,L=o.order,O=o.orderBy,N=o.rowsPerPage,q=o.setPage,K=o.selected,M=o.setSelected,Q=o.onSelectRow,$=o.onSelectAllRows,U=o.onSort,V=o.onChangeDense,G=o.onChangePage,H=o.onChangeRowsPerPage,J=(0,l.useState)(D.Ot),X=(0,i.Z)(J,2),Y=X[0],ee=X[1],te=(0,l.useState)(""),ne=(0,i.Z)(te,2),ie=ne[0],re=ne[1],le=(0,l.useState)(!1),oe=(0,i.Z)(le,2),ae=oe[0],ce=oe[1],se=(0,l.useState)("all"),ue=(0,i.Z)(se,2),de=ue[0],fe=ue[1],he=(0,l.useState)("all"),xe=(0,i.Z)(he,2),ve=xe[0],ge=xe[1],pe=(0,l.useState)(null),me=(0,i.Z)(pe,2),je=me[0],Ze=me[1],we=(0,l.useState)(null),Se=(0,i.Z)(we,2),be=Se[0],De=Se[1];console.log(Y,"tableDatatableDatatableData");var Ce=function(e){var t=e.inputData,n=e.comparator,i=e.filterName,r=e.filterStatus,l=e.filterService,o=e.filterStartDate,a=e.filterEndDate,c=t.map((function(e,t){return[e,t]}));c.sort((function(e,t){var i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=c.map((function(e){return e[0]})),i&&(t=t.filter((function(e){return-1!==e.invoiceNumber.toLowerCase().indexOf(i.toLowerCase())||-1!==e.invoiceTo.name.toLowerCase().indexOf(i.toLowerCase())})));"all"!==r&&(t=t.filter((function(e){return e.status===r})));"all"!==l&&(t=t.filter((function(e){return e.items.some((function(e){return e.service===l}))})));o&&a&&(t=t.filter((function(e){return(0,b.IO)(e.createDate)>=(0,b.IO)(o)&&(0,b.IO)(e.createDate)<=(0,b.IO)(a)})));return t}({inputData:Y,comparator:(0,I.sQ)(L,O),filterName:ie,filterService:ve,filterStatus:de,filterStartDate:be,filterEndDate:je}),ye=Ce.slice(B*N,B*N+N),ke=_?56:76,Pe="all"!==de||""!==ie||"all"!==ve||!!be&&!!je,Re=!Ce.length&&!!ie||!Ce.length&&!!de||!Ce.length&&!!ve||!Ce.length&&!!je||!Ce.length&&!!be,Fe=function(e){return Y.filter((function(t){return t.status===e})).length},Ie=function(e){return a()(Y.filter((function(t){return t.status===e})),"totalPrice")},_e=function(e){return Fe(e)/Y.length*100},Be=[{value:"all",label:"All",color:"info",count:Y.length},{value:"paid",label:"Completed",color:"success",count:Fe("paid")},{value:"unpaid",label:"Pending",color:"warning",count:Fe("unpaid")},{value:"overdue",label:"Canceled",color:"error",count:Fe("overdue")}],Le=function(){ce(!1)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r.ql,{children:(0,A.jsx)("title",{children:" Invoice: List | Minimal UI"})}),(0,A.jsxs)(u.Z,{maxWidth:!t&&"lg",children:[(0,A.jsx)(R.Z,{heading:"Transaction List",links:[{name:"Dashboard",href:S.vB.root},{name:"Invoices",href:S.vB.invoice.root},{name:"List"}]}),(0,A.jsx)(d.Z,{sx:{mb:5},children:(0,A.jsx)(k.Z,{children:(0,A.jsxs)(f.Z,{direction:"row",divider:(0,A.jsx)(h.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,A.jsx)(E,{title:"Total",total:Y.length,percent:100,price:a()(Y,"totalPrice"),icon:"ic:round-receipt",color:e.palette.info.main}),(0,A.jsx)(E,{title:"Completed",total:Fe("paid"),percent:_e("paid"),price:Ie("paid"),icon:"eva:checkmark-circle-2-fill",color:e.palette.success.main}),(0,A.jsx)(E,{title:"Pending",total:Fe("unpaid"),percent:_e("unpaid"),price:Ie("unpaid"),icon:"eva:clock-fill",color:e.palette.warning.main}),(0,A.jsx)(E,{title:"Canceled",total:Fe("overdue"),percent:_e("overdue"),price:Ie("overdue"),icon:"eva:bell-fill",color:e.palette.error.main})]})})}),(0,A.jsxs)(d.Z,{children:[(0,A.jsx)(x.Z,{value:de,onChange:function(e,t){q(0),fe(t)},sx:{px:2,bgcolor:"background.neutral"},children:Be.map((function(e){return(0,A.jsx)(v.Z,{value:e.value,label:e.label,icon:(0,A.jsx)(C.Z,{color:e.color,sx:{mr:1},children:e.count})},e.value)}))}),(0,A.jsx)(h.Z,{}),(0,A.jsx)(W.o,{isFiltered:Pe,filterName:ie,filterService:ve,filterEndDate:je,onFilterName:function(e){q(0),re(e.target.value)},optionsService:z,onResetFilter:function(){re(""),fe("all"),ge("all"),Ze(null),De(null)},filterStartDate:be,onFilterService:function(e){q(0),ge(e.target.value)},onFilterStartDate:function(e){De(e)},onFilterEndDate:function(e){Ze(e)}}),(0,A.jsxs)(g.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,A.jsx)(I.Z4,{dense:_,numSelected:K.length,rowCount:Y.length,onSelectAllRows:function(e){return $(e,Y.map((function(e){return e.id})))},action:(0,A.jsxs)(f.Z,{direction:"row",children:[(0,A.jsx)(p.Z,{title:"Sent",children:(0,A.jsx)(m.Z,{color:"primary",children:(0,A.jsx)(y.Z,{icon:"ic:round-send"})})}),(0,A.jsx)(p.Z,{title:"Download",children:(0,A.jsx)(m.Z,{color:"primary",children:(0,A.jsx)(y.Z,{icon:"eva:download-outline"})})}),(0,A.jsx)(p.Z,{title:"Print",children:(0,A.jsx)(m.Z,{color:"primary",children:(0,A.jsx)(y.Z,{icon:"eva:printer-fill"})})}),(0,A.jsx)(p.Z,{title:"Delete",children:(0,A.jsx)(m.Z,{color:"primary",onClick:function(){ce(!0)},children:(0,A.jsx)(y.Z,{icon:"eva:trash-2-outline"})})})]})}),(0,A.jsx)(k.Z,{children:(0,A.jsxs)(j.Z,{size:_?"small":"medium",sx:{minWidth:800},children:[(0,A.jsx)(I.K,{order:L,orderBy:O,headLabel:T,rowCount:Y.length,numSelected:K.length,onSort:U,onSelectAllRows:function(e){return $(e,Y.map((function(e){return e.id})))}}),(0,A.jsxs)(Z.Z,{children:[Ce.slice(B*N,B*N+N).map((function(e){return(0,A.jsx)(W.B,{row:e,selected:K.includes(e.id),onSelectRow:function(){return Q(e.id)},onViewRow:function(){return t=e.id,void n(S.vB.invoice.view(t));var t},onEditRow:function(){return t=e.id,void n(S.vB.invoice.edit(t));var t},onDeleteRow:function(){return function(e){var t=Y.filter((function(t){return t.id!==e}));M([]),ee(t),B>0&&ye.length<2&&q(B-1)}(e.id)}},e.id)})),(0,A.jsx)(I.$W,{height:ke,emptyRows:(0,I.fQ)(B,N,Y.length)}),(0,A.jsx)(I.et,{isNotFound:Re})]})]})})]}),(0,A.jsx)(I.S_,{count:Ce.length,page:B,rowsPerPage:N,onPageChange:G,onRowsPerPageChange:H,dense:_,onChangeDense:V})]})]}),(0,A.jsx)(P.Z,{open:ae,onClose:Le,title:"Delete",content:(0,A.jsxs)(A.Fragment,{children:["Are you sure want to delete ",(0,A.jsxs)("strong",{children:[" ",K.length," "]})," items?"]}),action:(0,A.jsx)(w.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var t=Y.filter((function(t){return!e.includes(t.id)}));if(M([]),ee(t),B>0)if(e.length===ye.length)q(B-1);else if(e.length===Ce.length)q(0);else if(e.length>ye.length){var n=Math.ceil((Y.length-e.length)/N)-1;q(n)}}(K),Le()},children:"Delete"})})]})}},88718:function(e,t,n){var i=n(81186),r=n(41790);e.exports=function(e,t){return e&&e.length?r(e,i(t,2)):0}}}]);