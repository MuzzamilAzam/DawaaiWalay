// import React from 'react';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



function AboutScreen(props) {

    return<div className="container about-container">
        
        <h1>About This Project</h1>
        <table className="about-table">
            <tr>
                <td>
                    <strong>Project Title </strong>
                </td>
                <td>
                <em>DawaaiWalay</em> (Online Medicine Delivery Sytem for Diabetic Patients)
                </td>
            </tr>
            <tr>
                <td>
                    <strong>Course Title </strong>
                </td>
                <td>
                    Internet Application Development
                </td>
            </tr>
            <tr>
                <td>
                    <strong>
                        Course Incharge 
                    </strong>
                </td>
                <td>
                    Sir Jibran Rasheed Khan
                </td>
            </tr>

            <tr>
                <td>
                    <strong>Group Members </strong>
                </td>
                <td>
                    <ul>
                    <li>Muzzamil Azam - B16101127</li>
                <li>Saif ur Raheem - B16101140</li>
                <li>Sadiq - B16101139</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>Project Description </strong>
                </td>
                <td>
                    <p>The project is for delivery of medicine items for diabetic patients. 
                    To order medicines the users need to register to the website first.
                    A user can browse on the website for products, add the product to cart, 
                    finish the order by providing shipping details, and payment, after that the product
                    will be delivered to the user. Users can also view their order history and change their information (email/password/name).
                    Admin can manage the products (creating/editing/deleting) and orders (view all the orders).</p>
                </td>
            </tr>
            <tr>
            <td>
            <strong>
                    Contributions
                </strong>
            </td>
            <td>
            <ul>
                <li>
                Muzzamil Azam (Group Leader) - Front End, Back End, Database, Project File
                </li>
                <li>
                    Saif ur Raheem - Website Layout Design
                </li>
                <li>
                    Sadiq - Website Layout Design
                </li>
            </ul>
                
            </td>
               
            </tr>
            <tr>
                <td>
                    <strong>Technologies Used </strong>
                </td>
                <td>
                    <ul>
                    <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Bootstrap 4
                        </li>
                        <li>
                            React.js (with Redux and Hooks)
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            Font-Awesome
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
        
    </div>
    
}

export default AboutScreen;