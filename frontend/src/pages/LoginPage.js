import LoginPageComponent from "./components/LoginPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post("/api/users/login", { email, password, doNotLogout });
    if (data.userLoggedIn.doNotLogout) localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    return data;

}
const LoginPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
    const reduxDispatch = useDispatch();

    return <LoginPageComponent fetchSetting={fetchSetting} loginUserApiRequest={loginUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} />
};

export default LoginPage;
