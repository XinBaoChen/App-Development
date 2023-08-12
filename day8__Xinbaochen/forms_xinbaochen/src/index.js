import React from 'react';
import ReactDOM from 'react-dom/client';
import App from  './App'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>

);

//js file loaded up by browser
//app components get created
//constructor function get called
//this.state property assigned the state object
//call geolocation serviuce
//recall calls from components to render
//display the geolocation
