import React, { Component } from "react";
import logo from '../Home/avataaars.svg'
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "10px 10px";
  } else {
    document.querySelector(".navbar").style.padding = "30px 10px";
  }
  if (document.documentElement.scrollTop >= 722 && document.documentElement.scrollTop < 1590) {
    document.querySelector("#portfolio").classList.add("active")
  } else {
    document.querySelector("#portfolio").classList.remove("active")
  }
  if (document.documentElement.scrollTop >= 1590 && document.documentElement.scrollTop < 2010) {
    document.querySelector("#About").classList.add("active")
  } else {
    document.querySelector("#About").classList.remove("active")
  }
  if (document.documentElement.scrollTop >= 2011) {
    document.querySelector("#Contact").classList.add("active")
  } else {
    document.querySelector("#Contact").classList.remove("active")
  }
//   console.log(document.documentElement.scrollTop);
}

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home min-vh-100 pb-3">
          <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container px-5">
              <a className="navbar-brand text-white fs-1" href="#">
                Start React
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item fs-6 fw-bold" id="portfolio">
                    <a className="nav-link text-white text-uppercase" href="#">
                      portfolio
                    </a>
                  </li>
                  <li className="nav-item text-white fs-6 fw-bold" id="About">
                    <a className="nav-link text-white text-uppercase" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item text-white fs-6 fw-bold" id="Contact">
                    <a className="nav-link text-white text-uppercase" href="#">
                      content
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="wrapper">
            <div className="image">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-wrapper">
                <h1 className="text-white text-center">start React</h1>
                <div className="star d-flex justify-content-center align-items-center">
                    <span></span>
                    <i className="fa-solid fa-star text-white fs-1 px-3"></i>
                    <span></span>
                </div>
                <p className="text-white fs-4 py-5">Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
