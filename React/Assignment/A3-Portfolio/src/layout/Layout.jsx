import { lazy } from "react";
import { Outlet } from "react-router";

const SmoothScroll = lazy(() => import("../components/SmoothScroll"));
const CustomCursor = lazy(() => import("../components/CustomCursor"));

function Layout() {
    return (
        <>
            <SmoothScroll />
            <CustomCursor />

            <Outlet />
        </>
    );
}

export default Layout;
