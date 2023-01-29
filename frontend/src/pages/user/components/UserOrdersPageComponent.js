import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCheckLg } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';

const UserOrdersPageComponent = ({getOrders}) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders()
        .then(orders => setOrders(orders))
            .catch((er) => console.log(er));
    }, [getOrders])

  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (order, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.orderTotal.cartSubtotal}</td>
                        <td className="text-center">
                            {order.isDelivered ? <BsCheckLg className="text-success" /> : <BsXLg className="text-danger" />}
                  </td>
                  <td>
                    <Link to={`/user/order-details/${order._id}`}>go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPageComponent;
