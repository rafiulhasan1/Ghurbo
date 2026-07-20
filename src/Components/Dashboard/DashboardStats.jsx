const DashboardStats = ({ bookings }) => {

  const total = bookings.length;

  const pending = bookings.filter(
    booking => booking.status === "Pending"
  ).length;

  const confirmed = bookings.filter(
    booking => booking.status === "Confirmed"
  ).length;

  const cancelled = bookings.filter(
    booking => booking.status === "Cancelled"
  ).length;

  const cards = [
    {
      title: "Total Bookings",
      value: total,
      color: "bg-sky-600",
    },
    {
      title: "Pending",
      value: pending,
      color: "bg-yellow-500",
    },
    {
      title: "Confirmed",
      value: confirmed,
      color: "bg-green-600",
    },
    {
      title: "Cancelled",
      value: cancelled,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} rounded-2xl text-white p-6 shadow-lg`}
        >

          <h3 className="text-lg">

            {card.title}

          </h3>

          <p className="text-4xl font-bold mt-3">

            {card.value}

          </p>

        </div>

      ))}

    </div>
  );
};

export default DashboardStats;