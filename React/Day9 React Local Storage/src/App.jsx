import { useState } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import Navbar from "./components/Navbar";

const App = () => {
    const [toggle, setToggle] = useState(false);
    const [users, setUsers] = useState(() => {
        return localStorage.getItem("users") || [];
    });

    return (
        <div className="p-4 w-screen min-h-screen bg-[#212121] text-white">
            <Navbar setToggle={setToggle} />

            {toggle ? (
                <UserForm users={users} setUsers={setUsers} />
            ) : (
                <UserCard users={users} setUsers={setUsers} />
            )}
        </div>
    );
};

export default App;
