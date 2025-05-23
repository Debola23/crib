import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header/Header'
import { Navv } from './Components/Navv/Navv'
import { Hero } from './Components/Hero/Hero';
import { Abt } from './Components/Abt/Abt';
import { Services } from './Components/Service/Services';
import { Count } from './Components/Count/Count';
import { Category } from './Components/Category/Category';
import { Testimonial } from './Components/Testimonial/Testimonial';
import { Amenities } from './Components/Amenities/Amenities';
import { Feature } from './Components/Feature/Feature';
import { Agents } from './Components/Agents/Agents';
import { Barner } from './Components/Barner/Barner';
import { Footer } from './Components/Footer/Footer';
import { Scroll } from './Components/Scroll/Scroll';




function App() {
 

  return (
    <>
      <div>
        <Header/>
        <Navv/>
        <Hero/>
        <Abt/>
        <Services/>
        <Count/>
        <Category/>
        <Testimonial/>
        <Amenities/>
        <Feature/>
        <Agents/>
        <Barner/>
        <Footer/>
        <Scroll/>
      </div>
    </>
  )
}

export default App
