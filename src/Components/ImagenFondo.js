import React from 'react';
import Image from '../images/macrofibras.jpg';

const ImagenFondo = () => {
  const imagenFondo = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundImage: {Image},
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 1,
    opacity: '0.1'
  }
  return(
    <div style={{zIndex: '10'}}>
      <img src={Image} alt="Logo" style={imagenFondo} />
    </div>
  )
}

export default ImagenFondo;