import { Zap, User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm((e) => {
        e.mode = "onChange";
    });


    const [showPass, setShowPass] = useState(false);

    return (
        <div className="min-h-screen min-w-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 font-skymart px-2 py-4 overflow-hidden">

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
            <div className="bg-[#131313] border border-zinc-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <h1 className="text-white text-2xl font-bold mb-2">
                    Create account
                </h1>
                <p className="text-gray-400 text-sm mb-8">
                    Join SkyMart and start shopping
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-500" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock size={18} className="text-gray-500" />
                        </div>
                        <input
                            type="password"
                            placeholder="Password (min 6 chars)"
                            className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                        />
                        <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300">
                            <Eye size={18} />
                        </button>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock size={18} className="text-gray-500" />
                        </div>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full bg-[#1c1c1c] text-white border border-[#131313] rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-lime-300 focus:ring-1 focus:ring-lime-300 transition-colors placeholder:text-zinc-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-lime-300 hover:bg-lime-200 text-black font-semibold rounded-xl py-3 mt-4 flex items-center justify-center gap-2 transition-colors"
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
                        className="text-lime-300 font-semibold cursor-pointer hover:text-lime-300/50 transition-all"
                    >
                        Sign in
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;