'use client'

import Contact from 'src/components/Contact'
import FAQ from 'src/components/FAQ'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Hero from 'src/components/Hero'

import HowItWorks from 'src/components/HowItWorks'
import Services from 'src/components/Services'
import Testimonials from 'src/components/Testimonials'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
