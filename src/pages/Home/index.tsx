import React, { memo, FC } from "react";
import classnames from "classnames";
import { ICommonProps } from "../../interfaces/common";
import "./index.less";
import Planet from "./Planet";
import Grid from "./Grid";
import Star from "./Star";

const PREFIX = "Home";

type IProps = ICommonProps;

const Home: FC<IProps> = memo(({ className }) => {
  return (
    <div className={classnames(PREFIX, className)}>
      <Star />
      <Grid />
      <Planet />
    </div>
  );
});

export default Home;
