/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-09 17:55:04
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-10 16:13:13
 */

import stardewValley from "../../assets/images/stardewValley.jpg";

import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import "./index.less";

const PREFIX = "ServiceWorkerPage";

type IProps = {};

/**
 * 注册 service worker
 */
const registServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${window.location.pathname}serviceWorker.js`, {
        scope: window.location.pathname,
      })
      .then(function (reg) {
        console.log("Registration succeeded. Scope is " + reg.scope);
      })
      .catch(function (error) {
        console.log("Registration failed with " + error);
      });
  }
};
/* 
    这样在组件外写的话，又没做代码拆分，进入应用（不用进这个页面）其实就会执行了
    当然这也是service worker的用法，在app.js就应该注册service worker，然后缓存之后的请求
*/
registServiceWorker();

const ServiceWorker: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}-text`}>
        1. 首次访问该页面时，会注册、并安装 Service
        Worker。安装时将下图加入了缓存区
      </div>
      <div className={`${PREFIX}-text`}>
        2. 刷新页面，会激活已安装的 Service Worker。此时 Service Worker
        才对页面有了控制权。查看 Network 将发现，图片从 Service Worker
        返回，没有网络请求
      </div>
      <div className={`${PREFIX}-text`}>
        3. 断开网络，再次刷新页面，会发现页面能离线访问。这是因为，我们的
        Service Worker
        多做了一步，当拦截到没有缓存过的请求时，会将结果加入缓存，即现在所有的
        js、css、img 静态资源都已被离线缓存
      </div>

      <div className={`${PREFIX}-img`}>
        <img src={stardewValley} />
      </div>
    </div>
  );
});

export default ServiceWorker;
