import React, { useState } from 'react';
import './GlitchImage.css';
import 'firebase/storage'
import { useEffect } from 'react';
import { 
  logo2, 
  trippycolorful 
} from '../../index.js';

const GlitchImage = () => {
  const [logo, setLogo] = useState(null)

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
    const logoMap = {
      1: logo2,
      2: trippycolorful,
      3: logo2,
      4: trippycolorful,
      5: logo2,
      6: trippycolorful,
      7: logo2,
    }
    var d = new Date();
    var n = d.getDay()

    return logoMap[n]
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
