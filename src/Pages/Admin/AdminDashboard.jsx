import DashboardCards from "../../Components/Admin/DashboardCards";

const AdminDashboard = () => {

    return (

        <div>

            {/* Header */}

            <div className="mb-10">

                <h1 className="text-4xl font-bold">

                    Welcome Admin 👋

                </h1>

                <p className="text-gray-500 mt-2">

                    Manage your tourism website from one place.

                </p>

            </div>

            {/* Statistics */}

            <DashboardCards />

            {/* Coming Next */}

            <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-3">

                    Recent Activities

                </h2>

                <p className="text-gray-500">

                    Booking Table, User Table and Analytics
                    will appear here in the next step.

                </p>

            </div>

        </div>

    );

};

export default AdminDashboard;