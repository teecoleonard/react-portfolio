import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
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
        <h5>{t('contact.subtitle')}</h5>
        <h2>{t('contact.title')}</h2>
      </div>
      
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder={t('contact.form.name')} required />
          <input type="email" name="email" placeholder={t('contact.form.email')} required />
          <textarea name="message" rows="7" placeholder={t('contact.form.message')} required></textarea>
          <button type="submit" className="contact-btn">{t('contact.form.submit')}</button>
        </form>

        <div className="contact-options-wrapper">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>{t('contact.email.label')}</h4>
            <h5>leonardo4q@gmail.com</h5>
            <a href="mailto:leonardo4q@gmail.com" target="_blank" rel="noreferrer">{t('contact.email.action')}</a>
          </article>
          
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>{t('contact.whatsapp.label')}</h4>
            <h5>+55 34 99664-1594</h5>
            <a href="https://api.whatsapp.com/send?phone=5534996641594" target="_blank" rel="noreferrer">{t('contact.whatsapp.action')}</a>
          </article>
        </div>
      </div>
      
      <div className="contact-scroll-top">
        <button onClick={scrollToTop} className="contact-scroll-button">
          <FaArrowUp /> {t('contact.scrollToTop')}
        </button>
      </div>
    </section>
  );
};

export default Contact;