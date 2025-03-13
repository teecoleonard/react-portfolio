import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">LEONARDO HENRIQUE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Leonardo Henrique. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;