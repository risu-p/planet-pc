import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./index.less";
import loadable from "@loadable/component";

const PREFIX = "Risu";

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
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
