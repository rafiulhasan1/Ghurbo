import { useContext } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

import DashboardStats from "../../Components/Dashboard/DashboardStats";
import RecentBookings from "../../Components/Dashboard/RecentBookings";
import ProfileSummary from "../../Components/Dashboard/ProfileSummary";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    const today = new Date();

    const currentDate = today.toLocaleDateString("en-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const currentTime = today.toLocaleTimeString("en-BD", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Header */}

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

                <div>

                    <h1 className="text-4xl md:text-5xl font-bold">

                        Welcome Back,

                        <span className="text-sky-600">
                            {" "}{user?.displayName || "Traveler"}
                        </span>

                        👋

                    </h1>

                    <p className="text-gray-500 mt-3 text-lg">
                        Ready for your next adventure?
                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow-lg px-6 py-5">

                    <div className="flex items-center gap-3 text-gray-700">

                        <FaCalendarAlt className="text-sky-600 text-xl" />

                        <span>{currentDate}</span>

                    </div>

                    <div className="flex items-center gap-3 mt-3 text-gray-700">

                        <FaClock className="text-sky-600 text-xl" />

                        <span>{currentTime}</span>

                    </div>

                </div>

            </div>

            {/* Stats */}

            <DashboardStats bookings={bookings} />

            {/* Main Content */}

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

                <div className="lg:col-span-2">

                    <RecentBookings bookings={bookings} />

                </div>

                <div>

                    <ProfileSummary user={user} />

                </div>

            </div>

        </section>
    );
};

export default Dashboard;