import React, { useState } from 'react';
import './GlitchImage.css';
import 'firebase/storage'
import { useEffect } from 'react';
import { logoMap } from '../../index.js';

const MIN_IMAGES = 0;

const GlitchImage = () => {
  const [logo, setLogo] = useState(null)
  // const [loading, setLoading] = useState(true) // todo add faux loading state and stepwise animation

  const loadData = () => {
    mapDayOfWeek().getDownloadURL()
      .then((url) => {
        setLogo(url);
      })
      .catch((error) => {
        console.error('uhoh', error)
      })
      return;
  }

  const mapDayOfWeek = () => {
    const min = MIN_IMAGES;
    const max = Object.keys(logoMap).length - 1;

    let num = Math.random() * (max - min) + min;
    console.log(Math.round(num), 'num')
    return logoMap[Math.round(num)];
  }

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
