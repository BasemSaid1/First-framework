import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav
        className={`${style.navbar} navbar navbar-expand-lg  p-2 py-4 fixed-top`}
      >
        <div className="container">
          <Link className="navbar-brand text-white" to="">
            START FRAMEWORK
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <NavLink
                  className="nav-link text-white "
                  aria-current="page"
                  to="about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link text-white" to="portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link text-white" to="contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
