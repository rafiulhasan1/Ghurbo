import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const BookingSuccess = () => {
  return (
    <section className="max-w-3xl mx-auto py-20 text-center">

      <FaCircleCheck className="text-7xl text-green-500 mx-auto" />

      <h1 className="text-4xl font-bold mt-6">
        Booking Successful!
      </h1>

      <p className="text-gray-500 mt-3">
        Your booking has been saved successfully.
      </p>
      <p className="text-gray-500 mt-3">
        Thank you for choosing GHURBO.
      </p>

      <div className="mt-8 flex justify-center gap-4">

        <Link
          to="/my-bookings"
          className="bg-sky-600 text-white px-6 py-3 rounded-xl"
        >
          My Bookings
        </Link>

        <Link
          to="/packages"
          className="border px-6 py-3 rounded-xl"
        >
          Explore More
        </Link>

      </div>

    </section>
  );
};

export default BookingSuccess;