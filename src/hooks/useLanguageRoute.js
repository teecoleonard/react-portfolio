import { useParams } from 'react-router-dom';

const SUPPORTED_LANGUAGES = ['en', 'pt'];

/**
 * Hook para ler idioma da URL (fonte única de verdade)
 * @returns {string} Idioma atual da URL
 */
export function useLanguageRoute() {
  const { lang } = useParams();
  return SUPPORTED_LANGUAGES.includes(lang) ? lang : 'pt'
}

/**
 * Função auxiliar para construir URLs localizadas
 * @param {string} path - Caminho base (ex: 'projects', 'about')
 * @param {string} lang - Idioma (ex: 'en', 'pt')
 * @returns {string} URL completa
 */
export function getLocalizedPath(path, lang = 'pt') {
  return `/${lang}${path ? '/' + path : ''}`;
}

/**
 * Função para obter idioma preferido do navegador ou do localStorage
 * @returns {string} Código de idioma
 */
export function getPreferredLanguage() {
  // 1. Verificar localStorage
  const storedLang = localStorage.getItem('preferredLanguage');
  if (storedLang) return storedLang;

  // 2. Verificar navegador
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'pt'].includes(browserLang)) {
    return browserLang;
  }

  // 3. Default: português
  return 'pt';
}

/**
 * Contexto customizado para sincronizar URL com i18n sem overhead
 */
export function syncLanguageWithUrl(language) {
  localStorage.setItem('preferredLanguage', language);
}
