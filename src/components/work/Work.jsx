import React from 'react'
import './work.css'
import { FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa'

const Work = () => {
  return (
    <section id="work">
      <div className="container work__container">
        <div className="section__header">
          <h5>Experiência Profissional</h5>
          <h2>Experiência & Serviços</h2>
          <p className="section__subtitle">
            Minha jornada profissional e os serviços que ofereço como desenvolvedor fullstack.
          </p>
        </div>
        
        <div className="work__content">
          <div className="work__experiences">
            <h3>Experiências Profissionais</h3>
            
            <div className="work__timeline">
              <div className="work__item">
                <div className="work__item-header">
                  <div className="work__item-icon">
                    <FaBriefcase />
                  </div>
                  <h4>Analista de Processos</h4>
                  <div className="work__item-company">
                    <FaBuilding /> <span>NTT DATA</span>
                  </div>
                  <div className="work__item-period">
                    <FaCalendarAlt /> <span>2022 - Atual</span>
                  </div>
                </div>
                <div className="work__item-content">
                  <p>
                    Desenvolvimento de aplicações web utilizando React no frontend e Node.js no backend. 
                    Implementação de APIs RESTful e integração com sistemas de terceiros.
                  </p>
                  <ul>
                    <li>Desenvolvimento frontend com React, Redux e Styled Components</li>
                    <li>Construção de APIs com Node.js, Express e MongoDB</li>
                    <li>Implementação de autenticação JWT e OAuth</li>
                    <li>Otimização de performance e UX</li>
                  </ul>
                </div>
              </div>
              
              <div className="work__item">
                <div className="work__item-header">
                  <div className="work__item-icon">
                    <FaBriefcase />
                  </div>
                  <h4>Desenvolvedor Frontend</h4>
                  <div className="work__item-company">
                    <FaBuilding /> <span>Startup ABC</span>
                  </div>
                  <div className="work__item-period">
                    <FaCalendarAlt /> <span>2021 - 2022</span>
                  </div>
                </div>
                <div className="work__item-content">
                  <p>
                    Atuação no desenvolvimento de interfaces de usuário responsivas e acessíveis para aplicações web.
                  </p>
                  <ul>
                    <li>Desenvolvimento de UI com HTML5, CSS3 e JavaScript</li>
                    <li>Implementação de designs responsivos e acessíveis</li>
                    <li>Otimização de SEO e performance</li>
                    <li>Colaboração em metodologias ágeis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="work__services">
            <h3>Serviços Oferecidos</h3>
            
            <div className="work__services-grid">
              <div className="work__service-card">
                <div className="work__service-icon">🖥️</div>
                <h4>Desenvolvimento Frontend</h4>
                <p>
                  Criação de interfaces de usuário modernas, responsivas e de alta performance utilizando React, TypeScript e CSS avançado.
                </p>
                <ul className="work__service-features">
                  <li>Single Page Applications (SPAs)</li>
                  <li>Interfaces responsivas</li>
                  <li>Animações e interações</li>
                  <li>Performance otimizada</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">⚙️</div>
                <h4>Desenvolvimento Backend</h4>
                <p>
                  Desenvolvimento de APIs robustas, sistemas de banco de dados e lógica de servidor com Node.js, Express e MongoDB/SQL.
                </p>
                <ul className="work__service-features">
                  <li>APIs RESTful</li>
                  <li>Autenticação e segurança</li>
                  <li>Modelagem de dados</li>
                  <li>Integração com serviços</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">🚀</div>
                <h4>Aplicações Fullstack</h4>
                <p>
                  Desenvolvimento completo de aplicações web do conceito à implementação, incluindo arquitetura, frontend e backend.
                </p>
                <ul className="work__service-features">
                  <li>Aplicações web completas</li>
                  <li>PWAs (Progressive Web Apps)</li>
                  <li>E-commerce e plataformas</li>
                  <li>Painéis administrativos</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">🔍</div>
                <h4>Consultoria Técnica</h4>
                <p>
                  Análise e consultoria para projetos existentes, melhorias de performance, refatoração e revisão de código.
                </p>
                <ul className="work__service-features">
                  <li>Análise de código</li>
                  <li>Otimização de performance</li>
                  <li>Arquitetura de software</li>
                  <li>Melhores práticas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
