import { FaCheck, FaTimes, FaEye } from "react-icons/fa";
import BookingStatusBadge from "./BookingStatusBadge";

const BookingTable = ({
    bookings,
    onConfirm,
    onCancel,
    onView,
}) => {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">

            <table className="min-w-full">

                <thead className="bg-sky-600 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">User</th>

                        <th className="px-6 py-4 text-left">Tour</th>

                        <th className="px-6 py-4 text-left whitespace-nowrap">
                            Travel Date
                        </th>

                        <th className="px-6 py-4 text-center">
                            Guests
                        </th>

                        <th className="px-6 py-4 text-center">
                            Total
                        </th>

                        <th className="px-6 py-4 text-center">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {bookings.map((booking) => (

                        <tr
                            key={booking.id}
                            className="border-b hover:bg-sky-50 transition duration-200"
                        >

                            <td className="px-6 py-5">

                                <h3 className="font-semibold">

                                    {booking.userName}

                                </h3>

                                <p className="text-sm text-gray-500">

                                    {booking.email}

                                </p>

                            </td>

                            <td className="px-6 py-5">

                                {booking.tourName}

                            </td>

                            <td className="px-6 py-5 whitespace-nowrap">

                                {booking.travelDate}

                            </td>

                            <td className="px-6 py-5 text-center">

                                {booking.adults + booking.children}

                            </td>

                            <td className="px-6 py-5 text-center font-semibold">

                                ৳ {booking.total.toLocaleString()}

                            </td>

                            <td className="px-6 py-5 text-center">

                                <BookingStatusBadge
                                    status={booking.status}
                                />

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center gap-2">

                                    <button
                                        title="View"
                                        onClick={() => onView(booking)}
                                        className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
                                    >
                                        <FaEye />
                                    </button>

                                    <button
                                        title="Confirm"
                                        onClick={() => onConfirm(booking.id)}
                                        className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <FaCheck />
                                    </button>

                                    <button
                                        title="Cancel"
                                        onClick={() => onCancel(booking.id)}
                                        className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        <FaTimes />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default BookingTable;