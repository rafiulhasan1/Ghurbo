const DescriptionSection = ({ description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        About This Tour
      </h2>

      <p className="text-gray-600 leading-8">
        {description}
      </p>
    </div>
  );
};

export default DescriptionSection;