import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './portfolio.css'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const { t } = useTranslation()
  const projects = t('portfolio.projects', { returnObjects: true })
  const categories = t('portfolio.categories', { returnObjects: true })
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header">
          <h5>{t('portfolio.sectionTitle')}</h5>
          <h2>{t('portfolio.title')}</h2>
          <p className="section__subtitle">{t('portfolio.subtitle')}</p>
        </div>

        <div className="portfolio__filters">
          {categories.map(category => (
            <button
              key={category.id}
              type="button"
              className={filter === category.id ? 'active' : ''}
              onClick={() => setFilter(category.id)}
              aria-pressed={filter === category.id}
            >
              <FaFilter aria-hidden="true" /> {category.label}
            </button>
          ))}
        </div>

        <motion.div
          className="portfolio__items"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map(({ id, title, description, highlights, businessImpact, category, techs, sourceNote, links }) => (
            <motion.article key={id} className="portfolio__item" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="portfolio__content">
                <span className="portfolio__category-label">
                  {categories.find(item => item.id === category)?.label}
                </span>
                <h3>{title}</h3>
                <p className="portfolio__description">{description}</p>
                <ul className="portfolio__highlights">
                  {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
                <ul className="portfolio__techs">
                  {techs.map(tech => <li className="portfolio__tech-tag" key={tech}>{tech}</li>)}
                </ul>
                <div className="portfolio__business-impact">
                  <p className="impact-label">{t('portfolio.businessImpact')}</p>
                  <p className="impact-text">{businessImpact}</p>
                </div>
                <p className="portfolio__source-note">{sourceNote}</p>
                {links.length > 0 && (
                  <div className="portfolio__item-cta">
                    {links.map(({ label, url, kind }) => (
                      <a href={url} key={url} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        {kind === 'github' ? <FaGithub aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
