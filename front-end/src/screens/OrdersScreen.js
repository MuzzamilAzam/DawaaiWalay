import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listOrders, deleteOrder,updateOrder } from '../actions/orderActions';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  const updateHandler = (order) => {
    dispatch(updateOrder(order._id));
  }
  return loading ? <div className="loading-msg">Loading...</div> :
    <div className="content content-margined">

      <div className="order-header">
        <h3 className="title-heading">Orders Information</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>DATE</th> */}
              <th>AMOUNT</th>
              <th>USER</th>
              <th>PAID</th>
              <th>PAID AT</th>
              <th>DELIVERED</th>
              {/* <th>STATUS</th> */}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order._id}</td>
              {/* <td>{order.createdAt}</td> */}
              <td>{order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.isPaid.toString()}</td>
            <td>
            {/* <select class="form-control" id="sel1" onClick={() => updateHandler(order)} >
    <option>Change Status</option>
    <option value={true}>Paid</option>
    <option value={false}>UnPaid</option>    
  </select> */}
  {order.paidAt}

            </td>
              <td>{order.isDelivered.toString()}</td>
              {/* <td>{order.deliveredAt}</td> */}
              <td>
                <Link to={"/order/" + order._id} className="btn btn-lg btn-info" >Details</Link>
                {' '}
                <button type="button" onClick={() => deleteHandler(order)} className="btn btn-lg btn-danger">Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
}
export default OrdersScreen;