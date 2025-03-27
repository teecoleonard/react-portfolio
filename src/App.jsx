import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portifolio/Portifolio'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollObserver from './components/ScrollObserver'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <ScrollObserver />
      
      <Header />
      <div className="section-divider section-divider-header-about"></div>
      
      <About />
      <div className="section-divider section-divider-about-experience"></div>
      
      <Experience />
      <div className="section-divider section-divider-experience-work"></div>
      
      <Work />
      <div className="section-divider section-divider-work-portfolio"></div>
      
      <Portfolio />
      <div className="section-divider section-divider-portfolio-contact"></div>
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App