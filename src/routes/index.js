import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Protected from "./protected";
import Home from "../screens/Home";
import Shop from "../screens/Shop";

const Routing = () => {
  return (
    <Switch>
      <Route path="/shop" exact component={Shop} />
      <Route path="/" exact component={Home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
