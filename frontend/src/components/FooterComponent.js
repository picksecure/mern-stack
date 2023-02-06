import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../router/paths";
import MapComponent from "./MapComponent";

const FooterComponent = () => {
   
  return (
    <footer>
          <Container fluid className="footer text-light">
              <Row className="mt-5">
                  <Col md={1}></Col>
                  <Col className="text-center pt-5 mt-2 mb-3" md={2}>
                      <h4>Logo</h4>
                  </Col>
                  <Col className="pt-5 ps-5" md={2 }>
                      <h4>Quick Links</h4>
                      <Link to={paths.ROOT}><p className="small mb-0 ms-3">Home</p></Link>
                      <Link to={paths.PRODUCTLIST}><p className="small mb-0 ms-3">Shop</p></Link>
                      <Link to={paths.CUSTOMBUILDS}><p className="small mb-0 ms-3">Gallery</p></Link>
                      <Link to={paths.ABOUT}><p className="small mb-0 ms-3">About Us</p></Link>
                  </Col>
                  <Col className="pt-5 ps-5" md={2 }>
                      <h4>Get In Touch</h4>
                      <p className="small mb-0 ms-3">Contact Us</p>
                      <p className="small mb-0 ms-3">130 N MAIN ST Salem, UT 84653</p>
                  </Col>
                  <Col className="pt-5" md={5 }>
                      <h4>Location</h4>
                      <MapComponent/>
                          </Col>
              </Row>
              <Row>
                  <Col className="text-center border-top mt-3 pt-3 pb-3">
                      &copy; Copyrights. All rights reserved. Dr. Jeep LLC
                  </Col>
              </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
