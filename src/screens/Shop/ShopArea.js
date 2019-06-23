import React from "react";
import ShopProducts from "./ShopProducts";
import SideBar from "./SideBar";

const ShopArea = () => {
  return (
    <React.Fragment>
      <div class="shop-area pt-90 pb-90">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-lg-9">
              <ShopProducts />
            </div>
            <div class="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopArea;
