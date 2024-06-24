import React from "react";
import Styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className={`row ${Styles.custom_bg} align-items-center`}>
        <div
          className={
            "col-md-3 col-lg-3 text-white text-center col-xl-3 col-8 pt-2 pb-2"
          }
          style={{
            borderRight: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <ul className={`nav small justify-content-evenly`}>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-white  ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                <i className="bi bi-robot fs18"></i> TRUDGY
              </Link>
            </li>
          </ul>
        </div>
        <div className={"col-md-6 col-lg-6 col-xl-6 col-12 pt-2 pb-2"}>
          <ul className={`nav small justify-content-evenly`}>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-white ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-uppercase text-white ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-uppercase text-white ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-uppercase text-white ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                Our Blog
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                to="/"
                className={`nav-link text-uppercase text-white ${
                  window.location.pathname === "/" ||
                  window.location.pathname === "/"
                    ? "active"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={"col-md-3 col-lg-3 col-xl-3 col-12 pt-2 pb-2 text-center"}
          style={{
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <a href="/" className="btn btn-danger rounded-0 small">
            <i className="bi bi-code-square"></i> Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
