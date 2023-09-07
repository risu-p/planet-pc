/*
 * @Author: liuxw@codoon.com
 * @Date: 2023-09-07 16:43:05
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2023-09-07 16:46:12
 */

import { map } from "lodash";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import Card from "./Card";
import "./index.less";

const PREFIX = "Column";

type IProps = {};

const Column: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}-list`}>
        {map(new Array(40), (item, index) => {
          return <Card height={Math.random() * 100} />;
        })}
      </div>
    </div>
  );
});

export default Column;
