import React, { useState } from 'react';
import './GlitchImage.css';
import './spinner.css';
import 'firebase/storage'
import { useEffect } from 'react';
import { logoMap } from '../../index.js';

const MIN_IMAGES = 0;

const GlitchImage = () => {
  const [logo, setLogo] = useState(null)
  const [loading, setLoading] = useState(true) // todo add faux loading state and stepwise animation

  const loadData = () => {
    mapDayOfWeek().getDownloadURL()
      .then((url) => {
        setLogo(url);
        setLoading(false)
      })
      .catch((error) => {
        console.error('uhoh', error)
      })
  }

  const mapDayOfWeek = () => {
    const min = MIN_IMAGES;
    const max = Object.keys(logoMap).length - 1;

    let num = Math.random() * (max - min) + min;

    return logoMap[Math.round(num)];
  }

  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    loading 
      ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      : <img 
          src={logo} 
          className="logo" 
          alt="WE LOVE YOU" 
        />
  );
}

export default GlitchImage;
