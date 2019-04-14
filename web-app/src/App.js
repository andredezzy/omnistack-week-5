import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TimelinePage from "./pages/Timeline";
import LoginPage from "./pages/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TimelinePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
