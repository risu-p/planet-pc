/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-02-17 10:04:03
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-02-21 16:18:37
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
import { workerScript } from "./workerScripts/worker";

const PREFIX = "WorkerPage";

type IProps = {};

/* 将worker执行的脚本函数，转换为blob url */
export const createWorker = (f: Function) => {
  const blob = new Blob(["(" + f.toString() + ")()"], {
    type: "application/javascript",
  });
  const blobUrl = window.URL.createObjectURL(blob);
  const worker = new Worker(blobUrl);
  return worker;
};

const WorkerPage: FC<IProps> = memo(({}) => {
  const workerRef = useRef<Worker | null>(null);

  /* 初始化 */
  useEffect(() => {
    const worker = createWorker(workerScript);
    workerRef.current = worker;
    worker.postMessage("Hello");
    worker.onmessage = (event) => {
      console.log(`来自 worker线程 的消息：${event.data}`);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  return (
    <>
      <LinkHeader url={"https://juejin.cn/post/7065558763880579086"} />
      <div className={PREFIX}>
        打开控制台查看 worker线程 发送给 主线程 的消息内容
      </div>
    </>
  );
});

export default WorkerPage;
