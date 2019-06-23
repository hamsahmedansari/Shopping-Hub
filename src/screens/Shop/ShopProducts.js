import React from "react";
import TopBar from "./TopBar";
import Product from "../../components/Product";
import ProductList from "../../components/ProductList";
import Pagination from "../../components/Pagination";
const ShopProducts = () => {
  return (
    <React.Fragment>
      <TopBar />
      <div class="shop-bottom-area">
        <div class="tab-content jump">
          <div id="shop-1" class="tab-pane active">
            <div class="row">
              <Product />
            </div>
          </div>
          <div id="shop-2" class="tab-pane">
            <ProductList />
          </div>
          <Pagination />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopProducts;
