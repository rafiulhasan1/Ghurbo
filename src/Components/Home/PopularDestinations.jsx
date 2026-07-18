import destinations from "../../data/destinations.json";
import DestinationCard from "./DestinationCard";
import SectionTitle from "./SectionTitle";

const PopularDestinations = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">

      <SectionTitle
        subHeading="Top Places"
        heading="Popular Destinations"
        description="Discover Bangladesh's most loved travel destinations."
      />

      <div className="grid md:grid-cols-2 gap-8">

        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}

      </div>

    </section>
  );
};

export default PopularDestinations;