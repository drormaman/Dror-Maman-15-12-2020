(this["webpackJsonpshipping-tracker"]=this["webpackJsonpshipping-tracker"]||[]).push([[0],{176:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(0),a=n.n(i),c=n(16),o=n.n(c),s=(n(176),n(32)),l=n.n(s),u=n(59),j=n(17),d=n(91),b=n(21),m=n(14),x=n(18),p=Object(m.b)({key:"exchangeRateToIlsState",default:3.25}),h=Object(m.b)({key:"fetchingErrorState",default:!0}),O=n(319),f=n(320),v=n(288);function g(){var e=Object(j.a)(["\n\tcolor: rgb(244, 67, 54);\n"]);return g=function(){return e},e}function S(){var e=Object(j.a)(["\n\tdisplay: flex;\n"]);return S=function(){return e},e}function y(){var e=Object(j.a)(["\n\tcolor: white;\n\ttext-decoration: none;\n\tflex-grow: 1;\n\tpadding-right: 12px;\n\t&:visited {\n\t\tcolor: white;\n\t}\n\t&:hover {\n\t\ttext-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n\t}\n"]);return y=function(){return e},e}function w(){var e=Object(j.a)(["\n\tpadding-left: 12px;\n\tmargin-right: auto;\n\tdisplay: flex;\n\talign-items: baseline;\n"]);return w=function(){return e},e}var D=Object(x.a)(v.a)(w()),N=Object(x.a)(d.b)(y()),k=x.a.div(S()),I=Object(x.a)(v.a)(g()),P={textShadow:"0 0 3px rgba(0, 0, 0, 0.5)"},T=function(){return Object(r.jsx)(O.a,{children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(D,{variant:"h6",children:Object(r.jsx)(N,{to:"/",children:"Ship4U"})}),Object(r.jsxs)(k,{children:[Object(r.jsx)(N,{activeStyle:P,to:"/list",children:Object(r.jsx)(v.a,{variant:"subtitle1",children:"My Orders"})}),Object(r.jsx)(N,{activeStyle:P,to:"/received",children:Object(r.jsx)(v.a,{variant:"subtitle1",children:"Recieved Items"})})]})]})})};function C(e){var t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear().toString();return"".concat(t,"/").concat(n,"/").concat(r)}function A(e){return"".concat(e.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function B(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(l.a.mark((function e(){var t,n,r,i,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"ILS",e.prev=1,e.next=4,fetch("https://api.exchangeratesapi.io/latest?base=USD");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,i=r.rates,e.abrupt("return",i[t]);case 12:throw e.prev=12,e.t0=e.catch(1),new Error("There was a problem fetching the exchange rate");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function E(){var e=Object(j.a)(["\n\ttext-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n\tfont-weight: 300;\n\ttext-align: center;\n\n\t@media (max-width: 650px) {\n\t\tfont-size: 5em;\n\t\tpadding: 0 36px 18px;\n\t\ttext-align: left;\n\t}\n\t@media (max-width: 450px) {\n\t\tfont-size: 3em;\n\t\tpadding: 0 24px 18px;\n\t\ttext-align: left;\n\t}\n"]);return E=function(){return e},e}function z(){var e=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 75vh;\n"]);return z=function(){return e},e}var M=x.a.div(z()),q=Object(x.a)(v.a)(E()),L=function(){return Object(r.jsx)(M,{children:Object(r.jsxs)(q,{variant:"h1",color:"textSecondary",children:[Object(r.jsx)("span",{style:{fontWeight:500},children:"Ship4U"})," - Your next shipping tracker"]})})},R=n(148),$=n(7),F=n(336),U=n(327),J=n(114),V=n(333),Y=n(328),K=n(11),W=[{itemName:"iPhone 12",onlineStore:"Apple Store",price:799,estimatedDelivery:new Date("1/12/2021")},{itemName:"iPhone 12 Pro",onlineStore:"Apple Store",price:999,estimatedDelivery:new Date("1/12/2021")},{itemName:"iPhone 12 Pro Max",onlineStore:"Apple Store",price:1099,estimatedDelivery:new Date("1/12/2021")},{itemName:"iPhone 12 Mini",onlineStore:"Apple Store",price:699,estimatedDelivery:new Date("1/12/2021")},{itemName:"Nest Mini",onlineStore:"Google Store",price:49,estimatedDelivery:new Date("12/11/2021")},{itemName:"Nest Audio",onlineStore:"Google Store",price:99,estimatedDelivery:new Date("1/12/2021")},{itemName:"Pixel 5",onlineStore:"Google Store",price:699,estimatedDelivery:new Date("1/12/2021")},{itemName:"Chromecast",onlineStore:"Google Store",price:49,estimatedDelivery:new Date("1/12/2021")},{itemName:"Kindle 10th Gen",onlineStore:"Amazon",price:79,estimatedDelivery:new Date("1/12/2021")},{itemName:"Fire TV Stick",onlineStore:"Amazon",price:39,estimatedDelivery:new Date("12/11/2021")},{itemName:"Echo Dot",onlineStore:"Amazon",price:29,estimatedDelivery:new Date("12/11/2021")}],H=Object(m.b)({key:"itemsListState",default:W}),Q=Object(m.c)({key:"receivedItemsState",get:function(e){return function(e){return e.filter((function(e){return e.received})).sort((function(e,t){return t.estimatedDelivery.getTime()-e.estimatedDelivery.getTime()}))}((0,e.get)(H))}}),X=Object(m.c)({key:"orderedItemsState",get:function(e){return function(e){return e.filter((function(e){return!e.received})).sort((function(e,t){return e.estimatedDelivery.getTime()-t.estimatedDelivery.getTime()}))}((0,e.get)(H))}}),Z=Object(m.c)({key:"totalSumOfReceivedItemsState",get:function(e){return re((0,e.get)(Q))}}),_=Object(m.c)({key:"totalSumOfOrderedItemsState",get:function(e){return re((0,e.get)(X))}}),ee=Object(m.c)({key:"storesReceivedListState",get:function(e){return ne((0,e.get)(Q))}}),te=Object(m.c)({key:"storesOrderedListState",get:function(e){return ne((0,e.get)(X))}});function ne(e){var t=e.reduce((function(e,t){if(e[t.onlineStore]){var n=e[t.onlineStore];e[t.onlineStore]=Object(K.a)(Object(K.a)({},n),{},{numOfItems:n.numOfItems+1,sumOfItemsPrices:n.sumOfItemsPrices+t.price})}else e[t.onlineStore]={storeName:t.onlineStore,numOfItems:1,sumOfItemsPrices:t.price};return e}),{});return Object.values(t)}function re(e){return e.reduce((function(e,t){return e+t.price}),0)}var ie=n(162),ae=n(321);function ce(){var e=Object(j.a)(["\n\theight: 100px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-bottom: 30px;\n"]);return ce=function(){return e},e}function oe(){var e=Object(j.a)(["\n\tpadding: 8px 24px;\n\ttop: auto;\n\tbottom: 0;\n\t@media (max-width: 650px) {\n\t\tbottom: auto;\n\t\ttop: 48px;\n\t}\n"]);return oe=function(){return e},e}function se(){var e=Object(j.a)(["\n\tpadding-bottom: 16px;\n\t@media (max-width: 650px) {\n\t\tpadding-top: 36px;\n\t}\n"]);return se=function(){return e},e}function le(){var e=Object(j.a)(["\n\tflex-grow: 1;\n"]);return le=function(){return e},e}function ue(){var e=Object(j.a)(["\n\twidth: 100%;\n\toverflow-y: auto;\n\tbackground-color: #f5f5f5;\n\tmax-height: 70vh;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground: #bbb;\n\t\tborder-radius: 4px;\n\t}\n\t@media (max-width: 650px) {\n\t\tmax-height: 94vh;\n\t}\n"]);return ue=function(){return e},e}function je(){var e=Object(j.a)(["\n\tmax-width: 650px;\n\twidth: 100%;\n\tmargin: 50px auto;\n\tposition: relative;\n\t@media (max-width: 650px) {\n\t\tmargin: 0 auto;\n\t}\n"]);return je=function(){return e},e}var de=Object(x.a)(ie.a)(je()),be=x.a.div(ue()),me=Object(x.a)(ae.a)(le()),xe=x.a.div(se()),pe=Object(x.a)(O.a)(oe()),he=x.a.div(ce()),Oe=function(){return Object(r.jsx)(he,{children:Object(r.jsx)(v.a,{variant:"h5",children:"No Items To Show"})})},fe=n(323),ve=n(324),ge=n(322);function Se(){var e=Object(j.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return Se=function(){return e},e}function ye(){var e=Object(j.a)(["\n\tpadding: 16px;\n\tmargin-bottom: 12px;\n"]);return ye=function(){return e},e}var we=Object(x.a)(ge.a)(ye()),De=x.a.header(Se()),Ne=n(149),ke=n.n(Ne),Ie=function(e){var t=e.item,n=e.received,i=Object(m.d)(p),a=Object(m.e)(H);return Object(r.jsxs)(we,{children:[Object(r.jsxs)(De,{children:[Object(r.jsx)(v.a,{gutterBottom:!1,variant:"h6",children:t.itemName}),n?Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(ke.a,{fontSize:"small"}),Object(r.jsx)(v.a,{variant:"subtitle1",children:"Arrived"})]}):Object(r.jsx)(fe.a,{variant:"text",size:"small",color:"primary",onClick:function(e){a((function(e){return e.map((function(e){return t.itemName===e.itemName?Object(K.a)(Object(K.a)({},e),{},{received:!0}):e}))}))},children:"Mark as received"})]}),Object(r.jsx)(ve.a,{}),Object(r.jsx)(v.a,{variant:"subtitle2",children:t.onlineStore}),Object(r.jsxs)(v.a,{variant:"subtitle1",children:["Price: $".concat(A(t.price)),Object(r.jsx)(v.a,{variant:"subtitle2",component:"span",children:" ( \u20aa".concat(A(t.price*i)," )")})]}),!n&&Object(r.jsx)(v.a,{variant:"subtitle1",children:"Delivery EST date: ".concat(C(t.estimatedDelivery))})]})},Pe=function(e){var t=e.received,n=Object(m.d)(t?Q:X),i=Object(m.d)(h);return Object(r.jsxs)(xe,{children:[i&&Object(r.jsx)(I,{variant:"subtitle1",children:"Somthing went wrong - Exchange rates are not up-to-date"}),0!==n.length?n.map((function(e,n){return Object(r.jsx)(Ie,{item:e,received:t},n)})):Object(r.jsx)(Oe,{})]})},Te=n(150),Ce=n.n(Te),Ae=function(e){var t=e.store,n=Object(m.d)(p);return Object(r.jsxs)(we,{children:[Object(r.jsxs)(De,{children:[Object(r.jsx)(v.a,{gutterBottom:!1,variant:"h6",children:t.storeName}),Object(r.jsx)(Ce.a,{})]}),Object(r.jsx)(ve.a,{}),Object(r.jsx)(v.a,{variant:"subtitle1",children:"Number of products: ".concat(t.numOfItems)}),Object(r.jsxs)(v.a,{variant:"subtitle1",children:["Total products price: $".concat(A(t.sumOfItemsPrices)),Object(r.jsx)(v.a,{variant:"subtitle2",component:"span",children:" ( \u20aa".concat(A(t.sumOfItemsPrices*n)," )")})]})]})},Be=function(e){var t=e.received,n=Object(m.d)(t?ee:te);return Object(r.jsx)(xe,{children:0!==n.length?n.map((function(e,t){return Object(r.jsx)(Ae,{store:e},t)})):Object(r.jsx)(Oe,{})})},Ge=n(157),Ee=n.n(Ge),ze=n(31),Me=n(334),qe=n(326),Le=n(158),Re=n(65),$e=n(332);function Fe(){var e=Object(j.a)(["\n\theight: 60px;\n\twidth: 100%;\n\tmargin-bottom: 18px;\n"]);return Fe=function(){return e},e}function Ue(){var e=Object(j.a)(["\n\twidth: 70%;\n\tpadding: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n"]);return Ue=function(){return e},e}function Je(){var e=Object(j.a)(["\n\twidth: 100%;\n"]);return Je=function(){return e},e}function Ve(){var e=Object(j.a)(["\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n\twidth: 350px;\n\toutline: none;\n\tpadding: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]);return Ve=function(){return e},e}var Ye=Object(x.a)(ie.a)(Ve()),Ke=Object(x.a)($e.a)(Je()),We=x.a.form(Ue()),He=x.a.div(Fe()),Qe=function(e){var t=e.open,n=e.handleClose,i=Object(m.e)(H),a=Object(Le.a)({initialValues:{itemName:"",onlineStore:"",price:0,estDate:""},validationSchema:Re.c({itemName:Re.d().required("Item name is required"),onlineStore:Re.d().required("Store name is required"),price:Re.b().required("Please enter item's price"),estDate:Re.a().required("Please enter a estimated delivery date")}),onSubmit:function(e){var t=e.itemName,r=e.onlineStore,a=e.price,c=e.estDate;console.log("form submitted"),console.log(t,r,a,c);var o,s=""===c?new Date:new Date(c);o={itemName:t,onlineStore:r,price:a,estimatedDelivery:s},i((function(e){return[].concat(Object(ze.a)(e),[o])})),n()}}),c=a.values,o=a.handleSubmit,s=a.handleChange,l=a.touched,u=a.handleBlur,j=a.errors;return Object(r.jsx)(Me.a,{open:t,onClose:n,children:Object(r.jsxs)(Ye,{children:[Object(r.jsx)(v.a,{variant:"h5",children:"Add Item"}),Object(r.jsxs)(We,{onSubmit:o,children:[Object(r.jsx)(He,{children:Object(r.jsx)(Ke,{label:"Item name",name:"itemName",value:c.itemName,onChange:s,onBlur:u,placeholder:"Samsung Galaxy Note 10",helperText:l.itemName&&j.itemName?j.itemName:" ",error:!(!l.itemName||!j.itemName)})}),Object(r.jsx)(He,{children:Object(r.jsx)(Ke,{label:"Store name",name:"onlineStore",value:c.onlineStore,onChange:s,onBlur:u,placeholder:"Samsung store",helperText:l.onlineStore&&j.onlineStore?j.onlineStore:" ",error:!(!l.onlineStore||!j.onlineStore)})}),Object(r.jsx)(He,{children:Object(r.jsx)(Ke,{label:"Price",name:"price",type:"number",onChange:s,onBlur:u,placeholder:"49.90",helperText:l.price&&j.price?j.price:" ",error:!(!l.price||!j.price),InputProps:{startAdornment:Object(r.jsx)(qe.a,{position:"start",children:"$"})}})}),Object(r.jsx)(He,{children:Object(r.jsx)(Ke,{label:"Estimated delivery date",name:"estDate",type:"date",value:c.estDate,onChange:s,onBlur:u,placeholder:"dd/mm/yyyy",helperText:l.estDate&&j.estDate?j.estDate:" ",error:!(!l.estDate||!j.estDate),InputLabelProps:{shrink:!0}})}),Object(r.jsx)("div",{children:Object(r.jsx)(fe.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})})]})]})})},Xe=function(e){var t=e.received,n=Object(m.d)(t?Z:_),i=Object(m.d)(p);return Object(r.jsx)(pe,{position:"absolute",color:"secondary",children:Object(r.jsxs)(v.a,{variant:"subtitle1",children:["Total Price: $".concat(A(n)),Object(r.jsx)(v.a,{variant:"subtitle2",component:"span",children:" ( \u20aa".concat(A(n*i)," )")})]})})},Ze="items",_e="stores",et=function(){var e=Object(i.useState)(!1),t=Object($.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)("items"),o=Object($.a)(c,2),s=o[0],l=o[1];return Object(r.jsxs)(de,{elevation:3,children:[Object(r.jsxs)(J.a,{value:s,children:[Object(r.jsxs)(O.a,{position:"sticky",style:{display:"flex",flexDirection:"row"},children:[Object(r.jsxs)(V.a,{centered:!0,onChange:function(e,t){l(t)},style:{flexGrow:5},children:[Object(r.jsx)(me,{label:"Items",value:Ze}),Object(r.jsx)(me,{label:"Stores",value:_e})]}),Object(r.jsx)(F.a,{arrow:!0,title:"Add Item",style:{flexGrow:1},children:Object(r.jsx)(U.a,{color:"inherit",onClick:function(){a(!0)},children:Object(r.jsx)(Ee.a,{})})})]}),Object(r.jsxs)(be,{children:[Object(r.jsx)(Y.a,{value:Ze,children:Object(r.jsx)(Pe,{received:!1})}),Object(r.jsx)(Y.a,{value:_e,children:Object(r.jsx)(Be,{received:!1})})]})]}),Object(r.jsx)(Xe,{received:!1}),Object(r.jsx)(Qe,{open:n,handleClose:function(){a(!1)}})]})},tt=function(e){return Object(R.a)(e),Object(r.jsx)(et,{})},nt="items",rt="stores",it=function(){var e=Object(i.useState)("items"),t=Object($.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(de,{elevation:3,children:[Object(r.jsxs)(J.a,{value:n,children:[Object(r.jsx)(O.a,{position:"sticky",style:{display:"flex",flexDirection:"row"},children:Object(r.jsxs)(V.a,{centered:!0,onChange:function(e,t){a(t)},style:{flexGrow:5},children:[Object(r.jsx)(me,{label:"Items",value:nt}),Object(r.jsx)(me,{label:"Stores",value:rt})]})}),Object(r.jsxs)(be,{children:[Object(r.jsx)(Y.a,{value:nt,children:Object(r.jsx)(Pe,{received:!0})}),Object(r.jsx)(Y.a,{value:rt,children:Object(r.jsx)(Be,{received:!0})})]})]}),Object(r.jsx)(Xe,{received:!0})]})},at=function(){return Object(r.jsx)(it,{})};function ct(){var e=Object(j.a)(["\n\tpadding-top: 64px;\n\t@media (max-width: 650px) {\n\t\tpadding-top: 56px;\n\t}\n"]);return ct=function(){return e},e}var ot=x.a.main(ct());var st=function(){var e=Object(m.e)(p),t=Object(m.e)(h);function n(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B("ILS");case 3:r=n.sent,e(r),t(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){n();var e=setInterval(n,1e4);return function(){return clearInterval(e)}}),[]),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(T,{}),Object(r.jsx)(ot,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",component:L}),Object(r.jsx)(b.a,{exact:!0,path:"/list",component:tt}),Object(r.jsx)(b.a,{exact:!0,path:"/received",component:at})]})})]})},lt=n(331),ut=n(159),jt=n(329),dt=n(330),bt=Object(ut.a)({palette:{primary:jt.a,secondary:dt.a}});o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m.a,{children:Object(r.jsx)(lt.a,{theme:bt,children:Object(r.jsx)(st,{})})})}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.6be35f57.chunk.js.map