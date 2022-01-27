/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-01-27 13:48:03
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-01-27 17:00:25
 * @Content: 星球
 */

import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./index.less";

const PREFIX = "HomePlanet";

type IProps = {};

const Planet: FC<IProps> = memo(({}) => {
  return (
    <div className={PREFIX}>
      <div className={`${PREFIX}-body`}></div>
    </div>
  );
});

export default Planet;
