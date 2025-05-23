import Styles from './Barner.module.css';
import { Link } from 'react-router-dom';

export const Barner2 = () => {
  return (
     <section className={Styles.barner}>
        <div className='text-center mb-5'>
            <div className='mb-[2rem] container'> 
                <div className='bg-[#ff5a3c]  text-white py-12 px-6  md:px-16'>
                    <div className={Styles.bt}>
                        Get 5% Off On Any Purchase
                            <br/>
                        Through Our Website
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}
