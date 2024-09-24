import React from 'react'
import Linkimg from '../../assets/Linkimg.png';
import Section from '../../assets/Section.png';
import SectionRes from '../../assets/SectionRes.png';

function Section3() {
  return (
    <>
<div   className='  container-xl flex items-center flex-col '>

<div  className='w-full '>
<div  className=' Bg-3 h-[482px] flex flex-col items-center justify-evenly md:grid md:grid-cols-2  gap-2   '>
  
<div  className='md:flex md:items-center md:justify-evenly'>
  <img className='plybtn  '  src={Linkimg} alt='' />
  </div>

  <div  className='w-11/12 md:w-full md:order-first text-center flex flex-col items-center '>

    <h1 className='text-center text-2xl leadning-9 text-white font-semibold md:text-4xl md:font-bold md:leading-snug md:text-start md:mr-24'> BEST 
  <span className='text-center text-2xl leadning-9 text-white  border-b-2 border-white font-normal md:text-start'> BUSINESS PLANNING</span>
  <h1 className='text-center text-2xl leadning-9 text-white font-semibold md:text-start'> ENSURE SUCCESS</h1>
</h1>
<div className='mt-5 md:text-start '>

<p className='text-sm md:text-base text-white'>Lorem Ipsum is simply dummy text of the printing and</p>
<p className='text-sm md:text-base text-white'>typesetting industry. Lorem Ipsum has been the industry's</p>
<p className='text-sm md:text-base text-white'>standard dummy text ever since the 1500s</p>
</div>

</div>
 
</div>
</div>
</div>
    </>
  )
}

export default Section3


// style={{border:"2px solid red"}}