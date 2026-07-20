import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyStoreProvider } from "./context/MyStore";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <MyStoreProvider>
            <App />
            <ToastContainer />
        </MyStoreProvider>
    </BrowserRouter>,
);
