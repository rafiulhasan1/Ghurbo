const BookingDetailsModal = ({ booking, onClose }) => {
    if (!booking) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl w-full max-w-xl p-8 shadow-2xl">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        Booking Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl"
                    >
                        ×
                    </button>

                </div>

                <div className="space-y-4">

                    <div className="flex justify-between">
                        <span className="font-semibold">Customer</span>
                        <span>{booking.userName}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Email</span>
                        <span>{booking.email}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Tour</span>
                        <span>{booking.tourName}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Travel Date</span>
                        <span>{booking.travelDate}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Adults</span>
                        <span>{booking.adults}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Children</span>
                        <span>{booking.children}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span>৳ {booking.total.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Status</span>
                        <span>{booking.status}</span>
                    </div>

                </div>

                <div className="flex justify-end mt-8">

                    <button
                        onClick={onClose}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
};

export default BookingDetailsModal;