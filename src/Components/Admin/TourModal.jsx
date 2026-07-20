const TourModal = ({
    isOpen,
    onClose,
    onSubmit,
    formData,
    setFormData,
}) => {

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-3xl font-bold">
                        {formData.title ? "Edit Tour" : "Add New Tour"}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl"
                    >
                        ✕
                    </button>

                </div>

                <form
                    onSubmit={onSubmit}
                    className="grid md:grid-cols-2 gap-5"
                >

                    <input
                        type="text"
                        name="title"
                        placeholder="Tour Name"
                        value={formData.title}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                        required
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                        required
                    />

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        className="border rounded-xl p-3"
                    />

                    <textarea
                        name="description"
                        rows="5"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border rounded-xl p-3 md:col-span-2"
                    />

                    <div className="md:col-span-2 flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700"
                        >
                            Save Tour
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default TourModal;