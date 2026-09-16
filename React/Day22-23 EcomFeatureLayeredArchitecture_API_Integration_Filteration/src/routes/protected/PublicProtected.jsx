import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
    let { user, isAuthenticated, isLoading } = useSelector(
        (store) => store.auth,
    );

    if (isLoading) return <h1>Loading State...</h1>;

    if (user && isAuthenticated) return <Navigate to={"/main"} />;

    return <Outlet />;
};

export default PublicProtected;
