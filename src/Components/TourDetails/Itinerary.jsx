const Itinerary = ({ itinerary }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Tour Itinerary
      </h2>

      <div className="space-y-5">

        {itinerary.map((day) => (

          <div
            key={day.day}
            className="border-l-4 border-sky-600 pl-5"
          >

            <h3 className="font-bold text-lg">

              Day {day.day}: {day.title}

            </h3>

            <p className="text-gray-600 mt-2">

              {day.details}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Itinerary;