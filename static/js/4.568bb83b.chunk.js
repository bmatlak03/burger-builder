(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{110:function(e,t,a){"use strict";var n=a(13),i=a(111),u=a.n(i),c=a(0);t.a=function(e){var t=e.invalid,a=e.shouldValidate,i=e.touched,l=e.elementType,r=e.elementConfig,o=e.label,s=e.value,d=e.changed,b=null,j=[u.a.InputElement];switch(t&&a&&i&&j.push(u.a.Invalid),l){case"input":b=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:j.join(" ")},r),{},{value:s,onChange:d}));break;case"textarea":b=Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({className:j.join(" ")},r),{},{value:s,onChange:d}));break;case"select":b=Object(c.jsx)("select",{onChange:d,className:j.join(" "),value:s,children:r.options.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:b=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:j.join(" ")},r),{},{value:s}))}return Object(c.jsxs)("div",{className:u.a.Input,children:[Object(c.jsx)("label",{className:u.a.Label,children:o}),b]})}},111:function(e,t,a){e.exports={Input:"Input_Input__16lQj",Label:"Input_Label__30Pir",InputElement:"Input_InputElement__2ZLfk",Invalid:"Input_Invalid__MHoU8"}},115:function(e,t,a){e.exports={Auth:"Auth_Auth__1epjk"}},116:function(e,t,a){"use strict";a.r(t);var n=a(27),i=a(23),u=a(2),c=a(110),l=a(40),r=a(115),o=a.n(r),s=a(11),d=a(8),b=a(14),j=a(50),h=a(10),p=a(0);t.default=Object(b.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(d.b(t,a,n))},onSetAuthRedirectPath:function(){return e(d.x("/"))}}}))((function(e){var t=e.buildingBurger,a=e.authRedirectPath,r=e.onSetAuthRedirectPath,d=e.onAuth,b=e.loading,v=e.error,O=e.isAuthenticated,f=Object(u.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{requierd:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{requierd:!0,minLength:6},valid:!1,touched:!1}}),g=Object(i.a)(f,2),m=g[0],x=g[1],I=Object(u.useState)(!0),A=Object(i.a)(I,2),N=A[0],_=A[1];Object(u.useEffect)((function(){t&&"/"!==a&&r()}),[t,a,r]);var S=[];for(var P in m)S.push({id:P,config:m[P]});var k=S.map((function(e){return Object(p.jsx)(c.a,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,changed:function(t){return function(e,t){var a=Object(h.b)(m,Object(n.a)({},t,Object(h.b)(m[t],{value:e.target.value,valid:Object(h.a)(e.target.value,m[t].validation),touched:!0})));x(a)}(t,e.id)},invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched},e.id)}));b&&(k=Object(p.jsx)(j.a,{}));var y=null;v&&(y=Object(p.jsx)("p",{children:v.message}));var T=null;O&&t?T=Object(p.jsx)(s.a,{to:"/checkout"}):O&&(T=Object(p.jsx)(s.a,{to:"/"}));var C=Object(p.jsx)("strong",{children:"YOU ARE ON SING UP PAGE"});return N||(C=Object(p.jsx)("strong",{children:"YOU ARE ON SING IN PAGE"})),Object(p.jsxs)("div",{className:o.a.Auth,children:[T,y,C,Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(m.email.value,m.password.value,N)},children:[k,Object(p.jsx)(l.a,{btnType:"Success",children:"SUBMIT"})]}),Object(p.jsxs)(l.a,{btnType:"Danger",clicked:function(){_(!N)},children:["SWITCH TO ",N?"SING IN":"SING UP"]})]})}))}}]);
//# sourceMappingURL=4.568bb83b.chunk.js.map