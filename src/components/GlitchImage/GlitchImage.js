import React, { useState } from 'react';
import './GlitchImage.css';
import 'firebase/storage'
import { useEffect } from 'react';
import { 
  logo2, 
  trippycolorful,
  pixel
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
      0: trippycolorful,
      1: logo2,
      2: trippycolorful,
      3: pixel,
      4: logo2,
      5: trippycolorful,
      6: pixel,
      7: logo2,
    }
    var d = new Date();
    var n = d.getDay() // returns 0-6 probably

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
