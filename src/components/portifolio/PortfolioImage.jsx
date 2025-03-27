import React, { useState, useEffect } from 'react';

const PortfolioImage = ({ src, alt, aspectRatio = "16:9" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Calculate padding based on aspect ratio
  const getPadding = () => {
    if (aspectRatio) {
      const [width, height] = aspectRatio.split(':').map(Number);
      return `${(height / width) * 100}%`;
    }
    return '56.25%'; // Default 16:9 aspect ratio
  };
  
  useEffect(() => {
    // Reset state when source changes
    setLoaded(false);
    setError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  return (
    <div 
      className="portfolio-image-container" 
      style={{ paddingTop: getPadding() }}
    >
      {!loaded && !error && (
        <div className="portfolio-image-placeholder">
          <div className="portfolio-image-loading"></div>
        </div>
      )}
      
      {error && (
        <div className="portfolio-image-placeholder">
          <span>Failed to load image</span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`portfolio-image ${loaded ? 'loaded' : ''}`}
      />
    </div>
  );
};

export default PortfolioImage;
