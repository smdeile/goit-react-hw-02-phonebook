(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"ContactForm_form__1MNB6",formLabel:"ContactForm_formLabel__1CCRZ",button:"ContactForm_button__2shsq"}},13:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(10),m=n(5),i=n(6),u=n(7),s=n(11),b=n(12),d=n(1),f=n.n(d),h=function(e){var t=e.onSubmit,n=e.state,a=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:f.a.form,onSubmit:t},r.a.createElement("label",{className:f.a.formLabel},"Name",r.a.createElement("input",{type:"text",name:"name",value:n.name,onChange:a})),r.a.createElement("label",{className:f.a.formLabel},"Number",r.a.createElement("input",{type:"number",name:"number",value:n.number,onChange:a})),r.a.createElement("button",{className:f.a.button,type:"submit"},"Add contact")))},C=function(e){var t=e.children,n=e.tittle;return r.a.createElement("div",null,r.a.createElement("h2",null,n),t)},E=n(8),p=n.n(E),g=function(e){var t=e.state,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:p.a.form},"Find contacts by name",r.a.createElement("input",{type:"text",name:"filter",value:t.filter,onChange:n})))},v=function(e){var t=e.deleteContact,n=e.id;return r.a.createElement("button",{key:n,onClick:t},"Delete contact")},y=function(e){var t=e.state,n=e.deleteContact;return r.a.createElement("ul",null,t.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.filter)})).map((function(e){return r.a.createElement("li",{key:e.id},e.name,": ",e.number,r.a.createElement(v,{deleteContact:function(){return n(e.id)},id:e.id}))})))},L=n(9),k=n.n(L),S=function(e){Object(b.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.onSubmit=function(t){t.preventDefault(),e.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.state.name.toLocaleLowerCase()}))?alert("".concat(e.state.name," is already exist")):e.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[{name:e.state.name,number:e.state.number,id:k.a.generate()}]),name:"",number:""}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{tittle:"Phonebook"},r.a.createElement(h,{onSubmit:this.onSubmit,state:this.state,handleChange:this.handleChange})),r.a.createElement(C,{tittle:"Contacts"},r.a.createElement(g,{state:this.state,handleChange:this.handleChange}),r.a.createElement(y,{state:this.state,deleteContact:this.deleteContact})))}}]),n}(a.Component);n(26);o.a.render(r.a.createElement(S,null),document.getElementById("root"))},8:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.1757294c.chunk.js.map