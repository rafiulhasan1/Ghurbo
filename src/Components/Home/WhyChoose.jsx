import features from "../../data/features.json";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";

const WhyChoose = () => {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-4">

        <SectionTitle
          subHeading="Why Us"
          heading="Why Choose GHURBO"
          description="We make every journey comfortable, secure, and unforgettable."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;