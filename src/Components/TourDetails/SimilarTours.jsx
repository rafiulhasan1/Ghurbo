import { Link } from "react-router-dom";
import TourCard from "../Tour/TourCard";

const SimilarTours = ({ tours, currentTour }) => {

  const similar = tours
    .filter(
      (tour) =>
        tour.category === currentTour.category &&
        tour.id !== currentTour.id
    )
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <div className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Similar Tours
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {similar.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

      </div>

      <div className="text-center mt-8">

        <Link
          to="/packages"
          className="btn btn-outline btn-info"
        >
          View All Packages
        </Link>

      </div>

    </div>
  );
};

export default SimilarTours;