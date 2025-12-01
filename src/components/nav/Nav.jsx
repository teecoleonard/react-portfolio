import React, { useState } from 'react'
import './nav.css'
import { FiMenu, FiX } from 'react-icons/fi'
import { useActiveNav } from '../../hooks/useActiveNav'
import { content } from '../../data/content'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { activeNav, scrolled, handleNavLinkClick } = useActiveNav()
  
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
          {content.navigation.logo}
        </button>
        
        <ul className="nav__links">
          {content.navigation.links.map((link, index) => (
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