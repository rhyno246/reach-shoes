(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[10],{274:function(e,t,n){var c=n(290),i="object"==typeof self&&self&&self.Object===Object&&self,a=c||i||Function("return this")();e.exports=a},275:function(e,t,n){"use strict";var c=n(68),i=n(549),a=n(105),r=n(0),o=n(23),s=n(19),l=n(30),u=n(69),p=n(297),d=n(298),f=n(62),j=n(70),b=(n(276),n(4));t.a=function(e){var t=e.title,n=e.image,m=e.price,v=e.id,h=e.size,O=e.quantity,g=e.sale,x=e.isProduct,y=e.status,N=Object(j.b)().currentUser,S=Object(o.c)((function(e){return e.auth.setUser})),E=Object(r.useState)(!1),w=Object(c.a)(E,2),k=w[0],z=w[1],C=Object(o.b)(),P=Object(s.g)(),U=N&&N.email,T=m-g*m;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"product-item",type:"flex",children:Object(b.jsxs)(i.a,{hoverable:!0,cover:Object(b.jsx)("img",{alt:t,src:n[0]}),style:{height:"100%"},children:[Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{to:"product"===y?"shoes/".concat(v):"otherbrand"===y?"other-brands/".concat(v):"Shoelace"===y?"shoes-lace/".concat(v):null,className:"title-product",children:t})}),0===O?Object(b.jsx)("span",{className:"outstock",children:"Out Stock"}):Object(b.jsx)("span",{}),Object(b.jsxs)("div",{className:"flex-price",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("span",{className:g?"old-price":"price",children:[m," $"]})}),g?Object(b.jsxs)("span",{className:"sale",children:[100*g,"%"]}):Object(b.jsx)("span",{}),g?Object(b.jsxs)("span",{className:"new-price",children:[" ",parseFloat(T).toFixed(2)," $ "]}):Object(b.jsx)("span",{})]}),Object(b.jsxs)("div",{className:"flex-btn",children:[Object(b.jsx)(a.a,{onClick:function(){x&&f.b.collection(U).doc(v).delete().then((function(){})).catch((function(e){console.error("Error removing document: ",e)})),C(g?Object(u.a)({id:v,title:t,price:T,image:n,size:h,stock:O,sizeChose:h&&h[0],status:y}):Object(u.a)({id:v,title:t,price:m,image:n,size:h,stock:O,sizeChose:h&&h[0],status:y}))},type:"warning",disabled:0===O,children:"Add to cart"}),x?Object(b.jsx)(a.a,{style:{marginLeft:"10px"},onClick:function(){f.b.collection(U).doc(v).delete().then((function(){})).catch((function(e){console.error("Error removing document: ",e)}))},children:Object(b.jsx)(p.a,{})}):Object(b.jsx)(a.a,{style:{marginLeft:"10px"},onClick:function(){if(z(!0),S){var e={id:v,title:t,image:n,price:m||T,size:h,quantity:O,sale:g,isProduct:!0,status:y};f.b.collection(U).doc(e.id).set(e).then((function(){z(!1)})).catch((function(e){z(!1),console.error("Error removing document: ",e)}))}else P.push("/login")},loading:k,disabled:k,children:k?"Loading":Object(b.jsx)(d.a,{})})]})]})})})}},276:function(e,t,n){},277:function(e,t,n){var c=n(274).Symbol;e.exports=c},278:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},280:function(e,t,n){var c=n(277),i=n(293),a=n(294),r=c?c.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?i(e):a(e)}},281:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},285:function(e,t,n){"use strict";var c=n(342),i=(n(0),n(286),n(4));t.a=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)(c.a,{size:"large"})})})}},286:function(e,t,n){},287:function(e,t,n){var c=n(280),i=n(281);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==c(e)}},290:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(55))},293:function(e,t,n){var c=n(277),i=Object.prototype,a=i.hasOwnProperty,r=i.toString,o=c?c.toStringTag:void 0;e.exports=function(e){var t=a.call(e,o),n=e[o];try{e[o]=void 0;var c=!0}catch(s){}var i=r.call(e);return c&&(t?e[o]=n:delete e[o]),i}},294:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},297:function(e,t,n){"use strict";var c=n(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(25),r=function(e,t){return c.createElement(a.a,Object.assign({},e,{ref:t,icon:i}))};r.displayName="DeleteOutlined";t.a=c.forwardRef(r)},298:function(e,t,n){"use strict";var c=n(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"},a=n(25),r=function(e,t){return c.createElement(a.a,Object.assign({},e,{ref:t,icon:i}))};r.displayName="HeartOutlined";t.a=c.forwardRef(r)},307:function(e,t,n){var c=n(278),i=n(308),a=n(309),r=Math.max,o=Math.min;e.exports=function(e,t,n){var s,l,u,p,d,f,j=0,b=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=s,c=l;return s=l=void 0,j=t,p=e.apply(c,n)}function O(e){return j=e,d=setTimeout(x,t),b?h(e):p}function g(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-j>=u}function x(){var e=i();if(g(e))return y(e);d=setTimeout(x,function(e){var n=t-(e-f);return m?o(n,u-(e-j)):n}(e))}function y(e){return d=void 0,v&&s?h(e):(s=l=void 0,p)}function N(){var e=i(),n=g(e);if(s=arguments,l=this,f=e,n){if(void 0===d)return O(f);if(m)return clearTimeout(d),d=setTimeout(x,t),h(f)}return void 0===d&&(d=setTimeout(x,t)),p}return t=a(t)||0,c(n)&&(b=!!n.leading,u=(m="maxWait"in n)?r(a(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==d&&clearTimeout(d),j=0,s=f=l=d=void 0},N.flush=function(){return void 0===d?p:y(i())},N}},308:function(e,t,n){var c=n(274);e.exports=function(){return c.Date.now()}},309:function(e,t,n){var c=n(310),i=n(278),a=n(287),r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=c(e);var n=o.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}},310:function(e,t,n){var c=n(311),i=/^\s+/;e.exports=function(e){return e?e.slice(0,c(e)+1).replace(i,""):e}},311:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},342:function(e,t,n){"use strict";var c=n(2),i=n(1),a=n(13),r=n(15),o=n(17),s=n(18),l=n(0),u=n(5),p=n.n(u),d=n(39),f=n(307),j=n.n(f),b=n(266),m=n(44),v=n(24),h=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(e);i<c.length;i++)t.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(e,c[i])&&(n[c[i]]=e[c[i]])}return n},O=(Object(m.a)("small","default","large"),null);var g=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;Object(a.a)(this,n),(r=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||r.props).delay;t&&(r.cancelExistingSpin(),r.updateSpinning=j()(r.originalUpdateSpinning,t))},r.updateSpinning=function(){var e=r.props.spinning;r.state.spinning!==e&&r.setState({spinning:e})},r.renderSpin=function(e){var t,n=e.getPrefixCls,a=e.direction,o=r.props,s=o.prefixCls,u=o.className,f=o.size,j=o.tip,b=o.wrapperClassName,m=o.style,g=h(o,["prefixCls","className","size","tip","wrapperClassName","style"]),x=r.state.spinning,y=n("spin",s),N=p()(y,(t={},Object(i.a)(t,"".concat(y,"-sm"),"small"===f),Object(i.a)(t,"".concat(y,"-lg"),"large"===f),Object(i.a)(t,"".concat(y,"-spinning"),x),Object(i.a)(t,"".concat(y,"-show-text"),!!j),Object(i.a)(t,"".concat(y,"-rtl"),"rtl"===a),t),u),S=Object(d.a)(g,["spinning","delay","indicator"]),E=l.createElement("div",Object(c.a)({},S,{style:m,className:N}),function(e,t){var n=t.indicator,c="".concat(e,"-dot");return null===n?null:Object(v.b)(n)?Object(v.a)(n,{className:p()(n.props.className,c)}):Object(v.b)(O)?Object(v.a)(O,{className:p()(O.props.className,c)}):l.createElement("span",{className:p()(c,"".concat(e,"-dot-spin"))},l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}),l.createElement("i",{className:"".concat(e,"-dot-item")}))}(y,r.props),j?l.createElement("div",{className:"".concat(y,"-text")},j):null);if(r.isNestedPattern()){var w=p()("".concat(y,"-container"),Object(i.a)({},"".concat(y,"-blur"),x));return l.createElement("div",Object(c.a)({},S,{className:p()("".concat(y,"-nested-loading"),b)}),x&&l.createElement("div",{key:"loading"},E),l.createElement("div",{className:w,key:"container"},r.props.children))}return E};var o=e.spinning,s=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(o,e.delay);return r.state={spinning:o&&!s},r.originalUpdateSpinning=r.updateSpinning,r.debouncifyUpdateSpinning(e),r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return l.createElement(b.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){O=e}}]),n}(l.Component);g.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=g},517:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);n(0);var c=n(23),i=(n(517),n(275)),a=n(534),r=n(536),o=n(285),s=n(4);t.default=function(){var e=Object(c.c)((function(e){return e.product.search})),t=Object(c.c)((function(e){return e.product.loading}));return Object(s.jsx)(s.Fragment,{children:e.length<=0?Object(s.jsx)("div",{className:"cannot-find",children:" Can not find product !!! "}):Object(s.jsx)("div",{className:"search-page",children:Object(s.jsx)("div",{className:"container",children:t?Object(s.jsx)(o.a,{}):Object(s.jsx)(a.a,{gutter:24,children:e.map((function(e){return Object(s.jsx)(r.a,{className:"gutter-row",xs:24,sm:12,xl:6,style:{marginBottom:"25px"},children:Object(s.jsx)(i.a,{id:e.id,title:e.title,price:e.price,image:e.image,quantity:e.quantity,sale:e.sale,size:e.size,status:e.status})},e.id)}))})})})})}}}]);
//# sourceMappingURL=10.abc2914b.chunk.js.map