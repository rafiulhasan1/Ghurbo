import { useParams } from "react-router-dom";
import toursData from "../../data/tours.json";
import { FaLocationDot, FaClock, FaStar } from "react-icons/fa6";

const TourDetails = () => {
  const { id } = useParams();

  const tour = toursData.find((item) => item.id === Number(id));

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Tour Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      {/* Image */}

      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-[500px] rounded-3xl object-cover shadow-lg"
      />

      {/* Content */}

      <div className="mt-10">

        <div className="flex flex-wrap justify-between items-center gap-4">

          <h1 className="text-5xl font-bold">
            {tour.title}
          </h1>

          <span className="text-4xl font-bold text-sky-600">
            ৳ {tour.price}
          </span>

        </div>

        <div className="flex flex-wrap gap-8 mt-8 text-lg">

          <span className="flex items-center gap-2">

            <FaLocationDot className="text-sky-600" />

            {tour.location}

          </span>

          <span className="flex items-center gap-2">

            <FaClock className="text-sky-600" />

            {tour.duration}

          </span>

          <span className="flex items-center gap-2">

            <FaStar className="text-yellow-500" />

            {tour.rating}

          </span>

        </div>

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-4">
            About This Tour
          </h2>

          <p className="text-gray-600 leading-8">
            Explore the beauty of {tour.location} with our carefully planned
            package. Enjoy comfortable accommodation, local transportation,
            experienced guides, and unforgettable memories. This package is
            perfect for families, couples, and adventure lovers.
          </p>

        </div>

        <div className="mt-12">

          <button className="bg-sky-600 hover:bg-sky-700 transition text-white px-10 py-4 rounded-xl text-lg font-semibold">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default TourDetails;