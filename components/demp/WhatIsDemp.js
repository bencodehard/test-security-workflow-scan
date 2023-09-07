import Image from "next/image";

const WhatIsDemp = () => {
    return ( 
        <div className="relative lg:h-[26rem] mt-12 w-full">
            <div className="   flex flex-col-reverse md:flex-col lg:h-[80%] gap-4 p-10 lg:p-16 rounded-xl bg-vekin-green-80 text-vekin-white">
                <div>
                    <h2 className="font-semibold text-start">What is DEMP?</h2>
                    <p className="md:w-[55%] lg:w-[50%] xl:w-[40%] text-xl mt-2">DEMP (Dynamic Enterprise Management Platform) is a digital platform of cutting edge technology that aims to promote the development of innovative energy efficiency solutions</p>
                    
                </div>
                
                <div className='right-0 z-10 md:w-1/2 md:absolute lg:top-6 xl:top-4'>
                    <Image 
                    priority
                    src={'/demp/VEKIN-web5-DEMP.png'}
                    
                    // objectFit="cover"
                    // objectPosition="center"
                    alt="Dynamic Enterprise Management platform"
                    width={800} 
                    height={450}
                    />
                </div>
            </div>

        </div>
     );
}
 
export default WhatIsDemp;