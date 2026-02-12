import React from 'react'
import { motion } from 'framer-motion'
import './qa.css'
import { FaGitAlt, FaCog, FaCheckCircle, FaRobot } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const QA = () => {
  const { t } = useTranslation()
  const skills = t('qa.skills', { returnObjects: true })
  const icons = [FaCheckCircle, FaCog, FaRobot, FaGitAlt, FaCheckCircle, FaRobot]
  
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  
  return (
    <section id='qa'>
      <div className="container qa__container">
        <div className="section__header">
          <h5>{t('qa.sectionTitle')}</h5>
          <h2>{t('qa.title')}</h2>
          <p className="section__subtitle">{t('qa.subtitle')}</p>
        </div>

        <motion.div 
          className="qa__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <motion.div 
                key={index} 
                className="qa__skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="qa__skill-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent />
                </motion.div>
                <h4>{skill}</h4>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default QA
