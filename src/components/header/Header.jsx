import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { FaArrowDown } from 'react-icons/fa'
import { content } from '../../data/content'
import profileImage from '../../assets/me-about-profile2.png'

const Header = () => {
  const headerTextRef = useRef(null);
  const { header } = content;
  
  useEffect(() => {
    if (headerTextRef.current) {
      headerTextRef.current.classList.add('animate-fadeUp');
    }
  }, []);
  
  return (
    <header>
      <div className="container header__container">
        <div className="header__content" ref={headerTextRef}>
          <div className="header__intro">
            <h1>Olá, sou<br /><span className="text-gradient">{header.name}</span></h1>
            <h2 className="header__subtitle">{header.title}</h2>
            <p className="header__description">
              {header.description}
            </p>
            <CTA />
          </div>
          
          <HeaderSocials />
        </div>
        
        <div className="header__image">
          <img src={profileImage} alt={header.name} className="header__profile-img" />
        </div>
        
        <div className="scroll__indicator">
          <a href="#about">
            <FaArrowDown />
            <span>{header.scrollText}</span>
          </a>
        </div>
      </div>
      
      <div className="header__shape-1"></div>
      <div className="header__shape-2"></div>
    </header>
  )
}

export default Header