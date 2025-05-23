import Styles from './Services.module.css';
import { Link } from 'react-router-dom';


export const Services = () => {

    const service = [
        {
          icon: "/Images/buyh.png",
          title: "",
          desc: "over 200 homes for sale available on the website, we can match you with a house you will want to call home.",
          button: "Explore Buying",
        },
        {
          icon: "/Images/renth.png",
          title: "",
          desc: "over 200 homes for sale available on the website, we can match you with a house you will want to call home.",
          button: "View Rentals",
        },
        {
          icon: "/Images/sellh.png",
          title: "",
          desc:"over 200 homes for sale available on the website, we can match you with a house you will want to call home.",
          button: "Start Selling",
      
        },
      ];

  return (
    <section className={Styles.service}>
        <div className='text-center'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Our Services</h5>
            <div id={Styles.sh}>Our Main Focus</div>
        </div>
        <div id={Styles.serviceBox}>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    {service.map((service, index) => (
                    <div key={index} className='col-lg-4 col-sm-6 col-12 mb-4' id={Styles.cd}>
                        <div className={Styles.card}>
                            <div className={Styles.firstContent}>
                                <img src={service.icon} alt={service.title} style={{ height:"6rem",  width: "6rem", marginBottom: "1rem" }} />
                                <h5 style={{ fontWeight: "bold" }}>{service.title}</h5>
                            </div>
                            <div className={Styles.secondContent}>       
                                <p id={Styles.sd}>
                                    {service.desc}
                                </p>
                               <Link to="/properties" id={Styles.sb} className={Styles.actionBtn}>
                                    <button>
                                        {service.button}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
