(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{25:function(s,e,t){},46:function(s,e,t){"use strict";t.r(e);var a=t(3),c=t.n(a),n=t(15),i=t.n(n),l=(t(25),t(16)),r=t(2),d=t.n(r),o=t(5),j=t(17),h=t(18),b=t(20),u=t(19),m=t(4),x=t.n(m),O=t(0),p="http://localhost:3000";x.a.defaults.withCredentials=!0;var v=function(s){Object(b.a)(t,s);var e=Object(u.a)(t);function t(){var s;return Object(j.a)(this,t),(s=e.call(this)).handleLogout=function(){s.setState({user:null,incidents:null,events:null,incidentDetails:null,passwordIsFalse:!1,emailIsFalse:!1,email:"",password:""})},s.handleLoginForm=function(){var e=Object(o.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({email:s.state.email,password:s.state.password}),e.next=3,x.a.post("".concat(p,"/admin/login"),a,{headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0});case 3:c=e.sent,console.log(c.data),s.setState({user:c.data.data,passwordIsFalse:!c.data.password,emailIsFalse:!c.data.email,password:"",email:""}),s.state.user&&(s.getAllIncidents(),s.getAllEvents());case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),s.getAllIncidents=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(p,"/api/incidents"));case 2:return t=e.sent,e.next=5,t.data;case 5:a=e.sent,s.setState({incidents:a.data});case 7:case"end":return e.stop()}}),e)}))),s.getAllEvents=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(p,"/api/events"));case 2:return t=e.sent,e.next=5,t.data;case 5:a=e.sent,s.setState({events:a.data});case 7:case"end":return e.stop()}}),e)}))),s.getDetails=function(){var e=Object(o.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(p,"/api/incidents/").concat(t));case 2:return a=e.sent,e.next=5,a.data;case 5:c=e.sent,s.setState({incidentDetails:c});case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),s.onChange=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.returnIncidents=function(s){return Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h2",{className:"title is-3",children:s.title}),s.data.map((function(s,e){return Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"columns",children:[Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Incident n\xb0"}),Object(O.jsxs)("h3",{className:"subtitle",children:["#\xa0",s.number]})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Cause"}),Object(O.jsx)("p",{className:"subtitle",children:s.type})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Status"}),Object(O.jsx)("p",{className:"subtitle",children:s.resolution_date?"R\xe9solu":"En cours"})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Change"}),s.resolution_date?Object(O.jsxs)("button",{class:"button is-info",disabled:!0,children:[Object(O.jsx)("span",{class:"icon is-small",children:Object(O.jsx)("i",{class:"fas fa-check"})}),Object(O.jsx)("span",{children:"Solved"})]}):Object(O.jsxs)("button",{class:"button is-success",children:[Object(O.jsx)("span",{class:"icon is-small",children:Object(O.jsx)("i",{class:"fas fa-check"})}),Object(O.jsx)("span",{children:"Close"})]})]})]})},e)}))]})},s.returnEvents=function(s){return console.log(s),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h2",{className:"title is-3",children:s.title}),s.data.map((function(s,e){return Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"columns",children:[Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Nom"}),Object(O.jsx)("h3",{className:"subtitle",children:s.name}),Object(O.jsx)("h3",{className:"title is-5",children:"Capacit\xe9"}),Object(O.jsx)("p",{className:"subtitle",children:s.capacity})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Hours"}),Object(O.jsxs)("p",{className:"subtitle",children:[s.opening_hour,Object(O.jsx)("br",{}),s.closing_hour]})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Status"}),Object(O.jsx)("p",{className:"subtitle",children:s.opened?Object(O.jsx)("div",{class:"button is-primary",children:"Ouvert"}):Object(O.jsx)("div",{class:"button is-danger",children:"Ferm\xe9"})})]}),s.opened&&Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h3",{className:"title is-5",children:"Incident"}),Object(O.jsx)("div",{class:"button is-danger",children:"Maintenance"})]})]})},e)}))]})},s.state={user:null,incidents:null,incidentDetails:null,passwordIsFalse:!1,emailIsFalse:!1,email:"",password:""},s}return Object(h.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{id:"App",children:this.state.user?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("nav",{class:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(O.jsx)("div",{class:"navbar-brand",children:Object(O.jsx)("h1",{class:"navbar-item",children:"oParc Dashboard"})}),Object(O.jsxs)("div",{class:"navbar-end",children:[Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsxs)("p",{children:["Connect\xe9 en tant que",this.state.user.email]})}),Object(O.jsx)("div",{class:"navbar-item",children:Object(O.jsx)("div",{class:"buttons",children:Object(O.jsx)("div",{class:"button is-danger",onClick:this.handleLogout,children:Object(O.jsx)("strong",{children:"Log out"})})})})]})]}),Object(O.jsxs)("div",{class:"columns",children:[this.state.incidents&&Object(O.jsx)(this.returnIncidents,{title:"Liste des incidents en cours",data:this.state.incidents}),this.state.events&&Object(O.jsx)(this.returnEvents,{title:"Liste des attractions",data:this.state.events})]})]}):Object(O.jsxs)("div",{class:"modal is-active",children:[Object(O.jsx)("div",{class:"modal-background"}),Object(O.jsxs)("div",{class:"modal-card",children:[Object(O.jsx)("header",{class:"modal-card-head",children:Object(O.jsx)("p",{class:"modal-card-title",children:"o'Parc Dashboard"})}),Object(O.jsxs)("section",{class:"modal-card-body",children:[Object(O.jsxs)("div",{class:"field",children:[Object(O.jsx)("label",{class:"label",children:"E-mail"}),Object(O.jsxs)("p",{class:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{class:this.state.emailIsFalse?"input is-danger":"input",name:"email",type:"email",value:this.state.email,onChange:this.onChange,placeholder:"john.doe@oparc.io"}),Object(O.jsx)("span",{class:"icon is-small is-left",children:Object(O.jsx)("i",{class:"fas fa-envelope"})})]}),this.state.emailIsFalse&&Object(O.jsx)("p",{class:"help is-danger",children:"This email doesn't exist"})]}),Object(O.jsxs)("div",{class:"field",children:[Object(O.jsx)("label",{class:"label",children:"Password"}),Object(O.jsxs)("p",{class:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{class:this.state.passwordIsFalse&&!this.state.emailIsFalse?"input is-danger":"input",name:"password",type:"password",value:this.state.password,onChange:this.onChange,placeholder:"Y0urS3cr3Tp4ssw0rd"}),Object(O.jsx)("span",{class:"icon is-small is-left",children:Object(O.jsx)("i",{class:"fas fa-lock"})})]}),this.state.passwordIsFalse&&!this.state.emailIsFalse&&Object(O.jsx)("p",{class:"help is-danger",children:"This password is incorrect"})]})]}),Object(O.jsx)("footer",{class:"modal-card-foot",children:Object(O.jsx)("button",{class:"button is-success",onClick:this.handleLoginForm,children:"Login"})})]})]})})}}]),t}(a.Component);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.191387d6.chunk.js.map