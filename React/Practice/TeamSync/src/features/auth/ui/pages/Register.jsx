import { useForm } from 'react-hook-form';
import { User, Mail, Lock, Monitor, Volleyball } from 'lucide-react';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle your form submission here
    console.log('Form Data:', data);
  };

  // Watch the password field to do a rudimentary strength check (optional UI enhancement)
  const password = watch("password", "");


  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    return 3;
  };
  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-[#050509] text-white flex flex-col font-sans">
      <div className="grow flex flex-col md:flex-row">

        {/* Left Section - Hero/Background */}
        <div className="md:w-[40%] bg-[#080B1E] p-10 flex flex-col justify-between border-r border-[#1E293B]">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">Synthetix AI</h1>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1A1F36] px-3 py-1 rounded-full border border-[#2E375A]">
              <span className="text-sm font-medium tracking-wider text-[#A78BFA] flex items-center gap-1">
                <span className="text-lg leading-none">✨</span> NEXT-GEN INTELLIGENCE
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Accelerate your team's<br />
              intelligence.
            </h2>

            <p className="text-gray-400 text-lg max-w-md">
              Connect your enterprise data to our specialized AI models and unlock unparalleled strategic insights in seconds.
            </p>
          </div>

          <div className="flex gap-12 text-sm text-gray-500 mt-10">
            <div>
              <div className="text-2xl font-semibold text-white">99.9%</div>
              <div>Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">ISO</div>
              <div>27001 Certified</div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-[60%] p-10 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Create your account</h2>
              <p className="text-gray-400 mt-2">Experience the future of collaborative data intelligence.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={18} />
                  </span>
                  <input
                    {...register("fullName", { required: "Full name is required" })}
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full bg-[#111119] border ${errors.fullName ? 'border-red-500' : 'border-[#2E375A]'} rounded-lg p-3 pl-10 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent outline-none transition-all`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail size={18} />
                  </span>
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
                    className={`w-full bg-[#111119] border ${errors.email ? 'border-red-500' : 'border-[#2E375A]'} rounded-lg p-3 pl-10 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent outline-none transition-all`}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={18} />
                  </span>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" }
                    })}
                    type="password"
                    placeholder="••••••••"
                    className={`w-full bg-[#111119] border ${errors.password ? 'border-red-500' : 'border-[#2E375A]'} rounded-lg p-3 pl-10 text-white placeholder:text-gray-600 focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent outline-none transition-all`}
                  />
                </div>
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

                {/* Visual Password Strength Indicator */}
                <div className="flex gap-1 pt-2">
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strength >= 1 ? 'bg-[#A78BFA]' : 'bg-[#2E375A]'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strength >= 2 ? 'bg-[#A78BFA]' : 'bg-[#2E375A]'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strength >= 3 ? 'bg-[#A78BFA]' : 'bg-[#2E375A]'}`}></div>
                </div>
                <p className="text-xs text-[#A78BFA] mt-1 font-medium">
                  {strength === 0 ? "Enter a password" : strength < 3 ? "Weak password" : "Strong password"}
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  {...register("terms", { required: "You must agree to the terms" })}
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 rounded bg-[#111119] border-[#2E375A] text-[#A78BFA] focus:ring-[#A78BFA] focus:ring-offset-[#050509]"
                />
                <div className="flex flex-col">
                  <label htmlFor="terms" className="text-sm text-gray-400 leading-tight">
                    I agree to the <a href="#" className="text-[#A78BFA] hover:underline">Terms of Service</a> and <a href="#" className="text-[#A78BFA] hover:underline">Privacy Policy</a>.
                  </label>
                  {errors.terms && <span className="text-xs text-red-500 mt-1">{errors.terms.message}</span>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#A78BFA] text-[#050509] font-bold rounded-lg p-3 mt-4 hover:bg-[#C4B5FD] transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A78BFA] focus:ring-offset-[#050509]"
              >
                Create Account
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2E375A]"></div>
              </div>
              <div className="relative flex justify-center text-xs font-semibold uppercase tracking-wider">
                <span className="bg-[#050509] px-4 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 border border-[#2E375A] bg-[#111119] text-sm font-medium rounded-lg p-3 hover:bg-[#1A1F36] transition duration-150">
                <Volleyball size={18} className="text-gray-400" /> Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 border border-[#2E375A] bg-[#111119] text-sm font-medium rounded-lg p-3 hover:bg-[#1A1F36] transition duration-150">
                <Monitor size={18} className="text-gray-400" /> SSO
              </button>
            </div>

            <p className="text-center text-gray-400 mt-8 text-sm">
              Already have an account? <a href="#" className="text-white font-medium hover:text-[#A78BFA] hover:underline transition-colors">Log In</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1E293B] bg-[#080B1E] py-4 px-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
        <div className="font-semibold text-white">Synthetix AI</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">System Status</a>
        </div>
        <div>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</div>
      </footer>
    </div>
  );
};


export default Register