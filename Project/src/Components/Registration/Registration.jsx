import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
    
  return (
    <>
    <div   className='container flex flex-col items-center'>


    <div className='h-80 w-11/12 xl:w-full bg-[#edededd4] absolute flex flex-col justify-center items-center'>
<h1 className='text-5xl font-semibold text-[#211C5A]'>Registration Form</h1>
<div className='my-4'>
<Link className='font-semibold text-xl' > Home /</Link>

<Link className='text-[#211C5A] font-semibold text-xl'> Registration Form</Link>
</div>

</div>
<div  className='h-80 w-11/12 xl:w-full Bg-img1 '>


</div>

        <div   className='md:mt-16 w-11/12  lg:w-[75%]  flex rounded-xl shadow-lg p-3.5 lg:flex flex-col mt-10 bg-white'>

        <h1 className='text-5xl text-[#2D3740] font-semibold Montserrat-Text mt-12'>Registered <span className='text-5xl font-semibold Montserrat-Text my-1 text-[#211C5A] '>Form</span></h1>
<div  className=' flex flex-col items-center lg:w-[full] lg:grid lg:grid-cols-2 '>

<div  className='w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-12 '>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> First Name*</label>
        <input className=' Registration-Input' placeholder='Enter Your First Name' type="text" />
       </div>
       <div  className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 xl:mt-12'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Middle Name*
        </label>
        <input className=' Registration-Input' placeholder='Enter Your First Name' type="text" />
       </div>
<div className=' w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Last Name*
        </label>
        <input className=' Registration-Input ' placeholder='Enter Your First Name' type="text" />
       </div>
       <div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Birth Date*
        </label>
        <input className=' Registration-Input' placeholder='Enter Your First Name' type="date" />
       </div>
<div className=' w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Home Number*
        </label>
        <input className=' Registration-Input ' placeholder='Enter Your First Name' type="text" />
       </div>
       <div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Mobile Number*
        </label>
        <input className='Registration-Input' placeholder='Enter Your First Name' type="text" />
       </div>
<div className=' w-full md:w-[95%] lg:w-[95%] relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'>Email ID1*
        </label>
        <input className=' Registration-Input' placeholder='Enter Your First Name' type="text" />
       </div>
       <div className='w-full md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5'>
        <label className='absolute top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Email ID2*
        </label>
        <input className=' Registration-Input' placeholder='Enter Your First Name' type="text" />
       </div>
       </div>
       <select className='w-full md:w-[full] lg:w-full  rounded-lg font-normal p-3 my-5 outline-none'><option className='select-color'><select disabled>
           Gender*</select>   </option>
           <option> Female</option>
           <option> Male</option>
           <option> Other</option>
           </select>
       
<div   className=' flex flex-col md:flex md:flex-col lg:w-[full] lg:grid lg:grid-cols-2 '>
<label className='text-sm font-semibold text-[#53575b] py-2 ' >Programming Language Known</label>
<div  className='flex flex-col md:flex md:flex-row md:items-center md:align-bottom  ' >
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>PHP</label>
           </div>
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>.Net</label>
           </div>
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>VB</label>
           </div>
           <div className='my-2'>
           <input className='Registration-Checkboc mx-1' type="checkbox" />
           <label className='mx-1 text-sm'>SAP</label>
           </div>
           <div className='my-2'>
           <input className='Registration-Checkboc mx-1' type="checkbox" />
           <label className='mx-1 text-sm'>Java  </label>
           </div>
           <div className='my-2'>
           <input className='Registration-Checkboc mx-1' type="checkbox" />
           <label className='mx-1 text-sm'>Oracle</label>
           </div>
        
</div>
</div>
<div   className=' flex flex-col md:flex md:flex-col lg:w-[full] lg:grid lg:grid-cols-2 '>
<label className='text-sm font-semibold text-[#53575b] py-2 ' >Language Known:</label>
<div  className='flex flex-col md:flex md:flex-row md:items-center md:align-bottom  ' >
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>English</label>
           </div>
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>Hindi</label>
           </div>
<div className='my-2 '>
           <input className='Registration-Checkboc mx-1 my-2' type="checkbox" />
           <label className='mx-1 text-sm'>Gujarati</label>
           </div>
           <div className='my-2'>
           <input className='Registration-Checkboc mx-1' type="checkbox" />
           <label className='mx-1 text-sm'>Others</label>
           </div>
          
        
</div>
</div>
       
         
         
          

            <label className='flex flex-col  text-sm font-semibold text-[#53575b] py-2' >Education Qualification:</label>
            <div className='flex flex-col md:flex md:flex-row items-center '>
                 <div  className='w-full md:w-[28%] py-2'>
<label className='text-sm mt-4 mb-1 ' >S.S.C</label>

            </div>
            <div  className=' md:flex w-full md:w-[75%] md:gap-4 py-2 '>
           
           
           <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='Percentage' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='University' type="text" />
           </div></div>
            <div className='flex flex-col md:flex md:flex-row items-center '>
                 <div  className='w-full md:w-[28%]'>
<label className='text-sm mt-4 mb-1 ' >H.S.C</label>

            </div>
            <div className=' md:flex w-full md:w-[75%] md:gap-4 py-2'>
           
           
           <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='Percentage' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='University' type="text" />
           </div></div>
            <div className='flex flex-col md:flex md:flex-row items-center '>
                 <div  className='w-full md:w-[28%]'>
<label className='text-sm mt-4 mb-1 ' >Diploma
</label>

            </div>
            <div  className=' md:flex w-full md:w-[75%] md:gap-4 py-2 '>
           
           
           <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='Percentage' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='University' type="text" />
           </div></div>
            <div className='flex flex-col md:flex md:flex-row items-center '>
                 <div  className='w-full md:w-[28%]'>
<label className='text-sm mt-4 mb-1 ' >Degree</label>

            </div>
            <div  className=' md:flex w-full md:w-[75%] md:gap-4 py-2 '>
           
           
           <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='Percentage' type="text" />
           <input className=' Registration-SubInput my-1 p-1' placeholder='University' type="text" />
           </div></div>

                <div className='flex flex-col md:flex md:flex-row items-center '>
                    <div  className='w-full md:w-[28%]'>
    <label className='text-sm mt-4 mb-1 ' >Post Graduate    </label>

                </div>
                <div  className=' md:flex w-full md:w-[75%] md:gap-4 py-2'>
            
            
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
            <input className=' Registration-SubInput my-1 p-1' placeholder='Percentage' type="text" />
            <input className=' Registration-SubInput my-1 p-1' placeholder='University' type="text" />
            </div></div>
           
          
           <div  className='lg:flex lg:justify-between '>
           <label className='flex flex-col  text-sm font-semibold text-[#53575b] py-2' >Industrial Experience:</label>

<div  className='w-full lg:w-[75%] lg:flex lg:justify-end lg:flex-col'>
<div  className='w-full md:flex  md:flex-row md:gap-2   lg:mt-10'>
              <input Registration-Input className='Registration-SubInput my-1 p-1 ' placeholder='Company Name' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='From' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='To' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
              </div>
<div className='w-full md:flex  md:flex-row md:gap-2   '>
              <input Registration-Input className='Registration-SubInput my-1 p-1  ' placeholder='Company Name' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='From' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='To' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
              </div>
<div  className='w-full md:flex  md:flex-row md:gap-2   '>
              <input Registration-Input className='Registration-SubInput my-1 p-1 ' placeholder='Company Name' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='From' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='To' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
              </div>
<div className='w-full md:flex  md:flex-row md:gap-2   '>
              <input Registration-Input className='Registration-SubInput my-1 p-1  ' placeholder='Company Name' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='From' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='To' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
              </div>
</div>

          
           </div>
          
            
           <div  className='lg:flex lg:justify-between '>
           <label className='flex flex-col  text-sm font-semibold text-[#53575b] py-2' >Other</label>

<div  className='w-full lg:w-[75%] lg:flex lg:justify-end lg:flex-col'>
<div  className='w-full md:flex  md:flex-row md:gap-2 '>
              <input Registration-Input className='Registration-SubInput my-1 p-1 ' placeholder='Company Name' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='From' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='To' type="text" />
            <input Registration-Input className='Registration-SubInput my-1 p-1' placeholder='Year' type="text" />
              </div>
              </div>
          
          
            </div>
           
            <div className='w-full h-48 md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute  top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Current Address*</label>
        <input className='h-auto Registration-Input' placeholder='Enter Your Current Address' type="text" />
       </div>
            <div className='w-full h-48 md:w-[95%] lg:w-full relative z-[100px] border-2 border-[#ccc]  rounded-lg mt-5 '>
        <label className='absolute  top-[-10px] mx-3  bg-white text-sm font-medium text-[#53575b]'> Permanent Address**</label>
        <input className='h-auto Registration-Input' placeholder='Enter Your Permanent Address' type="text" />
        
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

export default Registration