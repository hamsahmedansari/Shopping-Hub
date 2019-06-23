import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="footer-top bg-gray pt-120 pb-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                <div className="footer-widget mb-30">
                  <a href="#">
                    <img src="assets/images/logo/logo-1.png" alt="logo" />
                  </a>
                  <div className="footer-social">
                    <span>Follow us:</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className=" ti-facebook " />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=" ti-twitter-alt " />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=" ti-pinterest " />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className=" ti-vimeo-alt " />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 col-sm-6">
                <div className="footer-widget mb-30 footer-mrg-hm1">
                  <div className="footer-title">
                    <h3>Useful Link</h3>
                  </div>
                  <div className="footer-list">
                    <ul>
                      <li>
                        <a href="cart.html">Shopping Cat</a>
                      </li>
                      <li>
                        <a href="wishlist.html">WIshlist</a>
                      </li>
                      <li>
                        <a href="checkout.html">Chekout</a>
                      </li>
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-12 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="footer-title">
                    <h3>About us</h3>
                  </div>
                  <div className="footer-list">
                    <ul>
                      <li>
                        <a href="cart.html">About</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Products</a>
                      </li>
                      <li>
                        <a href="checkout.html">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="contact.html">Help Center</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="footer-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="subscribe-style mt-45">
                    <p>Subscribe to get all new updates</p>
                    <div id="mc_embed_signup" className="subscribe-form mt-20">
                      <form
                        id="mc-embedded-subscribe-form"
                        className="validate subscribe-form-style"
                        noValidate=""
                        target="_blank"
                        name="mc-embedded-subscribe-form"
                        method="post"
                        action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                      >
                        <div id="mc_embed_signup_scroll" className="mc-form">
                          <input
                            className="email"
                            type="email"
                            required=""
                            placeholder="Enter your email"
                            name="EMAIL"
                            // value=""
                          />
                          <div className="mc-news" aria-hidden="true">
                            <input
                              type="text"
                              // value=""
                              tabIndex="-1"
                              name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                            />
                          </div>
                          <div className="clear">
                            <input
                              id="mc-embedded-subscribe"
                              className="button"
                              type="submit"
                              name="subscribe"
                              value=""
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-gray-2 ptb-20">
          <div className="container">
            <div className="copyright text-center">
              <p>
                Copyright © <a href="#">Daxone</a>. All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <div className="tab-content quickview-big-img">
                    <div id="pro-1" className="tab-pane fade show active">
                      <img
                        src="assets/images/product/quickview-l1.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-2" className="tab-pane fade">
                      <img
                        src="assets/images/product/quickview-l2.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-3" className="tab-pane fade">
                      <img
                        src="assets/images/product/quickview-l3.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-4" className="tab-pane fade">
                      <img
                        src="assets/images/product/quickview-l2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <!-- Thumbnail Large Image End --> */}
                  {/* <!-- Thumbnail Image End --> */}
                  <div className="quickview-wrap mt-15">
                    <div
                      className="quickview-slide-active owl-carousel nav nav-style-2"
                      role="tablist"
                    >
                      <a className="active" data-toggle="tab" href="#pro-1">
                        <img
                          src="assets/images/product/quickview-s1.jpg"
                          alt=""
                        />
                      </a>
                      <a data-toggle="tab" href="#pro-2">
                        <img
                          src="assets/images/product/quickview-s2.jpg"
                          alt=""
                        />
                      </a>
                      <a data-toggle="tab" href="#pro-3">
                        <img
                          src="assets/images/product/quickview-s3.jpg"
                          alt=""
                        />
                      </a>
                      <a data-toggle="tab" href="#pro-4">
                        <img
                          src="assets/images/product/quickview-s4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="product-details-content quickview-content">
                    <span>Life Style</span>
                    <h2>LaaVista Depro, FX 829 v1</h2>
                    <div className="product-ratting-review">
                      <div className="product-ratting">
                        <i className="la la-star" />
                        <i className="la la-star" />
                        <i className="la la-star" />
                        <i className="la la-star" />
                        <i className="la la-star-half-o" />
                      </div>
                      <div className="product-review">
                        <span>40+ Reviews</span>
                      </div>
                    </div>
                    <div className="pro-details-color-wrap">
                      <span>Color:</span>
                      <div className="pro-details-color-content">
                        <ul>
                          <li className="green" />
                          <li className="yellow" />
                          <li className="red" />
                          <li className="blue" />
                        </ul>
                      </div>
                    </div>
                    <div className="pro-details-size">
                      <span>Size:</span>
                      <div className="pro-details-size-content">
                        <ul>
                          <li>
                            <a href="#">s</a>
                          </li>
                          <li>
                            <a href="#">m</a>
                          </li>
                          <li>
                            <a href="#">xl</a>
                          </li>
                          <li>
                            <a href="#">xxl</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pro-details-price-wrap">
                      <div className="product-price">
                        <span>$210.00</span>
                        <span className="old">$230.00</span>
                      </div>
                      <div className="dec-rang">
                        <span>- 30%</span>
                      </div>
                    </div>
                    <div className="pro-details-quality">
                      <div className="cart-plus-minus">
                        <input
                          className="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          // value="02"
                        />
                      </div>
                    </div>
                    <div className="pro-details-compare-wishlist">
                      <div className="pro-details-compare">
                        <a title="Add To Compare" href="#">
                          <i className="la la-retweet" /> Compare
                        </a>
                      </div>
                      <div className="pro-details-wishlist">
                        <a title="Add To Wishlist" href="#">
                          <i className="la la-heart-o" /> Add to wish list
                        </a>
                      </div>
                    </div>
                    <div className="pro-details-buy-now btn-hover btn-hover-radious">
                      <a href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal end --> */}
    </React.Fragment>
  );
};

export default Footer;
