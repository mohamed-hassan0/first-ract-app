import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about py-5">
          <div className="special-heading text-white">
            <h2 className="text-center text-uppercase fw-bolder">About</h2>
            <div className="bottom-style d-flex justify-content-center align-items-center">
              <span className="bg-white"></span>
              <i className="fa-solid fa-star fs-5 px-2"></i>
              <span className="bg-white"></span>
            </div>
          </div>
          <div className="text-wrapper container d-flex justify-content-center text-white py-5">
            <p className="col-md-4 fs-5 me-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-4 fs-5">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </>
    );
  }
}
