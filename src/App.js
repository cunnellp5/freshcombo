import React from 'react';
import './App.css';
import GlitchImage from './components/GlitchImage/GlitchImage';
import RainbowBar from './components/RainbowBar/RainbowBar';

function App() {
  return (
    <div className="App">
      <RainbowBar></RainbowBar>
      <header className="App-header">
          <GlitchImage></GlitchImage>
      </header>
    </div>
  );
}

export default App;
