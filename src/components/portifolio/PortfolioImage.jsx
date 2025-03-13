import React, { useState } from 'react';

const PortfolioImage = ({ src, alt, aspectRatio = '16:9' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Parse the aspect ratio
  let paddingTop = '56.25%'; // Default 16:9
  if (aspectRatio) {
    const [width, height] = aspectRatio.split(':').map(Number);
    paddingTop = `${(height / width) * 100}%`;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="portfolio-image-container" style={{ paddingTop }}>
      {!imageLoaded && !hasError && (
        <div className="portfolio-image-placeholder">
          <div className="portfolio-image-loading"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="portfolio-image-error">
          <span>Erro ao carregar imagem</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`portfolio-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default PortfolioImage;
