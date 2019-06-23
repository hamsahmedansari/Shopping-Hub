import React from "react";

const TeamArea = () => {
  return (
    <div className="team-area pt-60 pb-60">
      <div className="container">
        <div className="section-title-2 text-center">
          <h2>Team Members</h2>
          <img src="assets/images/icon-img/title-shape.png" alt="icon-img" />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper mb-30">
              <div className="team-img">
                <a href="#">
                  <img src="assets/images/team/team-1.jpg" alt="" />
                </a>
                <div className="team-action">
                  <a className="facebook" href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="ti-instagram" />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4>Mr.Mike Banding</h4>
                <span>Manager </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper mb-30">
              <div className="team-img">
                <a href="#">
                  <img src="assets/images/team/team-2.jpg" alt="" />
                </a>
                <div className="team-action">
                  <a className="facebook" href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="ti-instagram" />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4>Mr.Peter Pan</h4>
                <span>Developer </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper mb-30">
              <div className="team-img">
                <a href="#">
                  <img src="assets/images/team/team-3.jpg" alt="" />
                </a>
                <div className="team-action">
                  <a className="facebook" href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="ti-instagram" />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4>Ms.Sophia</h4>
                <span>Designer </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-wrapper mb-30">
              <div className="team-img">
                <a href="#">
                  <img src="assets/images/team/team-4.jpg" alt="" />
                </a>
                <div className="team-action">
                  <a className="facebook" href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="ti-instagram" />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4>Mr.John Lee</h4>
                <span>Chairmen </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
