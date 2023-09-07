import Image from 'next/image';
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
} from '../assets/partners';

const Partners = () => {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9
  ];

    return ( 
        <section className='partners-items'>
          <h2 className="title sm:text-4xl md:text-5xl">Partners</h2>
        <p className="mx-auto mb-8 intro sm:max-w-xl">Collaborating with Industry Leaders to Deliver Exceptional Results
        </p>
        <div className='grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-9'>
          {partners?.map((partner, index) =>(
            <span key={index} className='py-1 pb-1 rounded-full bg-white/10 '>
              <Image  className="object-fill object-center rounded-full pointer-events-none opacity-90"
                    src={partner}
                    width={150} 
                    height={100}
                    alt="partners"
                />
              
            </span>
  
  
          ))}
  
        </div>
      </section>
     );
}
 
export default Partners;
