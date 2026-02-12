import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './about.css'
import ME from '../../assets/me-about-profile.jpg'
import { FaAward, FaFolderOpen } from 'react-icons/fa'
import GitHubStats from '../github-stats/GitHubStats'

const About = () => {
  const { t } = useTranslation()

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }
  
  return (
    <section id='about'>
      <div className="section__header">
        <h5>{t('about.sectionTitle')}</h5>
        <h2>{t('about.title')}</h2>
      </div>

      <div className="container about__container">
        <motion.div 
          className="about__image-wrapper"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about__me-image">
            <img src={ME} alt='About me'/>
          </div>
        </motion.div>
        
        <motion.div 
          className="about__main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about__cards" variants={itemVariants}>
            <motion.div 
              className="about__card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaAward className="about__icon" />
              <h5>{t('about.experienceLabel')}</h5>
              <p>{t('about.experienceValue')}</p>
            </motion.div>

            <motion.div 
              className="about__card"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaFolderOpen className="about__icon" />
              <h5>{t('about.projectsLabel')}</h5>
              <p>{t('about.projectsValue')}</p>
            </motion.div>
          </motion.div>
          
          <motion.div className="about__text" variants={itemVariants}>
            <h3>{t('about.biography.title')}</h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
            >
              {t('about.biography.para1')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.biography.para2')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('about.biography.para3')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <div className="container about__stats-wrapper">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GitHubStats />
        </motion.div>
      </div>
    </section>
  )
}

export default About