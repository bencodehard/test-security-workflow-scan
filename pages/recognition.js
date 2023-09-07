import Image from 'next/image'
import MetaTags from '../components/layout/MetaTags';
import HeroRecognition from '../components/recognition/HeroRecognition';
import RecognitionItems from '../components/recognition/RecognitionItems';




export default function Recognition() {

  return (
    <section className='custom-container2'>
        <MetaTags page_title={"VEKIN | Recognition"} page_description={"Recognition"}/>
        

       <HeroRecognition />
       <RecognitionItems />


    
    
    
    </section>
  )
}