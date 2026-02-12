import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { FaArrowDown } from 'react-icons/fa'
import profileImage from '../../assets/me-about-profile2.png'

const Header = () => {
  const { t } = useTranslation()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  const scrollVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  }
  
  return (
    <header>
      <div className="container header__container">
        <motion.div 
          className="header__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="header__intro" variants={itemVariants}>
            <motion.h1 variants={itemVariants}>
              {t('header.greeting')}<br /><span className="text-gradient">Leonardo Henrique</span>
            </motion.h1>
            <motion.h2 className="header__subtitle" variants={itemVariants}>
              {t('header.title')}
            </motion.h2>
            <motion.p className="header__description" variants={itemVariants}>
              {t('header.description')}
            </motion.p>
            <motion.div variants={itemVariants}>
              <CTA />
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <HeaderSocials />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="header__image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={profileImage} alt="Leonardo Henrique" className="header__profile-img" />
        </motion.div>
        
        <motion.div 
          className="scroll__indicator"
          variants={scrollVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#about">
            <FaArrowDown />
            <span>{t('header.scrollText')}</span>
          </a>
        </motion.div>
      </div>
      
      <div className="header__shape-1"></div>
      <div className="header__shape-2"></div>
    </header>
  )
}

export default Header