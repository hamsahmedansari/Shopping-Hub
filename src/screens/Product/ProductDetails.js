import React from 'react';

const ProductDetails = () => {
    return (
        <div className="row">
                    <div className="ml-auto mr-auto col-lg-10">
                        <div className="dec-review-topbar nav mb-40">
                            <a data-toggle="tab" href="#des-details1">Description</a>
                            <a className="active" data-toggle="tab" href="#des-details2">Specification</a>
                            <a data-toggle="tab" href="#des-details3">Reviews</a>
                        </div>
                        <div className="tab-content dec-review-bottom">
                            <div id="des-details1" className="tab-pane">
                                <div className="description-wrap">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                </div>
                            </div>
                            <div id="des-details2" className="tab-pane active">
                                <div className="specification-wrap table-responsive">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="width1">Name / Model</td>
                                                <td>LaaVista Depro, FX 829 v1</td>
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td>Categories</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Models</td>
                                                <td>FX 829 v1</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Categories</td>
                                                <td>Product Type</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Size</td>
                                                <td>60’’ x 40’’</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Display Port</td>
                                                <td>Multi</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Media</td>
                                                <td>Brightside</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Color</td>
                                                <td>Black, White</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="des-details3" className="tab-pane">
                                <div className="dec-review-wrap mb-50">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="assets/images/product-details/review-1.png" alt="review" />
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dec-review-wrap mb-50">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="assets/images/product-details/review-2.png" alt="review" />
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dec-review-wrap">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="assets/images/product-details/review-3.png" alt="review" />
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default ProductDetails;