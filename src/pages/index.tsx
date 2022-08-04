import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/views/Layout";

import { FUSIONS_COLLECTION_PATH } from "../constants/pagePaths";
import FusionCollection from "./FusionCollection";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path={FUSIONS_COLLECTION_PATH}
            component={FusionCollection}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Pages;
