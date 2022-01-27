/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-01-27 13:47:47
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-01-27 15:01:49
 * @Content: 地面栅格 画布
 */
import classNames from "classnames";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./index.less";
import { map } from "lodash";

const PREFIX = "HomeGrid";

type IProps = {};

/* 一共9条线（必须为单数） */
const COL_COUNT = 9;

/** 横线数
 * 动画4s执行完，每隔1秒出一条线，故横线数为4即可
 */
const ROW_COUNT = 5;

const Grid: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      {/* 顶部的border（为了被蒙层覆盖，故写成内容div；而不用border属性） */}
      <div className={`${PREFIX}-topBorder`}></div>

      {/* 竖线 */}
      {map(new Array(COL_COUNT), (item, index) => {
        const midIndex = (COL_COUNT - 1) / 2; // 中线的index
        let rotate = (midIndex - index) * 6; // 每条线的旋转角度
        return (
          <div
            className={`${PREFIX}-col`}
            style={{
              left: `${(100 / (COL_COUNT + 1)) * (index + 1)}%`,
              transform: `rotate(${rotate}deg)`,
            }}
          ></div>
        );
      })}

      {/* 横线 */}
      {map(new Array(ROW_COUNT), (item, index) => {
        const delay = -1 * index; // 每隔1s，出一根线；但为了初始化时，屏幕上已经覆盖满了横线，delay需要为负数

        return (
          <div
            className={`${PREFIX}-row`}
            style={{
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}

      <div className={`${PREFIX}-mask`}></div>
    </div>
  );
});

export default Grid;
