import {
    FaClipboardList,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const BookingStats = ({ bookings }) => {

    const total = bookings.length;

    const pending = bookings.filter(
        b => b.status === "Pending"
    ).length;

    const confirmed = bookings.filter(
        b => b.status === "Confirmed"
    ).length;

    const cancelled = bookings.filter(
        b => b.status === "Cancelled"
    ).length;

    const stats = [

        {
            title: "Total",
            value: total,
            icon: <FaClipboardList />,
            color: "bg-sky-500"
        },

        {
            title: "Pending",
            value: pending,
            icon: <FaClock />,
            color: "bg-yellow-500"
        },

        {
            title: "Confirmed",
            value: confirmed,
            icon: <FaCheckCircle />,
            color: "bg-green-500"
        },

        {
            title: "Cancelled",
            value: cancelled,
            icon: <FaTimesCircle />,
            color: "bg-red-500"
        },

    ];

    return (

        <div className="grid md:grid-cols-4 gap-6 mb-8">

            {

                stats.map((item,index)=>(

                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">

                                {item.title}

                            </p>

                            <h2 className="text-3xl font-bold mt-2">

                                {item.value}

                            </h2>

                        </div>

                        <div className={`${item.color} text-white text-3xl p-4 rounded-xl`}>

                            {item.icon}

                        </div>

                    </div>

                ))

            }

        </div>

    );
};

export default BookingStats;