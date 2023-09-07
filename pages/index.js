import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/Hero';

import DempImage from '../components/assets/DEMP.png'
import DapImage from '../components/assets/DAP.png'
import CarbonTokenImage from '../components/assets/CARBON-TOKEN.png'

import Stats from '../components/home/Stats';
import Partners from '../components/home/Partners';
import Projects from '../components/home/Projects';
import Details from '../components/home/Details';
import MetaTags from '../components/layout/MetaTags';


export default function Home() {

  return (
    <section className='py-32 custom-container'>
      <MetaTags page_title={"VEKIN | Innovative Solution"} page_description={"Vekin is driving today's green activities for tomorrow's greener world"}/>
      <Hero />
      <Stats /> 
      
      <Projects />
      <Partners /> 
    </section>

  )
}
