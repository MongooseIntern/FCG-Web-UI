import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subnev from './Components/Subnev';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Compney from './Components/Compney/Compney';
import Registration from './Components/Registration/Registration';
import ContactUs from './Components/Contact Us/ContactUs';
import Section1 from './Components/Home/Section1';
import Section2 from './Components/Home/Section2';
import Section3 from './Components/Home/Section3';
// import Section4 from './Components/Home/Section4';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Subnev />} />
          <Route path='header' element={<Header />} />
          <Route path='section1' element={<Section1 />} />
          <Route path='section2' element={<Section2 />} />
          <Route path='section3' element={<Section3 />} />
          {/* <Route path='section4' element={<Section4 />} /> */}
          <Route path='compney' element={<Compney/>}></Route>
          <Route path='Registration' element={<Registration/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
