import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import {removeFromCart} from '../actions/cartActions';
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
//   const shippingPrice = itemsPrice > 100 ? 0 : 10;
const shippingPrice = 100;
//   const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
       totalPrice
    }));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
      // console.log(cartItems[0].product);
      // dispatch(removeFromCart(cartItems[0].product));
      // console.log(cartItems);
      var i;
      for (i=0; i < cartItems.length; i++){
        dispatch(removeFromCart(cartItems[i].product));
      }
    }

  }, [success]);

  // useEffect(() => {
  // }, []);

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3 className="title-heading-sm">
            Shipping Address
          </h3>
          <div>
          <span className="shipping-details">Shipping Address: </span>{cart.shipping.address}
          <div><span className="shipping-details">Phone No: </span>{cart.shipping.phoneNo}</div> 
          </div>
        </div>
        <div>
          <h3 className="title-heading-sm">Payment</h3>
          <div>
            <span className="shipping-details">Payment Method: </span>{cart.payment.paymentMethod}
          </div>
          <div className="paid">
            Paid
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3 className="title-heading">
                Shopping Cart
          </h3>
              <div>
              <h1>Item Price</h1>
                
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  <h3 className="title-heading">Cart is empty</h3>
          </div>
                :
                cartItems.map(item =>
                  <li key={item.product}>
                  
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Quantity: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      Rs. {item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>

      
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="btn btn-lg btn-primary full-width submit-button" onClick={placeOrderHandler} >Finish Order</button>
          </li>
          <li>
            <h3 className="title-heading-sm">Order Summary</h3>
          </li>
          <li>
            <div>Items Cost: </div>
            <div>Rs. {itemsPrice}</div>
          </li>
          <li>
            <div>Shipping Cost: </div>
            <div><span className="price">Rs. {shippingPrice}</span></div>
          </li>
          {/* <li>
            <div>Tax</div>
            <div>Rs. {taxPrice}</div>
          </li> */}
          <li>
            <div>Total Order Cost: </div>
            <div>Rs. {totalPrice}</div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;