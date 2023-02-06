import { Row, Container, Col, Table } from "react-bootstrap";
import $ from 'jquery';

const HoursComponent = ({ setting }) => {
    $(document).ready(function () {
        $('.opening-hours tr').eq(new Date().getDay() - 1).addClass('today');
    });
    $(document).ready(function () {
        $('.opening-hours1 tr').eq(new Date().getDay() - 1).addClass('today');
    });
    $(document).ready(function () {
        $('.opening-hours2 tr').eq(new Date().getDay()).addClass('today');
    });
    return (
        <Container className="mb-5 pb-5 mt-5">
            <Row className="justify-content-center">
                <Col md={4}>
                    <h4>Dr. Jeep Hours</h4>
                    <Table className="table1" size="sm">

                        <tbody className="opening-hours">
                            <tr>
                                <td>Monday</td>
                                <td>{setting.monHoursOp} - {setting.monHoursCl}</td>

                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>{setting.tusHoursOp} - {setting.tusHoursCl}</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>{setting.wedHoursOp} - {setting.wedHoursCl}</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>{setting.thuHoursOp} - {setting.thuHoursCl}</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>{setting.friHoursOp} - {setting.friHoursCl}</td>
                            </tr>
                            {setting.satHoursOp || setting.satHoursCl === "Closed" ? (
                                <tr>
                                    <td>Saterday</td>
                                    <td>{setting.satHoursOp}</td>
                                </tr>
                            ) : (
                                <tr>
                                <td>Saterday</td>
                                <td>{setting.satHoursOp} - {setting.satHoursCl}</td>
                            </tr>)}
                            {setting.satHoursOp || setting.satHoursCl === "Closed" ? (
                                <tr>
                                    <td>Sunday </td>
                                    <td>{setting.sunHoursOp}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>Sunday </td>
                                    <td>{setting.sunHoursOp} - {setting.sunHoursCl}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4} className="MarginStart">
                    <h4>Service Hours</h4>
                    <Table className="table1" size="sm">

                        <tbody className="opening-hours1">
                            <tr>
                                <td>Monday</td>
                                <td>{setting.monHoursOpServ} - {setting.monHoursClServ}</td>

                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>{setting.tusHoursOpServ} - {setting.tusHoursClServ}</td>
                            </tr>
                            <tr>
                                <td>WednesDay</td>
                                <td>{setting.wedHoursOpServ} - {setting.wedHoursClServ}</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>{setting.thuHoursOpServ} - {setting.thuHoursClServ}</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>{setting.friHoursOpServ} - {setting.friHoursClServ}</td>
                            </tr>
                            {setting.satHoursOpServ || setting.satHoursClServ === "Closed" ? (
                                <tr>
                                    <td>Saterday</td>
                                    <td>{setting.satHoursOpServ}</td>
                                </tr>
                            ) : (<tr>
                                <td>Saterday</td>
                                    <td>{setting.satHoursOpServ} - {setting.satHoursClServ}</td>
                            </tr>)}
                            {setting.satHoursOpServ || setting.satHoursClServ === "Closed" ? (
                                <tr>
                                    <td>Sunday </td>
                                    <td>{setting.sunHoursOpServ}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>Sunday </td>
                                        <td>{setting.sunHoursOpServ} - {setting.sunHoursClServ}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        )
}
export default HoursComponent;