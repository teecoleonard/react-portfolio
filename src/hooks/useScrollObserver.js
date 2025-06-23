import { useState, useEffect } from 'react';

export const useScrollObserver = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    // Verifica se carregou com uma âncora específica
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace('#', '');
        setActiveSection(sectionId);
        document.body.setAttribute('data-active-section', sectionId);
        
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

    // Configuração do Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id') || 
                           (entry.target.tagName === 'HEADER' ? 'header' : null);
          
          if (sectionId) {
            setActiveSection(sectionId);
            
            // Animações suaves
            entry.target.style.transition = "none";
            entry.target.classList.add('section-entered');
            entry.target.classList.remove('section-entering');
            
            void entry.target.offsetWidth;
            setTimeout(() => {
              entry.target.style.transition = "";
            }, 50);
            
            document.body.setAttribute('data-active-section', sectionId);
            
            // Atualiza navegação ativa
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
    
    handleInitialHash();
    
    setTimeout(() => {
      const sections = document.querySelectorAll('section, header');
      sections.forEach(section => {
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
      const sections = document.querySelectorAll('section, header');
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [activeSection]);
  
  return { activeSection };
}; 