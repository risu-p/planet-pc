/*! For license information please see 966.bundle.js.LICENSE.txt */
(self.webpackChunkplanet_pc=self.webpackChunkplanet_pc||[]).push([[966],{4184:(n,e)=>{var t;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var r=typeof t;if("string"===r||"number"===r)n.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&n.push(a)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var s in t)i.call(t,s)&&t[s]&&n.push(s);else n.push(t.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()},7018:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,"/*\n * @Author: liuxw@codoon.com \n * @Date: 2022-01-27 10:59:12 \n * @Last Modified by: liuxw@codoon.com\n * @Last Modified time: 2022-01-27 16:33:42\n */\n.HomeGrid {\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.HomeGrid-topBorder {\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.HomeGrid-col {\n  width: 1px;\n  height: 100vh;\n  background: #fff;\n  position: absolute;\n  top: 0;\n  transform-origin: center top;\n}\n.HomeGrid-row {\n  width: 100%;\n  height: 1px;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  animation: 5s ease-in infinite rowScan;\n}\n@keyframes rowScan {\n  0% {\n    top: 0;\n  }\n  100% {\n    top: 50vh;\n  }\n}\n.HomeGrid-mask {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));\n}\n",""]);const r=o},7135:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".HomePlanet {\n  width: 240px;\n  height: 240px;\n  position: relative;\n  z-index: 10;\n  animation: 2s ease-in-out infinite plantFloat;\n}\n@keyframes plantFloat {\n  0% {\n    margin-top: -20px;\n  }\n  50% {\n    margin-top: 20px;\n  }\n  100% {\n    margin-top: -20px;\n  }\n}\n.HomePlanet-body {\n  width: 240px;\n  height: 240px;\n  border-radius: 240px;\n  /* #455285, #392531, #346280 */\n  background: linear-gradient(#66cab1 0%, #3b509f 100%);\n  box-shadow: 0 4px 40px 24px #346280;\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* 移动端 */\n@media (max-width: 750px) {\n  .HomePlanet {\n    width: 40vw;\n    height: 40vw;\n  }\n  .HomePlanet-body {\n    width: 40vw;\n    height: 40vw;\n    border-radius: 40vw;\n  }\n}\n",""]);const r=o},6557:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".HomeStarShoot {\n  width: 240px;\n  height: 6px;\n  border-radius: 6px;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);\n  transform: rotate(45deg);\n  position: absolute;\n}\n",""]);const r=o},7663:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,"/*\n * @Author: liuxw@codoon.com \n * @Date: 2022-01-27 13:47:24 \n * @Last Modified by: liuxw@codoon.com\n * @Last Modified time: 2022-01-27 15:00:19\n */\n.HomeStar {\n  width: 100%;\n  height: 50vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n",""]);const r=o},9215:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var i=t(3645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".Home {\n  background-color: black;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""]);const r=o},6966:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>y});var i=t(7294),o=t(4184),r=t.n(o),a=t(3379),s=t.n(a),l=t(9215);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var c=t(7135);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var u="HomePlanet";const d=(0,i.memo)((function(n){return i.createElement("div",{className:u},i.createElement("div",{className:u+"-body"}))}));var m=t(7018);s()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var f=t(6486);const p=(0,i.memo)((function(n){return i.createElement("div",{className:"HomeGrid"},i.createElement("div",{className:"HomeGrid-topBorder"}),(0,f.map)(new Array(9),(function(n,e){var t=6*(4-e);return i.createElement("div",{className:"HomeGrid-col",style:{left:10*(e+1)+"%",transform:"rotate("+t+"deg)"}})})),(0,f.map)(new Array(5),(function(n,e){var t=-1*e;return i.createElement("div",{className:"HomeGrid-row",style:{animationDelay:t+"s"}})})),i.createElement("div",{className:"HomeGrid-mask"}))}));var h=t(7663);s()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var v=window.innerHeight/100,g=t(6557);s()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var x=50*v+240;const b=(0,i.memo)((function(n){var e=n.initArea,t=n.delay,o=(0,i.useRef)(null),r=(0,i.useRef)(0),a=(0,i.useState)(void 0),s=a[0],l=a[1],c=(0,i.useCallback)((function(){if(e){var n=Math.random()*(e.maxTop-e.minTop)+e.minTop,t=Math.random()*(e.maxLeft-e.minLeft)+e.minLeft;l({top:n,left:t})}}),[e,l]),u=(0,i.useCallback)((function(n){var e=o.current;if(e&&s){r.current||(r.current=n);var t=n-r.current,i=s.top+.2*t,a=s.left+.2*t;e.style.top=i+"px",e.style.left=a+"px",i<x?requestAnimationFrame(u):(r.current=0,c())}}),[o,r,s,c]);return(0,i.useEffect)((function(){window.setTimeout((function(){c()}),t)}),[e]),(0,i.useEffect)((function(){s&&requestAnimationFrame(u)}),[s]),s?i.createElement("div",{className:"HomeStarShoot",ref:o,style:{top:s.top+"px",left:s.left+"px"}}):null})),w=(0,i.memo)((function(n){var e=(0,i.useRef)(null),t=(0,i.useState)(null),o=t[0],r=t[1],a=(0,i.useCallback)((function(){var n=e.current;if(n){var t=n.clientWidth,i=n.clientHeight,o=-i,a=0,s=-i,l=t-i;i>t&&(o=-(i-t),a=t,s=-t,l=0),r({minTop:o-=240,maxTop:a-=240,minLeft:s-=240,maxLeft:l-=240})}}),[e]);return(0,i.useEffect)((function(){a()}),[]),i.createElement("div",{className:"HomeStar",ref:e},o?(0,f.map)(new Array(2),(function(n,e){return i.createElement(b,{initArea:o,delay:1e3*e})})):null)})),y=(0,i.memo)((function(n){var e=n.className;return i.createElement("div",{className:r()("Home",e)},i.createElement(w,null),i.createElement(p,null),i.createElement(d,null))}))}}]);