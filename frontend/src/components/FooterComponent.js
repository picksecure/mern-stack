import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../router/paths";

const FooterComponent = () => {
   
  return (
    <footer>
          <Container fluid className="footer text-light">
              <Row className="mt-5">
                  <Col md={1}></Col>
                  <Col className="pt-5 mt-5" md={2}>
                      <h4>Logo</h4>
                  </Col>
                  <Col className="pt-5 ps-5" md={2 }>
                      <h4>Quick Links</h4>
                      <Link to={paths.ROOT}><p className="small mb-0 ms-3">Home</p></Link>
                      <Link to={paths.PRODUCTLIST}><p className="small mb-0 ms-3">Shop</p></Link>
                      <Link to={paths.CUSTOMBUILDS}><p className="small mb-0 ms-3">Gallery</p></Link>
                      <p className="small mb-0 ms-3">About Us</p>
                  </Col>
                  <Col className="pt-5" md={2 }>
                      <h4>Get In Touch</h4>
                      <p className="small mb-0 ms-3">Contact Us</p>
                      <p className="small mb-0 ms-3">130 N MAIN ST Salem, UT 84653</p>
                  </Col>
                  <Col className="pt-5" md={5 }>
                      <h4>Location</h4>
                      <div className="map-responsive ms-4">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3053.838930268675!2d-111.67513158430134!3d40.05669528538029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x874d97684aed666b%3A0x9e7f970ae7687da9!2sDr.%20Jeep%20llc%2C%20130%20N%20Main%20St%2C%20Salem%2C%20UT%2084653!3m2!1d40.056691199999996!2d-111.6729429!5e0!3m2!1sen!2sus!4v1675147766245!5m2!1sen!2sus"></iframe>
                          </div>
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
