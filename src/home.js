import React from "react";
const Home = ()=>{
    return(
        <>
         <section id="title">

    <div class="pad-1">

      <nav class="navbar navbar-expand-lg navbar-dark ">


        <a class="navbar-brand"><i class="fas fa-notes-medical"></i> GetMeds</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link listnav" href="#cta">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link listnav" href="#features">Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link listnav" href="#title">About Us</a>
            </li>
          </ul>

        </div>



      </nav>


      <div class="row">
        <div class="col-lg-6">
          <h1 id="text-1">Exactly what you need. Exactly where you need.</h1>
          <button class="btn btn-dark btn-lg down-button" type="button"><i class="fas fa-shopping-cart"></i> Order now</button>
          <button class="btn btn-outline-light btn-lg down-button" type="button"><i class="far fa-address-card"></i> About Us
          </button>
        </div>
        <div class="col-lg-6 ">
          <img class="imag" src="images/Medicine image.png" alt="iphone-mockup"/>
        </div>
      </div>


    </div>
  </section>



  <section id="features">

    <div class="row">
      <div class="col-lg-4">
        <a href="https://www.cowin.gov.in/home"><i class="fas fa-viruses fa-4x ixa"></i></a>


        <h3>Vaccines</h3>
        <p class="color-tag">Get your Vaccines booked</p>
      </div>
      <div class="col-lg-4">
        <i class="fas fa-stethoscope fa-4x ixa"></i>
        <h3>Medicines</h3>
        <p class="color-tag">All the medicines you need at discounted price.</p>
      </div>
      <div class="col-lg-4">
        <a href="https://static.mygov.in/rest/s3fs-public/mygov_161725058451307401.pdf" target="_blank"><i class="fas fa-heartbeat  fa-4x ixa"></i></a>

        <h3>Precautions</h3>
        <p class="color-tag">COVID-19 Safety measures and Precautions</p>
      </div>

    </div>


  </section>



  <section id="testimonials">

    <div id="carousel1" class="carousel slide" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2 class="testimonials-in">Dr. Smith is a renowned doctor of New york and recommends GetMeds.</h2>
          <img class="img-2" src="images/Doctor-male.jpg" alt="dog-profile"/>
          <div>
            <em><strong>Dr. Smith</strong><br /> New York</em>
          </div>


        </div>
        <div class="carousel-item">
          <h2 class="testimonials-in">Dr. Nina uses GetMeds on regular basis and recommends to others.</h2>
          <img class="img-2" src="images/Doctor-female.jpg" alt="lady-profile"/>
          <div>
            <em><strong>Dr. Nina</strong><br /> Los Angeles</em>
          </div>

        </div>

      </div>
      <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>

      </a>
      <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
        <span class="carousel-control-next-icon"></span>

      </a>

    </div>

  </section>



  <section id="press">
    <img class="img-3" src="images/cipla.svg" alt="tc-logo"/>
    <img class="img-3" src="images/Biogen.svg.png" alt="tnw-logo"/>
    <img class="img-3" src="images/biocon.png" alt="biz-insider-logo"/>
    <img class="img-3" src="images/teva.png" alt="mashable-logo" >

  </section>



  <section id="pricing">

    <h2 style="margin:2% auto;color:gray;" class="pricing-in">A Plan for EveryOne's Needs</h2>
    <p class="para-price">Simple and affordable price plans for you and your medical needs</p>

    <div class="card-deck">


      <div class="card border-card">
        <div class="card-header ">
          <h3>Basic</h3>
        </div>
        <div class="card-body">
          <h2 class="pricing-in">Free</h2>
          <p>Cash Back Offers</p>
          <p>10 Messages Per Day</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>


      <div class="card border-card">
        <div class="card-header">
          <h3>Plus</h3>
        </div>
        <div class="card-body">
          <h2 class="pricing-in">Rs 499/ mo</h2>
          <p>Doctor Consulation</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>


      <div class="card border-card">
        <div class="card-header">
          <h3>Pro</h3>
        </div>
        <div class="card-body">
          <h2 class="pricing-in">Rs 999/ mo</h2>
          <p>Pirority Listing</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button class="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>

    </div>

    </div>




  </section>



  <section id="cta">

    <h3 class="cta-font"><i class="fas fa-tags"></i> Discounts you can't Ignore !</h3>
    <button class="btn btn-outline-light btn-lg" type="button"><i class="fab fa-apple "></i> Download</button>
    <button class="btn btn-dark btn-lg" type="button"><i class="fab fa-google-play "></i> Download</button>

  </section>


  <!-- Footer -->

  <footer id="footer">

    <p id="copy-getmeds">© Copyright 2021 GetMeds</p>

  </footer>

        </>
    );
}