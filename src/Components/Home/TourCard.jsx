import { FaLocationDot, FaStar } from "react-icons/fa6";

const TourCard = ({ tour }) => {
  const { image, title, location, price, rating, duration } = tour;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between">

          <span className="flex items-center gap-2 text-gray-500">
            <FaLocationDot className="text-sky-600" />
            {location}
          </span>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {rating}
          </span>

        </div>

        <h2 className="text-2xl font-bold mt-4">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          {duration}
        </p>

        <div className="mt-6 flex justify-between items-center">

          <h3 className="text-sky-600 text-2xl font-bold">
            ৳ {price}
          </h3>

          <button className="bg-sky-600 text-white px-5 py-2 rounded-xl hover:bg-sky-700">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default TourCard;