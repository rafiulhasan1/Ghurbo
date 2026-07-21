const UserFilter = ({
    search,
    setSearch,
}) => {

    return (

        <div className="mb-8">

            <input

                type="text"

                placeholder="Search user by name or email..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                className="w-full md:w-96 border rounded-xl px-4 py-3"

            />

        </div>

    );

};

export default UserFilter;