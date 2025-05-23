import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
  
  const StaggeredDropDown2 = () => {
    const [open, setOpen] = useState(false);
  
    return (
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 text-[10px] text-black">
            <span className="font-semibold text-[15px]">Listed Properties</span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
            >
            <Option setOpen={setOpen}  text="Apartments" />
            <Option setOpen={setOpen}  text="Houses" />
          </motion.ul>
        </motion.div>
    );
  };
  
  const Option = ({ text, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-[#0b2c3d] text-slate-700 hover:text-white transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown2;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  