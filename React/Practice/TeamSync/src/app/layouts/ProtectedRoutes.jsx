import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
    const { employee, isLoading } = useSelector((store) => store.auth);

    if (isLoading) return null;
    if (!employee) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default ProtectedRoutes;
