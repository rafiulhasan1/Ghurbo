import { useState } from "react";
import Swal from "sweetalert2";
import TourTable from "../../Components/Admin/TourTable";
import TourModal from "../../Components/Admin/TourModal";
import toursData from "../../data/tours.json";

const ManageTours = () => {
    const [tours, setTours] = useState(toursData);

    const [search, setSearch] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        price: "",
        duration: "",
        category: "",
        image: "",
        description: "",
    });

    const [editingId, setEditingId] = useState(null);

    const handleEdit = (tour) => {
        setEditingId(tour.id);

        setFormData({
            title: tour.title,
            location: tour.location,
            price: tour.discountPrice,
            duration: tour.duration,
            category: tour.category || "",
            image: tour.image,
            description: tour.description || "",
        });

        setIsOpen(true);
    };

    const filteredTours = tours.filter((tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingId) {

            const updatedTours = tours.map((tour) =>
                tour.id === editingId
                    ? {
                        ...tour,
                        title: formData.title,
                        location: formData.location,
                        duration: formData.duration,
                        image: formData.image,
                        category: formData.category,
                        description: formData.description,
                        discountPrice: Number(formData.price),
                    }
                    : tour
            );

            setTours(updatedTours);

            Swal.fire({
                icon: "success",
                title: "Tour Updated Successfully",
                timer: 1500,
                showConfirmButton: false,
            });

        } else {

            const newTour = {
                id: Date.now(),
                title: formData.title,
                location: formData.location,
                duration: formData.duration,
                image: formData.image,
                category: formData.category,
                description: formData.description,
                discountPrice: Number(formData.price),
                status: "Active",
            };

            setTours([...tours, newTour]);

            Swal.fire({
                icon: "success",
                title: "Tour Added Successfully",
                timer: 1500,
                showConfirmButton: false,
            });
        }

        setEditingId(null);

        setFormData({
            title: "",
            location: "",
            price: "",
            duration: "",
            category: "",
            image: "",
            description: "",
        });

        setIsOpen(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this tour!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0284c7",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {

            if (result.isConfirmed) {

                const updatedTours = tours.filter((tour) => tour.id !== id);

                setTours(updatedTours);

                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Tour has been deleted.",
                    timer: 1500,
                    showConfirmButton: false,
                });

            }

        });
    };

    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Manage Tours

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Add, Edit & Delete Tours

                    </p>

                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl"
                >
                    + Add New Tour
                </button>

            </div>

            {/* Search */}

            <input
                type="text"
                placeholder="Search Tour..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-xl px-4 py-3 w-full md:w-96 mb-8"
            />

            {/* Table */}

            <TourTable tours={filteredTours} onEdit={handleEdit} onDelete={handleDelete} />

            {/* Modal */}

            <TourModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
            />

        </div>
    );
};

export default ManageTours;