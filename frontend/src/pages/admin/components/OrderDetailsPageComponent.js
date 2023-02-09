import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import paths from "../../../router/paths";

const OrderDetailsPageComponent = ({ getOrder, markAsPaid, markAsDelivered, markAsCancelled, markAsRefund }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
    const [cartPrice, setCartPrice] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartShipping, setCartShipping] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);
    const [cancelled, setCancelled] = useState(false);
    const [refund, setRefund] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonDisabled2, setButtonDisabled2] = useState(false);
    const [buttonDisabled3, setButtonDisabled3] = useState(false);
    const [buttonDisabled1, setButtonDisabled1] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] =
        useState("Mark as delivered");
    const [paidButtonMessage, setPaidButtonMessage] =
        useState("Mark as paid");
    const [cancelButtonMessage, setCancelButtonMessage] =
        useState("Cancel the order");
    const [refundButtonMessage, setRefundButtonMessage] =
        useState("Refund the order");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
          order.isPaid
              ? setIsPaid(order.paidAt)
              : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
              : setIsDelivered(false);
          order.refund
              ? setRefund(order.refundAt)
              : setRefund(false);
          order.cancelled
              ? setCancelled(order.cancelledAt)
              : setCancelled(false);
          setCartSubtotal(order.orderTotal.cartSubtotal);
          setCartPrice(order.orderTotal.cartPrice);
          setCartTax(order.orderTotal.cartTax);
          setCartShipping(order.orderTotal.cartShipping);
          if (order.isDelivered) {
              setOrderButtonMessage("Order is finished");
              setRefundButtonMessage("Refund not possible");
              setCancelButtonMessage("Cannot cancel order");
              setButtonDisabled2(true);
          }
        if (order.isDelivered) {
          setOrderButtonMessage("Order is finished");
          setButtonDisabled2(true);
          }
          if (order.paymentMethod === 'pp') {
              setPaidButtonMessage("Order is Paypal Method");
              setButtonDisabled3(true);
          }
          if (order.paymentMethod === 'cod' && order.isPaid) {
              setPaidButtonMessage("Order has been paid");
              setButtonDisabled3(true);
          }
          if (!order.isDelivered && order.cancelled) {
              setOrderButtonMessage("Order has not been delivered");
              setButtonDisabled2(true);
          }
          if (order.cancelled) {
              setCancelButtonMessage("Order has been cancelled");
              setButtonDisabled(true);
          }
          if (!order.isPaid && order.cancelled) {
              setRefundButtonMessage("Order has not been paid");
              setButtonDisabled1(true);
          }
          if (order.refund) {
              setRefundButtonMessage("Order has been refunded");
              setButtonDisabled1(true);
          }
        setCartItems(order.cartItems);
      })
      .catch((er) =>
      dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
  }, [isDelivered, cancelled, refund, id, getOrder, dispatch]);
  return (
    <Container fluid>
          <Row className="mt-4 ms-5">
              <Breadcrumb className="mb-3">
                  <Breadcrumb.Item href={paths.ADMINORDERS}>
                      Order List
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="ms-1" active>{id}</Breadcrumb.Item>
              </Breadcrumb>
        <h1>Order Details</h1>
        <Col md={7}>
          <br />
          <Row>
            <Col md={6}>
                          <h2>Shipping</h2>
                          <b className="me-5">Name:</b> {userInfo.name} {userInfo.lastName} <br />
                          <b className="me-4 pe-2">Address:</b> {userInfo.address} {userInfo.city}{" "}
              {userInfo.state} {userInfo.zipCode} <br />
                          <b className="me-4 pe-4">Phone:</b> {userInfo.phoneNumber}
            </Col>
            <Col md={4}>
              <h2>Payment method</h2>
              <Form.Select value={paymentMethod} disabled={true}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                              <>
                                  {cancelled ? (
                                      <>
                                          <b className="me-5">Status:</b>
                                          <b className="text-success">Order cancelled on {cancelled}</b>
                                          <br />
                                      </>
                                  ) : (
                                      <>
                                          <b className="me-5">Status:</b>{isDelivered ? (
                                              <b className="text-success">Delivered at {isDelivered}</b>
                                          ) : (
                                              <b className="text-danger">Not delivered</b>
                                          )} <br />
                                      </>
                                  )}</>
                  </Col>
              <Col>
                              <>
                                  {refund ? (
                                      <>
                                          <b>Status:</b><b className="ms-2 text-success">Order refunded on {refund}</b> <br />
                                      </>
                                      ) : (
                                      <>
                                          <b>Status:</b>{isPaid ? (<b className="ms-2 text-success">Paid on {isPaid}</b>) : (<b className="ms-5 text-danger">Not paid yet</b>)} <br />
                                      </>
                          )}
                              </>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent key={idx} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup className="border">
                      <ListGroup.Item className="border-bottom text-center">
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax):{" "}
              <span className="fw-bold">${cartPrice}</span>
            </ListGroup.Item>
            <ListGroup.Item>
                          Shipping: <span className="fw-bold">${cartShipping}</span>
            </ListGroup.Item>
            <ListGroup.Item>
                          Tax: <span className="fw-bold">{cartTax}%</span>
            </ListGroup.Item>
                      <ListGroup.Item className="border-bottom">
              Total price: <span className="fw-bold">${cartSubtotal}</span>
            </ListGroup.Item>
                      <ListGroup.Item>
                          <div className="d-grid gap-2 mb-3">
                              <Button
                                  size="lg"
                                  onClick={() =>
                                      markAsPaid(id)
                                          .then((res) => {
                                              if (res) {
                                                  setIsPaid(true);
                                              }
                                          })
                                          .catch(er => console.log(er.response.data.message ? er.response.data.message : er.response.data))
                                  }
                                  disabled={buttonDisabled3 || buttonDisabled}
                                  variant="outline-primary"
                                  type="button"
                              >
                                  {paidButtonMessage}
                              </Button>
                          </div>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  onClick={() => 
                    markAsDelivered(id)
                    .then((res) => {
                       if (res) {
                          setIsDelivered(true); 
                       } 
                    })
                    .catch(er => console.log(er.response.data.message ? er.response.data.message : er.response.data))
                  }
                                  disabled={buttonDisabled2 || buttonDisabled}
                  variant="outline-primary"
                  type="button"
                >
                  {orderButtonMessage}
                </Button>
                          </div>
                          <div className="mt-3 d-grid gap-2">
                              <Button
                                  size="lg"
                                  onClick={() =>
                                      markAsCancelled(id)
                                          .then((res) => {
                                              if (res) {
                                                  cancelled(true);
                                              }
                                          })
                                          .catch(er => console.log(er.response.data.message ? er.response.data.message : er.response.data))
                                  }
                                  disabled={buttonDisabled || buttonDisabled2}
                                  variant="outline-primary"
                                  type="button"
                              >
                                  {cancelButtonMessage}
                              </Button>
                          </div>
                          <div className="mt-3 d-grid gap-2">
                              <Button
                                  size="lg"
                                  onClick={() =>
                                      markAsRefund(id)
                                          .then((res) => {
                                              if (res) {
                                                  refund(true);
                                              }
                                          })
                                          .catch(er => console.log(er.response.data.message ? er.response.data.message : er.response.data))
                                  }
                                  disabled={buttonDisabled1 || buttonDisabled2}
                                  variant="outline-primary"
                                  type="button"
                              >
                                  {refundButtonMessage}
                              </Button>
                          </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPageComponent;
