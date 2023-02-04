import CartPageComponent from "./components/CartPageComponent";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
    const fetchSetting = async () => {
        const { data } = await axios.get(`/api/settings/63c9003882210e53d2640862`);
        return data;
    }
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
    const reduxDispatch = useDispatch();

    return <CartPageComponent fetchSetting={fetchSetting} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} cartSubtotal={cartSubtotal} reduxDispatch={reduxDispatch} />;
};

export default CartPage;
