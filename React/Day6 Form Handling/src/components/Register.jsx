const Register = ({ formData, setFormData, setUsers, setToggle }) => {
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            alert("Please fill in all required fields");
            return;
        }

        setUsers((prev) => [...prev, formData]);
        setFormData({ username: "", email: "", password: "", image: "" });
        setToggle(true);
    };

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Register
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    value={formData.username || ""}
                    onChange={handleOnChange}
                    placeholder="username"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleOnChange}
                    placeholder="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    name="password"
                    value={formData.password || ""}
                    onChange={handleOnChange}
                    placeholder="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="url"
                    name="image"
                    value={formData.image || ""}
                    onChange={handleOnChange}
                    placeholder="image URL (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    REGISTER
                </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
                Already have an account?{' '}
                <span
                    className="font-medium text-blue-600 cursor-pointer hover:underline"
                    onClick={() => setToggle((prev) => !prev)}
                >
                    Login here
                </span>
            </p>
        </div>
    );
};

export default Register;