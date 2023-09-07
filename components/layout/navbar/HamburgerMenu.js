const HamburgerMenu = ({isOpen, setOpen}) => {
    return ( 
        <div className="relative top-0 lg:hidden sm:px-8">
            <button onClick={()=> setOpen(!isOpen)} type="button" className="text-vekin-black hover:text-yellow focus:outline-none " aria-label="toggle menu">

            {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2 border rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            </button>
        </div>
     );
}
 
export default HamburgerMenu;