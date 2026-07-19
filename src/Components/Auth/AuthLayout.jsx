import travelImage from "../../assets/auth/login-banner.jpg";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* Left Side */}

        <div className="hidden md:block relative">

          <img
            src={travelImage}
            className="w-full h-full object-cover"
            alt="Travel"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-10">

            <h2 className="text-4xl font-bold text-white">
              Explore Bangladesh
            </h2>

            <p className="mt-4 text-white/90">
              Discover beautiful destinations and unforgettable adventures with GHURBO.
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-md">

            <h1 className="text-4xl font-bold text-center text-slate-800">
              {title}
            </h1>

            <p className="text-center text-gray-500 mt-3">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AuthLayout;