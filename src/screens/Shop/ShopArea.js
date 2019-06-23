import React from "react";
import ShopProducts from "./ShopProducts";
import SideBar from "./SideBar";

const ShopArea = () => {
  return (
    <React.Fragment>
      <div className="shop-area pt-90 pb-90">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <ShopProducts />
            </div>
            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopArea;
