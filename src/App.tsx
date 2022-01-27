import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./index.less";
import Example from "./pages/Example";

const PREFIX = "Risu";

class App extends Component {
  render() {
    return (
      <div className={PREFIX}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/example"
              component={Example}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
