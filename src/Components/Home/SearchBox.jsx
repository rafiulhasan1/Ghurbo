import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">

      <div className="bg-white rounded-2xl shadow-2xl p-8 grid lg:grid-cols-4 gap-6">

        {/* Destination */}

        <div>
          <label className="font-semibold flex items-center gap-2">
            <FaLocationDot className="text-sky-600" />
            Destination
          </label>

          <input
            type="text"
            placeholder="Where do you want to go?"
            className="mt-3 w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Date */}

        <div>
          <label className="font-semibold flex items-center gap-2">
            <FaCalendarAlt className="text-sky-600" />
            Date
          </label>

          <input
            type="date"
            className="mt-3 w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Guests */}

        <div>
          <label className="font-semibold flex items-center gap-2">
            <HiUsers className="text-sky-600" />
            Guests
          </label>

          <input
            type="number"
            min="1"
            placeholder="Guests"
            className="mt-3 w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Button */}

        <div className="flex items-end">

          <button className="w-full bg-sky-600 hover:bg-sky-700 transition text-white py-3 rounded-xl font-semibold">
            Search Tour
          </button>

        </div>

      </div>

    </div>
  );
};

export default SearchBox;