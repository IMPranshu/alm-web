import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Page from "../components/Page";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import Segments from "./Segments";
import Strategies from "./Strategies";
import Backtest from "./Backtest";
import Offers from "./Offers";


import styles from "./AppRouter.module.scss";

import { useAuth } from "../contexts/Auth";
import { AuthStatus } from "../contexts/Auth/state";
import Options from "./Options";
import Dashboard from "./Dashboard";

const RedirectIfNotLoggedIn = () => {
  const auth = useAuth();
  const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
  return shouldRedirectToLogin ? (
    <Route component={() => <Redirect to="/login" />} />
  ) : null;
};

const AppRouter = () => {
  return (
    <div className={styles.AppRouter}>
      <Router>
        {/* WorkspaceProvider depends on Router so it must be nested */}
        <WorkspaceProvider>
        <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/segments" component={Segments} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/strategies" component={Strategies} />
          <Route exact path="/backtest" component={Backtest} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          {/* <RedirectIfNotLoggedIn /> */}
        </WorkspaceProvider>
      </Router>
    </div>
  );
};

export default AppRouter;
