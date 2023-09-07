import Image from 'next/image'
import { useEffect,useState } from 'react';
import { recognitionDetails } from '../../config/recognitionDetails';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const isEven = (n) => n % 2 === 0;
const previousEven = (n) => n>2 && ((n-2) % 2)==0;
 
const RecognitionItems = () => {
    return ( 
        <section className='flex flex-col gap-10 mb-20 custom-container'>
        

        <div className='grid grid-cols-2 gap-4 '>
          {recognitionDetails.reverse().map((recognition, index) =>(
          <a key={index} href={recognition.link} target={'_blank'} rel="noreferrer" className={`hover:shadow-md grid grid-cols-2 gap-2 bg-vekin-white text-vekin-black rounded-sm`}>
            <div className={`w-full h-64 `}>
            <Image
                priority
                loader={myLoader}
                src={recognition.image}
                width={550}
                height={550}
                className='object-cover w-full h-full'
                alt={recognition?.title}
              
              />
              
            </div>
            <article className='p-4 '>
              <span className='text-lg font-semibold'>{recognition?.type}</span>
              <h1 className='h-40 mb-2 text-lg'>{recognition?.title}</h1>
            
              <button type='button' className={`p-1 px-2 text-sm rounded-md  bg-vekin text-vekin-white hover:bg-vekin-green-60'`}>Learn More</button>
            </article>
            
          </a>

            
          ))}
          
        </div>
      
        </section>
     );
}


 
export default RecognitionItems;