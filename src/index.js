import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import PrimeraApp2 from './PrimeraApp';
// import CounterApp from './CounterApp';

// Referencias en el html
const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp2 saludo='Hola, soy Cristian ME' numero={123} />, divRoot );
// ReactDOM.render( <CounterApp value={100} />, divRoot );


