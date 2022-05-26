import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


