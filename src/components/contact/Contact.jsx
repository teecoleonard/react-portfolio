import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_id', 'template_id', form.current, 'your-user-id')
    
    // Testar depois o emailjs
    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h5>Entre em Contato</h5>
        <h2>Contato</h2>
      </div>
      
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Seu Nome Completo" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
          <button type="submit" className="contact-btn">Enviar Mensagem</button>
        </form>

        <div className="contact-options-wrapper">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>leonardo4q@gmail.com</h5>
            <a href="mailto:leonardo4q@gmail.com" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
          
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 34 99664-1594</h5>
            <a href="https://api.whatsapp.com/send?phone=5534996641594" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
        </div>
      </div>
      
      <div className="contact-scroll-top">
        <button onClick={scrollToTop} className="contact-scroll-button">
          <FaArrowUp /> Voltar ao Topo
        </button>
      </div>
    </section>
  );
};

export default Contact;