import ProductCarouselComponent from "../../components/ProductCarouselComponent";
//import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";
import ImageGallery from "../../components/ImageGallery";
import { BsFillGearFill } from 'react-icons/bs';
import HoursComponent from "../../components/HoursComponent";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

const HomePageComponent = ({ fetchSetting, getBestsellers }) => {
    const [setting, setSetting] = useState([]);
   // const [mainCategories, setMainCategories] = useState([]);
    const [bestSellers, setBestsellers] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
      useEffect(() => {
        getBestsellers()
        .then((data) => {
            setBestsellers(data);
        })
        .catch((er) => {
            setError(er.response.data.message ? er.response.data.message : er.response.data)
           console.log(er.response.data.message ? er.response.data.message : er.response.data) 
        });
          //setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")));
      }, [getBestsellers])
    /*{mainCategories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))} */
    
  return (
    <>
          <MetaComponent
              title={setting.seoHelmentTitle}
              description={setting.seoHelmentDescription}
              name={setting.seoHelmentName}
              type={setting.seoHelmentType}/>
          <ProductCarouselComponent bestSellers={bestSellers} />
          <Container>
              <Row xs={1} md={12}>
                  <ImageGallery />
              </Row>
              <Row xs={1} md={12} className="mt-5 text-center">
                      <p className="ColFont w-100"><BsFillGearFill className="ColIcon me-3" />Check Out All Of Our Custom Builds! <Link to={paths.CUSTOMBUILDS}> <Button className="ms-2 padding-top" variant="outline-primary" >View Gallery</Button></Link></p>
       
              </Row>
          </Container>

              <Container fluid>
              <Row xs={1} md={12} className="ps-3 pe-3 mb-4 pt-5 pb-5 mt-4 bg-light">
                  <Col md={2 }></Col>
                  <Col md={9}>
                    <h4 className="pb-3">Welcome to Dr. Jeep</h4>
                    <p>Dr Jeep in Salem, UT treats the needs of each individual customer with paramount concern. We know that you have high expectations, and as a car dealer we enjoy the challenge of<br/> meeting and exceeding those standards each and every time. Allow us to demonstrate our commitment to excellence!</p>
                    <p>Our experienced sales staff is eager to share its knowledge and enthusiasm with you. We encourage you to browse our online inventory, schedule a test drive and investigate financing <br /> options. You can also request more information about a vehicle using our online form or by calling (801) 500-0594.</p>
                  </Col>
              </Row>
          </Container>
          <HoursComponent setting={setting}/>
        {error}
    </>
  );
};

export default HomePageComponent;
