import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ v }) => {
  console.log("qqq");
  return (
    <>
      <section id="title">
        <div className="pad-1">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand fs-2">
              <i className="fas fa-notes-medical"></i> GetMeds
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link listnav fs-5" to="/">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link listnav fs-5" to="/order">
                    order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link listnav fs-5" to="/aboutus">
                    aboutus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link listnav fs-5" to="/cart">
                    Cart{" "}
                    <span style={{ color: "red", fontSize: "1rem" }}>
                      <sup>{v === 0 ? undefined : v}</sup>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Header;
