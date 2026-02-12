import React from 'react'
import { motion } from 'framer-motion'
import './currently-building.css'
import { FaRocket, FaDatabase, FaBrain, FaCogs } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const CurrentlyBuilding = () => {
  const { t } = useTranslation()
  const projects = t('currentlyBuilding.projects', { returnObjects: true })
  const icons = [FaRocket, FaDatabase, FaBrain, FaCogs]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }
  
  return (
    <section id='currently-building'>
      <div className="container currently-building__container">
        <div className="section__header">
          <h5>{t('currentlyBuilding.sectionTitle')}</h5>
          <h2>{t('currentlyBuilding.title')}</h2>
          <p className="section__subtitle">{t('currentlyBuilding.subtitle')}</p>
        </div>

        <motion.div 
          className="currently-building__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <motion.div 
                key={index} 
                className="currently-building__project"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -20 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="currently-building__icon"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent />
                </motion.div>
                <h4>{project}</h4>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentlyBuilding
