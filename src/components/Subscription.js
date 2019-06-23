import React from "react";

const Subscription = () => {
  return (
    <div className="subscribe-area pb-100">
      <div className="container">
        <div
          className="subscribe-bg bg-img pt-45 pb-50 pl-20 pr-20"
          style={{ backgroundImage: "url(assets/images/bg/bg-3.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-6 ml-auto mr-auto">
              <div className="subscribe-content-3 text-center">
                <h2>Sign up & Get all updates.</h2>
                <div id="mc_embed_signup" className="subscribe-form-3 mt-20">
                  <form
                    id="mc-embedded-subscribe-form"
                    className="validate subscribe-form-style"
                    novalidate=""
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
                        placeholder="Enter Your E-mail"
                        name="EMAIL"
                        value=""
                      />
                      <div className="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          value=""
                          tabindex="-1"
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
  );
};

export default Subscription;
