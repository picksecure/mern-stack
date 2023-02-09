import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Blank from "../../gallery/blank_Person.jpg";
import MetaComponent from "../../components/MetaComponent";

const MeetTheStaffPageComponent = ({ fetchSetting }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);

    return (
        <Container fluid className="w-100 h-100">
            <MetaComponent
                title={setting.seoHelmentTitleStaff}
                description={setting.seoHelmentDescriptionStaff}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeStaff} />
            <Row className="mt-4 mb-2 ms-5">
                <h1>Meet The Staff</h1>
            </Row>
            <Row className="justify-content-md-center bg-light pt-5 pb-5">
                <Col md={2}></Col>
                <Col md={2}>
                    <img src={Blank} alt="Russ Long" className="russPic img-thumbnail" />
                </Col>
                <Col md={2}>
                    <p className="fw-bold ps-5 mt-4">Mike Long</p>
                    <p className="ps-5">Owner & Founder <br /> (385) 275-6373</p>
                </Col>
                <Col md={2}>
                    <img src={Blank} alt="Russ Long" className="russPic img-thumbnail" />
                </Col>
                <Col md={2}>
                    <p className="fw-bold ps-5 mt-4">Jim Long</p>
                    <p className="ps-5">Owner & Founder <br /> (385) 275-6373</p>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row className="justify-content-md-center bg-light pt-5 pb-5">
                <Col md={2}></Col>
                <Col col={2}>
                    <img src={Blank} alt="Russ Long" className="russPic img-thumbnail" />
                </Col>
                <Col md={2}>
                    <p className="fw-bold ps-5 mt-4">Russ Long</p>
                    <p className="ps-5">Owner & Founder <br /> (385) 275-6373</p>
                </Col>
                <Col md={6}></Col>
            </Row>
            
        </Container>
    )
}

export default MeetTheStaffPageComponent;