import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { FaArrowDown } from 'react-icons/fa'

const Header = () => {
  const headerTextRef = useRef(null);
  
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
            <h1>Olá, sou<br /><span className="text-gradient">Leonardo Henrique</span></h1>
            <h2 className="header__subtitle">Desenvolvedor Fullstack / Analista de Dados</h2>
            <p className="header__description">
              Desenvolvo aplicações web e móveis modernas com foco na experiência do usuário e análise com visualização de dados para transformar informações em insights estratégicos.
            </p>
            <CTA />
          </div>
          
          <HeaderSocials />
        </div>
        
        <div className="scroll__indicator">
          <a href="#about">
            <FaArrowDown />
            <span>ROLAR PARA BAIXO</span>
          </a>
        </div>
      </div>
      
      <div className="header__shape-1"></div>
      <div className="header__shape-2"></div>
    </header>
  )
}

export default Header