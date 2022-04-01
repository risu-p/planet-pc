/**
 * @type/react 还未支持 react v18
 * 故先自己扩展
 */
declare namespace React {
  function useTransition(): any;
}