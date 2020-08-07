// import React from 'react';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';



function ProductsScreen(props) {


    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
    // const [rating, setRating] = useState('');
    // const [numReviews, setNumReviews] = useState('');
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        };
    }, [successSave, successDelete]);


    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setImage(product.image);
        setPrice(product.price);
        setType(product.type);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct(
            {
                _id: id,
                name, image, price, type, countInStock, description
            }));

    }

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }

    return <div className="content content-margined">
        <div className="product-header">
            <h3 className="title-heading">Products</h3>
            <button className="btn btn-lg btn-primary submit-button" onClick={() => openModal({})}>Create a product.</button>
        </div>
        {modalVisible &&
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">

                        <li>
                            <h2>Create New Product</h2>
                        </li>
                        <li>
                            {loadingSave && <div className="loading-msg">Loading...</div>}
                            {errorSave && <div className="loading-msg">{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                   </label>
                            <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>

                            </input>
                        </li>
                        <li>
                            <label htmlFor="image">
                                Image URL
                   </label>
                            <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>

                            </input>
                        </li>
                        <li>
                            <label htmlFor="price">
                                Price
                   </label>
                            <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>

                            </input>
                        </li>
                        <li>
                            <label htmlFor="type">
                                Type
                   </label>
                            {/* <input type="text" name="type" value={type} id="type" onChange={(e) => setType(e.target.value)}>

                   </input> */}

                            <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                                <option>Select Type</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Syrup">Syrup</option>
                                <option value="Herb">Herb</option>
                                <option value="Device">Device</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="countInStock">
                                No of Items
                   </label>
                            <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>

                            </input>
                        </li>

                        <li>
                            <label htmlFor="description">
                                Description
                   </label>
                            <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}>

                            </textarea>
                        </li>

                        <li>
                            <button type="submit" className="btn btn-lg btn-primary">{id ? "Update" : "Create"}</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModalVisible(false)} className="btn btn-lg btn-secondary">Go Back</button>
                        </li>
                    </ul>
                </form>
            </div>
        }
        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>PRODUCT ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STOCK COUNT</th>
                        <th>TYPE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        (<tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.countInStock}</td>
                            <td>{product.type}</td>
                            <td>
                                <button className="btn btn-lg btn-warning" onClick={() => openModal(product)}>Edit</button>
                                {' '}
                                <button className="btn btn-lg btn-danger" onClick={() => deleteHandler(product)}>Delete</button>
                            </td>
                        </tr>
                        ))}

                </tbody>
            </table>
        </div>
    </div>

}

export default ProductsScreen;