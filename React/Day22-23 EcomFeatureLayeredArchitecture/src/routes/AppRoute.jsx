import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { hydrateUserAPI, loginUserAPI } from "../features/auth/api/authAPI";
// import { addUser, removeUser } from "../features/auth/states/authSlice";
import { hydrateUserAction } from "../features/auth/states/authAction";

import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";

import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layouts/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import AboutPage from "../shared/ui/pages/AboutPage";


const AppRoute = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        // (async () => {
        //     try {
        //         let res = await hydrateUserAPI();
        //         // console.log("hydration response", res);
        //         let credentials = { username: res.username, password: res.password };
        //         let response = await loginUserAPI(credentials);
        //         // console.log("login response", response);
        //         dispatch(addUser(response));
        //     } catch (error) {
        //         dispatch(removeUser());
        //         console.log("error in hydration:", error);
        //     }
        // })()
        dispatch(hydrateUserAction());
    }, []);

    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicProtected />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <LoginPage />,
                        },
                        {
                            path: "register",
                            element: <RegisterPage />,
                        },
                    ],
                },
            ],
        },
        {
            path: "/main",
            element: <MainProtected />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            path: "",
                            element: <HomePage />,
                        },
                        {
                            path: "products",
                            element: <ProductPage />,
                        },
                        {
                            path: "orders",
                            element: <OrderPage />,
                        },
                        {
                            path: "cart",
                            element: <CartPage />,
                        },
                        {
                            path: "about",
                            element: <AboutPage />,
                        },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default AppRoute;
