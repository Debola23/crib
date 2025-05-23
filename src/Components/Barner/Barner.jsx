import Styles from './Barner.module.css';
import { Link } from 'react-router-dom';

export const Barner = () => {
  return (
     <section className={Styles.barner}>
        <div className='text-center mb-5'>
            <div className='mb-[2rem] container'> 
                <div className='bg-[#ff5a3c]  text-white py-12 px-6  md:px-16'>
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl mb-2" id={Styles.t1}>Looking for a dream home?</h2>
                            <p className="text-base md:text-lg font-light"  id={Styles.t2}>
                                We can help you realize your dream of a new home
                            </p>
                        </div>
                        <div>
                            <Link  to="/properties" >
                                <a href="#" className="bg-white text-black font-medium px-6 py-4 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                                    id={Styles.ex} >
                                    Explore Properties <span className="text-xl">→</span>
                                </a>
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}
