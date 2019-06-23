import React from "react";

const SingleItem = () => {
  return (
    <tr>
      <td class="product-thumbnail">
        <a href="#">
          <img src="assets/images/cart/cart-3.jpg" alt="" />
        </a>
      </td>
      <td class="product-name">
        <a href="#">Demo Product Name</a>
      </td>
      <td class="product-price-cart">
        <span class="amount">$260.00</span>
      </td>
      <td class="product-quantity">
        <div class="cart-plus-minus">
          <input
            class="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            value="2"
          />
        </div>
      </td>
      <td class="product-subtotal">$110.00</td>
      <td class="product-wishlist-cart">
        <a href="#">add to cart</a>
      </td>
    </tr>
  );
};

export default SingleItem;
