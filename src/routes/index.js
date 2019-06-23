import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Protected from "./protected";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import Product from "../screens/Product";
import About from "../screens/About";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const Routing = () => {
  return (
    <Switch>
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/about" exact component={About} />
      <Route path="/product" exact component={Product} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/" exact component={Home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
