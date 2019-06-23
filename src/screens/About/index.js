import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Welcome from "./Welcome";
import Feature from "./Feature";
import Banner from "./Banner";
import TeamArea from "./TeamArea";
import Testimonial from "../../components/Testimonial";
import BrandLogo from "../../components/BrandLogo";
import Subscription from "../../components/Subscription";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <Welcome />
        <Feature />
        <Banner />
        <TeamArea />
        <Testimonial />
        <BrandLogo />
        <Subscription />
      </React.Fragment>
    );
  }
}

export default About;
