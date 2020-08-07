import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }


    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3 className="title-heading">
                        Your Cart
                    </h3>
                    <div>
                       <h1 >Item Price</h1>
                    </div>
                </li>

                {
                    cartItems.length === 0 ?
                        <div>
                            <h1 className="title-heading-xsm">Your Cart is Empty.</h1>
                        </div>
                        :
                        cartItems.map(item =>
                            <li key={item.product}>
                                {/* {console.log(item.product)} */}
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
                                        Quantity:<span> </span>
                                      <select className="qty-selector" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                                        <button type="button" className="btn btn-secondary submit-button" onClick={() => removeFromCartHandler(item.product)}>
                                            <span> </span>Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    Rs.{item.price}
                                </div>
                            </li>
                        )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3 >
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
            :
           <span className="price"> Rs. {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>
            </h3>
            <button onClick={checkoutHandler} className="btn btn-lg btn-success full-width submit-button" disabled={cartItems.length === 0}>
                Proceed to CheckOut!
            </button>
        </div>

    </div>
}

export default CartScreen;