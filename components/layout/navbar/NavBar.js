import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';




const navLinks =[
    {
        'name':'About',
        'url':'/about'
    },
    {
        'name':'DEMP',
        'url':'/demp'
    },
    {
        'name':'DAP',
        'url':'/dap'
    },
    {
        'name':'CERO',
        'url':'https://carbon.in.th/',
        'external':true
    },
    {
        'name':'Recognition',
        'url':'/recognition'
    },
    {
        'name':'Contact',
        'url':'/contact'
    },
]

const NavBar_desktop = () => {
    const router = useRouter();
    return ( 
        <nav className="flex-grow hidden px-5 lg:flex sm:px-6">
              <ul className="flex flex-wrap items-center justify-end flex-grow gap-14">
                {navLinks?.map(({name,url, external})=>(
                   <li key={name}>
                    {external ?
                    <a href={url} className={router.pathname == url ? "nav-item text-vekin underline underline-offset-2" : "nav-item"} target='_blank' rel="noopener noreferrer">{name}</a>
                    : 
                    <Link href={url} className={router.pathname == url ? "nav-item text-vekin underline underline-offset-2" : "nav-item"}>{name}</Link> }
                    </li>
                ))} 
              </ul>
            </nav>
     );
}

const NavBar_mobile = ({isOpen}) => {
    const router = useRouter();
    return ( 
        <>
        {isOpen && 
            <nav className="fixed right-0 z-10 w-full h-full bg-white border lg:hidden top-20">
                <ul className="flex flex-col items-center justify-end flex-grow gap-10 p-10">
                {navLinks?.map(({name,url, external})=>(
                   <li key={name}>
                    {external ?
                    <a href={url} className={router.pathname == url ? "nav-item text-vekin underline underline-offset-2" : "nav-item"} target='_blank'  rel="noopener noreferrer">{name}</a>
                    : 
                    <Link href={url} className={router.pathname == url ? "nav-item text-vekin underline underline-offset-2" : "nav-item"}>{name}</Link> }
                    </li>
                ))} 
                </ul>
            </nav>
        }
        </>
     );
}
 
export {NavBar_desktop, NavBar_mobile} ;
