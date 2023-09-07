import Image from 'next/image';
import { useEffect,useState } from 'react';



const HeroAbout = () => {
  
    return (  
    <section className='relative w-full h-[50vh] md:h-[100vh]'>
      <div className='z-10 '>
        <Image
          priority={true}
          src={'/about/vekin-banner-about2-01.jpg'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
         
          
          
        />
      </div>

      <div className='relative flex items-center  h-[80%] container'>
        <h1 className='mt-4 w-[75%] sm:w-[60%] md:w-[60%] text-xl md:text-3xl lg:w-1/2 lg:text-4xl'>VEKIN is engineering decarbonization and carbon tokenization by utilizing blockchain technology, artificial intelligence (AI), internet of things(IoT), and big data to set a new and adaptive approach for all corporate citizens to transform green vision into a reality </h1>
       
      </div>
    </section>
        
    );
}
 
export default HeroAbout;