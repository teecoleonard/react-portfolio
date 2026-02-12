import Home from '../pages/Home.jsx';

/**
 * Configuração centralizada de rotas bilíngues
 * Estrutura: /{lang}/path
 * Exemplos:
 *  - /pt (português - home)
 *  - /en (english - home)
 *  - /pt/projetos (português - projetos)
 *  - /en/projects (english - projects)
 */

export const routes = [
  {
    path: '/:lang',
    element: <Home />,
  },
  // Rota padrão sem idioma - redireciona via middleware
  {
    path: '/',
    element: <Home />,
  },
];

/**
 * Metadados de rotas para SEO
 */
export const routeMetadata = {
  home: {
    pt: {
      title: 'Portfólio - Engenheiro Full Stack & Especialista QA',
      description: 'Construindo soluções escaláveis. Especializado em Desenvolvimento Full Stack, Automação de Testes e Arquitetura de Software.',
      path: '/pt'
    },
    en: {
      title: 'Portfolio - Full Stack Engineer & QA Specialist',
      description: 'Building scalable enterprise solutions. Specialized in Full Stack Development, QA Automation, and Software Architecture.',
      path: '/en'
    }
  },
};
