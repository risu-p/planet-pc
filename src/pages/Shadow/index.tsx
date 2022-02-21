/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-02-16 17:43:21
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-02-21 16:17:02
 */
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import LinkHeader from "../../components/LinkHeader";
import "./index.less";

const PREFIX = "ShadowPage";

type IProps = {};

const Shadow: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      <LinkHeader url={"https://juejin.cn/post/7065244224211386381"} />

      <div className={`${PREFIX}-box`}></div>
    </div>
  );
});

export default Shadow;
