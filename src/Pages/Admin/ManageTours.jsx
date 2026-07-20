import { useState } from "react";
import TourTable from "../../Components/Admin/TourTable";
import toursData from "../../data/tours.json";

const ManageTours = () => {
    const [search, setSearch] = useState("");

    const filteredTours = toursData.filter((tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            {/* Header */}

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Manage Tours
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Add, edit and manage all tour packages.
                    </p>

                </div>

                <button className="mt-5 md:mt-0 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold">

                    + Add New Tour

                </button>

            </div>

            {/* Search */}

            <input
                type="text"
                placeholder="Search Tour..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-96 border rounded-xl px-4 py-3 mb-8"
            />

            <TourTable tours={filteredTours} />

        </div>
    );
};

export default ManageTours;