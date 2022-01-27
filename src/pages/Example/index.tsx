import React, { memo, FC } from "react";
import classnames from "classnames";
import { ICommonProps } from "../../interfaces/common";
import "./index.less";

const PREFIX = "Example";

type IProps = ICommonProps;

const Example: FC<IProps> = memo(({ className }) => {
  return <div className={classnames(PREFIX, className)}>开始编写React应用</div>;
});

export default Example;
