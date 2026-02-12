import React, { useState } from 'react'
import './nav.css'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useActiveNav } from '../../hooks/useActiveNav'
import LanguageSwitcher from '../language-switcher/LanguageSwitcher'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { activeNav, scrolled, handleNavLinkClick } = useActiveNav()
  
  const navLinks = [
    { href: '#', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.expertise') },
    { href: '#qa', label: t('nav.qa') },
    { href: '#architecture', label: t('nav.architecture') },
    { href: '#portfolio', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ]
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  const handleLinkClick = (navId) => {
    handleNavLinkClick(navId)
    setMenuOpen(false)
  }
  
  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav__container container">
        <button 
          type="button"
          className="nav__logo" 
          onClick={() => handleLinkClick('#')}
          aria-label="Ir para o início da página"
        >
          leonardo<span>.jsx</span>
        </button>
        
        <ul className="nav__links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={() => handleLinkClick(link.href)} 
                className={activeNav === link.href ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__language">
          <LanguageSwitcher />
        </div>
        
        <div className="nav__actions">
          <div className="nav__menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav