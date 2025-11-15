import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './Components/MessageSection';
import { useGSAP } from '@gsap/react';
import NutritionSection from './Components/NutritionSection';
import BenrfitSection from './Components/BenrfitSection';
import TestimonialSection from './Components/TestimonialSection';
import Footer from './Components/Footer';
import FlavorHorizentolsection from './Components/FlavorHorizentolsection';

gsap.registerPlugin(ScrollTrigger ,ScrollSmoother);

const App = () => {
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    })
  })


  return (
    <main>
      <Navbar />

      <div id="smooth-wrapper"
      >
        <div id="smooth-content">

           <Hero/>
      <MessageSection />
      <FlavorHorizentolsection />
      <NutritionSection/>
      

      <div className="">
        <BenrfitSection />
        <TestimonialSection />
      </div>
      <Footer/>
</div>
             </div>
     </main>
  )
}

export default App