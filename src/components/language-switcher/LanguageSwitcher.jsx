import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './language-switcher.css'

const LanguageSwitcher = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Extrair idioma da URL diretamente (não depende de useParams fora de Routes)
  const currentPath = location.pathname
  const pathMatch = currentPath.match(/^\/(pt|en)/)
  const lang = pathMatch ? pathMatch[1] : 'pt'

  const handleLanguageChange = (newLang) => {
    // Se já está nesse idioma, não fazer nada
    if (lang === newLang) return

    // Construir nova URL preservando o caminho
    const pathWithoutLang = currentPath.replace(/^\/(pt|en)/, '')
    
    // Construir novo caminho com novo idioma
    const newPath = `/${newLang}${pathWithoutLang || ''}`
    
    // Navegar para a nova URL
    navigate(newPath, { replace: false })
  }

  return (
    <motion.div 
      className="language-switcher"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.button
        className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Mudar para Português"
        title="Português"
      >
        🇧🇷 PT
      </motion.button>
      
      <span className="lang-separator">|</span>
      
      <motion.button
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to English"
        title="English"
      >
        🇺🇸 EN
      </motion.button>
    </motion.div>
  )
}

export default LanguageSwitcher
