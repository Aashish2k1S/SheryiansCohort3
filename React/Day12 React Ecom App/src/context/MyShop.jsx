import { createContext, useState } from "react";

export const MyShopContext = createContext();

export const MyShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);

    // function qtyIncrement(id) {
    //     setCartItems((prev) => {
    //         return prev.map((elem) => {
    //             return (elem.id === id) ? { ...elem, qty: elem.qty + 1 } : elem;
    //         })
    //     })
    // }

    // function qtyDecrement(id) {
    //     setCartItems((prev) => {
    //         return prev.map((elem) => {
    //             return (elem.id === id) ? { ...elem, qty: elem.qty - 1 } : elem;
    //         })
    //     })
    // }


    return (
        <MyShopContext.Provider
            value={{ cartItems, setCartItems, toggleCart, setToggleCart }}>
            {children}
        </MyShopContext.Provider>
    );
}