const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
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
      <option value="default">Default</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="rating">Highest Rating</option>
    </select>
  );
};

export default SortDropdown;