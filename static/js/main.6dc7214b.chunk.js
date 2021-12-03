(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{43:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),i=n(48),s=n.n(i),o=n(0),r=n.n(o),l=n(3),d=n(45),u=n(5),j=n(16),b=(n(55),n(43),n(7));var p=function(e){var t=Object(c.useState)(e.inputValue),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(e.priority),o=Object(j.a)(s,2),r=o[0],l=o[1];function d(){i(e.inputValue),e.onClose()}return Object(c.useCallback)((function(e){}),[e.visible]),r||l("tiny"),e.visible?Object(b.jsx)("div",{className:"backdrop",children:Object(b.jsxs)("div",{className:"modal",children:[e.children,Object(b.jsx)("input",{autoFocus:!0,id:"textfield",type:"text",name:"name",value:a,onChange:function(e){return i(e.target.value)}}),e.task&&Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"priority-label",htmlFor:"priority-levels",children:"Priority"}),Object(b.jsxs)("select",{name:"priority-levels",id:"priority-levels",onChange:function(e){return l(e.target.value)},children:[Object(b.jsx)("option",{selected:"tiny"===r,value:"tiny",children:"Low"}),Object(b.jsx)("option",{selected:"medium"===r,value:"medium",children:"Medium"}),Object(b.jsx)("option",{selected:"high"===r,value:"high",children:"High"})]})]}),Object(b.jsxs)("div",{className:"alert-buttons",children:[Object(b.jsx)("button",{className:"alert-button alert-cancel",type:"button",onClick:d,children:e.cancelName}),Object(b.jsx)("button",{className:"alert-button alert-ok",type:"button",onClick:function(){e.task&&!e.edit?(r||l("tiny"),e.onAddTaskOkay(e.listWithoutId,a,r)):e.onOk(a,r),d(),e.edit?i(a):i("")},children:e.okName})]})]})}):null};var m=function(e){return Object(b.jsx)("div",{className:"wrapper",children:e.children})};function O(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{tabIndex:"0",onKeyPress:function(t){("Enter"===t.key||"Space"===t.code)&&e.onClick(e.list.id)},onClick:function(){return e.onClick(e.list.id)},className:"boxes",id:"list-box-1",children:[Object(b.jsx)("img",{alt:"List Icon",src:"list-solid.svg"}),Object(b.jsx)("span",{children:e.list.title}),Object(b.jsxs)("div",{className:"edit-delete-button-container",children:[Object(b.jsx)("img",{tabIndex:"0",className:"edit-delete-button",onClick:function(e){e.stopPropagation(),i(!0)},onKeyPress:function(e){e.stopPropagation(),e.preventDefault(),("Enter"===e.key||"Space"===e.code)&&i(!0)},alt:"Edit Pen",src:"edit-solid.svg"}),Object(b.jsx)("img",{tabIndex:"0",alt:"Delete X",className:"edit-delete-button",onKeyPress:function(t){"Enter"===t.key&&e.handleDelete(e.list.id,t)},onClick:function(t){return e.handleDelete(e.list.id,t)},src:"times-solid.svg"})]})]}),Object(b.jsx)(p,{task:!1,edit:!0,inputValue:e.list.title,visible:a,onClose:function(){return i(!1)},onOk:function(t){e.updateList(e.list.id,t)},cancelName:"Don't Save",okName:"Save",children:Object(b.jsx)("div",{children:"Edit List:"})})]})}var h=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{id:"MyLists",children:"My Lists"}),e.data&&e.data.map((function(t){return Object(b.jsx)(O,{handleDelete:e.handleDelete,updateList:e.updateList,setData:e.setData,data:e.data,list:t,onClick:e.onListClick})})),Object(b.jsx)("div",{id:"button1",children:Object(b.jsxs)("button",{onClick:function(){return i(!0)},className:"addList addTask",children:[Object(b.jsx)("img",{alt:"Add +",src:"plus-solid.svg"}),Object(b.jsx)("span",{children:"Add List"})]})}),Object(b.jsx)(p,{task:!1,edit:!1,inputValue:"",visible:a,onClose:function(){return i(!1)},onOk:function(t){e.setData(t)},cancelName:"Don't Add",okName:"Add",children:Object(b.jsx)("div",{children:"Add List:"})})]})},f=n(35),x=n(33),g=n(36);function k(e){console.log(e.currentTasks);var t,n=Object(c.useState)(e.completed),a=Object(j.a)(n,2),i=(a[0],a[1],Object(c.useState)(!1)),s=Object(j.a)(i,2),o=s[0],r=s[1];function l(t){t.stopPropagation(),e.deleteTask(e.list.id,e.id)}return Object(b.jsxs)("div",{id:"box1",className:"boxes boxes-blue",children:[Object(b.jsx)("input",{onKeyUp:function(t){("Enter"===t.key||"Space"===t.code)&&e.updateTask(e.list.id,e.id,e.listitem,!e.completed,e.priority)},tabIndex:"0",checked:e.completed,type:"checkbox",onChange:function(){e.updateTask(e.list.id,e.id,e.listitem,!e.completed,e.priority)}}),Object(b.jsx)("label",{children:e.listitem}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"edit-delete-button-container",children:[(t=e.priority,"high"==t?Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"priority-img",onClick:function(){return r(!0)},alt:"Exclatmation Point",src:"exclamation-solid.svg"}),Object(b.jsx)("img",{className:"priority-img",onClick:function(){return r(!0)},alt:"Exclatmation Point",src:"exclamation-solid.svg"})]}):"medium"==t?Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"priority-img",alt:"Exclatmation Point",onClick:function(){return r(!0)},src:"exclamation-solid.svg"})}):Object(b.jsx)("div",{})),Object(b.jsx)("img",{tabIndex:"0",className:"edit-delete-button",alt:"Edit Pen",onKeyPress:function(e){e.preventDefault(),("Enter"===e.key||"Space"===e.code)&&r(!0)},onClick:function(){return r(!0)},src:"edit-solid.svg"}),Object(b.jsx)("img",{tabIndex:"0",className:"edit-delete-button",alt:"Delete X",onKeyPress:function(e){("Enter"===e.key||"Space"===e.code)&&l(e)},onClick:function(e){return l(e)},src:"times-solid.svg"})]}),Object(b.jsx)(p,{edit:!0,priority:e.priority,task:!0,visible:o,inputValue:e.listitem,onClose:function(){return r(!1)},onOk:function(t,n){e.updateTask(e.list.id,e.id,t,e.completed,n)},cancelName:"Don't Save",okName:"Save",children:Object(b.jsx)("div",{children:"Edit Task:"})})]})}var v=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)([]),o=Object(j.a)(s,2),r=o[0],l=o[1],d=Object(c.useState)("title"),u=Object(j.a)(d,2),O=u[0],h=u[1],x=(e.collectionRef,Object(f.a)(e.collectionRef.doc(e.list.id).collection(e.list.id).orderBy(O))),g=Object(j.a)(x,3),v=g[0],y=g[1],N=(g[2],!1===y?v.docs.map((function(e){return e.data()})):[]);return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{children:e.data[0].title}),Object(b.jsxs)("div",{className:"filters",children:[Object(b.jsx)("label",{className:"filter-dropdown",htmlFor:"filters",children:"Filters"}),Object(b.jsxs)("select",{name:"filters",id:"filter-select",onChange:function(e){return h(e.target.value)},children:[Object(b.jsx)("option",{value:"title",children:"Name"}),Object(b.jsx)("option",{value:"created",children:"Creation Date"}),Object(b.jsx)("option",{value:"priority",children:"Priority"})]})]}),N.filter((function(e){return!e.completed})).map((function(t){return Object(b.jsx)(k,{deleteTask:e.deleteTask,updateTask:e.updateTask,setTasks:l,currentTasks:r,list:e.list,setData:e.setData,data:e.data,id:t.id,listitem:t.title,completed:t.completed,priority:t.priority})})),Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{className:"completed",children:"Completed:"}),Object(b.jsx)("button",{className:"completed-button",onClick:function(){return function(t){t.filter((function(e){return e.completed})).map((function(t){return e.deleteTask(e.list.id,t.id)}))}(N)},children:"Delete All Completed"}),N.filter((function(e){return e.completed})).map((function(t){return Object(b.jsx)(k,{deleteTask:e.deleteTask,updateTask:e.updateTask,setTasks:l,currentTasks:r,list:e.list,setData:e.setData,data:e.data,id:t.id,listitem:t.title,completed:t.completed,priority:t.priority})})),Object(b.jsx)("div",{id:"button1",children:Object(b.jsxs)("button",{onClick:function(){i(!0)},className:"addTask",children:[Object(b.jsx)("img",{alt:"Add +",src:"plus-solid.svg"}),Object(b.jsx)("span",{children:"Add Task"})]})}),Object(b.jsx)(p,{edit:!1,priority:e.priority,task:!0,visible:a,onClose:function(){return i(!1)},listWithoutId:e.list,list:e.list.id,onOk:console.log("Oops"),onAddTaskOkay:e.addListItem,cancelName:"Don't Add",okName:"Add",children:Object(b.jsx)("div",{children:"Add Task:"})})]})},y=n(46),N=n(49),S=n(28),C=g.a.initializeApp({apiKey:"AIzaSyB8G1WCYinf4GWK7GMzLkP8PlLujGnNqHM",authDomain:"cs124-lab.firebaseapp.com",projectId:"cs124-lab",storageBucket:"cs124-lab.appspot.com",messagingSenderId:"385341419353",appId:"1:385341419353:web:fe357b4ea465efcdff2648",measurementId:"G-PB2T6D5MN8"}),w=(Object(N.a)(C),g.a.firestore()),I=Object(S.c)(),T=new S.a;function P(e){var t="People-SharingAllowed",n=w.collection(t).where("owner","==",e.user),a=Object(c.useState)(!1),i=Object(j.a)(a,2),s=(i[0],i[1]),o=w.collection(t),d=Object(f.a)(n),u=Object(j.a)(d,3),p=u[0],m=u[1];u[2];console.log(p),m||p&&p.docs.map(function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,Object(x.a)(t.ref);case 3:return e.t1=e.sent.data().title,e.abrupt("return",e.t0.log.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var O=null;p&&(O=!1===m?p.docs.map((function(e){return e.data()})):[]);var k=Object(c.useState)(!1),N=Object(j.a)(k,2),S=(N[0],N[1],Object(c.useState)(!1)),C=Object(j.a)(S,2),I=(C[0],C[1],Object(c.useState)(0)),T=Object(j.a)(I,2),P=(T[0],T[1],Object(c.useState)({type:"home"})),D=Object(j.a)(P,2),A=D[0],E=D[1];function L(){s(!1),E({type:"home"})}function F(){return(F=Object(l.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],m){e.next=7;break}return c=o.doc(t).collection(t),e.next=5,Object(x.b)(c);case 5:e.sent.forEach((function(e){n.push([e.data().id,e.data().title,e.data().completed,e.data().priority])}));case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(l.a)(r.a.mark((function e(t,n,c,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.doc(t).collection(t).doc(n).update({title:c,completed:a,priority:i});case 2:s(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(l.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.doc(t).update({title:n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(l.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.doc(t).collection(t).doc(n).delete();case 2:s(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={home:Object(b.jsxs)(b.Fragment,{children:[m&&Object(b.jsx)("h1",{children:"Loading"}),Object(b.jsx)("signedInPage",{}),Object(b.jsx)("button",{onClick:function(){return e.signOut()},children:" Sign Out "}),Object(b.jsx)(h,{updateList:function(e,t){return H.apply(this,arguments)},handleDelete:function(e,t){o.doc(e).delete(),t.stopPropagation()},setData:function(t){var n={id:Object(y.a)(),title:t,owner:e.user};o.doc(n.id).set(n)},data:O,onListClick:function(e){return E({type:"list",selectedId:e})}})]}),list:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{tabIndex:"0",onKeyPress:function(e){("Enter"===e.key||"Space"===e.code)&&L()},onClick:function(){return L()},alt:"Back Arrow",src:"long-arrow-alt-left-solid.svg",className:"back-arrow"}),O&&Object(b.jsx)(v,{collectionRef:o,query:f.a,deleteTask:function(e,t){return B.apply(this,arguments)},updateTask:function(e,t,n,c,a){return K.apply(this,arguments)},setFetch:s,fetch:m,data:O.filter((function(e){return e.id==A.selectedId})),getDocInfo:function(e){return F.apply(this,arguments)},addListItem:function(e,t,n){var c={id:Object(y.a)(),title:t,completed:!1,priority:n,created:g.a.database.ServerValue.TIMESTAMP};e.collection(e.id).doc(c.id).set(c),s(!1)},list:o.doc(A.selectedId)})]})};return Object(b.jsx)("div",{children:M[A.type]})}var D=function(e){var t,n,a,i,s=Object(c.useState)({type:"trueHome"}),o=Object(j.a)(s,2),r=o[0],l=o[1],p=Object(c.useState)(""),m=Object(j.a)(p,2),O=m[0],h=m[1],f=Object(c.useState)(""),x=Object(j.a)(f,2),g=x[0],k=x[1],v=Object(c.useState)(""),y=Object(j.a)(v,2),N=y[0],C=y[1],w=Object(c.useState)(!0),D=Object(j.a)(w,2),A=D[0],E=D[1],L=Object(c.useState)(!0),F=Object(j.a)(L,2),K=F[0],H=F[1];function B(){Object(S.e)(I,T).then((function(e){S.a.credentialFromResult(e).accessToken;var t=e.user;C(t.uid),console.log("Signed In!"),console.log(t),l({type:"home"})})).catch((function(e){e.code,e.message,e.email,S.a.credentialFromError(e);console.log("try signing in again!"),E(!1)}))}return{signIn:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{tabIndex:"0",onKeyPress:function(e){("Enter"===e.key||"Space"===e.code)&&l({type:"trueHome"})},onClick:function(){return l({type:"trueHome"})},alt:"Back Arrow",src:"long-arrow-alt-left-solid.svg",className:"back-arrow"}),Object(b.jsx)("h1",{className:"homeName",children:"Sign into your Account"}),!A&&Object(b.jsx)("p",{className:"wrongPass",children:"Wrong username or password"}),Object(b.jsxs)("div",{className:"authbuttons",children:[Object(b.jsx)("input",{className:"authitems",placeholder:"Email",type:"text",name:"email",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("input",{className:"authitems",placeholder:"Password",type:"password",name:"password",onChange:function(e){return k(e.target.value)}}),Object(b.jsx)("button",(t={className:"authitems"},Object(u.a)(t,"className","authSubmit"),Object(u.a)(t,"onClick",(function(){return e=O,t=g,void Object(S.d)(I,e,t).then((function(e){var t=e.user;C(t.uid),console.log("Signed In!"),console.log(t),l({type:"home"})})).catch((function(e){e.code,e.message,console.log("try signing in again!"),E(!1)}));var e,t})),Object(u.a)(t,"children"," Sign In "),t)),Object(b.jsx)("p",{className:"authOption",children:"or"}),Object(b.jsx)("button",(n={className:"authitems"},Object(u.a)(n,"className","authSubmit"),Object(u.a)(n,"onClick",(function(){return B()})),Object(u.a)(n,"children","Sign In with Google"),n))]})]}),signUp:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{tabIndex:"0",onKeyPress:function(e){("Enter"===e.key||"Space"===e.code)&&l({type:"trueHome"})},onClick:function(){return l({type:"trueHome"})},alt:"Back Arrow",src:"long-arrow-alt-left-solid.svg",className:"back-arrow"}),Object(b.jsx)("h1",{className:"homeName",children:"Create an Account"}),!K&&Object(b.jsx)("p",{className:"wrongPass",children:"Invalid email or password"}),Object(b.jsxs)("div",{className:"authbuttons",children:[Object(b.jsx)("input",{className:"authitems",placeholder:"Email",type:"text",name:"email",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("input",{className:"authitems",placeholder:"Password",type:"password",name:"password",onChange:function(e){return k(e.target.value)}}),Object(b.jsx)("button",(a={className:"authitems"},Object(u.a)(a,"className","authSubmit"),Object(u.a)(a,"onClick",(function(){return e=O,t=g,void Object(S.b)(I,e,t).then((function(e){var t=e.user;console.log("Signed Up!"),C(t.uid),l({type:"home"})})).catch((function(e){e.code,e.message,console.log("try signing up again!"),H(!1)}));var e,t})),Object(u.a)(a,"children"," Sign Up "),a)),Object(b.jsx)("p",{className:"authOption",children:"or"}),Object(b.jsx)("button",(i={className:"authitems"},Object(u.a)(i,"className","authSubmit"),Object(u.a)(i,"onClick",(function(){return B()})),Object(u.a)(i,"children","Sign Up with Google"),i))]})]}),trueHome:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"homeName",children:"Home"}),Object(b.jsxs)("div",{className:"authbuttons",children:[Object(b.jsx)("button",{onClick:function(){return l({type:"signIn"})},children:"Sign In"}),Object(b.jsx)("p",{className:"authOption",children:"or"}),Object(b.jsx)("button",{className:"authSubmit",onClick:function(){return l({type:"signUp"})},children:"Create an Account"})]})]}),home:Object(b.jsx)("div",{children:Object(b.jsx)(P,Object(d.a)(Object(d.a)({},e),{},{user:N,signOut:function(){l({type:"trueHome"})}}))})}[r.type]},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),A()}},[[58,1,2]]]);
//# sourceMappingURL=main.6dc7214b.chunk.js.map