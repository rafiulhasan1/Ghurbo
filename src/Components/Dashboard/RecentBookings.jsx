import { Link } from "react-router-dom";

const RecentBookings = ({ bookings }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6">
                Recent Bookings
            </h2>

            {bookings.length === 0 ? (

                <div className="text-center py-10">
                    <p className="text-gray-500">
                        No booking found.
                    </p>
                </div>

            ) : (

                <>
                    <div className="space-y-5">

                        {bookings.slice(0, 5).map((booking) => (

                            <div
                                key={booking.id}
                                className="flex justify-between items-center border-b pb-4"
                            >

                                <div>

                                    <h3 className="font-semibold text-lg">
                                        {booking.tourName}
                                    </h3>

                                    <p className="text-gray-500">
                                        📍 {booking.location}
                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="font-semibold">
                                        ৳ {booking.total}
                                    </p>

                                    <span
                                        className={`text-sm font-medium ${
                                            booking.status === "Pending"
                                                ? "text-yellow-600"
                                                : booking.status === "Confirmed"
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="mt-8">

                        <Link
                            to="/my-bookings"
                            className="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg transition"
                        >
                            View All Bookings
                        </Link>

                    </div>
                </>

            )}

        </div>
    );
};

export default RecentBookings;