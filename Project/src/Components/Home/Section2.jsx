import React from 'react';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import businesStrategy from '../../assets/businesStrategy.png';
import financialPlan from '../../assets/financialPlan.png';
import internationalBusiness from '../../assets/internationalBusiness.png';
function Section2() {
  return (
    <>
<div 
        className=' container-xl  flex items-center flex-col py-12'>

<div className='w-fulllg:w-11/12 xl:w-11/12 flex justify-center'>



<div className='w-11/12 lg:flex md:w-11/12 gap-6 '>

<div className=' md:grid md:grid-cols-2 lg:w-[100%] gap-5'>
  
  <div  
              className=' '>
<img
                  
                  className=' rounded-lg  w-full  md:rounded-b-none lg:mt-16 '
                  src={left}
                  alt=''
                />
                <div
                  
                  className='py-5 my-8  rounded-lg gap-2 flex flex-col justify-center items-center Section1-Bg md:rounded-t-none  '
                >
                  <span className=' font-bold text-4xl text-white'>20+</span>
                  <span className=' font-semibold text-sm text-white'>
                    Years Experience
                  </span>
                </div>
          </div>
          <div className=''>
            
                <img
                  
                  className=' hidden rounded-lg w-full  md:block  md:mt-0'
                  src={right}
                  alt=''
                />
              </div>
</div>
<div  className=' w-full lg::w-[50%] py-2  '>

              <h1 className='text-5xl font-semibold text-start leading-tight lg:leading-snug md:text-5xl md:font-bold  md:leading-none md:text-start overflow-hidden  '>
                FREEDOM <br />
                <span className=' font-normal  text-[#211C5A]  border-b-2 border-black overflow-hidden  '> CONSULTING</span> GROUP INC.
              </h1>
<div  className='w-full md:w-full mt-16' >
<p className='text-sm font-normal   Montserrat-Text    '>
                Established in 1995, Freedom Consulting Group Inc., (FCG) is a
                premier Information Technology Service Provider headquartered in
                Lansdale, PA. serving clients across the US and Internationally.
                We are a leader in IT solutions ranging from Management
                Consulting, Solution Development, ERP Implementations,
                Conversion and Migrations; Network Integration and Connectivity;
                Training and Education and Production Systems Support.
              </p>
              <p className='text-sm mt-5 Montserrat-Text'>
                Our experienced and highly skilled professionals are versed in
                technologies such as SAP, Oracle, UNIX, Web Development, Network
                Deployment and Systems Administration.
              </p>
              <p className='text-sm mt-5 Montserrat-Text'>
                We help optimize the functionality of your business by applying
                the latest innovations in resolving your process problems and
                software development challenges. Contact us today to discover
                how we can help optimize your business operations.
              </p>
</div>     
</div>
</div>
       
</div>
</div>
      <div
       
        className=' flex justify-center  bg-white rounded-sm shadow-xl py-5'
      >
        <div
         
          className='w-11/12  gap-5 xl:w-10/12 flex flex-col items-center   md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 '
        >
          <div className='   rounded-t-md flex flex-row justify-center gap-5 py-5 px-5 shadow-md rounded-md '>
            <img className='w-[55px] h-[55px]' src={businesStrategy} alt='' />
            <div className=''>
              <p className='text-2xl font-medium '>Business Strategy</p>
              <p className='text-xs font-normal py-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur nam optio cumque molestias, explicabo modi cupiditate.
              </p>
            </div>
          </div>
          <div className='   rounded-t-md flex flex-row justify-center gap-5 py-5 px-5 shadow-md rounded-md '>
            <img className='w-[55px] h-[55px]' src={financialPlan} alt='' />
            <div className=''>
              <p className='text-2xl font-medium '>Financial Planning</p>
              <p className='text-xs font-normal py-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur nam optio cumque molestias, explicabo modi cupiditate.
              </p>
            </div>
          </div>

          <div className='  rounded-t-md flex flex-row justify-center gap-5 py-5 px-5 shadow-md rounded-md '>
            <img
              className='w-[55px] h-[55px]'
              src={internationalBusiness}
              alt=''
            />
            <div className=''>
              <p className='text-2xl font-medium '>International Business</p>
              <p className='text-xs font-normal py-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur nam optio cumque molestias, explicabo modi cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
