import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { loginUserAPI } from "../api/authAPI";
// import { addUser } from "../states/authSlice";
import { removeUser } from "../states/authSlice";
import { loginUserAction } from "../states/authAction";
import { toast } from "react-toastify";

export const useAuth = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({ mode: "onChange" });

    const loginForm = async (data) => {
        try {
            // console.log("login", data);
            // let response = await loginUserAPI(data);

            dispatch(loginUserAction(data));

            // console.log("login response", response);
            // dispatch(addUser(response));
            // toast.success("Login successful");
            navigate("/main");
        } catch (error) {
            console.log("login form error", error);
        }
    };

    const registerForm = (data) => {
        console.log("register", data);
    };

    let logoutHandle = () => {
        localStorage.removeItem("accessToken");
        dispatch(removeUser());
        toast.info("User logged out successfully.");
        navigate("/");
    };

    return {
        navigate,
        register,
        handleSubmit,
        watch,
        errors,
        isSubmitting,
        loginForm,
        registerForm,
        logoutHandle,
    };
};
