import Styles from './Abt.module.css'


export const Abt = () => {
  return (
    <section className={Styles.Abt}>
      
        <div className='container'>
            <div className='row'>
                {/* img side */}
                <div className='col-lg-6 align-self-center' id={Styles.imgSide}>
                    <img src="/Images/aboutimg.png" alt="" className='' id={Styles.abtimg}/>
                </div>
                {/* text side */}
                <div className='col-lg-6 ' id={Styles.textSide}>
                    <div id={Styles.hh}>
                        About us
                    </div>
                    <h2 id={Styles.abth1}>
                        Dream Living Spaces Setting New Building Standards
                    </h2>
                    <p id={Styles.abtp1}>
                        Over 3,000 people work for us in more than 5 countries, helping us
                         attain global coverage, combined with specialist services
                    </p>
                    <div className="space-y-6">
                        {/* Feature Card */}
                        <div  className="flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-md p-6 border-l-4 border-transparent hover:border-[#FF0000] transition-all duration-300 rounded-md cursor-pointer">
                            {/* Icon */}
                            <div className="text-[#FF5A3C] text-4xl mb-4 sm:mb-0 sm:mr-6">
                                <img src="/Images/realestatelogo.png" className='h-[3.5rem] w-[3.5rem]' alt="" /> 
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-900 mb-1 group-hover:text-[#FF0000]" id={Styles.abtPoints}>The Perfect Residency</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                                </p>
                            </div>
                        </div>

                        {/* Second Feature */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-sm p-6 border-l-4 border-transparent hover:border-[#FF0000] transition-all duration-300 rounded-md cursor-pointer">
                            {/* Icon */}
                            <div className="text-[#FF5A3C] text-4xl mb-4 sm:mb-0 sm:mr-6">
                                <img src="/Images/support.png" className='h-[3.5rem] w-[3.5rem]' alt="" /> 
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-900 mb-1" id={Styles.abtPoints}>Global Architect Experts</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                                </p>
                            </div>
                        </div>

                        {/* Third Feature */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-sm p-6 border-l-4 border-transparent hover:border-[#FF0000] transition-all duration-300 rounded-md cursor-pointer">
                            {/* Icon */}
                            <div className="text-[#FF5A3C] text-4xl mb-4 sm:mb-0 sm:mr-6">
                                <img src="/Images/map.png" className='h-[3.5rem] w-[3.5rem]' alt="" /> 
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-extrabold text-gray-900 mb-1" id={Styles.abtPoints}>Decent Loactions</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
