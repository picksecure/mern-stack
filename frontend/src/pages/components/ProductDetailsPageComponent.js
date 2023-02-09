import {
    Row,
    Col,
    Container,
    Image,
    Breadcrumb,
    ListGroup,
    Form,
    Button,
    Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";
import { Carousel } from "react-bootstrap";

import ImageZoom from "js-image-zoom";
import { useEffect, useState, useRef } from "react";
import MetaComponent from "../../components/MetaComponent";

import { useParams } from "react-router-dom";
import paths from "../../router/paths";

const ProductDetailsPageComponent = ({
    addToCartReduxAction,
    reduxDispatch,
    getProductDetails,
    userInfo,
    writeReviewApiRequest,
    fetchSetting
}) => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [showCartMessage, setShowCartMessage] = useState(false);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productReviewed, setProductReviewed] = useState(false);
    const [setting, setSetting] = useState([]);

    const messagesEndRef = useRef(null);

    const addToCartHandler = () => {
        reduxDispatch(addToCartReduxAction(id, quantity));
        setShowCartMessage(true);
    };

    useEffect(() => {
        if (productReviewed) {
            setTimeout(() => {
                messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
            }, 200)
        }
    }, [productReviewed])

    useEffect(() => {
        if (product.images) {
            var options = {
                // width: 400,
                // zoomWidth: 500,
                // fillContainer: true,
                // zoomPosition: "bottom",
                scale: 2,
                offset: { vertical: 0, horizontal: 0 },
            };

            product.images.map(
                (image, id) =>
                    new ImageZoom(document.getElementById(`imageId${id + 1}`), options)
            );
        }
    });

    useEffect(() => {
        getProductDetails(id)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((er) =>
                setError(
                    er.response.data.message ? er.response.data.message : er.response.data
                )
        );
    }, [id, productReviewed, getProductDetails]);

    const sendReviewHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget.elements;
        const formInputs = {
            comment: form.comment.value,
            rating: form.rating.value,
        }
        if (e.currentTarget.checkValidity() === true) {
            writeReviewApiRequest(product._id, formInputs)
                .then(data => {
                    if (data === "review created") {
                        setProductReviewed("You successfuly reviewed the page!");
                    }
                })
                .catch((er) => setProductReviewed(er.response.data.message ? er.response.data.message : er.response.data));
        }
    }
    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    return (
        <>
            <MetaComponent
                title={product.name}
                description={product.description}
                name={setting.seoHelmentName}
                type={setting.seoHelmentType} />
            <Container>
                <AddedToCartMessageComponent
                    showCartMessage={showCartMessage}
                    setShowCartMessage={setShowCartMessage}
                />
                <Row className="mt-5">
                    {loading ? (
                        <h2>Loading product details ...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        <>
                                    <Col style={{ zIndex: 1 }} md={5}>
                                        <Breadcrumb className="mb-3">
                                            <Breadcrumb.Item href={paths.PRODUCTLIST}>
                                                Shop
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item className="ms-1" active>{product.name}</Breadcrumb.Item>
                                        </Breadcrumb>
                                        <Carousel className="mt-5">
                                    {product.images
                                        ? product.images.map((image, id) => (
                                            <Carousel.Item key={id}>
                                                <Image
                                                    crossOrigin="anonymous"
                                                    fluid
                                                    style={{ height: "400px", width: "500px", objectFit: "cover" }}
                                                    src={`${image.path ?? null}`}
                                                />
                                            </Carousel.Item>
                                        ))
                                        : null}
                                </Carousel>
                            </Col>
                            <Col md={7}>
                                <Row className="border-bottom">
                                    <Col md={12}>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <h1>{product.name}</h1>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Price <span className="fw-bold">${product.price}</span>
                                            </ListGroup.Item>
                                            <ListGroup.Item>{product.description}</ListGroup.Item>
                                            <ListGroup.Item>
                                                <Rating
                                                    readonly
                                                    size={20}
                                                    initialValue={product.rating}
                                                />
                                                ({product.reviewsNumber})
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Status: {product.count > 0 ? <h6 className="text-success ms-2">in stock</h6> : <h6 className="text-danger ms-2">out of stock</h6>}
                                                    </ListGroup.Item>
                                                    {product.count > 0 ?
                                                        <>
                                                        <ListGroup.Item className="width-bar">
                                                            Quantity:
                                                            <Form.Select
                                                                value={quantity}
                                                                onChange={(e) => setQuantity(e.target.value)}
                                                                size="lg"
                                                                aria-label="Default select example"
                                                            >
                                                                {[...Array(product.count).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                ))}
                                                            </Form.Select>
                                                        </ListGroup.Item>
                                                            <ListGroup.Item>
                                                            <Button onClick={addToCartHandler} variant="outline-primary">
                                                                 Add to cart
                                                            </Button>
                                                            </ListGroup.Item>
                                                        </>
                                                        : <></>}
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mt-5">
                                        <h5>REVIEWS</h5>
                                        <ListGroup variant="flush">
                                            {product.reviews &&
                                                product.reviews.map((review, idx) => (
                                                    <ListGroup.Item key={idx}>
                                                        {review.user.name} <br />
                                                        <Rating readonly size={20} initialValue={review.rating} /><br/>
                                                        {review.createdAt.substring(0, 10)}
                                                        <br />
                                                        {review.comment}
                                                    </ListGroup.Item>
                                                ))}
                                            <div ref={messagesEndRef} />
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <hr />
                                {!userInfo.name && <Alert variant="danger">Login first to write a review</Alert>}

                                <Form onSubmit={sendReviewHandler}>
                                   
                                    <Form.Select name="rating" required disabled={!userInfo.name} aria-label="Default select example">
                                        <option value="">Your rating</option>
                                        <option value="5">5 (very good)</option>
                                        <option value="4">4 (good)</option>
                                        <option value="3">3 (average)</option>
                                        <option value="2">2 (bad)</option>
                                        <option value="1">1 (awful)</option>
                                            </Form.Select>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1"
                                            >
                                                <Form.Label>Write a review</Form.Label>
                                                <Form.Control name="comment" required as="textarea" disabled={!userInfo.name} rows={3} />
                                            </Form.Group>
                                            <div className="text-center">
                                    <Button disabled={!userInfo.name} type="submit" className="mb-3 mt-3" variant="outline-primary">
                                        Submit
                                                </Button>{" "}
                                            </div>
                                    {productReviewed}
                                </Form>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </>

    );
};

export default ProductDetailsPageComponent;

