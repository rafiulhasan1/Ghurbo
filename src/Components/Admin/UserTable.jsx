import {
    FaEye,
    FaUserShield,
    FaUserAlt,
    FaLock,
    FaUnlock,
    FaTrash,
} from "react-icons/fa";

import UserRoleBadge from "./UserRoleBadge";
import UserStatusBadge from "./UserStatusBadge";

const UserTable = ({
    users,
    onView,
    onRoleChange,
    onStatusChange,
    onDelete,
}) => {

    return (

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-sky-600 text-white">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                User
                            </th>

                            <th className="px-6 py-4 text-center">
                                Role
                            </th>

                            <th className="px-6 py-4 text-center">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            users.map((user) => (

                                <tr
                                    key={user.id}
                                    className="border-b hover:bg-sky-50 transition"
                                >

                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={user.photo}
                                                alt={user.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />

                                            <div>

                                                <h3 className="font-semibold">

                                                    {user.name}

                                                </h3>

                                                <p className="text-sm text-gray-500">

                                                    {user.email}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="text-center">

                                        <UserRoleBadge
                                            role={user.role}
                                        />

                                    </td>

                                    <td className="text-center">

                                        <UserStatusBadge
                                            status={user.status}
                                        />

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            {/* View */}

                                            <button
                                                title="View"
                                                onClick={() => onView(user)}
                                                className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg"
                                            >
                                                <FaEye />
                                            </button>

                                            {/* Role */}

                                            <button
                                                title="Change Role"
                                                onClick={() => onRoleChange(user.id)}
                                                className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg"
                                            >
                                                {

                                                    user.role === "Admin"
                                                        ? <FaUserAlt />
                                                        : <FaUserShield />

                                                }
                                            </button>

                                            {/* Block / Unblock */}

                                            <button
                                                title={
                                                    user.status === "Active"
                                                        ? "Block User"
                                                        : "Unblock User"
                                                }
                                                onClick={() => onStatusChange(user.id)}
                                                className={`p-2 rounded-lg text-white ${
                                                    user.status === "Active"
                                                        ? "bg-yellow-500 hover:bg-yellow-600"
                                                        : "bg-green-500 hover:bg-green-600"
                                                }`}
                                            >

                                                {

                                                    user.status === "Active"
                                                        ? <FaLock />
                                                        : <FaUnlock />

                                                }

                                            </button>

                                            {/* Delete */}

                                            <button
                                                title="Delete User"
                                                onClick={() => onDelete(user.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default UserTable;