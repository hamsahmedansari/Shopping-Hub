import React, { Component } from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Home from "./Home.js";
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
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Layout;
