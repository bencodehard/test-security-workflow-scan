import Link from "next/link";
import VekinLogo from "../VekinLogo";
import { companyInfo } from "../../config/companyDetails";

const Footer = ({extraStyle}) => {
    return ( 
        <footer className="relative w-screen mt-auto">
            
                
        <div className={"  container flex items-center justify-between py-6"}>
            <div className="flex justify-center w-full mb-20 md:justify-around">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <VekinLogo />
                        <p className="max-w-sm mt-2">{companyInfo.name} <br></br> {companyInfo.address}</p>
                    </div>
                </div>

                <div className="hidden mt-6 lg:mt-0 lg:flex-1 md:block">
                    <div className="grid justify-between gap-6 md:grid-cols-3 lg:grid-cols-4">
                        <div className="hidden lg:block"></div>
                        <div className="footer-category">
                            <h3 className="font-semibold uppercase text-vekin-black ">Info</h3>
                            <a href="#" className="footer-items">About</a>
                            <a href="#" className="footer-items">Recognition</a>
                            <a href="#" className="footer-items">Contact</a>
                        </div>

                        <div className="footer-category">
                            <h3 className="font-semibold uppercase text-vekin-black">Products</h3>
                            <Link href={'/demp'} className="footer-items">DEMP</Link>
                            <Link href={'/dap'} className="footer-items">DAP</Link>
                            <a href={'https://carbon.in.th/'} className="footer-items" target='_blank' rel="noopener noreferrer">CERO</a>
                        </div>

                    
                        <div className="footer-category">
                            <h3 className="font-semibold uppercase text-vekin-black">Contact</h3>
                            <span className="inline-flex items-center gap-2 footer-items"> <i className="ri-phone-fill"></i> 02 714 2490</span>
                            <a href="mailto:contact@vekin.co.th" className="inline-flex items-center gap-2 footer-items"><i className="ri-mail-fill"></i>  contact@vekin.co.th</a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
            
        
<div className="absolute bottom-0 w-full mt-4 bg-vekin ">
    
        <div className="container flex items-center justify-between w-full py-4">
            <p className="text-sm text-vekin-white">Copyright © VEKIN 2010-{new Date().getFullYear()} - All rights reserved</p>

            <div className="flex flex-row gap-2">
                        <a href="https://www.facebook.com/vekin.th/" target={'_blank'} rel="noreferrer"
                            className="mx-2 transition-colors duration-300 hover:text-vekin-white text-vekin-white"
                            aria-label="Facebook">
                            <i className="text-2xl ri-facebook-circle-fill"></i>
                        </a>

                        <a href="https://www.linkedin.com/company/vekin/" target={'_blank'} rel="noreferrer"
                            className="mx-2 transition-colors duration-300 hover:text-vekin-white text-vekin-white"
                            aria-label="LinkedIn">
                            <i className="text-2xl ri-linkedin-box-fill"></i>
                        </a>
                    
                        
                    </div>
        </div>
</div>
</footer>
     );
}
 
export default Footer;