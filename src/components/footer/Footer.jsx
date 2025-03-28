import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">LEONARDO HENRIQUE</a>

      <ul className="permalinks">
        <li><a href="#">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#work">Trabalho</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Leonardo Henrique. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;