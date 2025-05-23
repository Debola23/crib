import Styles from './Amenities.module.css'

export const Amenities = () => {
  return (
    <section className={Styles.aminities}>
        <div className='text-center mb-5'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Our Aminities</h5>
            <div id={Styles.sh}>Building Aminities</div>
        </div>
        <div id={Styles.aminitiesBox}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6' id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/carpark.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Parking Space</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6' id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/swimmingpool.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Swimming Pool</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/privatesec.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Private Security</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/medic.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Medical Center</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/gym.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>gym</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/drycleaner.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Dry Cleaner</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/playground.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Play Ground</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 col-6'  id={Styles.push}>
                      <div className={`${Styles.card} text-center text-black p-4 rounded-lg shadow-md transition duration-300 hover:bg-[#fff7f0]`}>
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#fff0e6] p-10 rounded-full inline-flex" id={Styles.aicon}>
                            <img src="/Images/library.png" alt="Parking" className="w-8 h-8" />
                          </div>
                        </div>
                        <h5 className="text-lg  mt-5 mb-2" id={Styles.adeet}>Library</h5>
                        <div id={Styles.arr} className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto bg-white hover:bg-[#ff6900] hover:text-white transition">
                          <img src="/Images/rightarrow.png" className={Styles.arr} alt="" />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
