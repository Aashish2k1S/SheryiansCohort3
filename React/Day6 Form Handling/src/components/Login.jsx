const Login = ({ formData, setFormData, users, setToggle, setIsLoggedIn }) => {

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let userIdx = users.findIndex((u) => u.username === formData.username && u.password === formData.password);

        if (userIdx !== -1) setIsLoggedIn(true);
        else alert("Invalid credentials");

        setFormData({ username: "", password: "" });
    };

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Login
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleOnChange}
                    placeholder="username"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    LOGIN
                </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
                Don't have an account?{' '}
                <span
                    className="font-medium text-blue-600 cursor-pointer hover:underline"
                    onClick={() => setToggle((prev) => !prev)}
                >
                    Register here
                </span>
            </p>
        </div>
    );
};

export default Login;