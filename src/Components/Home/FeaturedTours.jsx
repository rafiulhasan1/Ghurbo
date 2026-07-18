import tours from "../../data/tours.json";
import SectionTitle from "./SectionTitle";
import TourCard from "./TourCard";

const FeaturedTours = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">

      <SectionTitle
        subHeading="Best Packages"
        heading="Featured Tours"
        description="Choose from our most popular travel experiences across Bangladesh."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedTours;