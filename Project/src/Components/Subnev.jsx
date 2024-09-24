import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import Header from './Header';
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import Section4 from './Home/Section4';
import Footer from './Footer';
function Subnev() {
  return (
    <>
     <div  className='container-xl Section1-Bg  md:flex md:justify-center flex justify-center '>
      <div  className='md:w-11/12 lg:w-11/12 xl:w-10/12  w-full  md:flex md:flex-row md:justify-between'>
      
      
    <div className='hidden md:col-6 md:w-[50%]  md:flex md:flex-row md:items-center '> 
<TiSocialFacebook className='text-white text-xl mx-2  ' />
            <div className='h-6 flex items-center border-x-2  '>
              <FaTwitter className='text-white text-md mx-3' />
            </div>
            <div className=' h-6 flex items-center  border-r-2 '>
              <FaGooglePlusG className='text-white text-md mx-3' />
            </div>
            <FaLinkedinIn className='text-white text-md mx-2' />
    </div>
    <div  className='md:col-6  md:w-[70%] h-10 flex justify-center items-center md:flex md:flex-row md:items-center md:justify-end '>
    <FaPhone className='text-white text-sm mx-3  lg:text-sm  md:mx-2 ' />
            <span className='text-white text-sm  lg:text-sm Montserrat-Text mx-2'>215-971-1200</span>

            <div className='h-6 text-white flex flex-row items-center  border-l-2 '>
              <IoMail className='text-white text-lg  lg:text-lg mx-3' />
              <span className='text-white text-sm  lg:text-sm Montserrat-Text md:m-1'>fcg@fcgit.com</span>
            </div>
    </div>
        </div>
        </div>

        <Header />
      <Section1/>
       <Section2/>
      <Section3/>
      <Section4/>
      <Footer />

    </>
  );
}

export default Subnev;


// style={{border:"2px solid red"}}


      