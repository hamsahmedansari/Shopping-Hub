import React from "react";
import TopBar from "./TopBar";
import Product from "../../components/Product";
import ProductList from "../../components/ProductList";
import Pagination from "../../components/Pagination";
const ShopProducts = () => {
  return (
    <React.Fragment>
      <TopBar />
      <div className="shop-bottom-area">
        <div className="tab-content jump">
          <div id="shop-1" className="tab-pane active">
            <div className="row">
              <Product />
            </div>
          </div>
          <div id="shop-2" className="tab-pane">
            <ProductList />
          </div>
          <Pagination />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopProducts;
