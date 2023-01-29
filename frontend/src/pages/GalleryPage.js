import axios from "axios";
import GalleryPageComponent from "./components/GalleryPageComponent";


const GalleryPage = () => {
    const newMessage = async (formInputs) => {
        const { data } = await axios.post(`/api/messages/`, { ...formInputs });
        return data;
    };
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }

    return <GalleryPageComponent newMessage={newMessage} fetchSetting={fetchSetting} />;
};

export default GalleryPage;
