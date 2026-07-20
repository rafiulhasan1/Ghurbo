import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      {/* Search Icon */}
      <FaSearch
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search destinations, tours or locations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          pl-14
          pr-14
          py-4
          rounded-2xl
          border
          border-gray-300
          bg-white
          shadow-md
          text-lg
          focus:outline-none
          focus:ring-4
          focus:ring-sky-200
          focus:border-sky-500
          transition-all
          duration-300
        "
      />

      {/* Clear Button */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchBar;