


import React from 'react';
import { useForm } from 'react-hook-form';
import { Network, Cloud, Terminal, LogIn } from 'lucide-react';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen bg-[#100F14] text-white flex flex-col items-center justify-center p-4 font-sans">
      
      {/* Login Card */}
      <div className="w-full max-w-110 bg-[#1A1921] border border-[#2B2936] rounded-2xl p-8 shadow-2xl">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#755BB4] rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Network size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">Synthetix AI</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your workspace</p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex gap-4 mb-6">
          <button 
            type="button" 
            className="flex-1 flex items-center justify-center gap-2 bg-[#2B2936] hover:bg-[#363344] border border-[#3A3749] rounded-lg py-2.5 text-xs font-semibold tracking-wider transition-colors"
          >
            <Cloud size={16} /> GOOGLE
          </button>
          <button 
            type="button" 
            className="flex-1 flex items-center justify-center gap-2 bg-[#2B2936] hover:bg-[#363344] border border-[#3A3749] rounded-lg py-2.5 text-xs font-semibold tracking-wider transition-colors"
          >
            <Terminal size={16} /> GITHUB
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2B2936]"></div>
          </div>
          <div className="relative flex justify-center text-[11px] text-gray-400">
            <span className="bg-[#1A1921] px-4">or continue with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-300 uppercase block">
              Email Address
            </label>
            <input 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email" 
              placeholder="name@company.com" 
              className={`w-full bg-[#100F14] border ${errors.email ? 'border-red-500' : 'border-[#2B2936]'} rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#755BB4] focus:ring-1 focus:ring-[#755BB4] transition-all`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold tracking-widest text-gray-300 uppercase block">
                Password
              </label>
              <a href="#" className="text-xs text-[#755BB4] hover:text-[#8B74C9] transition-colors">
                Forgot password?
              </a>
            </div>
            <input 
              {...register("password", { required: "Password is required" })}
              type="password" 
              placeholder="••••••••" 
              className={`w-full bg-[#100F14] border ${errors.password ? 'border-red-500' : 'border-[#2B2936]'} rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#755BB4] focus:ring-1 focus:ring-[#755BB4] transition-all`}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Stay Signed In */}
          <div className="flex items-center gap-2 pt-1 pb-2">
            <input 
              {...register("staySignedIn")}
              type="checkbox" 
              id="staySignedIn"
              className="w-4 h-4 rounded bg-[#100F14] border-[#2B2936] text-[#755BB4] focus:ring-[#755BB4] focus:ring-offset-[#1A1921] appearance-none checked:bg-[#755BB4] checked:border-transparent relative after:content-['✓'] after:absolute after:text-white after:text-[10px] after:left-0.75 after:top-px after:hidden checked:after:block transition-all cursor-pointer" 
            />
            <label htmlFor="staySignedIn" className="text-sm text-gray-300 cursor-pointer select-none">
              Stay signed in
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-[#755BB4] hover:bg-[#684FA3] text-white font-medium rounded-lg p-3 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#755BB4] focus:ring-offset-[#1A1921]"
          >
            Sign In <LogIn size={18} />
          </button>

        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center border-t border-[#2B2936] pt-6">
          <p className="text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-white font-semibold hover:text-[#755BB4] transition-colors">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-500 space-y-2">
        <p>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </footer>

    </div>
  );
};

export default Login;