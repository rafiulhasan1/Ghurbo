import { Link } from "react-router-dom";
import { FaLocationDot, FaClock, FaStar } from "react-icons/fa6";

const TourCard = ({ tour }) => {

    const {
        id,
        image,
        title,
        location,
        duration,
        price,
        discountPrice,
        rating,
        reviews,
        groupSize,
        category,
        featured,
    } = tour;

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2">

            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover"
            />

            <div className="p-5">

                <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-gray-500">

                        <FaLocationDot />

                        {location}

                    </span>

                    <span className="flex items-center gap-1 text-yellow-500">

                        <FaStar />

                        {rating}

                    </span>

                </div>

                <h2 className="text-2xl font-bold mt-4">

                    {title}

                </h2>

                <div className="flex justify-between mt-4 text-gray-500">

                    <span className="flex items-center gap-2">

                        <FaClock />

                        {duration}

                    </span>

                    <span className="font-bold text-sky-600">

                        ৳ {price}

                    </span>

                </div>

                <div className="mt-6">

                    <Link
                        to={`/packages/${id}`}
                        className="block text-center bg-sky-600 text-white rounded-xl py-3 hover:bg-sky-700 transition"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default TourCard;