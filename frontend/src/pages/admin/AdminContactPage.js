import axios from "axios";
import MessagePageComponent from "./components/MessagePageComponent";

const fetchMessages = async (abctrl) => {
    const { data } = await axios.get("/api/messages/admin", {
        signal: abctrl.signal,
    })
    return data;
}
const deleteMessage = async (productId) => {
    const { data } = await axios.delete(`/api/messages/admin/${messageId}`);
    return data
}
const AdminContactPage = () => {
    return <MessagePageComponent deleteMessage={deleteMessage} fetchMessages={fetchMessages} />
};

export default AdminContactPage;
