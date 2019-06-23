import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Protected from "./protected";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import Product from "../screens/Product";
import About from "../screens/About";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Compare from "../screens/Compare";
import Wishlist from "../screens/Wishlist";
import MyAccount from "../screens/MyAccount";
import Contact from "../screens/Contact";
import LoginRegister from "../screens/LoginRegister";

const Routing = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginRegister} />
      <Route path="/register" exact component={LoginRegister} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/profile" exact component={MyAccount} />
      <Route path="/wishlist" exact component={Wishlist} />
      <Route path="/compare" exact component={Compare} />
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
