import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Barner } from '../../Components/Barner/Barner';
import { Navv } from '../../Components/Navv/Navv';

import Styles from './KnowUs.module.css';

export const KnowUs = () => {
  return (
    <>
    <div className={Styles.knowUs}>
        <Header/>
        <Navv/>
        <div className={Styles.hero} id={Styles.hr}> 
            <div className="container">
                <div className="row">
                    <div className='col-lg-12'>
                        <h3 id={Styles.hh3}>
                            Know Us
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <img src="/Images/bhome.png" className="h-[18px] w-[18px]" alt="Home Icon" />
                                <a href="/" className={Styles.blink}>
                                    Home
                                </a>
                            </div>
                            <span className="mx-1 text-gray-400">/</span>
                            <div className="font-medium text-gray-800">Know Us</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mb-[4rem]">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div id={Styles.knowBox}>
                        <img src="/Images/knowimg.jpg" alt="" className={Styles.knowImg} />
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className={Styles.ktext}>
                    <h2 className={Styles.kh2}> 
                        The Leading Real Estate Rental Marketplace.
                    </h2>
                     <p id={Styles.abtp1}>
                        Over 3,000 people work for us in more than 5 countries, helping us
                        attain global coverage, combined with specialist services
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto py-8">
                        {/* Feature 1 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <i className="flaticon-home-2 text-red-500 text-xl">
                                    <img src="/Images/khome.png" alt="" className='h-[22px] w[22px]' />
                                </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}>Smart Home Design</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                            <i className="flaticon-mountain text-red-500 text-xl">
                                <img src="/Images/env.png" alt="" className='h-[22px] w[22px]' />
                            </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}>Beautiful Scene Around</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                            <i className="flaticon-lifestyle text-red-500 text-xl">
                                <img src="/Images/el.png" alt="" className='h-[22px] w[22px]' />
                            </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}>Exceptional Lifestyle</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                            <i className="flaticon-security text-red-500 text-xl">
                                <img src="/Images/security.png" alt="" className='h-[22px] w[22px]' />
                            </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}>Complete 24/7 Security</p>
                        </div>

                          {/* Feature 5 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                            <i className="flaticon-security text-red-500 text-xl">
                                <img src="/Images/bness.png" alt="" className='h-[22px] w[22px]' />
                            </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}> Business Centers</p>
                        </div>

                          {/* Feature 6 */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                            <i className="flaticon-security text-red-500 text-xl">
                                <img src="/Images/plg.png" alt="" className='h-[22px] w[22px]' />
                            </i>
                            </div>
                            <p className="text-gray-600 font-medium mb-0" id={Styles.knowP1}>Playgrounds & Parks Nearby</p>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="bg-red-600 text-white font-medium px-6 py-4 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                            id={Styles.ex} >
                            Explore Properties <span className="text-xl">→</span>
                        </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className='container' id={Styles.kn}>
            <section class="bg-white py-16 px-6 md:px-20">
                <div class="max-w-5xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6" id={Styles.kh2}>Know Us</h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8" id={Styles.knowP2}>
                        At <strong>Crib Realty</strong>, we don’t just build homes we build lifestyles.
                        With over a decade of experience in premium real estate development, our
                        mission is to create modern living spaces that balance comfort, design, and
                        sustainability. Every project we take on is guided by our passion for quality and
                        our commitment to customer satisfaction.
                    </p>
                    <div class="grid md:grid-cols-3 gap-[3.25rem] text-left mt-[3.5rem]">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">🏡 Our Vision</h3>
                            <p class="text-gray-600">
                            To be the most trusted name in real estate by redefining the living experience through innovation and excellence.
                            </p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">🌍 Our Mission</h3>
                            <p class="text-gray-600">
                            Deliver premium properties that inspire joy and elevate lifestyles while being environmentally responsible.
                            </p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">🤝 Our Promise</h3>
                            <p class="text-gray-600">
                            We stand by transparency, integrity, and personalized service ensuring you feel confident every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Barner/>
        <Footer/>
    </div>
    </>
  
  )
}
