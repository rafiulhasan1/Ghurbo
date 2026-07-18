import blogs from "../../data/blogs.json";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";

const LatestBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">

      <SectionTitle
        subHeading="Travel Blog"
        heading="Latest Travel Articles"
        description="Discover travel stories, guides, and tips before planning your next adventure."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}

      </div>

    </section>
  );
};

export default LatestBlogs;