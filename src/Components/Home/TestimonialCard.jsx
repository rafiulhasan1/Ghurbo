import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  return (
    <div className="h-full rounded-3xl bg-white p-10 shadow-lg flex flex-col text-center mb-7">

      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-sky-500"
      />

      <div className="flex justify-center gap-1 mt-5">
        {[...Array(review.rating)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-500"
          />
        ))}
      </div>

      <p className="mt-6 text-gray-600 leading-8 italic">
        "{review.review}"
      </p>

      <h3 className="text-2xl font-bold mt-8">
        {review.name}
      </h3>

      <p className="text-sky-600">
        {review.location}
      </p>

    </div>
  );
};

export default TestimonialCard;