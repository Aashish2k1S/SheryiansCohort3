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
        // formState: { errors },
    } = useForm((e) => {
        e.mode = "onChange";
    });

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
            if (user.email === data.email && user.password === data.password) {
                return { ...user, isLoggedIn: true };
            }
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
                        <p className="text-lime-400 text-sm uppercase font-semibold tracking-wider">Welcome Back</p>

                        <h2 className="text-5xl font-bold leading-tight mt-4">Shop the future. <span className="text-lime-400">Today.</span></h2>

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
                                <h3 className="text-2xl font-bold text-lime-400">{value}</h3>
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
                        action=""
                        onSubmit={handleSubmit((data) => formSubmit(data))}
                    >
                        <div className="mt-10 space-y-5">
                            {/* <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-[#1d1d1d] px-5 py-4">
                                <Mail className="text-zinc-500 w-5 h-5" />

                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                                />
                            </div> */}

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-zinc-500" />
                                </div>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                                />
                            </div>

                            {/* <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-[#1d1d1d] px-5 py-4">
                                <Lock className="text-zinc-500 w-5 h-5" />

                                <input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                                />

                                <Eye className="text-zinc-500 w-5 h-5 cursor-pointer" />
                            </div> */}

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-gray-500" />
                                </div>
                                <input
                                    {...register("password", { required: true, })}
                                    type={showPass ? "text" : "password"}
                                    placeholder="Password (min 6 chars)"
                                    className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                                />
                                <button onClick={() => setShowPass(prev => !prev)}
                                    type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300">
                                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]">
                                Sign in
                                <ArrowRight size={18} />
                            </button>

                            <p className="pt-3 text-center text-zinc-500">
                                Don't have an account?{" "}
                                <span
                                    onClick={() => navigate("/signup")}
                                    className="cursor-pointer font-semibold text-lime-400"
                                >
                                    Create one
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Login;
