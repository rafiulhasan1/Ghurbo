import {
  FaLocationDot,
  FaClock,
  FaUsers
} from "react-icons/fa6";

const TourInfo = ({ tour }) => {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Tour Information
      </h2>

      <div className="space-y-4">

        <p className="flex items-center gap-3">

          <FaLocationDot className="text-sky-600" />

          {tour.location}

        </p>

        <p className="flex items-center gap-3">

          <FaClock className="text-sky-600" />

          {tour.duration}

        </p>

        <p className="flex items-center gap-3">

          <FaUsers className="text-sky-600" />

          {tour.groupSize}

        </p>

        <p>

          <strong>Category:</strong> {tour.category}

        </p>

        <p>

          <strong>Available Seats:</strong> {tour.availableSeats}

        </p>

      </div>

    </div>

  );

};

export default TourInfo;