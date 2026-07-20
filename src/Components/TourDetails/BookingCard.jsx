import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookingCard = ({ tour }) => {
  return (
    <div className="sticky top-24 bg-white rounded-3xl shadow-xl border p-6">

      <p className="text-gray-500 text-sm">
        Starting From
      </p>

      <div className="flex items-center gap-3 mt-2">

        <h2 className="text-4xl font-bold text-sky-600">
          ৳ {tour.discountPrice}
        </h2>

        <span className="line-through text-gray-400">
          ৳ {tour.price}
        </span>

      </div>

      <div className="divider"></div>

      <div className="space-y-3 text-gray-600">

        <p className="flex justify-between">
          <span>👥 Group Size</span>
          <strong>{tour.groupSize}</strong>
        </p>

        <p className="flex justify-between">
          <span>🕒 Duration</span>
          <strong>{tour.duration}</strong>
        </p>

        <p className="flex justify-between">
          <span>🎟 Seats</span>
          <strong>{tour.availableSeats}</strong>
        </p>

      </div>

      <div className="divider"></div>

      <div className="space-y-3 mb-6">

        <p className="flex items-center gap-2">
          <FaCircleCheck className="text-green-600" />
          Free Cancellation
        </p>

        <p className="flex items-center gap-2">
          <FaCircleCheck className="text-green-600" />
          Instant Confirmation
        </p>

        <p className="flex items-center gap-2">
          <FaCircleCheck className="text-green-600" />
          Secure Booking
        </p>

      </div>

      <Link
        to={`/booking/${tour.id}`}
        className="
    block
    w-full
    text-center
    bg-sky-600
    hover:bg-sky-700
    text-white
    py-3
    rounded-xl
    font-semibold
    transition-all
    duration-300
  "
      >
        Book This Tour
      </Link>

    </div>
  );
};

export default BookingCard;