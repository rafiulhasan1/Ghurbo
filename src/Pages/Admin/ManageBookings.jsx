import { useState } from "react";
import bookingsData from "../../data/bookings.json";
import BookingTable from "../../Components/Admin/BookingTable";
import BookingStats from "../../Components/Admin/BookingStats";
import BookingFilter from "../../Components/Admin/BookingFilter";

const ManageBookings = () => {

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

                onView={() => { }}
                onConfirm={() => { }}
                onCancel={() => { }}

            />

        </div>

    );
};

export default ManageBookings;