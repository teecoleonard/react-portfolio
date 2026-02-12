import { useRef, useEffect } from 'react'
import { useAnimation, useInView } from 'framer-motion'

/**
 * Hook that triggers animations when element enters viewport
 * @returns {Object} Controls for animation and ref
 */
export const useScrollReveal = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return {
    ref,
    controls,
    initial: 'hidden',
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6,
          ease: 'easeOut'
        }
      }
    }
  }
}
