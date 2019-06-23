import React from "react";

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td class="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-4.jpg" alt="" />
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
        <td class="product-remove">
          <a href="#">
            <i class="la la-pencil" />
          </a>
          <a href="#">
            <i class="la la-close" />
          </a>
        </td>
      </tr>
      <tr>
        <td class="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-5.jpg" alt="" />
          </a>
        </td>
        <td class="product-name">
          <a href="#">Demo Product Name</a>
        </td>
        <td class="product-price-cart">
          <span class="amount">$150.00</span>
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
        <td class="product-subtotal">$150.00</td>
        <td class="product-remove">
          <a href="#">
            <i class="la la-pencil" />
          </a>
          <a href="#">
            <i class="la la-close" />
          </a>
        </td>
      </tr>
      <tr>
        <td class="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-6.jpg" alt="" />
          </a>
        </td>
        <td class="product-name">
          <a href="#">Demo Product Name </a>
        </td>
        <td class="product-price-cart">
          <span class="amount">$170.00</span>
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
        <td class="product-subtotal">$170.00</td>
        <td class="product-remove">
          <a href="#">
            <i class="la la-pencil" />
          </a>
          <a href="#">
            <i class="la la-close" />
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
