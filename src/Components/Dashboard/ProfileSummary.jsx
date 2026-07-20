const ProfileSummary = ({ user }) => {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Profile

      </h2>

      <div className="space-y-4">

        <p>

          <strong>Name:</strong> {user?.displayName}

        </p>

        <p>

          <strong>Email:</strong> {user?.email}

        </p>

      </div>

    </div>

  );

};

export default ProfileSummary;