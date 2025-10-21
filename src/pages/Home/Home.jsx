import React from 'react'
import ProfessionalFAQ from './FAQ'
import AlKhwarizmiSection from './Education'
import AboutSection from './About'
import HeroSlider from './Hero'
import { Faculties } from './Faculties'
import ReviewsSection from './Testimonials'
import PartnersSection from './Partners'

export const Home = () => {
  return (
  <>
  <HeroSlider/>
  <AboutSection/>
<Faculties/>
  <AlKhwarizmiSection/>
  <ProfessionalFAQ/>
  <ReviewsSection/>
  <PartnersSection/>
  </>
  )
}
