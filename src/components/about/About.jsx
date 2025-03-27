import React from 'react'
import './about.css'
import ME from '../../assets/eu.png'
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="section__header">
          <h5>Conheça</h5>
          <h2>Sobre Mim</h2>
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <p>1+ Anos</p>
            </div>

            <div className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projetos</h5>
              <p>5+ Completados</p>
            </div>
          </div>
          
          <div className="about__text">
            <h3>Um pouco da minha trajetória</h3>
            <p>Começei a melhor com desenvolvimento muito novo, quando eu era pequeno gostava muito de fazer servidor privado de jogos gratuitos
            e com isso fui me aprimorando e aprendendo cada vez, mas apenas recentemente que eu consegui entrar na Faculdade de Sistemas de Informação.
            </p>
            <p>
            Aprender e aplicar meu conhecimento para ajudar as pessoas é uma das minhas maiores motivações.
            Atualmente, estou cursando Sistemas de Informação na Universidade Descomplica. 
            Com experiência sólida em React, Node.js e bases de dados SQL/NoSQL, busco constantemente aprender 
            novas tecnologias e aplicar meu conhecimento para resolver problemas reais e ajudar pessoas. 
            </p>
            <p>
            Após a graduação, meu objetivo é explorar ainda mais o mundo da programação ou banco de dados, continuando a aprender e evoluir todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About