import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle='OUR PROGRAMS' title='What We Offer' />

        <Programs />

        <About />

        <Title subTitle='Gallery' title='Campus Photos' />

        <Campus />

        <Title subTitle='Testimonials' title='What Student Says' />

        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />

        <Contact />
      </div>

    </div>
  )
}

export default App