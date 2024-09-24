import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { RiCloseLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';

function Header() {
  const [menu, setMenu] = useState(false);
  const [showsrch, setShowSrch] = useState(true);
  return (
    <>
      <div className='h-full flex justify-end md:hidden duration-300  '>
        <div
          style={{
            width: menu === true ? '80%' : '0%',
            transition: '0.5s',
            overflow: 'hidden',
            visibility: menu === true ? 'visible' : 'hidden',
          
          }}
          className=' absolute w-9/12 h-full border border-1 shadow-2xl  z-50  bg-gray-50  '
        >
          <div className='w-full h-20 flex justify-between items-center'>
            <div className='w-full h-16 flex justify-between items-center '>
              <Link
                className='w-[75px] '
                smooth={true}
                offset={0}
                duration={500}
              >
                <img src={Logo} alt='' />
              </Link>

              <div>
                <button onClick={() => setMenu(!menu)}>
                  <RiCloseLine className='md:hidden  text-4xl mr-2 text-[#4B5568] cursor-pointer  ' />
                </button>
              </div>
            </div>
          </div>

          <div className=' flex flex-col border-t-2 border-b-2 '>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-2 text-md text-[#4B5568] font-semibold'
            >
              Home
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Compnay
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Service
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Training
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Career
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Contact Us
            </Link>
            <Link
              smooth={true}
              offset={0}
              duration={500}
              className=' p-2 mt-1 text-md text-[#4B5568] font-semibold'
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
      <div className='sticky top-0 w-full z-10 '>
        <div className=' container-xl flex flex-col items-center bg-white  '>
          <div className='w-11/12 lg:w-11/12 xl:w-10/12 flex justify-between mb-2'>
            <img className='lg:w-[107px] lg:h-[77px]' src={Logo} alt='' />

            <div className='  flex items-center justify-between'>
              <button className='hidden md:block lg:hidden'>
                <BsSearch className='text-sm md:mx-5 text-[#4B5568] cursor-pointer' />
              </button>
              <button onClick={() => setMenu(!menu)} className='lg:hidden'>
                <FaBars className='text-2xl text-[#4B5568] cursor-pointer' />
              </button>
            </div>
            <div className=' hidden lg:block   '>
              <div className=' h-full flex flex-row  lg:items-center '>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>Home</Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>Compnay</Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>Service</Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>Training</Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>Career</Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium '>
                  Contact Us
                </Link>
                <Link className='p-4 text-xs Montserrat-Text font-medium  Montserrat-Text  '>
                  Registration
                </Link>
                <BsSearch className=' mt-1 text-sm text-[#212529]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
