import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: '#', onClick: handleScrollToTop, label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.expertise') },
    { href: '#qa', label: t('nav.qa') },
    { href: '#architecture', label: t('nav.architecture') },
    { href: '#portfolio', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ]

  return (
    <footer>
      <button 
        onClick={handleScrollToTop}
        className="footer__logo"
        aria-label={t('footer.backToTop')}
      >
        {t('footer.logo')}
      </button>

      <ul className="permalinks">
        {footerLinks.map((link, index) => (
          <li key={index}>
            {link.onClick ? (
              <button 
                onClick={link.onClick} 
                className="permalink-btn"
                aria-label={link.label}
              >
                {link.label}
              </button>
            ) : (
              <a href={link.href} aria-label={link.label}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="footer__copyright">
        <small>&copy; Leonardo Henrique. {t('footer.copyright')}</small>
      </div>
    </footer>
  );
};

export default Footer;