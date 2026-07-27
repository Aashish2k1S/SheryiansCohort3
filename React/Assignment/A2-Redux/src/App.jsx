import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>

            
            <ToastContainer position="top-right" autoClose={2000} />
        </>
    );
};

export default App;
