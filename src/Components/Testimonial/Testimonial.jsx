import Styles from './Testimonial.module.css'
import Slider from "react-slick";
import { TestimonialData } from "../../mockData/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
          },
        ],
      };

  return (
    <section className={Styles.Testimonial}>
       <div className='text-center mb-5'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Our Testimonial</h5>
            <div id={Styles.sh}>Client's Feedback</div>
        </div>  
        <div id={Styles.tcard} className="max-w-6xl mx-auto ">
        <Slider {...settings}>
          {TestimonialData.map((item) => (
            <div key={item.id} className="px-4">
              <div className="bg-[#0b2c3d] text-white rounded-xl shadow-md p-8 flex flex-col items-center text-center h-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-white mb-4">{item.position}</p>
                <p className="text-white text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    </section>
   
  )
}
