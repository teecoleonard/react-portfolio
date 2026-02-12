import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import './portfolio.css'
import PortfolioImage from './PortfolioImage'
import { getProjectImage } from '../../data/projects'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const { t } = useTranslation();
  
  // Pega os dados do i18n
  const projects = t('portfolio.projects', { returnObjects: true }) || []
  const categories = t('portfolio.categories', { returnObjects: true }) || []
  
  // Memoriza os projetos filtrados para evitar recálculos desnecessários
  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
  }, [filter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header">
          <h5>{t('portfolio.sectionTitle')}</h5>
          <h2>{t('portfolio.title')}</h2>
          
          <p className="section__subtitle">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <motion.div 
          className="portfolio__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button 
              key={category.id}
              className={filter === category.id ? 'active' : ''} 
              onClick={() => setFilter(category.id)}
              aria-label={`Filtrar projetos por ${category.label}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio__items"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map(({id, image, title, description, businessImpact, github, demo, progress, status, category, techs}) => (
            <motion.article 
              key={id} 
              className='portfolio__item'
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio__item-image">
                <PortfolioImage src={getProjectImage(image)} alt={title} aspectRatio="16:9" />
                <div className="portfolio__category">{category}</div>
              </div>
              
              <div className="portfolio__content">
                <h3>{title}</h3>
                <p className="portfolio__description">{description}</p>

                {businessImpact && (
                  <div className="portfolio__business-impact">
                    <p className="impact-label">{t('portfolio.businessImpact')}</p>
                    <p className="impact-text">{businessImpact}</p>
                  </div>
                )}
                
                {techs && (
                  <div className="portfolio__techs">
                    {techs.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="portfolio__tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
                
                <div className="portfolio__progress-container">
                  <div className="portfolio__progress-bar">
                    <motion.div 
                      className="portfolio__progress-fill" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></motion.div>
                  </div>
                  <div className="portfolio__progress-info">
                    <span className={`portfolio__status ${status === 'Concluído' || status === 'Completed' ? 'completed' : 'in-progress'}`}>
                      {status}
                    </span>
                    <span className="portfolio__percentage">{progress}%</span>
                  </div>
                </div>
                
                <div className="portfolio__item-cta">
                  <motion.a 
                    href={github} 
                    className='btn btn-outline' 
                    target='_blank' 
                    rel="noreferrer"
                    aria-label={`Ver código do projeto ${title} no GitHub`}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Github
                  </motion.a>
                  <motion.a 
                    href={demo} 
                    className='btn btn-primary' 
                    target='_blank' 
                    rel="noreferrer"
                    aria-label={`Ver demonstração do projeto ${title}`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 