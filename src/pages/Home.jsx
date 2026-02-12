import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import QA from '../components/qa/QA'
import Architecture from '../components/architecture/Architecture'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import ScrollObserver from '../components/ScrollObserver'
import { useLanguageRoute } from '../hooks/useLanguageRoute'
import { useMetaTags } from '../hooks/useMetaTags'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { language } = useLanguageRoute();
  const { t } = useTranslation();

  // Meta tags dinâmicas baseadas no idioma
  useMetaTags({
    title: t('meta.title'),
    description: t('meta.description'),
    url: `https://portfolio.yourdomain.com/${language}`,
    image: 'https://portfolio.yourdomain.com/preview.jpg'
  });

  return (
    <div className="app">
      <ScrollObserver />
      
      <Header />
      <div className="section-divider section-divider-header-about"></div>
      
      <About />
      <div className="section-divider section-divider-about-experience"></div>
      
      <Experience />
      <div className="section-divider section-divider-experience-portfolio"></div>
      
      <QA />
      <div className="section-divider section-divider-about-experience"></div>
      
      <Architecture />
      <div className="section-divider section-divider-experience-portfolio"></div>
      
      <Portfolio />
      <div className="section-divider section-divider-portfolio-contact"></div>
      
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
