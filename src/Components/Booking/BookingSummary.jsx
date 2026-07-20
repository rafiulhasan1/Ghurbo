import { Link } from "react-router-dom";

const BookingSummary = ({ tour, adults, children }) => {
  const adultPrice = adults * tour.discountPrice;
  const childPrice = children * (tour.discountPrice * 0.5);
  const total = adultPrice + childPrice;

  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">

      <img
        src={tour.image}
        alt={tour.title}
        className="rounded-xl h-48 w-full object-cover"
      />

      <h2 className="text-2xl font-bold mt-5">
        {tour.title}
      </h2>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>Tour Price</span>
          <strong>৳ {tour.discountPrice}</strong>
        </div>

        <div className="flex justify-between">
          <span>Adults ({adults})</span>
          <strong>৳ {adultPrice}</strong>
        </div>

        <div className="flex justify-between">
          <span>Children ({children})</span>
          <strong>৳ {childPrice}</strong>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span className="text-sky-600">
            ৳ {total}
          </span>

        </div>

      </div>

      <Link
        to="/packages"
        className="block text-center mt-4 text-sky-600"
      >
        ← Back to Packages
      </Link>

    </div>
  );
};

export default BookingSummary;