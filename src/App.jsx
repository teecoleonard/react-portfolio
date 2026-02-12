import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Nav from './components/nav/Nav'
import Home from './pages/Home'
import { ThemeProvider } from './contexts/ThemeContext'
import { QueryProvider } from './contexts/QueryContext'

/**
 * Componente que sincroniza i18n com URL (ÚNICO LUGAR onde isso acontece)
 */
const I18nSynchronizer = ({ children }) => {
  const { i18n } = useTranslation()
  const location = useLocation()
  
  // Extrair idioma da URL diretamente de location.pathname
  const currentPath = location.pathname
  const pathMatch = currentPath.match(/^\/(pt|en)/)
  const lang = pathMatch ? pathMatch[1] : 'pt'
  
  // UMA ÚNICA sincronização: quando a URL muda, atualizar i18n
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])
  
  return children
}

/**
 * Componente wrapper para redirecionar raiz para português
 */
const RootRedirect = () => {
  return <Navigate to="/pt" replace />
}

const App = () => {
  return (
    <BrowserRouter basename="/react-portfolio">
      <QueryProvider>
        <ThemeProvider>
          <Nav />
          <Routes>
            <Route path="/:lang" element={<I18nSynchronizer><Home /></I18nSynchronizer>} />
            <Route path="/" element={<RootRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  )
}

export default App