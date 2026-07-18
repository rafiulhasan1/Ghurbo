import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold">
            🇧🇩 Explore Bangladesh
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Discover Your Next
            <span className="text-sky-600"> Adventure </span>
            with GHURBO
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Book unforgettable trips, explore breathtaking destinations,
            and create memories that last forever.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              className="bg-sky-600 text-white px-8 py-4 rounded-xl hover:bg-sky-700 transition"
            >
              Explore Tours
            </Link>

            <button className="border border-sky-600 text-sky-600 px-8 py-4 rounded-xl">
              Watch Video
            </button>

          </div>

        </div>

        <div>

          <img
            src="/hero.jpg"
            className="rounded-3xl shadow-xl"
            alt=""
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;