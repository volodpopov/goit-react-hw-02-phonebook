(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={container:"Phonebook_container__1EWMB",title:"Phonebook_title__1ISqg",contact_list:"Phonebook_contact_list__2LVgg",contact_item:"Phonebook_contact_item__1VT4W",button_del:"Phonebook_button_del__GGxKm",button_add:"Phonebook_button_add__35EC_ Phonebook_button_del__GGxKm",form:"Phonebook_form__3bMVj",label:"Phonebook_label__21RoR"}},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),o=n.n(c),r=n(9),i=n.n(r),s=(n(16),n(8)),l=n(3),u=n(4),b=n(6),m=n(5),h=n(19),d=n(10),j=n(1),_=n.n(j),f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChenge=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(d.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:_.a.label,children:[Object(a.jsx)("span",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"enter contact name",value:this.state.name,onChange:this.handleChenge})]}),Object(a.jsxs)("label",{className:_.a.label,children:[Object(a.jsx)("span",{children:"Number"}),Object(a.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"example: 123-45-67",value:this.state.number,onChange:this.handleChenge})]}),Object(a.jsx)("button",{className:_.a.button_add,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),p=function(e){var t=e.contactNames,n=e.onDelete;return 0===t.length?null:Object(a.jsx)("ul",{className:_.a.contact_list,children:t.map((function(e){var t=e.id,c=e.name,o=e.number;return Object(a.jsxs)("li",{className:_.a.contact_item,children:[Object(a.jsxs)("p",{children:[c,": ",o]}),Object(a.jsx)("button",{className:_.a.button_del,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},O=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{className:_.a.contact_list,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:t,onChange:n})]})},x=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={id:Object(h.a)(),name:t,number:n};""!==a.name.trim()&&""!==a.number.trim()&&e.setState((function(e){return e.contacts.reduce((function(e,t){return[].concat(Object(s.a)(e),[t.name])}),[]).includes(a.name)?(alert("".concat(a.name," is already in contacts.")),null):{contacts:[a].concat(Object(s.a)(e.contacts))}}))},e.chengeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsx)("h2",{className:_.a.title,children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.addContact}),Object(a.jsx)("h2",{className:_.a.title,children:"Contacts"}),Object(a.jsx)(O,{value:e,onChange:this.chengeFilter}),Object(a.jsx)(p,{contactNames:n,onDelete:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4bb4e996.chunk.js.map