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

const PrimeraApp2 = () => {

    return (
        <>
            <h1>Hola mundo</h1>
            <p>Mi primera aplicación en React</p>
        </>
    );

}

export default PrimeraApp2;
