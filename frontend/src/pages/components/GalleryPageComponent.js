import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactComponent from "../../components/ContactComponent";
import CustomBuildsGallery from "../../components/CustomBuildsGallery";

const GalleryPageComponent = ({ fetchSetting, newMessage}) => {
    const [setting, setSetting] = useState([]);
    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    
    return (
        <>
            <Container className="mt-5">
                <Row xs={1} md={12} className="text-center">
                    <h1 className="display3">Check Out Our Custom Builds</h1>
                    <div role="article" className="mb-2">We build Jeep Wranglers and carry the parts to keep your Wrangler running. At Dr Jeep "We Keep You Jeepin"</div>
                </Row>
                <Row xs={1} md={12}>
                    <CustomBuildsGallery />
                </Row>
                <Row xs={1} md={12} className="text-center">
                    <h3 className="display2">Contact Us About a Custom Build</h3>
                </Row>
                <ContactComponent newMessage={newMessage} />
            </Container>
        </>
    );
};

export default GalleryPageComponent;
