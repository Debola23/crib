import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { Navv } from '../../Components/Navv/Navv'
import { Barner } from '../../Components/Barner/Barner'
import Styles from './Services.module.css'





export const Services = () => {


  return (
    <div className={Styles.serve}>
        <Header/>
        <Navv/>
        <div className={Styles.hero} id={Styles.hr}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 id={Styles.hh3}>
                            What We Do
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1 cursor-pointer">
                            <img src="/Images/bhome.png" className="h-[18px] w-[16px]" alt="Home Icon" />
                            <a href="/" className={Styles.blink}>
                                Home
                            </a>
                            </div>
                            <span className="mx-1 text-gray-400">/</span>
                            <div className="font-medium text-gray-800">Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mb-[6rem]">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div id={Styles.serviceImg}>
                        <img src="/Images/serveimg.jpg" className={Styles.sImg} alt="" />
                    </div>
                </div>
                <div className="col lg 7 align-self-center">
                    <div className='' id={Styles.textS}>
                        <div className={Styles.ktext}>
                            <h2 className={Styles.kh2}> 
                                The Leading Real Estate Rental Marketplace.
                            </h2>
                            <p id={Styles.abtp1}>
                                Over 3,000 people work for us in more than 5 countries, helping us
                                attain global coverage, combined with specialist services
                            </p>
                            <div className="" id={Styles.abtp1}>
                                At Cribs, we’re more than just a real estate brand we’re your trusted partner in finding 
                                the perfect place to call home. With years of experience and a passion for property, our
                                team blends market expertise with a personal touch to help you navigate buying, selling, 
                                or renting with confidence. Whether you’re looking for modern apartments, luxury estates,
                                or investment opportunities, we’re committed to delivering exceptional service, honest advice,
                                and results that exceed expectations.
                            </div>
                            <div className='mt-[3rem]'>
                                <a href="#" className="bg-red-600 text-white font-medium px-6 py-4 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                                    id={Styles.ex} >
                                    Explore Properties <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.oServices}> 
            <div className='text-center mb-5'>
                <h5 className='mb-[2rem]' id={Styles.h5}>Services</h5>
                <div id={Styles.sh}>Our Core Services</div>
            </div>
            <div className='container mt-[3rem]'>
                <div className='row justify-content-center'>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/pm.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Property Management</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/mg.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Mortgage Services</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/support.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Mortgage Services</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/buyh.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Home Buying</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/sellh.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Home Selling</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={Styles.propertyCard}>
                            <div className={Styles.iconWrapper}>
                                <img src="/Images/escrow.png" alt="" className={Styles.ssImg} />
                            </div>
                            <h3>Escrow Services</h3>
                            <p>
                                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Barner/>
       <Footer/>
    </div>
  )
}
