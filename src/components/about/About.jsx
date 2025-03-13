import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import ME__alt from '../../assets/me-about4.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>3+ Anos</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>10+ No Brasil</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>15+ Completados</small>
            </article>
          </div>

          <p>
            Sou um desenvolvedor Fullstack apaixonado por criar soluções web eficientes e elegantes. Com experiência sólida
            em React, Node.js e bases de dados SQL/NoSQL, busco aprender e aplicar meu conhecimento para ajudar as pessoas é uma das minhas maiores motivações.
            Após a graduação, meu objetivo é explorar ainda mais o mundo da programação ou banco de dados, continuando a aprender e evoluir todos os dias..
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About