import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex flex-col items-center">

          <img
            src={user?.photoURL || "https://i.pravatar.cc/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-sky-500 object-cover"
          />

          <h2 className="mt-5 text-3xl font-bold">
            {user?.displayName || "User"}
          </h2>

          <p className="mt-2 text-gray-500">
            {user?.email}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Profile;