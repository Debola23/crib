import Styles from './Hero.module.css'
import { motion } from 'framer-motion'
import { SlideUp} from '../../Utility/animation'

export const Hero = () => {
  return (
    <>
    <section  id={Styles.hbg} >
      <div className="max-w-8xl flex flex-col-reverse lg:flex-row items-center gap-10"id={Styles.hero}>
        {/* Left side - Content */}
        <div className="text-center lg:text-left flex-1" id={Styles.ht}>
          <motion.div variants={SlideUp(0.3)} initial="hidden" whileInView="visible" className="flex items-center justify-center lg:justify-start gap-2 text-sm text-red-600 font-semibold mb-4" id={Styles.p1}>
            <span className="text-xl">🏠</span>
            Real Estate Agency
          </motion.div>
          <motion.h1 variants={SlideUp(0.6)} initial="hidden" whileInView="visible" className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4" id={Styles.p2}>
            Search and Find <br />
            <span className="text-red-600">Luxury</span> House
          </motion.h1>
          <motion.p variants={SlideUp(0.9)} initial="hidden" whileInView="visible" className="text-gray-500 max-w-md  lg:mx-0 border-l-2 border-gray-300 pl-1 mb-8" id={Styles.p3}>
            we specialize in connecting people with properties<br/>
            that suit their lifestyle, budget, and goals.
          </motion.p>
          <motion.div variants={SlideUp(1.2)} initial="hidden" whileInView="visible" className="flex items-center justify-center lg:justify-start gap-4 mt-[2rem]" id={Styles.bth}>
            <button className="bg-red-600 text-white px-3 py-2 text-sm font-semibold rounded-sm" id={Styles.b1}>
              <a href="#team" className={Styles.hb}>
                   Make An Enquiry
              </a>
            </button>
            <button className="bg-red-600 text-white px-3 py-2 text-sm font-semibold rounded-sm"  id={Styles.b1}>
              <a href="#team" className={Styles.hb}>
                Rent Space
              </a>
            </button>
          </motion.div>
        </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/Images/heroimg.jpg"
              alt="Hero"
              className="w-[44rem] h-[43rem] object-cover shadow-lg"
              id={Styles.heroimg}
            />
          </div>
      </div>
    </section>
    </>
  

  )
}
