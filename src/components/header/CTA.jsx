import React from 'react'
import CV from '../../assets/cv.pdf'
import { FaDownload, FaEnvelope } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-outline'>
        <FaDownload /> Baixar CV
      </a>
      <a href="#contact" className='btn btn-primary'>
        <FaEnvelope /> Vamos Conversar
      </a>
    </div>
  )
}

export default CTA