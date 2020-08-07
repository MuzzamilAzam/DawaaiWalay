import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function ProductScreen(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));

        return () => {
            //
        };
    }, []);

    const handleAddToCart = () =>{
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }

    return <div>
        <div className="back-to-result">
            <Link to="/home" className="remove-underline"><i class="fas fa-long-arrow-alt-left"></i> Go To Products Page</Link>
        </div>
        {loading ? <div className="loading-msg">Loading...</div> :
            error ? <div className="loading-msg">{error}</div> :
                (
                    <div className="container product-container">

                        <div className="row">
                            <div className="col-md-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 carousel-img" src={product.image} alt="Product First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 carousel-img" src={product.image} alt="Product Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 carousel-img" src={product.image} alt="Product Third slide" />
                                        </div>
                                    </div>
                                    {/* <a className="carousel-control-prev carousel-btn" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    </a>
                                    <a className="carousel-control-next carousel-btn" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    </a> */}
                                </div>
                            </div>
                            <div className="col-md-7 product-desc">

                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h4 className="title-heading">
                                                {product.name}</h4>
                                        </li>
                                        {/* <li>
                                            {product.rating} Stars ({product.numReviews} Reviews)
                                        </li> */}
                                        <li>
                                            <span className="title-heading-xsm">Price:</span> <span className="price">Rs. {product.price}</span>
                                        </li>
                                        <li>
                                            <span className="title-heading-xsm">Description:</span>
                                            <div>
                                                {product.description}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className="details-action">
                                    <ul>
                                        <li>
                                            <strong>Price:</strong> <span className="price">Rs {product.price}</span>
                                        </li>
                                        <li>
                                            <strong>Status:</strong> {product.countInStock > 0 ? " Available": " Out of Stock"}
                                        </li>
                                        <li>
                                            <strong>Quantity:</strong> <select className="qty-selector" value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                                {[...Array(product.countInStock).keys()].map(x=>
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>
                                            {product.countInStock>0 && <button onClick={handleAddToCart} className="btn btn-lg btn-primary sell-btn">
                                                Add to Cart
                                            </button> 
                                            }
                                            
                                        </li>
                                    </ul>
                                </div>
                                {/* <h2>Latest Pills Fresh Out of Factories</h2>
        <p>Product ID: 123</p>
        <p className="price">Rs 20.00</p>
        <p><strong>Availability:</strong> In Stock</p>
        <p><strong>Condition</strong> New</p>
        <p><strong>Brand: </strong>XYZ company</p>

        <label>Quantity:</label>
        <input type="text" value="1" />
        <button type="button" className="btn btn-default cart">
            Add to cart
        </button> */}
                            </div>
                        </div>
                    </div>
                )
        }
        {/* <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Stars ({product.numReviews})
                </li>
                <li>
                    <strong>Price: Rs. {product.price}</strong>
                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
            </div>
         <div className="details-action">
             <ul>
                 <li>
                     Price: {product.price}
                 </li>
                 <li>
                     Status: {product.status}
                 </li>
                 <li>
                     Qty: <select>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                     </select>
                 </li>
                 <li>
                     <button className="button primary">
                         Add to Cart
                     </button>
                 </li>
             </ul>
         </div>
        </div> */}




    </div>
}

export default ProductScreen;