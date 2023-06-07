import React, { FormEvent, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router";
import classnames from "classnames";
import oktaIcon from "../../assets/okta-logo.png";

import classes from "./index.module.scss";

export const LoginPage = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      history.push("/home");
    }
  }, [history, authState?.isAuthenticated]);

  const oktaLogin = () => {
    oktaAuth
      .signInWithRedirect({
        originalUri: "/",
      })
      .then((value) => {
        console.log("signInWithRedirect", value);
      })
      .catch((err) => {
        console.error("signInWithRedirect", err);
      });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    oktaLogin();
  };

  return (
    <div className={classes.container}>
      <div className={classes.lines}>
        <div className={classnames(classes.line, classes.line1)} />
        <div className={classnames(classes.line, classes.line2)} />
        <div className={classnames(classes.line, classes.line4)} />
        <div className={classnames(classes.line, classes.line3)} />
        <div className={classnames(classes.line, classes.line5)} />
      </div>
      <div className={classes.loginContainer}>
        <div className={classes.form}>
          <span className={classes.title}>User Login</span>
          <input
            className={classes.field}
            type="text"
            placeholder="User Name"
          />
          <input
            className={classes.field}
            type="password"
            placeholder="Password"
          />
          <button className={classes.regularLogin}>Log in</button>
          <button className={classes.oktaLogin} onClick={onSubmit}>
            <img src={oktaIcon} alt="Okta" />
          </button>
        </div>
      </div>
    </div>
  );
};
