import Styles from './Feature.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';





const listings = [
    {
      title: ' FULLY DETACHED DUPLEX',
      price: 670000000,
      location: 'MAGODO PHASE2 GRA ESTATE',
      beds: 5,
      baths: 8,
      size: 3450,
      image: '/Images/house1.jpg',
    },
    {
      title: 'FULLY DETACHED DUPLEX',
      price: 450000000,
      location: 'Ajah, Lekki',
      beds: 5,
      baths: 5,
      size: 3450,
      image: '/Images/house2.jpg',
    },
    {
      title: 'Automated Fully Detached Duplex',
      price: 590000000,
      location: 'Ikoyi, Lagos',
      beds: 6,
      baths: 7,
      size: 3450,
      image: '/Images/residency2.jpg',
    },
    {
        title: 'Royal Marble Detached Duplex',
        price: 349000000,
        location: 'Victoria Island, Lagos',
        beds: 4,
        baths: 5,
        size: 3450,
        image: '/Images/residency3.jpg',
      },
      {
        title: 'High Gardens Estate',
        price: 270000000,
        location: 'Alausa, Ikeja',
        beds: 5,
        baths: 7,
        size: 3450,
        image: '/Images/property7.jpeg',
      },
  ];
  



export const Feature = () => {


    
  return (
    <section className={Styles.feature}>
        <div className='text-center mb-2'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Properties</h5>
            <div id={Styles.sh}>Latest Listings</div>
        </div>
        <div className={Styles.listingbox}>
           <div className='container'>
                <div className="row">
                    <div className='' id={Styles.fbox}>
                      <div className="max-w-7xl mx-auto px-4 py-10">
                        <Swiper
                          modules={[Navigation]}
                          spaceBetween={30}
                          navigation
                          breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                          }}
                        >
                          {listings.map((item, idx) => (
                            <SwiperSlide key={idx}>
                              <div className=" overflow-hidden">
                                <div className="relative">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                  />
                                  <div className="absolute bottom-0 bg-black/60 text-white px-4 py-2 text-sm w-full">
                                    📍 {item.location}
                                  </div>
                                </div>
                                <div className="p-5">
                                  <div className="text-red-600 font-bold text-xl mb-2" id={Styles.num}>
                                    ${item.price.toLocaleString()}<span className="text-sm font-normal" ></span>
                                  
                                  </div>
                                  <a href="" id={Styles.fLink}>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2" id={Styles.h}>{item.title}</h3>
                                  </a>
                                  
                                  <p id={Styles.deet} className="text-gray-500 text-sm mb-4">Beautiful Huge Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                                  <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
                                    <div className="flex items-center gap-1"><FaBed /> {item.beds} Bedrooms</div>
                                    <div className="flex items-center gap-1"><FaBath /> {item.baths} Bathrooms</div>
                                    <div className="flex items-center gap-1"><FaRulerCombined /> {item.size} ft²</div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}
