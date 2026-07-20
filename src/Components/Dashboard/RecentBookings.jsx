import { Link } from "react-router-dom";

const RecentBookings = ({ bookings }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                    Recent Bookings
                </h2>

                <Link
                    to="/my-bookings"
                    className="text-sky-600 font-semibold hover:underline"
                >
                    View All →
                </Link>

            </div>

            {bookings.length === 0 ? (

                <div className="text-center py-16">

                    <h3 className="text-xl font-semibold">
                        No Booking Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Book your first tour to see it here.
                    </p>

                    <Link
                        to="/packages"
                        className="inline-block mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
                    >
                        Explore Tours
                    </Link>

                </div>

            ) : (

                <div className="space-y-5">

                    {bookings.slice(0, 5).map((booking) => (

                        <div
                            key={booking.id}
                            className="flex items-center justify-between gap-4 border rounded-xl p-4 hover:shadow-md transition"
                        >

                            {/* Left */}

                            <div className="flex items-center gap-4">

                                <img
                                    src={booking.image}
                                    alt={booking.tourName}
                                    className="w-24 h-20 rounded-xl object-cover"
                                />

                                <div>

                                    <h3 className="font-bold text-lg">
                                        {booking.tourName}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        📍 {booking.location}
                                    </p>

                                    <p className="text-gray-500 text-sm">
                                        👥 {booking.adults + booking.children} Travelers
                                    </p>

                                </div>

                            </div>

                            {/* Right */}

                            <div className="text-right">

                                <p className="text-xl font-bold text-sky-600">
                                    ৳ {booking.total}
                                </p>

                                <span
                                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                                        booking.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : booking.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {booking.status}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            )}

            {bookings.length > 0 && (

                <Link
                    to="/my-bookings"
                    className="block text-center mt-8 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    Manage My Bookings
                </Link>

            )}

        </div>
    );
};

export default RecentBookings;