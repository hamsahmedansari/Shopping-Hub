import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Routing from "../../routes/";
import AdminHeader from "../../components/AdminHeader";

import { withRouter } from "react-router-dom";
import Sidebar from "../../components/AdminSidebar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      location: { pathname }
    } = this.props;
    console.log("TCL: Layout -> render -> pathname", pathname);
    if (String(pathname).includes("admin")) {
      return (
        <div className="app-container app-theme-white body-tabs-line sidebar-mobile-open fixed-header closed-sidebar-mobile closed-sidebar">
          <AdminHeader />
          <div class="app-main">
            <Sidebar />
            <Routing />
          </div>
        </div>
      );
    }
    return (
      <div className="main-wrapper">
        <Header /> <Routing />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
