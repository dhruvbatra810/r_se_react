import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ v }) => {
  console.log("wow");
  return (
    <>
      <section id="title">
        <div className="pad-1">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <p>{v}</p>
            <a className="navbar-brand">
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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link listnav" href="#cta">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listnav" href="#features">
                    Order
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listnav" href="#title">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link listnav" to="/cart">
                    Cart
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
