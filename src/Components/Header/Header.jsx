import Styles from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={`${Styles.header} px-4 py-3`}>
      <ul className="flex flex-wrap items-center gap-4 md:gap-10 md:pl-[50px] w-full">
        <li className="flex gap-2 items-center hover:text-red-500 transition-all duration-300 text-sm md:text-base">
          <img src="/Images/email.png" alt="email" className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
          <a href="mailto:crib@mail.com" className={Styles.a}>crib@mail.com</a>
        </li>

        <li className="flex gap-2 items-center hover:text-red-500 transition-all duration-300 cursor-pointer text-sm md:text-base">
          <img src="/Images/location.png" alt="location" className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
          Obafemi Avn, IKEJA
        </li>

        <li className="ml-auto mt-2 md:mt-0 pr-0 md:pr-[40px]">
          <Link to="/listing" className={Styles.btn}>
            Add Listing
          </Link>
        </li>
      </ul>
    </div>
  )
}
