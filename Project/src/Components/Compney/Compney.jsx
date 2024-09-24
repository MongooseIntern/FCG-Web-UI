import React from 'react'
import img2 from '../../assets/Compney Section/img2.png'
import img3 from '../../assets/Compney Section/img3.png'
import {Link} from 'react-router-dom'


function Compney() {
  return (
    <>
    <div  style={{border:"2px solid red"}} className='container flex flex-col items-center '>
    <div className='h-80 w-11/12 xl:w-full bg-[#edededd4] absolute flex flex-col justify-center items-center'>
<h1 className='text-5xl font-semibold text-[#211C5A]'>Company</h1>
<div className='my-4'>
<Link className='font-semibold text-xl' > Home /</Link>

<Link className='text-[#211C5A] font-semibold text-xl '> Company</Link>
</div>

</div>
<div style={{border:"2px solid green"}}  className='h-80 w-11/12 xl:w-full Bg-img1 '>


</div>


<div style={{border:"2px solid green"}} className='mt-16 h-auto w-11/12 xl:w-full xl:gap-40  md:flex justify-center  gap-5 '>

  <div style={{border:"2px solid red"}} className='h-[450px] lg:h-[600px] xl:w-[30%] md:col-6 md:w-[50%]  lg:flex  '>
    <img className='h-full w-full ' src={img2} alt="" />
  </div>
  <div style={{border:"2px solid brown"}} className=' md:col-6 md:w-[50%] xl:w-[50%] xl:flex xl:justify-center  xl:flex-col'>
<h1 className=' font-semibold text-5xl my-8 md:my-0 lg:my-8 xl:my-2'>Our <span className='text-[#211C5A]'>Compnay</span></h1>
<div className='mt-8 md:mt-0'>
<p className='my-4'><b>Freedom Consulting Group Inc. (FCG)</b>  is an Information Technology Service Provider with a history of growth and success based upon the skills of our highly qualified and diversified staff.</p>
<p className='my-4'> FCG provides expert computer professionals to advise on Management Consulting, System Requirements, Design, Development and Implementation, Conversion and Migration, Network Integration and Connectivity,Production Systems Support, Technical Documentation and Training and Education,. We maintain a computerized labor pool containing resumes of our consultants nationwide.</p>
<p className='my-4'> FCG is versed in the following systems and we have invested in SAP Technology to assist clients in optimizing their investment by providing users the ability to stay on the cutting edge via ongoing in-house training.</p>
</div>

  </div>
</div>



<div style={{border:"2px solid green"}} className='h-auto w-11/12 xl:w-full xl:gap-40  md:flex justify-center  gap-5 '>
<div style={{border:"2px solid brown"}} className=' md:col-6 md:w-[50%] xl:w-[50%] xl:flex xl:justify-center  xl:flex-col'>

<div className='mt-8 md:mt-0'>

<p className='my-4'> SAP installation on UNIX and Windows NT platforms SAP R/3 ABAP/4 for advanced tools and utilities SAP R/3 FI, CO, MM, PP and SD configuration Networking Support for UNIX and Windows NT Oracle database backup and recovery strategies User training on SAP R/3 and ABAP/4 modules</p>
<p className='my-4'>FCG services clients in a diverse range of industries, including:</p>
<div>
<ul className='ml-5 list-disc'>
  <li className='text-xs'>Banking and Insurance</li>
  <li className='text-xs'>Defense</li>
  <li className='text-xs'>Health Care Services</li>
  <li className='text-xs'>Manufacturing and Engineering</li>
  <li className='text-xs'>Pension Administration</li>
  <li className='text-xs'>Retail</li>
  <li className='text-xs'>Telecommunications</li>
  
</ul>
</div>

</div>

  </div>
  <div style={{border:"2px solid red"}} className='h-[450px] lg:h-[600px] xl:w-[30%] md:col-6 md:w-[50%]  lg:flex  '>
    <img className='h-full w-full ' src={img3} alt="" />
  </div>
 
</div>
    </div>
      
      </>
  )
}

export default Compney