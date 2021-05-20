import React from 'react';
import biocon from '../images/biocon.png';
import biogen from '../images/Biogen.svg.png';
import cipla from '../images/cipla.svg';
import docf from '../images/Doctor-female.jpg';
import docm from '../images/Doctor-male.jpg';
import medi from '../images/Medicine image.png';
import teva from '../images/teva.png';
import './main.css';

export default function Main() {
    return (

        <div>

        <section  id="title">

    


    <div style={{padding:"5% 15%"}} className="pad-1">

        
        <div className="row">
        <div className="col-lg-6">
          <h1 id="text-1">Exactly what you need. Exactly where you need.</h1>
          <button className="btn btn-dark btn-lg down-button" type="button"><i className="fas fa-shopping-cart"></i> Order now</button>
          <button className="btn btn-outline-light btn-lg down-button" type="button"><i className="far fa-address-card"></i> About Us
          </button>
        </div>
        <div className="col-lg-6 ">
          <img className="imag" src={medi} alt="iphone-mockup"></img>
        </div>
      </div>


    </div>
  </section>


  

  <section id="features">

    <div className="row">
      <div className="col-lg-4">
        <a href="https://www.cowin.gov.in/home"><i className="fas fa-viruses fa-4x ixa"></i></a>


        <h3>Vaccines</h3>
        <p className="color-tag">Get your Vaccines booked</p>
      </div>
      <div className="col-lg-4">
        <i className="fas fa-stethoscope fa-4x ixa"></i>
        <h3>Medicines</h3>
        <p className="color-tag">All the medicines you need at discounted price.</p>
      </div>
      <div className="col-lg-4">
        <a href="https://static.mygov.in/rest/s3fs-public/mygov_161725058451307401.pdf" target="_blank"><i className="fas fa-heartbeat  fa-4x ixa"></i></a>

        <h3>Precautions</h3>
        <p className="color-tag">COVID-19 Safety measures and Precautions</p>
      </div>

    </div>


  </section>


 

  <section id="testimonials">

    <div id="carousel1" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h2 className="testimonials-in">Dr. Smith is a renowned doctor of New york and recommends GetMeds.</h2>
          <img className="img-2" src={docm} alt="doc-profile"></img>
          <div>
            <em><strong>Dr. Smith</strong><br /> New York</em>
          </div>


        </div>
        <div className="carousel-item">
          <h2 className="testimonials-in">Dr. Nina uses GetMeds on regular basis and recommends to others.</h2>
          <img className="img-2" src={docf} alt="doc-profile"></img>
          <div>
            <em><strong>Dr. Nina</strong><br /> Los Angeles</em>
          </div>

        </div>

      </div>
      <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>

      </a>
      <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
        <span className="carousel-control-next-icon"></span>

      </a>

    </div>


  </section>




  <section id="press">
    <img className="img-3" src={cipla} alt="tc-logo"></img>
    <img className="img-3" src={biocon} alt="tnw-logo"></img>
    <img className="img-3" src={biogen} alt="biz-insider-logo"></img>
    <img className="img-3" src={teva} alt="mashable-logo"></img>

  </section>


  

  <section id="pricing">

    <h2 style={{margin:"2% auto", color:"gray"}} className="pricing-in">A Plan for EveryOne's Needs</h2>
    <p className="para-price">Simple and affordable price plans for you and your medical needs</p>

    <div className="card-deck">


      <div className="card border-card">
        <div className="card-header ">
          <h3>Basic</h3>
        </div>
        <div className="card-body">
          <h2 className="pricing-in">Free</h2>
          <p>Cash Back Offers</p>
          <p>10 Messages Per Day</p>
          <p>Unlimited App Usage</p>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>


      <div className="card border-card">
        <div className="card-header">
          <h3>Plus</h3>
        </div>
        <div className="card-body">
          <h2 className="pricing-in">Rs 499/ mo</h2>
          <p>Doctor Consulation</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>


      <div className="card border-card">
        <div className="card-header">
          <h3>Pro</h3>
        </div>
        <div className="card-body">
          <h2 className="pricing-in">Rs 999/ mo</h2>
          <p>Pirority Listing</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>

    </div>

    




  </section>


  

 



  </div>









     
       
        
    );
}
