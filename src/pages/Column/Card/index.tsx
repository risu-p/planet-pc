/*
 * @Author: liuxw@codoon.com
 * @Date: 2023-09-07 16:44:41
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2023-09-07 16:45:31
 */

import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./index.less";

const PREFIX = "ColumnCard";

type IProps = { height: number };

const Card: FC<IProps> = memo(({ height }) => {
  return (
    <div
      className={PREFIX}
      style={{
        height: `${height}px`,
      }}
    ></div>
  );
});

export default Card;
