const Gallery = ({ gallery }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Tour Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {gallery.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl group"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Gallery;