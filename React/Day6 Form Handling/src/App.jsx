import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
    const [toggle, setToggle] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({username: "", email: "", password: "", image: ""});
    const [users, setUsers] = useState([]);

    // console.log(users);
    // console.log(formData);
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            {isLoggedIn ? (
                <div className="flex flex-wrap justify-center gap-6 p-8">
                    {users.map((user, idx) => (
                        <UserCard key={idx} user={user} />
                    ))}
                </div>
            ) : toggle ? (
                <Login
                    formData={formData}
                    setFormData={setFormData}
                    users={users}
                    setToggle={setToggle}
                    setIsLoggedIn={setIsLoggedIn}
                />
            ) : (
                <Register
                    formData={formData}
                    setFormData={setFormData}
                    setUsers={setUsers}
                    setToggle={setToggle}
                />
            )}
        </div>
    );
};

export default App;
