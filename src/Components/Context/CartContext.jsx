import { createContext, useContext, useState } from "react";

const Cart = createContext()

const cartContext = () => {
    const [cart, setCart] = useState([]);

    return <Cart.Provider value ={{cart, setCart}}></Cart.Provider>
}
    export const CartState = () => {
        return useContext(Cart);
    }

export default cartContext;