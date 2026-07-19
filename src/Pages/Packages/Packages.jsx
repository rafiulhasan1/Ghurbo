import { useEffect, useState } from "react";
import TourCard from "../../Components/Tour/TourCard";
import toursData from "../../data/tours.json";

const Packages = () => {

    // const [tours, setTours] = useState([]);

    // useEffect(() => {
    //     fetch("/tours.json")
    //         .then(res => res.json())
    //         .then(data => setTours(data));
    // }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            {/* Heading */}

            <div className="text-center mb-12">

                <p className="uppercase tracking-[4px] text-sky-600 text-sm font-semibold">
                    Explore Bangladesh
                </p>

                <h2 className="text-4xl font-bold mt-3">
                    Tour Packages
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Discover the most beautiful places in Bangladesh with our
                    affordable and carefully planned tour packages.
                </p>

            </div>

            {/* Cards */}

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {
                    toursData.map(tour => (
                        <TourCard
                            key={tour.id}
                            tour={tour}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default Packages;