import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto rounded-3xl bg-linear-to-r from-sky-600 to-cyan-500 text-white text-center px-8 py-20">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready For Your Next Adventure?
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-sky-100">
          Explore Bangladesh with trusted guides, affordable packages,
          and unforgettable travel experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/packages"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-sky-600 transition hover:bg-slate-100"
          >
            Explore Tours
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-sky-600"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTA;