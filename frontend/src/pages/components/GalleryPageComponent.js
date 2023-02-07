import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactComponent from "../../components/ContactComponent";
import CustomBuildsGallery from "../../components/CustomBuildsGallery";
import MetaComponent from "../../components/MetaComponent";

const GalleryPageComponent = ({ fetchSetting, newMessage}) => {
    const [setting, setSetting] = useState([]);
    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    
    return (
        <>
            <MetaComponent
                title={setting.seoHelmentTitleGallery}
                description={setting.seoHelmentDescriptionGallery}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeGallery} />
            <Container className="mt-5 mb-5 pb-5">
                <Row xs={1} md={12} className="text-center">
                    <h1 className="display3">Check Out Our Custom Builds</h1>
                    <div role="article" className="mb-2">We build Jeep Wranglers and carry the parts to keep your Wrangler running. At Dr Jeep "We Keep You Jeepin"</div>
                </Row>
                <Row xs={1} md={12}>
                    <CustomBuildsGallery />
                </Row>
                <Row xs={1} md={12} className="text-center">
                    <h3 className="display2 mb-5">Contact Us About a Custom Build</h3>
                </Row>
                <Row className="justify-content-md-center mt-5 pt-5">
                    <Col md={4}>
                        <ContactComponent newMessage={newMessage} />
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default GalleryPageComponent;
