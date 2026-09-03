import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { hydrateUserAPI, loginUserAPI } from "../features/auth/api/authAPI";

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
import { addUser } from "../features/auth/states/authSlice";
import { useDispatch } from "react-redux";



const AppRoute = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                let res = await hydrateUserAPI();
                console.log("hydration response", res);
                let credentials = { username: res.username, password: res.password };
                let response = await loginUserAPI(credentials);
                console.log("login response", response);
                dispatch(addUser(response));
            } catch (error) {
                console.log("error in hydration:", error);
            }
        })()
    }, [])

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
                            element: <LoginPage />
                        },
                        {
                            path: "register",
                            element: <RegisterPage />
                        }
                    ]
                }
            ]
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
                            element: <HomePage />
                        },
                        {
                            path: "products",
                            element: <ProductPage />
                        },
                        {
                            path: "orders",
                            element: <OrderPage />
                        },
                        {
                            path: "cart",
                            element: <CartPage />
                        },
                    ]
                },
            ]
        },
    ]);
    return (<RouterProvider router={router} />)
}

export default AppRoute