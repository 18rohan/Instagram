import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes.js";
import Loading from "./components/Loading.component.js";

import Cookie from "js-cookie";
// Importing Components (Lazy)
const Login = lazy(() => import("./pages/login.page.js"));
const Signup = lazy(() => import("./pages/signup.page.js"));
const Dashboard = lazy(() => import("./pages/dashboard.page.js"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={ROUTES.SIGNUP} component={Signup} />
        </Switch>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path={ROUTES.DASHBOARD}
            component={() => (
              <Dashboard authorized={Cookie.get("access_token")} />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
