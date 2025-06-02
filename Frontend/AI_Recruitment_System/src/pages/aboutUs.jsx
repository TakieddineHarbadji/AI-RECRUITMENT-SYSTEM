import { useState } from 'react'
import Footer from '../Components/footer';
import StatsSection from '../Components/aboutUs/stats';
import MissionSection from '../Components/aboutUs/mission';
import MapSection from '../Components/aboutUs/map';
import TestimonialSection from '../Components/aboutUs/testimonial';
import RegistrationSection from '../Components/aboutUs/registration';

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
