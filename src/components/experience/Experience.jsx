import React from 'react'
import './experience.css'
import { useTranslation } from 'react-i18next'
import { FaBuilding, FaCubes, FaCheckCircle, FaMobileAlt, FaRobot, FaFileInvoiceDollar } from 'react-icons/fa'

const areaIcons = {
  crm: FaBuilding,
  architecture: FaCubes,
  qa: FaCheckCircle,
  mobile: FaMobileAlt,
  ai: FaRobot,
  erp: FaFileInvoiceDollar
}

const Experience = () => {
  const { t } = useTranslation()
  const areas = t('experience.areas', { returnObjects: true })

  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="section__header">
          <h5>{t('experience.sectionTitle')}</h5>
          <h2>{t('experience.title')}</h2>
          <p className="section__subtitle">{t('experience.subtitle')}</p>
        </div>

        <div className="experience__grid">
          {areas.map(({ id, title, description, techs }) => {
            const Icon = areaIcons[id]
            return (
              <div className="experience__frontend experience__area" key={id}>
                <div className="experience__skill-icon" aria-hidden="true"><Icon /></div>
                <h3>{title}</h3>
                <p className="experience__description">{description}</p>
                <ul className="experience__techs">
                  {techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
