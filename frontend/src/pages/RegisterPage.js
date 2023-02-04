import RegisterPageComponent from "./components/RegisterPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const registerUserApiRequest = async (name, lastName, email, password) => {
  const { data } = await axios.post("/api/users/register", {
    name,
    lastName,
    email,
    password,
  });
  sessionStorage.setItem("userInfo", JSON.stringify(data.userCreated));
  if (data.success === "User created") window.location.href = "/user";
  return data;
};

const RegisterPage = () => {
    const reduxDispatch = useDispatch();
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
  return (
      <RegisterPageComponent
          fetchSetting={fetchSetting}
      registerUserApiRequest={registerUserApiRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
};

export default RegisterPage;
