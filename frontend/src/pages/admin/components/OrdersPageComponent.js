import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { BsCheckLg } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { useEffect, useState } from "react";

import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const OrdersPageComponent = ({ getOrders }) => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((er) =>
      dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
  }, [getOrders, dispatch]);
    (function () {
        'use strict';

        var TableFilter = (function () {
            var Arr = Array.prototype;
            var input;

            function onInputEvent(e) {
                input = e.target;
                var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
                Arr.forEach.call(table1, function (table) {
                    Arr.forEach.call(table.tBodies, function (tbody) {
                        Arr.forEach.call(tbody.rows, filter);
                    });
                });
            }

            function filter(row) {
                var text = row.textContent.toLowerCase();
                //console.log(text);
                var val = input.value.toLowerCase();
                //console.log(val);
                row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
            }

            return {
                init: function () {
                    var inputs = document.getElementsByClassName('table-filter');
                    Arr.forEach.call(inputs, function (input) {
                        input.oninput = onInputEvent;
                    });
                }
            };

        })();

        TableFilter.init();
    })();
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
          <Col md={10}>
              <Row>
                  <Col>
                      <h1>Orders</h1>
                  </Col>
                  <Col md={3}>
                      <input type="text" className="mt-2 input-group table-filter w-100" data-table="order-table" placeholder="Search Orders.." />
                  </Col>
              </Row>
              <Table striped bordered hover responsive className="order-table table">
          <thead>
                      <tr className="text-center">
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
                          <th>Delivered</th>
                          <th>Paid</th>
                          <th>Payment Method</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td className="text-center">{idx + 1}</td>
                    <td className="text-center">
                  {order.user !== null ? (
                    <>
                      {order.user.name} {order.user.lastName}
                    </>
                  ) : null}
                </td>
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
                                    <BsCheckLg className = "text-success" />
                                )}
                            </>
                        ) : (
                            <>
                                <BsXLg className="text-danger" />
                            </>
                        )}

                    </td>
                    <td className="text-center">{order.paymentMethod}</td>

                    <td>
                        
                  <Link to={`/admin/order-details/${order._id}`}>
                    go to order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default OrdersPageComponent;
