(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(19)},function(t,e,n){},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(10);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=n(6),i=n(1),l=n(2),u=n(4),C=n(3),m=n(5),k=(n(15),n(16),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(r)))).state={taskTerm:""},n.onInputChange=function(t){n.setState({taskTerm:t.target.value})},n.onAddTaskButtonClick=function(){n.props.onAddTaskButtonClick(n.state.taskTerm),n.setState({taskTerm:""})},n.onEnterClick=function(t){"Enter"===t.key&&(n.props.onAddTaskButtonClick(n.state.taskTerm),n.setState({taskTerm:""}))},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-task-bar"},r.a.createElement("input",{value:this.state.taskTerm,onChange:this.onInputChange,onKeyDown:this.onEnterClick,type:"text"}),r.a.createElement("button",{onClick:this.onAddTaskButtonClick},"Add"))}}]),e}(r.a.Component));n(17),n(18);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=function(t){var e=t.svgRef,n=t.title,a=p(t,["svgRef","title"]);return r.a.createElement("svg",f({role:"img",width:"1000mm",height:"1000mm",viewBox:"0 0 1000 1000",style:{maxWidth:"1.3rem",height:"auto"},ref:e},a),n?r.a.createElement("title",null,n):null,r.a.createElement("path",{id:"path",style:{opacity:1,vectorEffect:"none",fill:"#ffffff",fillOpacity:1},d:" M 357 378C 344 378 332 390 333 403C 333 403 329 848 329 848C 329 857 333 866 341 870C 349 875 359 875 366 870C 374 866 379 858 379 849C 379 849 383 404 383 404C 383 397 380 391 375 386C 371 381 364 378 357 378C 357 378 357 378 357 378M 650 375C 636 375 625 386 625 400C 625 400 625 850 625 850C 625 859 630 867 637 872C 645 876 655 876 663 872C 670 867 675 859 675 850C 675 850 675 400 675 400C 675 393 672 387 668 382C 663 377 656 375 650 375C 650 375 650 375 650 375M 500 375C 486 375 475 386 475 400C 475 400 475 850 475 850C 475 859 480 867 487 872C 495 876 505 876 513 872C 520 867 525 859 525 850C 525 850 525 400 525 400C 525 393 522 387 518 382C 513 377 506 375 500 375C 500 375 500 375 500 375M 198 299C 198 299 800 299 800 299C 800 299 800 850 800 850C 800 913 759 950 700 950C 700 950 300 950 300 950C 238 950 200 911 201 855C 201 855 198 299 198 299M 438 138C 438 138 438 187 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138M 425 63C 425 63 575 63 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 425 63 425 63",transform:""}))},h=r.a.forwardRef((function(t,e){return r.a.createElement(d,f({svgRef:e},t))})),v=(n.p,function(t){var e=t.task,n=t.onDeleteItemClick,a=t.onTaskItemClick;return r.a.createElement("div",{className:"task-item"},r.a.createElement("div",{onClick:function(){return a(e.name)},className:e.complete?"task-item-content complete":"task-item-content"},e.name),r.a.createElement(h,{onClick:function(){return n(e.name)},title:"delete icon"}))}),b=function(t){var e=t.tasks,n=t.onDeleteItemClick,a=t.onTaskItemClick;if(e){var c=e.map((function(t){return r.a.createElement(v,{onDeleteItemClick:n,onTaskItemClick:a,key:t.name,task:t})}));return r.a.createElement("div",{className:"task-list"},c)}},y=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(r)))).state={tasks:[]},n.onAddTaskButtonClick=function(t){t&&(n.state.tasks.find((function(e){return e.name===t}))||n.setState({tasks:[].concat(Object(s.a)(n.state.tasks),[{name:t,complete:!1}])}))},n.onDeleteItemClick=function(t){var e=n.state.tasks.filter((function(e){return e.name!==t}));n.setState({tasks:e})},n.onTaskItemClick=function(t){var e=Object(s.a)(n.state.tasks),a=e.findIndex((function(e){return e.name===t}));e[a].complete=!e[a].complete,n.setState({tasks:e})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k,{onAddTaskButtonClick:this.onAddTaskButtonClick}),r.a.createElement(b,{tasks:this.state.tasks,onDeleteItemClick:this.onDeleteItemClick,onTaskItemClick:this.onTaskItemClick}))}}]),e}(r.a.Component);o.a.render(r.a.createElement(y,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5a87a711.chunk.js.map