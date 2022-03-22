/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-02-17 14:50:33
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-22 17:57:18
 */

import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import LinkHeader from "../../components/LinkHeader";
import "./index.less";

const PREFIX = "SharedWorkerPage";

type IProps = {};

const SharedWorkerPage: FC<IProps> = memo(({}) => {
  const workerRef = useRef<SharedWorker | null>(null);

  const [connectCount, setConnectCount] = useState<number>(0);

  /* 通知断开与 shared worker 的连接 */
  const closeSharedWorkerPort = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.port.postMessage("Close");
      workerRef.current = null;
    }
  }, []);

  /* 初始化 */
  useEffect(() => {
    const worker = new SharedWorker(
      `${window.location.origin}${window.location.pathname}sharedWorker/sharedWorker.js`
    );
    workerRef.current = worker;
    worker.port.postMessage("Hello");
    worker.port.addEventListener("message", (event) => {
      console.log(`主线程 接收到了 worker 消息：${event.data}`);
      // 接受一个当前有多少个页面连接了 shared worker 的个数
      const connectCount = event.data;
      setConnectCount(connectCount);
    });
    worker.port.start();
    // worker.port.onmessage = (event) => {
    //   console.log(`主线程 接收到了 worker 消息：${event.data}`);
    //   // 接受一个当前有多少个页面连接了 shared worker 的个数
    //   const connectCount = event.data;
    //   setConnectCount(connectCount);
    // };

    /**
     * 正常情况下，页面关闭，即使不手动调`port.close()`，`shared worker`也会自动关闭与该页面的连接
     * 当没有页面与`shared worker`连接时，就`worker`自动删除了
     *
     * 但由于这里我们自己在`worker`中维护了 portPool 数组，来记录当前有多少个连接
     *
     * 若直接改地址栏url，导致组件没有走卸载生命周期
     * 此时`shared worker`没有收到"Close"消息，就不会将与该页面对应的port移除portPool数组，导致记录的连接数出错
     * 故再监听window "beforeunload"，以发送"Close"消息
     */
    window.addEventListener("beforeunload", closeSharedWorkerPort);

    return () => {
      /* 组件卸载时，通知关闭与 shared worker 的连接 */
      closeSharedWorkerPort();
      window.removeEventListener("beforeunload", closeSharedWorkerPort);
    };
  }, []);

  return (
    <>
      <LinkHeader url={"https://juejin.cn/post/7065609156446650381"} />
      <div className={PREFIX}>
        <div>试着打开一个新窗口，访问该页面</div>
        <div>
          当前有<span className={"is-primary"}> {connectCount} </span>
          个页面连接到了 shared worker
        </div>
      </div>
    </>
  );
});

export default SharedWorkerPage;
