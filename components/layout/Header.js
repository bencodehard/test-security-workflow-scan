import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HamburgerMenu from './navbar/HamburgerMenu';
import { NavBar_desktop, NavBar_mobile } from './navbar/NavBar';

import VekinLogo from '../VekinLogo';


const Header = ({isOpen, setOpen}) => {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px 
    useEffect(() => {
      const scrollHandler = () => {window.pageYOffset > 10 ? setTop(false) : setTop(true)};
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]); 

   
    return (
      <header  className={`header ${!top && 'bg-white shadow'}`}>
        <section className=" mx-auto max-w-[106rem] ">
          <div className="header-items">
            {/* logo */}
            <div className="flex-shrink-0 px-5 mr-4 sm:px-6">
              {/* Logo */}
              <Link href="/"><VekinLogo /></Link>

            </div>
            {/* Site navigation */}
            <HamburgerMenu  isOpen={isOpen} setOpen={setOpen} />
            {/* <NavBar_desktop /> */}
            <NavBar_mobile isOpen={isOpen} />

          </div>
        </section>
      </header>
    );
}
 
export default Header;