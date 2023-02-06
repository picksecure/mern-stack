import axios from "axios";
import MeetTheStaffPageComponent from "./components/MeetTheStaffComponent";

const MeetTheStaffPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }


    return <MeetTheStaffPageComponent fetchSetting={fetchSetting} />;
};

export default MeetTheStaffPage;
