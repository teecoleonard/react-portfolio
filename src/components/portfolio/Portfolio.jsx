import React, { useState, useMemo } from 'react'
import './portfolio.css'
import PortfolioImage from './PortfolioImage'
import { projects, categories } from '../../data/projects'
import { content } from '../../data/content'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  // Memoriza os projetos filtrados para evitar recálculos desnecessários
  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
  }, [filter]);
  
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header">
          <h5>{content.portfolio.sectionTitle}</h5>
          <h2>{content.portfolio.title}</h2>
          
          <p className="section__subtitle">
            {content.portfolio.subtitle}
          </p>
        </div>
        
        <div className="portfolio__filters">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={filter === category.id ? 'active' : ''} 
              onClick={() => setFilter(category.id)}
              aria-label={`Filtrar projetos por ${category.label}`}
            >
              <FaFilter /> {category.label}
            </button>
          ))}
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
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
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
                  <a 
                    href={github} 
                    className='btn btn-outline' 
                    target='_blank' 
                    rel="noreferrer"
                    aria-label={`Ver código do projeto ${title} no GitHub`}
                  >
                    <FaGithub /> Github
                  </a>
                  <a 
                    href={demo} 
                    className='btn btn-primary' 
                    target='_blank' 
                    rel="noreferrer"
                    aria-label={`Ver demonstração do projeto ${title}`}
                  >
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