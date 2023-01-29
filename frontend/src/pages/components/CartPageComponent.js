import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
import paths from '../../router/paths';

const CartPageComponent = ({
    addToCart,
    removeFromCart,
    cartItems,
    cartSubtotal,
    reduxDispatch,
}) => {

    const changeCount = (productID, count) => {
        reduxDispatch(addToCart(productID, count));
    };

    const removeFromCartHandler = (productID, quantity, price) => {
        if (window.confirm("Are you sure?")) {
            reduxDispatch(removeFromCart(productID, quantity, price));
        }
    }
    /*({cartItems.length} {cartItems.length === 1 ? "Product" : "Products"}) */
   
    return (
        <Container className="ms-5" fluid>
            <Row className="mt-5 pt-5 ms-5">
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Alert variant="info">Your cart is empty</Alert>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item, idx) => (
                                <CartItemComponent
                                    item={item}
                                    key={idx}
                                    changeCount={changeCount}
                                    removeFromCartHandler={removeFromCartHandler}
                                />
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={2}>
                    <ListGroup className="border">
                        <ListGroup.Item className="text-center border-bottom">
                            <h3>Subtotal</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-bottom">
                            Price: <span className="fw-bold">${cartSubtotal}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-center">

                            <LinkContainer to={paths.USERCARTDETAIL} >
                                <Button disabled={cartSubtotal === 0 } variant="outline-primary" type="button">Proceed To Checkout</Button>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPageComponent;

