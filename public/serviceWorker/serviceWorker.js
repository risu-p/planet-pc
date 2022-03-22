/**
 * service worker 注册之后，浏览器会尝试为页面安装并激活
 *
 * install 事件在注册完成后触发，一般用来填充离线缓存能力
 */
this.addEventListener("install", function (event) {
  /* waitUntil 确保 service worker 不会在 waitUntil() 中的代码执行完毕之前安装完成 */
  event.waitUntil(
    (async () => {
      const cache = await caches.open("v1");
      console.log("1.添加资源到缓存区");

      const filename = "serviceWorker.js";
      const pathname = location.pathname;
      const path = pathname.substr(0, pathname.length - filename.length);

      console.log("1.1 path", path);

      /* 声明要缓存的资源列表 */
      return cache.addAll([`${path}assets/images/stardewValley.jpg`]);
    })()
    /* 创建一个叫 v1 的缓存区 */
    // caches.open("v1").then(function (cache) {
    //   console.log("1.添加资源到缓存区");
    //   return cache.addAll(["/assets/images/stardewValley.jpg"]);
    // })
  );
});

/**
 * service worker 安装后
 * 若有 scope 下的页面请求，会激活 service worker，触发 activate 事件
 */
this.addEventListener("activate", function (event) {
  console.log("Service Worker 激活");
});

/**
 * scope 中的请求会触发 fetch 事件
 */
this.addEventListener("fetch", function (event) {
  /* respondWith() 可以劫持 http 响应  */
  console.log(`2.拦截到了请求：`, event.request);

  event.respondWith(
    (async () => {
      /* 比对是否有缓存 */
      const resp = await caches.match(event.request);
      console.log(`3. 缓存命中结果：`, resp);
      if (resp) {
        // 如果有，直接返回缓存
        return resp;
      } else {
        // 没有，继续发请求
        const fetchRes = await fetch(event.request);
        /* 并将返回结果加入缓存中 */
        // const cache = await caches.open("v1");
        // cache.put(event.request, fetchRes.clone());
        return fetchRes;
      }
    })()
    // caches.match(event.request).then(function (resp) {
    //   console.log(`3. 缓存命中结果：`, resp);
    //   return (
    //     resp ||
    //     fetch(event.request).then(function (response) {
    //       return caches.open("v1").then(function (cache) {
    //         cache.put(event.request, response.clone());
    //         return response;
    //       });
    //     })
    //   );
    // })
  );
});
