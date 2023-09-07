import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/autoplay';




// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
const BenefitSlider = () => {


    const benefits =[
        {
            'description':'Digitalize Devices or Machines',
            'details':'DEMP enables any devices or Machines to collaborate with each other on one single platform effectively with full functionality without any interruptions to their original functions.'
        },
        {
            'description':'Cost Saving',
            'details':"Any devices and machines can connect with DEMP directly without the addition of intermediary software configuration. Using a cloud-based platform, DEMP doesn't require any local servers or any IT specialists on-site."
        },
        {
            'description':'Flexibility in Implementation',
            'details':'Regarding the cloud computing platform that serves as Paas (Platform asa Service) without license or user limitation, it eases the devices to perform online through DEMP. Plug & Play function delivers high flexibility in implementation.'
        }
        
    ]
    
    return ( 
        
        <section className="relative h-[25rem] mb-20">
            <div className="w-full bg-vekin h-[60%]"></div>

            <div className="absolute w-full top-10">
            <h2 className="mb-8 text-center text-white capitalize">Key Benefit</h2>

                console.log(process.env,...)
            <div className="flex flex-col items-center justify-center w-full pb-8 bg-transparent top-20">
                
                  <div className="w-[60%] lg:w-[90%] 2xl:w-[70%] z-10">
                        <Swiper
                        
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        navigation
                        autoPlay={{delay: 1000, disableOnInteraction: false,}}
                        breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination,Navigation, Autoplay]}
                        className=" mySwiper"
                        
                    >
                        {benefits.map(({description, details}, index)=>(
                            <SwiperSlide key={index} className="p-8 bg-white border rounded-xl">
                                <div className="h-64">
                                    <h4 className="mb-4 text-2xl font-semibold text-vekin">{description}</h4>
                                    <p>{details}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                      
                    </Swiper> 

                </div>

                
            </div>
            </div>
            
        </section>
     );
}
 
export default BenefitSlider;