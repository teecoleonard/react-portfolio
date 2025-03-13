import React from 'react'
import './portifolio.css'
import PortfolioImage from './PortfolioImage'
import IMG1 from '../../assets/portfolio2.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG4 from '../../assets/portfolio4.jpg'

// Dados dos projetos do portfólio
const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Movie Website com React e Node.js',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    progress: 75,
    status: 'Em progresso'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Sistema de Gestão Financeira',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    progress: 90,
    status: 'Em progresso'
  },
  {
    id: 3,
    image: IMG4,
    title: 'Dashboard Administrativo',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    progress: 50,
    status: 'Em progresso'
  },
  {
    id: 4,
    image: IMG4,
    title: 'App Móvel de Delivery',
    github: 'https://github.com',
    demo: 'https://dribbble.com',
    progress: 60,
    status: 'Em progresso'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Project Firebase',
    github: 'https://github.com/teecoleonard/project-firebase',
    demo: 'https://dribbble.com',
    progress: 100,
    status: 'Concluído'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Psicologia Website',
    github: 'https://github.com/teecoleonard/psicoterapia-site',
    demo: 'https://psisaramartins.com/',
    progress: 100,
    status: 'Concluído'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, progress, status}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <PortfolioImage src={image} alt={title} aspectRatio="4:3" />
                </div>
                <h3>{title}</h3>
                
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
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio