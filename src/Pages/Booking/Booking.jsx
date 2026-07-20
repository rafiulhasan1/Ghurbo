import { useParams } from "react-router-dom";
import toursData from "../../data/tours.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import BookingForm from "../../Components/Booking/BookingForm";
import BookingSummary from "../../Components/Booking/BookingSummary";

const Booking = () => {

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const tour = toursData.find(
        (item) => item.id === Number(id)
    );

    if (!tour) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-red-500">
                    Tour Not Found
                </h2>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <div className="mb-10">

                <h1 className="text-4xl font-bold">
                    Complete Your Booking
                </h1>

                <p className="text-gray-500 mt-2">
                    Fill in your traveler information to confirm your tour.
                </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">

                    <BookingForm
                        user={user}
                        tour={tour}
                        adults={adults}
                        setAdults={setAdults}
                        children={children}
                        setChildren={setChildren}
                    />

                </div>

                <BookingSummary
                    tour={tour}
                    adults={adults}
                    children={children}
                />

            </div>

        </section>
    );
};

export default Booking;