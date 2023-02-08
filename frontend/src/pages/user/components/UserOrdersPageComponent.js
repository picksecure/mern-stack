import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCheckLg } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import MetaComponent from "../../../components/MetaComponent";

const UserOrdersPageComponent = ({ getOrders, fetchSetting }) => {
    const [orders, setOrders] = useState([]);
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    useEffect(() => {
        getOrders()
        .then(orders => setOrders(orders))
            .catch((er) => console.log(er));
    }, [getOrders])

  return (
      <Row className="m-5 justify-content-center">
          <MetaComponent
              title={setting.seoHelmentTitleUserOrders}
              description={setting.seoHelmentDescriptionUserOrders}
              name={setting.seoHelmentName}
              type={setting.seoHelmentTypeUserOrders} />
      <Col md={8}>
        <h1 className="mb-3">My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
                          <th className="text-center">#</th>
                          <th className="text-center">Date</th>
                          <th className="text-center">Total</th>
                          <th className="text-center">Delivered</th>
                          <th className="text-center">Paid</th>
                          <th className="text-center">Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (order, idx) => (
                <tr key={idx}>
                        <td className="text-center">{idx +1}</td>
                        <td className="text-center">{order.createdAt.substring(0, 10)}</td>
                        <td className="text-center">{order.orderTotal.cartSubtotal}</td>
                        <td className="text-center">
                            {order.isDelivered ? (
                                <BsCheckLg className="text-success" />
                            ) : (
                                <>
                                    {order.cancelled ? (<p className="text-success fw-bold">Cancelled</p>) : (<BsXLg className="text-danger" />)}
                                </>
                            )}
                        </td>
                        <td className="text-center">
                            {order.isPaid ? (
                                <>
                                    {order.refund ? (<p className="fw-bold text-success">Refunded</p>) : (
                                        <BsCheckLg className="text-success" />
                                    )}
                                </>
                            ) : (
                                <>
                                    <BsXLg className="text-danger" />
                                </>
                            )}
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
