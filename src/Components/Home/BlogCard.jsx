import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition">

      <img
        src={blog.image}
        className="h-60 w-full object-cover duration-500 group-hover:scale-110"
        alt={blog.title}
      />

      <div className="p-6">

        <span className="rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-600">
          {blog.category}
        </span>

        <h2 className="mt-5 text-2xl font-bold">
          {blog.title}
        </h2>

        <p className="mt-3 text-gray-500">
          {blog.date}
        </p>

        <button className="mt-6 flex items-center gap-3 text-sky-600 font-semibold">

          Read More

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
};

export default BlogCard;