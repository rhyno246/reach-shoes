(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[12],{275:function(e,t,s){"use strict";var a=s(68),c=s(549),n=s(105),r=s(0),i=s(23),o=s(19),l=s(30),d=s(69),u=s(297),j=s(298),p=s(62),b=s(70),m=(s(276),s(4));t.a=function(e){var t=e.title,s=e.image,h=e.price,O=e.id,x=e.size,f=e.quantity,g=e.sale,v=e.isProduct,w=e.status,y=Object(b.b)().currentUser,N=Object(i.c)((function(e){return e.auth.setUser})),P=Object(r.useState)(!1),C=Object(a.a)(P,2),S=C[0],k=C[1],q=Object(i.b)(),U=Object(o.g)(),z=y&&y.email,B=h-g*h;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"product-item",type:"flex",children:Object(m.jsxs)(c.a,{hoverable:!0,cover:Object(m.jsx)("img",{alt:t,src:s[0]}),style:{height:"100%"},children:[Object(m.jsx)("p",{children:Object(m.jsx)(l.b,{to:"product"===w?"shoes/".concat(O):"otherbrand"===w?"other-brands/".concat(O):"Shoelace"===w?"shoes-lace/".concat(O):null,className:"title-product",children:t})}),0===f?Object(m.jsx)("span",{className:"outstock",children:"Out Stock"}):Object(m.jsx)("span",{}),Object(m.jsxs)("div",{className:"flex-price",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:g?"old-price":"price",children:[h," $"]})}),g?Object(m.jsxs)("span",{className:"sale",children:[100*g,"%"]}):Object(m.jsx)("span",{}),g?Object(m.jsxs)("span",{className:"new-price",children:[" ",parseFloat(B).toFixed(2)," $ "]}):Object(m.jsx)("span",{})]}),Object(m.jsxs)("div",{className:"flex-btn",children:[Object(m.jsx)(n.a,{onClick:function(){v&&p.b.collection(z).doc(O).delete().then((function(){})).catch((function(e){console.error("Error removing document: ",e)})),q(g?Object(d.a)({id:O,title:t,price:B,image:s,size:x,stock:f,sizeChose:x&&x[0],status:w}):Object(d.a)({id:O,title:t,price:h,image:s,size:x,stock:f,sizeChose:x&&x[0],status:w}))},type:"warning",disabled:0===f,children:"Add to cart"}),v?Object(m.jsx)(n.a,{style:{marginLeft:"10px"},onClick:function(){p.b.collection(z).doc(O).delete().then((function(){})).catch((function(e){console.error("Error removing document: ",e)}))},children:Object(m.jsx)(u.a,{})}):Object(m.jsx)(n.a,{style:{marginLeft:"10px"},onClick:function(){if(k(!0),N){var e={id:O,title:t,image:s,price:h||B,size:x,quantity:f,sale:g,isProduct:!0,status:w};p.b.collection(z).doc(e.id).set(e).then((function(){k(!1)})).catch((function(e){k(!1),console.error("Error removing document: ",e)}))}else U.push("/login")},loading:S,disabled:S,children:S?"Loading":Object(m.jsx)(j.a,{})})]})]})})})}},276:function(e,t,s){},296:function(e,t,s){"use strict";var a=s(80),c=s(268),n=(s(0),s(4));t.a=function(e){var t=e.field,s=e.form,r=e.type,i=e.label,o=s.errors,l=s.touched,d=t.name,u=t.value,j=o[d]&&l[d];return Object(n.jsxs)("div",{className:"feild",style:{marginBottom:"15px"},children:[Object(n.jsx)(c.a,Object(a.a)(Object(a.a)({style:{padding:"10px 10px",fontSize:"15px"},placeholder:i},t),{},{type:r,value:u,className:j?"err":null})),j&&Object(n.jsx)("p",{className:"error",children:o[d]})]})}},518:function(e,t,s){},521:function(e,t,s){},522:function(e,t,s){},547:function(e,t,s){"use strict";s.r(t);var a=s(68),c=s(0),n=(s(518),s(528)),r=s(268),i=s(105),o=s(340),l=s(299),d=s(300),u=s(519),j=s(70),p=s(23),b=s(58),m=s(377),h=s(62),O=(s(520),s(521),s(4)),x=function(e){var t=e.values,s=e.touched,a=e.errors,c=e.handleChange,n=e.handleBlur,o=e.handleSubmit;return Object(O.jsxs)("form",{onSubmit:o,children:[Object(O.jsxs)("div",{style:{marginBottom:"15px"},children:[Object(O.jsx)(r.a,{defaultValue:t.name,onChange:c,onBlur:n,id:"name"}),a.name&&s.name&&Object(O.jsx)("div",{className:"error",children:a.name})]}),Object(O.jsxs)("div",{style:{marginBottom:"15px"},children:[Object(O.jsx)(r.a,{defaultValue:t.email,onChange:c,onBlur:n,id:"email"}),a.email&&s.email&&Object(O.jsx)("div",{className:"error",children:a.email})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(r.a,{defaultValue:t.phone,onChange:c,onBlur:n,id:"phone"}),a.phone&&s.phone&&Object(O.jsx)("div",{className:"error",children:a.phone})]}),Object(O.jsx)("div",{style:{marginTop:"20px"},children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",disabled:a.email||a.name||a.phone,children:"Update profile"})})]})};var f=function(){var e=Object(u.a)(),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(j.b)(),f=r.currentUser,g=r.updateMail,v=f&&f.displayName,w=f&&f.email,y=f&&f.photoURL,N=f&&f.uid,P=Object(p.b)(),C=Object(c.useState)(),S=Object(a.a)(C,2),k=S[0],q=S[1],U=Object(l.d)({mapPropsToValues:function(){return{name:v,email:w,phone:y}},validationSchema:d.b().shape({name:d.d().min(3,"Name must be at most 3 characters long").max(10,"Name must be less than 10 characters").required("Name is required!"),email:d.d().email("Invalid Email").required("Email Required"),phone:d.d().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Phone Required")}),handleSubmit:function(e,t){var s=t.setSubmitting;e.name!==f.displayName||e.email!==f.email||e.phone!==f.photoURL?(P(Object(b.d)(e.name)),f.updateProfile({displayName:e.name,photoURL:e.phone}),g(e.email).then((function(){m.b.success("\ud83e\udd84 your profile success  ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){q(e.message)})),s(!1)):m.b.warn("\ud83e\udd84 Opps !! your profile not change  ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}})(x);return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("div",{className:"default",children:Object(O.jsxs)("div",{style:{marginTop:"20px",textAlign:"center"},children:[Object(O.jsx)("img",{src:(null===s||void 0===s?void 0:s.source)||"https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png",alt:"preview"}),Object(O.jsx)(i.a,{type:"primary",onClick:function(){n({accept:"image/*"},(function(e){e.name,e.size,e.source;var t=e.file,s=h.c.ref("users/"+N+"/profile.jpg").put(t);s.on("state_changed",(function(e){console.log(e,"Update success")}),(function(e){console.log(e)}),(function(){s.snapshot.ref.getDownloadURL().then((function(e){m.b.success("\ud83e\udd84 update avatar success  ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),P(Object(b.b)(e))}))}))}))},children:"Upload Avatar"})]})}),Object(O.jsxs)("div",{className:"change-profile",style:{marginTop:"25px"},children:[k?Object(O.jsx)(o.a,{message:k,type:"error",showIcon:!0,style:{margin:"10px 0px"}}):null,Object(O.jsx)(m.a,{}),Object(O.jsx)(U,{})]})]})},g=s(11),v=s.n(g),w=s(22),y=(s(522),s(296)),N={newpassword:"",cfmnewpassword:""},P=d.b().shape({newpassword:d.d().min(6,"Password must be at most 6 characters long").max(50,"Name must be less than 50 characters").required("Passwords Required"),cfmnewpassword:d.d().oneOf([d.c("newpassword"),null],"Passwords do not match").required("Comfirm Passwords Required")});var C=function(){var e=Object(j.b)().currentUser,t=Object(c.useState)(!1),s=Object(a.a)(t,2),n=s[0],r=s[1],d=Object(c.useState)(""),u=Object(a.a)(d,2),p=u[0],b=u[1],h=function(){var t=Object(w.a)(v.a.mark((function t(s,a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(!0),e.updatePassword(s.newpassword).then((function(){a.resetForm(),r(!1),m.b.success("\ud83e\udd84 Password update success  ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){a.resetForm(),r(!1),b(e.message)}));case 2:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"changepass",children:[Object(O.jsx)(m.a,{}),p?Object(O.jsx)(o.a,{message:p,type:"error",showIcon:!0,style:{margin:"10px 0px"}}):null,Object(O.jsx)(l.c,{initialValues:N,validationSchema:P,onSubmit:function(e,t){return h(e,t)},children:Object(O.jsxs)(l.b,{children:[Object(O.jsx)(l.a,{name:"newpassword",component:y.a,type:"password",label:"New Password"}),Object(O.jsx)(l.a,{name:"cfmnewpassword",component:y.a,type:"password",label:"Confirm Password"}),Object(O.jsx)("div",{style:{marginTop:"20px"},children:Object(O.jsx)(i.a,{type:"primary",htmlType:"submit",loading:n,children:n?"Loading":"Update password"})})]})})]})},S=s(534),k=s(536),q=s(61),U=s(275);var z=function(){var e=Object(j.b)().currentUser,t=Object(c.useState)(),s=Object(a.a)(t,2),n=s[0],r=s[1],i=e&&e.email;return Object(c.useEffect)((function(){var e=h.b.collection(i).onSnapshot((function(e){var t=e.docs.map((function(e){return{id:e.id,title:e.data().title,image:e.data().image,price:e.data().price,size:e.data().size,quantity:e.data().quantity,sale:e.data().sale,isProduct:e.data().isProduct,status:e.data().status}}));r(t)}));return function(){return e()}}),[i]),Object(O.jsx)("div",{className:"wish-list",children:n&&n.length>0?Object(O.jsx)(S.a,{gutter:24,children:n.map((function(e,t){return Object(O.jsx)(k.a,{className:"gutter-row",xs:24,sm:12,xl:8,style:{marginBottom:"25px"},children:Object(O.jsx)(U.a,{id:e.id,title:e.title,price:e.price,image:e.image,size:e.size,quantity:e.quantity,sale:e.sale,isProduct:e.isProduct,status:e.status})},t)}))}):Object(O.jsx)(q.a,{})})},B=n.a.TabPane;t.default=function(){var e=Object(c.useState)("top"),t=Object(a.a)(e,1)[0];return Object(O.jsx)("div",{className:"profile",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"profile-control",children:Object(O.jsxs)(n.a,{tabPosition:t,centered:!0,onChange:function(e){},children:[Object(O.jsx)(B,{tab:"My profile",children:Object(O.jsx)("div",{className:"w-profile",children:Object(O.jsx)(f,{})})},"1"),Object(O.jsx)(B,{tab:"Wish list",children:Object(O.jsx)("div",{className:"w-profile",style:{padding:"30px 0"},children:Object(O.jsx)(z,{})})},"2"),Object(O.jsx)(B,{tab:"Change PassWord",children:Object(O.jsx)("div",{className:"w-profile",children:Object(O.jsx)(C,{})})},"3")]})})})})}}}]);
//# sourceMappingURL=12.967b2d00.chunk.js.map