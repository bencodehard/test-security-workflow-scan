import Image from "next/image";

const ChooseVekin = () => {
    return ( 
        <>
        <section className=" custom-container">
            <h2 className="font-semibold text-center">Why People Choose <span className="text-vekin">VEKIN</span></h2>
            
            <div className="flex justify-center">
                <div className='flex flex-col items-center justify-center w-[80%] '>
                    <div className='project-items'>
                        <div className="order-last project-details md:order-first w-[75%]">
                            <h3 className='mb-4 font-semibold project-heading'>Optimize time consuming analysis and reporting</h3>
                            <p className="">Our innovative and efficient analytics software and system surpass all manual and burdensome works that takes hours and days long</p>
                        </div>
                        <Image className="pointer-events-none "
                            src={'/about/VEKIN-web6_about-pic1.svg'}
                            width={340} 
                            height={400}
                            alt="Optimize time consuming analysis and reporting"
                        />
                    
                    </div>

                    <div className='project-items '>
                        <Image className="pointer-events-none"
                            src={'/about/VEKIN-web6_about-pic2.svg'}
                            width={340} 
                            height={400}
                            alt="Transform big data into effortless and real time data visualization"
                        />
                        <div className='project-details w-[75%]'>
                            <h3 className='mb-4 font-semibold project-heading'>Transform big data into effortless and real time data visualization</h3>
                            <p>Provide an accessible way to grab audiences interest, share energy saving trends, see patterns in data, and make data driven decisions from an ease of use dashboard.</p>
                        </div>
                    </div>
                

                    <div className='project-items'>
                        <div className="order-last project-details md:order-first w-[75%]">
                            <h3 className='mb-4 font-semibold project-heading'>Manage and scale up your facilities and green projects at ease</h3>
                            <p >Speedy energy consumption analysis allows your project coverage expansion possible with a few clicks.</p>
                        </div>
                        <Image className="pointer-events-none "
                            src={'/about/VEKIN-web6_about-pic3.svg'}
                            width={340} 
                            height={400}
                            alt="Manage and scale up your facilities and green projects at ease"
                        />
                        
                    </div>
            </div>
                
            </div>
            
        </section>
        </>
     );
}
 
export default ChooseVekin;