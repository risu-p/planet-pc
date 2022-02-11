import classNames from "classnames";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import LinkHeader from "../../components/LinkHeader";
import "./index.less";

const PREFIX = "FlexPage";

type IProps = {};

const Flex: FC<IProps> = memo(({}) => {
  const [isMinWidth0, setIsMinWidth0] = useState<boolean>(false);

  const handleRightBtnClick = useCallback(() => {
    setIsMinWidth0(!isMinWidth0);
  }, [isMinWidth0]);

  return (
    <>
      <LinkHeader url="https://juejin.cn/post/7063380560789372958/" />
      <div className={PREFIX}>
        <div
          className={classNames(`${PREFIX}-left`, {
            ["is-minWidth0"]: isMinWidth0,
          })}
        >
          <div className={`${PREFIX}-leftText`}>
            真是一段很长的文本真是一段很长的文本真是一段很长的文本
          </div>
        </div>
        <div className={`${PREFIX}-right`}>
          <div className={`${PREFIX}-rightBtn`} onClick={handleRightBtnClick}>
            点击 给左元素设置`min-width: 0`
          </div>
        </div>
      </div>
    </>
  );
});

export default Flex;
