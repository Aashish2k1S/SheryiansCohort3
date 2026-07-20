import { useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/login")}
            className="p-4 bg-blue-600 rounded cursor-pointer"
        >
            Signup
        </div>
    );
};

export default Signup;
