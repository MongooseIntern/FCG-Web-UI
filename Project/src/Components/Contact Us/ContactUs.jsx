import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <>
    <div className='container flex flex-col items-center'>
    <div className='h-80 w-11/12 xl:w-full bg-[#edededd4] absolute flex flex-col justify-center items-center'>
<h1 className='text-5xl font-semibold text-[#211C5A]'>Contact Us</h1>
<div className='my-4'>
<Link className='font-semibold' > Home /</Link>

<Link className='text-[#211C5A] font-semibold '> Contact Us</Link>
</div>

</div>
<div style={{border:"2px solid green"}}  className='h-80 w-11/12 xl:w-full Bg-img1 '>


</div>

        <div  className='md:mt-16 w-11/12  lg:w-[75%]  flex rounded-xl shadow-lg p-3.5 lg:flex flex-col mt-10 bg-white'>
        <h1 className='text-5xl text-[#2D3740] font-semibold Montserrat-Text mt-12 '>Get in <span className='text-5xl font-semibold Montserrat-Text my-1 text-[#211C5A] '>Touch</span></h1>
        <div  className=' flex flex-col items-center lg:w-[full] lg:grid lg:grid-cols-2 '>
<div  className='w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-12 '>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>Full Name*


        </label>
        <input className=' Registration-Input' placeholder='Enter Your Full Name' type="text" />
       </div>
<div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc] mt-5  rounded-lg lg:mt-12'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>E-mail*

        </label>
        <input className=' Registration-Input' placeholder='Enter Your E-mail' type="text" />
       </div>
<div className='w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Company Name*

        </label>
        <input className=' Registration-Input' placeholder='Enter Your Company Name' type="text" />
       </div>
<div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>Phone*

        </label>
        <input className=' Registration-Input' placeholder='Enter Your Phone' type="text" />
       </div>
<div className='w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>Fax*

        </label>
        <input className=' Registration-Input' placeholder='Enter Your Fax' type="text" />
       </div>
       <div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>Country*

        </label>
        <input className=' Registration-Input' placeholder='1' type="text" />
       </div>
       </div>
       <div  className='w-full h-48 md:w-full lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute  top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Comments*</label>
        <input className='h-auto Registration-Input' placeholder='Enter Your Comments' type="text" />
       </div> 
       <div  className=' w-52 flex  justify-between'>
        <button className='Submit-btn'> Submit</button>
        <button className='Cancle-btn'> Cancle </button>
       </div>
</div>


    </div>
        
    </>
  )
}

export default ContactUs