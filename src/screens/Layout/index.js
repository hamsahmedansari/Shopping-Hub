import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Routing from "../../routes/";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Routing />
        <Footer />
      </div>
    );
  }
}

export default Layout;
