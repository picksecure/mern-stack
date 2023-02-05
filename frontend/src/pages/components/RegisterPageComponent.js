import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import paths from "../../router/paths";
import MetaComponent from "../../components/MetaComponent";
const RegisterPageComponent = ({
    registerUserApiRequest,
    reduxDispatch,
    setReduxUserState,
    fetchSetting
}) => {
    const [setting, setSetting] = useState([]);

    const [validated, setValidated] = useState(false);
    const [registerUserResponseState, setRegisterUserResponseState] = useState({
        success: "",
        error: "",
        loading: false,
    });
    const [passwordsMatchState, setPasswordsMatchState] = useState(true);

    const onChange = () => {
        const password = document.querySelector("input[name=password]");
        const confirmPassword = document.querySelector("input[name=confirmPassword]");
        if (confirmPassword.value === password.value) {
            setPasswordsMatchState(true);
        } else {
            setPasswordsMatchState(false);
        }
    };
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
        const name = form.name.value;
        const lastName = form.lastName.value;
        const password = form.password.value;
        if (
            event.currentTarget.checkValidity() === true &&
            email &&
            password &&
            name &&
            lastName &&
            form.password.value === form.confirmPassword.value
        ) {
            setRegisterUserResponseState({ loading: true });
            registerUserApiRequest(name, lastName, email, password)
                .then((data) => {
                    setRegisterUserResponseState({
                        success: data.success,
                        loading: false,
                    });
                    reduxDispatch(setReduxUserState(data.userCreated));

                })
                .catch((er) =>
                    setRegisterUserResponseState({
                        error: er.response.data.message
                            ? er.response.data.message
                            : er.response.data,
                    })
                );
        }

        setValidated(true);
    };
    return (
        <Container fluid className="min-vh-100 w-100 color-main padding-bottom">
            <MetaComponent
                title={setting.seoHelmentTitleRegister}
                description={setting.seoHelmentDescriptionRegister}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeRegister} />
            <Row className="ps-4 pe-4 pt-5 margintop justify-content-md-center">
                <Col className="border p-3 color-white border-dark" md={3}>
                    <div className="text-center pb-3 mb-5 border-bottom">
                        <h1>Register</h1>
                        </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your last name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                required
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please anter a valid email address
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                required
                                type="password"
                                placeholder="Password"
                                minLength={6}
                                onChange={onChange}
                                isInvalid={!passwordsMatchState}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please anter a valid password
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                Password should have at least 6 characters
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                name="confirmPassword"
                                required
                                type="password"
                                placeholder="Repeat Password"
                                minLength={6}
                                onChange={onChange}
                                isInvalid={!passwordsMatchState}
                            />
                            <Form.Control.Feedback type="invalid">
                                Both passwords should match
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row className="pb-2 text-center">
                            <Col>
                                Do you have an account already?
                                <Link to={paths.LOGIN}> Login </Link>
                            </Col>
                        </Row>
                        <div className="text-center mb-3 mt-3">
                            <Button type="submit" variant="outline-primary">
                            {registerUserResponseState &&
                                registerUserResponseState.loading === true ? (
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
                            Submit
                            </Button>
                            </div>
                        <Alert show={registerUserResponseState && registerUserResponseState.error === "user exists"} variant="danger">
                            User with that email already exists!
                        </Alert>
                        <Alert show={registerUserResponseState && registerUserResponseState.success === "User created"} variant="info">
                            User created
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPageComponent;

