import { useState } from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const handleCancelBooking = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-10">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold">
            No Booking Found
          </h2>

          <p className="text-gray-500 mt-3">
            You haven't booked any tours yet.
          </p>

          <Link
            to="/packages"
            className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
          >
            Explore Packages
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <img
                src={booking.image}
                alt={booking.tourName}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {booking.tourName}
                </h2>

                <p className="mt-3">
                  📍 {booking.location}
                </p>

                <p className="mt-1">
                  👥 Adults: {booking.adults}
                </p>

                <p className="mt-1">
                  🧒 Children: {booking.children}
                </p>

                <p className="mt-1">
                  👨‍👩‍👧 Total Travelers: {booking.adults + booking.children}
                </p>

                <p className="mt-1">
                  💰 Total: ৳ {booking.total}
                </p>

                <p className="mt-1">
                  📅 Travel Date: {booking.travelDate || "Not Selected"}
                </p>

                <p className="mt-1">
                  🕒 Booked On: {booking.bookingDate}
                </p>

                <div className="mt-4">

                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
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

                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/tour/${booking.tourId}`}
                    className="flex-1 text-center bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg transition"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    disabled={booking.status === "Cancelled"}
                    className={`flex-1 py-2 rounded-lg text-white transition ${
                      booking.status === "Cancelled"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {booking.status === "Cancelled"
                      ? "Cancelled"
                      : "Cancel"}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}
    </section>
  );
};

export default MyBookings;