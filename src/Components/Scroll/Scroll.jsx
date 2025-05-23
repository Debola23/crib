import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Styles from './Scroll.module.css'

export const Scroll = () => {

 const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

  return (
     isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-500 transition-transform transform hover:-translate-y-1"
        id={Styles.up}
        aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  )
}
