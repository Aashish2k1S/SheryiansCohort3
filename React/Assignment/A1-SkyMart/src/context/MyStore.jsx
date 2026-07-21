import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState(
        JSON.parse(localStorage.getItem("allUsers")) || [
            { name: "test", email: "test@gmail.com", password: "test" },
        ],
    );
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log(localStorage.getItem("allUsers"));
        console.log(allUsers);

        let localAllUser = allUsers;

        let localUser = localAllUser.find((user) => user?.isLoggedIn === true);

        if (localUser) {
            setIsLoggedIn(true);
            setUser(localUser);
        }
    }, [allUsers]);

    return (
        <MyStore.Provider
            value={{
                allUsers,
                setAllUsers,
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </MyStore.Provider>
    );
};
