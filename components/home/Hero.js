import Image from 'next/image';
import { useEffect, useState } from 'react';
import hero_img from '../../public/VEKIN-web-banner-01.jpg';
import Banner1 from './Banner1';
import Banner2 from './Banner2';

import homeBanner from '../assets/VekinBanner.webp'
import Link from 'next/link';



const Hero = () => {
  
      
    return (  
       
            <section className='flex flex-col-reverse xl:gap-4 lg:flex-row'>
              <div className='w-[80%] xl:w-[60%] mx-auto'>
                {/* <h1 className="px-8 mt-16 mb-4 text-4xl font-extrabold leading-tight text-center text-vekin-black xl:text-6xl xl:px-40">VEKIN is driving today's <span className="text-vekin">green activities</span>  for tomorrow's greener world </h1> */}

                <h1 className="mt-16 mb-4 text-4xl xl:text-[2.5rem] text-center lg:text-start font-extrabold leading-tight text-vekin-black">Driving today's <span className="text-vekin">green activities</span>  for tomorrow's greener world </h1>
                      
                <p className="mb-8 text-xl text-center xl:max-w-2xl lg:text-start">
                Together, we can work towards creating a greener future for all through the power of VEKIN sustainability efforts
                </p>

                
                {/* buttons */}
                <div className="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row lg:justify-start">
                  <Link href="/contact" className="btn-primary">Get in Touch</Link>
                  <Link href="/about" className="btn-secondary">Learn More</Link>
                  
                </div>
                
              </div>
            <div className='w-[90%] lg:w-[100%] mx-auto'>

                      <div className='block '>
                        <Image
                          className=''
                          priority
                          src={homeBanner}
                          // layout="responsive"
                          // objectFit="cover"
                          // objectPosition="center"
                          alt="Vekin"
                          width={1290}
                          height={720}
                        />
                      </div>
              
            </div>   
            
               
            </section>
      



    );
}
 
export default Hero;
