import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { OktaAuth } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";

import { config } from "./auth/config";

import "./App.scss";
import { HomePage } from "./Pages/Home";
import { LoginPage } from "./Pages/Login";

const oktaAuth = new OktaAuth(config.oidc);

function App() {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: OktaAuth) => {
    history.replace("home");
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/" render={() => <Redirect to={"/login"} />} />
      </Switch>
    </Security>
  );
}

export default App;
