import categories from "../../data/categories.json";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
        select
    select-bordered
    w-full
    rounded-xl
    bg-gray-50
    border-gray-200
    focus:border-sky-500
    focus:outline-none
    focus:ring-2
    focus:ring-sky-200
      "
        >
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;