import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import ContactComponent from "../../components/ContactComponent";


const ContactUsPageComponent = ({ fetchSetting, newMessage }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);

    return (
        <Container fluid className="w-100">
            <Row className="parentBack justify-content-md-center">
                <div>
                    <h1 className="text text-center">Contact Dr. Jeep</h1>
                    <ContactComponent newMessage={newMessage} />
                </div>
            </Row>
          
        </Container>
    )
}

export default ContactUsPageComponent;