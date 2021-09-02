import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import PrimeraApp2 from './PrimeraApp';

// Referencias en el html
const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp2 saludo='Hola  soy Cristian ME' />, divRoot );



