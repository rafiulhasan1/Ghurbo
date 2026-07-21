import { useState } from "react";

import usersData from "../../data/users.json";
import Swal from "sweetalert2";
import UserDetailsModal from "../../Components/Admin/UserDetailsModal";
import UserStats from "../../Components/Admin/UserStats";
import UserFilter from "../../Components/Admin/UserFilter";
import UserTable from "../../Components/Admin/UserTable";

const ManageUsers = () => {

    const [users, setUsers] = useState(usersData);

    const [selectedUser, setSelectedUser] = useState(null);

    const [search, setSearch] = useState("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleView = (user) => {

        setSelectedUser(user);

    };

    const handleRoleChange = (id) => {

        const updated = users.map((user) =>

            user.id === id

                ? {
                    ...user,
                    role: user.role === "Admin"
                        ? "User"
                        : "Admin",
                }

                : user

        );

        setUsers(updated);

        Swal.fire({

            icon: "success",

            title: "Role Updated",

            timer: 1500,

            showConfirmButton: false,

        });

    };

    const handleStatusChange = (id) => {

        const updated = users.map((user) =>

            user.id === id

                ? {
                    ...user,
                    status:
                        user.status === "Active"
                            ? "Blocked"
                            : "Active",
                }

                : user

        );

        setUsers(updated);

        Swal.fire({

            icon: "success",

            title: "Status Updated",

            timer: 1500,

            showConfirmButton: false,

        });

    };

    const handleDelete = (id) => {

        Swal.fire({

            title: "Delete User?",

            text: "This action cannot be undone.",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Delete",

        }).then((result) => {

            if (result.isConfirmed) {

                setUsers(users.filter(user => user.id !== id));

                Swal.fire({

                    icon: "success",

                    title: "User Deleted",

                    timer: 1500,

                    showConfirmButton: false,

                });

            }

        });

    };

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

                onView={handleView}

                onRoleChange={handleRoleChange}

                onStatusChange={handleStatusChange}

                onDelete={handleDelete}

            />

            <UserDetailsModal

                user={selectedUser}

                onClose={() => setSelectedUser(null)}

            />

        </div>

    );

};

export default ManageUsers;