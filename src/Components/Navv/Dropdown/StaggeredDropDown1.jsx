import Styles from  './Stg.module.css'
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
  
  
  const StaggeredDropDown1 = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <motion.div animate={open ? "open" : "closed"} className="relative" id={Styles.st1}>
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 text-[10px] text-black">
            <span className="font-medium text-[15px]">About</span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
            >
            <Option setOpen={setOpen}  text="Know Us" />
            <Option setOpen={setOpen}  text="Services" />
            <Option setOpen={setOpen}  text="Team" />
            <Option setOpen={setOpen}  text="Location" />
          </motion.ul>
        </motion.div>


        <motion.div animate={open ? "open" : "closed"} className="relative" id={Styles.st2}>
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 text-[10px] text-black">
            <span className="font-semibold text-sm">About</span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
            >
            <Option setOpen={setOpen}  text="Know Us" />
            <Option setOpen={setOpen}  text="Services" />
            <Option setOpen={setOpen}  text="Team" />
            <Option setOpen={setOpen}  text="Location" />
          </motion.ul>
        </motion.div>

</>
    );
  };
 const Option = ({ text, setOpen }) => {
  const handleClick = () => {
    setOpen(false); 
  };

  
  let linkTarget = "#";
  if (text === "Team") linkTarget = "/#team";
  else if (text === "Know Us") linkTarget = "/knowus";
  else if (text === "Services") linkTarget = "/services";
  else if (text === "Location") linkTarget = "/location";

  return (
    <motion.li
      variants={itemVariants}>
      <Link smooth to={linkTarget} onClick={handleClick} id={Styles.ntd} className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-[#0b2c3d] text-slate-700 hover:text-white transition-colors cursor-pointer">
        {text}
      </Link>
    </motion.li>
  );
};


  export default StaggeredDropDown1;
  
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
  
  