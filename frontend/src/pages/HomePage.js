import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";
import axios from "axios";

const getBestsellers = async () => {
    const { data } = await axios.get("/api/products/bestsellers");
    return data;
}

const HomePage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
    const { categories } = useSelector((state) => state.getCategories);

    return <HomePageComponent fetchSetting={fetchSetting} categories={categories} getBestsellers={getBestsellers} />;
};

export default HomePage;
