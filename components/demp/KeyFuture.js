import Image from "next/image";

const KeyFuture = () => {

    const values =[
        {
            'title': 'Borderless Connectivity',
            'icon':'VEKIN-icon_KeyFuture-1.svg',
            'description':'DEMP allows users to self-customize not only a visual dashboard but also the system behind device management, data configuration, device control function, reporting and analytic module.' 
        },
        {
            'title': 'Self-customization',
            'icon':'VEKIN-icon_KeyFuture-2.svg',
            'description':'The utility system was designed with agility. It is applicable to all sources of connection protocol from different Iot equipment simultaneously' 
        },
        {
            'title': 'Big Data Analytics',
            'icon':'VEKIN-icon_KeyFuture-3.svg',
            'description':'DEMP drives big data as a powerful asset within data lake management in a real time manner across multiple devices simultaneously.' 
        },
        {
            'title': 'Open-API for any Front-end Apps',
            'icon':'VEKIN-icon_KeyFuture-4.svg',
            'description':'DEMP is a collaboration platform to seamlessly function together, enabling lot to deliver data to cloud computing and make commons to control devices.' 
        },
        {
            'title': 'Standardize Energy Audit Report',
            'icon':'VEKIN-icon_KeyFuture-5.svg',
            'description':"DEMP can be report the measurements to prove the real-time result of the standard IPVMP: 2017 directly through lot and main energy devices, resulting in accurate."
        },
        {
            'title': 'Auto-notification and Alerts',
            'icon':'VEKIN-icon_KeyFuture-6.svg',
            'description':'Automatic notification alerts actionable insights based on what data has to say, which allows users to work more efficiently, faster spot trends whilst in the flow.' 
        },
        {
            'title': 'Cloud-based/ Mobility',
            'icon':'VEKIN-icon_KeyFuture-7.svg',
            'description':'The system is compatible work with other applications which can eliminate berries from using the platform.' 
        },
        {
            'title': 'Authority',
            'icon':'VEKIN-icon_KeyFuture-8.svg',
            'description':'Limiting access rights with the Log in security (Username/Password) and preventing the unauthorized access to the system.' 
        },
        {
            'title': 'Cyber Security',
            'icon':'VEKIN-icon_KeyFuture-9.svg',
            'description':'Personal data of users is highly secured with confidentiality, reliably encrypted with HTTPS Technology over SSL at TOT Internet Data Center, complied with International Standards; ISO/IEC 27001, ISO/IEC 20000-1, ISO 22301, CSA STAR.' 
        },
        {
            'title': 'Widget Library System',
            'icon':'VEKIN-icon_KeyFuture-10.svg',
            'description':'Supporting to create the new widget or interface for variety of application needs with dynamic platform.' 
        },
      
    ]
    return ( 
        

        <section className='mt-12 relative w-full h-full bg-gradient-to-b from-[#24847E] to-[#409B8C] '>
          

            <div className='hidden lg:block'>
                <Image
                className=""
                    priority
                    src={'/demp/VEKIN-web6_demp-pic1bg.svg'}
                    layout="fill"
                    objectFit="cover"
                    // objectPosition="center"
                    alt="hero image example"
                
                />
            </div>
                
            

            <div className='relative flex flex-col items-center justify-start py-12 custom-container'>
            <h2 className="font-semibold text-center text-vekin-green-20">KEY FUTURE</h2>



                <div className="grid items-center justify-end grid-cols-1 gap-16 mt-8 md:grid-cols-2">
                    {values?.map(({title, description, icon})=>(
                        <div key={title} className="flex even:justify-end odd:justify-start" >
                            <div className="flex flex-col items-center justify-center text-center lg:w-2/3">
                            
                                <div className='w-16 h-16 border rounded-full '>
                                    <Image
                                    src={`/demp/icons/${icon}`}
                                    alt={title}
                                    width={200} 
                                    height={200}
                                    />
                                </div>
                                <h3 className="mb-4 font-semibold text-vekin-green-20 project-heading">{title}</h3>
                                <p className="w-full text-vekin-white project-description">{description}</p>
                                
                            </div>
                
                                
                        </div>
                    ))}
                    
                </div>
            
            </div>
            
         

        </section>
     );
}
 
export default KeyFuture;