import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, Zap, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { MyStore } from "../context/MyStore";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    let { allUsers, setAllUsers, setUser, setIsLoggedIn } = useContext(MyStore);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [showPass, setShowPass] = useState(false);

    let formSubmit = (data) => {
        console.log(data);

        let user = allUsers.find(
            (user) =>
                user.email === data.email && user.password === data.password,
        );

        if (!user) {
            toast.error("Invalid Credentials");
            return;
        }

        let arr = allUsers.map((user) => {
            user.isLoggedIn =
                user.email === data.email && user.password === data.password;

            console.log(user);
            return user;
        });

        localStorage.setItem("allUsers", JSON.stringify(arr));

        setIsLoggedIn(true);
        setUser(user);
        setAllUsers(arr);

        reset();
        navigate("/");
    };

    return (
        <div className="min-h-screen w-screen font-skymart bg-[#0d0d0d] text-white lg:grid lg:grid-cols-2">
            {/* Left Side */}
            <section className="bg-[#111111] hidden lg:flex flex-col justify-between p-12 border-r-2 border-white/50 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -left-20 top-40 h-60 w-60 rounded-full bg-lime-400/10 blur-3xl" />
                <div className="absolute -right-20 bottom-40 h-40 w-40 rounded-full bg-lime-400/5 blur-3xl" />

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-lime-400 rounded-xl p-2">
                        <Zap size={20} className="text-black fill-black" />
                    </div>

                    <h1 className="text-2xl font-bold">
                        Sky<span className="text-lime-400">Mart</span>
                    </h1>
                </div>

                {/* Hero */}
                <div className="flex-1 max-w-lg flex flex-col justify-center gap-4">
                    <div>
                        <p className="text-lime-400 text-sm uppercase font-semibold tracking-wider">
                            Welcome Back
                        </p>

                        <h2 className="text-5xl font-bold leading-tight mt-4">
                            Shop the future.{" "}
                            <span className="text-lime-400">Today.</span>
                        </h2>

                        <p className="mt-8 text-zinc-500 text-lg">
                            Thousands of products, lightning-fast delivery, and
                            prices that make your wallet happy.
                        </p>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            ["20K+", "Products"],
                            ["50K+", "Users"],
                            ["4.9★", "Rating"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-2xl border border-zinc-600 p-2 text-center transition hover:border-white/70"
                            >
                                <h3 className="text-2xl font-bold text-lime-400">
                                    {value}
                                </h3>
                                <p className=" text-zinc-500">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Right Side */}
            <section className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 lg:p-16">
                {/* Logo */}
                <div className="flex lg:hidden items-center gap-3">
                    <div className="bg-lime-400 rounded-xl p-2">
                        <Zap size={24} className="text-black fill-black" />
                    </div>

                    <h1 className="text-2xl font-bold">
                        Sky<span className="text-lime-400">Mart</span>
                    </h1>
                </div>

                {/* Form */}
                <div className="w-full max-w-lg rounded-3xl border border-zinc-700 bg-[#131313] p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold">Sign in</h2>
                    <p className="mt-1 text-zinc-500">
                        Enter your credentials to continue
                    </p>

                    <form
                        className="mt-8 space-y-5"
                        onSubmit={handleSubmit((data) => formSubmit(data))}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                                <div className="pl-4 pointer-events-none">
                                    <Mail size={18} className="text-gray-500" />
                                </div>
                                <input
                                    {...register("email", {
                                        required: "Email is required.",
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

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center bg-[#1c1c1c] border border-[#131313] rounded-xl transition-colors focus-within:border-lime-400 focus-within:ring-1 focus-within:ring-lime-400">
                                <div className="pl-4 pointer-events-none">
                                    <Lock size={18} className="text-gray-500" />
                                </div>
                                <input
                                    {...register("password", {
                                        required: "Password is required.",
                                    })}
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

                        <button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl py-3 mt-4 flex items-center justify-center gap-2 transition-colors">
                            Sign in
                            <ArrowRight size={18} />
                        </button>

                        <div className="mt-8 text-center text-sm text-gray-500">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate("/signup")}
                                className="text-lime-400 font-semibold cursor-pointer hover:text-lime-400/50 transition-all"
                            >
                                Create one
                            </span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
