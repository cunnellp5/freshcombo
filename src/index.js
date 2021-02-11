import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import { FB_CONFIG_OBJ } from './supersecret.js';
import 'firebase/storage'

firebase.initializeApp(FB_CONFIG_OBJ);
export const STORAGE_REF = firebase.storage().ref();
// images 
// todo create this map dynamically from the storage bucket 
const logo2 = STORAGE_REF.child('logo2.gif')
const trippycolorful = STORAGE_REF.child('trippycolorful.gif')
const pixel = STORAGE_REF.child('pixel.gif')
const prettylines = STORAGE_REF.child('prettylines.gif')

export const logoMap = {
  0: logo2,
  1: trippycolorful,
  2: pixel,
  3: prettylines
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