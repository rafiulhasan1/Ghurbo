import { FaEdit, FaTrash } from "react-icons/fa";

const TourTable = ({ tours, onEdit , onDelete }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <table className="w-full">

                <thead className="bg-sky-600 text-white">

                    <tr>

                        <th className="p-4 text-left">Image</th>
                        <th className="p-4 text-left">Tour</th>
                        <th className="p-4 text-left">Location</th>
                        <th className="p-4 text-left">Price</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {tours.map((tour) => (

                        <tr
                            key={tour.id}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="p-4">

                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-20 h-14 rounded-lg object-cover"
                                />

                            </td>

                            <td className="p-4 font-semibold">
                                {tour.title}
                            </td>

                            <td className="p-4">
                                {tour.location}
                            </td>

                            <td className="p-4">
                                ৳ {tour.discountPrice}
                            </td>

                            <td className="p-4">

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                    Active

                                </span>

                            </td>

                            <td className="p-4">

                                <div className="flex justify-center gap-3">

                                    <button title="Edit Tour" onClick={() => onEdit(tour)} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">

                                        <FaEdit />

                                    </button>

                                    <button title="Delete Tour" onClick={() => onDelete(tour.id)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">

                                        <FaTrash />

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

export default TourTable;