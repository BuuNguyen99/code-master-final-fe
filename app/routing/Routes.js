import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ENDPOINT } from "shared/constants/endpoint";
import { CookiesStorage } from "shared/configs/cookie";
import Auth from "containers/Auth";
import MasterLayout from "containers/MasterLayout";
const { ROUTING } = ENDPOINT;

function Routes() {
  const isAuthorized = CookiesStorage.authenticated();

  return (
    <Switch>
      <Route path="/" component={MasterLayout} />
    </Switch>
  );
}

export default Routes;
