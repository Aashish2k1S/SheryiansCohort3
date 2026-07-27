import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>


            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default App;
