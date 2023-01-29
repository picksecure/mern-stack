import { Row, Col, Form, Table} from "react-bootstrap";

const EditTableHoursComponent = (setting) => {
    return (
        <Row>
            <Col md={8}>
                <h4>Dr. Jeep Hours</h4>
        <Table size="sm">
                    
            <tbody className="opening-hours">
                <tr>
                            <td>Monday</td>
                            <td></td>
                    <td>
                        <Form.Group className="mb-2" controlId="formBasicMonOpHours">
                            <Form.Control
                                name="monHoursOp"
                                required
                                type="text"
                                defaultValue={setting.monHoursOp}
                            />
                        </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicMonClHours">
                                    <Form.Control
                                        name="monHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.monHoursCl}
                                    />
                                </Form.Group>
                            </td>
                </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicTusOpHours">
                                    <Form.Control
                                        name="tusHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.tusHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicTusClHours">
                                    <Form.Control
                                        name="tusHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.tusHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicWedOpHours">
                                    <Form.Control
                                        name="wedHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.wedHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicWedClHours">
                                    <Form.Control
                                        name="wedHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.wedHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicThuOpHours">
                                    <Form.Control
                                        name="thuHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.thuHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicThuClHours">
                                    <Form.Control
                                        name="thuHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.thuHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicFriOpHours">
                                    <Form.Control
                                        name="friHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.friHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicFriClHours">
                                    <Form.Control
                                        name="friHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.friHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicSatOpHours">
                                    <Form.Control
                                        name="satHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.satHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicSatClHours">
                                    <Form.Control
                                        name="satHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.satHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td></td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicSunOpHours">
                                    <Form.Control
                                        name="sunHoursOp"
                                        required
                                        type="text"
                                    defaultValue={setting.sunHoursOp}
                                    />
                                </Form.Group>
                            </td>
                            <td>-</td>
                            <td>
                                <Form.Group className="mb-2" controlId="formBasicSunClHours">
                                    <Form.Control
                                        name="sunHoursCl"
                                        required
                                        type="text"
                                    defaultValue={setting.sunHoursCl}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
            </tbody>
            </Table>
            </Col>
            </Row>
        )
}

export default EditTableHoursComponent;