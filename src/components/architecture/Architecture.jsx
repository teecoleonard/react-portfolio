import React from 'react'
import { motion } from 'framer-motion'
import './architecture.css'
import { FaLevelUpAlt, FaBox, FaShapes, FaCodeBranch, FaSyncAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Architecture = () => {
  const { t } = useTranslation()
  const practices = t('architecture.practices', { returnObjects: true })
  const icons = [FaBox, FaLevelUpAlt, FaShapes, FaBox, FaCodeBranch, FaSyncAlt, FaCodeBranch]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  
  return (
    <section id='architecture'>
      <div className="container architecture__container">
        <div className="section__header">
          <h5>{t('architecture.sectionTitle')}</h5>
          <h2>{t('architecture.title')}</h2>
          <p className="section__subtitle">{t('architecture.subtitle')}</p>
        </div>

        <motion.div 
          className="architecture__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {practices.map((practice, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <motion.div 
                key={index} 
                className="architecture__card"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -15 }}
              >
                <motion.div 
                  className="architecture__icon"
                  whileHover={{ 
                    rotate: [-10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <IconComponent />
                </motion.div>
                <h4>{practice}</h4>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Architecture
