(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{1656:function(e,t,r){Promise.resolve().then(r.bind(r,2635))},2635:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268),n=r(6006),s=r(4867),l=r(5846),c=r.n(l),o=r(2801),i=function(e){let{post:t,setTag:r}=e,n="/portfolio/".concat(t.slug);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"d-flex flex-column flex-md-row justify-content-between resume-section-item",children:(0,a.jsx)("div",{className:"flex-grow-1",children:(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("div",{className:"crop",children:(0,a.jsx)(c(),{href:n,className:"",children:(0,a.jsx)("img",{src:"/project-images/".concat(t.slug,"/feature.png"),className:"cropped-image",alt:"feature for the project",width:512,height:512})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(c(),{href:n,className:"",style:{textDecoration:"none"},children:(0,a.jsx)("h3",{className:"mb-0 text-dark",children:t.title})}),(0,a.jsx)("p",{children:t.description}),(0,a.jsx)("div",{className:"mb-2",children:t.keywords.map((e,t)=>(0,a.jsxs)("span",{className:"badge bg-secondary me-1 cursor-pointer",onClick:()=>r(e),children:[(0,a.jsx)(o.fxx,{})," ",e]},"post-keywords-".concat(t)))}),(0,a.jsxs)(c(),{href:n,className:"btn btn-dark",children:["More\xa0",(0,a.jsx)(o.H_v,{})]})]})]})})})})};function d(e){let{posts:t,keywords:r}=e,[l,d]=(0,n.useState)("all"),[u,m]=(0,n.useState)(!0),[f,h]=(0,n.useState)([]);return(0,n.useEffect)(()=>{0===f.length&&h([...t].sort(()=>Math.random()-.5))},[t,f]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"modular",children:[(0,a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",id:"sideNav",children:[(0,a.jsxs)(c(),{className:"navbar-brand js-scroll-trigger",href:"/",children:[(0,a.jsx)("span",{className:"d-block d-lg-none",children:"Graham Coulby"}),(0,a.jsx)("span",{className:"d-none d-lg-block",children:(0,a.jsx)("img",{src:s.default.src,className:"img-fluid img-profile mx-auto mb-2",alt:""})})]}),(0,a.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:()=>m(!u),children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsx)("div",{className:"navbar-collapse ".concat(u&&"collapse"),id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)(c(),{href:"/",className:"nav-link js-scroll-trigger",children:[(0,a.jsx)(o.xng,{})," Home"]})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)("span",{className:"nav-link js-scroll-trigger",onClick:()=>d("all"),children:[(0,a.jsx)(o.dSq,{})," Show All"]})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("hr",{})}),(0,a.jsx)("ul",{className:"navbar-nav navbar-nav-inner",children:r.map((e,t)=>(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)("span",{className:"nav-link js-scroll-trigger",onClick:()=>{m(!0),d(e)},children:[(0,a.jsx)(o.fxx,{})," ",e]})},"projects-nav-item-".concat(t)))})]})]})})]}),(0,a.jsx)("section",{className:"resume-section",id:"o",children:(0,a.jsx)("div",{className:"resume-section-content",children:"all"===l?f.map((e,t)=>(0,a.jsx)(i,{post:e,setTag:d},"post-item-".concat(t))):f.filter(e=>e.keywords.includes(l)).map((e,t)=>(0,a.jsx)(i,{post:e,setTag:d},"post-item-".concat(t)))})})]})})}},4867:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/logo.625befc3.png",height:524,width:574,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAgklEQVR42gF3AIj/ANgA2C3YRtwTAALEP8xhwi4A2VzZd9lY2DDbNNqB203bUgDYn9kA2QDYGtiN1QzaANoAANl+2k7bNtmE2FjZbNkk2T0AsQzTZNR20SzaANhS2GzYOQCwGnkReBKMDf8D1QDKANYAAP8l/zH/NP8r/iT8Mf0+/TGF4Tn/348nzAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(6006),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var a,s={},i=null,d=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:i,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(8920)},3270:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var a=r(6006),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function o(e){return function(t){return a.createElement(i,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,n=e.attr,s=e.size,o=e.title,i=c(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==s?a.createElement(s.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[296,920,253,488,744],function(){return e(e.s=1656)}),_N_E=e.O()}]);