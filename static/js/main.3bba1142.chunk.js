(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__26eSZ",title:"ContactForm_title__PH40X",btn:"ContactForm_btn__23rSF",btnText:"ContactForm_btnText__2SurI",input:"ContactForm_input__3iw69"}},12:function(t,e,n){t.exports={listItem:"ContactList_listItem__2Hxs2",deskription:"ContactList_deskription__36uW-",list:"ContactList_list__3I8cV",btn:"ContactList_btn__vpSLx",btnText:"ContactList_btnText__2_Tcn"}},15:function(t,e,n){t.exports={container:"Filter_container__3EZjQ",title:"Filter_title__3zx5j",input:"Filter_input__7_Oo1","input-appear":"Filter_input-appear__1kFsy","input-appear-active":"Filter_input-appear-active__2H4VI"}},37:function(t,e,n){t.exports={alertMessage:"alert_alertMessage__1v1au"}},38:function(t,e,n){t.exports={title:"title_title__1aPmn"}},39:function(t,e,n){t.exports={appear:"titleAnimation_appear__2fCj-",appearActive:"titleAnimation_appearActive__184Yv"}},40:function(t,e,n){t.exports={container:"App_container__Dd-KS"}},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n(9),i=n.n(r),s=n(18),o=n(19),l=n(21),u=n(20),b=n(8),j=n(11),m=n(10),p=n.n(m),d=n(22),h=n.n(d),f=n(2),O=Object(f.b)("contact/addRequest"),x=Object(f.b)("contact/addSuccess"),_=Object(f.b)("contact/addError"),v=Object(f.b)("contact/fetchRequest"),g=Object(f.b)("contact/fetchSuccess"),C=Object(f.b)("contact/fetchError"),N=Object(f.b)("contact/removeRequest"),F=Object(f.b)("contact/removeSuccess"),E=Object(f.b)("contact/removeError"),y=(Object(f.b)("ADD_CONTACT"),Object(f.b)("REMOVE_CONTACT"),Object(f.b)("CHANGE_FITER")),I={addContact:function(t){return function(e){e(O()),h.a.post("http://localhost:2000/contacts",Object(j.a)({},t)).then((function(t){e(x(t.data))})).catch((function(t){return e(_(t))}))}},fetchContact:function(){return function(t){t(v()),h.a.get("http://localhost:2000/contacts").then((function(e){var n=e.data;return t(g(n))})).catch((function(e){return t(C(e))}))}},removeContact:function(t){return function(e){e(N()),h.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){e(F(t))})).catch((function(t){return e(E(t))}))}}},S=n(7),k=n(37),T=n.n(k);function A(t){var e=t.children;return Object(c.jsx)("div",{className:T.a.alertMessage,children:e})}var w=n(75),L=(n(72),n(17)),R=function(t){return t.contacts},D=function(t){return t.filter},M={getContact:R,getFilteredItems:Object(L.a)([R,D],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getVisibleFilter:function(t){return t.contacts.length>1},getFilter:D},V={name:"",number:"",isExists:!1},H=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state=Object(j.a)({},V),t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(b.a)({},c,a))},t.getIsExist=function(){return!!t.props.contacts.find((function(e){return e.name===t.state.name}))},t.toggleIsExist=function(){return t.setState((function(t){return{isExists:!t.isExists}}))},t.handleSubmit=function(e){if(e.preventDefault(),t.getIsExist())t.toggleIsExist(),console.log(t.state.isExists),setTimeout((function(){t.toggleIsExist()}),1500);else{var n=t.state,c=n.name,a=n.number;t.props.addContact({name:c,number:a}),t.reset()}},t.reset=function(){t.setState(Object(j.a)({},V))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.isExists;return console.log(a),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("h2",{className:p.a.title,children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:p.a.input})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("h2",{className:p.a.title,children:"Phone"}),Object(c.jsx)("input",{type:"text",name:"number",placeholder:"Enter phone",value:n,onChange:this.handleChange,className:p.a.input})]}),Object(c.jsxs)("button",{type:"submit",className:p.a.btn,children:[" ",Object(c.jsx)("span",{className:p.a.btnText,children:"add contact"})]})]}),Object(c.jsx)(w.a,{in:a,timeout:250,classNames:"alert",unmountOnExit:!0,children:Object(c.jsx)(A,{children:"Is already in contacts."})})]})}}]),n}(a.Component),P={addContact:I.addContact},q=Object(S.b)((function(t,e){return{contacts:M.getContact(t)}}),P)(H),J=n(15),X=n.n(J);var Z,z={filterRender:y},B=Object(S.b)((function(t){return{filter:M.getFilter(t),visibleFilter:M.getVisibleFilter(t)}}),z)((function(t){var e=t.filter,n=t.filterRender,a=t.visibleFilter;return Object(c.jsx)(w.a,{in:!!a,timeout:250,classNames:X.a.input,unmountOnExit:!0,children:Object(c.jsx)("div",{className:X.a.container,children:Object(c.jsxs)("label",{children:[Object(c.jsx)("h2",{className:X.a.title,children:"Find contact by name"}),Object(c.jsx)("input",{type:"text",name:"filter",placeholder:"Finder",value:e,onChange:function(t){return n(t.target.value)},className:X.a.input})]})})})})),G=n(76),K=n(12),Q=n.n(K),W=(n(73),{deleteItem:I.removeContact}),Y=Object(S.b)((function(t){return{array:M.getFilteredItems(t)}}),W)((function(t){var e=t.array,n=t.deleteItem;return Object(c.jsx)(G.a,{component:"ul",className:Q.a.list,children:e.map((function(t){return Object(c.jsx)(w.a,{timeout:250,classNames:"item",children:Object(c.jsxs)("li",{className:Q.a.listItem,children:[Object(c.jsx)("span",{className:Q.a.deskription,children:t.name}),Object(c.jsx)("span",{className:Q.a.deskription,children:t.number}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:Q.a.btn,children:Object(c.jsx)("span",{className:Q.a.btnText,children:"X"})})]},t.id)},t.id)}))})})),U=n(38),$=n.n(U),tt=function(t){var e=t.title;return Object(c.jsx)("h1",{className:$.a.title,children:e})},et=n(39),nt=n.n(et),ct=n(40),at=n.n(ct),rt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContact()}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:at.a.container,children:[Object(c.jsx)(w.a,{in:!0,appear:!0,classNames:nt.a,unmountOnExid:!0,timeout:500,children:Object(c.jsx)(tt,{title:"Phonebook"})}),Object(c.jsx)(q,{}),Object(c.jsx)(B,{}),Object(c.jsx)(Y,{})]})})}}]),n}(a.Component),it={onFetchContact:I.fetchContact},st=Object(S.b)(null,it)(rt),ot=n(41),lt=Object(f.c)([],(Z={},Object(b.a)(Z,g,(function(t,e){return e.payload})),Object(b.a)(Z,x,(function(t,e){return[].concat(Object(ot.a)(t),[Object(j.a)({},e.payload)])})),Object(b.a)(Z,F,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Z)),ut=Object(f.c)("",Object(b.a)({},y,(function(t,e){return e.payload}))),bt=Object(f.a)({reducer:{contacts:lt,filter:ut}});bt.subscribe((function(){localStorage.setItem("Contacts",JSON.stringify(bt.getState().contacts))}));var jt=bt;i.a.render(Object(c.jsx)(S.a,{store:jt,children:Object(c.jsx)(st,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.3bba1142.chunk.js.map