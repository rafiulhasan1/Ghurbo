import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import DashboardStats from "../../Components/Dashboard/DashboardStats";
import RecentBookings from "../../Components/Dashboard/RecentBookings";
import ProfileSummary from "../../Components/Dashboard/ProfileSummary";

const Dashboard = () => {

  const { user } = useContext(AuthContext);

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  return (

    <section className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-10">

        Welcome Back,

        <span className="text-sky-600">

          {" "} {user?.displayName}

        </span>

        👋

      </h1>

      <DashboardStats bookings={bookings} />

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        <div className="lg:col-span-2">

          <RecentBookings bookings={bookings} />

        </div>

        <ProfileSummary user={user} />

      </div>

    </section>

  );

};

export default Dashboard;