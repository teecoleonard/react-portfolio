import { useScrollObserver } from '../hooks/useScrollObserver';

const ScrollObserver = () => {
  // Usa o hook customizado que abstrai toda a lógica
  useScrollObserver();
  
  return null; // Este componente não renderiza nada visível
};

export default ScrollObserver;
