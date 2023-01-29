import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import paths from "../router/paths";

const ContactComponent = ({ newMessage }) => {
    const [updateMessagesResponseState, setMessagesResponseState] = useState({ message: "", error: "" });
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const formInputs = {
            name: form.name.value,
            contact: form.contact.value,
            phone: form.phone.value,
            email: form.email.value,
            comment: form.comment.value,
        };

        newMessage(formInputs)
            .then((data) => {

                if (data.message === "messages created") navigate(paths.ROOT);
            })
            .catch((er) => {
                setMessagesResponseState({
                    error: er.response.data.message
                        ? er.response.data.message
                        : er.response.data,
                });
            });
        setValidated(true);
    }

return (
    <Container className="mb-5">
        <Row className="mt-5">
            <Col md={4}></Col>
            <Col md={4}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            name="name"
                            required
                            className="border-dark"
                            type="text"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact:</Form.Label>
                        <Form.Select className="border-dark" name="contact" required aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option selected value="Phone">Phone</option>
                            <option value="Email">Email</option>
                        </Form.Select>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control
                            name="phone"
                            required
                            className="border-dark"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            name="email"
                            required
                            className="border-dark"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicComment">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control
                            name="comment"
                            required
                            className="border-dark"
                            type="text"
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="outline-primary" type="submit">
                            Contact Us
                        </Button>
                    </div>
                    {updateMessagesResponseState.error ?? ""}
                </Form>
            </Col>
        </Row>
    </Container>
);
};
export default ContactComponent;