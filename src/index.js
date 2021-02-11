import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import { FB_CONFIG_OBJ } from './supersecret.js';
import 'firebase/storage'

firebase.initializeApp(FB_CONFIG_OBJ);
export const STORAGE = firebase.storage();
// images 
const logo2 = STORAGE.ref().child('logo2.gif')
const trippycolorful = STORAGE.ref().child('trippycolorful.gif')
const pixel = STORAGE.ref().child('pixel.gif')

export const logoMap = {
  0: logo2,
  1: trippycolorful,
  2: pixel,
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();