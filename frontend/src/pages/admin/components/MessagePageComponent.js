import { Row, Col, Table } from "react-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { useState, useEffect } from "react";

const MessagePageComponent = ({ fetchMessages }) => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const abctrl = new AbortController();
        fetchMessages(abctrl)
            .then((res) => setMessage(res))
            .catch((er) =>
                setMessage([
                    { name: er.response.data.message ? er.response.data.message : er.response.data }
                ]),
            );
        return () => abctrl.abort();
    }, [fetchMessages]);

    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>
            <Col md={10}>
                <Row className="mb-3">
                    <Col xs={5}>
                        <h1>
                            Message List
                        </h1>
                    </Col>
                    <Col></Col>
                    <Col>
                    </Col>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact Type</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {message.map((item, idx) => (
                            <tr key={idx}>
                                <td className="text-center">{idx + 1}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.contact}</td>
                                <td className="text-center">{item.phone}</td>
                                <td className="text-center">{item.email}</td>
                                <td className="text-center">{item.comment}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default MessagePageComponent;
