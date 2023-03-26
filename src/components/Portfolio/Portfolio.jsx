import React, { Component } from "react";
import cabin from "./imgs/cabin.png";
import cake from "./imgs/cake.png";
import img3 from "./imgs/circus.png";
import img4 from "./imgs/game.png";
import img5 from "./imgs/safe.png";
import img6 from "./imgs/submarine.png";

function showDetails() {
  document.querySelector(".about .show-on-click").classList.remove("d-none");
  window.screen.height = 100;
}

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="container py-5 portfolio">
          <div className="special-heading">
            <h2 className="text-center text-dark text-uppercase fw-bolder">
              Portfolio
            </h2>
            <div className="bottom-style d-flex justify-content-center align-items-center">
              <span></span>
              <i className="fa-solid fa-star fs-5 px-2"></i>
              <span></span>
            </div>
          </div>
          <div className="row pt-4">
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#oneModal"
            >
              <div>
                <img src={cabin} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="oneModal"
                tabIndex="-1"
                aria-labelledby="oneModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={cabin} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div>
                <img src={cake} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={cake} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#threeModal"
            >
              <div>
                <img src={img3} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="threeModal"
                tabIndex="-1"
                aria-labelledby="threeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={img3} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#fourModal"
            >
              <div>
                <img src={img4} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="fourModal"
                tabIndex="-1"
                aria-labelledby="fourModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={img4} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#fiveModal"
            >
              <div>
                <img src={img5} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="fiveModal"
                tabIndex="-1"
                aria-labelledby="fiveModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={img5} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#sixModal"
            >
              <div>
                <img src={img6} alt="img" className="w-100 rounded-3" />
              </div>
              <div className="show-up position-relative rounded-3">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                className="modal fade"
                id="sixModal"
                tabIndex="-1"
                aria-labelledby="sixModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="special-heading w-100 text-center">
                        <h2 className="text-center text-dark text-uppercase fw-bolder">
                          Portfolio
                        </h2>
                        <div className="bottom-style d-flex justify-content-center align-items-center">
                          <span></span>
                          <i className="fa-solid fa-star fs-5 px-2"></i>
                          <span></span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-close position-absolute m-0 top-0 end-0 p-3 fs-4 txt-green"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <img src={img6} alt="img" className="w-100 rounded-3" />
                      </div>
                      <div className="w-75">
                        <p className="text-center py-4 px-5 fs-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Unde eaque ducimus laudantium cum mollitia,
                          laborum iure praesentium labore commodi, expedita at
                          magni corporis perspiciatis placeat doloremque ut.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center align-items-center mb-3">
                      <button type="button" className="btn btn-success p-2">
                        <i className="fa-solid fa-x px-2"></i>
                        Close Window
                      </button>
                    </div>
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
