import React from 'react'
import './about.css'
import ME from '../../assets/me-about-profile.jpg'
import { FaAward, FaFolderOpen } from 'react-icons/fa'
import { content } from '../../data/content'

const About = () => {
  const { about } = content;
  
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="section__header">
          <h5>{about.sectionTitle}</h5>
          <h2>{about.title}</h2>
          <div className="about__me-image">
            <img src={ME} alt='About me'/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>{about.experience.label}</h5>
              <p>{about.experience.value}</p>
            </div>

            <div className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>{about.projects.label}</h5>
              <p>{about.projects.value}</p>
            </div>
          </div>
          
          <div className="about__text">
            <h3>{about.biography.title}</h3>
            {about.biography.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About