import axios from "axios";
import AboutUsPageComponent from "./components/AboutUsPageComponent";

const AboutUsPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }


    return <AboutUsPageComponent fetchSetting={fetchSetting}/>;
};

export default AboutUsPage;
