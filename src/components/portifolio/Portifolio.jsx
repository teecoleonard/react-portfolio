import React, { useState } from 'react'
import './portifolio.css'
import PortfolioImage from './PortfolioImage'
import IMG1 from '../../assets/portfolio2.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio4.jpg'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'

// Dados dos projetos do portfólio
const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Project Firebase',
    description: 'Sistema de gerenciamento de usuários com autenticação Firebase. Inclui funcionalidades de login social, recuperação de senha e perfis de usuário personalizáveis.',
    github: 'https://github.com/teecoleonard/project-firebase',
    demo: 'https://dribbble.com',
    progress: 100,
    status: 'Concluído',
    category: 'app',
    techs: ['React', 'Firebase', 'Redux']
  },
  {
    id: 2,
    image: IMG2,
    title: 'Psicologia Website',
    description: 'Website institucional para consultório de psicologia com agendamento online, blog e área administrativa para gerenciamento de conteúdo e pacientes.',
    github: 'https://github.com/teecoleonard/psicoterapia-site',
    demo: 'https://psisaramartins.com/',
    progress: 100,
    status: 'Concluído',
    category: 'web',
    techs: ['HTML/CSS', 'JavaScript', 'PHP']
  },
  {
    id: 3,
    image: IMG3,
    title: 'Psicologia Website',
    description: 'Website institucional para consultório de psicologia com agendamento online, blog e área administrativa para gerenciamento de conteúdo e pacientes.',
    github: 'https://github.com/teecoleonard/psicoterapia-site',
    demo: 'https://psisaramartins.com/',
    progress: 100,
    status: 'Concluído',
    category: 'web',
    techs: ['HTML/CSS', 'JavaScript', 'PHP']
  }
]

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header">
          <h5>Meus Trabalhos Recentes</h5>
          <h2>Portfólio</h2>
          
          <p className="section__subtitle">
            Conheça alguns dos projetos que desenvolvi utilizando as mais recentes tecnologias de desenvolvimento web
          </p>
        </div>
        
        <div className="portfolio__filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}>
            <FaFilter /> Todos
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}>
            Web
          </button>
          <button 
            className={filter === 'app' ? 'active' : ''} 
            onClick={() => setFilter('app')}>
            Aplicativos
          </button>
          <button 
            className={filter === 'design' ? 'active' : ''} 
            onClick={() => setFilter('design')}>
            Design
          </button>
        </div>

        <div className="portfolio__items">
          {filteredProjects.map(({id, image, title, description, github, demo, progress, status, category, techs}) => (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <PortfolioImage src={image} alt={title} aspectRatio="16:9" />
                <div className="portfolio__category">{category}</div>
              </div>
              
              <div className="portfolio__content">
                <h3>{title}</h3>
                <p className="portfolio__description">{description}</p>
                
                {techs && (
                  <div className="portfolio__techs">
                    {techs.map((tech, index) => (
                      <span key={index} className="portfolio__tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                
                <div className="portfolio__progress-container">
                  <div className="portfolio__progress-bar">
                    <div 
                      className="portfolio__progress-fill" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="portfolio__progress-info">
                    <span className={`portfolio__status ${status === 'Concluído' ? 'completed' : 'in-progress'}`}>
                      {status}
                    </span>
                    <span className="portfolio__percentage">{progress}%</span>
                  </div>
                </div>
                
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-outline' target='_blank' rel="noreferrer">
                    <FaGithub /> Github
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio