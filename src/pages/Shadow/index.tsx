/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-02-16 17:43:21
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-02-16 17:45:01
 */
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./index.less";

const PREFIX = "ShadowPage";

type IProps = {};

const Shadow: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}-box`}></div>
    </div>
  );
});

export default Shadow;
