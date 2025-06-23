import { useState, useEffect } from 'react';

export const useActiveNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    // Observer para atualizar navegação ativa com base na seção visível
    const updateActiveNavFromSection = () => {
      const activeSection = document.body.getAttribute('data-active-section');
      if (activeSection) {
        setActiveNav(activeSection === 'header' ? '#' : `#${activeSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Observa mudanças na seção ativa
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-active-section') {
          updateActiveNavFromSection();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavLinkClick = (navId) => {
    setActiveNav(navId);
  };

  return {
    activeNav,
    scrolled,
    handleNavLinkClick
  };
}; 