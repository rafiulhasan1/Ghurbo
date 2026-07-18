import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* <img
        src="/logo.png"
        alt="GHURBO"
        className="w-10 h-10"
      /> */}

      <div>
        <h2 className="text-2xl font-extrabold text-sky-600">
          GHURBO
        </h2>

        <p className="text-xs text-gray-500">
          Explore Bangladesh
        </p>
      </div>
    </Link>
  );
};

export default Logo;