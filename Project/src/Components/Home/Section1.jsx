import React from 'react';
import contant from '../../assets/contant.png';
import section1 from '../../assets/section1.png';
import bg from '../../assets/bg.png';

function Section1() {
  return (
    <>
<div  className='container-xl flex flex-col items-center Section1-Bg' >
<div  className=' h-auto w-11/12  md:w-full  md:grid md:grid-cols-2 xl:gap-28  ' >
<div  className='flex justify-center flex-col '>
<img  className='w-72 h-72 md:w-[55%] md:h-56 lg:h-72 lg:w-[74%] xl:h-[50%] xl:w-[58%]  absolute ' src={bg} alt="" />

<div  className=' md:p-4 md:mx-6 lg:ml-6  xl:w-full '>

<div  className='md:w-[90%] lg:w-[95%] xl:w-[65%]  xl:mx-28 mt-0.5  '>
<h1  className='text-2xl  text-white font-bold lg:text-4xl lg:font-bold my-2  '>
           FREEDOM
           <span className=' text-2xl text-white border-b-2  lg:text-4xl lg:font-normal  '> CONSULTING </span>
              GROUP
           </h1>
</div>
          
          <p  className='xl:w-[85%]  text-[12px] font-light text-white mt-4  overflow-hidden lg:text-sm mb-4  xl:mx-28 '>
           FCG provides expert computer professionals to advise on Management
           Consulting, System Requirements, Design, Development and
           Implementation, Conversion and Migration, Network Integration and
           Connectivity,Production Systems Support, Technical Documentation
           and Training and Education, We maintain a computerized labor pool
           containing resumes of our consultants nationwide.
         </p>
</div>
</div>
<div   className='md:h-[120vh]  xl:h-full flex justify-center md:flex md:items-center md:justify-center mb-7'>
<img  className='xl:h-full  hidden md:block  bg-cover  ' src={contant} alt='' />
<img className=' md:hidden overflow-hidden bg-cover ' src={section1} alt="" /> 

</div>
</div>
</div>
    </>
  );
}

export default Section1;


     

