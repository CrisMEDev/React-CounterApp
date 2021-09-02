// Primer componenete react. Existen basados por clases (antes) y basados por funciones (ahora - Functional Components)

// import React, { Fragment } from 'react';
import React from 'react';


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
const PrimeraApp2 = ( props ) => {

    const saludo = 'Hola mundo, const';

    const objeto = {            // Los arrays se concatenan pero los objetos no se pueden renderizar a menos que se use
        nombre: 'Cristian',     // Los mostrado debajo
        edad: 26
    };

    console.log(props);

    return (
        <>
            <h1>{ saludo }</h1>
            <pre>{ JSON.stringify(objeto, null, 3) }</pre>
            <p>Mi primera aplicación en React</p>

            <h2>{ props.saludo }</h2>
        </>
    );

}

export default PrimeraApp2;
