import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./index.less";
import Home from "./pages/Home";

const PREFIX = "Risu";

class App extends Component {
  render() {
    return (
      <div className={PREFIX}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
