import { Row, Col, Table } from "react-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { useState, useEffect } from "react";
import { BsTrash } from 'react-icons/bs';
import { Button } from "react-bootstrap";

const MessagePageComponent = ({ fetchMessages, deleteMessage }) => {
    const [message, setMessage] = useState([]);
    const [messageDeleted, setMessageDeleted] = useState(false);

    const deleteHandler = async (messageId) => {
        if (window.confirm("Are you sure?")) {
            const data = await deleteMessage(messageId)
            if (data.message === "message removed") {
                setMessageDeleted(!messageDeleted);
            }
        }
    };

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
    }, [messageDeleted, fetchMessages]);
    (function () {

        var TableFilter = (function () {
            var Arr = Array.prototype;
            var input;

            function onInputEvent(e) {
                input = e.target;
                var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
                Arr.forEach.call(table1, function (table) {
                    Arr.forEach.call(table.tBodies, function (tbody) {
                        Arr.forEach.call(tbody.rows, filter);
                    });
                });
            }

            function filter(row) {
                var text = row.textContent.toLowerCase();
                //console.log(text);
                var val = input.value.toLowerCase();
                //console.log(val);
                row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
            }

            return {
                init: function () {
                    var inputs = document.getElementsByClassName('table-filter');
                    Arr.forEach.call(inputs, function (input) {
                        input.oninput = onInputEvent;
                    });
                }
            };

        })();

        TableFilter.init();
    })();
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
                    <Col md={3}>
                        <input type="text" className="mt-2 input-group table-filter w-100" data-table="order-table" placeholder="Search Messages.." />
                    </Col>
                </Row>
                <Table striped bordered hover responsive className="order-table table">
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact Type</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Delete</th>
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
                                <td className="text-center">
                                    <Button
                                        variant="outline-danger"
                                        className="btn-sm"
                                        onClick={() => deleteHandler(item._id)}
                                    >
                                        <BsTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default MessagePageComponent;
