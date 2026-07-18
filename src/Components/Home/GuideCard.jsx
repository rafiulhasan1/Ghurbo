import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStar } from "react-icons/fa";

const GuideCard = ({ guide }) => {
  const { name, designation, experience, rating, image } = guide;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={image}
        alt={name}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="mt-2 text-sky-600 font-medium">
          {designation}
        </p>

        <p className="mt-2 text-gray-500">
          Experience: {experience}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{rating}</span>
        </div>

        <div className="mt-5 flex gap-3">

          <button className="rounded-full bg-sky-100 p-3 text-sky-600 hover:bg-sky-600 hover:text-white transition">
            <FaFacebookF />
          </button>

          <button className="rounded-full bg-sky-100 p-3 text-sky-600 hover:bg-sky-600 hover:text-white transition">
            <FaInstagram />
          </button>

          <button className="rounded-full bg-sky-100 p-3 text-sky-600 hover:bg-sky-600 hover:text-white transition">
            <FaLinkedinIn />
          </button>

        </div>

      </div>

    </div>
  );
};

export default GuideCard;