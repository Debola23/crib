import { Header } from '../../Components/Header/Header';
import { Navv } from '../../Components/Navv/Navv';
import { Scroll } from '../../Components/Scroll/Scroll';
import { Footer } from '../../Components/Footer/Footer';
import Styles from './Properties.module.css';
import { Searchbox } from './SearchBox/Searchbox';
import { useState } from "react";
import { Pagination } from '../../Components/Pagination/Pagination';
import { Barner2 } from '../../Components/Barner/Barner2';

const houses = [
  {
    id: 1,
    type: "house",
    location: "Lekki Admiralty Way, Lagos",
    bedrooms: "5",
    image: "/Images/residency2.jpg",
    title: "FULLY DETACHED DUPLEX",
    status: "SALE",
    size: "5450 Square Ft",
    bath: "6"
  },
  {
    id: 2,
    type: "apartment",
    location: "Ikeja Adeniyi Jones, Lagos",
    bedrooms: "4",
    image: "/Images/house1.jpg",
    title: "FOUR FLAT APARTMENT",
    status: "RENT",
    size: "3450 Square Ft",
    bath: "4"
  },
  {
    id: 3,
    type: "duplex",
    location: "Gwarimpa 7th Avenue, Abuja",
    bedrooms: "6",
    image: "/Images/house2.jpg",
    title: "AUTOMATIC FULLY DETACHED DUPLEX",
    status: "SALE",
    size: "7450 Square Ft",
    bath: "8"
  },
  {
    id: 4,
    type: "land",
    location: "Ajah Joel Ogunnaike, Lagos",
    image: "/Images/land.jpg",
    title: "LAND",
    status: "SALE",
    size: "11,450 Square Ft"
  },
  {
    id: 5,
    type: "duplex",
    location: "Ikoyi 7th Avenue, Lagos",
    bedrooms: "6",
    image: "/Images/property7.jpeg",
    title: "HIGH GARDENS ESTATE",
    status: "RENT",
    size: "6450 Square Ft",
    bath: "8"
  },
  {
    id: 6,
    type: "duplex",
    location: "Maitama Aso Drive, Abuja",
    bedrooms: "5",
    image: "/Images/residency3.jpg",
    title: "ROYAL MARBLE DETACHED DUPLEX",
    status: "SALE",
    size: "4450 Square Ft",
    bath: "5"
  },
  {
    id: 7,
    type: "apartment",
    location: "Ikeja Obafemi Awolowo Way, Lagos",
    bedrooms: "3",
    image: "/Images/residency5.jpg",
    title: "GRAND DALE APARTMENT",
    status: "RENT",
    size: "1450 Square Ft",
    bath: "2"
  },
  {
    id: 8,
    type: "duplex",
    location: "Gwarimpa 7th Avenue, Abuja",
    bedrooms: "6",
    image: "/Images/house3.jpg",
    title: "AUTOMATIC FULLY DETACHED DUPLEX",
    status: "SALE",
    size: "7450 Square Ft",
    bath: "8"
  },
  {
    id: 9,
    type: "house",
    location: "Gwarimpa 7th Avenue, Abuja",
    bedrooms: "6",
    image: "/Images/house4.jpg",
    title: "AUTOMATIC FULLY DETACHED DUPLEX",
    status: "SALE",
    size: "7450 Square Ft",
    bath: "8"
  },
  {
    id: 10,
    type: "house",
    location: "Gwarimpa 7th Avenue, Abuja",
    bedrooms: "6",
    image: "/Images/house5.webp",
    title: "AUTOMATIC FULLY DETACHED DUPLEX",
    status: "SALE",
    size: "7450 Square Ft",
    bath: "8"
  },
  {
    id: 11,
    type: "land",
    location: "Gwarimpa 7th Avenue, Abuja",
    image: "/Images/land2.jpeg",
    title: "LAND",
    status: "SALE",
    size: "7450 Square Ft"
  },
  {
    id: 12,
    type: "land",
    location: "Gwarimpa 7th Avenue, Abuja",
    image: "/Images/land3.jpg",
    title: "LAND",
    status: "SALE",
    size: "7450 Square Ft"
  },
];

export const Properties = () => {
  const [filtered, setFiltered] = useState(houses);

  const handleFilter = (filters) => {
    const filteredList = houses.filter((property) => {
      const typeMatch =
        !filters.type || property.type.toLowerCase() === filters.type.toLowerCase();
      const locationMatch =
        !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase());
      const bedroomMatch =
        !filters.bedrooms || property.bedrooms === filters.bedrooms;

      return typeMatch && locationMatch && bedroomMatch;
    });

    setFiltered(filteredList);
  };

  return (
    <div className={Styles.Properties}>
      <Header />
      <Navv />
      <div className={Styles.hero} id={Styles.hr}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3 id={Styles.hh3}>Properties</h3>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-1 cursor-pointer">
                  <img src="/Images/bhome.png" className="h-[18px] w-[16px]" alt="Home Icon" />
                  <a href="/" className={Styles.blink}>Home</a>
                </div>
                <span className="mx-1 text-gray-400">/</span>
                <div className="font-medium text-gray-800">Properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.PropertyBox}>
        <div className="px-4 py-8">
          <Searchbox onFilter={handleFilter} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {filtered.length > 0 ? (
              filtered.map((property) => (
                <div
                  key={property.id}
                  className="border overflow-hidden shadow-md"
                  id={Styles.houseCard}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p id={Styles.badge}>{property.status}</p>
                    <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                    <p className='mt-3'>{property.location}</p>
                    {property.type !== "land" ? (
                      <p className="text-sm text-gray-600 capitalize">
                        {property.bedrooms} Bedrooms • {property.size} • {property.bath} Bathrooms
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600 capitalize">
                        {property.size}
                      </p>
                    )}
                    <div className={Styles.viewProperty}>
                      <a href="" id={Styles.houseBtn}>
                        View Property
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No properties match your search.
              </p>
            )}
          </div>
        </div>
      </div>
      <Scroll />
      <Pagination />
      <Barner2 />
      <Footer />
    </div>
  );
};
