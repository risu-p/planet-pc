(self.webpackChunkplanet_pc=self.webpackChunkplanet_pc||[]).push([[644],{8971:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var t=n(3645),i=n.n(t)()((function(e){return e[1]}));i.push([e.id,"/*\n * @Author: liuxw@codoon.com \n * @Date: 2022-03-09 18:06:45 \n * @Last Modified by: liuxw@codoon.com\n * @Last Modified time: 2022-03-10 16:11:43\n */\n.ServiceWorkerPage {\n  margin: 80px 40px 0 40px;\n}\n.ServiceWorkerPage-text {\n  margin-bottom: 10px;\n}\n.ServiceWorkerPage-img {\n  width: 400px;\n}\n.ServiceWorkerPage-img img {\n  width: 100%;\n}\n",""]);const o=i},5644:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>l});const t=n.p+"assets/images/stardewValley.jpg";var i=n(7294),o=n(3379),c=n.n(o),a=n(8971);c()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var s="ServiceWorkerPage";"serviceWorker"in navigator&&navigator.serviceWorker.register(window.location.pathname+"serviceWorker.js",{scope:window.location.pathname}).then((function(e){console.log("Registration succeeded. Scope is "+e.scope)})).catch((function(e){console.log("Registration failed with "+e)}));const l=(0,i.memo)((function(e){return i.createElement("div",{className:s},i.createElement("div",{className:s+"-text"},"1. 首次访问该页面时，会注册、并安装 Service Worker。安装时将下图加入了缓存区"),i.createElement("div",{className:s+"-text"},"2. 刷新页面，会激活已安装的 Service Worker。此时 Service Worker 才对页面有了控制权。查看 Network 将发现，图片从 Service Worker 返回，没有网络请求"),i.createElement("div",{className:s+"-text"},"3. 断开网络，再次刷新页面，会发现页面能离线访问。这是因为，我们的 Service Worker 多做了一步，当拦截到没有缓存过的请求时，会将结果加入缓存，即现在所有的 js、css、img 静态资源都已被离线缓存"),i.createElement("div",{className:s+"-img"},i.createElement("img",{src:t})))}))}}]);