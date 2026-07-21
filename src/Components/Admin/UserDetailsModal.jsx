const UserDetailsModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl w-full max-w-md p-8">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        User Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl"
                    >
                        ×
                    </button>

                </div>

                <div className="flex flex-col items-center">

                    <img
                        src={user.photo}
                        alt={user.name}
                        className="w-28 h-28 rounded-full mb-5"
                    />

                    <h3 className="text-2xl font-bold">
                        {user.name}
                    </h3>

                    <p className="text-gray-500">
                        {user.email}
                    </p>

                </div>

                <div className="mt-8 space-y-4">

                    <div className="flex justify-between">
                        <span>Role</span>
                        <span>{user.role}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Status</span>
                        <span>{user.status}</span>
                    </div>

                </div>

                <div className="flex justify-end mt-8">

                    <button
                        onClick={onClose}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
};

export default UserDetailsModal;