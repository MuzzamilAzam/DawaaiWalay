import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import IntroScreen from './screens/IntroScreen';
import AboutScreen from './screens/AboutScreen';


function App() {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  // console.log(userInfo.isAdmin);
  // console.log(userInfo);
  var isAdminn;// = false;
  if(userInfo){
    if (userInfo.isAdmin){
      isAdminn = userInfo.isAdmin;
    }
    
  }
  // else{
  //   isAdminn = false;
  // }
  // else{
  //   isAdminn = false;
  // }
  console.log(isAdminn);
  // const isAdminn = userInfo.isAdminn || false;
  // console.log(isAdminn);

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header" >
      <div className="brand">
        
        <Link className="brand-name" to="/"><i class="fas fa-capsules"></i> DawaaiWalay</Link>
        {/* <a href="index.html">DawaaiWala</a> */}
      </div>
      <div className="header-links">
      <div className="dropdown">
                <a href="#"><i class="fas fa-list"></i> Products Categories <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown-content">
                <li>
                  <a href="/home">All</a>
                  </li>
                  
                  <li>
                  <a href="/type/Tablet">Tablet</a>
                  </li>
                  <li>
                  <a href="/type/Syrup">Syrup</a>
                  </li>
                  <li>
                  <a href="/type/Herb">Herb</a>
                  </li>
                  <li>
                  <a href="/type/Device">Device</a>
                  </li>
                </ul>
              </div>
        <Link to="/about"><i class="fas fa-question"></i> About</Link>
        {/* <a href="#">Covid-19</a> */}
        <Link to="/cart"><i class="fas fa-shopping-cart"></i> Cart ({cartItems.length})</Link>
        {
          userInfo ? (<Link to="/profile"><i class="fas fa-user"></i> {userInfo.name}</Link>):

          (<Link to="/signin"><i class="fas fa-sign-in-alt"></i> Log In</Link>)
        }
        {/* <a href="signin.html">Sign In</a> */}
        {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"><i class="fas fa-users-cog"></i> Admin Management <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders" className="management-items">Orders</Link>
                  </li>
                  <li>
                    
                  <Link to="/products" className="management-items">Products</Link>
                  </li>
                </ul>
              </div>
            )}
      </div>
      <button className="sidebar-open-button" onClick={openMenu}>
          &#9776;
        </button>
    </header>

  <aside className="sidebar">
    {/* <h3>Product Categories</h3> */}
    <button className="sidebar-close-button" onClick={closeMenu}>X</button>
    {/* <ul className="categories">
      <li>
        <Link to="/type/Tablet">Tablet</Link>
      </li>
      <li>
        <Link to="/type/Syrup">Syrup</Link>
      </li>
      <li>
        <Link to="/type/Herb">Herb</Link>
      </li>
      <li>
        <Link to="/type/Device">Device</Link>
      </li>
      
      
     
    </ul> */}
    <div>
      <h3 className="first-h3"><i class="fas fa-list"> </i> Product Categories</h3>
      <ul>
      <li>
                  <a href="/home">All</a>
                  </li>
                  
                  <li>
                  <a href="/type/Tablet">Tablet</a>
                  </li>
                  <li>
                  <a href="/type/Syrup">Syrup</a>
                  </li>
                  <li>
                  <a href="/type/Herb">Herb</a>
                  </li>
                  <li>
                  <a href="/type/Device">Device</a>
                  </li>
      </ul>
    </div>
    
<hr></hr>
    <Link to="/about"><i class="fas fa-question"></i> About</Link>
    
    <hr></hr>
    <Link to="/cart"><i class="fas fa-shopping-cart"></i> Cart ({cartItems.length})</Link>
    <hr></hr>
    {
          userInfo ? (<Link to="/profile"><i class="fas fa-user"></i> {userInfo.name}</Link>):

          (<Link to="/signin"><i class="fas fa-sign-in-alt"></i> Log In</Link>)
        }
        <hr></hr>
        {userInfo && userInfo.isAdmin && (
              <div>
                <h3><i class="fas fa-users-cog"></i> Admin Management</h3>
                <ul>
                  <li>
                    <Link to="/orders" className="management-items">Orders</Link>
                  </li>
                  <li>
                    
                  <Link to="/products" className="management-items">Products</Link>
                  </li>
                </ul>
                </div>
            )}

    
  </aside>

    <main className="main">
      <div className="content">
      
      <Route path="/profile" component={ProfileScreen} />
      {isAdminn &&
        <Route path="/products" component={ProductsScreen}></Route>
      }
      <Route path="/type/:id" component={HomeScreen} />
      {/* <Route path="/category/:id" component={HomeScreen} /> */}
      {/* <Route path="/order/cart" component={CartScreen}></Route> */}
      <Route path="/shipping" component={ShippingScreen}></Route>
      <Route path="/payment" component={PaymentScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/signin" component={SignInScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/" exact={true} component={IntroScreen} />
      <Route path="/home" component={HomeScreen}></Route>
      <Route path="/about" component={AboutScreen}></Route>
      <Route path="/order/:id" component={OrderScreen} />
      { isAdminn &&
        <Route path="/orders" component={OrdersScreen} />
      }
      </div>

    </main>
    <footer className="footer">
      All Rights Reserved © 2020. DawaaiWalay
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
