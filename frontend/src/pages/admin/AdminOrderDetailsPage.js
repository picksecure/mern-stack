import OrderDetailsPageComponent from './components/OrderDetailsPageComponent'

import axios from "axios";

const getOrder = async(id) => {
    const { data } = await axios.get("/api/orders/user/" + id);
    return data
}

const markAsDelivered = async (id) => {
    const { data } = await axios.put("/api/orders/delivered/" + id);
    if (data) {
        return data;
    }
}
const markAsPaid = async (id) => {
    const { data } = await axios.put("/api/orders/paid/" + id);
    if (data) {
        return data;
    }
}
const markAsCancelled = async (id) => {
    const { data } = await axios.put("/api/orders/cancelled/" + id);
    if (data) {
        return data;
    }
}
const markAsRefund = async (id) => {
    const { data } = await axios.put("/api/orders/refund/" + id);
    if (data) {
        return data;
    }
}
const AdminOrderDetailsPage = () => {
    return <OrderDetailsPageComponent markAsPaid={markAsPaid} markAsRefund={markAsRefund} markAsCancelled={markAsCancelled} getOrder={getOrder} markAsDelivered={markAsDelivered} />
};

export default AdminOrderDetailsPage;
