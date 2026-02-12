import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Hook para gerenciar meta tags dinâmicas de forma centralizada
 * @param {Object} config - Configuração de meta tags
 * @param {string} config.title - Título da página
 * @param {string} config.description - Descrição da pagina
 * @param {string} config.url - URL canonical
 * @param {string} config.image - Imagem do preview
 * @param {boolean} config.noindex - Se deve ignorar indexação
 */
export function useMetaTags({ title, description, url, image, noindex = false }) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | Portfolio` : 'Portfolio';
  }, [title]);

  return (
    <Helmet>
      <title>{title ? `${title} | Portfolio` : 'Portfolio'}</title>
      <meta name="description" content={description || 'Full Stack Engineer & QA Specialist'} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      {/* Open Graph / Facebook */}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || 'Portfolio'} />
      <meta property="og:description" content={description || 'Full Stack Engineer & QA Specialist'} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Portfolio'} />
      <meta name="twitter:description" content={description || 'Full Stack Engineer & QA Specialist'} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
}
