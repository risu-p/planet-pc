/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-01-27 13:47:35
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-01-27 16:33:18
 * @Content: 流星 画布
 */
import { map } from "lodash";
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.less";
import Shoot from "./Shoot";
import update from "immutability-helper";
import { IStarInitArea } from "./Shoot/interface";

const PREFIX = "HomeStar";

type IProps = {};

/* 流星数 */
const STAR_COUNT = 2;

const Star: FC<IProps> = memo(({}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  /* 流星生成区域 */
  const [initArea, setInitArea] = useState<IStarInitArea | null>(null);

  /* 计算流星生成区域大小 */
  const calcInitArea = useCallback(() => {
    const node = ref.current;
    if (node) {
      /* 显示区域大小 */
      const shownWidth = node.clientWidth;
      const shownHeight = node.clientHeight;

      /* 以45度飞行，渲染区域的位置  */
      // 当显示区域 高 < 宽 时（画一下就能理解了）
      let minTop = -shownHeight;
      let maxTop = 0;
      let minLeft = -shownHeight;
      let maxLeft = shownWidth - shownHeight;
      if (shownHeight > shownWidth) {
        minTop = -(shownHeight - shownWidth);
        maxTop = shownWidth;
        minLeft = -shownWidth;
        maxLeft = 0;
      }

      minTop -= 240;
      maxTop -= 240;
      minLeft -= 240;
      maxLeft -= 240;

      // 再 -240（流星的宽高，就当240px）
      setInitArea({
        minTop,
        maxTop,
        minLeft,
        maxLeft,
      });
    }
  }, [ref]);

  /* 初始化 */
  useEffect(() => {
    /* 计算画布大小 */
    calcInitArea();
  }, []);

  return (
    <div className={PREFIX} ref={ref}>
      {initArea
        ? map(new Array(STAR_COUNT), (item, index) => {
            /* 1s后生成下一个流星，这样流星就是1个1个的，不会出现第一屏一堆的情况 */
            return <Shoot initArea={initArea} delay={index * 1000} />;
          })
        : null}
    </div>
  );
});

export default Star;
