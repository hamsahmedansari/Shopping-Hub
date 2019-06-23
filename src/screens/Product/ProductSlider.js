import React from "react";

const ProductSlider = () => {
  return (
    <div class="col-lg-6 col-md-6">
      <div class="product-details-img">
        <div class="zoompro-border zoompro-span">
          <img
            class="zoompro"
            src="assets/images/product-details/product-detalis-l1.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl1.jpg"
            alt=""
          />{" "}
          <span>-29%</span>
        </div>
        <div id="gallery" class="mt-20 product-dec-slider">
          <a
            data-image="assets/images/product-details/product-detalis-l1.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl1.jpg"
          >
            <img
              src="assets/images/product-details/product-detalis-s1.jpg"
              alt=""
            />
          </a>
          <a
            data-image="assets/images/product-details/product-detalis-l2.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl2.jpg"
          >
            <img
              src="assets/images/product-details/product-detalis-s2.jpg"
              alt=""
            />
          </a>
          <a
            data-image="assets/images/product-details/product-detalis-l3.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl3.jpg"
          >
            <img
              src="assets/images/product-details/product-detalis-s3.jpg"
              alt=""
            />
          </a>
          <a
            data-image="assets/images/product-details/product-detalis-l4.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl4.jpg"
          >
            <img
              src="assets/images/product-details/product-detalis-s4.jpg"
              alt=""
            />
          </a>
          <a
            data-image="assets/images/product-details/product-detalis-l5.jpg"
            data-zoom-image="assets/images/product-details/product-detalis-bl5.jpg"
          >
            <img
              src="assets/images/product-details/product-detalis-s5.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
