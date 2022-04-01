import React from "react";
import { Helmet } from "react-helmet";
import { StickyContainer } from "react-sticky";
import Header from "components/Header";
import AsideMenu from "components/AsideMenu";
import Footer from "components/Footer";
import { Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage";

export default function MasterLayout() {
  return (
    <StickyContainer>
      <div className="d-flex flex-column flex-root">
        <Helmet titleTemplate="%s">
          <meta name="description" content="RS Evaluation System" />
        </Helmet>
        <AsideMenu />
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </div>
        <Footer />
      </div>
    </StickyContainer>
  );
}
