import React, { useEffect, useState } from 'react';

const ScrollObserver = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    // Verificar se carregou com uma âncora específica e definir como seção ativa
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace('#', '');
        setActiveSection(sectionId);
        document.body.setAttribute('data-active-section', sectionId);
        
        // Garantir que a seção esteja visível desde o início
        const section = document.getElementById(sectionId);
        if (section) {
          section.classList.add('section-entered');
          section.classList.remove('section-entering');
        }
      } else {
        setActiveSection('header');
        document.body.setAttribute('data-active-section', 'header');
      }
    };

    // Configuração do Intersection Observer para detectar quando seções estão visíveis
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3, // quando pelo menos 30% da seção está visível (valor reduzido)
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Atualiza a seção ativa quando uma seção entra na viewport
          const sectionId = entry.target.getAttribute('id') || 
                           (entry.target.tagName === 'HEADER' ? 'header' : null);
          
          if (sectionId) {
            setActiveSection(sectionId);
            
            // Adiciona classe para animação de entrada e remove transição para evitar piscar
            entry.target.style.transition = "none";
            entry.target.classList.add('section-entered');
            entry.target.classList.remove('section-entering');
            
            // Força reflow e depois reativa transições suavemente
            void entry.target.offsetWidth;
            setTimeout(() => {
              entry.target.style.transition = "";
            }, 50);
            
            // Atualiza a cor de fundo do body para transições suaves
            document.body.setAttribute('data-active-section', sectionId);
            
            // Atualiza o tema de cor na barra de navegação
            const navLinks = document.querySelectorAll('.nav__links a');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${sectionId}` || 
                 (sectionId === 'header' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Inicializa com o hash da URL atual, se houver
    handleInitialHash();
    
    // Observa todas as seções após um pequeno delay
    setTimeout(() => {
      const sections = document.querySelectorAll('section, header');
      sections.forEach(section => {
        // Adiciona classes para transição, mas mantém a seção ativa visível
        const sectionId = section.getAttribute('id') || 
                        (section.tagName === 'HEADER' ? 'header' : null);
        
        if (sectionId === activeSection) {
          section.classList.add('section-transition', 'section-entered');
        } else {
          section.classList.add('section-transition', 'section-entering');
        }
        
        observer.observe(section);
      });
    }, 200);
    
    return () => {
      // Limpa o observer quando o componente é desmontado
      const sections = document.querySelectorAll('section, header');
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [activeSection]);
  
  return null; // Este componente não renderiza nada visível
};

export default ScrollObserver;
