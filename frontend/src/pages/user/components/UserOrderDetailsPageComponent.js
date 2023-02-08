import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import MetaComponent from "../../../components/MetaComponent";

const UserOrderDetailsPageComponent = ({
  userInfo,
    getUser,
    fetchSetting,
  getOrder,
  loadPayPalScript,
}) => {
  const [userAddress, setUserAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
    const [isPaid, setIsPaid] = useState(false);
    const [cancelled, setCancelled] = useState(false);
    const [refund, setRefund] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartShipping, setCartShipping] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const paypalContainer = useRef();


  const { id } = useParams();
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
  useEffect(() => {
    getUser()
      .then((data) => {
        setUserAddress({
          address: data.address,
          city: data.city,
          country: data.country,
          zipCode: data.zipCode,
          state: data.state,
          phoneNumber: data.phoneNumber,
        });
      })
      .catch((err) => console.log(err));
  }, [getUser]);

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setPaymentMethod(data.paymentMethod);
        setCartItems(data.cartItems);
          setCartSubtotal(data.orderTotal.cartSubtotal);
          setCartPrice(data.orderTotal.cartPrice);
          setCartTax(data.orderTotal.cartTax);
          setCartShipping(data.orderTotal.cartShipping);
        data.isDelivered
          ? setIsDelivered(data.deliveredAt)
            : setIsDelivered(false);
          data.refund
              ? setRefund(data.refundAt)
              : setRefund(false);
          data.cancelled
              ? setCancelled(data.cancelledAt)
              : setCancelled(false);
          data.isPaid ? setIsPaid(data.paidAt) : setIsPaid(false);
          if (data.refund && data.cancelled) {
              setOrderButtonMessage("Your order has been refunded");
              setButtonDisabled(true);
          } else
          if (data.cancelled) {
              setOrderButtonMessage("Your order has been cancelled");
              setButtonDisabled(true);
          } else if (data.isPaid) {
          setOrderButtonMessage("Your order is finished");
          setButtonDisabled(true);
        } else {
          if (data.paymentMethod === "pp") {
            setOrderButtonMessage("Pay for your order");
          } else if (data.paymentMethod === "cod") {
            setButtonDisabled(true);
            setOrderButtonMessage("Pay for your order upon delivery");
          }
        }
      })
      .catch((err) => console.log(err));
  }, [getOrder, id]);

  const orderHandler = () => {
    setButtonDisabled(true);
    if (paymentMethod === "pp") {
      setOrderButtonMessage(
        "To pay for your order click below"
      );
      if (!isPaid) {
        loadPayPalScript(cartSubtotal, cartItems, id, updateStateAfterOrder)
      }
    } else {
        window.location.reload(false);
        setOrderButtonMessage("Your order was placed. Thank you");

    }
  };

  const updateStateAfterOrder = (paidAt) => {
      setOrderButtonMessage("Thank you for your payment!");
      setIsPaid(paidAt);
      setButtonDisabled(true);
      paypalContainer.current.style = "display: show";
  }

    return (
        <Container fluid className="ms-5">
            <MetaComponent
                title={setting.seoHelmentTitleUserOrdersDetail}
                description={setting.seoHelmentDescriptionUserOrderDetail}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeUserOrdersDetail} />
      <Row className="mt-4 ms-5">
        <h1>Order Details</h1>
        <Col md={7}>
                    <br />
                    <Row className="mb-5">
                        <Col md={6}>
                            <h2>Shipping</h2>
                            <b className="me-5">Name:</b> {userInfo.name} {userInfo.lastName} <br />
                            <b className="me-4 pe-2">Address:</b> {userAddress.address} {userAddress.city} {userAddress.state} {userAddress.zipCode} <br />
                            <b className="me-4 pe-4">Phone:</b> {userAddress.phoneNumber} <br />
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
            <Col md={5}>
              <h2>Payment method</h2>
              <Form.Select className="ms-3 mb-5" value={paymentMethod} disabled={true}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
                            </Form.Select>
                            {refund ? (
                                <>
                                    <b>Status:</b><b className="ms-2 text-success">Refund on {refund}</b>
                             </>
                            ) : (
                                <>
                                { paymentMethod === "cod" ? (
                                    <></>
                                ) : (
                                    <>
                                        <b>Status:</b>{isPaid ? (<b className="ms-2 text-success">Paid on {isPaid}</b>) : (<b className="ms-5 text-danger">Not paid yet</b>)} <br />
                                    </>
                                )}
                            </>
                            )}
                        </Col>
                    </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent item={item} key={idx} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
                <Col md={3}>
                    <ListGroup className="ms-4 border">
            <ListGroup.Item className="border-bottom text-center">
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                            Items price:
                            <span className="fw-bold ms-5">${cartPrice}</span>
            </ListGroup.Item>
                        <ListGroup.Item>
                            Shipping: <span className="fw-bold ms-5 ps-2">${cartShipping}</span>
            </ListGroup.Item>
                        <ListGroup.Item>
                            Tax: <span className="fw-bold ms-5 ps-5">{cartTax}%</span>
            </ListGroup.Item>
            <ListGroup.Item className="border-bottom">
              Total price: <span className="fw-bold ms-5">${cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="mt-4 d-grid gap-2 text-center">
                <Button
                  size="lg"
                  onClick={orderHandler}
                  variant="outline-primary"
                  type="button"
                  disabled={buttonDisabled}
                >
                  {orderButtonMessage}
                </Button>
                            </div>
                            <div style={{ position: "relative", zIndex: 1 }} className="mt-5 mb-5">
                <div ref={paypalContainer} id="paypal-container-element" className="mb-5"></div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPageComponent;
