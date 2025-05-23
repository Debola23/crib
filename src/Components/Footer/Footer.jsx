import  Styles from './Footer.module.css'

export const Footer = () => {
  return (
    <section className={Styles.footer}>
      <div className={Styles.footBox}>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="space-y-4 col-span-1">
                <div className="flex items-center gap-2">
                  <img src="/Images/logo.png" alt="Logo" className="h-8 w-auto" />
                  <span id={Styles.t1}>Crib</span>
                </div>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is dummy text of the printing.
                </p>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>📍 Ikoyi, Lagos, Nigeria</p>
                  <p>📞 +234-456-7896-4567</p>
                  <p> cribs@mail.com</p>
                </div>
                <div className="flex gap-4 text-gray-400 text-lg mt-2">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-dribbble"></i>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About</li>
                  <li>Blog</li>
                  <li>All Products</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Cart</li>
                  <li>Wish List</li>
                  <li>Login</li>
                  <li>Checkout</li>
                  <li>Terms & Conditions</li>
                  <li>Promotional Offers</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className="font-semibold mb-4">Customer Care</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Login</li>
                  <li>My account</li>
                  <li>Wish List</li>
                  <li>Add listing</li>
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4">Subscribe to our weekly Newsletter and receive updates via email.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 w-full text-black text-sm outline-none"
                    id={Styles.footerE}
                  />
                  <button className="bg-[#F85C40] px-4 text-white text-lg font-bold">
                    ➤
                  </button>
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold mb-2">We Accept</h5>
                  <img src="/Images/payment.png" alt="Payments" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className={Styles.sFooter}>
        <div className={Styles.cont}>  
          <div className={Styles.underBox}>
            <div className=''>
              All Rights Reserved @ Company 2025
            </div>

            <div className='' id={Styles.lr}>
              <div>Terms & Condition</div>
              <div>Claim</div>
              <div>Privacy & Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
