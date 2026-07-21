import { Zap, User, Mail, Lock, Eye, ArrowRight, EyeOff } from "lucide-react";
import { use, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { MyStore } from "../context/MyStore";

const Signup = () => {
    const navigate = useNavigate();
    let { allUsers, setAllUsers } = useContext(MyStore);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [showPass, setShowPass] = useState(false);

    let formSubmit = (data) => {
        console.log(data);
        let existedUser = allUsers.find(user => user.email === data.email);
        if(!existedUser) 
        {
            toast.error("Email already exists");
            return;
        }

        let arr = allUsers;
        arr.push(data);
        localStorage.setItem("allUsers", JSON.stringify(arr));
        setAllUsers(arr);

        toast.success("Account created successfully");
        
        reset();
        navigate("/login");
    };

    return (
        <div className="min-h-screen min-w-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 font-skymart p-2 overflow-hidden">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <div className="bg-lime-400 rounded-xl p-2">
                    <Zap size={24} className="text-black fill-black" />
                </div>

                <h1 className="text-2xl font-bold text-white">
                    Sky<span className="text-lime-400">Mart</span>
                </h1>
            </div>

            {/* Form Card */}
            <div className="bg-[#1d1d1d] border border-zinc-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <h2 className="text-white text-2xl font-bold">
                    Create account
                </h2>
                <p className="mt-1 text-zinc-500">
                    Join SkyMart and start shopping
                </p>

                <form
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit((data) => formSubmit(data))}
                >
                    {/* Full Name Input */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                            <div className="pl-4 pointer-events-none">
                                <User size={18} className="text-gray-500" />
                            </div>

                            <input
                                {...register("name", {
                                    required: "Name is required",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Please enter a valid name",
                                    },
                                })}
                                type="text"
                                placeholder="Full name"
                                className="flex-1 bg-transparent text-white py-3 px-4 outline-none border-none placeholder:text-zinc-500"
                            />
                        </div>

                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                            <div className="pl-4 pointer-events-none">
                                <Mail size={18} className="text-gray-500" />
                            </div>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                                type="text"
                                placeholder="Email address"
                                className="flex-1 bg-transparent text-white py-3 px-4 outline-none border-none placeholder:text-zinc-500"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                            <div className="pl-4 pointer-events-none">
                                <Lock size={18} className="text-gray-500" />
                            </div>
                            <input
                                {...register("password", { required: true })}
                                type={showPass ? "text" : "password"}
                                placeholder="Password (min 6 chars)"
                                className="flex-1 bg-transparent text-white py-3 px-4 outline-none border-none placeholder:text-zinc-500"
                            />
                            <button
                                onClick={() => setShowPass((prev) => !prev)}
                                type="button"
                                className="pr-4"
                            >
                                {showPass ? (
                                    <EyeOff
                                        size={18}
                                        className="text-gray-500 rotate-x-180 hover:text-white"
                                    />
                                ) : (
                                    <Eye
                                        size={18}
                                        className="text-gray-500 hover:text-white"
                                    />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-lime-100 h-2 rounded"></div>
                        <div className="bg-lime-200 h-2 rounded"></div>
                        <div className="bg-lime-400 h-2 rounded"></div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                            <div className="pl-4 pointer-events-none">
                                <Lock size={18} className="text-gray-500" />
                            </div>
                            <input
                                {...register("cnfpassword", { required: true })}
                                type={showPass ? "text" : "password"}
                                placeholder="Confirm password"
                                className="flex-1 bg-transparent text-white py-3 px-4 outline-none border-none placeholder:text-zinc-500"
                            />
                        </div>
                        {errors.cnfpassword && (
                            <p className="text-sm text-red-500">
                                {errors.cnfpassword.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl py-3 mt-4 flex items-center justify-center gap-2 transition-colors"
                    >
                        Create Account
                        <ArrowRight size={18} />
                    </button>
                </form>

                {/* Footer Navigation */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-lime-400 font-semibold cursor-pointer hover:text-lime-400/50 transition-all"
                    >
                        Sign in
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
