(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"ContactForm_form__1MNB6",formLabel:"ContactForm_formLabel__1CCRZ",button:"ContactForm_button__2shsq"}},12:function(e,t,n){e.exports=n(26)},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(5),m=n(6),i=n(7),u=n(10),s=n(11),d=n(1),b=n.n(d),f=function(e){var t=e.onSubmit,n=e.state,a=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:b.a.form,onSubmit:t},r.a.createElement("label",{className:b.a.formLabel},"Name",r.a.createElement("input",{type:"text",name:"name",value:n.name,onChange:a})),r.a.createElement("label",{className:b.a.formLabel},"Number",r.a.createElement("input",{type:"number",name:"number",value:n.number,onChange:a})),r.a.createElement("button",{className:b.a.button,type:"submit"},"Add contact")))},h=function(e){var t=e.children,n=e.tittle;return r.a.createElement("div",null,r.a.createElement("h2",null,n),t)},C=n(8),p=n.n(C),E=function(e){var t=e.state,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:p.a.form},"Find contacts by name",r.a.createElement("input",{type:"text",name:"filter",value:t.filter,onChange:n})))},g=function(e){var t=e.deleteContact,n=e.id;return r.a.createElement("button",{id:n,onClick:t},"Delete contact")},v=function(e){var t=e.state,n=e.deleteContact;return r.a.createElement("ul",null,t.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.filter)})).map((function(e){return r.a.createElement("li",{key:e.id},e.name,": ",e.number,r.a.createElement(g,{deleteContact:n,id:e.id}))})))},y=n(9),L=n.n(y),S=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.onSubmit=function(t){t.preventDefault(),e.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.state.name.toLocaleLowerCase()}))?alert("".concat(e.state.name," is already exist")):e.setState((function(t){return t.contacts.push({name:e.state.name,number:e.state.number,id:L.a.generate()}),{name:"",number:""}}))},e.deleteContact=function(t){t.preventDefault();var n=e.state.contacts;e.state.contacts.forEach((function(a,r){if(a.id===t.target.id)return e.setState((function(e){return{contact:n.splice(r,1)}}))}))},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{tittle:"Phonebook"},r.a.createElement(f,{onSubmit:this.onSubmit,state:this.state,handleChange:this.handleChange})),r.a.createElement(h,{tittle:"Contacts"},r.a.createElement(E,{state:this.state,handleChange:this.handleChange}),r.a.createElement(v,{state:this.state,deleteContact:this.deleteContact})))}}]),n}(a.Component);n(25);c.a.render(r.a.createElement(S,null),document.getElementById("root"))},8:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.31d3c624.chunk.js.map