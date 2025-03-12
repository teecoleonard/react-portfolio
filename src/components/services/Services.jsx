import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O Que Ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de sites responsivos e modernos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de aplicações web utilizando React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de websites com WordPress</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO e otimização de performance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manutenção e atualização de sites existentes</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação de APIs RESTful</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de sistemas com Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integração com bancos de dados SQL e NoSQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Autenticação e autorização</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy e configuração de servidores</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Microserviços e arquitetura escalável</p>
            </li>
          </ul>
        </article>

        {/* END OF BACKEND DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Design UX/UI</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototipagem e wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design de interfaces responsivas</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Estudos de usabilidade</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design de interação</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design system e padronização visual</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX DESIGN */}
      </div>
    </section>
  )
}

export default Services