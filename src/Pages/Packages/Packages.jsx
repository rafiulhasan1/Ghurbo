import { useMemo, useState } from "react";
import TourCard from "../../Components/Tour/TourCard";
import SearchBar from "../../Components/Tour/SearchBar";
import toursData from "../../data/tours.json";
import CategoryFilter from "../../Components/Tour/CategoryFilter";
import SortDropdown from "../../Components/Tour/SortDropdown";

const Packages = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    const [searchTerm, setSearchTerm] = useState("");

    const filteredTours = useMemo(() => {
        let tours = toursData.filter((tour) => {
            const matchesSearch =
                tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.location.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" ||
                tour.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        if (sortBy === "low-high") {
            tours.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "high-low") {
            tours.sort((a, b) => b.price - a.price);
        }

        if (sortBy === "rating") {
            tours.sort((a, b) => b.rating - a.rating);
        }

        return tours;
    }, [searchTerm, selectedCategory, sortBy]);

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

            {/* Search */}
            <div className="mb-8">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 my-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Category */}

                    <div>
                        <label className="text-sm font-semibold text-gray-500 mb-2 block">
                            🏖 Category
                        </label>

                        <CategoryFilter
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </div>

                    {/* Sort */}

                    <div>
                        <label className="text-sm font-semibold text-gray-500 mb-2 block">
                            💰 Sort By
                        </label>

                        <SortDropdown
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                    </div>

                    {/* Reset */}

                    <div className="flex items-end">

                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All");
                                setSortBy("default");
                            }}
                            className="w-full h-12 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg ">
                            🔄 Reset Filters
                        </button>

                    </div>

                </div>

            </div>

            {/* No Result */}
            {filteredTours.length === 0 ? (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold">
                        No tours found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Try another keyword.
                    </p>
                </div>
            ) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            tour={tour}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Packages;