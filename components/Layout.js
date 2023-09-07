import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Link from "next/link";
import VekinLogo from "./VekinLogo";
import HamburgerMenu from "./layout/navbar/HamburgerMenu";
import { NavBar_desktop, NavBar_mobile } from "./layout/navbar/NavBar";


const Layout = ({children}) => {
    //to handle the display of nav on mobo
    const [isOpen, setOpen] = useState(false);
    const [top, setTop] = useState(true);

    // to close nav bar on mobo when user clicks outside the nav bar
    const closeNav=()=>{if(isOpen) setOpen(false)}

    

    useEffect(() => {
    const resizeHandler = () => {window.innerWidth > 518 && setOpen(false)};
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    }, [isOpen]);

    // detect whether user has scrolled the page down by 10px 
    useEffect(() => {
      const scrollHandler = () => {window.pageYOffset > 10 ? setTop(false) : setTop(true)};
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]); 


    return ( 
        <section className="flex flex-col justify-between h-screen">
       
        <main className="relative w-screen ">
        
        <section className={`sticky z-[100] top-0  ${!top && 'bg-white  shadow'}`} onClick={closeNav}>
            <div className="container flex items-center justify-between py-2">
                <VekinLogo />
                <HamburgerMenu  isOpen={isOpen} setOpen={setOpen} />
                <NavBar_desktop />
                <NavBar_mobile isOpen={isOpen}/>
                
            </div>
        </section>
        
        <section className={isOpen?'hidden':''}>
            
            {children}
        </section>
            
       
           
            
        </main>
        <Footer extraStyle="container relative " />
            
        
        </section>
     );
}
 
export default Layout;