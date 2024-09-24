import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaMobileRetro } from 'react-icons/fa6';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
function Footer() {
  return (
    <>
      <div className='bg-[#F0EEE4]  container-xl  flex items-center flex-col py-6  '>
        <div className='w-11/12 mt-5 xl:w-10/12 h-auto  md:grid md:grid-cols-2  lg:grid lg:grid-cols-4 lg:gap-1 '>

          <div className=' flex flex-col font-medium md:flex md:items-start '>
            <span className='text-lg text-[#2D3740] font-medium   '>
              Contact Information
            </span>
            <div className='w-7 border-2 border-[#211C5A] '></div>
            <div className=' w-5 h-5  border-2 border-[#211C5A] rounded-md flex justify-center items-center mt-5  '>
              <FaLocationDot className='text-[#211C5A] text-xs p-px' />
            </div>
            <Link className='text-sm font-normal mt-1'>
              335 N Broad Street Lansdale, PA 19446
            </Link>
            <div className=' w-5 h-5  border-2 border-[#211C5A] rounded-md flex justify-center items-center mt-5 '>
              <MdEmail className='text-[#211C5A] text-xs p-px' />
            </div>
            <Link className='text-sm font-normal mt-1'>fcg@fcgit.com</Link>
            <div className=' w-5 h-5  border-2 border-[#211C5A] rounded-md flex justify-center items-center mt-5 '>
              <FaMobileRetro className='text-[#211C5A] text-xs p-px' />
            </div>
            <Link className='text-sm font-normal mt-1'>215-971-1200</Link>
            <div className=' w-5 h-5  border-2 border-[#211C5A] rounded-md flex justify-center items-center mt-5 '>
              <TbDeviceLandlinePhone className='text-[#211C5A] text-xs p-px' />
            </div>
            <Link className='text-sm font-normal mt-1'>215-689-2100</Link>
            <div className='flex flex-row  mt-4 gap-2'>
              <div className=' w-8 h-8  border-2 border-[#211C5A] rounded-md  flex items-center justify-center'>
                <TiSocialFacebook className='text-[#211C5A] text-md' />
              </div>
              <div className=' w-8 h-8  border-2 border-[#211C5A] rounded-md  flex items-center justify-center'>
                <FaTwitter className='text-[#211C5A] text-md' />
              </div>
              <div className=' w-8 h-8  border-2 border-[#211C5A] rounded-md  flex items-center justify-center'>
                <FaGooglePlusG className='text-[#211C5A] text-md' />
              </div>
              <div className=' w-8 h-8  border-2 border-[#211C5A] rounded-md  flex items-center justify-center'>
                <FaLinkedinIn className='text-[#211C5A] text-md' />
              </div>
            </div>
          </div>

          <div className=' flex flex-col  md:flex md:items-start mt-10 md:mt-0 '>
            <span className='text-lg text-[#2D3740] font-medium  '>FCG Navigation</span>
            <div className='w-6 border-2 border-[#211C5A] '></div>
            <Link className=' text-sm font-normal mt-10'>Home</Link>
            <Link className=' text-sm font-normal mt-4'>Company</Link>
            <Link className=' text-sm font-normal mt-4'>Services</Link>
            <Link className=' text-sm font-normal mt-4'>Professional Training</Link>
            <Link className=' text-sm font-normal mt-4'>Career</Link>
            <Link className=' text-sm font-normal mt-4'>Overseas Branch</Link>
            <Link className=' text-sm font-normal mt-4'>Contact Us</Link>
          </div>

          <div  className=' flex flex-col  md:flex md:items-start mt-10 lg:mt-0'>
            <span className='text-lg text-[#2D3740] font-medium  '>
              Services In Development
            </span>
            <div className='w-7 border-2 border-[#211C5A] '></div>
            <Link className='  text-sm font-normal mt-8'>Resources</Link>
            <Link className='  text-sm font-normal mt-5'>Product/Development Plan</Link>
            <Link className='  text-sm font-normal mt-5'>Supporting Utilities</Link>
            <Link className='  text-sm font-normal mt-5'>Sap GRC System Detail</Link>
            <Link className='  text-sm font-normal mt-5'>Sap Partner</Link>
            <Link className='  text-sm font-normal mt-5'>Storage Installer</Link>
            <Link className='  text-sm font-normal mt-5'>GSA</Link>
          </div>

          <div  className=' flex flex-col  md:flex md:items-start mt-10 lg:mt-0'>
            <span className='text-lg text-[#2D3740] font-medium '>Map </span>
            <div className='w-7 border-2 border-[#211C5A] '></div>

            <Link className='mt-4  text-sm font-normal'>Site Map</Link>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center items-center   w-full py-3 px-2  Section1-Bg'>
          <p className='text-sm md:text-sm text-white text-center  '>
            Copyright © 2014 Freedom Consulting Group Inc. All rights reserved.
          </p>
        </div>
    </>
  );
}

export default Footer;
