import React, { useState } from 'react';
import './GlitchImage.css';
import { logo2 } from '../../index.js';
import 'firebase/storage'
import { useEffect } from 'react';

const GlitchImage = () => {
  const [logo, setLogo] = useState(null)

  const loadData = () => {
    logo2.getDownloadURL()
      .then((url) => {
        setLogo(url);
      })
      .catch((error) => {
        console.error('uhoh', error)
      })
      return;
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <img 
      src={logo} 
      className="logo" 
      alt="WE LOVE YOU" 
    />
  );
}

export default GlitchImage;
