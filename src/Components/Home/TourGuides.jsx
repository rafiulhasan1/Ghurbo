import guides from "../../data/guides.json";
import GuideCard from "./GuideCard";
import SectionTitle from "./SectionTitle";

const TourGuides = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">

      <SectionTitle
        subHeading="Our Team"
        heading="Meet Our Expert Tour Guides"
        description="Our experienced guides ensure every journey is safe, enjoyable, and memorable."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
          />
        ))}

      </div>

    </section>
  );
};

export default TourGuides;