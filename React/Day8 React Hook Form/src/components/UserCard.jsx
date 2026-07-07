const UserCard = ({ users }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            {!users || users.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="text-gray-700 text-3xl font-extrabold tracking-wider uppercase">
                        No Users Found
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Click "Create User" above to add someone new.</p>
                </div>
            ) : (
                /* Grid container to perfectly handle multiple user cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {users.map((user, idx) => (
                        <div
                            key={idx}
                            className="w-full max-w-sm rounded-2xl bg-black border border-gray-800 p-5 flex flex-col gap-4 shadow-xl hover:border-gray-700 transition-all duration-300"
                        >
                            {/* Avatar Container */}
                            <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                                <img
                                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                                    src={user.image}
                                    alt={`${user.name}'s profile`}
                                />
                            </div>

                            {/* User Details */}
                            <div className="flex flex-col gap-2.5 text-gray-300">
                                <h2 className="text-lg font-bold text-white tracking-tight truncate">
                                    {user.name}
                                </h2>

                                <div className="space-y-1.5 text-sm">
                                    <p className="flex justify-between items-center bg-gray-950 px-3 py-1.5 rounded-lg border border-gray-900">
                                        <span className="text-xs text-gray-500 uppercase font-medium">Email</span>
                                        <span className="text-gray-300 font-medium truncate max-w-45">{user.email}</span>
                                    </p>
                                    <p className="flex justify-between items-center bg-gray-950 px-3 py-1.5 rounded-lg border border-gray-900">
                                        <span className="text-xs text-gray-500 uppercase font-medium">Mobile</span>
                                        <span className="text-gray-300 font-mono">{user.mobile}</span>
                                    </p>
                                    <p className="flex justify-between items-center bg-gray-950 px-3 py-1.5 rounded-lg border border-gray-900">
                                        <span className="text-xs text-gray-500 uppercase font-medium">Password</span>
                                        {/* Masked for UX safety, using a subtle font-mono */}
                                        <span className="text-indigo-400 font-mono text-xs select-none">••••••••</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UserCard