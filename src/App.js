import React from 'react';
import './App.css';
import GlitchImage from './components/GlitchImage/GlitchImage';
import RainbowBar from './components/RainbowBar/RainbowBar';
import MainNav from './components/Navigation/MainNav';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      <RainbowBar />
      <MainNav />
      <header className="App-header">
          <GlitchImage />
      </header>
      <ContactInfo />
    </div>
  );
}

export default App;
