import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-14 flex-wrap">

      {/* Previous */}
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          border
          border-gray-300
          bg-white
          shadow-sm
          hover:bg-sky-600
          hover:text-white
          transition-all
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        <FaChevronLeft />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
                w-11
                h-11
                rounded-xl
                font-semibold
                transition-all
                duration-300
                ${
                  currentPage === page
                    ? "bg-sky-600 text-white shadow-lg scale-105"
                    : "bg-white border border-gray-300 hover:bg-sky-100"
                }
              `}
            >
              {page}
            </button>
          );
        })}

      </div>

      {/* Next */}

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          border
          border-gray-300
          bg-white
          shadow-sm
          hover:bg-sky-600
          hover:text-white
          transition-all
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Next
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Pagination;