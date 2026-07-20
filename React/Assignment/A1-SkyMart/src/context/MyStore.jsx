import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        // setAllUsers(JSON.parse(localStorage.getItem("allUsers")) || []);
        setAllUsers([{email: 'pradip123kolkata@gmail.com', password: 'asdasd'}])


        let localAllUser = [{email: 'pradip123kolkata@gmail.com', password: 'asdasd'}]; //, isLoggedIn: false}];
        //JSON.parse(localStorage.getItem("allUsers")) || [];

        let localUser = localAllUser.find((user) => user?.isLoggedIn === true);

        if (localUser) {
            setIsLoggedIn(true);
            setUser(localUser);
            setAllUsers(localAllUser);
        }

        


    }, []);




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
