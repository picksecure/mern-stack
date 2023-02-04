import EditSettingsPageComponent from "./components/EditSettingsPageComponent";
import axios from "axios";

const fetchSetting = async (settingsId) => {
    const { data } = await axios.get(`/api/settings/${settingsId}`);
    return data;
}
const updateSettingsApiRequest = async(
    settingsId,
    tax,
    shipping,
    monHoursOp,
    monHoursCl,
    tusHoursOp,
    tusHoursCl,
    wedHoursOp,
    wedHoursCl,
    thuHoursOp,
    thuHoursCl,
    friHoursOp,
    friHoursCl,
    satHoursOp,
    satHoursCl,
    sunHoursOp,
    sunHoursCl,
    monHoursOpServ,
    monHoursClServ,
    tusHoursOpServ,
    tusHoursClServ,
    wedHoursOpServ,
    wedHoursClServ,
    thuHoursOpServ,
    thuHoursClServ,
    friHoursOpServ,
    friHoursClServ,
    satHoursOpServ,
    satHoursClServ,
    sunHoursOpServ,
    sunHoursClServ,
    seoHelmentName,
    seoHelmentTitle
) => {
    const { data } = await axios.put(`/api/settings/${settingsId}`, {
        tax,
        shipping,
        monHoursOp,
        monHoursCl,
        tusHoursOp,
        tusHoursCl,
        wedHoursOp,
        wedHoursCl,
        thuHoursOp,
        thuHoursCl,
        friHoursOp,
        friHoursCl,
        satHoursOp,
        satHoursCl,
        sunHoursOp,
        sunHoursCl,
        monHoursOpServ,
        monHoursClServ,
        tusHoursOpServ,
        tusHoursClServ,
        wedHoursOpServ,
        wedHoursClServ,
        thuHoursOpServ,
        thuHoursClServ,
        friHoursOpServ,
        friHoursClServ,
        satHoursOpServ,
        satHoursClServ,
        sunHoursOpServ,
        sunHoursClServ,
        seoHelmentName,
        seoHelmentTitle
    });
    return data;
}

const AdminEditSettingsPage = () => {

    return <EditSettingsPageComponent updateSettingsApiRequest={updateSettingsApiRequest} fetchSetting={fetchSetting} />;
};

export default AdminEditSettingsPage