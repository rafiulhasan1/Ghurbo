import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                <Logo />

                <div className="hidden lg:flex items-center gap-8">
                    <NavLinks />
                </div>

                <div className="flex items-center gap-4">

                    <button className="hidden md:block text-gray-600 hover:text-sky-600">
                        🔍
                    </button>

                    <Link
                        to="/login"
                        className="font-medium hover:text-sky-600"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="bg-sky-600 hover:bg-sky-700 transition px-5 py-2.5 rounded-xl text-white"
                    >
                        Get Started
                    </Link>

                </div>

            </nav>
        </header>
    );
};

export default Navbar;