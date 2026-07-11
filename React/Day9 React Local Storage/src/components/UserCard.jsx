
const UserCard = ({ users, setUsers }) => {
    const deleteUser = (id) => {        
        let arr = users.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(arr));
        setUsers(arr);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            {!users || users.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="text-gray-700 text-3xl font-extrabold tracking-wider uppercase">
                        No Users Found
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                        Click "Create User" above to add someone new.
                    </p>
                </div>
            ) : (
                /* Grid container to perfectly handle multiple user cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]"
                        >
                            {/* Cover Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-from-zinc-950 via-zinc-950/30 to-transparent" />
                            </div>

                            {/* Avatar */}
                            <div className="absolute left-6 top-28">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="h-20 w-20 rounded-full border-4 border-zinc-950 object-cover shadow-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-14 px-6 pb-6">
                                <h2 className="text-2xl font-bold text-white">
                                    {user.name}
                                </h2>
                                <p className="text-sm text-zinc-400">
                                    Registered User
                                </p>

                                {/* Details */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center justify-between rounded-xl bg-zinc-900/70 px-4 py-3">
                                        <span className="text-zinc-500 text-xs uppercase tracking-wider">
                                            Email
                                        </span>
                                        <span className="max-w-42.5 truncate text-sm text-zinc-200">
                                            {user.email}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl bg-zinc-900/70 px-4 py-3">
                                        <span className="text-zinc-500 text-xs uppercase tracking-wider">
                                            Mobile
                                        </span>
                                        <span className="font-mono text-zinc-200">
                                            {user.mobile}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl bg-zinc-900/70 px-4 py-3">
                                        <span className="text-zinc-500 text-xs uppercase tracking-wider">
                                            Password
                                        </span>
                                        <span className="font-mono text-indigo-400">
                                            ••••••••••
                                        </span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 rounded-xl bg-indigo-600 py-2.5 font-medium text-white transition hover:bg-indigo-500">
                                        Update
                                    </button>

                                    <button
                                        onClick={deleteUser(user.id)}
                                        className="flex-1 rounded-xl border border-red-500/40 bg-red-500/10 py-2.5 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserCard;
