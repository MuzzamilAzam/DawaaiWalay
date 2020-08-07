// import React from 'react';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import HomeScreen from './HomeScreen';



function IntroScreen(props) {

    return <><div className="jumbotron">
      <div className="container jumbo-container">
        <h1 className="display-3 jumbotron-title">Get Medicines At Your Doorstep</h1>
        <p className="para">Order now from our huge collection of medicine for diabetic patients.</p>
        <p><a className="btn btn-primary btn-lg submit-button jumbo-button" href="/home" role="button">View Products</a></p>
      </div>
    </div>
  
    <div className="container details">
      <div className="row">
        <div className="col-md-4">
          <h2><i class="fas fa-truck"></i> Fast Delivery</h2>
          <p>We deliver orders fast as possible, typical delivery time is 2 hours.</p>
          {/* <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> */}
        </div>
        <div className="col-md-4">
          <h2><i class="fas fa-thumbs-up"></i> Best Quality</h2>
          <p>All of our stock is fresh, we only deliver products of best quality.</p>
          {/* <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> */}
        </div>
        {/* <div className="col-md-3">
          <h2><i class="fas fa-pills"></i> Huge Variety</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          {/* <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> }
        </div> */}
        <div className="col-md-4">
          <h2><i class="fas fa-money-check-alt"></i> Affordable Rates</h2>
          <p>We sell products to our valuable customers at lower rates.</p>
          {/* <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> */}
        </div>
      </div>
    </div>

        <div className="colored-div">
    <div className="container">
    <h2>Product Categories</h2>
        <div className="row">
        <div className="col-md-6 col-lg-3">
            <Link to="/type/Herb"><img className="img-responsive" src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/health-and-wellbeing/treatments-and-therapies/herbal-remedies/a-z-herbal-remedies-shutterstock.jpgg"></img></Link>
            <h3>Herbs</h3>
        </div>
        <div className="col-md-6 col-lg-3">
            <Link to="/type/Syrup"><img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Cough_medicine.jpg"></img></Link>
            <h3>Syrup</h3>
        </div>
        <div className="col-md-6 col-lg-3">
            <Link to="/type/Tablet"><img className="img-responsive" src="https://sunrisehouse.com/wp-content/uploads/2017/08/prescription-pills-400x267.jpg"></img></Link>
            <h3>Tablets</h3>
        </div>
        <div className="col-md-6 col-lg-3">
            <Link to="/type/Device"><img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT5jYshp0Cznozio779MEpjKIGQ4fin0OToQ&usqp=CAU"></img></Link>
            <h3>Devices</h3>
        </div>
        {/* <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div> */}
        </div>
    </div>
    </div>

    </>
}

export default IntroScreen;