import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BigMapComponent from "../../components/BigMapComponent";
import HoursComponent from "../../components/HoursComponent";
import Russ from "../../gallery/russ.jpg";

const MeetTheStaffPageComponent = ({ fetchSetting }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);

    return (
        <Container fluid className="w-100 h-100">
            <Row className="mt-4 mb-2 ms-5">
                <h1>Meet The Staff</h1>
            </Row>
            <Row className="justify-content-md-center mt-4 bg-light pt-5 pb-5">
                <Col md={3}></Col>
                <Col>
                    <img src={Russ} alt="Russ Long" className="russPic img-thumbnail" />
                </Col>
                <Col md={2}>
                    <p className="fw-bold ps-5">Russ Long</p>
                    <p className="ps-5">Owner & Founder <br /> (385) 275-6373</p>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row className="pt-5 pb-4 mb-5 bg-light justify-content-md-center w-100">
                <Col>
                    <HoursComponent setting={setting} />
                    </Col>
            </Row>
        </Container>
    )
}

export default MeetTheStaffPageComponent;