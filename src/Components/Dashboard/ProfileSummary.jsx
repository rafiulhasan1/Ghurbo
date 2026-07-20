const ProfileSummary = ({ user }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="flex flex-col items-center">

                <img
                    src={
                        user?.photoURL ||
                        "https://i.pravatar.cc/150?img=12"
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-sky-500 object-cover"
                />

                <h2 className="text-2xl font-bold mt-4">
                    {user?.displayName}
                </h2>

                <p className="text-gray-500">
                    {user?.email}
                </p>

            </div>

            <div className="mt-8 border-t pt-6">

                <div className="flex justify-between mb-4">
                    <span>Total Trips</span>
                    <strong>--</strong>
                </div>

                <div className="flex justify-between">
                    <span>Member Since</span>
                    <strong>2026</strong>
                </div>

            </div>

        </div>
    );
};

export default ProfileSummary;