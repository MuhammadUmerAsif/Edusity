import { useState } from 'react'
import { Navbar,Hero,Programs,Title, About, Campus, Testimonials,Contact,Footer } from './Components'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title='Our PROGRAM' subtitle='What we offer' />
        <Programs />
        <About />
        <Title title='GALLERY' subtitle='Campus Photos' />
        <Campus />
        <Title title='TESTMOINALS' subtitle= 'What Student Says' />
        <Testimonials />
        <Title title='Contact Us' subtitle= 'Get in Touch' />
        <Contact />
        <Footer />
      </div>
      
    </>
  )
}

export default App
