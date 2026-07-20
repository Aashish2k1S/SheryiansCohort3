import { useContext } from "react";
import { MyStore } from "../../context/MyStore";
import { Navigate } from "react-router";

const AppProtectedRoute = ({ children }) => {

    const { isLoggedIn } = useContext(MyStore);

    if (!isLoggedIn) return <Navigate to="/login" />;
    return children;
};

export default AppProtectedRoute;
