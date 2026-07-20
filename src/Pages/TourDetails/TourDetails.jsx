import { useParams } from "react-router-dom";
import toursData from "../../data/tours.json";

import HeroSection from "../../Components/TourDetails/HeroSection";
import TourInfo from "../../Components/TourDetails/TourInfo";
import BookingCard from "../../Components/TourDetails/BookingCard";
import DescriptionSection from "../../Components/TourDetails/DescriptionSection";
import IncludedSection from "../../Components/TourDetails/IncludedSection";
import ExcludedSection from "../../Components/TourDetails/ExcludedSection";
import Itinerary from "../../Components/TourDetails/Itinerary";
import Gallery from "../../Components/TourDetails/Gallery";
import SimilarTours from "../../Components/TourDetails/SimilarTours";

const TourDetails = () => {

    const { id } = useParams();

    const tour = toursData.find(
        (item) => item.id === Number(id)
    );

    if (!tour) {

        return (
            <h1 className="text-center mt-20 text-4xl">
                Tour Not Found
            </h1>
        );

    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* Hero */}
            <HeroSection tour={tour} />

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                {/* Left Side */}
                <div className="lg:col-span-2 space-y-8">

                    <TourInfo tour={tour} />

                    <DescriptionSection
                        description={tour.description}
                    />

                    <IncludedSection
                        included={tour.included}
                    />

                    <ExcludedSection
                        excluded={tour.excluded}
                    />

                    <Itinerary
                        itinerary={tour.itinerary}
                    />

                    <Gallery
                        gallery={tour.gallery}
                    />

                </div>

                {/* Right Side */}
                <div>

                    <BookingCard
                        tour={tour}
                    />

                </div>

            </div>

            {/* Similar Tours */}

            <SimilarTours
                tours={toursData}
                currentTour={tour}
            />

        </div>
    );

};

export default TourDetails;