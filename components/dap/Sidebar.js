import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected,setIsSelected] = useState(false)
  const { pathname } = useRouter();

  const handleClick = () => {
    if(pathname==="/dap/our-impartiality"){
        setIsActive(false)
        setIsSelected(false)
      }else if((pathname==="/dap/cfo" || pathname==="/dap/cfp" || pathname==="/dap/carbon-credit" || pathname==="/dap/cf-event" )){
      setIsSelected(true)
      setIsActive(true)
    }
  }

  return (
    <section className="mx-auto">
      <Link href={"/dap/our-impartiality"} onClick={()=>setIsSelected(false)} className={`flex justify-center items-center text-vekin text-xl w-[319px] p-4 rounded-full ${ isSelected || pathname==="/dap/our-impartiality" ?"bg-vekin text-white":"border-2 border-vekin text-vekin"}`}>
        Our impartiality
      </Link>
      <details open={isSelected || pathname==="/dap/cfo" || pathname==="/dap/cfp" || pathname==="/dap/carbon-credit" || pathname==="/dap/cf-event"} onClick={()=>{
        handleClick() 
        setIsSelected(true)
        }} className={`mt-4 styled `}>
        <summary className={`flex items-center justify-center w-[319px] rounded-full cursor-pointer ${(pathname==="/dap/cfo" || pathname==="/dap/cfp" || pathname==="/dap/carbon-credit" || pathname==="/dap/cf-event" ) ?"bg-vekin text-white":"bg-white text-vekin border-2 border-vekin"}`}>
          <div className="text-xl ">
            Service
          </div>
        </summary>

        {(isSelected || pathname==="/dap/cfo" || pathname==="/dap/cfp" || pathname==="/dap/carbon-credit" || pathname==="/dap/cf-event") &&
        <ul className="text-xl w-[319px] divide-y list-disc font-Roboto font-semibold">
          <li 
          className={`my-4 ml-14 ${pathname==="/dap/cfo"?"text-vekin marker:text-vekin":"text-black marker:text-black"}`}
          >
            <Link href={"/dap/cfo"} >CFO</Link>
          </li>
          <li className={`my-4 ml-14 ${pathname==="/dap/cfp"?"text-vekin marker:text-vekin":"text-black marker:text-black"}`}>
            <Link href={"/dap/cfp"} >CFP</Link>
          </li>
          <li className={`my-4 ml-14 ${pathname==="/dap/carbon-credit"?"text-vekin marker:text-vekin":"text-black marker:text-black"}`}>
            <Link href={"/dap/carbon-credit"}>Carbon credit</Link>
          </li>
          <li className={`my-4 ml-14 ${pathname==="/dap/cf-event"?"text-vekin marker:text-vekin":"text-black marker:text-black"}`}>
            <Link href={"/dap/cf-event"}>CF-Event</Link>
          </li>
        </ul>
        }
      </details>
    </section>
  );
};

export default Sidebar;
