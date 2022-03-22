/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-22 10:23:33
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-22 10:34:19
 */

import React, { FC, memo, useCallback, useEffect, useState } from "react";
import styles from "./index.module.less";
import { observer } from "mobx-react";
import store from "./store";

type IProps = {};

const Mobx: FC<IProps> = observer(({}) => {
  const { count, addCount } = store;

  return (
    <div className={styles.page}>
      <div>该页面使用 mobx 记录状态</div>
      <div>点击按钮：</div>
      <div onClick={addCount} className={styles.btn}>
        <div>{count}</div>
      </div>
    </div>
  );
});

export default Mobx;
