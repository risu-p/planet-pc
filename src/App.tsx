import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./index.less";
import loadable from "@loadable/component";
import qs from "qs";
import VConsole from "vconsole";

const PREFIX = "Risu";

/* 通用的url参数 */
interface IUrlParam {
  consoleEnable?: "1";
}

const URL_PARAM: IUrlParam = qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

if (URL_PARAM.consoleEnable === "1") {
  /* 启动移动端vconsole控制台 */
  const vConsole = new VConsole();
}

class App extends Component {
  render() {
    return (
      <div className={PREFIX}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={loadable(() => import("./pages/Home"))}
            />
            <Route
              exact
              path="/3d"
              component={loadable(() => import("./pages/3D"))}
            />
            <Route
              exact
              path="/flex"
              component={loadable(() => import("./pages/Flex"))}
            />
            <Route
              exact
              path="/shadow"
              component={loadable(() => import("./pages/Shadow"))}
            />
            <Route
              exact
              path="/worker"
              component={loadable(() => import("./pages/Worker"))}
            />
            <Route
              exact
              path="/sharedWorker"
              component={loadable(() => import("./pages/SharedWorker"))}
            />
            <Route
              exact
              path="/cssModules"
              component={loadable(() => import("./pages/CssModules"))}
            />
            <Route
              exact
              path="/serviceWorker"
              component={loadable(() => import("./pages/ServiceWorker"))}
            />
            <Route
              exact
              path="/mobx"
              component={loadable(() => import("./pages/Mobx"))}
            />
            <Route
              exact
              path="/codeSplit"
              component={loadable(() => import("./pages/CodeSplit"))}
            />
            <Route
              exact
              path="/nest"
              component={loadable(() => import("./pages/Nest"))}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
