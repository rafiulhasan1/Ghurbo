import {
  FaShieldAlt,
  FaWallet,
  FaHeadset,
  FaMapMarkedAlt,
} from "react-icons/fa";

const iconMap = {
  shield: <FaShieldAlt size={36} />,
  wallet: <FaWallet size={36} />,
  support: <FaHeadset size={36} />,
  guide: <FaMapMarkedAlt size={36} />,
};

const FeatureCard = ({ feature }) => {
  const { title, description, icon } = feature;

  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="inline-flex rounded-xl bg-sky-100 p-4 text-sky-600">
        {iconMap[icon]}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-500 leading-7">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;