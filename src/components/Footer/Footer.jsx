import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer text-center text-white py-5 fw-bold">
          <div className="container">
            <div className="row px-5 py-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <div className="d-flex justify-content-center gap-2">
                  <div className="circle">
                    <i className="fa-brands fa-facebook fs-4"></i>
                  </div>
                  <div className="circle">
                    <i className="fa-brands fa-twitter fs-4"></i>
                  </div>
                  <div className="circle">
                    <i className="fa-brands fa-linkedin fs-4"></i>
                  </div>
                  <div className="circle">
                    <i className="fa-solid fa-globe fs-4"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright text-white py-4">
            <p className="m-0 text-center">Copyright © Your Website 2021</p>
        </div>
      </>
    );
  }
}
