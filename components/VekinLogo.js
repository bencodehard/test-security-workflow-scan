import Link from 'next/link';
import logo from './assets/vekinLogo.svg'
import Image from 'next/image';


const VekinLogo = () => {
    return ( 
        <Link href="/">
          
                <Image
                    className='w-24 h-auto transition duration-1000'
                    priority
                    src={logo}
                    alt="Vekin logo"
                    width={120}
                    height={50}
                /> 
          
        
        </Link>

       
     );
}
 
export default VekinLogo;