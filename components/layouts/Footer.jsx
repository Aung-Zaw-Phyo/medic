import React from 'react'

const Footer = () => {
  return (
      <div>       
       {/* <a href="#" className=" back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-[#B2DDED] text-white text-lg z-20 duration-300 hover:bg-[#B2DDED]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
      </a> */}
      <div className="h-[1px] w-full bg-gray-300"/> 
      <div className='py-6 bg-[#eeeeee]'>
          <div className='container flex justify-between items-center'>
              <h1 className='uppercase font-bold text-3xl text-[#2b2b2b]'>Logo</h1>
              <div className='text-lg'>Copyright@2024</div>
          </div>  
      </div>
    </div>
  )
}

export default Footer