import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyStoreProvider } from "./context/MyStore";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <MyStoreProvider>
            <App />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </MyStoreProvider>
    </BrowserRouter>,
);
