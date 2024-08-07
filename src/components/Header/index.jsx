import React,{useEffect} from "react";
import Styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init();
  }, [])
  const location = useLocation();
  return (
    <nav
      className={`navbar navbar-expand-lg  border-bottom border-3 border-black ${Styles.custom_bg} text-white p-0`}
    >
      <div className="container align-items-center">
        <div className="col-8 col-md-5 col-lg-5 col-xl-5 pt-3 pb-3">
          <Link className="navbar-brand text-white" to="/">
            <img src="/assets/images/trudgy_white_updated.png" width="120px" />
          </Link>
        </div>
        <button
          className="navbar-toggler bg-white"
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
          className="collapse navbar-collapse col-lg-7 col-xl-7 col-12 col-md-7 pt-3 pb-3"
          id="navbarNav"
        >
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/blog" ? "active" : ""
                }`}
                to="/blog"
              >
                Our Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn btn-danger  text-white rounded-0 ${
                  location.pathname === "/" ? "active" : ""
                }`}  style={{backgroundColor:"#FF2301", borderColor:"#FF2301"}}
                to="/"
              >
                <i className="bi bi-telephone"></i> Call Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
