import React from "react";

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td className="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-4.jpg" alt="" />
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
        <td className="product-remove">
          <a href="#">
            <i className="la la-pencil" />
          </a>
          <a href="#">
            <i className="la la-close" />
          </a>
        </td>
      </tr>
      <tr>
        <td className="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-5.jpg" alt="" />
          </a>
        </td>
        <td className="product-name">
          <a href="#">Demo Product Name</a>
        </td>
        <td className="product-price-cart">
          <span className="amount">$150.00</span>
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
        <td className="product-subtotal">$150.00</td>
        <td className="product-remove">
          <a href="#">
            <i className="la la-pencil" />
          </a>
          <a href="#">
            <i className="la la-close" />
          </a>
        </td>
      </tr>
      <tr>
        <td className="product-thumbnail">
          <a href="#">
            <img src="assets/images/cart/cart-6.jpg" alt="" />
          </a>
        </td>
        <td className="product-name">
          <a href="#">Demo Product Name </a>
        </td>
        <td className="product-price-cart">
          <span className="amount">$170.00</span>
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
        <td className="product-subtotal">$170.00</td>
        <td className="product-remove">
          <a href="#">
            <i className="la la-pencil" />
          </a>
          <a href="#">
            <i className="la la-close" />
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
