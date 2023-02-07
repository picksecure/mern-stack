import axios from "axios";
import ContactUsPageComponent from "./components/ContactUsPageComponent";

const ContactUsPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
    const newMessage = async (formInputs) => {
        const { data } = await axios.post(`/api/messages/`, { ...formInputs });
        return data;
    };

    return <ContactUsPageComponent newMessage={newMessage} fetchSetting={fetchSetting} />;
};

export default ContactUsPage;
