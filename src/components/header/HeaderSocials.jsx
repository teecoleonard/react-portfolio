import React from 'react'
import { BsLinkedin, BsGithub, BsBehance } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/leonardohenriquedejesussilva/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/teecoleonard" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://behance.net" target="_blank" rel="noreferrer">
        <BsBehance />
      </a>
    </div>
  )
}

export default HeaderSocials