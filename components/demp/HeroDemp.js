import Image from 'next/image';
import { useEffect,useState } from 'react';



const HeroDemp = () => {
  
    return (  
    <section className='relative w-full lg:h-[70vh] '>
      <div className=''>
      <div className='absolute top-0 z-50 w-full h-full bg-vekin-white/30'></div>
        <Image
          priority
          src={'/demp/vekin-banner-demp-01.jpg'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
         
        />
      </div>

      <div className='relative flex items-center justify-start h-[80%] container z-[60]'>
        <h1 className='inline-flex flex-col lg:w-[25%] pb-16 lg:pb-0 mt-28 text-6xl font-semibold  lg:text-8xl text-vekin-black'>
          DEMP <span className='text-xl font-normal tracking-normal lg:text-2xl '>Dynamic Energy Management Platform</span></h1>
       
      </div>
    </section>
        
    );
}
 
export default HeroDemp;