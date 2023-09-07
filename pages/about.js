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
import HeroAbout from '../components/about/HeroAbout';
import ChooseVekin from '../components/about/ChooseVekin';
import MetaTags from '../components/layout/MetaTags';


export default function About() {

  return (
    <section className='custom-container2 bg-gradient-to-b from-white to-[#f3faf9]'>
    <MetaTags page_title={"VEKIN | About Us"} page_description={"VEKIN is engineering decarbonization and carbon tokenization through Blockchain Technology, Artificial Intelligence (AI), Internet of things(IoT), and big data."}/>
    <HeroAbout />
    <ChooseVekin />
    </section>
  )
}