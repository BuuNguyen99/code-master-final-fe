import React from "react";
import { Helmet } from "react-helmet";
import { StickyContainer } from "react-sticky";
import { Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage";
import FormRevivew from "../FormReview";
import AddUser from "../HomePage/User/AddUser";
import EditUser from "../HomePage/User/EditUser";

export default function MasterLayout() {
  return (
    <StickyContainer>
      <div className="d-flex flex-column flex-root">
        <Helmet titleTemplate="%s">
          <meta name="description" content="Staff Assessment" />
        </Helmet>
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/form-review" component={FormRevivew} exact />
            <Route path="/add-user" component={AddUser} />
            <Route path="/edit-user/:id" component={EditUser} />
          </Switch>
        </div>
      </div>
    </StickyContainer>
  );
}
