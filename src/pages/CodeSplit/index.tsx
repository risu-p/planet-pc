/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-22 15:16:24
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-22 15:25:44
 */

import React, { FC, memo, useCallback, useEffect, useState } from "react";
import styles from "./index.module.less";
import { useHistory } from "react-router-dom";

type IProps = {};

const CodeSplit: FC<IProps> = memo(({}) => {
  const history = useHistory();

  return (
    <div className={styles.page}>
      <div className={styles.text}>现在，这个web应用，根据路由做了代码分隔</div>
      <div className={styles.text}>
        打开控制台，查看js的网络请求；试着点击下方按钮，在不同路由间跳转
      </div>
      <div className={styles.text}>
        对应页面的代码，只会在实际被访问到时，才下载。而不会进入应用，就下载了所有页面的代码
      </div>
      <div className={styles.btn} onClick={() => history.push("/sharedWorker")}>
        SharedWorker 页面
      </div>
      <div className={styles.btn} onClick={() => history.push("/")}>
        risu星球 页面
      </div>
      <div className={styles.btn} onClick={() => history.push("/3d")}>
        3D正方体 页面
      </div>
    </div>
  );
});

export default CodeSplit;
