import axios from "axios";
import MessagePageComponent from "./components/MessagePageComponent";

const fetchMessages = async (abctrl) => {
    const { data } = await axios.get("/api/messages/admin", {
        signal: abctrl.signal,
    })
    return data;
}

const AdminContactPage = () => {
    return <MessagePageComponent fetchMessages={fetchMessages} />
};

export default AdminContactPage;
