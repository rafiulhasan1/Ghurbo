import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* Right Side */}
        <div className="relative">

          {user ? (
            <>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-full hover:bg-gray-100 px-2 py-1 transition"
              >
                <img
                  src={user.photoURL || "https://i.pravatar.cc/150"}
                  alt="User"
                  className="w-11 h-11 rounded-full border-2 border-sky-500 object-cover"
                />

                <div className="hidden md:block text-left">
                  <h3 className="font-semibold text-gray-800">
                    {user.displayName || "User"}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-xl border overflow-hidden">

                  <div className="px-5 py-4 border-b">

                    <h3 className="font-semibold">
                      {user.displayName}
                    </h3>

                    <p className="text-sm text-gray-500 break-all">
                      {user.email}
                    </p>

                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                  >
                    <FaTachometerAlt />
                    Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
                  >
                    <FaUserCircle />
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-sky-600 px-6 py-2.5 font-medium text-white hover:bg-sky-700 transition"
            >
              Login
            </Link>
          )}

        </div>

      </nav>
    </header>
  );
};

export default Navbar;