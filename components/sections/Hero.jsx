import React from 'react'

const Hero = () => {
  return (
    <div>        
        <div 
            className="
                h-[100vh] bg-fixed bg-cover bg-bottom object-cover bg-no-repeat
            "
            style={{ backgroundImage: "url('https://preview.colorlib.com/theme/pharma/images/hero_1.jpg.webp')" }}
        >
            <div className="container mx-auto h-[100vh] w-[100%] text-white flex flex-col justify-center items-center">
                <div className="uppercase text-lg font-bold mb-4 text-center">Effective Medicine, New Medicine Everyday</div>
                <h1 className="uppercase text-5xl font-bold text-center">Welcome To Medic</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero