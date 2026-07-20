import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const BookingForm = ({ user, tour, adults, setAdults, children, setChildren, travelDate, }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const booking = {
            id: Date.now(),
            tourId: tour.id,
            tourName: tour.title,
            image: tour.image,
            location: tour.location,
            duration: tour.duration,
            price: tour.discountPrice,
            adults,
            children,
            total:
                adults * tour.discountPrice +
                children * (tour.discountPrice * 0.5),
            userName: user.displayName,
            userEmail: user.email,
            bookingDate: new Date().toLocaleString(),
            status: "Pending",
        };

        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        existingBookings.push(booking);

        localStorage.setItem(
            "bookings",
            JSON.stringify(existingBookings)
        );

        navigate("/booking-success");
    };

    const totalPrice =
        adults * tour.discountPrice +
        children * (tour.discountPrice * 0.5);

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
                Traveler Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                    <input
                        defaultValue={user?.displayName || ""}
                        className="border rounded-xl p-3"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        defaultValue={user?.email || ""}
                        className="border rounded-xl p-3"
                        placeholder="Email"
                        readOnly
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border rounded-xl p-3"
                        required
                    />

                    <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="border rounded-xl p-3"
                        required
                    />

                    {/* Adults */}

                    <div>

                        <label className="block mb-2 font-semibold text-gray-700">
                            Adults
                        </label>

                        <div className="flex items-center justify-between border rounded-xl px-4 py-3">

                            <button
                                type="button"
                                onClick={() => setAdults(Math.max(1, adults - 1))}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-100 transition flex items-center justify-center"
                            >
                                <FaMinus />
                            </button>

                            <span className="text-xl font-bold">
                                {adults}
                            </span>

                            <button
                                type="button"
                                onClick={() => setAdults(adults + 1)}
                                className="w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition flex items-center justify-center"
                            >
                                <FaPlus />
                            </button>

                        </div>

                    </div>

                    {/* Children */}

                    <div>

                        <label className="block mb-2 font-semibold text-gray-700">
                            Children
                        </label>

                        <div className="flex items-center justify-between border rounded-xl px-4 py-3">

                            <button
                                type="button"
                                onClick={() => setChildren(Math.max(0, children - 1))}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-100 transition flex items-center justify-center"
                            >
                                <FaMinus />
                            </button>

                            <span className="text-xl font-bold">
                                {children}
                            </span>

                            <button
                                type="button"
                                onClick={() => setChildren(children + 1)}
                                className="w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition flex items-center justify-center"
                            >
                                <FaPlus />
                            </button>

                        </div>

                    </div>

                </div>

                <textarea
                    rows="5"
                    className="border rounded-xl p-3 w-full"
                    placeholder="Special Request"
                />
                <div className="flex items-start gap-3 mt-6">

                    <input
                        type="checkbox"
                        className="mt-1"
                        required
                    />

                    <p className="text-sm text-gray-600">

                        I agree to the Terms &
                        Conditions and Cancellation Policy.

                    </p>

                </div>
                <button
                    type="submit"
                    className="w-full mt-6 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    Confirm Booking
                </button>

            </form>

        </div>
    );
};

export default BookingForm;