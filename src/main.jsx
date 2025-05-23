import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Listing } from './Pages/Listing/Listing.jsx';
import { KnowUs } from './Pages/KnowUs/KnowUs.jsx';
import { Services } from './Pages/Services/Services.jsx';
import { Location } from './Pages/Location/Location.jsx';
import { Properties } from './Pages/Properties/Properties.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "/listing",
    element: <Listing/>,
  },
   {
    path: "/knowus",
    element: <KnowUs/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/location",
    element: <Location/>,
  },
  {
    path: "/properties",
    element: <Properties/>,
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router} />
 </StrictMode>,
)
