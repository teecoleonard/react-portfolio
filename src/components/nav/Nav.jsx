import React, { useState, useEffect } from 'react'
import './nav.css'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    
    // Observer para atualizar navegação ativa com base na seção visível
    const updateActiveNavFromSection = () => {
      const activeSection = document.body.getAttribute('data-active-section');
      if (activeSection) {
        setActiveNav(activeSection === 'header' ? '#' : `#${activeSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Observe mutations no corpo para detectar mudanças de seção ativa
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-active-section') {
          updateActiveNavFromSection();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    }
  }, []);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-theme')
  }
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  const handleNavLinkClick = (navId) => {
    setActiveNav(navId)
    setMenuOpen(false)
  }
  
  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav__container container">
        <a href="#" className="nav__logo" onClick={() => handleNavLinkClick('#')}>
          leonardo<span>.jsx</span>
        </a>
        
        <ul className="nav__links">
          <li>
            <a href="#" 
              onClick={() => handleNavLinkClick('#')} 
              className={activeNav === '#' ? 'active' : ''}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" 
              onClick={() => handleNavLinkClick('#about')} 
              className={activeNav === '#about' ? 'active' : ''}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#experience" 
              onClick={() => handleNavLinkClick('#experience')} 
              className={activeNav === '#experience' ? 'active' : ''}>
              Skills
            </a>
          </li>
          <li>
            <a href="#work" 
              onClick={() => handleNavLinkClick('#work')} 
              className={activeNav === '#work' ? 'active' : ''}>
              Trabalho
            </a>
          </li>
          <li>
            <a href="#portfolio" 
              onClick={() => handleNavLinkClick('#portfolio')} 
              className={activeNav === '#portfolio' ? 'active' : ''}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" 
              onClick={() => handleNavLinkClick('#contact')} 
              className={activeNav === '#contact' ? 'active' : ''}>
              Contato
            </a>
          </li>
        </ul>
        
        <div className="nav__actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          
          <div className="nav__menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav