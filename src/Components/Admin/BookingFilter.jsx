const BookingFilter = ({
    search,
    setSearch,
    status,
    setStatus,
}) => {

    return (

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

            <input

                type="text"

                placeholder="Search booking..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="border rounded-xl px-4 py-3 w-full md:w-80"

            />

            <select

                value={status}

                onChange={(e)=>setStatus(e.target.value)}

                className="border rounded-xl px-4 py-3"

            >

                <option>All</option>

                <option>Pending</option>

                <option>Confirmed</option>

                <option>Cancelled</option>

            </select>

        </div>

    );

};

export default BookingFilter;