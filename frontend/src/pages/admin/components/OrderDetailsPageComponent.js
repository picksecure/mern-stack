import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const OrderDetailsPageComponent = ({ getOrder, markAsDelivered, markAsCancelled }) => {
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
  const [cartSubtotal, setCartSubtotal] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] =
        useState("Mark as delivered");
    const [cancelButtonMessage, setCancelButtonMessage] =
        useState("Cancel The Order");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
        order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
              : setIsDelivered(false);
          order.cancelled
              ? setCancelled(order.cancelledAt)
              : setCancelled(false);
          setCartSubtotal(order.orderTotal.cartSubtotal);
          setCartPrice(order.orderTotal.cartPrice);
          setCartTax(order.orderTotal.cartTax);
          setCartShipping(order.orderTotal.cartShipping);
        if (order.isDelivered) {
          setOrderButtonMessage("Order is finished");
          setButtonDisabled(true);
          }
          if (order.cancelled) {
              setCancelButtonMessage("Order is cancelled");
              setButtonDisabled(true);
          }
        setCartItems(order.cartItems);
      })
      .catch((er) =>
      dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
  }, [isDelivered, cancelled, id, getOrder, dispatch]);
  return (
    <Container fluid>
      <Row className="mt-4 ms-5">
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
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Delivered at {isDelivered}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
                          </Col>
                          <Col>
                              <Alert
                                  className="mt-3"
                                  variant={cancelled ? "success" : "danger"}
                              >
                                  {cancelled ? (
                                      <>Cancelled at {cancelled}</>
                                  ) : (
                                      <>Not cancelled</>
                                  )}
                              </Alert>
                          </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid yet</>}
                </Alert>
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
                  disabled={buttonDisabled}
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
                                  disabled={buttonDisabled}
                                  variant="outline-primary"
                                  type="button"
                              >
                                  {cancelButtonMessage}
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
