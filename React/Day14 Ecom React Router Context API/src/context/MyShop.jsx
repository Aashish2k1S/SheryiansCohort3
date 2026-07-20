import { createContext } from "react";

export const MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
    return (<MyShop.Provider value={{}}>{children}</MyShop.Provider>);
};