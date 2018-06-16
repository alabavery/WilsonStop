import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let googleScript = document.createElement('script');

googleScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMRd6nPIrIQVLO3jRoqE00n3A4iLsKdfU');
googleScript.addEventListener('load', function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  );
});

document.head.appendChild(googleScript);
registerServiceWorker();
