(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[19],{285:function(e,s,t){"use strict";var c=t(342),a=(t(0),t(286),t(4));s.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)(c.a,{size:"large"})})})}},286:function(e,s,t){},289:function(e,s,t){"use strict";var c=t(105),a=(t(0),t(556)),r=t(557),i=(t(292),t(4));s.a=function(e){var s=e.className,t=e.to,n=e.onClick;return Object(i.jsx)(c.a,{type:"button",onClick:n,className:"button-slide ".concat(s),"aria-label":t,children:"next"===t?Object(i.jsx)(a.a,{}):Object(i.jsx)(r.a,{})})}},292:function(e,s,t){},406:function(e,s,t){},538:function(e,s,t){"use strict";t.r(s);var c=t(68),a=t(0),r=t(23),i=t(19),n=t(46),l=t(289),j=t(285),d=t(329),o=t.n(d),b=t(69),m=t(105),O=t(305),h=t.n(O),u=(t(406),t(4));s.default=function(){var e=Object(i.i)().id,s=Object(r.b)(),t=Object(a.useState)(),d=Object(c.a)(t,2),O=d[0],x=d[1],p=Object(a.useState)(),g=Object(c.a)(p,2),N=g[0],f=g[1],v=Object(r.c)((function(e){return e.product.detailotherbrand})),y=Object(r.c)((function(e){return e.product.loading})),w=v.id,k=v.image,S=v.title,C=v.sale,F=v.price,T=v.quantity,A=v.status,L=v&&v.description,R=F-C*F;return Object(a.useEffect)((function(){s(Object(n.g)(e))}),[s,e]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"detail-otherbrand",children:y?Object(u.jsx)(j.a,{}):Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"main",style:{maxWidth:"100%"},children:[Object(u.jsxs)("div",{className:"img",children:[Object(u.jsx)(h.a,{asNavFor:N,ref:function(e){return x(e)},prevArrow:Object(u.jsx)(l.a,{to:"prev"}),nextArrow:Object(u.jsx)(l.a,{to:"next"}),children:k&&k.map((function(e,s){return Object(u.jsx)("div",{className:"slide-img",children:Object(u.jsx)("img",{src:e,alt:s})},s)}))}),Object(u.jsx)(h.a,{asNavFor:O,ref:function(e){return f(e)},slidesToShow:k&&k.length>4?4:k&&k.length,swipeToSlide:!0,focusOnSelect:!0,arrows:!1,slidesToScroll:1,children:k&&k.map((function(e,s){return Object(u.jsx)("div",{className:"thumb",children:Object(u.jsx)("img",{src:e,alt:s})},s)}))})]}),Object(u.jsxs)("div",{className:"right-txt",children:[Object(u.jsx)("h3",{className:"margin name",children:S}),C?Object(u.jsxs)("div",{className:"margin",children:[Object(u.jsx)("strong",{children:"Sale : "}),Object(u.jsxs)("span",{className:"category sale",children:[100*C,"%"]})]}):null,Object(u.jsxs)("div",{className:"margin",children:[Object(u.jsx)("strong",{children:"Price : "}),C?Object(u.jsxs)("span",{style:{marginRight:"10px"},className:"category new-price",children:[parseFloat(R).toFixed(2)," $"]}):null,Object(u.jsxs)("span",{className:C?"old-price":"new-price",children:[F," $"]})]}),0===T?Object(u.jsx)("div",{className:"margin",children:Object(u.jsx)("span",{className:"category",children:"Out Stock"})}):Object(u.jsxs)("div",{className:"margin",children:[Object(u.jsx)("strong",{children:"Quantity : "}),Object(u.jsxs)("span",{className:"category",children:[T," "]})]}),Object(u.jsxs)("div",{className:"margin",children:[Object(u.jsx)("strong",{children:"Description :"})," ",Object(u.jsx)("span",{className:"description",children:Object(u.jsx)(o.a,{charLimit:250,readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"read-more-less--more",readLessClassName:"read-more-less--less",children:L||""})})]}),Object(u.jsx)(m.a,{type:"primary",onClick:function(){s(C?Object(b.a)({id:w,title:S,price:R,image:k,stock:T,otherbrand:!0,status:A}):Object(b.a)({id:w,title:S,price:F,image:k,stock:T,otherbrand:!0,status:A}))},disabled:0===T,children:"Add To Cart"})]})]})})})})}}}]);
//# sourceMappingURL=19.e8df7255.chunk.js.map