import MetaTags from '../../components/layout/MetaTags';
import { use, useEffect } from 'react';
import Banner from "../../components/dap/Banner";
import Sidebar from "../../components/dap/Sidebar";
import Router, { useRouter } from 'next/router';

export default function DAP() {


    //TODO: add the "out Impartiality content here"
    useEffect(() => {
      window.location.href = "/dap/our-impartiality";
    },[]);

    // const route = useRouter()
    // if(route=="/dap"){
    //   Router.push("/dap/our-impartiality")
    // }

  return (
    <section>
    <MetaTags page_title={"VEKIN | DAP"} page_description={"Vekin Dap"}/>
    <Banner/>
    <Sidebar/>
    </section>
  )
}