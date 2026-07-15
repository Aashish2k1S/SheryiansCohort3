import { createContext, useState } from "react";

export const MyShopContext = createContext();

export const MyShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);

    function qtyIncrement(id) {
        setCartItems((prev) => {
            let arr = prev.map((elem) => {
                return elem.id === id ? { ...elem, qty: elem.qty + 1 } : elem;
            });

            localStorage.setItem("cartProducts", JSON.stringify(arr));

            return arr;
        });
    }

    function qtyDecrement(id) {
        setCartItems((prev) => {
            let delFlag = false;
            let arr = prev.map((elem) => {
                if (elem.id === id && elem.qty === 1) delFlag = true;
                return elem.id === id ? { ...elem, qty: elem.qty - 1 } : elem;
            });

            arr = delFlag ? arr.filter((elem) => elem.id !== id) : arr;

            localStorage.setItem("cartProducts", JSON.stringify(arr));

            return arr;
        });
    }

    function cartProductRemove(id) {
        setCartItems((prev) => {
            let arr = prev.filter((elem) => {
                return elem.id !== id;
            });
            localStorage.setItem("cartProducts", JSON.stringify(arr));
            return arr;
        });
    }

    return (
        <MyShopContext.Provider
            value={{
                cartItems,
                setCartItems,
                toggleCart,
                setToggleCart,
                qtyIncrement,
                qtyDecrement,
                cartProductRemove,
            }}
        >
            {children}
        </MyShopContext.Provider>
    );
};
