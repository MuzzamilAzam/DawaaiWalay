import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3 className="title-heading-sm">
              Shipping Details
          </h3>
            <div>
              {/* {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country}, */}
          <span className="shipping-details">Shipping Address: </span>{order.shipping.address}
          <div><span className="shipping-details">Phone No: </span>{order.shipping.phoneNo}</div> 
          {/* <span>Phone No: </span>{order.shipping.phoneNo} */}
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3 className="title-heading-sm">Payment</h3>
            <div>
              <span className="shipping-details">Payment Method: </span>{order.payment.paymentMethod}
            </div>
            <div>
            {}
              {order.isPaid ? "Paid at: " + order.paidAt : "Not Paid."}
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
                order.orderItems.length === 0 ?
                  <div>
                  <h3 className="title-heading">Cart is empty</h3>
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
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
            <li className="placeorder-actions-payment">
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid}
            </li>
            <li>
              <h3 className="title-heading-sm">Order Summary</h3>
            </li>
            <li>
              <div>Items Cost: </div>
              <div>Rs. {order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping Cost: </div>
              <div><span className="price">Rs. {order.shippingPrice}</span></div>
            </li>
     
            <li>
              <div>Total Order Price: </div>
              <div>Rs. {order.totalPrice}</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;