// import React from 'react';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



function ShippingScreen(props) {

    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    // const [password, setPassword] = useState('');
    // const [rePassword, setRePassword] = useState('');
    // const userRegister = useSelector(state => state.userRegister);
    // const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();




const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({address, phoneNo}));
    props.history.push('payment');
}

    return <div>
        <CheckoutSteps step1 step2>

        </CheckoutSteps>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">

            <li>
                <h2 className="title-heading">Shipping</h2>
            </li>
            
               <li>
                   <label htmlFor="address">
                       Complete Address
                   </label>
                   <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>

                   </input>
               </li> 

               <li>
                   <label htmlFor="phoneNo">
                       Phone No.
                   </label>
                   <input type="text" name="phoneNo" id="phoneNo" onChange={(e) => setPhoneNo(e.target.value)}>

                   </input>
               </li>
            
               
               <li>
                   <button type="submit" className="btn btn-lg btn-primary submit-button">Continue</button>
               </li>
               
               
            </ul>
        </form>
    </div>
    </div>
    
    
}

export default ShippingScreen;