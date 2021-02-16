import React from 'react';
import './App.css';
import GlitchImage from './components/GlitchImage/GlitchImage';
import RainbowBar from './components/RainbowBar/RainbowBar';
import MainNav from './components/Navigation/MainNav';
import ContactInfo from './components/ContactInfo/ContactInfo';

const App = () => {
  return (
    <div className="App">
      <header>
        <RainbowBar />
      </header>

      <nav className="social-links">
        <MainNav />
      </nav>

      <section className="App-header">
          <GlitchImage />
      </section>

      <footer>
        <ContactInfo />
      </footer>
    </div>
  );
}

export default App;
