import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // You would normally use a service like EmailJS here
    // emailjs.sendForm('service_id', 'template_id', form.current, 'your-user-id')
    
    // Reset the form after submission
    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact">
      <h5>Entre em Contato</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leonardo4q@gmail.com</h5>
            <a href="mailto:leonardo4q@gmail.com" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 34 99664-1594</h5>
            <a href="https://api.whatsapp.com/send?phone=5534996641594" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu Nome Completo" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
        </form>
      </div>
      
      <div className="scroll__top-container">
        <button onClick={scrollToTop} className="scroll__top-button">
          <FaArrowUp /> Voltar ao Topo
        </button>
      </div>
    </section>
  );
};

export default Contact;