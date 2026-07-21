const UserRoleBadge = ({ role }) => {

    return (
        <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
                role === "Admin"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
            }`}
        >
            {role}
        </span>
    );
};

export default UserRoleBadge;