import { useState } from "react";


export const Searchbox = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    bedrooms: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="w-full bg-white border shadow-md px-4 md:px-10 py-6">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="w-full">
          <select
            name="type"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none"
          >
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="duplex">Duplex</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="w-full">
          <select
            name="location"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none"
          >
            <option value="">Location</option>
            <option value="lekki">Lekki</option>
            <option value="ikeja">Ikeja</option>
            <option value="abuja">Abuja</option>
            <option value="ajah">Ajah</option>
          </select>
        </div>

        <div className="w-full">
          <select
            name="bedrooms"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none"
          >
            <option value="">Bedrooms</option>
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-[#E63946] text-white text-sm font-semibold py-3 px-4 rounded-md hover:bg-[#d12839] transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};