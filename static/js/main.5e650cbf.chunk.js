(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={navbar:"Header_navbar__29drr",light:"Header_light__1s7cR"}},,,function(e,t,a){e.exports={someClass:"Greeting_someClass__9kDe7",error:"Greeting_error__yVcLE",body:"Greeting_body__V9T7L"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1KuCf",spanClassName:"SuperCheckbox_spanClassName__2bN8I"}},,function(e,t,a){e.exports={body:"Affairs_body__2rW09"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__2h5et",errorInput:"SuperInputText_errorInput__1735g",error:"SuperInputText_error__3ilX6",finalInputClassName:"SuperInputText_finalInputClassName__1spiQ"}},,function(e,t,a){e.exports={blue:"HW4_blue__2ci7X",column:"HW4_column__1ttf_",body:"HW4_body__1_tsB"}},function(e,t,a){e.exports={default:"SuperButton_default__3MfQa",red:"SuperButton_red__3gE20"}},,,,,,,function(e,t,a){e.exports={App:"App_App__A2MpI"}},function(e,t,a){e.exports={message:"Message_message__1LhL8",body:"Message_body__33POB"}},function(e,t,a){e.exports={count:"SuperEditableSpan_count__3ryLr"}},function(e,t,a){e.exports={hit_the_floor:"Eror_hit_the_floor__2F3Rk"}},,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(35),a(24)),u=a.n(o),s=a(6),i=a(7),m=a.n(i),d=a(1),f=a(25),p=a.n(f);var E=function(){return r.a.createElement("div",{className:p.a.body},r.a.createElement("hr",null),"homeworks 1")},b=a(2);var h=function(e){return r.a.createElement("div",null,e.affair.name," ",e.affair.priority,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var _=function(e){var t=e.data.map((function(t){return r.a.createElement(h,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},v=a(13),C=a.n(v),g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(g),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),u=o[0],s=o[1],i=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",{className:C.a.body},r.a.createElement("hr",null),"homeworks 2",r.a.createElement(_,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}))},N=a(29),y=a(10),O=a.n(y),j=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""===t?O.a.error:O.a.someClass;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},x=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),m=i[0],d=i[1],f=t.length;return r.a.createElement(j,{name:o,setNameCallback:function(e){var t=e.currentTarget.value;u(t)},addUser:function(){""===o?(alert("Error: name must be entered"),d("")):(alert("Hello ".concat(o)),a(o),u(""))},error:m,totalUsers:f})},S=a(43);var w=function(){var e=Object(n.useState)([{_id:Object(S.a)(),name:"asa"}]),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:O.a.body},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:a,addUserCallback:function(e){var t={_id:Object(S.a)(),name:"Must have"};l([t].concat(Object(N.a)(a)))}}))},I=a(5),T=a(14),A=a.n(T),F=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(A.a.error," ").concat(o||""),i="".concat(c?A.a.errorInput:A.a.finalInputClassName);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:"".concat(i," ")},u)),c&&r.a.createElement("span",{className:s},c))},P=a(16),B=a.n(P),J=a(17),H=a.n(J),M=function(e){var t=e.red,a=e.className,n=Object(I.a)(e,["red","className"]),l="".concat(t?H.a.red:H.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},U=a(11),L=a.n(U),W=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(L.a.checkbox," ").concat(L.a.children?L.a.spanClassName:"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){console.log(e.currentTarget.checked),t&&t(e),a&&a(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:L.a.spanClassName},n))};var R=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(b.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",{className:B.a.body},r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:B.a.column},r.a.createElement(F,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(M,{red:!0,onClick:o},"delete "),r.a.createElement(W,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(W,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})))},D=a(26),K=a.n(D),G=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(b.a)(o,2),s=u[0],i=u[1],m=l||{},d=m.children,f=m.onDoubleClick,p=m.className,E=Object(I.a)(m,["children","onDoubleClick","className"]),h="".concat(K.a.count," ").concat(p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(F,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),t&&t(e)},onEnter:function(){i(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),f&&f(e)},className:h},E),d||c.value))};function X(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function Q(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}X("test",{x:"A",y:1});Q("test",{x:"",y:0});var V=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:C.a.body},r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(G,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(M,{onClick:function(){X("editable-span-value",a)}},"save"),r.a.createElement(M,{onClick:function(){var e=Q("editable-span-value",a);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var $=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(w,null),r.a.createElement(R,null),r.a.createElement(V,null))},q=a(27),z=a.n(q);var Y=function(){return r.a.createElement("div",{className:z.a.hit_the_floor},"404")},Z=function(){return r.a.createElement("div",null)},ee=function(){return r.a.createElement("div",null)},te="/pre-junior",ae="/junior",ne="/juniorPlus";var re=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:"PRE_JUNIOR"})}}),r.a.createElement(d.b,{path:te,render:function(){return r.a.createElement($,null)}}),"// add routes",r.a.createElement(d.b,{path:ae,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(d.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(Y,null)}})))};var le=function(){return r.a.createElement("div",{className:m.a.navbar},r.a.createElement(s.b,{to:te,activeClassName:m.a.light},"PreJunior"),r.a.createElement(s.b,{to:ae,activeClassName:m.a.light},"Junior"),r.a.createElement(s.b,{to:ne,activeClassName:m.a.light},"Junior+"))};var ce=function(){return r.a.createElement("div",{className:m.a.body},r.a.createElement(s.a,null,r.a.createElement(le,null),r.a.createElement(re,null)))};var oe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.5e650cbf.chunk.js.map