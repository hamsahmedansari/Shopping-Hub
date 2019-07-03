import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
import AdminDashboard from "../components/AdminDashboard";

class Routing extends Component {
  // static propTypes = {
  //   location: React.PropTypes.object.isRequired
  // };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    const id = "c_script";
    const oldScript = document.getElementById(id);
    oldScript.parentNode.removeChild(oldScript);
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.id = id;
    document.getElementsByTagName("body")[0].appendChild(script);
  };
  render() {
    return (
      <Switch>
        <Route path="/admin" exact component={AdminDashboard} />
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
  }
}

export default withRouter(Routing);
