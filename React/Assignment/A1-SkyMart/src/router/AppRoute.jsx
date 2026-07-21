import { Route, Routes } from "react-router";
import AppProtectedRoute from "./protected/AppProtectedRoute";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <AppProtectedRoute>
                            <Home />
                        </AppProtectedRoute>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <AppProtectedRoute>
                            <About />
                        </AppProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default AppRoute;
