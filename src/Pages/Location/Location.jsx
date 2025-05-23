import { Barner } from '../../Components/Barner/Barner';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Navv } from '../../Components/Navv/Navv';
import Styles from './Location.module.css';

export const Location = () => {
  return (
    <div className={Styles.location}>
        <Header/>
        <Navv/>
        <div className={Styles.hero} id={Styles.hr}>
          <div className="container">
            <div className="row">
               <div className='col-lg-12'>
                  <h3 id={Styles.hh3}>
                      Location
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1 cursor-pointer">
                      <img src="/Images/bhome.png" className="h-[18px] w-[16px]" alt="Home Icon" />
                      <a href="/" className={Styles.blink}>
                          Home
                      </a>
                      </div>
                      <span className="mx-1 text-gray-400">/</span>
                      <div className="font-medium text-gray-800">Location</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.L}>
          <div className="container">
              <div className='text-center mb-5'>
                <h5 className='mb-[2rem]' id={Styles.h5}>Location</h5>
                <div id={Styles.sh}>Find Nearby Location</div>
              </div>
          </div>
          <div id={Styles.locationBox} className='container' >
            <h2 className={Styles.lag}>Lagos</h2>
            <div className="row">
               {/* box1 */}
              <div className="col-lg-4">
                <div className={Styles.lBox}>
                  <div className={Styles.lName}>
                    Ikeja
                  </div>

                  <div className={Styles.lLocation}>
                      <div className={Styles.hold}>
                        <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                      </div>
                          Adeniyi Jones
                        <br/>
                          Joel Ogunnaike Street
                    </div>

                    <div className={Styles.lLocation}>
                        <div className={Styles.hold}>
                          <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                        </div>
                          09152768912
                    </div>

                    <div className={Styles.btnWrap}>
                      <a href="" className={Styles.b}>
                        Book An Appointment
                      </a>
                      <a href="" className={Styles.b}>
                        Map
                      </a>
                    </div>
                </div>
              </div>
              {/* box2 */}
              <div className="col-lg-4">
                <div className={Styles.lBox}>
                  <div className={Styles.lName}>
                    Ikeja
                  </div>

                  <div className={Styles.lLocation}>
                      <div className={Styles.hold}>
                        <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                      </div>
                         Obafemi Awolowo Way
                        <br/>
                         Isaac John Street
                    </div>

                    <div className={Styles.lLocation}>
                        <div className={Styles.hold}>
                          <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                        </div>
                          09152768912
                    </div>

                    <div className={Styles.btnWrap}>
                      <a href="" className={Styles.b}>
                        Book An Appointment
                      </a>
                      <a href="" className={Styles.b}>
                        Map
                      </a>
                    </div>
                </div>
              </div>
               {/* box3 */}
              <div className="col-lg-4">
                <div className={Styles.lBox}>
                  <div className={Styles.lName}>
                    Lekki
                  </div>

                  <div className={Styles.lLocation}>
                      <div className={Styles.hold}>
                        <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                      </div>
                        Admiralty Way
                        <br/>
                         Dr. Babatunde Ayeni Street
                  </div>

                    <div className={Styles.lLocation}>
                        <div className={Styles.hold}>
                          <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                        </div>
                          09152768912
                    </div>

                    <div className={Styles.btnWrap}>
                      <a href="" className={Styles.b}>
                        Book An Appointment
                      </a>
                      <a href="" className={Styles.b}>
                        Map
                      </a>
                    </div>
                </div>
              </div>
              <div className="container">
                 <h2 className={Styles.lag}>Abuja</h2>
                 <div className="row">
                    {/* box4 */}
                      <div className="col-lg-4">
                        <div className={Styles.lBox}>
                          <div className={Styles.lName}>
                             Maitama
                          </div>

                          <div className={Styles.lLocation}>
                              <div className={Styles.hold}>
                                <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                              </div>
                                Aso Drive
                                <br/>
                                Gana Street
                            </div>

                            <div className={Styles.lLocation}>
                                <div className={Styles.hold}>
                                  <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                                </div>
                                  09152768912
                            </div>

                            <div className={Styles.btnWrap}>
                              <a href="" className={Styles.b}>
                                Book An Appointment
                              </a>
                              <a href="" className={Styles.b}>
                                Map
                              </a>
                            </div>
                        </div>
                      </div>

                      {/* box5 */}
                      <div className="col-lg-4">
                        <div className={Styles.lBox}>
                          <div className={Styles.lName}>
                            Asokoro
                          </div>

                          <div className={Styles.lLocation}>
                              <div className={Styles.hold}>
                                <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                              </div>
                                Addis Ababa Crescent
                                <br/>
                                Thomas Sankara Street
                            </div>

                            <div className={Styles.lLocation}>
                                <div className={Styles.hold}>
                                  <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                                </div>
                                  09152768912
                            </div>

                            <div className={Styles.btnWrap}>
                              <a href="" className={Styles.b}>
                                Book An Appointment
                              </a>
                              <a href="" className={Styles.b}>
                                Map
                              </a>
                            </div>
                        </div>
                      </div>

                       {/* box6 */}
                      <div className="col-lg-4">
                        <div className={Styles.lBox}>
                          <div className={Styles.lName}>
                           Gwarimpa
                          </div>

                          <div className={Styles.lLocation}>
                              <div className={Styles.hold}>
                                <img src="/Images/loc.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                              </div>
                                Ahmadu Bello Way
                                <br/>
                                7th Avenue
                            </div>

                            <div className={Styles.lLocation}>
                                <div className={Styles.hold}>
                                  <img src="/Images/pr.png" className='h-[10px] mr-[10px]' id={Styles.lIcon}  alt="" />
                                </div>
                                  09152768912
                            </div>

                            <div className={Styles.btnWrap}>
                              <a href="" className={Styles.b}>
                                Book An Appointment
                              </a>
                              <a href="" className={Styles.b}>
                                Map
                              </a>
                            </div>
                        </div>
                      </div>


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
