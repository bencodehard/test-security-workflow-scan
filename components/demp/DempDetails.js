import CoreValues from './CoreValues';
import KeyFuture from './KeyFuture';
import WhatIsDemp from './WhatIsDemp';

const DempDetails = () => {
    return ( 
        <section className="flex flex-col gap-10 mt-12 custom-container">
            {/* <div className="flex justify-center md:text-center">
                <p className="lg:w-[70%] xl:w-[65%] text-xl">DEMP is a real-time big data analytic platform to maximize energy efficiency at a lower cost by veri"cation, analyzing and optimizing the energy usage for any kind of facilities and sample for anyone </p>
            </div> */}

        <div className="xl:w-[75%]  border-b border-white/20 mx-auto">
            <h2 className="mb-2 title sm:text-4xl md:text-5xl">
            Energy Management with DEMP: A Big Data Analytics Platform
            </h2>
            <p className="mt-6 mb-4 intro-long">
            DEMP is a real-time big data analytic platform to maximize energy efficiency at a lower cost by verification, analyzing and optimizing the energy usage for any kind of facilities and sample for anyone
            </p>
        
        </div>

      <WhatIsDemp />
      <CoreValues />
    </section>
  );
};

export default DempDetails;
