(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),l=c(29),n=c.n(l),a=(c(36),c(13)),i=c(2),j=c(0);function d(){return Object(j.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-purple-900 p-6 ",children:[Object(j.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6 ",children:Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"Repositorio"})})}),Object(j.jsxs)("div",{id:"menu",className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto ",children:[Object(j.jsx)("div",{className:"text-sm lg:flex-grow"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"text-white"}),Object(j.jsx)(a.b,{to:"/upload",children:Object(j.jsx)("a",{href:"/#",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-200 mt-4 lg:mt-0 ",children:" Subir imagen "})})]})]})]})}var o=c(12),b=c.n(o),x=c(14),h=c(8),m=c(15),u=c.n(m);function p(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1];Object(s.useEffect)((function(){l()}),[]);var l=function(){var e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://shiyogallery-backend.herokuapp.com/posts/").then((function(e){console.log(e.data);var t=e.data;r(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:c.map((function(e){return Object(j.jsx)("div",{className:"",children:Object(j.jsx)("div",{className:"grid grid-cols-4 sm:grid-cols-2 mt-3",children:Object(j.jsxs)("div",{className:"bg-indigo-900 mb-6 shadow-lg w-72 h-72 p-3",children:[Object(j.jsx)("h1",{className:"text-white font-bold text-center",children:e.creator}),Object(j.jsx)("img",{className:"mt-1 h-52 block w-full",src:e.selectedFile}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{className:"text-white font-semibold text-center",children:e.description})]})})})}))})}function O(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("div",{children:Object(j.jsx)(d,{})}),Object(j.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-4",children:Object(j.jsx)(p,{})})]})})}c(62);function f(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],l=Object(s.useState)(""),n=Object(h.a)(l,2),a=n[0],i=n[1],d=Object(s.useState)(""),o=Object(h.a)(d,2),m=o[0],p=o[1],O=Object(s.useState)(""),f=Object(h.a)(O,2),g=f[0],v=f[1],N=Object(s.useState)(null),w=Object(h.a)(N,2),y=w[0],k=w[1],I=Object(s.useRef)(),S=new FormData;S.append("title",a),S.append("description",m),S.append("creator",g),S.append("tags",c),S.append("selectedFile",y);var C=function(){var e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://shiyogallery-backend.herokuapp.com/posts/",S).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"grid grid-rows-1 bg-purple-900 w-2/3 p-16",children:[Object(j.jsxs)("div",{className:"grid grid-cols-1",children:[Object(j.jsx)("h1",{className:"text-purple-100 text-center font-bold mb-4 text-3xl",children:"Subir imagen"}),Object(j.jsxs)("div",{className:"space-y-4",children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{className:"text-white mb-2 block font-bold",for:"userInput",children:"Creador"}),Object(j.jsx)("input",{className:"border-2 border-gray-400 w-full p-3 outline-none focus:border-indigo-200",value:g,type:"text",id:"creatorInput",onChange:function(e){var t=e.target.value;return v(t)}})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{className:"text-white mb-2 block font-bold",for:"titleInput",children:"Titulo"}),Object(j.jsx)("input",{className:"border border-gray-400 w-full p-3",value:a,type:"text",id:"titleInput",onChange:function(e){var t=e.target.value;return i(t)}})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{className:"text-white mb-2 block font-bold",for:"descriptionInput",children:"Descripci\xf3n"}),Object(j.jsx)("textarea",{className:"border border-gray-400 w-full p-3",value:m,type:"text",id:"descriptionInput",onChange:function(e){var t=e.target.value;return p(t)}})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{className:"text-white mb-2 block font-bold",for:"generoInput",children:"Categoria"}),Object(j.jsx)("input",{className:"border border-gray-400 w-full p-3",value:c,type:"text",id:"generoInput",onChange:function(e){var t=e.target.value;return r(t)}})]}),Object(j.jsxs)("div",{className:"mt-5 mb-4",children:[Object(j.jsx)("label",{className:"text-white mr-2 block font-bold",for:"fileInput",children:"Subir imagen"}),Object(j.jsx)("input",{className:"",ref:I,type:"file",id:"fileInput",onChange:function(e){return function(e){k(e)}(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"mt-2",children:Object(j.jsx)("a",{className:"p-3  text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-700 cursor-pointer w-full",onClick:C,children:"Agregar"})})]}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{})]})}function g(){return Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"flex justify-center mt-10 content-center flex-auto",children:Object(j.jsx)(f,{})})]})}function v(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/upload",exact:!0,children:Object(j.jsx)(g,{})})]})})}function N(){var e=document.getElementById("menu");return Object(j.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-purple-900 p-6",children:[Object(j.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:Object(j.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"Repository"})}),Object(j.jsx)("div",{className:"block lg:hidden",children:Object(j.jsx)("button",{onClick:function(){e.classList.toggle("hidden")},className:"flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-100 hover:text-white hover:border-white",children:Object(j.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("title",{children:"Menu"}),Object(j.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),Object(j.jsxs)("div",{id:"menu",className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto  ",children:[Object(j.jsx)("div",{className:"text-sm lg:flex-grow"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"text-white"}),Object(j.jsx)("a",{href:"/#",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-200 mt-4 lg:mt-0",children:" Ingresar "})]})]})]})}var w=c(31),y=c.n(w);c(63);function k(){return Object(j.jsxs)(y.a,{children:[Object(j.jsx)("div",{className:"h-20","data-src":"https://wallpapercave.com/wp/wp5106253.jpg"}),Object(j.jsx)("div",{className:"h-20","data-src":"https://wallpapercave.com/wp/wp5167395.jpg"}),Object(j.jsx)("div",{className:"h-20","data-src":"https://wallpapercave.com/wp/wp5167468.png"})]})}var I=c(9);function S(){return Object(j.jsxs)("div",{className:"grid grid-cols-3 bg-purple-900 ",children:[Object(j.jsx)("div",{className:"flex justify-center bg-purple-900 mt-5",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-indigo-100 ",children:"Desarrollador"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.f,{className:"mr-1"}),"Bryan Garcia"]})})]})}),Object(j.jsx)("div",{className:"flex justify-center bg-purple-900 mt-5",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-indigo-100 ",children:"Tecnologias"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.c,{className:"mr-1"}),"JavaScript"]}),Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.e,{className:"mr-1"}),"Node.js"]}),Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.f,{className:"mr-1"}),"React.js"]})]})]})}),Object(j.jsx)("div",{className:"flex justify-center bg-purple-900 mt-5 mb-5",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"font-bold text-indigo-100 ",children:"Redes Sociales"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.d,{className:"mr-1"}),Object(j.jsx)("a",{className:"hover:bg-purple-200 hover:text-white",href:"#",children:"Linkedin"})]}),Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.b,{className:"mr-1"}),Object(j.jsx)("a",{className:"hover:bg-purple-200 hover:text-white",href:"#",children:"Github"})]}),Object(j.jsxs)("li",{className:"text-indigo-100 flex items-center mt-4",children:[Object(j.jsx)(I.a,{className:"mr-1"}),Object(j.jsx)("a",{className:"hover:bg-purple-200 hover:text-white",href:"#",children:"Facebook"})]})]})]})})]})}function C(){return Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("div",{children:Object(j.jsx)(N,{})}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)(k,{})}),Object(j.jsx)("div",{className:"mt-10",children:Object(j.jsx)(S,{})})]})}function F(){return Object(j.jsx)(v,{children:Object(j.jsx)(C,{})})}n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.333756d8.chunk.js.map