// Primer componenete react. Existen basados por clases (antes) y basados por funciones (ahora - Functional Components)

// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


/**
 * La función comentada abajo utiliza la importación de Fragment, sin embargo,
 * existe una manera más sencilla de usar fragments y es como se muestra en el componente
 * PrimeraApp2
 */

// const PrimeraApp = () => {

//     return (
//         <Fragment>
//             <h1>Hola mundo</h1>
//             <p>Mi primera aplicación en React</p>
//         </Fragment>
//     );

// }


// Se pueden extraer las variables del objeto props desde el argumento con desestructuracion
// ( { saludo } )  es lo más común
const PrimeraApp2 = ( {saludo, numero, subtitulo} ) => {

    const objeto = {            // Los arrays se concatenan pero los objetos no se pueden renderizar a menos que se use
        nombre: 'Cristian',     // Los mostrado debajo
        edad: 26
    };

    return (
        <>
            <h1>{ saludo }</h1>
            <h2>{ numero }</h2>
            <pre>{ JSON.stringify(objeto, null, 3) }</pre>
            <p>{ subtitulo }</p>

        </>
    );

}

PrimeraApp2.propTypes = {
    saludo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}

PrimeraApp2.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp2;
