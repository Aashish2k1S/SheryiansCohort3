const UserCard = ({ user }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white border border-gray-200 shadow-lg rounded-xl">
            <img
                src={user.image || "https://via.placeholder.com/150"}
                alt={user.username}
                className="object-cover w-24 h-24 mb-4 border-2 border-blue-500 rounded-full shadow-sm"
            />
            <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
        </div>
    );
};

export default UserCard;