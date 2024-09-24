import React from 'react'
import Research1 from '../../assets/Research1.png';
import Identifying2 from '../../assets/Identifying2.png';
import Solutions3 from '../../assets/Solutions3.png';
import Success4 from '../../assets/Success4.png';
import { Link } from 'react-router-dom';
import business1 from '../../assets/business1.png';
import lawyer2 from '../../assets/lawyer2.png';
import financial3 from '../../assets/financial3.png';
import it4 from '../../assets/it4.png';

function Section4() {
  return (
    <>
    <div className='container-xl  flex items-center flex-col my-12 '>
    <div  className=' w-full md:w-11/12 xl:w-10/12  flex flex-col items-center '>
    
          <div  className='w-11/12 text-wrap flex justify-center gap-2  '>

          <h1 className='text-3xl md:text-4xl font-bold text-center'>OUR <span className='text-4xl md:text-4xl font-normal border-b-2 border-black'>
              SERVICES
            </span>  WORK</h1>
          </div>
<div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 py-4 '>


          <div  className=' flex flex-col items-center mx-3 mt-7 md:mt-7 bg-white rounded-md shadow-xl  '>
          <div className='bg-[#ACDDDE] w-full flex flex-row items-center  rounded-t-md '>
    <img className='w-[60px] h-[60px]' src={Research1} alt='' />
    <h1  className='  text-sm font-medium w-full text-center '>STEP - 1</h1>
  </div>
  <p className='text-lg font-medium mt-5 text-center '>
    Research Your Problem
  </p>
  <p className='text-xs  font-normal text-center p-4'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
          </div>

          <div  className=' flex flex-col items-center mx-3 mt-7 md:mt-7 bg-white rounded-md shadow-xl '>
          <div className='bg-[#ACDDDE] w-full flex flex-row items-center  rounded-t-md '>
    <img className='w-[60px] h-[60px]' src={Identifying2} alt='' />
    <h1 className='text-sm font-medium w-full text-center'>STEP - 2</h1>
  </div>
  <p className='text-lg font-medium mt-5 p-2 '>
  Identifying Problem
  </p>
  <p className='text-xs  font-normal text-center p-4'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
          </div>


          <div  className=' flex flex-col items-center mx-3 mt-7 md:mt-7 bg-white rounded-md shadow-xl '>
          <div className='bg-[#ACDDDE] w-full flex flex-row items-center  rounded-t-md '>
    <img className='w-[60px] h-[60px]' src={Solutions3} alt='' />
    <h1 className='text-sm font-medium w-full text-center '>STEP - 3</h1>
  </div>
  <p className='text-lg font-medium mt-5 p-2 text-center   '>
  Solutions Your Problem
  </p>
  <p className='text-xs  font-normal text-center p-4'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
          </div>

          <div  className=' flex flex-col items-center mx-3 mt-7 md:mt-7 bg-white rounded-md shadow-xl '>
          <div className='bg-[#ACDDDE] w-full flex flex-row items-center  rounded-t-md '>
    <img className='w-[60px] h-[60px]' src={Success4} alt='' />
    <h1 className='text-lg font-medium w-full text-center'>STEP - 4</h1>
  </div>
  <p className='text-lg text-center font-medium mt-5 p-2 '>
    Research Your Problem
  </p>
  <p className='text-xs  font-normal text-center p-4'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
          </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
        <div   className='w-full md:w-11/12 xl:w-10/12   mt-16  flex flex-col items-center '>
        <div   className='  text-wrap flex  justify-center   '>

<h1 className='text-4xl md:text-4xl font-bold text-center'>OUR <span className='text-4xl md:text-4xl font-normal border-b-2 border-black text-center'>
 SOLUTIONS
  </span> FOR FUTURE</h1>
</div>

          <div  className=' w-full  flex flex-col items-center md:grid md:grid-cols-2  lg:grid lg:grid-cols-4'>


          <div  className=' flex flex-col items-start mx-3 mt-5 bg-white rounded-sm shadow-xl py-5 px-5'>
          <div  className=' w-full flex flex-col rounded-t-md'>
    <img className='w-[60px] h-[60px]' src={business1} alt='' />
    <p className='text-base font-medium mt-4 '>
    Business Consulting
  </p>
  <p className='text-sm  font-normal  mt-2'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
  <div className='my-4'>
                  <Link className=' border-b-2 border-[#211C5A] text-[#211C5A] text-sm font-medium'>Read more &#62; </Link>
                </div>
  </div>
          </div>
          <div  className=' flex flex-col items-start mx-3 mt-4 md:mt-7 bg-white rounded-sm shadow-xl py-5 px-5'>
          <div className=' w-full flex flex-col rounded-t-md'>
    <img className='w-[60px] h-[60px]' src={lawyer2} alt='' />
    <p className='text-base font-medium mt-4 '>
    Lawer Consulting
  </p>
  <p className='text-sm  font-normal  mt-2'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
  <div className='my-4'>
                  <Link className=' border-b-2 border-[#211C5A] text-[#211C5A] text-sm font-medium'>Read more &#62; </Link>
                </div>
  </div>
          </div>
          <div  className=' flex flex-col items-start mx-3 mt-4 md:mt-7 bg-white rounded-sm shadow-xl py-5 px-5'>
          <div  className=' w-full flex flex-col rounded-t-md'>
    <img className='w-[60px] h-[60px]' src={financial3} alt='' />
    <p className='text-base font-medium mt-4 '>
    Financial Consulting
  </p>
  <p className='text-sm  font-normal  mt-2'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
  <div className='my-4'>
                  <Link className=' border-b-2 border-[#211C5A] text-[#211C5A] text-sm font-medium'>Read more &#62; </Link>
                </div>
  </div>
          </div>
          <div  className=' flex flex-col items-start mx-3 mt-4 md:mt-7 bg-white rounded-sm shadow-xl py-5 px-5'>
          <div  className=' w-full flex flex-col rounded-t-md'>
    <img className='w-[60px] h-[60px]' src={it4} alt='' />
    <p className='text-base font-medium mt-4 '>
    IT Management
  </p>
  <p className='text-sm  font-normal  mt-2'>
    Lorem Ipsum is simply dummy text of the printing and typesetting
  </p>
  <div className='my-4'>
                  <Link className=' border-b-2 border-[#211C5A] text-[#211C5A] text-sm font-medium'>Read more &#62; </Link>
                </div>
  </div>
          </div>

          </div>
        </div>
    </div>

    </>
  )
}

export default Section4


