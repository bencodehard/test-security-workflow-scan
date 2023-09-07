import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/Hero';

import DempImage from '../components/assets/DEMP.png'
import DapImage from '../components/assets/DAP.png'
import CarbonTokenImage from '../components/assets/CARBON-TOKEN.png'

import Stats from '../components/home/Stats';
import Partners from '../components/home/Partners';
import Projects from '../components/home/Projects';
import Details from '../components/home/Details';
import HeroDemp from '../components/demp/HeroDemp';
import DempDetails from '../components/demp/DempDetails';
import KeyFuture from '../components/demp/KeyFuture';
import MetaTags from '../components/layout/MetaTags';
import BenefitSlider from '../components/demp/BenefitSlider';
import functional_pic from '../components/assets/FunctionalArchitecture.jpg'
import demp_banner_bottom from '../components/assets/DempBannerBottom.jpg'





export default function Demp() {

  return (
    <section className='custom-container2'>
        <MetaTags page_title={"VEKIN | DEMP - Dynamic Energy Management Platform"} page_description={"Demp is a real-time big data analytic platform for maximizing energy efficiency by verifying, analyzing and optimizing energy usage or any kind of facility."}/>
        <HeroDemp />
        
        <DempDetails />
        <KeyFuture />

        <div className='relative flex justify-center w-full'>
            <div className=''>
                <Image
                    className=""
                        priority={true}
                        src={'/demp/VEKIN-web6_demp-pic2.svg'}
                        
                        
                        // objectPosition="center"
                        alt="DEMP structure"
                        width={1500} 
                        height={850}
                        />

            </div>
        </div>

        <BenefitSlider />

        <div className='relative flex flex-col items-center justify-center w-full'>
          <h3 className='mb-2 text-vekin title sm:text-4xl md:text-5xl'>Functional Architecture</h3>
            <div className=''>
                <Image
                  src={functional_pic}
                  // objectPosition="center"
                  alt="Demp Functional Architecture"
                  width={1500} 
                  height={850}
                />

            </div>
        </div>

        <div className='relative w-full h-96'>
                <Image
                className='w-full h-96'
                  src={demp_banner_bottom}
                  // objectPosition="center"
                  // layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Demp Functional Architecture"
                  width={1290}
                  height={720}
                />
        </div>


   
    
   
    </section>
  )
}