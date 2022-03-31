/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-23 16:27:16
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-23 16:30:53
 */

import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import styles from "./index.module.less";
import axios from "axios";

type IProps = {};

const Nest: FC<IProps> = memo(({}) => {
  const fetchApi = useCallback(async () => {
    // 跨域了，因为端口号不一样
    const res = await axios.get("//localhost:3000/cats");
  }, []);

  /**
   * 初始化
   */
  useLayoutEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.page}>
      <div>调 NestJS 写的接口</div>
    </div>
  );
});

export default Nest;
