(window.webpackJsonpbooktracker=window.webpackJsonpbooktracker||[]).push([[0],{40:function(e,t,a){e.exports=a(70)},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=a(79),i=a(18),s=a(19),u=(a(49),a(50),a(51),a(7)),m=a(8),d=a(11),h=a(9),E=a(12),p=a(80),b=a(81),g=(a(52),a(53),a(74)),f=a(72),v=a(73),w=a(75),O=a(82),k=a(76),j=a(77),y=a(78),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement(f.a,{className:"navbar navbar-dark ma",expand:"md"},r.a.createElement(v.a,{tag:g.a,to:"/"},"Book Tracker"),r.a.createElement(w.a,{onClick:this.toggle}),r.a.createElement(O.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(k.a,{className:"mr-auto",navbar:!0},r.a.createElement(j.a,null,r.a.createElement(y.a,{tag:g.a,to:"/wish-list",className:"nav-link white underline pa4 pointer"},"Books WishList")),r.a.createElement(j.a,null,r.a.createElement(y.a,{tag:g.a,to:"/currentlist",className:"nav-active-style pa4"},"Reading List")),r.a.createElement(j.a,null,r.a.createElement(y.a,{tag:g.a,to:"/add",className:"nav-link white underline pa4",value:"Add Book"},"Add Book"))),r.a.createElement(k.a,{className:"ml-auto",navbar:!0},r.a.createElement(j.a,null,r.a.createElement(y.a,{tag:g.a,to:"/login",className:"nav-active-style"},"Login")),r.a.createElement(j.a,null,r.a.createElement(y.a,{tag:g.a,to:"/signup",className:"nav-active-style"},"Sign Up"))))))}}]),t}(r.a.Component),L=a(39),C=a(13),P=(a(63),a(64),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},e.children[0]),r.a.createElement("div",{className:"col-md-9"},e.children[1])))}),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={toreadInit:["Game of Thrones","Harry Potter","Lord of the Rings"],toreads:[],toreadText:"",inputLength:0,message:!1},a.updateToreadText=a.updateToreadText.bind(Object(C.a)(a)),a.createToread=a.createToread.bind(Object(C.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({toreads:this.state.toreadInit})}},{key:"updateToreadText",value:function(e){e.target.value.length>0&&this.setState({toreadText:e.target.value,inputLength:e.target.value.length})}},{key:"createToread",value:function(e){e.preventDefault(),this.state.inputLength>0&&this.setState({toreads:[].concat(Object(L.a)(this.state.toreads),[this.state.toreadText]),toreadText:""})}},{key:"render",value:function(){var e=this.state,t=e.toreadText,a=e.toreads,n=e.message;return r.a.createElement("div",null,r.a.createElement("div",{className:"container top"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 mt-3"},r.a.createElement("h2",{className:"tc"},"Add a Book")))),r.a.createElement("div",{className:"mw9 center ph3-ns"},r.a.createElement("div",{className:"cf ph2-ns"},r.a.createElement("div",{className:"fl w-50 w-50-ns pa2"},r.a.createElement("div",{className:"booklist"},r.a.createElement("h2",{className:"tc"},"Book List"),r.a.createElement("ul",null,a.map(function(e){var t="http://www.google.com/search?q=".concat(e,"%20book");return r.a.createElement("li",{key:Math.floor(1e4*Math.random())+1},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},e))}),n?r.a.createElement("li",null,"No search results."):""))),r.a.createElement("div",{className:"fl w-50 w-50-ns pa2 bookadd mt-log-5"},r.a.createElement("form",{onSubmit:this.createToread},r.a.createElement("div",{className:"row input-group"},r.a.createElement("input",{type:"text",className:"center-block",placeholder:"Book Name",value:t,onChange:this.updateToreadText}),r.a.createElement("button",{className:"btn btn-success center-block mr-auto ml-auto"},"Add")))))))}}]),t}(n.Component),T=(a(34),a(65),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onEmailChange=function(e){a.setState({loginEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({loginPassword:e.target.value})},a.onSubmitLogin=function(){},a.state={loginEmail:"",loginPassword:"",isFailed:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form-container"},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{onChange:this.onEmailChange,className:"",type:"email",name:"email-address",id:"email-address",placeholder:"Email"}),r.a.createElement("input",{onChange:this.onPasswordChange,className:"",type:"password",name:"password",id:"password",placeholder:"Password"}),this.state.isFailed?r.a.createElement("pre",{className:"alert alert-danger"},"Wrong Email/Password"):r.a.createElement("pre",null),r.a.createElement("button",{className:"grow",onClick:this.onSubmitLogin},"Sign In"))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onNameChange=function(e){a.setState({registerName:e.target.value})},a.onEmailChange=function(e){a.setState({registerEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({registerPassword:e.target.value})},a.onSubmitSignUp=function(){},a.state={registerName:"",registerEmail:"",registerPassword:"",isFailed:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form-container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("input",{onChange:this.onNameChange,className:"",type:"name",name:"name",id:"name",placeholder:"Name"}),r.a.createElement("input",{onChange:this.onEmailChange,className:"",type:"email",name:"email-address",id:"email-address",placeholder:"Email"}),r.a.createElement("input",{onChange:this.onPasswordChange,className:"",type:"password",name:"password",id:"password",placeholder:"Password"}),this.state.isFailed?r.a.createElement("pre",{className:"alert alert-danger"},"Failed Registering Account"):r.a.createElement("pre",null),r.a.createElement("button",{className:"grow",onClick:this.onSubmitSignUp},"Register")))}}]),t}(n.Component),x=(a(66),function(e){var t=e.cbData,a=e.wlData,n=t.length,l=a.length;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"sideBar"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Read"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",null,"Wishlist"),r.a.createElement("td",null,l)),r.a.createElement("tr",null,r.a.createElement("td",null,"Current"),r.a.createElement("td",null,n)))))))))}),B=(a(67),function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"mainContent"},r.a.createElement("h1",null,"Progress on current books"),r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Author"),r.a.createElement("td",null,"Progress"),r.a.createElement("td",null),r.a.createElement("td",null))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{className:"bookRow",key:e.id},r.a.createElement("td",{className:""},e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.page),r.a.createElement("td",null,r.a.createElement("button",{key:e.id,className:"btn btn-basic btn-sm"},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{key:e.id,className:"btn btn-basic btn-sm"},"Delete")))}))))))}),W=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(x,{cbData:this.props.currentBooks,wlData:this.props.bookWishList}),r.a.createElement(B,{data:this.props.currentBooks}))}}]),t}(n.Component),I=Object(i.b)(function(e){return{currentBooks:e.books.books,bookWishList:e.wishList.wishList}},null)(W),A=(a(68),function(e){var t=e.data;e.props;return r.a.createElement("div",null,r.a.createElement("div",{className:"mainContent"},r.a.createElement("h1",null,"Books on My Wish List"),r.a.createElement("div",null,r.a.createElement("table",{className:"table",data:t},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Author"),r.a.createElement("td",null,"Progress"),r.a.createElement("td",null),r.a.createElement("td",null))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.page),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-basic btn-sm",href:""},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-basic btn-sm",href:""},"Delete")))}))))))}),R=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(x,{cbData:this.props.currentBooks,wlData:this.props.bookWishList}),r.a.createElement(A,{data:this.props.bookWishList}))}}]),t}(n.Component),_=Object(i.b)(function(e){return{currentBooks:e.books.books,bookWishList:e.wishList.wishList}},null)(R),M=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(p.a,null,r.a.createElement(b.a,{path:"/",exact:!0,component:I}),r.a.createElement(b.a,{path:"/wish-list",exact:!0,component:_}),r.a.createElement(b.a,{path:"/add",exact:!0,component:S}),r.a.createElement(b.a,{path:"/login",exact:!0,component:T}),r.a.createElement(b.a,{path:"/signup",exact:!0,component:D})))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var H=a(17);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach(function(t){Object(H.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var V={books:[],wishList:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":var a=e.books,n=a.length>0?a[a.length-1].id+1:1,r={id:n,title:t.title,author:t.author,page:t.page};return J({},e,{books:a.concat([r])});case"EDIT_BOOK":var l=e.books.slice(),o=l.findIndex(function(e){return e.id===t.id});return l[o].title=t.title,l[o].author=t.author,l[o].page=t.page,J({},e,{books:l});case"REMOVE_BOOK":var c=e.books.slice(),i=c.findIndex(function(e){return e.id===t.id}),s=c.splice(i,1);return J({},e,{books:s});default:return e}};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(H.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $={wishList:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_WISH":var a=e.wishList,n=a.length>0?a[a.length-1].id+1:1,r={id:n,title:t.title,author:t.author};return Q({},e,{wishList:a.concat([r])});case"EDIT_WISH":var l=e.wishList.slice(),o=l.findIndex(function(e){return e.id===t.id});return l[o].title=t.title,l[o].author=t.author,Q({},e,{wishList:l});case"REMOVE_WISH":var c=e.wishList.slice(),i=c.findIndex(function(e){return e.id===t.id}),s=c.splice(i,1);return Q({},e,{wishList:s});default:return e}},X=s.c,Y=Object(s.b)({books:q,wishList:z}),Z=Object(s.d)(Y,X());o.a.render(r.a.createElement(i.a,{store:Z},r.a.createElement(c.a,{basename:"/book-tracker"},r.a.createElement(M,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/book-tracker",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/book-tracker","/service-worker.js");F?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):U(e)})}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.c5d72f95.chunk.js.map