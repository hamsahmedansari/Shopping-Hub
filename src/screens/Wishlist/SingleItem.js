import React from "react";

const SingleItem = () => {
  return (
    <tr>
      <td className="product-thumbnail">
        <a href="#">
          <img src="assets/images/cart/cart-3.jpg" alt="" />
        </a>
      </td>
      <td className="product-name">
        <a href="#">Demo Product Name</a>
      </td>
      <td className="product-price-cart">
        <span className="amount">$260.00</span>
      </td>
      <td className="product-quantity">
        <div className="cart-plus-minus">
          <input
            className="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            value="2"
          />
        </div>
      </td>
      <td className="product-subtotal">$110.00</td>
      <td className="product-wishlist-cart">
        <a href="#">add to cart</a>
      </td>
    </tr>
  );
};

export default SingleItem;
