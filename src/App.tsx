import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./index.less";
import Home from "./pages/Home";
import ThreeD from "./pages/3D";
import Flex from "./pages/Flex";
import Shadow from "./pages/Shadow";
import WorkerPage from "./pages/Worker";
import SharedWorkerPage from "./pages/SharedWorker";
import CssModule from "./pages/CssModules";
import ServiceWorker from "./pages/ServiceWorker";

const PREFIX = "Risu";

class App extends Component {
  render() {
    return (
      <div className={PREFIX}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/3d" component={ThreeD} />
            <Route exact path="/flex" component={Flex} />
            <Route exact path="/shadow" component={Shadow} />
            <Route exact path="/worker" component={WorkerPage} />
            <Route exact path="/sharedWorker" component={SharedWorkerPage} />
            <Route exact path="/cssModules" component={CssModule} />
            <Route exact path="/serviceWorker" component={ServiceWorker} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
