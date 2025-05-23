import Styles from './Category.module.css'
import { Link } from 'react-router-dom';


export const Category = () => {
  return (
    <section className={Styles.category}>
        <div className='text-center mb-5'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Property</h5>
            <div id={Styles.sh}>Property By Categories</div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-6' id={Styles.cBox}>
                    <div id={Styles.cpic1}>
                        <div className='' id={Styles.barnerinfo}>
                            <h4>
                                Apartmemts
                            </h4>
                            <p>
                                Get The Best Deals
                            </p>
                            <Link  to="/properties" className={Styles.cbtn2}>
                                <a href="" id={Styles.cbtn}>
                                    59 Listing
                                </a>
                            </Link>
                          
                        </div>
                    </div>
                </div>
                <div  className='col-lg-4 col-md-6' id={Styles.mtt} >
                    <div id={Styles.cpic2}>
                        <div className='' id={Styles.barnerinfo}>
                            <h4>
                                Condos
                            </h4>
                            <p>
                                Get The Best Deals
                            </p>
                            <Link  to="/properties" className={Styles.cbtn2}>
                                <a href="" id={Styles.cbtn}>
                                    7 Listing
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-4 col-md-6' id={Styles.mt} >
                    <div id={Styles.cpic3}>
                        <div className='' id={Styles.barnerinfo}>
                            <h4>
                                Houses
                            </h4>
                            <p>
                                Get The Best Deals
                            </p>
                            <Link  to="/properties" className={Styles.cbtn2}>
                                <a href="" id={Styles.cbtn}>
                                    29 Listing
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-4 col-md-6' id={Styles.mt}>
                    <div id={Styles.cpic4}>
                        <div className='' id={Styles.barnerinfo}>
                            <h4>
                                Office Space
                            </h4>
                            <p>
                                Get The Best Deals
                            </p>
                            <Link  to="/properties" className={Styles.cbtn2}>
                                <a href="" id={Styles.cbtn}>
                                    14 Listing
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-4 col-md-6' id={Styles.mt}>
                    <div id={Styles.cpic5}>
                        <div className='' id={Styles.barnerinfo}>
                            <h4>
                                Land
                            </h4>
                            <p>
                                Get The Best Deals
                            </p>
                            <Link  to="/properties" className={Styles.cbtn2}>
                                <a href="" id={Styles.cbtn}>
                                    6 Listing
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
