/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-31 17:31:55
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-31 18:01:11
 */

import { map } from "lodash";
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import styles from "./index.module.less";
import classNames from "classNames";

type IProps = {};

type IListType = "dishes" | "drinks";
interface ITypeInfo {
  list: string[];
  label: string;
}
const TYPES: IListType[] = ["dishes", "drinks"];

const TYPE_INFO_MAP: Record<IListType, ITypeInfo> = {
  dishes: {
    label: "菜品",
    list: ["回锅肉", "小炒肉", "肉末茄子", "韭黄炒肉", "青椒肉丝", "红烧鲫鱼"],
  },
  drinks: { label: "饮品", list: ["可乐", "雪碧", "唯怡", "加多宝"] },
};

const UseTransition: FC<IProps> = memo(({}) => {
  const [isPending, startTransition] = useTransition();
  const [shownListType, setShownListType] = useState<IListType>("dishes");
  const [searchListType, setSearchListType] =
    useState<IListType>(shownListType);
  // const shownListTypeRef = useRef<IListType>(shownListType);
  // const timer = useRef<undefined | number>(undefined);

  /* 显示的项目列表 */
  const list = useMemo(() => {
    return TYPE_INFO_MAP[searchListType].list;
  }, [searchListType]);

  /* 但单选按钮值变化 */
  const handleListTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value as IListType;
      /* 这是需要立即反馈的变化 */
      setShownListType(val);
      /* 可以被中断的 */
      startTransition(() => {
        setSearchListType(val);
      }, []);
    },
    [setShownListType, setSearchListType]
  );

  // const startQuickChange = useCallback(() => {
  //   if (!timer.current) {
  //     timer.current = window.setInterval(() => {
  //       const nextVal =
  //         shownListTypeRef.current === "dishes" ? "drinks" : "dishes";
  //       /* 这是需要立即反馈的变化 */
  //       setShownListType(nextVal);
  //       shownListTypeRef.current = nextVal;
  //       /* 可以被中断的 */
  //       startTransition(() => {
  //         setSearchListType(nextVal);
  //       }, []);
  //     }, 2);
  //   }
  // }, []);

  // const stopQuickChange = useCallback(() => {
  //   if (timer.current) {
  //     window.clearTimeout(timer.current);
  //     timer.current = undefined;
  //   }
  // }, []);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        该页面使用 React v18 新特性：
        <span className={styles["is-italic"]}>useTransition</span>
      </div>
      <div className={styles.subtitle}>
        <span className={styles["is-italic"]}>useTransition</span> 说明
      </div>
      <div className={styles.text}>
        <span className={styles["is-italic"]}>startTransition </span>
        包裹的更新，被视为<span className={styles["is-bold"]}> 非紧急 </span>
        的更新。当有更多<span className={styles["is-bold"]}> 紧急 </span>
        更新时，<span className={styles["is-bold"]}>非紧急 </span>
        更新会被中断。如果<span className={styles["is-bold"]}> 非紧急 </span>
        更新被中断，react 将丢弃之前未完成的渲染工作，只对之后最新的数据进行渲染
      </div>

      <div className={styles.subtitle}>本示例说明</div>
      <div className={styles.text}>
        在两个选项间切换时，单选按钮的值是需要立即更新反馈给用户的
      </div>
      <div className={styles.text}>
        而不同选项对应的列表，则可延后更新。因为很可能用户选择到一个值后，又快速切换到另一个值，并不想看到中间值（列表数据计算
        或 渲染很耗时时，更明显）
      </div>
      <div className={styles.text}>为此，在切换选项时，会更新 2 个变量：</div>
      <div className={styles.text}>
        变量1：以正常方式更新的 shownType，对应按钮显示的值
      </div>
      <div className={styles.text}>
        变量2：在 startTransition 中更新的 searchType，用于筛选出显示的列表项
      </div>
      <div className={styles.text}>
        试着切换按钮，你将看到一闪而过的<span className={styles["is-italic"]}> “恭喜你，看到了 useTransition isPending
        的状态” </span>
      </div>

      {/* <div className={styles.btnWrapper}>
        <div onClick={startQuickChange} className={styles.btn}>
          开始快速切换
        </div>
        <div
          onClick={stopQuickChange}
          className={classNames(styles.btn, styles["is-cancel"])}
        >
          暂停快速切换
        </div>
      </div> */}

      {/* 列表类型选择 */}
      <div className={styles.selector}>
        {map(TYPES, (type) => {
          return (
            <div className={styles.radio} key={type}>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={type}
                  onChange={handleListTypeChange}
                  checked={shownListType == type}
                />
                {TYPE_INFO_MAP[type].label}
              </label>
            </div>
          );
        })}
      </div>

      {isPending ? (
        <div className={styles.list}>
          恭喜你，看到了 useTransition isPending 的状态
        </div>
      ) : (
        <div className={styles.list}>
          {map(list, (item) => {
            return (
              <div className={styles.item} key={item}>
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default UseTransition;
