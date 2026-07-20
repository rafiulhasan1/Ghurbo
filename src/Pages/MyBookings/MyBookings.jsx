import { Link } from "react-router-dom";

const MyBookings = () => {

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  return (

    <section className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-10">

        My Bookings

      </h1>

      {
        bookings.length === 0 ? (

          <div className="text-center">

            <h2 className="text-2xl font-semibold">

              No Booking Found

            </h2>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {

              bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >

                  <img
                    src={booking.image}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-2xl font-bold">

                      {booking.tourName}

                    </h2>

                    <p className="mt-2">

                      📍 {booking.location}

                    </p>

                    <p>

                      👥 Adults: {booking.adults}

                    </p>

                    <p>

                      🧒 Children: {booking.children}

                    </p>

                    <p>

                      💰 ৳ {booking.total}

                    </p>

                    <span className="inline-block mt-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm">

                      {booking.status}

                    </span>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </section>

  );

};

export default MyBookings;