import { FaLocationDot } from "react-icons/fa6";

const DestinationCard = ({ destination }) => {
  const { image, name, location, tours } = destination;

  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer">

      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-6 left-6 text-white">

        <h2 className="text-3xl font-bold">
          {name}
        </h2>

        <p className="flex items-center gap-2 mt-2">

          <FaLocationDot />

          {location}

        </p>

        <span className="inline-block mt-3 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
          {tours} Tours Available
        </span>

      </div>

    </div>
  );
};

export default DestinationCard;