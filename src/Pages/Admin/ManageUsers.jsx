import { useState } from "react";

import usersData from "../../data/users.json";

import UserStats from "../../Components/Admin/UserStats";
import UserFilter from "../../Components/Admin/UserFilter";
import UserTable from "../../Components/Admin/UserTable";

const ManageUsers = () => {

    const [users] = useState(usersData);

    const [search, setSearch] = useState("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    Manage Users

                </h1>

                <p className="text-gray-500 mt-2">

                    View and manage registered users.

                </p>

            </div>

            <UserStats users={users} />

            <UserFilter
                search={search}
                setSearch={setSearch}
            />

            <UserTable
                users={filteredUsers}
                onView={() => {}}
                onRoleChange={() => {}}
                onStatusChange={() => {}}
                onDelete={() => {}}
            />

        </div>

    );

};

export default ManageUsers;