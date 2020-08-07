import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import data from '../data'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props) {

  // const [products, setProduct] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const type = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(type));
    // const fetchData = async () =>{
    //     const { data } = await axios.get("/api/products");
    //     setProduct(data);
    // }
    // fetchData();
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(type, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(type, searchKeyword, sortOrder));
  };

  return(
<>
      {type && <h2 className="product-heading">Category: <span className="paid">{type}</span></h2>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <span>   </span>
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </li>
        {/* <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li> */}
      </ul>
  
   {loading ? (<div className="loading-msg">Loading...</div>) :
    error ? (<div className="loading-msg">{error}</div>) :
      (<ul className="products">
        {
          products.map(product =>(
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product-img" /></Link>

                <div className="product-name"><Link to={'/product/' + product._id}>{product.name}</Link></div>
                <div className="product-type">{product.type}</div>
                <div className="product-price">Rs. {product.price}</div>
              </div>
            </li>))}

      </ul>
      )}
      </>
  );
}

export default HomeScreen;