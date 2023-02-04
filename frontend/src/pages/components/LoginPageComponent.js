import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import paths from "../../router/paths";
import MetaComponent from "../../components/MetaComponent";

const LoginPageComponent = ({ loginUserApiRequest, fetchSetting, reduxDispatch, setReduxUserState }) => {
    const [validated, setValidated] = useState(false);
    const [setting, setSetting] = useState([]);

    const [loginUserResponseState, setLoginUserResponseState] = useState({
        success: "",
        error: "",
        loading: false,
    });

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;

        const email = form.email.value;
        const password = form.password.value;
        const doNotLogout = form.doNotLogout.checked;

        if (event.currentTarget.checkValidity() === true && email && password) {
            setLoginUserResponseState({ loading: true });
            loginUserApiRequest(email, password, doNotLogout)
                .then((res) => {
                    setLoginUserResponseState({ success: res.success, loading: false, error: "" });

                    if (res.userLoggedIn) {
                        reduxDispatch(setReduxUserState(res.userLoggedIn));
                    }

                    if (res.success === "user logged in" && !res.userLoggedIn.isAdmin) window.location.href = '/user'
                    else window.location.href = '/admin/orders'

                })
                .catch((er) =>
                    <></>
                );
        }

        setValidated(true);
    };

    return (
        <Container fluid className="min-vh-100 w-100 color-main">
            <MetaComponent
                title={setting.seoHelmentTitleLogin}
                description={setting.seoHelmentDescriptionLogin}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeLogin} />
            <Row className="margintop ps-4 pe-4 pt-5 justify-content-md-center">
                <Col md={3} className="border p-3 color-white border-dark">
                    <div className="text-center pb-3 mb-5 border-bottom">
                        <h1>Login</h1>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                required
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                required
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                name="doNotLogout"
                                type="checkbox"
                                label="Do not logout"
                            />
                        </Form.Group>

                        <Row className="text-center pb-2">
                            <Col>
                                Don't you have an account?
                                <Link to={paths.REGISTER}>Register</Link>
                            </Col>
                        </Row>
                        <div className="text-center mt-3">
                            <Button variant="outline-primary" type="submit">
                                {loginUserResponseState &&
                                    loginUserResponseState.loading === true ? (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    ""
                                )}
                                Login
                            </Button>
                        </div>
                        <Alert
                            show={
                                loginUserResponseState &&
                                loginUserResponseState.error === "wrong credentials"
                            }
                            variant="danger"
                        >
                            Wrong credentials
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPageComponent;

