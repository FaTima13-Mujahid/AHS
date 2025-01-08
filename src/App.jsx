import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// import Pages
import Home from './Pages/Home'
import Contact from './Pages/Contact'

// --- Error Page : when the url does'nt match with routes
import ErrorPage from './Pages/Errorpage'
import About from './Pages/About'
import Product from './Pages/Product'
import Hotrolled from './Pages/Products/Hotrolled'
import Msplates from './Pages/Products/msplates'
import Chequeredplates from './Pages/Products/Chequeredplates'
import BoilerPlates from './Pages/Products/BoilerPlates'
import GalvanizedSheet from './Pages/Products/GalvanizedSheet'
import Colorcoilsheets from './Pages/Products/Colorcoilsheets'
import Zsection from './Pages/Products/Zsection'
import Gpipe from './Pages/Products/Gpipe'
import Mspipe from './Pages/Products/Mspipe'
import Tinplate from './Pages/Products/TinPlate'
import RoundBars from './Pages/Products/RoundBars'
import DeformedBars from './Pages/Products/DeformedBars'
import MsFlat from './Pages/Products/MsFlat'
import MsRail from './Pages/Products/MsRail'
import Hbeam from './Pages/Products/Hbeam'
import MsAngle from './Pages/Products/MsAngle'
import Standard from './Pages/Standard'
import Calculator from './Pages/Calculator'
import Ppgi from './Pages/Products/Ppgi'
import ColdRolled from './Pages/Products/ColdRolled'
import MsChannel from './Pages/Products/MsChannel'

















// import ProductDetailsPage from "./Pages/Product"; // ProductDetailsPage Component

const App = () => {
    useEffect(() => {
    // Scroll to top whenever the page or route changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />

        <Route path="/contact" element={<Contact />} />
     

      
        <Route path="/About" element={<About />} />
        <Route path="/Hotrolled" element={<Hotrolled />} />
        <Route path="/msplates" element={<Msplates />} />
        <Route path="/Chequeredplates" element={<Chequeredplates />} />
        <Route path="/Boilerplates" element={<BoilerPlates />} />
        <Route path="/Galvanizedsheet" element={<GalvanizedSheet />} />
        <Route path="/Colorcoilsheets" element={<Colorcoilsheets />} />
        <Route path="/Zsection" element={<Zsection />} />
        <Route path="/Gpipe" element={<Gpipe />} />
        <Route path="/Mspipe" element={<Mspipe />} />
        <Route path="/Tinplate" element={<Tinplate />} />
        <Route path="/RoundBars" element={<RoundBars />} />
        <Route path="/DeformedBars" element={<DeformedBars />} />
        <Route path="/MsRail" element={<MsRail />} />
        <Route path="/MsFlat" element={<MsFlat />} />
        <Route path="/Hbeam" element={<Hbeam />} />
        <Route path="/MsAngle" element={<MsAngle />} />
        <Route path="/Standard" element={<Standard />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Ppgi" element={<Ppgi />} />
        <Route path="/ColdRolled" element={<ColdRolled />} />
        <Route path="/MsChannel" element={<MsChannel />} />

















  {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> Route for Product Details Page */}
    
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
