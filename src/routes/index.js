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
import AdminAnalytics from "../components/AdminAnalytics";
import AdminProducts from "../components/AdminProducts";
import AdminProductsDraft from "../components/AdminProductsDraft";
import AdminProductAdd from "../components/AdminProductAdd";
import AdminUsers from "../components/AdminUsers";
import AdminUsersAdd from "../components/AdminUsersAdd";
import AdminUsersAdmin from "../components/AdminUsersAdmin";
import AdminUserPending from "../components/AdminUserPending";
import AdminOrders from "../components/AdminOrders";
import AdminOrdersPending from "../components/AdminOrdersPending";
import AdminOrderComplete from "../components/AdminOrderComplete";
import AdminOrdersTracking from "../components/AdminOrdersTracking";
import AdminOrdersNew from "../components/AdminOrdersNew";
import AdminDesignHomePage from "../components/AdminDesignHomePage";
import AdminDesignAbout from "../components/AdminDesignAbout";
import AdminSetting from "../components/AdminSetting";
import AdminSettingAdminPanel from "../components/AdminSettingAdminPanel";

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
        {/* admin */}
        <Route path="/admin" exact component={AdminDashboard} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/admin/analytics" exact component={AdminAnalytics} />
        <Route path="/admin/products" exact component={AdminProducts} />
        <Route path="/admin/products/list" exact component={AdminProducts} />
        <Route
          path="/admin/products/draft"
          exact
          component={AdminProductsDraft}
        />
        <Route path="/admin/product/add" exact component={AdminProductAdd} />
        <Route path="/admin/users/" exact component={AdminUsers} />
        <Route path="/admin/users/list" exact component={AdminUsers} />
        <Route path="/admin/users/add" exact component={AdminUsersAdd} />
        <Route path="/admin/users/admins" exact component={AdminUsersAdmin} />
        <Route path="/admin/users/pending" exact component={AdminUserPending} />
        <Route path="/admin/orders/" exact component={AdminOrders} />
        <Route path="/admin/orders/list" exact component={AdminOrders} />
        <Route
          path="/admin/orders/pending"
          exact
          component={AdminOrdersPending}
        />
        <Route
          path="/admin/orders/complete"
          exact
          component={AdminOrderComplete}
        />
        <Route
          path="/admin/orders/tracking"
          exact
          component={AdminOrdersTracking}
        />
        <Route path="/admin/orders/new" exact component={AdminOrdersNew} />
        <Route
          path="/admin/design/homepage"
          exact
          component={AdminDesignHomePage}
        />
        <Route path="/admin/design/about" exact component={AdminDesignAbout} />
        <Route path="/admin/setting" exact component={AdminSetting} />
        <Route
          path="/admin/setting/admin"
          exact
          component={AdminSettingAdminPanel}
        />
        <Route path="/admin/logout" exact component={AdminDashboard} />
        {/* other */}
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
