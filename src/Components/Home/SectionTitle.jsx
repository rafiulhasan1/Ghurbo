const SectionTitle = ({ subHeading, heading, description }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">

      <span className="text-sky-600 font-semibold uppercase tracking-widest">
        {subHeading}
      </span>

      <h2 className="text-4xl font-bold mt-3">
        {heading}
      </h2>

      <p className="text-gray-500 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
};

export default SectionTitle;