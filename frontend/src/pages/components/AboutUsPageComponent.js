import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillCar, AiFillStar } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { Link } from "react-router-dom";
import BigMapComponent from "../../components/BigMapComponent";
import HoursComponent from "../../components/HoursComponent";
import MetaComponent from "../../components/MetaComponent";
import paths from "../../router/paths";

const AboutUsPageComponent = ({ fetchSetting }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);

    return (
        <Container fluid className="w-100">
            <MetaComponent
                title={setting.seoHelmentTitleAbout}
                description={setting.seoHelmentDescriptionAbout}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeAbout} />
            <Row className="parent justify-content-md-center">
                <h1 className="text centered">About Dr. Jeep</h1>
            </Row>
            <Row className="text-center mt-5">
                <h1 className="fw-bold">Why Buy From Dr. Jeep</h1>
                <Col md={3}></Col>
                <Col>
                    <h5 className="mt-3">
                    We build Jeep wranglers and carry parts as well to keep your wrangler running. At Dr Jeep "we keep you jeepin'".
                    WE PAY CASH FOR JEEP WRANGLERS. Reach out to us now to learn more.
                    </h5>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row className="mt-5 justify-content-md-center">
                <Col className="text-center mt-5" md={3}>
                    <AiFillCar className="aboutIcons" />
                    <h5 className="mt-5 fw-bold">Parts Shopping Made Easy</h5>
                    <p>
                        We provide a vast selection of used and new parts, exceptional car care and customer service with a smile!
                    </p>
                    <Link className="noTextDecoration fw-bold" to={paths.PRODUCTLIST}>View Our Inventory</Link>
                </Col>
                <Col className="text-center mt-5" md={3}>
                    <AiFillStar className="aboutIcons text-warning" />
                    <h5 className="mt-5 fw-bold">Exceptional Customer Service</h5>
                    <p>
                        We are committed to providing amazing customer experiences.
                    </p>
                    <br />
                    <Link className="noTextDecoration fw-bold" to={paths.MEETTHESTAFF}>Meet Our Staff</Link>
                </Col>
                <Col className="text-center mt-5" md={3}>
                    <BsTools className="aboutIcons" />
                    <h5 className="mt-5 fw-bold">We Keep You Going</h5>
                    <p>
                        Our service center is here to help ensure you enjoy many great years of driving.
                    </p>
                    <Link className="noTextDecoration fw-bold" to={paths.CONTACT}>Schedule Service</Link>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-md-center">
                <Col md={12}>
                    <HoursComponent setting={setting} />
                 </Col>
            </Row>
            <Row className="mb-5 pb-3">
                <BigMapComponent />
            </Row>
        </Container>
        )
}

export default AboutUsPageComponent;