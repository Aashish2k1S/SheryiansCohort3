import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginUserAPI } from "../api/authAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../states/authSlice";

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
            console.log('login', data);
            let response = await loginUserAPI(data);
            console.log("login response", response);
            dispatch(addUser(response));
            toast.success("Login successful");  
            navigate("/main");
        } catch (error) {
            console.log("login form error", error);
        }
    }


    const registerForm = (data) => {
        console.log('register', data);
    }


    return {
        navigate,
        register, handleSubmit, watch,
        errors, isSubmitting,
        loginForm, registerForm
    };
}