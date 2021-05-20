import React from "react";
import "./main.css";

export default function Footer() {
  return (
    <div>
      <section id="cta" style={{ marginTop: "10rem" }}>
        <h3 className="cta-font">
          <i className="fas fa-tags"></i> Discounts you can't Ignore !
        </h3>
        <button className="btn btn-outline-light btn-lg" type="button">
          <i className="fab fa-apple "></i> Download
        </button>
        <button className="btn btn-dark btn-lg" type="button">
          <i className="fab fa-google-play "></i> Download
        </button>
      </section>

      <footer
        id="footer"
        className="bg-dark text-white"
        style={{ opacity: "0.8" }}
      >
        <p id="copy-getmeds">© Copyright 2021 GetMeds</p>
      </footer>
    </div>
  );
}
