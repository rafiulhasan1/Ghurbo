const RecentBookings = ({ bookings }) => {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Recent Bookings

      </h2>

      {
        bookings.length === 0 ? (

          <p>No booking found.</p>

        ) : (

          <div className="space-y-5">

            {
              bookings.slice(0, 5).map((booking) => (

                <div
                  key={booking.id}
                  className="flex justify-between border-b pb-4"
                >

                  <div>

                    <h3 className="font-semibold">

                      {booking.tourName}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {booking.location}

                    </p>

                  </div>

                  <div className="text-right">

                    <p>

                      ৳ {booking.total}

                    </p>

                    <span className="text-yellow-600 text-sm">

                      {booking.status}

                    </span>

                  </div>

                </div>

              ))
            }

          </div>

        )

      }

    </div>

  );

};

export default RecentBookings;