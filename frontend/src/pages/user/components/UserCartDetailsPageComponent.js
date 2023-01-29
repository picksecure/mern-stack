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

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const UserCartDetailsPageComponent = ({ cartItems, fetchProducts, fetchSetting, itemsCount, cartSubtotal, userInfo, addToCart, removeFromCart, removeFromCartAll, reduxDispatch, getUser, createOrder }) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [userAddress, setUserAddress] = useState(false);
    const [setting, setSetting] = useState([]);
    const [product, setProducts] = useState([]);

    const [missingAddress, setMissingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("pp");

    const navigate = useNavigate();

    const changeCount = (productID, count) => {
        reduxDispatch(addToCart(productID, count));
    }
    //   Calculate price
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const shippingPrice = addDecimals(cartSubtotal > 100 ? 0 : setting.shipping);
    const taxPrice = addDecimals(Number(((setting.tax/100) * cartSubtotal).toFixed(2)));
    const totalPrice = (
        Number(cartSubtotal) +
        Number(shippingPrice) +
        Number(taxPrice)
    ).toFixed(2);

    const removeFromCartHandler = (productID, quantity, price) => {
        if (window.confirm("Are you sure?")) {
            reduxDispatch(removeFromCart(productID, quantity, price));
        }
    }

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    useEffect(() => {
        fetchProducts()
            .then((product) => setProducts(product))
            .catch((er) => console.log(er));
    }, [fetchProducts]);
    useEffect(() => {
        getUser()
        .then((data) => {
            if (!data.address || !data.city || !data.country || !data.zipCode || !data.state || !data.phoneNumber) {
                setButtonDisabled(true);
                setMissingAddress(" .In order to make order, fill out your profile with correct address, city etc.");
            } else {
                setUserAddress({address: data.address, city: data.city, country: data.country, zipCode: data.zipCode, state: data.state, phoneNumber: data.phoneNumber})
                setMissingAddress(false);
            }
        })
        .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [userInfo._id, getUser])

    const orderHandler = () => {
        const orderData = {
            orderTotal: {
                itemsCount: itemsCount,
                cartSubtotal: totalPrice,
                cartPrice: cartSubtotal,
                cartTax: taxPrice,
                cartShipping: shippingPrice,
            },
            cartItems: cartItems.map(item => {
                return {
                    productID: item.productID,
                    name: item.name,
                    price: item.price,
                    tax: setting.tax,
                    shipping: setting.shipping,
                    image: { path: item.image ? (item.image.path ?? null) : null },
                    quantity: item.quantity,
                    count: item.count,

                }
            }),
            paymentMethod: paymentMethod,
        }
        if (product.productId && product.count === 0) {
            return false;
        } else {
            createOrder(orderData)
                .then(data => {
                    if (data) {
                        reduxDispatch(removeFromCartAll(cartItems));
                        navigate("/user/order-details/" + data._id);
                        window.location.reload(false);

                    }
                })

                .catch((err) => console.log(err));
        }
    }

    const choosePayment = (e) => {
        setPaymentMethod(e.target.value);
    }

    return (
        <Container fluid className="ms-5">
      <Row className="mt-4 ms-5">
        <h1>Cart Details</h1>
        <Col md={7}>
          <br />
          <Row>
                        <Col md={6}>
                            <h2>Shipping</h2>
                            <b className="me-5">Name:</b> {userInfo.name} {userInfo.lastName} <br />
                            <b className="me-4 pe-2">Address:</b> {userAddress.address} {userAddress.city} {userAddress.state} {userAddress.zipCode} <br />
                            <b className="me-4 pe-4">Phone:</b> {userAddress.phoneNumber}
                        </Col>
                        <Col md={4}>
                            <h2 className="mb-2">Payment method</h2>
              <Form.Select className="ms-3" onChange={choosePayment}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
                            <Col>
                                {missingAddress ? (
                                    <Alert className="mt-3" variant="danger">
                                        {missingAddress}
                                    </Alert>
                                ):(<></>)}
              </Col>
              <Col>
              </Col>
            </Row>
          </Row>
                    <br />
                    <h2 className="mt-5">Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent item={item} key={idx} removeFromCartHandler={removeFromCartHandler} changeCount={changeCount} />
            ))}
          </ListGroup>
                </Col>
                <Col md={2}>
                    <ListGroup className="border ms-4">
                        <ListGroup.Item className="border-bottom text-center">
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price: <span className="ms-5">${cartSubtotal}</span>
            </ListGroup.Item>
                        <ListGroup.Item>
                            Shipping: <span className="ms-5 ps-3">${setting.shipping}</span>
            </ListGroup.Item>
                        <ListGroup.Item>
                            Sales Tax: <span className="ms-5 ps-3">{setting.tax}%</span>
            </ListGroup.Item>
            <ListGroup.Item className="border-bottom" >
                            Total price: <span className="fw-bold ms-5">${totalPrice}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" onClick={orderHandler} variant="outline-primary" type="button" disabled={buttonDisabled}>
                  Place order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPageComponent;
