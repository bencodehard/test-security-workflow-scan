import Demp_illustration from "./icon/Demp_illustration.svg";
import Dap_illustration from "./icon/Dap_illustration.svg";
import CarbonToken_illustration from "./icon/CarbonToken_illustration.svg";

import Image from 'next/image'

const Projects = () => {
    return ( 
        <section className="flex flex-col">
        <div className="w-full mb-16 border-b border-white/20">
            <h2 className="mb-2 title sm:text-4xl md:text-5xl">
            VEKIN: An Innovative Solution for Managing the Energy Ecosystem and Achieving Decarbonization for All
            </h2>
            <p className="mt-6 mb-4 intro-long">
            Unlock complicated processes, costs, and times with VEKIN total energy ecosystem management, carbon monitoring and verification, and carbon tokenized platform utilizing converging technologies, analytic software, and business intelligence for corporate and households want to save energy and preserve the planet.
            </p>
        
        </div>
        <div className='flex flex-col items-center justify-center mt-4 shadow-2xl shadow-vekin/30 bg-gradient-to-t from-vekin/20 to-white rounded-b-xl'>
            <div className='project-items '>
                <Image className="pointer-events-none "
                    src={Demp_illustration}
                    width={340} 
                    height={400}
                    alt="Digital Energy Ecosystem Management Platform"
                />
                <div className="project-details">
                    <h3 className='project-heading'>DEMP</h3>
                    <h4 className='project-sub '>Digital Energy Ecosystem Management Platform</h4>
                    <hr className="w-12 mt-2 mb-4 border-2 border-vekin-green-60"></hr>
                    <p className="project-description">Assist utilities manager, facility management executives, and smart home owner to reduce your integration costs and times by connecting monitoring software with any devices enables seamless sharing of data via multiple systems on IoT platform. </p>
                </div>
            </div>

            <div className='project-items '>
                <div className='order-last project-details xl:ml-32 md:order-first'>
                    <h3 className='project-heading'>DAP</h3>
                    <h4 className='project-sub'>Decarbonization Accreditation Platform</h4>
                    <hr className="w-12 mt-2 mb-4 border-2 border-vekin-green-60"></hr>
                    <p className="project-description lg:w-[90%]">Monitor, report, and verify your company and your daily routine activities that emit carbon footprint by our software built on commitment to quality, trust and cutting edge technology to help you offset, find ways to change the cycle of carbon, and save the world</p>
                </div>
                <Image className="pointer-events-none"
                    src={Dap_illustration}
                    width={340} 
                    height={400}
                    alt="Decarbonization Accreditation Platform"
                />
            </div>

            <div className='project-items '>
                <Image className="pointer-events-none "
                    src={CarbonToken_illustration}
                    width={340} 
                    height={400}
                    alt="Carbon Tokenized Platform"
                />
                <div className="project-details">
                    <h3 className='project-heading'>CARBON TOKEN</h3>
                    <h4 className='project-sub'>Carbon Tokenized Platform</h4>
                    <hr className="w-12 mt-2 mb-4 border-2 border-vekin-green-60"></hr>
                    <p className="project-description">Capture lower carbon emission activities of individuals and businesses and convert carbon credits to digital assets by the power of blockchain technology making your green daily activities more transparent, liquid andmeaningful.</p>
                </div>
            </div>
        </div>
        
        </section>
     );
}
 
export default Projects;

