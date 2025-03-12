import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // You would normally use a service like EmailJS here
    // emailjs.sendForm('service_id', 'template_id', form.current, 'your-user-id')
    
    // Reset the form after submission
    e.target.reset();
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
            <h5>leonardo@exemplo.com</h5>
            <a href="mailto:leonardo@exemplo.com" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
          
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Leonardo Henrique</h5>
            <a href="https://m.me/leonardo.henrique" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 11 9xxxx-xxxx</h5>
            <a href="https://api.whatsapp.com/send?phone=5511xxxxxxxxx" target="_blank" rel="noreferrer">Envie uma mensagem</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu Nome Completo" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;