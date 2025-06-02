import { useState } from 'react'
import Footer from '../components/footer';
import StatsSection from '../components/aboutUs/stats';
import MissionSection from '../components/aboutUs/mission';
import MapSection from '../components/aboutUs/map';
import TestimonialSection from '../components/aboutUs/testimonial';
import RegistrationSection from '../components/aboutUs/registration';

function App() {

  return (

    <>
   <StatsSection/>
   <MapSection />
   <MissionSection/>
   <TestimonialSection/>
   <RegistrationSection/>
    <Footer />
  </>
  )
}

export default App
