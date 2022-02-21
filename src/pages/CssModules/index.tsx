import classNames from "classnames";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import LinkHeader from "../../components/LinkHeader";
import styles from "./index.module.less";

type IProps = {};

const CssModule: FC<IProps> = memo(({}) => {
  return (
    <div className={styles.page}>
      <LinkHeader url={"https://juejin.cn/post/7067071342343880712/"} />
      <div className={styles.content}>
        <div className={classNames(styles.text, styles.normal)}>
          这是用 css modules 的页面
        </div>
        <div className={classNames(styles.text, styles.warning)}>
          就不需要定义 BEM 的 PREFIX 咯
        </div>
      </div>
    </div>
  );

  /* 想到达明天，现在就要启程 */
  /* 梦见，边缘 */
});

export default CssModule;
