import {
  FaStar,
  FaLocationDot,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

const HeroSection = ({ tour }) => {
  const {
    title,
    gallery,
    image,
    featured,
    price,
    discountPrice,
    rating,
    reviews,
    location,
    duration,
    groupSize,
    category,
  } = tour;

  const images =
    gallery && gallery.length > 0
      ? gallery
      : [image, image, image];

  return (
    <section>

      {/* Image Grid */}

      <div className="grid grid-cols-4 gap-4">

        {/* Main Image */}

        <div className="col-span-4 lg:col-span-2">

          <img
            src={images[0]}
            alt={title}
            className="w-full h-105 lg:h-125 object-cover rounded-3xl"
          />

        </div>

        {/* Right Images */}

        <div className="hidden lg:grid col-span-2 grid-cols-2 gap-4">

          <img
            src={images[1]}
            alt=""
            className="w-full h-60.5 object-cover rounded-3xl"
          />

          <img
            src={images[2]}
            alt=""
            className="w-full h-60.5 object-cover rounded-3xl"
          />

          <div className="col-span-2 relative">

            <img
              src={images[0]}
              alt=""
              className="w-full h-60.5 object-cover rounded-3xl"
            />

            <div className="absolute inset-0 rounded-3xl bg-black/40 flex items-center justify-center">

              <button className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg">

                View Gallery

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Tour Info */}

      <div className="mt-10">

        <div className="flex flex-wrap items-center gap-3 mb-5">

          {featured && (
            <span className="badge badge-warning px-4 py-4">
              ⭐ Featured
            </span>
          )}

          <span className="badge badge-error px-4 py-4">
            Save ৳ {price - discountPrice}
          </span>

          <span className="badge badge-info px-4 py-4">
            {category}
          </span>

        </div>

        <h1 className="text-4xl lg:text-5xl font-bold">

          {title}

        </h1>

        <div className="flex flex-wrap gap-6 mt-6 text-gray-600">

          <span className="flex items-center gap-2">

            <FaLocationDot className="text-sky-600" />

            {location}

          </span>

          <span className="flex items-center gap-2">

            <FaClock className="text-sky-600" />

            {duration}

          </span>

          <span className="flex items-center gap-2">

            <FaUsers className="text-sky-600" />

            {groupSize}

          </span>

          <span className="flex items-center gap-2">

            <FaStar className="text-yellow-500" />

            {rating}

            <span className="text-gray-500">

              ({reviews} Reviews)

            </span>

          </span>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;