import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./index.less";

const PREFIX = "LinkHeader";

type IProps = {
  label?: string;
  url: string;
};

const LinkHeader: FC<IProps> = memo(
  ({ label = "本示例对应掘金链接：", url }) => {
    const handleJump = useCallback(() => {
      window.open(url);
    }, [url]);

    return (
      <div className={PREFIX}>
        <div className={`${PREFIX}-text`}>
          {label}
          <span className={`${PREFIX}-textLink`} onClick={handleJump}>
            {url}
          </span>
        </div>
      </div>
    );
  }
);

export default LinkHeader;
