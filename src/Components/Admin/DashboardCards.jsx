import {
    FaMapMarkedAlt,
    FaUsers,
    FaClipboardList,
    FaMoneyBillWave,
} from "react-icons/fa";

import StatCard from "./StatCard";

const DashboardCards = () => {

    // পরে MongoDB থেকে আসবে
    const totalTours = 12;
    const totalUsers = 145;
    const totalBookings = 38;
    const revenue = "৳ 2,45,000";

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
                title="Total Tours"
                value={totalTours}
                icon={<FaMapMarkedAlt />}
                color="bg-blue-600"
            />

            <StatCard
                title="Total Users"
                value={totalUsers}
                icon={<FaUsers />}
                color="bg-green-600"
            />

            <StatCard
                title="Bookings"
                value={totalBookings}
                icon={<FaClipboardList />}
                color="bg-yellow-500"
            />

            <StatCard
                title="Revenue"
                value={revenue}
                icon={<FaMoneyBillWave />}
                color="bg-purple-600"
            />

        </div>

    );
};

export default DashboardCards;