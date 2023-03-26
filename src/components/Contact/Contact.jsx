import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact py-5">
          <div className="special-heading">
            <h2 className="text-center text-uppercase fw-bolder">contact me</h2>
            <div className="bottom-style d-flex justify-content-center align-items-center">
              <span></span>
              <i className="fa-solid fa-star fs-5 px-2"></i>
              <span></span>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div
                  id="contactForm"
                  name="sentMessage"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value position-relative">
                      <label id="labelName">Name</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                        fdprocessedid="6a1c7e"
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                      <label htmlFor="">Email</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                        fdprocessedid="obsr4"
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                      <label htmlFor="">Phone</label>
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                        fdprocessedid="bpb8n7"
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                      <label htmlFor="">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        aria-invalid="false"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <br />
                  <div id="success"></div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                      type="submit"
                      fdprocessedid="vohxsi"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
