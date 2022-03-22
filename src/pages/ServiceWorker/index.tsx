/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-09 17:55:04
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-22 17:48:01
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
import classNames from "classnames";

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
        <span className={`is-bold`}>1.</span> 首次访问该页面，
        <span className={classNames("is-italic", "is-underline")}>
          会注册、并安装 Service Worker
        </span>
        。安装时将下图加入了缓存区
      </div>
      <div className={`${PREFIX}-text`}>
        <span className={`is-bold`}>2.</span> 刷新页面，会激活已安装的 Service
        Worker。
        <span className={classNames("is-italic", "is-underline")}>
          此时 Service Worker 才对页面有了控制权
        </span>
        。查看 Network 将发现，图片从 Service Worker 返回，没有网络请求
      </div>
      <div className={`${PREFIX}-text`}>
        <span className={classNames("is-italic", "is-underline")}>
          事实上，在 Network 看到从 Service Worker 返回，并不能说明没有网络请求
        </span>
        。因为所有静态资源请求都会经过 Service Worker，这已经会在 Network
        中显示为从 Service Worker 返回了
      </div>
      <div className={`${PREFIX}-text`}>
        静态资源请求触发 Service Worker 的 fetch 事件后，Service Worker
        将请求与缓存区比对。如果有缓存命中，直接返回缓存；如果没有，发起http请求，再返回请求到的结果
      </div>
      <div className={`${PREFIX}-text`}>
        Application &gt; Cache &gt; Cache Storage
        中可看见用于该页面名为v1的缓存区
      </div>
      <div className={classNames(`${PREFIX}-text`, "is-delete")}>
        <span className={`is-bold`}>3.</span>{" "}
        断开网络，再次刷新页面，会发现页面能离线访问。这是因为，我们的 Service
        Worker
        多做了一步，当拦截到没有缓存过的请求时，会将结果加入缓存，即现在所有的
        js、css、img 静态资源都已被离线缓存
      </div>
      <div className={`${PREFIX}-text`}>
        <span className={`is-bold`}>3.</span> 接下来，还可以让 Service Worker
        更聪明一点，当拦截到没有缓存过的资源时，自动将结果加入缓存。这样下次访问时，所有的静态资源都已被离线缓存，可实现完全的离线访问（该示例本来做了这一步，但已经删掉了；因为其它hash路由也属于当前scope，会被缓存，并不希望这样）
      </div>

      <div className={`${PREFIX}-img`}>
        <img src={stardewValley} />
      </div>
    </div>
  );
});

export default ServiceWorker;
