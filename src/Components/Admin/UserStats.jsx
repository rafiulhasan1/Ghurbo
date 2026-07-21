import {
    FaUsers,
    FaUserShield,
    FaUserCheck,
    FaUserSlash,
} from "react-icons/fa";

const UserStats = ({ users }) => {

    const total = users.length;

    const admins = users.filter(
        user => user.role === "Admin"
    ).length;

    const active = users.filter(
        user => user.status === "Active"
    ).length;

    const blocked = users.filter(
        user => user.status === "Blocked"
    ).length;

    const stats = [

        {
            title: "Total Users",
            value: total,
            icon: <FaUsers />,
            color: "bg-sky-500"
        },

        {
            title: "Admins",
            value: admins,
            icon: <FaUserShield />,
            color: "bg-indigo-500"
        },

        {
            title: "Active",
            value: active,
            icon: <FaUserCheck />,
            color: "bg-green-500"
        },

        {
            title: "Blocked",
            value: blocked,
            icon: <FaUserSlash />,
            color: "bg-red-500"
        },

    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            {
                stats.map((item, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
                    >

                        <div>

                            <p className="text-gray-500">
                                {item.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {item.value}
                            </h2>

                        </div>

                        <div className={`${item.color} text-white p-4 rounded-xl text-2xl`}>

                            {item.icon}

                        </div>

                    </div>

                ))
            }

        </div>

    );

};

export default UserStats;