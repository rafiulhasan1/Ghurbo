import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-24">

      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-extrabold text-sky-400">
              GHURBO
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Discover Bangladesh's most beautiful destinations with trusted
              guides and unforgettable travel experiences.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center">
                <FaFacebookF />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center">
                <FaInstagram />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center">
                <FaLinkedinIn />
              </button>

              <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center">
                <FaYoutube />
              </button>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/">Home</Link>

              <Link to="/packages">Packages</Link>

              <Link to="/destinations">Destinations</Link>

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Support
            </h3>

            <div className="flex flex-col gap-4">

              <Link>FAQ</Link>

              <Link>Privacy Policy</Link>

              <Link>Terms & Conditions</Link>

              <Link>Help Center</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <p className="flex gap-3 items-center">
                <FaLocationDot />
                Dhaka, Bangladesh
              </p>

              <p className="flex gap-3 items-center">
                <FaPhone />
                +8801304260174
              </p>

              <p className="flex gap-3 items-center">
                <MdEmail />
                support@ghurbo.com
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 GHURBO. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-3 md:mt-0">
            Made with ❤️ in Bangladesh
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;