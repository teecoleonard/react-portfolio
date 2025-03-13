import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me4.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá eu Sou</h5>
        <h1>Leonardo Henrique</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Role Para Baixo</a>
      </div>
    </header>
  )
}

export default Header