import IMG2 from '../assets/portfolio1.png'
import IMG4 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.png'
import IMG7 from '../assets/portfolio6.jpeg'
import IMG5 from '../assets/portfolio8.png'
import IMG9 from '../assets/portfolio9.png'

/**
 * Mapa de imagens para projetos
 * Mapeia nomes de arquivo (strings no JSON) para imports de imagens
 */
export const imageMap = {
  'portfolio1.png': IMG2,
  'portfolio5.png': IMG4,
  'portfolio6.png': IMG6,
  'portfolio6.jpeg': IMG7,
  'portfolio8.png': IMG5,
  'portfolio9.png': IMG9
}

/**
 * Helper para resolver imagem pelo nome
 */
export const getProjectImage = (imageName) => imageMap[imageName] || null
 