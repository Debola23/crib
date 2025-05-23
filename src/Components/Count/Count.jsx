import Styles from './Count.module.css'
import { motion } from 'framer-motion'


export const Count = () => {

  const stats = [
    {
      icon: "/Images/apt.png",
      count: "100K+",
      label: "Apartments Sold",
      delay: 0.3,
      duration: 1,
    },
    {
      icon: "/Images/const.png",
      count: "133+",
      label: "Total Construction",
      delay: 0.6,
      duration: 1.5,
    },
    {
      icon: "/Images/land.png",
      count: "270+",
      label: "Total Area Sq",
      delay: 0.9,
      duration: 2,
    },
  ];


  return (
    <section className="bg-[#f2f6f7] py-12" id={Styles.count}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mt-[3rem] mb-[3rem]">
          {stats.map((item, idx) => (
            <motion.div  variants={SlideUp({ delay: item.delay, duration: item.duration })} initial="hidden" whileInView="visible" key={idx} className="flex flex-col items-center">
              <img src={item.icon} alt={item.label} className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900" id={Styles.num}>{item.count}</h3>
              <p className="text-gray-600 mt-1" id={Styles.cdeet}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SlideUp = ({ delay = 0, duration = 1 } = {}) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
      },
    },
  };
};