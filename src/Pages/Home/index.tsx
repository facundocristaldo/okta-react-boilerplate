import React, { useEffect } from "react";
import logo from "../../logo.svg";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router";

export const HomePage = () => {
  const { oktaAuth,authState } = useOktaAuth();
  const history = useHistory();

  const handleLogOut = () => {
    oktaAuth
      .closeSession()
      .then((value) => {
        console.log("closeSession 1", value);
      })
      .catch((err) => {
        console.error("closeSession 2", err);
      });
      // eslint-disable-next-line no-restricted-globals
      location.reload()

    };


  useEffect(() => {
    if (!authState?.isAuthenticated) {
      history.push('/login');
    } else {
      history.push('/home');
    }
  }, [authState?.isAuthenticated, history]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleLogOut}>LogOut</button>
      </header>
    </div>
  );
};
