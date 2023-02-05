import axios from "axios";
import NotFoundPageComponent from "./components/NotFoundPageComponent";

const NotFoundPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
    return (
        <NotFoundPageComponent fetchSetting={fetchSetting} />
        )
}

export default NotFoundPage;