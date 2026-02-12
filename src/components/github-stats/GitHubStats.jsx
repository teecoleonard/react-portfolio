import React from 'react'
import { motion } from 'framer-motion'
import { useGitHubUser, useGitHubLanguages } from '../../hooks/useGitHub'
import './github-stats.css'
import { useTranslation } from 'react-i18next'

const GitHubStats = () => {
  const { t } = useTranslation()
  const { data: user, isLoading: userLoading } = useGitHubUser()
  const { data: languages, isLoading: languagesLoading } = useGitHubLanguages()

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
      transition: { duration: 0.5 },
    },
  }

  if (userLoading || languagesLoading) {
    return (
      <motion.div 
        className="github-stats__skeleton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="github-stats"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="github-stats__card" variants={itemVariants}>
        <h4>{t('githubStats.title')}</h4>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-value">{user?.public_repos}</span>
            <span className="stat-label">{t('githubStats.repos')}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user?.followers}</span>
            <span className="stat-label">{t('githubStats.followers')}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user?.following}</span>
            <span className="stat-label">{t('githubStats.following')}</span>
          </div>
        </div>
      </motion.div>

      <motion.div className="github-stats__card" variants={itemVariants}>
        <h4>{t('githubStats.languages')}</h4>
        <div className="languages-list">
          {languages?.slice(0, 5).map((lang, idx) => (
            <motion.div 
              key={lang.language} 
              className="language-item"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="language-name">{lang.language}</span>
              <div className="language-bar">
                <motion.div 
                  className="language-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(lang.count / (languages?.[0]?.count || 1)) * 100}%` }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="language-count">{lang.count}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default GitHubStats
