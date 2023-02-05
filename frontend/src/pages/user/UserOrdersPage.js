import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axios from "axios";

const getOrders = async () => {
    const { data } = await axios.get("/api/orders");
    return data;
}

const UserOrdersPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }

    return <UserOrdersPageComponent fetchSetting={fetchSetting} getOrders={getOrders} />;
};

export default UserOrdersPage;
