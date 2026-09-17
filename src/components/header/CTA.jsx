import React from 'react'
import CV from '../../assets/cv.pdf'
import CV_EN from '../../assets/cv-eng.pdf'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation()
  return (
    <div className='cta'>
      <a href={t('cta.downloadCV') === 'Download CV' ? CV_EN : CV} download className='btn btn-outline'>
        <FaDownload /> {t('cta.downloadCV')}
      </a>
      <a href="https://api.whatsapp.com/send?phone=5534996641594" target="_blank" rel="noreferrer" className='btn btn-primary'>
        <FaEnvelope /> {t('cta.contactMe')}
      </a>
    </div>
  )
}

export default CTA