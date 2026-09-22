// import { createBrowserRouter, RouterProvider } from "react-router";

// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../../features/auth/ui/pages/Login";
// import Register from "../../features/auth/ui/pages/Register";

// import DashboardLayout from "../layouts/DashboardLayout";
// import Home from "../../features/dashboard/ui/pages/Home";

// const AppRoute = () => {
//     let router = createBrowserRouter([
//         {
//             path: "/", element: <AuthLayout />,
//             children: [
//                 { path: "", element: <Login /> },
//                 { path: "register", element: <Register /> },
//             ]
//         }, {
//             path: "/home", element: <DashboardLayout />,
//             children: [
//                 { path: "", element: <Home /> },
//             ]
//         },
//     ]);
    
//     return <RouterProvider router={router} />;
// };

// export default AppRoute;


import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Dynamic Imports
const Login = lazy(() => import("../../features/auth/ui/pages/Login"));
const Register = lazy(() => import("../../features/auth/ui/pages/Register"));
const Home = lazy(() => import("../../features/dashboard/ui/pages/Home"));

// Fallback Loading UI
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
  </div>
);

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Register />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/home",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
