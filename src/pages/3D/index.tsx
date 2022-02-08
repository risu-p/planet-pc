import classNames from "classnames";
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.less";

const PREFIX = "ThreeDPage";

type IProps = {};

const ThreeD: FC<IProps> = memo(({}) => {
  /* 视角x、y（用于dom） */
  const [perspectiveX, setPerspectiveX] = useState<number>(20);
  const [perspectiveY, setPerspectiveY] = useState<number>(-20);

  /* 鼠标是否被按下 */
  const isMouseDownRef = useRef<boolean>(false);
  /* 鼠标按下时的x、y */
  const initMouseXRef = useRef<number>(0);
  const initMouseYRef = useRef<number>(0);
  /* 鼠标拖拽开始时的，视角x、y */
  const initPerspectiveX = useRef<number>(perspectiveX);
  const initPerspectiveY = useRef<number>(perspectiveY);

  /* 处理 鼠标按下 */
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      isMouseDownRef.current = true;
      initMouseXRef.current = e.clientX;
      initMouseYRef.current = e.clientY;
      initPerspectiveX.current = perspectiveX;
      initPerspectiveY.current = perspectiveY;
    },
    [perspectiveX, perspectiveY]
  );

  /* 处理 鼠标放开 */
  const handleMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
  }, []);

  /* 处理 鼠标移动 */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMouseDownRef.current) {
      const moveX = e.clientX - initMouseXRef.current;
      const moveY = e.clientY - initMouseYRef.current;
      const nextPerspectiveX = initPerspectiveX.current + moveX/5;
      const nextPerspectiveY = initPerspectiveY.current - moveY/5;
      setPerspectiveX(nextPerspectiveX);
      setPerspectiveY(nextPerspectiveY);
    }
  }, []);

  /* 初始化 */
  useEffect(() => {
    /* 不会变化的监听器，在初始化时就可设置上 */
    window.document.addEventListener("mouseup", handleMouseUp);
    window.document.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    /* 会变化的监听器，需要更新 */
    window.document.removeEventListener("mousedown", handleMouseDown);
    window.document.addEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <div className={PREFIX}>
      <div
        className={`${PREFIX}-cube`}
        style={{
          // perspectiveOrigin: `${perspectiveX}px ${perspectiveY}px`,
          transform: `rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg)`,
        }}
      >
        <div className={classNames(`${PREFIX}-cubeSurface`, "is-front")}>
          <div>前</div>
        </div>
        <div className={classNames(`${PREFIX}-cubeSurface`, "is-back")}>
          <div>后</div>
        </div>

        <div className={classNames(`${PREFIX}-cubeSurface`, "is-top")}>
          <div>上</div>
        </div>
        <div className={classNames(`${PREFIX}-cubeSurface`, "is-bottom")}>
          <div>下</div>
        </div>

        <div className={classNames(`${PREFIX}-cubeSurface`, "is-left")}>
          <div>左</div>
        </div>
        <div className={classNames(`${PREFIX}-cubeSurface`, "is-right")}>
          <div>右</div>
        </div>
      </div>
    </div>
  );
});

export default ThreeD;
