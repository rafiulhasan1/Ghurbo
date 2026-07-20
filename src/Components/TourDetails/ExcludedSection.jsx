import { FaCircleXmark } from "react-icons/fa6";

const ExcludedSection = ({ excluded }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Not Included
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {excluded.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <FaCircleXmark className="text-red-500 text-lg" />

            <span>{item}</span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ExcludedSection;