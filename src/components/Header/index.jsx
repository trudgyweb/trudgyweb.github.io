import React from "react";
import Styles from "./style.module.css";
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="container pt-4 sticky-top">
      <ul
        className={`nav nav-pills bg-danger nav-fill gap-2 p-1 small rounded-5 shadow-lg `}>
        <li className="nav-item text-white">
          <Link
            to="/portfolio/"
            className={`nav-link text-white ${window.location.pathname === "/portfolio/" || window.location.pathname === "/" ? "bg-dark active": ""} rounded-5`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item text-white">
          <Link
            to="/portfolio/about"
            className={`nav-link text-white rounded-5 ${ window.location.pathname === "/portfolio/about" ? "bg-dark active": ""}`}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/portfolio/contact"
            className={`nav-link text-white rounded-5 ${ window.location.pathname === "/portfolio/contact" ? "bg-dark active": null}`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
