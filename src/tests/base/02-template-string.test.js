// El import debajo es para tener ayuda del editor
// import '@testing-library/jest-dom';

import { getSaludo } from '../../bases/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe de retornar Hola, Cristian', () => {

        const nombre = 'Cristian';

        const saludo = getSaludo(nombre);
        
        expect( saludo ).toBe( 'Hola, ' + nombre );

    })

    test('getSaludo debe de retornar Hola, Aurora si no hay un argumento en el nombre', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola, Aurora');

    })
    
})


