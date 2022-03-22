/*
 * @Author: liuxw@codoon.com
 * @Date: 2022-03-22 10:29:26
 * @Last Modified by: liuxw@codoon.com
 * @Last Modified time: 2022-03-22 10:31:37
 */

import { makeObservable, observable, action } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      addCount: action,
    });
  }

  /**
   * 数据
   */
  count: number = 0; // 点击次数

  /**
   * 计算值
   */

  /**
   * action
   */
  addCount = () => {
    this.count++;
  };
}

const store = new Store();

export default store;
