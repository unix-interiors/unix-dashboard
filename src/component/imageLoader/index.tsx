import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import './style.css';

interface IProps {
  src: string;
  alt: string;
}

function ImageLoader({ src, alt }: IProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div
        className="image thumb"
        style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
      >
        <CircularProgress />
      </div>
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </>
  );
}

export default ImageLoader;
