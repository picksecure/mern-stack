import UserCartDetailsPageComponent from "./components/UserCartDetailsPageComponent";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeFromCartAll } from "../../redux/actions/cartActions";

import axios from "axios";

const UserCartDetailsPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

    const reduxDispatch = useDispatch();
    const fetchProducts = async (abctrl) => {
        const { data } = await axios.get("/api/products/cart", {
            signal: abctrl.signal,
        })
        return data;
    }
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
  const getUser = async () => {
    const { data } = await axios.get("/api/users/profile/" + userInfo._id);
    return data;
  };

  const createOrder = async (orderData) => {
      const { data } = await axios.post("/api/orders", { ...orderData });
      return data;
  }

  return (
      <UserCartDetailsPageComponent
      cartItems={cartItems}
          itemsCount={itemsCount}
          fetchProducts={fetchProducts }
          fetchSetting={fetchSetting}
      cartSubtotal={cartSubtotal}
      userInfo={userInfo}
          addToCart={addToCart}
          removeFromCartAll={removeFromCartAll}
      removeFromCart={removeFromCart}
      reduxDispatch={reduxDispatch}
      getUser={getUser}
      createOrder={createOrder}
    />
  );
};

export default UserCartDetailsPage;
