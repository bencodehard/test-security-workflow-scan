
import ComingSoon from '../components/layout/ComingSoon';
import MetaTags from '../components/layout/MetaTags';
import Image from 'next/image';

import ContactForm from '../components/contact/contactForm';
import LocationMap from '../components/contact/locationMap';
import { companyInfo } from '../config/companyDetails';

export default function Contact() {
  return (
    <>
    <MetaTags page_title={"VEKIN | Contact Us"} page_description={"coming soon"}/>
   {/* <ComingSoon /> */}

 
            <Image
              priority={true}
              src={'/contact-page-banner.jpg'}
              width={1500} 
                  height={850}
              // layout="fill"
              // objectFit="cover"
              // objectPosition="center"
              alt="about us VEKIN"
              className='object-cover w-full lg:h-96'
            
            />
            
        
<div className='flex justify-center'>

    <div className='w-[80%] lg:w-full lg:container grid gap-4 md:grid-cols-2 md:pb-20 '>

          <div className='mt-10'>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-vekin-black md:hidden">Contact Us</h2>
            <h1 className='text-xl lg:text-left lg:w-[70%] lg:text-xl text-vekin-black'>
            We welcomes potential collaboration from any organization interested in helping lower global carbon emissions and green technology. Contact us today to discuss more</h1>

            <div className='flex flex-col gap-8 mt-4 lg:flex-col'>
              <div  className='w-[80%] lg:w-[40%]'>
                  <span className='text-lg font-semibold text-vekin'>Address:</span>
                  <p className='text-sm '>{companyInfo.name} <br></br> {companyInfo.address}</p>
              </div> 

              <div className='flex flex-row gap-10'>
                  <div >
                      <span className='text-lg font-semibold text-vekin'>Tel:</span>
                      <p className='text-sm '>{companyInfo.tel}</p>
                  </div> 

                  <div>
                      <span className='text-lg font-semibold text-vekin'>Email:</span>
                      <p className='text-sm '>{companyInfo.email}</p>
                  </div> 
              </div>
            </div>
          
          </div>

        <ContactForm />

    </div>

</div>
     <LocationMap />



 

  
    </>
  )
}