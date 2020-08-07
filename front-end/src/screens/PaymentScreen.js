import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2 className="title-heading">Payment</h2>
            </li>

            <li>
              <div>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="EasyPaisa"
                  onChange={(e) => setPaymentMethod(e.target.value)}></input>
                  
                <label htmlFor="paymentMethod" className="payingMethond"><span>  </span> EasyPaisa</label>
                </div>
                <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="JazzCash"
                  onChange={(e) => setPaymentMethod(e.target.value)}></input>
                <label htmlFor="paymentMethod" className="payingMethond"><span>  </span> Jazz Cash</label>
                </div>
              </div>
            </li>

            <li>
              <button type="submit" className="btn btn-lg btn-primary submit-button">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentScreen;