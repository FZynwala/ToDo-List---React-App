(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{114:function(e,t,n){e.exports=n(244)},238:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),c=n.n(i),o=n(6),s=n(12),u=n(110),l=n(7),p=n(8),m=n(10),d=n(9),f=n(11),h=n(22),b=n(29),v=n(71),g=n.n(v),O=n(24),k=n.n(O),E=n(43),y=n(111),j=n.n(y).a.create({baseURL:" https://arcane-headland-69370.herokuapp.com/"}),N=n(17),S=Object(N.a)(),w=function(e){return{type:"NAV_PAGE",payload:e}},I=function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/tasks/".concat(e));case 2:a=t.sent,console.log(a),n({type:"LOAD_TASKS",payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=(n(88),n(246)),D=n(245),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).onFormSubmit=function(e){n.props.onSubmit(e)},n.renderInput=function(e){var t=e.input;return r.a.createElement("div",{className:"input-bar ui segment",style:{marginTop:"10px",marginLeft:"auto",marginRight:"auto",backgroundColor:"black"}},r.a.createElement("form",{onSubmit:n.props.handleSubmit(n.onFormSubmit),className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("input",Object.assign({},t,{placeholder:"Type new task..."})))))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(T.a,{name:"newTask",component:this.renderInput}))}}]),t}(r.a.Component),P=Object(D.a)({form:"inputForm"})(C),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t={content:e.newTask,userId:n.props.userId,isDone:!1,create_date:g()(new Date).format("lll")};console.log(t),n.props.addTask(t)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(P,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),A=Object(o.b)((function(e){return{userId:e.auth.userId}}),{addTask:function(e){return function(){var t=Object(E.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.post("/tasks",e);case 2:a=t.sent,console.log(a),n({type:"ADD_TASK",payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),x=(n(70),n(28));n(238);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={done:{color:"green",text:"DONE"},pending:{color:"red",text:"PENDING"}},G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={isEditMode:!1},n.onClickStatus=function(e){var t=L({},n.props.task,{isDone:!n.props.task.isDone});n.props.editTask(n.props.task._id,t)},n.onClickDeleteButton=function(e){n.props.onClick(n.props.task.id)},n.onClickEditButton=function(){n.setState({isEditMode:!n.state.isEditMode})},n.onSubmitUpdate=function(e){e.preventDefault(),n.props.onSubmit(n.props.task.id,n.state.term),n.setState({isEditMode:!n.state.isEditMode})},n.onSubmit=function(e){var t=L({},n.props.task,{content:e.newTask});n.props.editTask(n.props.task._id,t),n.setState({isEditMode:!n.state.isEditMode})},n.editWindowRendering=function(){return n.state.isEditMode?r.a.createElement(P,{initialValues:{newTask:n.props.task.content},onSubmit:n.onSubmit}):r.a.createElement("div",{className:"header",style:{marginBottom:"10px"}},n.props.task.content)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=F[this.props.task.isDone?"done":"pending"],t=e.color,n=e.text;return r.a.createElement("div",{className:"item-box item",style:{marginBottom:"0px"}},r.a.createElement("div",{className:"content"},this.editWindowRendering(),this.props.task.create_date),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"button-status ui inverted ".concat(t," button"),onClick:this.onClickStatus},n),r.a.createElement("button",{className:"ui icon button",onClick:this.onClickEditButton},r.a.createElement("i",{className:"black edit outline icon"})),r.a.createElement(h.b,{to:"/delete/".concat(this.props.task._id),className:"ui icon button"},r.a.createElement("i",{className:"black trash alternate outline icon"}))))}}]),t}(r.a.Component),U=Object(o.b)(null,{editTask:function(e,t){return function(){var n=Object(E.a)(k.a.mark((function n(a){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.put("/tasks/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_TASK",payload:r.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(G),K=Object(D.a)({form:"editTask"})(U),R=(n(240),function(){return r.a.createElement("h2",{className:"ui center aligned icon header",style:{marginTop:"5px"}},r.a.createElement("i",{className:"circular tasks icon"}),"YOUR TO DO LIST")}),B=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.setNavFlag(this.props.conf)}},{key:"renderTasks",value:function(){return 0===this.props.tasks.length?"You haven not done anything yet!":this.props.tasks.map((function(e){if(e.isDone)return r.a.createElement(K,{task:e,key:e.id})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"task-list ui inverted segment",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:"ui inverted relaxed divided list"},this.renderTasks())))}}]),t}(r.a.Component),Y=Object(o.b)((function(e){return{tasks:Object.values(e.tasks),menu:e.menu}}),{setNavFlag:w})(B),V=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.setNavFlag(this.props.conf)}},{key:"renderTasks",value:function(){return 0===this.props.tasks.length?"You haven not done anything yet!":this.props.tasks.map((function(e){if(!e.isDone)return r.a.createElement(K,{task:e,key:e.id})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"task-list ui inverted segment",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:"ui inverted relaxed divided list"},this.renderTasks())))}}]),t}(r.a.Component),W=Object(o.b)((function(e){return{tasks:Object.values(e.tasks),menu:e.menu}}),{setNavFlag:w})(V),q=(n(241),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?(n.props.signIn(n.auth.currentUser.get().getId()),n.props.fetchTasks(n.auth.currentUser.get().getId())):(n.props.signOut(),console.log(n.props.userId),n.props.fetchTasks(n.props.userId))},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"424876389394-cliu35o07umhhtmaf6mr6nn4stmd5nvi.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("div",{className:"ui relaxed items"},r.a.createElement("div",{className:"item"},r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"))):r.a.createElement("div",{className:"ui relaxed items"},r.a.createElement("div",{className:"item"},r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component)),J=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}},fetchTasks:I})(q),X={clicked:{visible:"visible",dimmed:"dimmed"},notClicked:{visible:"",dimmed:""}},z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).onMenuClick=function(e){n.props.toggleMenu()},n.renderList=function(){var e=n.props.match.params.conf;return console.log(e),"0"===e?r.a.createElement(Z,{conf:"0"}):"1"===e?r.a.createElement(Y,{conf:"1"}):"2"===e?r.a.createElement(W,{conf:"2"}):void 0},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.menu?X.clicked:X.notClicked,n=t.visible;t.dimmed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"three wide column",id:"menu"},r.a.createElement("div",{onClick:function(){return e.onMenuClick(0)},className:"ui menu"},r.a.createElement("a",{id:"mobile_item",className:"item"},r.a.createElement("i",{className:"bars icon"})))),r.a.createElement("div",{className:"five wide column"}," "),r.a.createElement("div",{className:"eight wide column",id:"google-button"},r.a.createElement(J,null))),r.a.createElement("div",{className:"ui pushable segment"},r.a.createElement("div",{className:"ui vertical inverted sidebar labeled icon menu ".concat(n)},r.a.createElement(h.b,{to:"/0",onClick:function(){return e.onMenuClick(1)},className:"item"},r.a.createElement("i",{className:"circular tasks icon"}),"All"),r.a.createElement(h.b,{to:"/1",onClick:function(){return e.onMenuClick(2)},className:"item"},r.a.createElement("i",{className:"check icon"}),"Done"),r.a.createElement(h.b,{to:"/2",onClick:function(){return e.onMenuClick(3)},className:"item"},r.a.createElement("i",{className:"bell icon"}),"Pending")),r.a.createElement("div",{className:"".concat(this.props.menu?"dimmed":""," pusher")},r.a.createElement(R,null),this.renderList())))}}]),t}(r.a.Component),H=Object(o.b)((function(e){return{menu:e.menu}}),{toggleMenu:function(){return{type:"TOGGLE_MENU"}}})(z),Q=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.setNavFlag(this.props.conf)}},{key:"renderTasks",value:function(){return this.props.isSignedIn?0===this.props.tasks.length?"Relax! You have nothing to do right now.":this.props.tasks.map((function(e){return r.a.createElement(K,{task:e,key:e._id})})):"Please Sign In to fetch your tasks."}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"task-list ui inverted segment",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:"ui inverted relaxed divided list"},this.renderTasks())))}}]),t}(r.a.Component),Z=Object(o.b)((function(e){return{tasks:Object.values(e.tasks),menu:e.menu,isSignedIn:e.auth.isSignedIn}}),{setNavFlag:w})(Q),$=(n(242),r.a.Component,n(243),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"renderLoginPage",value:function(){if(!this.props.isSignedIn)return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("div",{className:"ui center aligned container space"},r.a.createElement("p",null,"Welcam in Your TODO List! Please Sign In with Google to fetch your tasks.")),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"ui bottom attached black button"},r.a.createElement(J,null))));this.props.history.push("/0")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderLoginPage())}}]),t}(r.a.Component)),ee=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}))($),te=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},ne=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id,n=this.props.nav;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteTask(t,n)},className:"ui primary button"},"Delete"),r.a.createElement(h.b,{to:"/".concat(n),className:"ui button"},"Cancel"))}},{key:"render",value:function(){var e=this;return r.a.createElement(te,{title:"Delete Task",content:"Are you sure you want to delete this task?",actions:this.renderActions(),onDismiss:function(){return e.props.history.push("/".concat(e.props.nav))}})}}]),t}(r.a.Component),ae=Object(o.b)((function(e){return{nav:e.nav}}),{deleteTask:function(e,t){return function(){var n=Object(E.a)(k.a.mark((function n(a){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.delete("/tasks/".concat(e));case 2:a({type:"DELETE_TASK",payload:e}),S.push("/".concat(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(ne),re=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTasks(this.props.userId)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{history:S},r.a.createElement("div",null,r.a.createElement(b.a,{path:"/",exact:!0,component:ee}),r.a.createElement(b.a,{path:"/:conf",exact:!0,component:H}),r.a.createElement(b.a,{path:"/delete/:id",exact:!0,component:ae}),r.a.createElement(b.a,{path:"/done",exact:!0,component:Y}))))}}]),t}(r.a.Component),ie=Object(o.b)((function(e){return{userId:e.auth.userId}}),{fetchTasks:I})(re),ce=n(247);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=n(76),le=n.n(ue);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return se({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return se({},e,{isSignedIn:!1,userId:null});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return me({},e,Object(x.a)({},t.payload._id,t.payload));case"LOAD_TASKS":return me({},e,{},le.a.mapKeys(t.payload,"_id"));case"EDIT_TASK":return me({},e,Object(x.a)({},t.payload._id,t.payload));case"DELETE_TASK":return le.a.omit(e,t.payload);case"SIGN_OUT":return{};default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MENU":return!e;default:return e}},nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAV_PAGE":return t.payload;default:return e}},form:ce.a.plugin({inputForm:function(e,t){switch(t.type){case"ADD_TASK":return;default:return e}}})}),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,he=Object(s.e)(de,fe(Object(s.a)(u.a)));c.a.render(r.a.createElement(o.a,{store:he},r.a.createElement(ie,null)),document.querySelector("#root"))},70:function(e,t,n){},88:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.7a7e55c8.chunk.js.map