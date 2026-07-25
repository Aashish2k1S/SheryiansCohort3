import { Route, Routes } from "react-router";
import AppProtectedRoute from "./AppProtectedRoute";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";

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
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        </AppProtectedRoute>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <AppProtectedRoute>                            
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        </AppProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default AppRoute;
