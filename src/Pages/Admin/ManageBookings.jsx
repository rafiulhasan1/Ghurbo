import { useState } from "react";
import bookingsData from "../../data/bookings.json";
import BookingTable from "../../Components/Admin/BookingTable";
import BookingStats from "../../Components/Admin/BookingStats";
import BookingFilter from "../../Components/Admin/BookingFilter";
import Swal from "sweetalert2";
import BookingDetailsModal from "../../Components/Admin/BookingDetailsModal";

const ManageBookings = () => {

    const [selectedBooking, setSelectedBooking] = useState(null);

    const [bookings, setBookings] = useState(bookingsData);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const filteredBookings = bookings.filter((booking) => {

        const matchSearch =
            booking.userName.toLowerCase().includes(search.toLowerCase()) ||
            booking.tourName.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            status === "All" || booking.status === status;

        return matchSearch && matchStatus;
    });

    const handleConfirm = (id) => {

        const updated = bookings.map((booking) =>
            booking.id === id
                ? { ...booking, status: "Confirmed" }
                : booking
        );

        setBookings(updated);

        Swal.fire({
            icon: "success",
            title: "Booking Confirmed",
            timer: 1500,
            showConfirmButton: false,
        });

    };

    const handleCancel = (id) => {

        Swal.fire({
            title: "Cancel Booking?",
            text: "This booking will be cancelled.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {

            if (result.isConfirmed) {

                const updated = bookings.map((booking) =>
                    booking.id === id
                        ? { ...booking, status: "Cancelled" }
                        : booking
                );

                setBookings(updated);

                Swal.fire({
                    icon: "success",
                    title: "Booking Cancelled",
                    timer: 1500,
                    showConfirmButton: false,
                });

            }

        });

    };

    const handleView = (booking) => {
        setSelectedBooking(booking);
    };

    return (

        <div>

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    Manage Bookings

                </h1>

                <p className="text-gray-500 mt-2">

                    View and manage all customer bookings.

                </p>

            </div>

            {/* Stats */}

            <BookingStats bookings={bookings} />

            {/* Search & Filter */}

            <BookingFilter

                search={search}
                setSearch={setSearch}

                status={status}
                setStatus={setStatus}

            />

            {/* Table */}

            <BookingTable

                bookings={filteredBookings}

                onView={handleView}

                onConfirm={handleConfirm}

                onCancel={handleCancel}

            />
            <BookingDetailsModal

                booking={selectedBooking}

                onClose={() => setSelectedBooking(null)}

            />

        </div>

    );
};

export default ManageBookings;