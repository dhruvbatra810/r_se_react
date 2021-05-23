import React from "react";

import imagge from "../slide/images.jpg";
import Modal from "../modal";
function About() {
  return (
    <div className="container-fluid">
      <section id="about" className="about col-text col-back pt-3 ">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <h3>
              Find Out More<span>About Us</span>
            </h3>
            <p className="mb-4">
              The success of hospitals and healthcare providers depends on the
              quality of their service. But in an age where most of us look up
              information online before making almost any decision, a
              well-designed healthcare website is no less important.
            </p>
            <div className="row">
              <div className="col-md-6">
                <img src={imagge} height="100%" width="100%" />
              </div>
              <div className="col-md-6 pt-4 pt-lg-0 d-flex flex-column justify-content-center content">
                <h3>THE MOST VALUABLE THING IS YOUR HEALTH!!</h3>
                <p className="fst-italic">
                  We deliver quality services at your door step
                </p>
                <ul>
                  <li>
                    <i className="fas fa-file-medical-alt"></i>

                    <div>
                      <h5>Your most trusted health partner</h5>
                      <p>Hight quality medicines at affordable rates</p>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-briefcase-medical"></i>
                    <div>
                      <h5>Personal care for your healty living</h5>
                      <p>Medicines services you can trust</p>
                    </div>
                  </li>
                </ul>
                <p>
                  Getmeds! have been putting forth pharmacy administrations to
                  our clients for more than 10 years. We know the pharmacy and
                  wellbeing and magnificence industry back to front, continually
                  guaranteeing we offer the most breakthrough items and
                  medications. We bring our customers the best quality
                  administration and give the nearby network and neighboring
                  wards with a brilliant, understanding centered administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ margin: "5%" }}
        className="text-gray-600 body-font relative"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-3">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get in contact with Us , Register below and our team will reach
              you for your help.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto d-flex justify-content-center">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2 d-flex align-items-center">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                  />
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email:{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative d-flex align-item-center">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600  d-flex align-items-center me-2"
                  >
                    Message:{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300"
                    cols="52"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full d-flex justify-content-center">
                <Modal
                  btext="submit"
                  text="your form has been submitted"
                ></Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
