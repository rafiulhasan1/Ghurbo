import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaMapMarkedAlt,
  FaClipboardList,
  FaUsers,
  FaCog,
  FaBars,
} from "react-icons/fa";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaChartPie />,
    },
    {
      name: "Manage Tours",
      path: "/admin/tours",
      icon: <FaMapMarkedAlt />,
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: <FaClipboardList />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside
      className={`${isOpen ? "w-72" : "w-24"
        } min-h-screen bg-sky-700 text-white transition-all duration-300`}
    >

      <div className="flex justify-between items-center p-6">

        {isOpen && (
          <h2 className="text-3xl font-bold">
            GHURBO
          </h2>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          <FaBars />
        </button>

      </div>

      <div className="px-3 space-y-2">

        {menu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center ${isOpen ? "gap-4 px-4" : "justify-center"
              } py-3 rounded-xl transition ${isActive
                ? "bg-white text-sky-700"
                : "hover:bg-sky-600"
              }`
            }
          >

            <span className="text-xl">
              {item.icon}
            </span>

            {isOpen && (
              <span className="font-medium">
                {item.name}
              </span>
            )}

          </NavLink>

        ))}

      </div>

    </aside>
  );
};

export default AdminSidebar;