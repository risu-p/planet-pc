this.addEventListener("install",(function(e){e.waitUntil((async()=>{const e=await caches.open("v1");console.log("1.添加资源到缓存区");const t=location.pathname,s=t.substr(0,t.length-"serviceWorker.js".length);return e.addAll([s+"assets/images/stardewValley.jpg"])})())})),this.addEventListener("fetch",(function(e){console.log("2.拦截到了请求：",e.request),e.respondWith((async()=>{const t=await caches.match(e.request);if(console.log("3. 缓存命中结果：",t),t)return t;{const t=await fetch(e.request);return(await caches.open("v1")).put(e.request,t.clone()),t}})())}));