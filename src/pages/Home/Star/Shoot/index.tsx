/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-01-27 14:04:22
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-01-27 16:28:29
 * @Content: 流星（传入初始位置，自动开始移动）
 */
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { VH_TO_PX } from "../../../../constants/size";
import "./index.less";
import { IStarInitArea } from "./interface";

const PREFIX = "HomeStarShoot";

type IProps = {
  initArea: IStarInitArea; // 外部传入流星的生成区域（即初始化时的区域）
  delay?: number; // 等xxms，再第一次计算位置
};

interface IShootStarPosition {
  top: number;
  left: number;
}

/* 动画结束的px值（画布区域高 + 流星本身的高度（多一点，直接用240了）） */
const END_TOP = VH_TO_PX * 50 + 240;

const Shoot: FC<IProps> = memo(({ initArea, delay }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const lastTimestampRef = useRef<number>(0);

  /* 初始位置信息 */
  const [initPosition, setInitPosition] = useState<
    IShootStarPosition | undefined
  >(undefined);

  /* 生成新位置 */
  const initShootStarPosition = useCallback(():
    | IShootStarPosition
    | undefined => {
    if (initArea) {
      const top =
        Math.random() * (initArea.maxTop - initArea.minTop) + initArea.minTop;
      const left =
        Math.random() * (initArea.maxLeft - initArea.minLeft) +
        initArea.minLeft;

      setInitPosition({
        top,
        left,
      });
    } else {
      return undefined;
    }
  }, [initArea, setInitPosition]);

  /* 飞行动画 */
  const shotAnimation = useCallback(
    (timestamp: number) => {
      const node = ref.current;
      if (node && initPosition) {
        if (!lastTimestampRef.current) {
          lastTimestampRef.current = timestamp; // 记录下动画开始时间
        }
        const interval = timestamp - lastTimestampRef.current; // 距开始时间过了多少ms了
        const speed = 0.2;

        const nextTop = initPosition.top + speed * interval;
        const nextLeft = initPosition.left + speed * interval;
        node.style.top = `${nextTop}px`;
        node.style.left = `${nextLeft}px`;

        if (nextTop < END_TOP) {
          requestAnimationFrame(shotAnimation);
        } else {
          // 结束了，重新计算一个初始位置，又开始播放
          lastTimestampRef.current = 0;
          initShootStarPosition();
        }
      }
    },
    [ref, lastTimestampRef, initPosition, initShootStarPosition]
  );

  /* 初始化 或 传入的initArea改变了（其实不会变） */
  useEffect(() => {
    /* 计算一个初始位置 */
    window.setTimeout(() => {
      initShootStarPosition();
    }, delay);
  }, [initArea]);

  /* 初始位置有了 或 改变了，开始播放动画 */
  useEffect(() => {
    if (initPosition) {
      requestAnimationFrame(shotAnimation);
    }
  }, [initPosition]);

  if (initPosition) {
    return (
      <div
        className={PREFIX}
        ref={ref}
        style={{
          top: `${initPosition.top}px`,
          left: `${initPosition.left}px`,
        }}
      ></div>
    );
  } else {
    return null;
  }
});

export default Shoot;
