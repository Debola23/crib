import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header'
import { Navv } from '../../Components/Navv/Navv'
import { Scroll } from '../../Components/Scroll/Scroll';
import Styles from './Listing.module.css'
import { useState } from "react";



export const Listing = () => {




 const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    images: [],
    address: "",
    city: "",
    state: "",
    zip: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    amenities: [],
  });

  const interiorD = ["Equiped Kitchen", "Gym", "Laundry","Movie Room","Game Room" ];
  const outdoorD = ["Pool", "Backyard", "Basketball Court","Fire pit", "Parking", "Barbecue","Garden"];
  const utilitiesD = ["Electricity", "Water", "Gas", "Heating", "Trash Collection"];
  const othersD = ["Smoke Decetor", "Washers", "Fireplace","Elevator"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => {
      const updated = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updated };
    });
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, images: [...e.target.files] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logged data. To be Replaced with actual API submission.
    console.log(formData);
    alert("Property submitted successfully!");
  };






  return (
    <div className={Styles.Listing}>
        <Header/>
        <Navv/>
        <div className={Styles.hero} id={Styles.hr}>  
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3 id={Styles.hh3}>
                  Add Listing
                </h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <img src="/Images/bhome.png" className="h-[18px] w-[16px]" alt="Home Icon" />
                    <a href="/" className={Styles.blink}>
                      Home
                    </a>
                  </div>
                  <span className="mx-1 text-gray-400">/</span>
                  <div className="font-medium text-gray-800">Add Listing</div>
              </div>

            </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className={Styles.formBox}>
              <form onSubmit={handleSubmit}className=" ">
                  {/* 1. Description */}
                  <div>
                    <h2 className="text-xl  mb-4" id={Styles.t1}>1.Description</h2>
                    <p className={Styles.t2}>
                      These fields are mandatory
                    </p>
                    <input
                      type="text"
                      name="title"
                      placeholder="Property Title(Mandatory"
                      onChange={handleChange}
                      className="w-full h-[3.5rem] p-2 border mb-6"
                      id={Styles.b1}
                      required
                    />
                    <input
                      type="text"
                      name="Description"
                      placeholder="Description"
                      onChange={handleChange}
                      className="w-full h-[8.2rem] p-2 border mb-6"
                      id={Styles.b1}
                      required
                    />
                    <h6 className={Styles.b2}>Property Price</h6>
                      <div className='row  mb-[1.5rem]'>
                        <div className='col-md-6' id={Styles.row2}>
                          <input
                            type="number"
                            name="price"
                            placeholder="Price in ₦ (Only Numbers)"
                            onChange={handleChange}
                            className="w-full p-2 border h-[3.5rem]"
                            required/>
                        </div>
                        <div className='col-md-6' id={Styles.row2}>
                          <input
                            type="number"
                            name="price"
                            placeholder="Home Owner Association Fee (Monthly)"
                            onChange={handleChange}
                            className="w-full p-2 border h-[3.5rem]"
                            required/>
                        </div>
                      </div>
                      <h6 className={Styles.b2}>Select Categories</h6>
                        <div className='row mb-[1.5rem]'>
                          <div className='col-lg-4 col-md-6'id={Styles.row2}>
                            <select
                              name="category"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              required>
                              <option value="">Select Category</option>
                              <option value="Apartment">Duplex</option>
                              <option value="House">Land</option>
                              <option value="Commercial">Office Space</option>
                              <option value="Commercial">Land</option>
                              <option value="Commercial">Villa</option>
                            </select>
                          </div>
                          <div className='col-lg-4 col-md-6' id={Styles.row2}>
                            <select
                              name="category"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              required>
                              <option value="">Select Category</option>
                              <option value="Apartment">Rentals</option>
                              <option value="Commercial">Sales</option>
                            </select>
                          </div>
                          <div className='col-lg-4 col-md-6'id={Styles.row2}>
                            <select
                              name="category"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              required>
                              <option value="">All</option>
                              <option value="Apartment">New Offer</option>
                              <option value="House">Open House</option>
                              <option value="Commercial">Best Deals</option>
                              <option value="Commercial">Sold</option>
                            </select>
                          </div>
                        </div>
                    </div>

                  {/* 2. Media */}
                  <div className='mb-[3rem] mt-[3rem]'>
                    <h2 className="text-xl  mb-4" id={Styles.t1}>2.Media</h2>
                    <p className={Styles.t2}>
                      Listing Media
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      className="w-[30%]"
                      id={Styles.imgBox}
                    />
                    <div className={Styles.smallT}>
                      <p>* At least 1 image is required for a valid submission.Minimum size is 500/500px.</p>
                      <p>* PDF files upload supported as well.</p>
                      <p>* Images might take longer to be processed</p>
                    </div>
                     <h6 className={Styles.b2}>Video Option</h6>
                      <div className='row'>
                          <div className='col-md-6'>
                            <select
                              name="video"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              id={Styles.row2}
                              required>
                              <option value="">Video From</option>
                              <option value="Youtube">Youtube</option>
                              <option value="X">X(Twitter)</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className='col-md-6' id={Styles.row2}>
                            <input
                            type='link'
                            name="Video Link"
                            placeholder="Video Link"
                            onChange={handleChange}
                            className="w-full p-2 border h-[3.5rem]"
                            required/>
                          </div>
                      </div>
                  </div>

                  {/* 3. Location */}
                  <div className='mb-[3rem] mt-[3rem]'>
                    <h2 className="text-xl  mb-4" id={Styles.t1}>3.Location</h2>
                    <p className={Styles.t2}>
                      Listing Location
                    </p>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={handleChange}
                      className="w-full p-2 border h-[3.5rem]"
                      id={Styles.row22}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        className="p-2 border h-[3.5rem]"
                        id={Styles.row22}
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                        className="p-2 border h-[3.5rem]"
                        id={Styles.row22}
                      />
                    </div>
                    <input
                      type="text"
                      name="zip"
                      placeholder="Zip Code"
                      onChange={handleChange}
                      className="w-full p-2 border mt-2 h-[3.5rem]"
                      id={Styles.row2}
                    />
                    <div className={Styles.googleMap}>
                      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126866.81061511279!2d3.4409950847584034!3d6.446931111460397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f25a88038f%3A0x4e8c2f0b30faf2cd!2sLekki%2FIkate%20And%20Environs%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736264199685!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{
                          width: "100%",height: "400px",  border: "0",
                        }}>
                      </iframe>
                    </div>
                      <input
                      type="text"
                      name="map"
                      placeholder="Map Coordinates"
                      onChange={handleChange}
                      className="w-full p-2 border mt-2 h-[3.5rem]"
                      id={Styles.row2}
                    />
                  </div>

                  {/* 4. Details */}
                  <div className='mb-[3rem] mt-[3rem]' >
                    <h2 className="text-xl  mb-4" id={Styles.t1}>4.Details</h2>
                      <p className={Styles.t2}>
                        Listing Details
                      </p>
                      <div className='row'>
                        <div className='col-md-6' id={Styles.row22}>
                            <input
                            type="number"
                            name="rooms"
                            placeholder="Rooms"
                            onChange={handleChange}
                            className="p-2 border  w-full h-[3.5rem]"
                            />
                        </div>
                        <div className='col-md-6' id={Styles.row22}>
                            <input
                            type="number"
                            name="bedrooms"
                            placeholder="Bedrooms"
                            onChange={handleChange}
                            className="p-2 border  w-full h-[3.5rem]"
                            />
                        </div>
                        <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="number"
                            name="bathrooms"
                            placeholder="Bathrooms"
                            onChange={handleChange}
                            className="p-2 border  w-full h-[3.5rem]"
                            />
                        </div>
                        <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="number"
                            name="garage"
                            placeholder="Garage (How Many Cars Can The Garage Accommodate)"
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="number"
                            name="kitchen"
                            placeholder="Kitchen"
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="text"
                            name="size"
                            placeholder="Size In Ft² (Only Numbers)"
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="text"
                            name="bedrooms"
                            placeholder="Year Built (Only Numbers)"
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="number"
                            name="basement"
                            placeholder="Basement"
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="text"
                            name="roofing"
                            placeholder="Roofing Type "
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                         <div className='col-md-6'  id={Styles.row22}>
                            <input
                            type="text"
                            name="roofing"
                            placeholder="Roofing Type "
                            onChange={handleChange}
                            className="p-2 border w-full h-[3.5rem]"
                            />
                        </div>
                        <div className='col-md-6'  id={Styles.row22}>
                            <select
                              name="Structure Type"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              required>
                              <option value="">Structure Type</option>
                              <option value="">Brick</option>
                              <option value="Apartment">Cement</option>
                              <option value="House">Wood</option>
                            </select>
                        </div>
                        <div className='col-md-6'  id={Styles.row22}>
                            <select
                              name="Floors No"
                              onChange={handleChange}
                              className="w-full p-2 border h-[3.5rem]"
                              required>
                              <option value="">Floors No</option>
                              <option value="">1</option>
                              <option value="Apartment">2</option>
                              <option value="House">3</option>
                              <option value="House">4</option>
                            </select>
                        </div>
                         <div className='col-lg-12'  id={Styles.row22}>
                            <input
                            type="text"
                            name="extra"
                            placeholder="Extra Details"
                            onChange={handleChange}
                            className="p-2 border w-full h-[8.2rem]"
                            />
                        </div>
                      </div>
                  </div>
                  {/* 5. Amenities */}
                  <div  className='mb-[3rem] mt-[3rem]'>
                   <h2 className="text-xl  mb-4" id={Styles.t1}>5.Amenities</h2>
                      <p className={Styles.b2}>
                        Amenities & Features
                      </p>
                      <h6 className={Styles.b2}>Interior Details</h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                        {interiorD.map((amenity) => (
                          <label key={amenity} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.amenities.includes(amenity)}
                              onChange={() => handleAmenityChange(amenity)}
                            />
                            <span>{amenity}</span>
                          </label>
                        ))}
                      </div>
                      <h6 className={Styles.b2}>Outdoor Details</h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                        {outdoorD.map((amenity) => (
                          <label key={amenity} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.amenities.includes(amenity)}
                              onChange={() => handleAmenityChange(amenity)}
                            />
                            <span>{amenity}</span>
                          </label>
                        ))}
                      </div>
                      <h6 className={Styles.b2}>Utilities Details</h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                        {utilitiesD.map((amenity) => (
                          <label key={amenity} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.amenities.includes(amenity)}
                              onChange={() => handleAmenityChange(amenity)}
                            />
                            <span>{amenity}</span>
                          </label>
                        ))}
                      </div>
                      <h6 className={Styles.b2}>Other Features</h6>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
                        {othersD.map((amenity) => (
                          <label key={amenity} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.amenities.includes(amenity)}
                              onChange={() => handleAmenityChange(amenity)}
                            />
                            <span>{amenity}</span>
                          </label>
                        ))}
                      </div>
                  </div>
                  <div className="flex justify-center mb-[5rem]">
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition">
                      Submit Property
                    </button>
                  </div>
                </form>
            </div>
          </div>
      </div>
      <Scroll/>
      <Footer/>
    </div>
  )
}
