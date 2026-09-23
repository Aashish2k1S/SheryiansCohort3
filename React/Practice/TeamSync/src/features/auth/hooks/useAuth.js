import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/auth/authAction";

export const useAuth = () => {
    let navigate = useNavigate();

    let dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const getPasswordStrength = (password) => {
        let strength = 0;
        if (!password) return strength; // Empty string or null

        const hasMinLength = password.length >= 8;
        const hasNumeric = /\d/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

        if (hasMinLength) strength += 1;
        if (hasNumeric) strength += 1;
        if (hasSpecialChar) strength += 1;

        return strength;
    };

    const onRegisterSubmit = (data) => {
        console.log("Form Data:", data);
    };

    const onLoginSubmit = (data) => {
        // console.log("Form Data:", data);
        dispatch(loginEmployee(data));
    };

    return {
        register,
        handleSubmit,
        watch,
        errors,
        getPasswordStrength,
        onRegisterSubmit,
        onLoginSubmit,
        navigate,
    };
};
