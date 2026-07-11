import { useForm } from "react-hook-form"

const UserForm = ({ id, setUsers, users }) => {

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    //} = useForm();
    } = useForm({mode: 'onChange'});

    const formSubmit = (data) => {
        let arr = [...users, data]; 
        localStorage.setItem('users', JSON.stringify(arr));
        setUsers(arr); 
        reset();
    };

    return (
        <div className="w-full flex items-center justify-center">

            <div className="w-full max-w-md rounded-2xl bg-black border border-gray-800 p-6 shadow-2xl text-gray-200">
                {/* Form Header */}
                <div className="mb-2 text-center">
                    <h2 className="text-xl font-bold tracking-tight text-white">Create Account</h2>
                    <p className="text-sm text-gray-400 mt-1">Please enter your details below.</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(formSubmit)}>
                    {/* Name Field */}
                    <div>
                        {/* <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Full Name</label> */}
                        <input
                            {...register("name", {
                                required: 'Name is required',
                                pattern: {
                                    value: /^[a-zA-Zà-ÿÀ-Ý]+(([',. -][a-zA-Zà-ÿÀ-Ý ])?[a-zA-Zà-ÿÀ-Ý]*)*$/,
                                    message: 'Invalid name syntax'
                                }
                            })}
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            aria-invalid={errors.name ? "true" : "false"}
                            className="w-full rounded-lg bg-gray-950 border border-gray-800 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1.5 font-medium">⚠️ {errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        {/* <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email Address</label> */}
                        <input
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            aria-invalid={errors.email ? "true" : "false"}
                            className="w-full rounded-lg bg-gray-950 border border-gray-800 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1.5 font-medium">⚠️ {errors.email.message}</p>}
                    </div>

                    {/* Mobile Field */}
                    <div>
                        {/* <label htmlFor="mobile" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Mobile Number</label> */}
                        <input
                            {...register("mobile", {
                                required: 'Mobile is required',
                                minLength: { value: 10, message: 'Must be exactly 10 digits' },
                                maxLength: { value: 10, message: 'Must be exactly 10 digits' },
                                pattern: { value: /^[0-9]+$/, message: 'Invalid characters inside mobile string' }
                            })}
                            type="text"
                            id="mobile"
                            placeholder="1234567890"
                            aria-invalid={errors.mobile ? "true" : "false"}
                            className="w-full rounded-lg bg-gray-950 border border-gray-800 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        {errors.mobile && <p className="text-xs text-red-400 mt-1.5 font-medium">⚠️ {errors.mobile.message}</p>}
                    </div>

                    {/* Image URL Field */}
                    <div>
                        {/* <label htmlFor="image" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Profile Image URL</label> */}
                        <input
                            {...register("image", { required: 'Image URL is required' })}
                            type="url"
                            id="image"
                            placeholder="https://example.com/avatar.jpg"
                            aria-invalid={errors.image ? "true" : "false"}
                            className="w-full rounded-lg bg-gray-950 border border-gray-800 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                        {errors.image && <p className="text-xs text-red-400 mt-1.5 font-medium">⚠️ {errors.image.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        {/* <label htmlFor="password" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Password</label> */}
                        <input
                            {...register("password", {
                                required: 'Password is required',
                                // pattern: {
                                //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                //     message: 'Must be 8+ chars with 1 uppercase, 1 lowercase, 1 number, and 1 symbol.'
                                // }
                            })}
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            aria-invalid={errors.password ? "true" : "false"}
                            className="w-full rounded-lg bg-gray-950 border border-gray-800 px-3.5 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                        {errors.password && <p className="text-xs text-red-400 mt-1.5 font-medium max-w-xs leading-relaxed">⚠️ {errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-2.5 px-4 mt-2 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserForm